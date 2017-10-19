---
layout: page
title: "Q154510: HOWTO: Get More Information on the ODBC Call Failed Error"
permalink: /kb/154/Q154510/
---

## Q154510: HOWTO: Get More Information on the ODBC Call Failed Error

	Article: Q154510
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): kbVBp400
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to get more information on the ODBC Call Failed
	error. When errors occur using ODBC databases, Visual Basic will provide an
	"ODBC Call Failed" error message. This generic error message provides no
	specific detail so you must cycle through the Errors collection to get
	additional information. This can be done with both the Visual Basic 16-bit and
	32-bit editions. Below is a code sample that shows the difference in behavior.
	
	MORE INFORMATION
	================
	
	The DBEngine has an Errors collection that can be manipulated by the FOR- EACH
	construct. The JET Engine can store multiple errors in the DBEngine Errors
	collection. In Visual Basic 3.0, it was possible to parse the string using the
	routine shown on Page 175 of the Visual Basic 4.0 Professional Features Book
	under the "Guide to Data Access Objects" section. The # symbol was used to
	separate the "ODBC Call Failed" message from the detailed ODBC description in
	Visual Basic 3.0 but this is not necessary under Visual Basic 4.0.
	
	For the example below, a two-field table called MyTable has been set up on an
	ODBC Source and a primary key set on the ID Field. Two records have been added
	as below:
	
	  Field      ID      Description
	  ===============================
	  Record 1    1      Hello
	  Record 2    2      World
	
	The code below will generate an error by trying to add a record with a duplicate
	primary key value to test the code:
	
	1. Start a new project in Visual Basic. Form1 is created by default.
	
	2. Add a Command button to Form1.
	
	3. Add the following code to the General Declarations section of Form1:
	
	     Option Explicit
	
	     Private Sub Command1_Click()
	       Dim db As Database
	       Dim rs As Recordset
	       On Error GoTo trap:
	       Set db = OpenDatabase("")
	       Set rs = db.OpenRecordset("Select * from MyTable")
	       rs.AddNew
	         rs.Fields(0).Value = 2
	       rs.Update
	       Exit Sub
	     trap:
	       MsgBox Errors.Count
	       MsgBox Err.Number & " " & Err.Description
	     End Sub
	
	4. Press the F5 key to run the project. Click on the Command button and you
	  should receive Error message 3146 stating "ODBC Call Failed." Although the
	  Error count is greater than one, only one message will be displayed.
	
	5. Remove the code from within the error trap and replace it with the following
	  code:
	
	     Dim MyError As Error
	     MsgBox Errors.Count
	     For Each MyError In DBEngine.Errors
	       With MyError
	         MsgBox .Number & " " & .Description
	       End With
	     Next MyError
	
	6. Press the F5 key to run the project. You should see a detailed message and
	  then the 3146 Error for "ODBC Call Failed."
	
	REFERENCES
	==========
	
	Visual Basic 4.0 Professional Features, Chapter 9 of the "Guide to Data Access
	Object."
	
	Jet Database Engine Programmers Guide, Page 425-427.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q120763 How to Retrieve Info from RAISERROR Function in SQL Server DB
	
	Additional query words: errors Collection kbintluk
	
	======================================================================
	Keywords          : kbVBp400 
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Version           : WINDOWS:4.0
	Issue type        : kbhowto
	
	=============================================================================
	
