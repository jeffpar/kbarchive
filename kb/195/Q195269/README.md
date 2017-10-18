---
layout: page
title: "Q195269: Visual Basic 6 Step by Step Comments and Corrections"
permalink: kb/195/Q195269/
---

## Q195269: Visual Basic 6 Step by Step Comments and Corrections

	Article: Q195269
	Product(s): Microsoft Press
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdocfix kbdocerr
	Last Modified: 21-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Microsoft Visual Basic Professional 6.0 Step by Step ISBN 1-57231-809-0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains comments, corrections, and information about known errors
	relating to the Microsoft Press book Microsoft Visual Basic Professional 6.0
	Step by Step, ISBN 1-57231-809-0.
	
	The following topics are covered:
	
	- Page iv: Changes To "Michael's Top 10 Web Sites" List
	
	- Page xvii: Support URL Has Changed
	
	- Page xxv: Support URL Has Changed
	
	- Page 35: Error In Step 2
	
	- Page 91: "Menu List" Should Be "Dialog Box"
	
	- Page 118: Program Statements Are Covered In Lesson 2
	
	- Page 135: Incorrect Formula
	
	- Page 197: Error In Code Sample
	
	- Page 225: Use Resume With Label Rather Than Resume Next With Label
	
	- Page 252: Incorrect Forward Reference
	
	- Page 307: Explanation Of Dimensions Technically Incorrect
	
	- Page 335: Error In Sample Code Table
	
	- Page 361: Delete Underline Character
	
	- Page 392: Code Modification For Excel 2000 Compatibility
	
	- Page 467: Problems Loading Project in Lesson 18
	
	- Page 536-551: MyDHTML7 May Display An Error When Executed
	
	- Page 537: Steps For Deleting An Element May Not Work
	
	- Page 539: Coin Image May Display Blue Border
	
	- Page 548: Warning May Appear When Using Internet Explorer 5.0
	
	- Page 552-553: Correction To Lesson 22 Quick Reference
	
	- Page 572: Correct Path
	
	- Page 594-597: Revised Instructions For Creating Custom Data Environment
	
	- Last Page: Correction To Software Requirements
	
	MORE INFORMATION
	================
	
	Page iv: Changes To "Michael's Top 10 Web Sites" List
	-----------------------------------------------------
	
	Page iv contains "Michael's Top 10 Web Sites"
	
	The first site is listed as:
	
	  http://www.apexsc.com/vb/
	
	The URL for the site has actually changed to:
	
	  http://www.cgvb.com/
	
	
	Page xvii: Support URL has changed
	----------------------------------
	
	Page xvii: Support URL for Microsoft Press has changed.
	
	Change:
	
	  http://mspress.microsoft.com/support/support.htm
	
	To:
	
	  http://mspress.microsoft.com/support/
	
	
	Page xxv: Support URL has changed
	---------------------------------
	
	Page xxv: Support URL for Microsoft Press has changed.
	
	Change:
	
	  http://mspress.microsoft.com/support/support.htm
	
	To:
	
	  http://mspress.microsoft.com/support/
	
	
	Page 35: Error In Step 2
	------------------------
	
	There is an error in step 2 on page 35.
	
	Change:
	"Type End, and press the Down arrow key."
	
	To:
	"Type End and press the Down arrow key."
	
	
	Page 91: "menu list" should be "dialog box"
	-------------------------------------------
	
	Change:
	"The caption and name for the Time command appear in the menu list"
	
	To:
	"The caption and name for the Time command appear in the dialog box"
	
	
	Page 118: Program Statements Are Covered in Lesson 2
	----------------------------------------------------
	
	On page 118, in the first paragraph it states that you learned about program
	statements in Lesson 1. Actually, program statements were not introduced until
	Lesson 2.
	
	Change:
	"As you learned in Lesson 1, a line of code in a Visual Basic program is called a
	program statement."
	
	To:
	"As you learned in Lesson 2, a line of code in a Visual Basic program is called a
	program statement."
	
	
	Page 135: Incorrect Formula
	---------------------------
	
	Page 135; two lines above the subheading Working With Visual Basic Operators:
	
	Change:
	
	  Area=2Pi r^2
	
	To:
	
	  Area=Pi r^2
	
	
	Page 197: Error In Code Sample
	------------------------------
	
	Page 197 contains a code error in the "Lesson 7 Quick Reference" section
	
	Change:
	"If InpName = "Trotsky" Then ExitFor"
	
	To:
	"If InpName = "Trotsky" Then Exit For"
	
	
	Page 225: Use Resume with Label Rather Than Resume Next with Label
	------------------------------------------------------------------
	
	On page 225, in the last sentence of the first paragraph change "Resume Next" to
	"Resume".
	
	Change:
	"A good way to skip over the error handler is to use the Exit Sub Statement; or
	you can use Resume Next with a label that directs Visual Basic to continue
	executing below the error handler."
	
	To:
	"A good way to skip over the error handler is to use the Exit Sub Statement; or
	you can use Resume with a label that directs Visual Basic to continue executing
	below the error handler."
	
	
	Page 252: Incorrect Forward Reference
	-------------------------------------
	
	On page 252, the parenthetical statement that concludes the second paragraph has
	an incorrect forward reference.
	
	Change:
	"(The Move method also lets you adjust the height and width of an object. See the
	One Step Further section later in this lesson for an example.)"
	
	To:
	"(The Move method also lets you adjust the height and width of an object. See
	Expanding and Shrinking Objects While a Program is Running later in this lesson
	for an example.)"
	
	
	Page 307: Explanation Of Dimensions Technically Incorrect
	---------------------------------------------------------
	
	Chapter 11, page 307, "Declaring a Fixed-Size Array"
	
	The syntax for a fixed-size array is given as:
	
	     Public ArrayName(Dim1Elements, Dim2Elements, ...) As DataType
	
	The explanation indicates that "Dim1Elements is the number of elements in the
	first dimension of the array, and Dim2Elements is the number of elements in the
	second dimension of the array (additional dimensions can be included)."
	
	Since arrays in Visual Basic start with zero, Dim1Elements and Dim2Elements are
	the number of elements plus one. These statements should be reworded to be more
	accurate.
	
	Change to:
	
	  "Dim1Elements is used to indicate the number of elements in the first
	  dimension of the array."
	
	  "Dim2Elements is used to indicate the number of elements in the second
	  dimension of the array (additional dimensions can be included)."
	
	
	Page 335: Error In Sample Code Table
	------------------------------------
	
	The table on page 335 contains an incorrect code sample.
	
	Change:
	
	  start% = InStr("bob", "bobby")
	
	To:
	
	  start% = InStr("bobby", "bob")
	
	
	Page 361: Delete Underline Character
	------------------------------------
	
	On page 361 in step 7, the underline character (_) at the end of the first code
	line should be deleted. The prompt string continues to the next line and should
	be typed into Visual Basic as one line.
	
	Change:
	
	     prompt$ = "Enter the new record, and then click _
	
	To:
	
	     prompt$ = "Enter the new record, and then click
	
	
	Page 392: Code Modification For Excel 2000 Compatibility
	--------------------------------------------------------
	
	On page 392, the 7th line of sample code will need to be modified to be
	compatible with Microsoft Excel 2000. All the Microsoft Office Automation
	examples were written originally for Microsoft Office 97, which was the current
	version when Microsoft Visual Basic 6.0 was released.
	
	Change:
	
	  Set xl = CreateObject("Excel.Sheet")
	
	To:
	
	  Set xl = CreateObject("Excel.Application")
	
	
	Page 467: Problems Loading Project in Lesson 18
	-----------------------------------------------
	
	On page 467, in Lesson 18: "Run the FreeMem program", when opening the FreeMem
	project file, the mscomctl.ocx file will not load. When you proceed with step
	one on page 467, you will receive a message that says that the mscomctl.ocx
	"could not be loaded--continue loading project?"
	
	WORKAROUND:
	When you receive the message, click Yes. An "error during load" message will
	appear. Click OK.
	
	With the FreeMem project open, select project from the File menu, and then click
	Components. In the Components window, make sure the Controls tab is selected,
	scroll down to Microsoft Windows Common Control 6.0 and click the check box to
	select it. The file location should read, C:Windows\System\mscomctl.ocx. Click
	Apply and then Close. The progress bar is added to the tool box.
	
	In the Project window double-click Form1 (FreeMem.frm) to view the object. You
	will receive another "error during load" message. Click OK. Delete the first
	pictureBox named pgbPhysMem and replace it with a progress bar of the same
	name.
	
	Delete the second pictureBox named pgbVirtMem and replace it with a progress bar
	of the same name.
	
	Continue the exercise from step 2 on page 467.
	
	
	Page 536-551: MyDHTML7 May Display An Error When Executed
	---------------------------------------------------------
	
	Page 536-551, Lesson 22:
	If you attempt to run the MyDHTML7 application, you may experience an error such
	as "Type Mismatch". To avoid any errors, perform the following steps:
	
	1. Start Lesson 22 using the project you created in Lesson 21.
	
	2. On Page 545 change:
	
	   Result.innerText = "Wins: " & GetProperty(BaseWindow.Document, "Wins")
	
	  To:
	
	     Result.innerText = "Wins: " & GetProperty(Document, "Wins")
	
	3. On page 546 change:
	
	        x = GetProperty(BaseWindow.Document, "Wins")
	        Result.innerText = "Wins: " & x + 1
	        PutProperty BaseWindow.Document, "Wins", x + 1
	     End If
	     End Function
	
	  To:
	
	        x = GetProperty(Document, "Wins")
	        Result.innerText = "Wins: " & x + 1
	        PutProperty Document, "Wins", x + 1
	     End If
	     End Function
	
	4. On page 547 change:
	
	     PutProperty BaseWindow.Document, "Wins", x + 1
	
	  To:
	
	     PutProperty Document, "Wins", x + 1
	
	MORE INFORMATION Lesson 22 was written with an early version of Visual Basic 6.0.
	The released version of Visual Basic 6.0 generates slightly different code for
	DHTML applications than the pre-release version. For example, the pre-release
	and released versions of PutProperty and GetProperty have different parameters.
	
	Pre-release version:
	
	  Sub PutProperty(strName As String, vntValue As Variant)
	  Function GetProperty(strName As String) As Variant
	
	Released version:
	
	  Sub PutProperty(objDocument As HTMLDocument, strName As String, vntValue As Variant, Optional Expires As Date)
	  Function GetProperty(objDocument As HTMLDocument, strName As String) As Variant
	
	Depending on the book printing, the code in the book that calls PutProperty and
	GetProperty is different.
	Printing 1-2:
	
	     Result.innerText = "Wins: " & GetProperty("Wins")
	     x = GetProperty("Wins")
	     PutProperty "Wins", x + 1
	
	Printing 3-9:
	
	     Result.innerText = "Wins: " & GetProperty(BaseWindow.Document, "Wins")
	     x = GetProperty(BaseWindow.Document, "Wins")
	     PutProperty BaseWindow.Document, "Wins", x + 1
	
	Printing 10+:
	
	     Result.innerText = "Wins: " & GetProperty(Document, "Wins")
	     x = GetProperty(Document, "Wins")
	     PutProperty Document, "Wins", x + 1
	
	Depending on the book printing, the code on the CD will be different.
	Printing 1-9:
	
	     Sub PutProperty(strName As String, vntValue As Variant)
	     Function GetProperty(strName As String) As Variant
	     Result.innerText = "Wins: " & GetProperty("Wins")
	     x = GetProperty("Wins")
	     PutProperty "Wins", x + 1
	
	Printing 10+:
	
	     Sub PutProperty(objDocument As HTMLDocument, strName As String, vntValue As Variant, Optional Expires As Date)
	     Function GetProperty(objDocument As HTMLDocument, strName As String) As Variant
	     Result.innerText = "Wins: " & GetProperty(Document, "Wins")
	     x = GetProperty(Document, "Wins")
	     PutProperty Document, "Wins", x + 1
	
	Due to a change in the browser object model, the code "Basewindow.Document"
	generates an error in Internet Explorer 5.0. Using just "Document" should work
	correctly in Internet Explorer 4.0, Internet Explorer 5.0, and Internet Explorer
	5.5.
	
	Whether Lesson 22 will run correctly without modification depends on the
	following conditions:
	
	1. The book printing.
	
	2. Whether Lesson 22 was started using the reader's Lesson 21 project or the
	  Lesson 21 project on the CD.
	
	3. The version of Internet Explorer being used.
	
	
	Page 537: Steps For Deleting An Element May Not Work
	----------------------------------------------------
	
	On page 537, the steps for deleting a text element on the page may not work.
	
	Change:
	
	1. Click the Blank1 element in the tree view pane.
	  The element is selected and is highlighted in both the tree view pane and the
	  right pane.
	
	2. Press the Del key.
	  The text element is deleted permanently from the page.
	
	To:
	
	1. Click the Blank1 element in the tree view pane.
	  The element is selected.
	
	2. Right-click the Blank1 element and select Delete from the shortcut menu.
	  The text element is deleted permanently from the page.
	
	
	Page 539: Coin Image May Display Blue Border
	--------------------------------------------
	
	Once you have completed Step 3, on page 539, you may notice that the coin image
	displays with a blue border. To correct this, you will need to set the Border
	property for the Image element to 0.
	
	The following steps will correct the problem.
	
	1. Make sure the Image element is selected.
	
	2. In the Properties window, scroll to the Border property, and click the text
	  box to the right of the property.
	
	3. Type 0 in the Border property and press Enter to ensure the Image element
	  does not display a border.
	
	4. Click the Save Project button on the Visual Basic toolbar to save your
	  changes.
	
	
	Page 548: Warning May Appear When Using Internet Explorer 5.0
	-------------------------------------------------------------
	
	The following note should be added to the bottom of page 548:
	
	Note: If you are using Internet Explorer version 5.0 or later, you may see a
	dialog box warning you that the ActiveX control on the current page may be
	unsafe. Click Yes to allow the page to run--the ActiveX controls you are using
	are fully tested and safe.
	
	
	Page 552-553: Correction To Lesson 22 Quick Reference
	-----------------------------------------------------
	
	On page 552, at the bottom of the page, change:
	PutProperty "Wins", x + 1
	
	To:
	PutProperty Document, "Wins", x + 1
	
	On page 553, at the top of the page, change:
	x = GetProperty("Wins")
	
	To:
	x = GetProperty(Document, "Wins")
	
	
	Page 572: Correct Path
	----------------------
	
	On page 572, in the shaded box, the last paragraph provides a pathname to a
	database. However, the 0 in "Less03" does not appear in this pathname and should
	be added to match the actual path to the database file on the practice CD.
	
	Change:
	C:\Vb6Sbs\Less3\Students.mdb
	
	To:
	C:\Vb6Sbs\Less03\Students.mdb
	
	
	Page 594-597: Revised Instructions For Creating Custom Data Environment
	-----------------------------------------------------------------------
	
	The steps outlined on pages 594-597, in the "Create a custom data environment"
	section of lesson 24 were created with an early version of Visual Basic 6.0.
	Additional steps may be necessary and are not included in the instructions.
	
	Revised Instructions:
	
	1. On the Visual Basic Project menu, click the Add Data Environment command.
	
	2. In the Data Environment window, right-click Connection1, and then select
	  Properties from the shortcut menu. The Provider tab of the Data Link
	  Properties dialog box appears, which allows you to select the provider you
	  want to use to access your data.
	
	3. On the Provider tab make sure Microsoft OLE DB Provider For ODBC Drivers is
	  selected and then click Next. The Connection tab is displayed, which prompts
	  you for the source of your data.
	
	4. Click the Use Data Source Name option button, if it is not already selected,
	  click Student Records in the drop-down list box, and click OK.
	
	5. Click the Add Command button on the Data Environment toolbar.
	  The Add Command button creates a new ActiveX data object in the Data
	  Environment.
	
	6. To set the unique attributes of this data object, right-click Command1 in the
	  Data Environment window and select Properties from the shortcut menu.
	
	7. In the Command1 Properties dialog box, type InstuctorTable in the Command
	  Name text box.
	  InstructorTable will be the name of your recordset object when you use this
	  ADO command later.
	
	8. Click the drop-down list box to the right of the Database Object option
	  button, and click the Table type.
	
	9. Click the Object Name drop-down list box, and click the Instructors table.
	
	10. Click OK to create the InstructorTable command in the Data Environment.
	
	11. Click the plus sign next to the InstructorTable command to expand the table
	  and see its fields.
	
	12. Open the Project window, and click the DataEnvironement1 designer.
	
	13. On the File menu, click the Save DataEnvironment1 As command.
	
	14. Type Instruct, and press Enter.
	  If you are told that this file already exists on your system, choose a new
	  name to protect the original version.
	
	
	Last Page: Correction To Software Requirements
	----------------------------------------------
	
	On the CD-ROM information page at the back of the book change the third sentence
	to exclude Visual Basic 6.0 Learning Edition. Lessons 15, 16, 17, 19, 20, 21,
	22, and 23 require the Professional or Enterprise Editions of Visual Basic 6.0.
	
	Change:
	"To use these files, you?ll need Microsoft Visual Basic 6.0 Learning Edition,
	Professional Edition or Enterprise Edition."
	
	To:
	"To use these files, you?ll need Microsoft Visual Basic 6.0 Professional Edition
	or Enterprise Edition."
	
	
	Microsoft Press is committed to providing informative and accurate books. All
	comments and corrections listed above are ready for inclusion in future
	printings of this book. If you have a later printing of this book, it may
	already contain most or all of the above corrections.
	
	Additional query words: ms_press vb60 sbs
	
	======================================================================
	Keywords          : kbdocfix kbdocerr 
	Technology        : kbMSPressSearch
	Version           : :
	Issue type        : kbinfo
	
	=============================================================================
	
