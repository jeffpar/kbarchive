---
layout: page
title: "Q195017: FIX: Memory Leak in Microsoft Access ODBC Driver in MDAC 2.0"
permalink: /kb/195/Q195017/
---

## Q195017: FIX: Memory Leak in Microsoft Access ODBC Driver in MDAC 2.0

	Article: Q195017
	Product(s): Open Database Connectivity (ODBC)
	Version(s): WINDOWS:2.0,2.1 SP2,2.5,3.5
	Operating System(s): 
	Keyword(s): kbDatabase kbDriver kbJET kbMDAC kbODBC kbSDKDataAc200bug kbGrpDSMDAC kbDSupport kbMDAC
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft ODBC Driver for Access, version 3.5 
	- Microsoft Data Access Components versions 2.0, 2.1 SP2, 2.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Microsoft Access ODBC Driver, version 3.51.1713, which is provided with the
	Microsoft Data Access Components version 2.0, leaks memory when opening a
	connection, performing a query on that connection, and then closing the
	connection.
	
	RESOLUTION
	==========
	
	To work around this behavior, keep the connection open as long as possible.
	Minimizing the number of times you make a connection will minimize the memory
	leak.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This bug was corrected in in a newer version of the Access ODBC Driver included
	with MDAC 2.1.
	
	MORE INFORMATION
	================
	
	As an example, the following code causes several hundred bytes to leak for each
	iteration through the loop:
	
	     *****
	     for(int nLoops=0; nLoops < 1000; nLoops++)
	     {
	       RETCODE rc;
	       SQLAllocEnv(&henv);
	       SQLAllocConnect(henv, &hdbc);
	
	       SWORD nResult;
	       UCHAR szConnectOutput[255];
	       rc = SQLDriverConnect(hdbc, NULL,(UCHAR*)(const char*)"DSN=MYDSN",
	                          SQL_NTS,szConnectOutput, 255, &nResult,
	                          SQL_DRIVER_COMPLETE);
	
	       SQLAllocStmt(hdbc, &hstmt);
	       rc = SQLExecDirect(hstmt, (UCHAR *)"SELECT * from table1", SQL_NTS);
	
	       SQLFreeStmt(hstmt,SQL_DROP);
	       SQLDisconnect(hdbc);
	       SQLFreeConnect(hdbc);
	       SQLFreeEnv(henv);
	     }
	     *****
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDatabase kbDriver kbJET kbMDAC kbODBC kbSDKDataAc200bug kbGrpDSMDAC kbDSupport kbMDAC250 
	Technology        : kbAudDeveloper kbAccessSearch kbODBCSearch kbMDACSearch kbMDAC200 kbMDAC210SP2 kbMDAC250 kbODBCAccess350
	Version           : WINDOWS:2.0,2.1 SP2,2.5,3.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
