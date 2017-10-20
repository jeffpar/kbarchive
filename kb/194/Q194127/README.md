---
layout: page
title: "Q194127: FIX: &quot;Syntax Error&quot; with SQL Literal String Over 16,379 Bytes"
permalink: /kb/194/Q194127/
---

## Q194127: FIX: &quot;Syntax Error&quot; with SQL Literal String Over 16,379 Bytes

{% raw %}

	Article: Q194127
	Product(s): Open Database Connectivity (ODBC)
	Version(s): 1.0,2.0,3.0,3.5,3.6,6.0
	Operating System(s): 
	Keyword(s): kbAccess kbADO200 kbDatabase kbDriver kbJET kbODBC kbVBp600 kbGrpDSVBDB kbGrpDSMDAC kbD
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft ODBC Driver for Access, versions 1.0, 2.0, 3.0, 3.5, 3.6 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you attempt to execute a SQL INSERT statement that contains a literal string
	having over 16,379 characters with the Microsoft ODBC Driver for Access, the
	following error message occurs:
	
	  [Microsoft][ODBC Microsoft Access 97 Driver]
	  Syntax error in INSERT INTO statement.
	
	SQL UPDATE SQL statements with literal strings over 16,379 bytes also fail with a
	similar error.
	
	CAUSE
	=====
	
	The SQL parser for the Microsoft ODBC Driver for Access prior to 4.0.4202 does
	not accept string literals larger than 16,379 bytes. This is the defined limit
	for literal strings in a SQL statement for the Microsoft ODBC Driver for
	Access.
	
	With the Microsoft ODBC Driver for Access versions 4.0.4202 and later, you can
	execute a SQL INSERT containing a string literal having over 16,379 characters.
	However, you will get the following error message with a SQL INSERT that
	contains a literal string having over 516,076 characters:
	
	  [Microsoft][ODBC Microsoft Access Driver]
	  Query is too complex
	
	This error occurs with both Access 97 and Access 2000 databases.
	
	RESOLUTION
	==========
	
	There are two possible workarounds for the syntax error:
	
	- The Microsoft ODBC Driver for Access versions 4.0.4202 and later allow SQL
	  INSERTS with string literals having up to 516,076 characters.
	
	- Use parameterized insert or updates rather than embedding literal strings
	  into the SQL statements if you expect to insert or update large string
	  values. This resolution works with all versions of the Microsoft ODBC Driver
	  for Access.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This bug has been fixed in the Microsoft ODBC Driver for Access versions 4.0.4202
	and later. Note that version 4.0.4202 of the Odbcjt32.dll file is installed by
	MDAC 2.1 service pack 2.
	
	However, a new limitation of 516,076 characters now applies.
	
	You may obtain the latest version of the Microsoft Data Access Components from
	the following Microsoft Web site:
	
	  http://www.microsoft.com/data/download.htm
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	Run the following sample code to reproduce the problem and demonstrate the
	workaround. Note that the sample requires a blank Microsoft Access database
	named c:\db1.mdb and a reference to the Microsoft ActiveX Data Objects Library.
	
	If testing the Microsoft ODBC Driver for Access version 4.0.4202 or later, use
	the following numbers to test:
	
	  In place of 16379, use 516076
	  In place of 16380, use 516077
	
	Sample Code
	-----------
	
	     ' START SAMPLE CODE
	     Sub TestMemo()
	     Dim conn As New ADODB.Connection
	     Dim cmd As New ADODB.Command
	     Dim strSQL As String
	
	        conn.Open "Driver={Microsoft Access Driver (*.mdb)};" & _
	                  "DBQ=c:\db1.mdb"
	        On Error Resume Next
	        conn.Execute "DROP TABLE tmp_MEMO1234"
	        On Error GoTo 0
	        conn.Execute "create table tmp_MEMO1234 (data1 memo)"
	
	        ' Using a parameterized insert works.
	        cmd.ActiveConnection = conn
	        cmd.CommandText = "insert into tmp_MEMO1234 (data1) values (?)"
	        cmd.CommandType = adCmdText
	        cmd.Parameters.Append cmd.CreateParameter("p1", _
	                              adLongVarChar, adParamInput, -1)
	        cmd.Parameters(0).Value = String(16380, "X")
	        cmd.Execute ' SUCCESS
	
	        ' Literal string 16379 bytes or less works.
	        strSQL = "insert into tmp_MEMO1234 (data1) values ('" & _
	                 String(16379, "X") & "')"
	        conn.Execute strSQL ' SUCCESS
	
	        ' Literal string 16380 bytes or larger fails.
	        strSQL = "insert into tmp_MEMO1234 (data1) values ('" & _
	                 String(16380, "X") & "')"
	        conn.Execute strSQL ' FAILS HERE
	
	     End Sub
	     ' END SAMPLE CODE
	
	REFERENCES
	==========
	
	For additional information about the error message "Query is too complex",
	please click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q103429 ACC:"Out of Memory" or "Query Too Complex" with Query/Report"
	
	Additional query words:
	
	======================================================================
	Keywords          : kbAccess kbADO200 kbDatabase kbDriver kbJET kbODBC kbVBp600 kbGrpDSVBDB kbGrpDSMDAC kbDSupport kbADO210sp2bug kbADO210sp2fix kbMDAC250 kbADO250 kbADO260 kbMDACNoSweep 
	Technology        : kbVBSearch kbAudDeveloper kbAccessSearch kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbODBCSearch kbVBA600 kbVB600 kbODBCAccess100 kbODBCAccess200 kbODBCAccess300 kbODBCAccess350 kbODBCAccess360
	Version           : :1.0,2.0,3.0,3.5,3.6,6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
