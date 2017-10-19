---
layout: page
title: "Q110473: INF: Error Flushing by Driver Manager"
permalink: /kb/110/Q110473/
---

## Q110473: INF: Error Flushing by Driver Manager

	Article: Q110473
	Product(s): Open Database Connectivity (ODBC)
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 28-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Open Database Connectivity, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article discusses how the Driver Manager calls a driver's SQLError to flush
	the errors in the driver's error buffer. Chapter 16 of the ODBC SDK
	"Programmer's Reference" documents the ODBC convention for error text, return
	codes, and rules for handling error conditions.
	
	Under the Returning Error Messages section in chapter 16, it reads:
	
	  Each time the application calls SQLError, the driver returns the next error
	  message in the buffer. When the application calls a different function, the
	  driver discards the current contents of the error message buffer.
	
	It is unclear from the last sentence whether the driver clears the current error
	buffer on entry into the next function, or whether the Driver Manager calls the
	driver to clear its error buffer before entry into the next function.
	
	This article explains how an application calls ODBC function B() after a previous
	call to ODBC function A(), the Driver Manager actually calls the driver's
	SQLError() first and then calls the driver's function B().
	
	MORE INFORMATION
	================
	
	The implication of the Driver Manager calling the Driver's SQLError() is that on
	entry to function B() in the Driver, the Driver has already cleared the error
	buffer. Developers need to note this when debugging their drivers.
	
	Also, when the Driver Manager calls the Driver's SQLError(), it passes the
	appropriate ODBC handles, but for other arguments to SQLError() like szSQLState,
	pfNativeError, it passes a NULL. The SQLError() function for Drivers must be
	written, such that when passed NULL arguments for everything except ODBC handles
	in SQLError(), the errors in the Driver's error buffer are cleared.
	
	The following is a diagram showing how this process is accomplished by the Driver
	Manager.
	
	Application         Driver Manager                Driver
	---------------------------------------------------------------------
	A()         ======>    A()           ======>     A() = SQL_ERROR
	= SQL_ERROR <======   <======        <======     Returns SQL_ERROR
	
	//Application does not call SQLError()
	B()         ======>    B()
	                      SQLError()     ======>    SQLError()
	                             Loop for clearing errors
	                 <=======
	                      DM calls Driver?s B()
	                      ======>        =======>    B() = SQL_SUCCESS
	=SQL_SUCCESS <======   <======        <=======    Returns SQL_SUCCESS
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbODBCSearch kbODBC100
	Version           : WINDOWS:1.0
	
	=============================================================================
	
