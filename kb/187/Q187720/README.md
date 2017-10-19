---
layout: page
title: "Q187720: HOWTO: How to Disable ODBC Login Prompt at Run-Time"
permalink: /kb/187/Q187720/
---

## Q187720: HOWTO: How to Disable ODBC Login Prompt at Run-Time

	Article: Q187720
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:2.5,3.0,3.0b,5.0,5.0a
	Operating System(s): 
	Keyword(s): kbnokeyword kbDSupport kbMDAC250
	Last Modified: 22-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a 
	- Microsoft Data Access Components version 2.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Under certain circumstances, for example when the username or password is not
	correctly provided, an ODBC login prompt displays when connecting to an ODBC
	datasource. This article illustrates two ways to disable the ODBC login prompt.
	
	MORE INFORMATION
	================
	
	Below are two ways to disable the login prompt when connecting to an ODBC
	datasource.
	
	Using a Named Connection
	------------------------
	
	1. Create/Open a database container (for example Test.dbc).
	
	2. Create a dummy connection, "conn1", and specify a datasource.
	
	3. Leave the Userid and Password fields blank.
	
	4. Select Never for "Display ODBC Login Prompt".
	
	5. Use the following code to change the Username and Password in the named
	  connection:
	
	        =dbsetprop("Conn1","connection","UserID","<userid>")
	        =dbsetprop("conn1","Connection","Password","<password>")
	
	6. Now you can use the connection to connect to an ODBC DataSource without
	  getting the Login prompt.
	
	Using SQLStringConnect() or SQLConnect()
	----------------------------------------
	
	1. Run the following code to set the default setting of a SQL connection:
	
	        =SQLSetProp(0,"Displogin",3)
	
	  Setting 0 (zero) as the connection handle specifies Visual FoxPro default
	  settings at the environment level.
	
	2. Now you can connect to the ODBC datasource using one of the following
	  commands, without getting the login prompt:
	
	        =SQLStringConnect('dsn=<Data Source>;uid=<User ID>;pwd=<Password>')
	
	  -or-
	
	        =SQLConnect('<Data Source>', '<User ID>', '<Password>')
	
	Additional query words: kbdse
	
	======================================================================
	Keywords          : kbnokeyword kbDSupport kbMDAC250 
	Technology        : kbVFPsearch kbAudDeveloper kbMDACSearch kbMDAC250 kbVFP300 kbVFP300b kbVFP500 kbVFP500a
	Version           : WINDOWS:2.5,3.0,3.0b,5.0,5.0a
	Issue type        : kbhowto
	
	=============================================================================
	
