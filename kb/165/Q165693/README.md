---
layout: page
title: "Q165693: INFO: Visual C++ 5.0 Readme, SQL and SQL Debugging"
permalink: /kb/165/Q165693/
---

## Q165693: INFO: Visual C++ 5.0 Readme, SQL and SQL Debugging

{% raw %}

	Article: Q165693
	Product(s): Microsoft C Compiler
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbDebug kbEEdition kbSQL kbVC kbSQLProg
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	SQL and SQL Debugging
	---------------------
	
	- Enabling SQL Debugging
	
	- One or More Breakpoints are Disabled Upon Starting Direct Database Debugging
	
	- SQL Server Service Pack 2 Bug May Cause a Failure in CRecordset::Edit Mode
	
	- SQL Debugging Will Be Disabled Following a Lost Server Connection
	
	- SQL Debugging a Disconnected Data Connection May Produce Unexpected Results
	
	- Remote SQL Debugging with Automation Manager Registered as Interactive User
	
	- Visual C++ Starts Automation Manager but Doesn't Shut It Down
	
	MORE INFORMATION
	================
	
	Feature Only in Enterprise Edition SQL and SQL debugging are supported only in
	Visual C++ Enterprise Editions.
	
	Enabling SQL Debugging
	----------------------
	
	To enable SQL Debugging, you need to install the Visual C++ Enterprise Edition
	Server Components on your SQL Server machine. Before you run the setup program
	for the VC Server Components, you must first install the latest Service Pack for
	Windows NT, and the latest Service Pack for Microsoft SQL Server. Once these
	service packs are installed, you will be able to successfully install the Visual
	C++ Server Components. The setup program can be run directly from the VCServer
	directory, or from the master setup program in the root directory of Disc 2
	(Disc 4 for Visual Studio).
	
	One or More Breakpoints are Disabled Upon Starting Direct Database
	
	Debugging
	---------
	
	If your workspace includes both a C++ and a database project it is possible to
	encounter a message that warns of one or more break points being disabled when
	you begin debugging the database. This happens when you have C++ breakpoint set
	in your C++ project and you begin debugging the database project before the C++
	project. In some cases, the debugger will not be able to find the C++ symbols.
	The workaround is to first begin debugging the C++ project, which allows the
	debugger to load the C++ symbols, before you debug the database project.
	
	SQL Server Service Pack 2 Bug May Cause a Failure in CRecordset::Edit Mode
	--------------------------------------------------------------------------
	
	The SQL Server Service Pack 2 (06.50.0240) that ships with the Visual C++
	Enterprise Edition has a bug that may cause a failure in CRecordset::Edit mode
	during the call to CRecordset::Update.
	
	The ODBC driver that ships with this version of SQL Server now gives you the
	option to turn ON or OFF the following items:
	
	- Use ANSI Quoted Identifiers
	
	- Use ANSI Nulls, Padding, and Warnings
	
	Previous versions of the ODBC driver turned these items ON by default.
	
	If you encounter the following error:
	
	  Syntax error or access violation
	  State:37000,Native:7134,Origin:[Microsoft][ODBC SQL Server Driver]
	
	and you have Use ANSI Nulls, Padding, and Warnings turned ON, try the following
	workaround:
	
	1. Open the ODBC Data Source Administrator using the icon in the Control Panel.
	
	2. Select your SQL Server Data Connection and click the Configure button.
	
	3. Click the Options button. 4.Clear the Use ANSI Nulls, Padding and Warnings
	  option.
	
	SQL Debugging Will Be Disabled Following a Lost Server Connection
	-----------------------------------------------------------------
	
	If the SQL Server against which you are debugging fails during an SQL Debugging
	Session, you can reestablish the connection to the database. Go to the View menu
	and use the Refresh command.
	
	SQL Debugging a Disconnected Data Connection May Produce Unexpected Results
	---------------------------------------------------------------------------
	
	If you delete or disconnect a Data Connection during a SQL Debugging session you
	may find the IDE in an unstable state. It is recommended that you do not delete
	or disconnect a Data Connection while you are using SQL Debugging. Stop
	Debugging before you delete or disconnect the Data Connection.
	
	Remote SQL Debugging with Automation Manager Registered as Interactive User
	---------------------------------------------------------------------------
	
	If you install SQL Server and then install Visual C++ Enterprise Edition
	(including the Visual C++ Enterprise server-side components) on the same
	computer, the automation manager's identity is registered as "Interactive User."
	In this scenario, if you log off from this machine but keep SQL server running
	as a service, you will not be able to remote debug against this server.
	Registering the automation manager's identity as "Interactive User" necessitates
	that someone be logged onto the computer to remotely debug SQL.
	
	Visual C++ setup registers the Automation manager as Interactive User, when
	installed with a preexisting SQL Server, with the assumption that you'll want to
	do local SQL debugging. SQL Debugging may not work if the automation manager's
	identity is registered as "Launching User" (the default) and SQL server and
	automation manager are already running in the service environment.
	
	To change the identity that the automation manager recognizes:
	
	1. From the computer on which you installed SQL Server and then installed Visual
	  C++ Enterprise Edition, run DCOMCNFG.exe .
	
	2. From the Applications list, select Remote Automation CLSID_StubMarshaler.
	
	3. Click Properties.
	
	4. Click the Identity tab.
	
	5. Select the appropriate user account.
	
	Visual C++ Starts Automation Manager but Doesn't Shut it Down
	-------------------------------------------------------------
	
	Starting SQL Debugging automatically starts the Automation Manager to manage
	remote OLE objects. Automation Manager displays the current number of
	connections and objects that are instantiated on the remote machine. When Visual
	C++ shut downs, it does not shut down Automation Manager because there isn't any
	method of querying Automation Manager to determine if another application might
	also be using it.
	
	You can manually shut down Automation Manager when it displays that there are no
	connections left.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDebug kbEEdition kbSQL kbVC kbSQLProg 
	Technology        : kbVCsearch kbAudDeveloper kbVC500 kbVC32bitSearch kbVC500Search
	Version           : 5.0
	
	=============================================================================
	

{% endraw %}
