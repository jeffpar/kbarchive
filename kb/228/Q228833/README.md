---
layout: page
title: "Q228833: Desktop Applications for Microsoft Visual Basic 6.0 Training Kit"
permalink: /kb/228/Q228833/
---

## Q228833: Desktop Applications for Microsoft Visual Basic 6.0 Training Kit

{% raw %}

	Article: Q228833
	Product(s): Microsoft Press
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdocfix kbdocerr
	Last Modified: 14-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Desktop Applications for Microsoft Visual Basic 6.0 MCSD Training Kit ISBN 0-7356-0620-X 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains comments, corrections, and information about known errors
	relating to the Microsoft Press book Desktop Applications for Microsoft Visual
	Basic 6.0 Training Kit, ISBN 0-7356-0620-X.
	
	The following topics are covered:
	
	- Page 25: Labs 1 And 2 Do Not Contain The Partial Subfolder
	
	- Page 39: Syntax error
	
	- Page 44: Text Correction
	
	- Page 60: Step 5: Add Code To cmdClear_Click Event
	
	- Page 67: Code Correction
	
	- Page 69: "Description" Should Be "Caption"
	
	- Page 74: Correction To Form_MouseDown Event Code
	
	- Page 75: mnuOptions_Click Should Be mnuOptionsToolbar_Click
	
	- Page 76: Figure 2.20 Should Show A Value In Index
	
	- Page 77: Incorrect Reference to Hide Method
	
	- Page 82: Form1's Caption Should Be "Hotel Reservations"
	
	- Page 98: Incorrect Information About KeyPreview Property
	
	- Page 101: Incomplete Step
	
	- Page 102: In Step 1 Change cmdClick_Click to cmdOK_Click
	
	- Page 114: In Step 11 Change cmdOk to cmdHelp
	
	- Pages 119 and 120: Missing "End If" Statement
	
	- Page 123: Correction To Code
	
	- Page 168: You May Not Receive A Run-Time Error
	
	- Page 181: Typo
	
	- Page 187: Punctuation Error
	
	- Page 218: Typo
	
	- Page 223: Correct Code After First Paragraph
	
	- Page 235: Know Is Misspelled
	
	- Page 237: Rsvn.mdb Database Located In The \Labs Folder
	
	- Page 250: Dim Statement Should Match Set Statement
	
	- Page 257-258: Corrections To Sample Code
	
	- Page 259: Code Changes In Step 7
	
	- Page 269: Step 1 Should Read "click Add Data Environment"
	
	- Page 272: Step 2 Should Read "click Add Data Environment"
	
	- Page 276: Correction To Lab 8
	
	- Page 278: mnuCustSearch_Click Should be mnuGuestSearch_Click
	
	- Page 287: Changes In Second Paragraph of Lesson Summary
	
	- Pages 304-305: Code Changes Needed For Sample To Work
	
	- Pages 307: Use Regsvr32 To Register ActiveX DLLs
	
	- Page 318: Text Error In Lesson 1 Overview
	
	- Page 329: Container Should Be User Control
	
	- Page 363: Chapter 10, Exercise 2 Is Missing Two Lines Of Code
	
	- Page 382: Typographical Error In Step 11
	
	- Page 389: Step 8 Should Come After Step 9
	
	- Page 405: Minor Correction To Step 10
	
	- Page 410: Typo
	
	- Page 427: Typo
	
	- CD-ROM: Chapter 9, Self-Check, Error In Question 6
	
	MORE INFORMATION
	================
	
	Page 25: Labs 1 And 2 Do Not Contain The Partial Subfolder
	----------------------------------------------------------
	
	On page 25, in the first paragraph under the Using The Supplemental Course
	Material Lab Files subheading:
	
	Change:
	"In each of these folders are two additional subfolders, \Partial and
	\Solution."
	
	To:
	"In most of these folders are two additional subfolders, \Partial and
	\Solution."
	
	
	Page 39: Syntax error
	---------------------
	
	On page 39, the first paragraph contains a syntax error.
	
	Change:
	"Variables are assigned to initial values, and controls may be moved or..."
	
	To:
	"Initial values are assigned to variables, and controls may be moved or..."
	
	
	Page 44: Text Correction
	------------------------
	
	On page 44, in the first sentence, change the word events to methods.
	
	Change:
	"Figure 2.3 illustrates the actions of the four form events:"
	
	To:
	"Figure 2.3 illustrates the actions of the four form methods:"
	
	
	Page 60: Step 5: Add Code to cmdClear_Click Event
	-------------------------------------------------
	
	On page 60, step 5 should read:
	"Add the following code to the cmdClear_Click event:"
	
	
	Page 67: Code Correction
	------------------------
	
	On page 67, the second paragraph states that the code will display the Customer
	ID in the third panel. Therefore, the index value for the Panel should be 3
	instead of 1. Make the following correction to the line of code that appears
	immediately after the second paragraph.
	
	Change:
	
	  "staDataEntry.Panels(1) Text  = "You are on record: " & txtFields(0).Text"
	
	To:
	
	  "staDataEntry.Panels(3) Text  = "You are on record: " & txtFields(0).Text"
	
	
	Page 69: "Description" Should Be "Caption"
	------------------------------------------
	
	On page 69 there is an error referring to properties. Change:
	"The Description property is the text that appears on the menu bar at run time."
	
	To:
	"The Caption property is the text that appears on the menu bar at run time."
	
	
	Page 74: Correction To Form_MouseDown Event Code
	------------------------------------------------
	
	On page 74, in step 2,
	
	Change:
	
	  "Private Sub Form_MouseDown (Button As Integer, _
	  	Shift As, X As Single, Y As Single)"
	
	To:
	
	  "Private Sub Form_MouseDown (Button As Integer, _
	  	Shift As Integer, X As Single, Y As Single)"
	
	
	Page 75: mnuOptions_Click Should Be mnuOptionsToolbar_Click
	-----------------------------------------------------------
	
	On page 75, under "Displaying a Check Mark on a Menu Item", mnuOptions_Click
	should be mnuOptionsToolbar_Click.
	
	Change:
	
	  Private Sub mnuOptions_Click ()
	
	To:
	
	  Private Sub mnuOptionsToolbar_Click ()
	
	
	Page 76: Figure 2.20 Should Show a Value in Index
	-------------------------------------------------
	
	On page 76, Figure 2.20 should show a value in the box labeled index, as the
	paragraph above it indicates that each item must have a unique index property.
	
	To properly illustrate menu control arrays this figure should show a menu item
	which has an index value.
	
	
	Page 77: Incorrect Reference to Hide Method
	-------------------------------------------
	
	On page 77, in the second paragraph under the Note section, the information
	indicates that you can use the Hide method to hide menu items. This information
	should be deleted from the note.
	
	Change:
	"To hide menu items created at run time, use the Hide method or set the control's
	Visible property to False"
	
	To:
	"To hide menu items created at run time, set the control's Visible property to
	False"
	
	
	Page 82: Form1's Caption Should Be "Hotel Reservations"
	-------------------------------------------------------
	
	On page 82, change the value for Form1's Caption from "Chateau St. Mark Hotel" to
	"Hotel Reservations".
	
	
	Page 98: Incorrect Information About KeyPreview Property
	--------------------------------------------------------
	
	On page 98, in the first paragraph,
	
	Change:
	"By setting a form's KeyPreview property to True, the control that has focus will
	have its keyboard event triggered instead of its form event."
	
	To:
	"By setting a form's KeyPreview property to True, the form receives keyboard
	events first and then the active control. By setting it to False, which is the
	default, the active control receives keyboard events; the form doesn't."
	
	
	Page 101: Incomplete Step
	-------------------------
	
	On page 101, please add the the following note after step 4:
	
	"Note that you must set the form's KeyPreview property to True."
	
	
	Page 102: In Step 1 Change cmdClick_Click to cmdOK_Click
	--------------------------------------------------------
	
	On page 102, step 1,
	
	Change:
	"1. Add the following code to the cmdClick_Click event."
	
	To:
	"1. Add the following code to the cmdOK_Click event."
	
	
	Page 114: In Step 11 Change cmdOk to cmdHelp
	--------------------------------------------
	
	On page 114, in step 11 set the CausesValidation property of the cmdHelp control
	to False. This will cause the frmAbout to load when the Help button is clicked
	in step 18.
	
	Change:
	11. In the Properties window, set the CausesValidation property of the cmdOk
	control to False.
	
	To:
	11. In the Properties window, set the CausesValidation property of the cmdHelp
	control to False.
	
	
	Pages 119 and 120: Missing "End If" Statement
	---------------------------------------------
	
	On page 119, in the two sample code sections, add "End If" above the "Next ctl"
	statement. And on page 120, in the top sample code section, add "End If" above
	the "Next ctl" statement.
	
	
	Page 123: Correction To Code
	----------------------------
	
	The sample code does not produce the desired results. One of the purposes of the
	code is to make sure payment type had been selected (i.e. one of the option
	buttons had been selected), and that if a payment type is not selected a message
	appears stating "Payment type is required".
	
	In order to produce the desired results change the ElseIf statement for the
	OptionButton as follows:
	
	  ElseIf TypeOf ctl Is OptionButton Then
	     If grpPmtType(0).Value = False And grpPmtType(1).Value = False And grpPmtType(2).Value = False Then
	          MsgBox "Payment type is required."
	          Exit Sub
	     End If 
	
	
	Page 168: You May Not Receive A Run-Time Error
	----------------------------------------------
	
	On page 168, Step 1 states that a run-time error is to be generated as
	illustrated in Figure 5.4. Depending on your system configuration, this run-time
	error may or may not be generated.
	
	
	Page 181: Typo
	--------------
	
	On page 181, in the second paragraph after "Creating Components from Objects",
	change:
	"...to create an object to access an component:"
	
	To:
	"...to create an object to access a component:"
	
	
	Page 187: Punctuation Error
	---------------------------
	
	On page 187, under the topic "Declaring Custom Events", the fourth sentence has a
	premature period.
	
	Change:
	" ... event procedure containing code to respond.to that event."
	
	To:
	" ... event procedure containing code to respond to that event."
	
	
	Page 218: Typo
	--------------
	
	On page 218, in the second to last sentence, change:
	"Set the RecordSource to a n SQL string..."
	
	To:
	"Set the RecordSource to an SQL string..."
	
	
	Page 223: Correct Code After First Paragraph
	--------------------------------------------
	
	On page 223, change the two lines of code after the first paragraph to match the
	practice exercise that starts on this page.
	
	Code should read:
	
	  Set txt1.DataSource = Adodc1
	  txt1.DataField = CompanyName
	
	
	Page 235: Know Is Misspelled
	----------------------------
	
	On page 235, in Coding The ADO Data Control subheading, in the first bullet, in
	the second sentence, know is misspelled.
	
	Change:
	"...you can check the Recordset object's BOF and EOF properties to knoe if you
	are at the beginning or end of the Recordset."
	
	To:
	"...you can check the Recordset object's BOF and EOF properties to know if you
	are at the beginning or end of the Recordset."
	
	
	Page 237: Rsvn.mdb Database Located In The \Labs Folder
	-------------------------------------------------------
	
	On page 237, in step 2 the location of the Rsvn.mdb database is incorrect.
	
	Change:
	"...connect to the Rsvn.mdb database located in the \Labs\Lab07 folder."
	
	To:
	"...connect to the Rsvn.mdb database located in the \Labs folder."
	
	
	Page 250: Dim Statement Should Match Set Statement
	--------------------------------------------------
	
	On page 250, in the code section for cmdConnect_Click, step 5, the variable in
	the Dim statement should match the variable in the Set statement.
	
	Change:
	Dim CN As Connection
	
	To:
	Dim cnData As Connection
	
	
	Page 257-258: Corrections To Sample Code
	----------------------------------------
	
	The code on page 257-258 will create run-time errors due to inconsistencies in
	the variables used. The following modifications will allow you to run the code
	using the Northwind sample database.
	
	  Dim cnNorthwind As Connection
	  Dim comSalesByYear As Command
	  Dim rsSales As Recordset
	  Dim prmBeginningDate As Parameter
	  Dim prmEndingDate As Parameter
	  Set cnNorthwind = New Connection
	  Set comSalesByYear = New Command
	
	  cnNorthwind.ConnectionString = "Provider=Microsoft.Jet.OLEDB.3.51;" & _
	  "Data Source = C:\Program Files\Microsoft Visual Studio\VB98\nwind.mdb"
	  cnNorthwind.Open
	
	  comSalesByYear.CommandType = adCmdUnknown
	  comSalesByYear.CommandText = "[Sales by Year]"
	
	  Set prmBeginningDate = comSalesByYear.CreateParameter("BeginningDate", adDate, adParamInput)
	  comSalesByYear.Parameters.Append prmBeginningDate
	  Set prmEndingDate = comSalesByYear.CreateParameter("EndingDate", adDate, adParamInput)
	  comSalesByYear.Parameters.Append prmEndingDate
	
	  prmBeginningDate.Value = "1/1/95"
	  prmEndingDate.Value = "12/1/95"
	
	  comSalesByYear.ActiveConnection = cnNorthwind
	
	  Set rsSales = comSalesByYear.Execute
	
	
	Page 259: Code Changes In Step 7
	--------------------------------
	
	On page 259, the code written in step 7 will not run. There are errors in the
	ConnectionString.
	
	It should be written as follows:
	
	  cnNorthwind.ConnectionString = "Provider=Microsoft.Jet.OLEDB.3.51;" & _
	  "Data Source = C:\Program Files\Microsoft Visual Studio\VB98\nwind.mdb"
	  cnNorthwind.Open
	
	On the same page, in step 5, you declare two module-level variables. In step 7
	the two variable are declared locally. It is not necessary to declare these
	variables in both places.
	
	
	Page 269: Step 1 Should Read "click Add Data Environment"
	---------------------------------------------------------
	
	On page 269 in Step 1, change:
	"On the Project menu, point to More ActiveX Designers, and click Data
	Environment."
	
	To:
	"On the Project menu, click Add Data Environment."
	
	
	Page 272: Step 2 Should Read "click Add Data Environment"
	---------------------------------------------------------
	
	On page 272, in Step 2 under the section titled "To Create a Data Environment",
	change:
	"On the Project menu, point to More ActiveX Designers, and click Data
	Environment."
	
	To:
	"On the Project menu, click Add Data Environment."
	
	
	Page 276: Correction To Lab 8
	-----------------------------
	
	On page 276, in the first paragraph, change:
	
	"You can continue to work with the files you created in Lab 7, or you can use the
	files provided for you in the \Labs\Lab08\Partial folder."
	
	To:
	
	"You will start from the files in the \Labs\Lab08\Partial folder."
	
	Note: Lab 7 demonstrates using the ADO Data Control. If you perform the steps in
	Lab 8 using the code from Lab 7, there is a possibility that the database can be
	modified. Therefore, it would be better to perform the steps in Lab 8 starting
	from the code in the Lab08\Partial folder, which does not use the ADO Data
	Control.
	
	
	Page 278: mnuCustSearch_Click Should be mnuGuestSearch_Click
	------------------------------------------------------------
	
	On page 278, steps 1 and 2 refer to mnuCustSearch_Click event. These steps should
	refer to mnuGuestSearch_Click event.
	
	Instructions for creating the menu structure, on page 88, indicate that this menu
	item was named mnuGuestSearch.
	
	Also in step 2, the code does not bind the fields it simply places information
	from the record into the text fields on the form.
	
	Change the first sentence in step 2 to read:
	"Next, write the code necessary to place fields from the record into the text
	fields on frmReservation."
	
	
	Page 287: Changes In Second Paragraph of Lesson Summary
	-------------------------------------------------------
	
	The second sentence, in the last paragraph, on page 287 should be modified to
	read:
	"Use Regsvr32 to register ActiveX DLLs and Regserver to register ActiveX EXEs."
	
	
	Pages 304-305: Code Changes Needed For Sample To Work
	-----------------------------------------------------
	
	On pages 304 and 305, change the sample code as follows.
	
	On page 304, in step 7, declare both EnumChildWindows and GetWindowText as
	Public.
	
	On page 305, change the callback function from:
	Public Function EnumCallBack( )
	To:
	Public Function EnumCallBack(ByVal hWndChild As Long, ByVal lParam As Long) As
	Boolean
	
	
	Pages 307: Use Regsvr32 To Register ActiveX DLLs
	------------------------------------------------
	
	Page 307, second paragraph, second sentence:
	
	Change:
	"Use Regsvr32 to register both ActiveX DLLs and Active EXEs."
	
	To:
	"Use Regsvr32 to register ActiveX DLLs."
	
	
	Page 318: Text Error In Lesson 1 Overview
	-----------------------------------------
	
	Page 318, first paragraph, third sentence:
	
	Change:
	"Visual Basic lets you create three types of COM components: ActiveX controls,
	COM executable programs and DLLs, and ActiveX documents, and."
	
	To:
	"Visual Basic lets you create three types of COM components: ActiveX controls,
	COM executable programs and DLLs, and ActiveX documents."
	
	
	Page 329: Container Should Be UserControl
	-----------------------------------------
	
	On page 329, under "Initializing Property Values in the InitProperties Event",
	
	Change:
	"The first time you place an instance of a control on a container, the container
	receives the InitProperties event."
	
	To:
	"The first time you place an instance of a control on a container, the
	UserControl object receives the InitProperties event."
	
	
	Page 363: Chapter 10, Exercise 2 Is Missing Two Lines Of Code
	-------------------------------------------------------------
	
	On page 363, two lines of code are missing. Add the following code to the end of
	the Form_Load event procedure for frmReservations, Step 1:
	
	  txtRate.Datafield = "Rate"
	  FillControls
	
	
	Page 382: Typographical Error In Step 11
	----------------------------------------
	
	On page 382 in step 11 there is an error in the second sentence.
	
	Change:
	"In the Project Properties dialog box, select DHTMLPage1 as the Startup
	Component, then click OK."
	
	To:
	"In the Project Properties dialog box, select DHTMLPage1 as the Start Component,
	then click OK."
	
	
	Page 389: Step 8 Should Come After Step 9
	-----------------------------------------
	
	On page 389, step 9 cannot be performed if the application is left running in the
	background as instructed in step 8. Step 8 should be carried out after step 9
	has been completed.
	
	
	Page 405: Minor Correction To Step 10
	-------------------------------------
	
	Page 405, Step 10:
	
	Change:
	"Review the summary report provided by Visual Basic and click OK."
	
	To:
	"Review the summary report provided by Visual Basic and click Close."
	
	
	Page 410: Typo
	--------------
	
	On page 410, in the second paragraph from the top, in the 3rd sentence, change:
	"It does not cover is how to create..."
	
	To:
	"It does not cover how to create..."
	
	or:
	"What is does not cover is how to create..."
	
	
	Page 427: Typo
	--------------
	
	On page 427, in the 3rd Paragraph from the bottom, in the second sentence,
	change:
	"...that should be shared that does not the correct settings..."
	
	To:
	"...that should be shared that does not have the correct settings..."
	
	
	CD-ROM: Chapter 9, Self-Check, Error In Question 6
	--------------------------------------------------
	
	There is a typo in the Self-check test on the CD-ROM, in Chapter 9, question 6.
	The question reads as follows:
	
	The following statements are used to call the SquareIt procedure:
	
	  	Sum = 4
	  	SquareIt Sum
	
	And the SquareIt procedure looks like this:
	
	  	Sub SquareIt(num)
	  	   num = num * num
	  	End Sub
	
	After the procedure call, what is the value of the Sum variable?
	A. 4.
	B. 8.
	C. 16.
	D. 0.
	
	This test gives A as the answer and refers to parenthesis around the argument
	Sum. There are no parenthesis around the argument sum.
	
	Either the parenthesis should be added or the correct answer should be changed.
	
	
	Microsoft Press is committed to providing informative and accurate books. All
	comments and corrections listed above are ready for inclusion in future
	printings of this book. If you have a later printing of this book, it may
	already contain most or all of the above corrections.
	
	Additional query words: 0-7356-0620-X TKBOOK VB
	
	======================================================================
	Keywords          : kbdocfix kbdocerr 
	Technology        : kbMSPressSearch
	Version           : :
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
