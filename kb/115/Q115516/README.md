---
layout: page
title: "Q115516: PRB: S1000: &quot;Unable to create file buffer&quot; ODBC Error"
permalink: /kb/115/Q115516/
---

## Q115516: PRB: S1000: &quot;Unable to create file buffer&quot; ODBC Error

	Article: Q115516
	Product(s): Microsoft C Compiler
	Version(s): 1.5,1.51,1.52,2.0,2.1,2.5,4.0,4.1,4.2,4.2b,5.0,6.0
	Operating System(s): 
	Keyword(s): kbDatabase kbFileIO kbMFC kbODBC kbVC150 kbVC151 kbVC152 kbVC200 kbVC210 kbVC400 kbVC41
	Last Modified: 11-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.5, 1.51, 1.52 
	   - Microsoft Visual C++, 32-bit Editions, versions 2.0, 2.1, 4.0, 4.1 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.2, 4.2b, 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, versions 4.2, 4.2b, 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	- Microsoft Data Access Components version 2.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following error may occur when calling Open() for a CDatabase or CRecordset
	object:
	
	  General error: Unable to create file buffer.
	  State:S1000,Native:0,Origin:[Microsoft][ODBC Cursor Library]
	
	  -or-
	
	  General error: Unable to write to file buffer
	  State:S1000, Native:0, Origin:[Microsoft][ODBC Cursor Library]
	
	  -or-
	
	  General error: Unable to close file buffer
	  State:S1000, Native:0, Origin:[Microsoft][ODBC Cursor Library]
	
	CAUSE
	=====
	
	By default the MFC ODBC CDatabase class loads the ODBC cursor library (16 bit:
	ODBCCURS.DLL, 32 bit: ODBCCR32.dll). This allows an application to define
	snapshot recordsets (the default) and scroll backward as well as forward through
	the recordset. This cursor library caches the records of a snapshot. To perform
	the caching, the 16-bit cursor library creates a temporary file in the directory
	specified by the TEMP environment variable or, if the TEMP variable is not
	defined, in the current directory. The 32-bit cursor library creates a temporary
	file in the current directory. A temporary file is created for each CRecordset
	object created. If the temporary file cannot be created, the error shown above
	occurs. This error most likely occurs for one of the following reasons:
	
	- There are not enough file handles available for the application.
	
	  -or-
	
	- There is not enough hard disk space available to create the file.
	
	RESOLUTION
	==========
	
	To avoid the error, increase the number of available file handles for the
	application. This can be done by calling the Windows API function
	SetHandleCount(). Also, increase the number specified by the "FILES=" line in
	the CONFIG.SYS file.
	
	NOTE: On Windows NT calling SetHandleCount() has no effect and Windows NT ignores
	the config.sys file. Windows NT limits file handles solely on the amount of
	available memory.
	
	Make sure that there is plenty of disk space available in the directory specified
	by the TEMP environment variable or the current working directory.
	
	Additional query words: MfcDatabase
	
	======================================================================
	Keywords          : kbDatabase kbFileIO kbMFC kbODBC kbVC150 kbVC151 kbVC152 kbVC200 kbVC210 kbVC400 kbVC410 kbVC420 kbVC500 kbVC600 kbGrpDSVCDB 
	Technology        : kbAudDeveloper kbMFC
	Version           : :1.5,1.51,1.52,2.0,2.1,2.5,4.0,4.1,4.2,4.2b,5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
