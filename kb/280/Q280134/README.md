---
layout: page
title: "Q280134: PRB: Error When You Create SQL Server TEMP Tables Using RDO"
permalink: /kb/280/Q280134/
---

## Q280134: PRB: Error When You Create SQL Server TEMP Tables Using RDO

{% raw %}

	Article: Q280134
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.0,5.0,6.0,6.0 SP3,6.0 SP4,6.5,6.5 Service Pack 1 and later,7.0,7.0 Service Pack 1,7.
	Operating System(s): 
	Keyword(s): kbRDO kbRDO100 _IK12473 kbSQLServ kbVBp kbVBp400 kbVBp500 kbVBp600 kbSQLServ650 kbSQLSe
	Last Modified: 01-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 4.0, 5.0, 6.0, 6.0 SP3, 6.0 SP4 
	- Microsoft SQL Server versions 6.5, 6.5 Service Pack 1 and later, 7.0, 7.0 Service Pack 1, 7.0 Service Pack 2 
	- Microsoft SQL Server 2000 (all editions) 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you create a SQL Server local temporary table using the rdoConnection
	object by calling its .Execute method with default parameters, and then attempt
	to access the table after the Remote Data Objects (RDO) method has run, you may
	receive one of the following error messages:
	
	  Run-time error '40002': 37000:[Microsoft][ODBC SQL Server Driver][SQL Server]
	  Statement(s)could not be prepared
	
	  -or-
	
	  Run-time error '40002': S0002:[Microsoft][ODBC SQL Server Driver][SQL Server]
	  Invalid Object Name '#<Name of the temporary table>'
	
	CAUSE
	=====
	
	The creation and use of temporary database tables to facilitate the storage and
	manipulation of volatile intermediate data is a common programming practice. The
	default behavior of the SQL Server Open Database Connectivity (ODBC) driver is
	to create and use temporary stored procedures to run prepared statements. The
	.Execute method of the rdoConnection object uses the SQLPrepare() and
	SQLExecute() ODBC application programming interface (API) calls by default to
	run a SQL statement as a prepared statement. Temporary tables that are created
	by a stored procedure are automatically dropped when the procedure completes
	execution. As a result, when you attempt to access a SQL Server temporary table
	that was created by calling the .Execute method of an rdoConnection object with
	default parameters, in subsequent statements you receive one of the error
	messages specified in the "Symptoms" section.
	
	RESOLUTION
	==========
	
	To resolve this problem, use one of the following workarounds:
	
	- Specify rdExecDirect as the Options parameter of the .Execute method of the
	  rdoConnection object to bypass the creation of a temporary stored procedure,
	  and force the usage of the SQLExecDirect() ODBC API function to run the SQL
	  query that creates the temporary table.
	
	- If you use a SQL Server version 6.5 database, you can turn off the option to
	  use temporary stored procedures to run prepared statements in the ODBC data
	  source name (DSN) configuration properties. However, you cannot turn off this
	  property when you create an ODBC DSN to connect to a SQL Server 7.0 or SQL
	  Server 2000 database. It is turned on by default and the check box to control
	  its setting in the DSN configuration dialog box is dimmed.
	
	- Use an rdoQuery object to run the SQL query that creates the temporary table
	  after it sets its Prepared property to True.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	To set up and test a code sample that reproduces the problem, follow these
	steps:
	
	1. In Visual Basic, create a new Standard EXE project. Form1 is created by
	  default.
	
	2. Set a reference to the Microsoft Remote Data Object library version 1.0 or
	  2.0.
	
	3. In Form1, add a command button.
	
	4. In the Click event procedure of the command button, paste the following code:
	
	  Dim cn As rdoConnection
	  Dim rs As rdoResultset
	
	  Set cn = New rdoConnection
	
	  cn.Connect = "DSN=<ODBC DSN>;UID=sa;PWD=;"
	  cn.EstablishConnection
	
	  cn.Execute "Create table #temptest(mid integer, mname varchar(20))" 
	  cn.Execute "Insert into #temptest values(1,'Jack')"
	
	  Set rs = cn.OpenResultset("Select * from #temptest")
	  Do While Not rs.EOF
	   Debug.Print rs.rdoColumns("mname")
	   rs.MoveNext
	  Loop
	  rs.Close
	
	  cn.Close
	  Set cn = Nothing
	
	5. In the RDO connection string, specify an ODBC DSN, a user ID, and a password
	  to connect to a SQL Server database.
	
	6. Run the project. When the form is displayed, click the command button. The
	  cn.Execute statement attempts to add a row to the #temptest temporary table,
	  and you receive one of the runtime errors specified in the "Symptoms"
	  section.
	
	7. Stop the execution of the project.
	
	8. Modify the code to specify rdExecDirect as the Options parameter in the
	  cn.Execute statement that creates the temporary table. The modified statement
	  should resemble the following:
	
	  cn.Execute "Create table #temptest(mid integer, mname varchar(20))", rdExecDirect
	
	9. Run the project. When the form is displayed, click the command button.
	
	You do not receive the runtime error. The temporary table is created, and the
	subsequent statements that access it complete successfully.
	
	Additional query words: RDO, TEMP table, rdoConnection, 40002
	
	======================================================================
	Keywords          : kbRDO kbRDO100 _IK12473 kbSQLServ kbVBp kbVBp400 kbVBp500 kbVBp600 kbSQLServ650 kbSQLServ700 kbGrpDSVBDB kbSQLServ2000 
	Technology        : kbVBSearch kbSQLServSearch kbAudDeveloper kbZNotKeyword6 kbSQLServ700 kbSQLServ650 kbSQLServ2000Search kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600 kbVB400Search kbVB400 kbSQLServ650SP1 kbSQLServ700SP1 kbSQLServ700SP2 kbSQLServ2000 kbVB600SP3 kbVB600SP4
	Version           : :4.0,5.0,6.0,6.0 SP3,6.0 SP4,6.5,6.5 Service Pack 1 and later,7.0,7.0 Service Pack 1,7.0 Service Pack 2
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
