---
layout: page
title: "Q95023: INF: Error Handling in Visual Basic Data Access Layer"
permalink: /kb/095/Q95023/
---

## Q95023: INF: Error Handling in Visual Basic Data Access Layer

	Article: Q95023
	Product(s): Open Database Connectivity (ODBC)
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Open Database Connectivity, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Visual Basic ODBC layer provides the user with a lot of information on error
	conditions. The errors can be handled by using the On Error function.
	
	MORE INFORMATION
	================
	
	There are 49 trappable errors for Visual Basic ODBC object language elements
	(error numbers 600 through 648). A list of these messages and their meanings can
	be found in the online help (Data Access Help). In Visual Basic, all runtime
	errors are fatal errors; Visual Basic displays the error message and terminates
	the program. However, it is possible to trap these error messages and transfer
	control to an error handling routine. The "On Error Go To <linenumber>"
	function accomplishes this. Control is transferred to <linenumber> where
	the error handling routine begins. Within this routine, the ERR function can be
	used to obtain the error number of the current error message, and based on this,
	appropriate action can be taken. Some of the Visual Basic ODBC Object layer
	(VB/ODBC) error messages use internal variables to provide specific information
	about an error. This is referred to as the "variable portion of the error
	message" in the online Data Access Help. The variable portion can be retrieved
	by using the ERROR$ function. So, the error handler would typically contain a
	call to the ERR function to get the error code; if the error has a variable
	portion, it would contain a call to the ERROR$ function.
	
	Because of the architecture of the VB/ODBC, there are four places where the
	actual error may have occurred:
	
	1. Visual Basic
	
	2. The ODBC driver manager
	
	3. The ODBC driver
	
	4. The data source
	
	The ODBC API defines a standard set of error codes that are returned for errors
	that occur in 2, 3, or 4. Visual Basic maps these error codes to one of its own
	49 trappable errors. In cases where it makes sense to provide the native ODBC
	error code back to the VB application, VB does so - and the variable portion of
	the error message contains the native error. Eight of the 49 trappable errors
	(ERR numbers 602, 606, 611, 613, 615, 618, 619, and 644) return the native error
	messages in the ERROR$ function when these errors occur. You can use a general
	error handler containing a Select Case statement to return the ERROR$ function
	for those ERR numbers. Native ODBC errors contain a lot of information,
	including the name of the data source, the driver name, the vendor of the
	driver, and the error text. For example:
	
	  [Microsoft][ODBC SQL Server Driver][SQL Server] Invalid object name
	  'Employees'.
	
	The important thing to note, especially for programmers transitioning from VBSQL,
	is that there are no callback error handler controls available.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbODBCSearch kbODBC100
	Version           : WINDOWS:1.0
	Issue type        : kbhowto
	
	=============================================================================
	
