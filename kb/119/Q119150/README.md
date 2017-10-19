---
layout: page
title: "Q119150: FIX: Memory Leak with ODBC Driver Manager During Connection"
permalink: /kb/119/Q119150/
---

## Q119150: FIX: Memory Leak with ODBC Driver Manager During Connection

	Article: Q119150
	Product(s): Open Database Connectivity (ODBC)
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-MAR-2000
	
	1.00.2709
	
	WINDOWS
	
	kbusage kbbug1.00.2709 kbfix2.00
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Open Database Connectivity, version 1.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When an ODBC application makes a sequence of calls to connect to an ODBC driver,
	a memory loss of the order of a few hundred bytes may occur. The loss of memory
	depends on the actual driver in use and the exact calls being made.
	
	CAUSE
	=====
	
	The sequence of calls that exhibit this behavior are:
	
	  SQLAllocEnv
	  SQLAllocConnect
	  SQLConnect or SQLDriverConnect
	  SQLDisconnect
	  SQLFreeConnect
	  SQLFreeEnv
	
	The problem occurs as Driver Manager caches error messages but does not
	subsequently release the memory used for the caching.
	
	For Microsoft Access and Microsoft Visual Basic for Windows applications, the
	behavior is exhibited when a new connection to an ODBC driver is made to either
	access attached tables or to create a dynaset or a snapshot.
	
	When using Microsoft FoxPro Connectivity Kit, the problem is encountered on a
	call to DBConnect(). Microsoft Foundation Classes (MFC) users will see the
	problem when CDatabase::Open and CrecordSet::Open are called.
	
	For Microsoft Word for Windows users, this behavior will be exhibited when
	connecting to an ODBC data source using Microsoft Query. This includes use of
	the INSERT DATABASE and MAIL MERGE functionality in Microsoft Word.
	
	WORKAROUND
	==========
	
	For those drivers that return SQL_SUCCESS_WITH_INFO on SQLDriverConnect or
	SQLConnect call, an application can work around this problem by calling SQLError
	call to retrieve the error message that is cached in Driver Manager; therefore,
	freeing up the memory. The SQLError can be called immediately after SQLConnect
	or SQLDriverConnect returns SQL_SUCCESS_WITH_INFO, calling SQLError repeatedly,
	until it returns SQL_NO_DATA_FOUND.
	
	An example of an ODBC Driver that normally returns SQL_SUCCESS_WITH_INFO on a
	successful connection is SQL Server Driver.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in ODBC Driver Manager version 1.0.
	This problem was fixed in the version 2.x ODBC Driver Manager. Contact your
	primary support provider for more information.
	
	Additional query words: 1.00.2709 DM VC++ VB C++ MSVC FoxPro
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbODBCSearch kbODBC100
	Version           : WINDOWS:1.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
