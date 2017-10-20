---
layout: page
title: "Q306579: BUG: ODBC Application Terminates When CTRL+ALT+DEL Pressed"
permalink: /kb/306/Q306579/
---

## Q306579: BUG: ODBC Application Terminates When CTRL+ALT+DEL Pressed

{% raw %}

	Article: Q306579
	Product(s): Open Database Connectivity (ODBC)
	Version(s): (all versions and editions),4.0
	Operating System(s): 
	Keyword(s): kbDatabase kbDriver kbJET kbODBC360bug kbGrpDSVCDB kbGrpDSMDAC kbDSupport kbGrpDSODBC
	Last Modified: 04-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft ODBC Driver for Access, version 4.0, used with:
	   - the operating system: Microsoft Windows NT, versions (all versions and editions), 4.0 
	   - the operating system: Microsoft Windows 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Using ODBC to access a datasource through the Microsoft Jet ODBC driver version
	4.0.4403.2 (which ships with MDAC 2.5 RTM) or later, you may see the following
	behavior. When the application is running, if the user presses CTRL+ALT+DEL to
	bring up the Windows NT Security dialog box and then dismisses the dialog box by
	clicking Cancel, the ODBC application may terminate unexpectedly. This behavior
	can also occur when the screensaver is activated and then deactivated.
	
	CAUSE
	=====
	
	This is caused by a known issue with the Microsoft Jet ODBC driver versions
	4.0.4403.2 and later. The problem only occurs when ODBC environment handles are
	allocated, used, and then all freed before the application terminates.
	
	RESOLUTION
	==========
	
	Do not free all ODBC environment handles in the application until it is time for
	the application to be unloaded.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	
	MORE INFORMATION
	================
	
	To reproduce the problem, the application must open an ODBC environment handle
	(HENV), use that handle, and then free the handle using SQLFreeHandle or
	SQLFreeEnv. After the last handle is freed, and the application is still loaded,
	if CTRL+ALT+DEL is pressed or the screensaver is activated, the application
	terminates unexpectedly.
	
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a Win32 console application and paste the following code:
	
	  #include <windows.h>
	  #include <sql.h>
	  #include <sqlext.h>
	  #include <stdio.h>
	
	  void main()
	  {	
	  	SQLHENV		henv = SQL_NULL_HENV;
	  	SQLHDBC		hdbc1 = SQL_NULL_HDBC;     
	  	
	  	RETCODE retcode;
	  	
	  	if (!SQL_SUCCEEDED(retcode = SQLAllocHandle (SQL_HANDLE_ENV, NULL, &henv))) { printf("SQLAllocHandle(ENV) failed.\n");}
	  	if (!SQL_SUCCEEDED(retcode = SQLSetEnvAttr(henv, SQL_ATTR_ODBC_VERSION, (SQLPOINTER) SQL_OV_ODBC3, SQL_IS_INTEGER))) { printf("SQLSetEnvAttr failed.\n");}
	  	if (!SQL_SUCCEEDED(retcode = SQLAllocHandle(SQL_HANDLE_DBC, henv, &hdbc1))) { printf("SQLAllocHandle(DBC) failed.\n");}
	  	if (!SQL_SUCCEEDED(retcode = SQLConnect(hdbc1, (SQLCHAR*)"reidpubs", SQL_NTS, (SQLCHAR*)"", SQL_NTS, (SQLCHAR*)"", SQL_NTS))) { printf("SQLConnect failed.\n");}
	  	if (!SQL_SUCCEEDED(retcode = SQLDisconnect(hdbc1))) { printf("SQLDisconnect failed.\n");}
	  	if (!SQL_SUCCEEDED(retcode = SQLFreeHandle(SQL_HANDLE_DBC, hdbc1))) { printf("SQLFreeHandle(DBC) failed.\n");}
	  	if (!SQL_SUCCEEDED(retcode = SQLFreeHandle(SQL_HANDLE_ENV, henv))) { printf("SQLFreeHandle(ENV) failed.\n");}
	  	hdbc1 = SQL_NULL_HDBC;  
	  	henv = SQL_NULL_HENV;
	  	char ch;
	  	printf("enter a key to close\n");
	  	scanf(&ch);
	
	  }
	
	2. In the code, replace "reidpubs" with the name of a data source name (DSN) to
	  a Microsoft Access database.
	
	3. Run the application. When "enter a key to close" is displayed on the console,
	  press CTRL+ALT+DEL or let the screensaver start.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDatabase kbDriver kbJET kbODBC360bug kbGrpDSVCDB kbGrpDSMDAC kbDSupport kbGrpDSODBC 
	Technology        : kbAudDeveloper kbAccessSearch kbODBCSearch
	Version           : :(all versions and editions),4.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
