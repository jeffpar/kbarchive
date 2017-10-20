---
layout: page
title: "Q180839: FIX: In-line Comments Parsed by Microsoft Oracle Driver"
permalink: /kb/180/Q180839/
---

## Q180839: FIX: In-line Comments Parsed by Microsoft Oracle Driver

{% raw %}

	Article: Q180839
	Product(s): Open Database Connectivity (ODBC)
	Version(s): 2.5,Build 2.73.7269,Build 2.73.7283.01,Build 2.73.7283.03,Build 2.73.7356
	Operating System(s): 
	Keyword(s): kbDatabase kbDriver kbODBC kbOracle kbGrpDSVCDB kbGrpDSMDAC kbDSupport kbMDAC200fix kbM
	Last Modified: 11-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft ODBC for Oracle version 2.0, versions Build 2.73.7269, Build 2.73.7283.01, Build 2.73.7283.03, Build 2.73.7356 
	- Microsoft Data Access Components version 2.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using in-line comments the Microsoft ODBC for Oracle driver may fail with
	the following error message:
	
	  "Syntax Error or Access Violation".
	
	CAUSE
	=====
	
	The driver is incorrectly parsing in-line comments. So far, the word "IS" is the
	only word that has caused the error to occur.
	
	RESOLUTION
	==========
	
	Use the version of the driver that has this problem fixed. See the STATUS
	section. There is no work around to this problem. You cannot use in-line
	comments that contain the word "IS" using the currently released version of the
	driver.
	
	NOTE: Version 1.0 of the Microsoft Oracle driver did not have this problem.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This problem has been corrected in the Microsoft
	Oracle ODBC Driver version 2.573.2927 or higher. This driver is available in
	Visual Studio 6.0, the Data Access Data Access Software Development Kit (SDK)
	version 2.0 or higher, and Microsoft Data Access Components (MDAC) version 2.0
	or higher. You can download the MDAC package from the following Web address:
	
	  http://www.microsoft.com/data/
	
	MORE INFORMATION
	================
	
	In-line comments can be used to send optimizer hints to the Oracle database
	engine.
	
	Steps to Reproduce Behavior
	---------------------------
	
	Using ODBCTest the problem can be reproduced.
	
	1. Open a Full Connection.
	
	2. Enter the following SQL:
	
	        select empno, ename from emp
	        where /* This is a comment */ 
	        empno = 7369
	
	  NOTE: You may need to change the code above to reference a table in your
	  schema.
	
	3. Execute the code.
	
	  The following error message is received:
	
	  SQLExecDirect:
	  In:hstmt = 0x00301250, szSqlStr = "select empno, ename from emp where /* This
	  is a comme...", cbSqlStr = -3 Return: SQL_ERROR=-1 stmt:szSqlState = "42000",
	  *pfNativeError = 0, *pcbErrorMsg = 67, *ColumnNumber = -2, *RowNumber = -2
	  MessageText = "[Microsoft][ODBC driver for Oracle]Syntax error or access
	  violation"
	
	If you remove the word "IS" in the comment you will not get an error message.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDatabase kbDriver kbODBC kbOracle kbGrpDSVCDB kbGrpDSMDAC kbDSupport kbMDAC200fix kbMDAC250 kbGrpDSODBC kbbuglist
	Technology        : kbAudDeveloper kbODBCSearch kbMDACSearch kbMDAC250 kbODBCOracle2737269 kbODBCOracle273728303 kbODBCOracle273728301 kbODBCOracle2737356 kbODBCOracle200Search
	Version           : :2.5,Build 2.73.7269,Build 2.73.7283.01,Build 2.73.7283.03,Build 2.73.7356
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
