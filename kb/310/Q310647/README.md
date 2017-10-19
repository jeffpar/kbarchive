---
layout: page
title: "Q310647: BUG: VB 6.0 T-SQL Debugger Fails with SQL 2000 Named Instance"
permalink: /kb/310/Q310647/
---

## Q310647: BUG: VB 6.0 T-SQL Debugger Fails with SQL 2000 Named Instance

	Article: Q310647
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbDatabase kbTSQL kbGrpDSVBDB kbDSupport
	Last Modified: 12-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	- Microsoft SQL Server 2000 (all editions) 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Attempting to use the Visual Basic 6.0 T-SQL Stored Procedure debugger add-in to
	debug a SQL Server stored procedure on a named instance of SQL Server 2000
	fails.
	
	Three error messages occur in the following sequence:
	
	1. After you select a stored procedure in the add-in, type parameter values (if
	  any), and click Execute, a T-SQL Debugger dialog box appears with the
	  following error message:
	
	  A memory error occurred.
	
	  Alternately, if you then click Go or Step, the stored procedure skips any
	  breakpoints, and you receive the following error message:
	
	  The query could not be debugged due to a problem coordinating events with the
	  server...
	
	2. On the client computer, the following event is logged in the Windows
	  Application Event Log with a source of VBSDIDB:
	
	  An error occurred at ..\Sdiuitrd.cpp(287)
	
	3. On the client computer, the following event is logged in the Windows
	  Application Event Log with a source of VBSDIDB:
	
	  The system cannot find the path specified. , Line=2031, File=..\vbsdicli.cpp
	
	  NOTE: You may or may not receive this third error message, depending on the
	  operating system.
	
	The add-in, Visual Basic, and SQL Server do not fail (crash). There are no
	messages on the server side, neither in the event log nor in the SQL logs.
	
	CAUSE
	=====
	
	The current version of the T-SQL Debugger add-in does not support named
	instances of SQL Server 2000.
	
	RESOLUTION
	==========
	
	To work around this problem, debug against the default instance of SQL Server,
	which you can refer to by server name alone.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Locate or install a named instance of SQL Server 2000. Do not add or use SQL
	  Server 2000 Service Pack 1 because the debugger add-in does not work with
	  Service Pack 1.
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q303324 BUG: SQL Server 2000 SP1 Breaks Visual Basic T-SQL Debugger
	
	2. From the SQDBG_SS folder on CD #2 of Microsoft Visual Studio or Visual Basic
	  Enterprise Edition, copy SDI.dll to the Binn folder of the named instance
	  (which is C:\Program Files\Microsoft Sql Server\MSSQL$NamedInstance\Binn or
	  similar). Use Regsvr32.exe to register SDI.dll. Note that you cannot use the
	  automated Setup program that is located in SQDBG_SS for this purpose.
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q281644 BUG: SQL Debugging Does Not Install Automatically on SQL Server 2000
	
	3. Use the ODBC Administrator to create an ODBC data source name (DSN) that
	  points to the Northwind sample database on this named instance of SQL Server
	  2000. Type the server and instance name in the following format:
	
	  ServerName\InstanceName
	
	  The connection should test successfully.
	
	4. Locate or install Visual Studio or Visual Basic Enterprise Edition version
	  6.0 Service Pack 5. To eliminate other incompatibilities with SQL Server
	  2000, Service Pack 5 is required.
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q272074 FIX: T-SQL Debugger Parses SQL Server 2000 Return Value Incorrectly
	
	5. Open Visual Basic, and load the T-SQL Debugger add-in from the Add-ins menu.
	
	6. Return to the Add-ins menu, and open the debugger.
	
	7. On the Settings tab, select the newly created DSN, and type the
	  authentication information.
	
	8. On the Stored Procedure tab, use the already-displayed CustOrderHist stored
	  procedure, and type "ALFKI" (without the quotation marks) as the only input
	  parameter value.
	
	9. Click Execute. The debugging window appears, which is followed by the
	  above-mentioned sequence of errors.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDatabase kbTSQL kbGrpDSVBDB kbDSupport 
	Technology        : kbVBSearch kbSQLServSearch kbAudDeveloper kbZNotKeyword6 kbSQLServ2000Search kbZNotKeyword2 kbVB600Search kbVB600 kbSQLServ2000
	Version           : :6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
