---
layout: page
title: "Q113673: FIX: GP Fault in SIMBA.DLL w/ Second SQLExecute() of DEL Stmt"
permalink: /kb/113/Q113673/
---

## Q113673: FIX: GP Fault in SIMBA.DLL w/ Second SQLExecute() of DEL Stmt

{% raw %}

	Article: Q113673
	Product(s): Open Database Connectivity (ODBC)
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Open Database Connectivity, version 1.0 
	-------------------------------------------------------------------------------
	
	BUG# ODBCDBASE: 2060 (1.01.1928)
	
	SYMPTOMS
	========
	
	Prepared delete statements with bound parameters will general protection fault
	(GP fault) in SIMBA.DLL when the statement is executed a second time with
	SQLExecute(). This will occur with the any of the Microsoft ODBC Desktop
	Database Drivers.
	
	WORKAROUND
	==========
	
	This problem has been fixed in the 1.02.1403 version of SIMBA.DLL.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the ODBC Desktop Database
	Drivers version 1.01.1928 and 1.01.2115. This problem has been fixed in the ODBC
	Desktop Database Drivers version 1.02.1403, on the Internet through anonymous
	FTP to ftp.microsoft.com, under /developr/odbc/public. The file name is
	Simba.exe. For more information, please contact your primary support provider.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Create a table:
	
	        create table model01 (col1 char(30))
	        insert into model01 values ('A')
	        insert into model01 values ('B')
	
	2. Open up the application ODBC Test and type into the input windows the
	  following statement: delete from model01 where col1 = ?.
	
	3. Using ODBC Test, choose SQLPrepare() from the Statement menu bar item to
	  prepare the delete statement with a parameter.
	
	4. Bind the variable with SQLSetParam() from the Statement menu bar item.
	
	5. Use Fill Param to place an appropriate value in the parameter.
	
	6. Execute the statement twice using SQLExecute() from the Statement menu bar
	  item to recreate the GP Fault.
	
	Additional query words: 1.01.1928 1.01.2115 ODBC FoxPro Dbase Paradox Btrieve Access Text Excel gpf
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbODBCSearch kbODBC100
	Version           : WINDOWS:1.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
