---
layout: page
title: "Q281755: HOWTO: Connect to FileMaker Pro from Visual Basic with ODBC"
permalink: /kb/281/Q281755/
---

## Q281755: HOWTO: Connect to FileMaker Pro from Visual Basic with ODBC

	Article: Q281755
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbDatabase kbMDAC kbGrpDSVBDB kbDSupport
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	FileMaker Pro version 5.0 now supports Open Database Connectivity (ODBC). This
	article describes one method that you can use to connect to a FileMaker Pro 5.0
	database from Visual Basic with ODBC.
	
	MORE INFORMATION
	================
	
	An ODBC driver shipped with FileMaker Pro beginning with version 5.0. In prior
	versions, it was necessary to use drivers from third-party resources to have
	ODBC connectivity to this data source.
	
	Unlike most other ODBC data sources, in order to use ODBC to connect to FileMaker
	Pro, you must have the FileMaker Pro software installed on your computer. It is
	also necessary to leave the FileMaker Pro software running with the database
	open while you try to connect.
	
	Steps to Connect
	----------------
	
	1. Open FileMaker Pro version 5.0.
	
	2. Open the Sample02.FP5 sample database. If you use the trial version of
	  FileMaker Pro, this file is located in C:\Program Files\FileMaker\FileMaker
	  Pro 5 Trial\Tutorial\Sample Files\Sample02.fp5.
	
	3. On the File menu, select Sharing from FileMaker Pro, and then check Local
	  Data Access Companion in the dialog box that appears.
	
	4. Close this dialog box, but do not close FileMaker Pro or the database.
	
	5. Create a Data Source Name (DSN) called FMTest with the FileMaker Pro ODBC
	  Driver.
	
	6. Open a new Standard EXE project in Visual Basic.
	
	7. Set the following references in the Project References dialog box:
	
	Microsoft Active X Data Objects 2.X
	
	8. Copy the following code into the Form1 code window:
	
	  Private Sub Form_Load()
	
	  Dim cn As ADODB.Connection
	  Dim rs As ADODB.Recordset
	  Dim counter As Integer
	      
	      Set cn = New ADODB.Connection
	      Set rs = New ADODB.Recordset
	
	      cn.Open "Provider=MSDASQL.1;Data Source=FMTest;database=Sample02.fp5"
	      cn.CursorLocation = adUseClient
	      rs.Open "Select * from Sample02.fp5", cn
	      
	      For counter = 0 To rs.Fields.Count - 1
	          Debug.Print rs.Fields(counter).Name
	      Next counter
	
	      Do While Not rs.EOF
	          Debug.Print rs.Fields(0).Value
	          rs.MoveNext
	      Loop
	      
	  End Sub
	
	9. Press the F5 key to run the code.
	
	10. Check the Immediate window to confirm that the field names and the value of
	  the first field are returned.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDatabase kbMDAC kbGrpDSVBDB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : :6.0
	Issue type        : kbhowto
	
	=============================================================================
	
