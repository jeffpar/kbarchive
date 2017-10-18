---
layout: page
title: "Q142930: HOWTO: RDO: Use ODBC Escape Clauses in Your SQL Syntax"
permalink: kb/142/Q142930/
---

## Q142930: HOWTO: RDO: Use ODBC Escape Clauses in Your SQL Syntax

	Article: Q142930
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:2.5,4.0
	Operating System(s): 
	Keyword(s): kbODBC kbRDO kbVBp kbVBp400 kbGrpDSVBDB kbDSupport kbMDAC250
	Last Modified: 24-MAY-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, version 4.0 
	- Microsoft Data Access Components version 2.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	An ODBC escape clause is a way to talk to the ODBC driver you are using in a
	DBMS independent manner. The escape clause is represented by a pair of curly
	braces ({}) surrounding the standard form of the SQL syntax and a one- character
	or two-character token that specifies the type of the escape clause.
	
	For example, if you want to specify a date value and you don't know which ODBC
	driver you will be using, you can use the Escape clause in this construct, {d
	'yyyy-mm-dd'} and it will be translated by the ODBC driver manager into the form
	the backend can utilize. The following select statement will work with any ODBC
	driver: "SELECT * FROM table1 WHERE datefield = {d '1995-09-12'}" There are also
	other areas where you can use ODBC escape clauses:
	
	Date and Time
	-------------
	
	  Date      {d 'yyyy-mm-dd'}
	  Time      {t 'hh:mm:ss'}
	  Timestamp   {ts 'yyyy-mm-dd hh:mm:ss[.f...]'}
	
	where [.f...] allows you to specify fractions of a second if you wish.
	
	Stored Procedures
	-----------------
	
	For stored procedures a parameter marker (?) must be used for the return value
	(if any) and any output arguments because it is bound to a program variable.
	Input arguments can be either literals or parameters, for example, "{? = call
	procedure_name(arg1, arg2, ?)}" or "{call procedure_name(arg1, arg2, ?)}".
	
	String Functions
	----------------
	
	  ASCII(), CHAR(), CONCAT(), DIFFERENCE(), INSERT(), LCASE(), LEFT(), LENGTH(),
	  LOCATE(), LTRIM(), REPEAT(), REPLACE(), RIGHT(), RTRIM(), SOUNDEX(), SPACE(),
	  SUBSTRING() and UCASE().
	
	This example will retrieve a resultset where the first three characters of author
	field is 'dat' from the Pubs database. "Select * from authors where {fn
	LEFT(author, 3)} = 'dat'".
	
	This example will retrieve a resultset with the author field all in uppercase
	letters. It is necessary to alias the column with the phrase "as AUTHORS"
	because the RDC control doesn't know what you are asking for in an escape clause
	so if you do not alias the column, the RDC control will refer to is as
	"Expr1000". MSRDC1.SQL = "Select {fn UCASE(author)} as AUTHORS from authors"
	
	Math Functions
	--------------
	
	  ABS(), ACOS(), ASIN(), ATAN(), ATAN2(), CEILING(), COS(), COT(), DEGREES(),
	  EXP(), FLOOR(), LOG(), LOG10(), MOD(), PI(), POWER(), RADIANS(), RAND(),
	  ROUND(), SIGN(), SIN(), SQRT(), TAN() and TRUNCATE().
	
	System Functions
	----------------
	
	  DATABASE(), IFNULL() and USER().
	
	This example returns all the orders entered by the current user: "Select ordnum
	From orders Where employee = {fn User()}".
	
	Time and Date Functions
	-----------------------
	
	  CURDATE(), CURTIME(), DAYNAME(), DAYOFMONTH(), DAYOFWEEK(), DAYOFYEAR(),
	  HOUR(), MINUTE(), MONTH(), MONTHNAME(), NOW(), QUARTER(), SECOND() and
	  TIMESTAMPADD()
	
	Data Type Conversion Functions
	------------------------------
	
	The data type conversion function converts a data type to a different data type
	on the server. This example shows the simple conversion of a date column to a
	character string. It also shows how powerful the use of scalar functions in
	expressions can be. In this case, the query returns all orders made in the 1990s
	"Select ordnum From orders Where {fn convert(orddate, SQL_CHAR)} like '199%'".
	
	For complete documentation see the "Microsoft ODBC 2.0 Programmer's Reference and
	SDK Guide."
	
	MORE INFORMATION
	================
	
	Sample Program
	--------------
	
	This example uses the escape clause string function and assumes that you already
	have an ODBC data source set up. This example uses a "DSN-less" ODBC connection
	so you will not need to set up a DSN with the ODBC Admin utility.
	
	1. Start a new project in Visual Basic. Form1 is created by default.
	
	2. Add a command button to Form1.
	
	3. Paste the following code into the General Declarations section of form1.
	
	     Private Sub Command1_Click()
	       Dim cn As rdoConnection
	       Dim en As rdoEnvironment
	       Dim rs As rdoResultset
	       'establish connection
	       Set en = rdoEngine.rdoEnvironments(0)
	       en.CursorDriver = rdUseOdbc
	       'Below should be modified to match your data source
	       Dim cnStr As String
	       cnStr = "driver={SQL Server};server=myserver;" & _
	         "database=pubs;uid=myuid;pwd=mypwd"
	       Set cn = en.OpenConnection(DSName:="", Prompt:=rdDriverNoPrompt, _
	         Connect:=cnStr)
	       Dim sql As String
	       sql = "Select * from authors where {fn LEFT(au_lname, 3)} = 'gre'"
	       Set rs = cn.OpenResultset(Name:=sql, Type:=rdOpenDynamic, _
	         Option:=rdAsyncEnable)
	       'check if still executing for asynchronous query option
	       While rs.StillExecuting
	         DoEvents
	       Wend
	       If rs.RowCount > 0 Then
	         While Not rs.EOF
	           Me.Print rs("au_lname")
	           rs.MoveNext
	         Wend
	       End If
	       MsgBox Str(rs.RowCount) & " rows returned."
	     End Sub
	
	4. Note that you will need to change your DRIVER, SERVER, DATABASE, UID, and PWD
	  in the OpenConnection method. You will also need to modify the SQL statement
	  contained in the Command1_Click event to match your own SQL data source.
	
	5. Start the program or press the F5 key.
	
	6. You can then click on the Command1 button to start the query which will
	  display the number of rows returned.
	
	REFERENCES
	==========
	
	(Hitchhiker's Guide to Visual Basic and SQL Server, Microsoft Press. ISBN:
	1-55615-906-4.).
	
	Additional query words:
	
	======================================================================
	Keywords          : kbODBC kbRDO kbVBp kbVBp400 kbGrpDSVBDB kbDSupport kbMDAC250 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbMDACSearch kbVB400Search kbVB400 kbMDAC250
	Version           : WINDOWS:2.5,4.0
	Issue type        : kbhowto
	
	=============================================================================
	
