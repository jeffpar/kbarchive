---
layout: page
title: "Q154046: HOWTO: Use the ODBC API Function SQLExecDirect with RDO"
permalink: kb/154/Q154046/
---

## Q154046: HOWTO: Use the ODBC API Function SQLExecDirect with RDO

	Article: Q154046
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbVBp kbVBp400 kbVBp500 kbGrpDSVBDB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Control Creation Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Because RDO exposes the hEnv, hDbc, and hStmt properties of the ODBC API to the
	programmer, you are able to utilize ODBC API calls in conjunction with RDO. This
	can be helpful if RDO does not implement a feature of the ODBC API that you
	would like to use.
	
	This article gives an example of how to use the ODBC API SQLExecDirect function
	in combination with the RDO rdoConnection.hDbc property to execute SQL without
	the use of the rdoConnection.Execute method.
	
	MORE INFORMATION
	================
	
	Programming directly to the ODBC API gives you an alternative to using RDO and
	DAO code to access your ODBC database. This direct method allows the programmer
	to have low-level control over the ODBC datasource, but introduces the Visual
	Basic 4.0 programmer to a complex programming model that requires in-depth
	knowledge of the ODBC 2.0 specification.
	
	If you feel that you can benefit from this direct approach, before you proceed
	you should obtain a copy of the ODBC 2.0 Programmer's Reference and SDK Guide
	that fully documents the ODBC API.
	
	Sample Program
	--------------
	
	This example uses the ODBC API SQLExecDirect function in combination with the
	rdoConnection.hDbc property to execute SQL without the use of the RDO Execute
	method. It uses SQL Server and the Pubs database, but you can change the DSN and
	SQL to match your ODBC database.
	
	1. Start a new project in Visual Basic. Form1 is created by default.
	
	2. Add a Command button, Command1, to Form1.
	
	3. Paste the following code into the General Declarations section of Form1:
	
	        Option Explicit
	
	        Private Declare Function SQLAllocStmt Lib "odbc32.dll" _
	          (ByVal hdbc&, phstmt&) As Integer
	        Private Declare Function SQLExecDirect Lib "odbc32.dll" _
	          (ByVal hstmt&, ByVal szSqlStr$, ByVal cbSqlStr&) As Integer
	
	        Private Sub Command1_Click()
	          Dim cn As rdoConnection
	           Set cn = rdoEnvironments(0).OpenConnection( _
	             dsName:="MyServer", _
	             Prompt:=rdDriverNoPrompt, _
	             ReadOnly:=False)                            'get hDbc
	
	           Dim rv As Integer                             'return value
	           Dim lhStmt As Long                            'hStmt
	           Dim szSql As String                           'SQL string
	
	           szSql = "Select * into newtable from titles"  'create table SQL
	           rv = SQLAllocStmt(cn.hdbc, lhStmt)            'allocate a
	           statement
	           Debug.Print GetRetCodeText(rv)                'print return value
	                                                         'text
	           rv = SQLExecDirect(lhStmt, szSql, Len(szSql)) 'execute the SQL
	           Debug.Print GetRetCodeText(rv)                'print return value
	                                                         'text
	        End Sub
	
	        Private Function GetRetCodeText(retcode As Integer)
	          'get the return value text using ODBC32.TXT constants
	          Dim x As String
	          Select Case retcode
	            Case -1: x = "SQL_ERROR"
	            Case -2: x = "SQL_INVALID_HANDLE"
	            Case 100: x = "SQL_NO_DATA_FOUND"
	            Case 0: x = "SQL_SUCCESS"
	            Case 1: x = "SQL_SUCCESS_WITH_INFO"
	          End Select
	          GetRetCodeText = x
	        End Function
	
	  NOTE: You will need to change the DSN to match yours before continuing.
	
	4. Start the program or press the F5 key.
	
	5. Click the Command1 button to execute the RDO and ODBC API code. If it
	  executes successfully, SQL_SUCCESS will be output twice to the debug window
	  and you will have a new table named newtable.
	
	REFERENCES
	==========
	
	Building Client/Server applications with Visual Basic Manual, Chapter 10, "Using
	the ODBC API."
	
	ODBC 2.0 Programmer's Reference and SDK Guide, MS Press.
	
	Hitchhiker's Guide to Visual Basic and SQL Server, Microsoft Press, ISBN:
	1-55615-906-4.
	
	Additional query words: rdoConnection Execute kbVBp500 kbVBp400 kbdse kbDSupport kbVBp
	
	======================================================================
	Keywords          : kbVBp kbVBp400 kbVBp500 kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500Search kbVBA500 kbVB500 kbVB400Search kbVB400 kbZNotKeyword3
	Issue type        : kbhowto
	
	=============================================================================
	
