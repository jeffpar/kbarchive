---
layout: page
title: "Q191867: HOWTO: Obtain Microsoft SQL Server Version Information"
permalink: /kb/191/Q191867/
---

## Q191867: HOWTO: Obtain Microsoft SQL Server Version Information

	Article: Q191867
	Product(s): Microsoft FoxPro
	Version(s): 2.5,3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbcode kbHWMAC kbSQL kbSQLServ kbvfp300 kbvfp300b kbvfp500 kbvfp500a kbvfp600 kbDSuppor
	Last Modified: 05-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	- Microsoft Data Access Components version 2.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Information regarding the versions of Microsoft SQL Server can be useful when
	you are writing commands that are intended to be specific to a particular
	version of SQL Server.
	
	To check for version information, use one of the following methods:
	
	- Use the "@@version" global variable.
	
	- Use the "xp_msver" extended stored procedure.
	
	- Query the version column of the sysdatabases table.
	
	
	All of these methods return the same information. This article shows how to
	obtain the SQL Server version information from within Visual FoxPro.
	
	MORE INFORMATION
	================
	
	Example One
	-----------
	
	The first example illustrates the use of SQL Server's @@version global variable
	to obtain SQL Server versioning information.
	
	1. Create a program file named Sqlvers1.prg that contains the following code:
	
	        connection_string='DRIVER={SQL Server};SERVER=MYSERVER;' + ;
	           'DATABASE=PUBS;UID=sa;PWD='
	        gnConnHandle=SQLSTRINGCONN(connection_string)
	        IF gnConnHandle>0
	           TEST=SQLEXEC(gnConnHandle,'select @@version','getversion')
	           SELECT getversion
	           versioninfo=EXP
	           sqldisconn(gnConnHandle)
	           =MESSAGEBOX(versioninfo,48,"SQL Server Version")
	        ELSE
	           =MESSAGEBOX("Connection Failed",16,"ODBC Problem")
	        ENDIF
	
	2. From the Command window, type the following command:
	
	  " DO SQLVERS1 " (without the quotation marks)
	
	Example Two
	-----------
	
	The second example illustrates the use of SQL Server's xp_msver extended stored
	procedure to obtain SQL Server versioning information.
	
	1. Create a program file named Sqlvers2.prg that contains the following code:
	
	        connection_string='DRIVER={SQL Server};SERVER=MYSERVER;' + ;
	           'DATABASE=PUBS;UID=sa;PWD='
	        gnConnHandle=SQLSTRINGCONN(connection_string)
	        IF gnConnHandle>0
	           TEST=SQLEXEC(gnConnHandle,'exec xp_msver','getversion')
	           SELECT getversion
	           versioninfo=EXP
	           sqldisconn(gnConnHandle)
	           =MESSAGEBOX(versioninfo,48,"SQL Server Version")
	        ELSE
	           =MESSAGEBOX("Connection Failed",16,"ODBC Problem")
	        ENDIF
	
	2. From the Command window, type following command:
	
	  " DO SQLVERS2 " (without the quotation marks)
	
	3. Compare the output with the information that you obtained using the @@version
	  global variable.
	
	Example Three
	-------------
	
	The third example illustrates the use of information contained in the version
	column of the sysdatabases table to obtain SQL Server version information.
	
	1. Create a program file named Sqlvers3.prg that contains the following code:
	
	        connection_string='DRIVER={SQL Server};SERVER=MYSERVER;' + ;
	           'DATABASE=PUBS;UID=sa;PWD='
	        gnConnHandle=SQLSTRINGCONN(connection_string)
	        IF gnConnHandle>0
	           sqlcommand="SELECT version FROM sysdatabases WHERE dbid = 1"
	           TEST=SQLEXEC(gnConnHandle,sqlcommand,'getversion')
	           SELECT getversion
	           versioninfo=EXP
	           sqldisconn(gnConnHandle)
	           =MESSAGEBOX(versioninfo,48,"SQL Server Version")
	        ELSE
	           =MESSAGEBOX("Connection Failed",16,"ODBC Problem")
	        ENDIF
	
	2. From the Command window, type the following command:
	
	  " DO SQLVERS3 " (without the quotation marks)
	
	3. Compare the output with the information that you obtained using the @@version
	  global variable and the xp_msver extended stored procedure.
	
	
	(c) Microsoft Corporation 1998, All Rights Reserved. Contributions by John Desch,
	Microsoft Corporation.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbcode kbHWMAC kbSQL kbSQLServ kbvfp300 kbvfp300b kbvfp500 kbvfp500a kbvfp600 kbDSupport kbMDAC250 kbSQLProg 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbMDACSearch kbMDAC250 kbVFP300bMac kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : :2.5,3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
