---
layout: page
title: "Q157126: PRB: OpenEx() May Fail with &quot;ODBC;&quot; in Connection String"
permalink: /kb/157/Q157126/
---

## Q157126: PRB: OpenEx() May Fail with &quot;ODBC;&quot; in Connection String

	Article: Q157126
	Product(s): Microsoft C Compiler
	Version(s): winnt:4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbDatabase kbMFC kbODBC kbVC420 kbVC500 kbVC600 kbDSupport kbGrpDSODBC
	Last Modified: 04-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you specify a connection string that begins with the characters ODBC;,
	CDatabase::OpenEx() does not behave as expected.
	
	OpenEx() may fail to open an ODBC datasource using a connection string that
	worked with Open(). Some drivers may appear to ignore information in the
	connection string, such as the userid and password. You may also get an error
	message in the output window similar to the following:
	
	  Invalid connection string attribute
	
	CAUSE
	=====
	
	CDatabase::OpenEx() does not accept a connection string beginning with ODBC;.
	
	RESOLUTION
	==========
	
	Remove the ODBC; prefix from the connection string for OpenEx().
	
	MORE INFORMATION
	================
	
	CDatabase::Open() removes the ODBC; prefix from the connection string before
	passing it to OpenEx().
	
	If an invalid connection string is passed to the driver, it will look in the
	registry for connection information.
	
	REFERENCES
	==========
	
	Visual C++ Books Online Help for CDatabase::OpenEx().
	
	Visual C++ Books Online Help for SQLDriverConnect().
	
	Additional query words: MfcDatabase
	
	======================================================================
	Keywords          : kbDatabase kbMFC kbODBC kbVC420 kbVC500 kbVC600 kbDSupport kbGrpDSODBC 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:4.2,5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
