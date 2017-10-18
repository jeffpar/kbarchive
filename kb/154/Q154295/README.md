---
layout: page
title: "Q154295: FIX: TDS Errors in a Multithreaded ODBC Application"
permalink: kb/154/Q154295/
---

## Q154295: FIX: TDS Errors in a Multithreaded ODBC Application

	Article: Q154295
	Product(s): Open Database Connectivity (ODBC)
	Version(s): WINDOWS:2.65
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-MAR-2000
	
	2.65
	
	WINDOWS
	
	kbusage kbinterop kbbug2.65 kbfix6.50.sp2
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Open Database Connectivity, version 2.65 
	-------------------------------------------------------------------------------
	
	BUG #: 15705 (SQLBUG_65)
	
	SYMPTOMS
	========
	
	When two or more threads share the same database connection (but different
	hstmts), a call to SQLExecDirect or SQLExecute fails, and one of the following
	errors occurs:
	
	  [Microsoft][ODBC SQL Server Driver][SQL Server] Received an unrecognized
	  datatype 0 from TDS data stream
	
	  [Microsoft][ODBC SQL Server Driver]Unknown token received from SQL Server
	
	  [Microsoft][ODBC SQL Server Driver]Protocol error in TDS stream
	
	The error(s) received depends on which network library (TCP/IP sockets or named
	pipes) is being used.
	
	WORKAROUND
	==========
	
	To work around this problem, do one of the following:
	
	- Use a Critical Section object around SQLExecDirect or SQLExecute.
	
	- Use a different connection for each thread, rather than sharing the same
	  connection.
	
	- Add a Sleep function for about 1,000 to 5,000 milliseconds before
	  SQLExecDirect or SQLExecute.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SQL Server ODBC Driver
	version 2.65. This problem has been corrected in U.S. Service Pack 2 for
	Microsoft SQL Server version 6.5. For more information, contact your primary
	support provider.
	
	Additional query words: MFC mfcdatabase Classes RDO Visual Basic
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbODBCSearch
	Version           : WINDOWS:2.65
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
