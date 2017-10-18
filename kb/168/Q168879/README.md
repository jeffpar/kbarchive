---
layout: page
title: "Q168879: INF: Driver Manager Trace Facility Logs User Names and  Password"
permalink: kb/168/Q168879/
---

## Q168879: INF: Driver Manager Trace Facility Logs User Names and  Password

	Article: Q168879
	Product(s): Open Database Connectivity (ODBC)
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbinterop kbusage
	Last Modified: 27-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Open Database Connectivity, version 3.0 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	If you use the ODBC 3.0 Driver Manager trace facility with the Odbctrac.dll file
	that comes with ODBC 3.0, user names and passwords used for connections may be
	logged without encryption in the trace log.
	
	WORKAROUND
	==========
	
	You can prevent an ODBC 3.0 Driver Manager trace on computers either by removing
	the Odbctrac.dll file or by replacing it with a zero-length file of the same
	name. If tracing is attempted afterwards, the following message may appear:
	
	  General Error: either odbctrac.dll is not an ODBC tracing dll or it is
	  obsolete.
	
	With ODBC version 3.0 Service Pack 1, the user names and passwords are displayed
	as "******" in the trace log. Also, the trace DLL must be in the System
	directory on computers running Windows 95 or the System32 directory on computers
	running Windows NT. If the trace DLL is located elsewhere, tracing will not
	occur, and the message described above may appear.
	
	MORE INFORMATION
	================
	
	The ODBC 3.0 Driver Manager trace facility is provided as a debugging tool for
	diagnosing a wide range of ODBC issues, including database connectivity. In many
	debugging instances, it is necessary to determine what user name and password
	were used to establish the connection to the database. The ODBC 3.0 Driver
	Manager trace logs the user name and password to allow for comprehensive
	debugging of ODBC issues, and is the ODBC 3.0 replacement for the Driver Manager
	trace facility and ODBC SPY trace program for ODBC 2.x. The ODBC SPY trace
	program also logs the user name and password used in a connection.
	
	The proper use of the ODBC 3.0 tracing facility is documented in the ODBC 3.0
	Programmer's Reference Guide in Chapter 17, "Programming Considerations," under
	the section for Tracing.
	
	You can find additional information on ODBC security at:
	
	  http://www.microsoft.com/odbc/
	
	
	Additional query words: utility
	
	======================================================================
	Keywords          : kbinterop kbusage 
	Technology        : kbAudDeveloper kbODBCSearch kbODBC300
	Version           : WINDOWS:3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
