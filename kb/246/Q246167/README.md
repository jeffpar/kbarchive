---
layout: page
title: "Q246167: PRB: Collating Sequence Error Opening XLS as ADO Recordset"
permalink: kb/246/Q246167/
---

## Q246167: PRB: Collating Sequence Error Opening XLS as ADO Recordset

	Article: Q246167
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 2.1 SP2,2.5,2.6,6.0
	Operating System(s): 
	Keyword(s): kbDatabase kbExcel kbIISAM kbMDAC kbODBC KbVBA kbVBp kbVBp600 kbGrpDSVBDB kbGrpDSMDAC k
	Last Modified: 23-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 6.0, 6.0 SP3, 6.0 SP4, 6.0 SP5 
	- ActiveX Data Objects (ADO), versions 2.1 SP2, 2.5, 2.6, 2.7 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Opening an Microsoft Excel spreadsheet from within Visual Basic in Visual Studio
	6.0 Service Pack 3 (or later) Integrated Development Environment (IDE) with the
	Excel/ODBC/ISAM driver generates the following run-time error:
	
	  Run time error '-2147467259 (80004005)' : [Microsoft][ODBC Excel
	  Driver]Selected collating sequence not supported by the operating system
	
	This problem occurs every time that you run the code within the Visual Basic
	IDE.
	
	NOTE This error does not occur if the all the fields are selected in the SQL
	statement, for example:
	
	  SELECT * FROM ...
	
	Also, this problem does not occur within a compiled EXE.
	
	CAUSE
	=====
	
	This is a problem within the Visual Basic IDE starting with service pack 3.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a spreadsheet in Microsoft Excel 97 or Microsoft Excel 2000 and place
	  the following values in the prescribe fields:
	
	   - A1 = F1
	   - B1 = F2
	   - C1 = F3
	
	2. Save the spreadsheet and create a DSN pointing to it.
	
	3. Start Visual Basic 6.0 from Visual Studio 6.0 Service Pack 3 or later.
	
	4. Create a new Standard EXE and set a reference to Microsoft Active Data
	  Objects. Paste the following code into the form:
	
	  Public Sub Form_Load()
	
	      Dim constring As String
	      Dim Connection As New ADODB.Connection
	      Dim cmd As New ADODB.Command
	      Dim rs As New ADODB.Recordset
	
	  '   define a DSN IMPORT-XLS, using the Excel ODBC driver, and point it to the xls file
	       constring = "Provider=MSDASQL;DSN=IMPORT-XLS"
	       
	       Connection.Open constring
	       Set cmd.ActiveConnection = Connection
	       cmd.CommandType = adCmdText
	       
	  '   The following .CommandText causes the error, but only the first time it is run within the ide.
	     cmd.CommandText = "Select F1, F2 from ""Sheet1$"""
	  '   The following .CommandText will not cause the error.
	  '    cmd.CommandText = "Select * from ""Sheet1$"""
	
	       rs.CursorLocation = adUseClient
	       rs.CursorType = adOpenStatic
	       rs.LockType = adLockReadOnly
	       rs.Open cmd
	       While Not rs.EOF
	          MsgBox rs.Fields(0)
	          rs.MoveNext
	       Wend
	
	  End Sub
	
	5. Make the necessary changes to the ConnectionString.
	
	6. Run the form.
	
	7. The first time the form runs, the error appears; it does not appear in
	  subsequent runs.
	
	
	Additional query words: error -2147467259 (80004005)
	
	======================================================================
	Keywords          : kbDatabase kbExcel kbIISAM kbMDAC kbODBC KbVBA kbVBp kbVBp600 kbGrpDSVBDB kbGrpDSMDAC kbDSupport kbMDAC250 kbMDAC260 kbADO260 kbmdac270 kbado270 
	Technology        : kbVBSearch kbAudDeveloper kbADOsearch kbADO210sp2 kbADO250 kbADO260 kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600 kbVB600SP3 kbVB600SP4 kbVB600SP5 kbADO270
	Version           : :2.1 SP2,2.5,2.6,6.0
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
