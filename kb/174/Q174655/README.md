---
layout: page
title: "Q174655: PRB: File DSN and DSN-Less Connections May Fail w/Localized ODBC"
permalink: /kb/174/Q174655/
---

## Q174655: PRB: File DSN and DSN-Less Connections May Fail w/Localized ODBC

{% raw %}

	Article: Q174655
	Product(s): Open Database Connectivity (ODBC)
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbcode
	Last Modified: 25-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Open Database Connectivity, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When shareable file Data Source Name (DSN) or DSN-less connections are used on
	computers with localized Open Database Connectivity (ODBC) driver descriptions,
	the connection may fail with the following message:
	
	  IM002: [Microsoft][ODBC Driver Manager] Data source name not found and no
	  default driver specified
	
	CAUSE
	=====
	
	Shareable file DSN and DSN-less connections use the DRIVER keyword to indicate
	which ODBC driver to use. The DRIVER keyword is set to a driver description that
	must match the description of an installed driver on the client computer. On
	computers with localized ODBC driver descriptions, the description used in the
	file DSN or DSN-less connection may not match that of the installed driver,
	thereby causing the error message described above.
	
	For example, if the German version of Microsoft Office 97 installed the ODBC
	Access 97 driver with a description of "Microsoft Access-Treiber (*.mdb)," a
	file DSN or a DSN-less connection containing "DRIVER={Microsoft Access Driver
	(*.mdb)}" will fail, even though the Access driver has been installed properly.
	
	WORKAROUND
	==========
	
	To work around this problem, do either of the following:
	
	- Change the driver description used in the file DSN or DSN-less connection so
	  that it matches the one on the client computer.
	
	  -or-
	
	- Install the driver again on the client computer with the description used in
	  the connect string. Note that using this option will result in more than one
	  description for the same driver, which will allow any program using any one
	  of the localized descriptions to connect through the driver on the client.
	
	The following ODBC 3.0 sample code illustrates a minimal installation of the ODBC
	SQL Server driver with an English driver description. You can alter the code to
	install any ODBC driver with any driver description. For more information
	concerning the files and function calls used in the code, see the ODBC 3.0 SDK.
	
	     #include <windows.h>
	     #include <stdio.h>
	     #include <odbcinst.h>
	
	     void ShowErrors ()
	     {
	        WORD     iError = 1;
	        DWORD pfErrorCode;
	        char     lpszErrorMsg[301];
	        WORD     cbErrorMsgMax = 300;
	        RETCODE  rc;
	
	        while (SQL_NO_DATA != (rc = SQLInstallerError(
	                 iError ++,
	                 & pfErrorCode,
	                 lpszErrorMsg,
	                 cbErrorMsgMax,
	                 NULL )))
	           if (rc == SQL_SUCCESS || rc == SQL_SUCCESS_WITH_INFO)
	              printf( "%s\n", lpszErrorMsg);
	
	        printf ("\n");
	     }
	
	     void main ()
	     {
	        char *    szDriver = "SQL
	     Server\0Driver=sqlsrv32.dll\0Setup=sqlsrv32.dll\0\0";
	        char *    szPathIn = "c:\\winnt\\system32";
	        char   szPathOut[301];
	        WORD   cbPathOutMax = 300;
	        WORD   cbPathOut;
	        DWORD dwUsageCount;
	
	        printf ("Calling SQLInstallDriverEx ...\n");
	        if (!SQLInstallDriverEx(
	              szDriver,
	              szPathIn,
	              szPathOut,
	              cbPathOutMax,
	              & cbPathOut,
	              ODBC_INSTALL_COMPLETE,
	              & dwUsageCount))
	           ShowErrors ();
	
	        printf ("Calling SQLConfigDriver ...\n");
	        if (!SQLConfigDriver(
	              NULL,
	              ODBC_INSTALL_DRIVER,
	              "Microsoft Access - test 4",
	              "",
	              szPathOut,
	              cbPathOutMax,
	              & cbPathOut))
	           ShowErrors ();
	     }
	
	Additional query words: jet desktop database
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbAudDeveloper kbODBCSearch kbODBC300
	Version           : WINDOWS:3.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
