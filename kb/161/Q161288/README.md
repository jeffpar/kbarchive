---
layout: page
title: "Q161288: HOWTO: Get More Information on the ODBC Call Failed Error"
permalink: /kb/161/Q161288/
---

## Q161288: HOWTO: Get More Information on the ODBC Call Failed Error

	Article: Q161288
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 2.5,5.0,6.0
	Operating System(s): 
	Keyword(s): kbODBC kbRDO kbVBp kbVBp500 kbVBp600 kbGrpDSVBDB kbDSupport kbMDAC250
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	- Microsoft Data Access Components version 2.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to get more information on the ODBC Call Failed
	error. When errors occur using ODBC databases, Visual Basic will provide an
	"ODBC Call Failed" error message. This generic error message provides no
	specific detail so you must cycle through the Errors collection to get
	additional information. Below is a code sample that shows the difference in
	behavior.
	
	MORE INFORMATION
	================
	
	The DBEngine has an Errors collection that can be manipulated by the FOR- EACH
	construct. The JET Engine can store multiple errors in the DBEngine Errors
	collection. In Visual Basic 3.0, it was possible to parse the string using the
	routine shown on Page 175 of the Visual Basic 4.0 Professional Features Book
	under the "Guide to Data Access Objects" section. The # symbol was used to
	separate the "ODBC Call Failed" message from the detailed ODBC description in
	Visual Basic 3.0. However, this is not necessary under Visual Basic versions 4.0
	and 5.0.
	
	For the example below, a two-field table called MyTable has been set up on an
	ODBC Source and a primary key set on the ID Field. Two records have been added
	as below:
	
	  Field      ID      Description
	  ===============================
	  Record 1    1      Hello
	  Record 2    2      World
	
	The code below will generate an error by trying to add a record with a duplicate
	primary key value to test the code:
	
	1. Start a new Standard EXE project. Form1 is added by default.
	
	2. Add a CommandButton to Form1.
	
	3. Add the following code to the General Declarations section of Form1:
	
	        Option Explicit
	
	        Private Sub Command1_Click()
	          Dim db As Database
	          Dim rs As Recordset
	          On Error GoTo trap
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
	
	4. Press the F5 key to run the project. Click on the CommandButton and you
	  should receive error 3146, "ODBC Call Failed." Although the Error count is
	  greater than one, only one message will be displayed.
	
	5. Remove the code from within the error trap and replace it with one of the
	  following error handlers:
	
	        ' DAO Error Handler
	        Dim MyError As Error
	        MsgBox Errors.Count
	        For Each MyError In DBEngine.Errors
	          With MyError
	            MsgBox .Number & " " & .Description
	          End With
	        Next MyError
	
	        ' RDO Error Handler
	        Dim MyError As rdoError
	        MsgBox rdoErrors.Count
	        For Each MyError In rdoEngine.rdoErrors
	          With MyError
	            MsgBox .Number & " " & .Description
	          End With
	        Next MyError
	
	6. Press the F5 key to run the project. You should see a detailed message and
	  then the 3146 Error for "ODBC Call Failed."
	
	REFERENCES
	==========
	
	Visual Basic 4.0 Professional Features, Chapter 9 of the "Guide to Data Access
	Object"
	
	Jet Database Engine Programmers Guide, pages 425-427
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q120763 How to Retrieve Info from RAISERROR Function in SQL Server DB
	
	Additional query words: errors Collection
	
	======================================================================
	Keywords          : kbODBC kbRDO kbVBp kbVBp500 kbVBp600 kbGrpDSVBDB kbDSupport kbMDAC250 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbMDACSearch kbMDAC250
	Version           : :2.5,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
