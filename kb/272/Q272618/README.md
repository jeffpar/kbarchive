---
layout: page
title: "Q272618: PRB: Client-Side ADO Union Query Using Oracle OLE DB Provider Re"
permalink: /kb/272/Q272618/
---

## Q272618: PRB: Client-Side ADO Union Query Using Oracle OLE DB Provider Re

	Article: Q272618
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 2.5,2.5 SP1,6.0
	Operating System(s): 
	Keyword(s): kbVBp600 kbGrpDSVBDB kbGrpDSMDAC kbDSupport kbADO250 kbOLEDB250
	Last Modified: 23-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	- Microsoft Data Access Components versions 2.5, 2.5 SP1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you create a recordset with ADO 2.5 that contains a Union Query,
	client-side cursors and the Microsoft Oracle OLE DB Provider return an incorrect
	number of columns.
	
	This problem does not occur if you use the OLE DB Provider for ODBC Drivers and
	the Microsoft ODBC for Oracle Drive.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new Visual Basic Standard EXE project. Form1 is created by default.
	
	2. Set a Reference to Microsoft ActiveX Objects 2.5.
	
	3. Paste the following code into the Form1 code window:
	
	  Private Sub Form_Load()
	  Dim cn As New ADODB.Connection
	  Dim rs As New ADODB.Recordset
	  On Error Resume Next
	
	  cn.CursorLocation = adUseClient
	
	  'ODBC
	  'cn.Open cn.Open "Provider=MSDASQL;Driver={Microsoft ODBC for Oracle};Server=YourOracleAlias;Uid=demo;pwd=demo"
	
	  'OLEDB
	  cn.Open "Provider=MSDAORA;Data Source=YourOracleAlias;User ID=demo;Password=demo"
	
	  cn.Execute "Drop table oratest"
	  cn.Execute "CREATE TABLE ORATEST(Col1 VARCHAR2(10) NULL, Col2 VARCHAR2(10) NULL)"
	  cn.Execute "CREATE TABLE DUAL(Col1 VARCHAR2(10) NULL)"
	  rs.Open "select col1, col2 from oratest where col1 in (Select 1 from dual union select 2 from dual)", _ 
	  cn, adOpenStatic, adLockBatchOptimistic
	
	  MsgBox rs.Fields.Count
	
	  End Sub
	
	4. Make the necessary connection string changes, and then run the project.
	
	Results: The message box displays a "1."
	
	5. Stop the project, and uncomment the connect line following "'ODBC," and
	  comment the line following "'OLEDB."
	
	Results: The message box displays a "2," which is correct.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbVBp600 kbGrpDSVBDB kbGrpDSMDAC kbDSupport kbADO250 kbOLEDB250 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600 kbMDACSearch kbMDAC250SP1 kbMDAC250
	Version           : :2.5,2.5 SP1,6.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
