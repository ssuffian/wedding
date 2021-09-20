/*
Two step process. 

First step is to run 'submitInitialFormResponses' which takes the data from dataSheetName and
creates form entries for reach row.

Second step is to run 'assignEditUrls' which adds the URls to a column.
*/
// Form URL
var formId = '1jfScUHbSqf2QAwaoYFPAeU6P0VuDyv0HnfyBAoZpyzA'
// Sheet name used as destination of the form responses
var dataSheetName = 'Invitations';
var responseSheetName = 'Form Responses 1';
var responseNameColRange = 'D:D'
var responseEmailColRange = 'C:C'

/*
 * Name of the column to be used to hold the response edit URLs 
 * It should match exactly the header of the related column, 
 * otherwise it will do nothing.
 */
var urlColumnName = 'Edit Url';

var emailColName = 'Email Address'
var nameColName = 'Name'
// Responses starting row
var startRow = 2;

function submitInitialFormResponses(){
  var activeSheet = SpreadsheetApp.getActiveSpreadsheet()
  var tab = activeSheet.getSheetByName(dataSheetName);
  var headersRange = tab.getRange(1, 1, 1, tab.getLastColumn()).getValues(); 
  var headers = headersRange[0]
  var nameColIndex = headers.indexOf(nameColName)
  var emailColIndex = headers.indexOf(emailColName)

  var emailsDict = activeSheet.getSheetByName(responseSheetName).getRange(responseEmailColRange).getValues();
  var emails = emailsDict.map(function(row) {return row[0];});
  var namesDict = activeSheet.getSheetByName(responseSheetName).getRange(responseNameColRange).getValues();
  var names = namesDict.map(function(row) {return row[0];});

  var data = tab.getDataRange().getValues();
  var form = FormApp.openById(formId);
  var formItems = form.getItems()
  console.log("Found " + data.length + " items.")
  for(var i = startRow-1; i < data.length; i++) {
 
      var formResponse = form.createResponse();
      var name = data[i][nameColIndex];
      var email = data[i][emailColIndex];
      if(emails.indexOf(email) == -1 && names.indexOf(name) == -1) {
        var formResponse = form.createResponse();
        for(var j=0; j< formItems.length; j++){
          var item = formItems[j]
          var itemTitle = item.getTitle()
          var itemIndex = headers.indexOf(itemTitle)
          var itemValue = data[i][itemIndex]
          var itemType = item.getType().toString()
          // Cast the generic item to the text-item class.
          console.log("Adding item", itemValue, itemValue.length)
          if(itemValue.length > 0){
            if (itemType === 'TEXT') {
              var response = item.asTextItem().createResponse(itemValue)
            } //else if(itemType === 'MULTIPLE_CHOICE') {
             // var response = item.asMultipleChoiceItem().createResponse(itemValue).getResponse()
            //}
            formResponse = formResponse.withItemResponse( response );
          }
        }
        
        formSubmitted = formResponse.submit()
        //Utilities.sleep(500);// pause in the loop for 200 milliseconds
      } else {
          console.log("Already found " + email + " in list of emails.")
        }
    
      //var editResponseUrl = formSubmitted.getEditResponseUrl();
      //sheet.getRange(i+1, columnIndex+1).setValue(editResponseUrl);
      
  }
}

function assignEditUrls() {
  var form = FormApp.openById(formId);
    //enter form ID here

  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(responseSheetName);

  //Change the sheet name as appropriate
  var data = sheet.getDataRange().getValues();
  var headersRange = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues(); 
  var headers = headersRange[0]
  var urlCol = headers.indexOf(urlColumnName) + 1;

  var responses = form.getResponses();
  var timestamps = [], urls = [], resultUrls = [];
  
  for (var i = 0; i < responses.length; i++) {
    timestamps.push(responses[i].getTimestamp().setMilliseconds(0));
    urls.push(responses[i].getEditResponseUrl());
  }
  for (var j = 1; j < data.length; j++) {

    resultUrls.push([data[j][0]?urls[timestamps.indexOf(data[j][0].setMilliseconds(0))]:'']);
  }
  sheet.getRange(2, urlCol, resultUrls.length).setValues(resultUrls);  
}

