---
layout: page
title: "Q132231: INFO: Connection Properties You Can Access with SQLGETPROP()"
permalink: /kb/132/Q132231/
---

## Q132231: INFO: Connection Properties You Can Access with SQLGETPROP()

	Article: Q132231
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:2.5,3.0
	Operating System(s): 
	Keyword(s): kbvfp300 kbMDAC250
	Last Modified: 22-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft Data Access Components version 2.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In Visual FoxPro, you can view the current property settings for a connection by
	using the SQLGETPROP() command with the respective connection handle. This
	article lists the connection properties that can be accessed with SQLGETPROP()
	and shows how to use SQLGETPROP().
	
	This information is also available under SQLSETPROP() in the Visual FoxPro Help
	file.
	
	MORE INFORMATION
	================
	
	In Visual FoxPro, you can use SQLGETPROP() to display the information used to
	create the active connection, to work with shared connections, to control
	interface display and time intervals, and to fetch result sets into view
	cursors. You can also use it to ensure that active connections are deactivated
	after a specified time interval, to manage transactions, and to display internal
	ODBC handles.
	
	SQLGETPROP() returns the current or default settings for an active connection.
	SQLGETPROP() returns a numeric value to describe the setting. To view the
	current property settings for a connection, use SQLGETPROP() with the respective
	connection handle using the following syntax:
	
	     SQLGETPROP(nConnectionHandle, cSetting)
	
	For example, the following command reads the setting for the "asynchronous"
	connection property:
	
	     SQLGETPROP(gnConnHandle, 'asynchronous')
	
	The nConnectionHandle parameter specifies the connection handle to the data
	source returned by SQLCONNECT(). If you specify 0 for the active connection,
	SQLGETPROP() returns the default setting. If a connection level error occurs, -1
	is returned. If an environment level error occurs, -2 is returned.
	
	The cSetting parameter specifies the setting.
	
	Connection Properties Available
	-------------------------------
	
	The connection properties that can be accessed with SQLGETPROP() are listed below
	in functional groups.
	
	To display the information used to create the active connection:
	
	- ConnectString   The login connection string.
	- DataSource      The name of the data source as defined by ODBC.
	- Password        The connection password.
	- UserID          The user identification.
	
	NOTE: Documents that ship with the Professional Edition of Microsoft Visual
	FoxPro version 3.0 for Windows and the Visual FoxPro Help file incorrectly list
	the ConnectName property as being available with the SQLGETPROP() function.
	
	For more information about documentation error regarding the ConnectName property
	and the SQLGETPROP() function, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q137408 DOCERR: Can't Use ConnectName Property w/SQLGETPROP() Function
	
	To work with shared connections:
	
	- ConnectBusy     True (.T.) if a shared connection is busy; false (.F.)
	                  otherwise.
	
	To control interface display:
	
	- DispLogin       Controls when the ODBC Login dialog box is displayed.
	- DispWarnings    Controls whether error messages are displayed or not.
	
	To control time intervals:
	
	- ConnectTimeout  Specifies the time (in seconds) to wait before
	                  returning a connection time-out error.
	- IdleTimeout     Specifies the idle timeout interval (in seconds).
	
	To qualify active connections are deactivated after a specified time interval:
	(1)
	
	- WaitTime        Controls the amount of time in milliseconds that
	                  elapses before Visual FoxPro checks whether the SQL
	                  statement has completed executing.
	
	- QueryTimeout    Controls the time (in seconds) to wait before returning
	                  a general time-out error.
	
	To manage transactions:
	
	- Transactions    Determines how the connection manages transactions on
	                  the remote table.
	
	To control fetching of result sets into view cursors:
	
	- synchronous     Specifies if result sets are returned synchronously
	                  (the default) or asynchronously.
	- BatchMode       Specifies if SQLEXEC( ) returns result sets all at once
	                  (the default), or individually with SQLMORERESULTS( ).
	
	To display internal ODBC handles:
	
	- ODBChdbc (2)    The internal ODBC connection handle that can be used by
	                  external library files (.FLL files) to call the ODBC
	                  API functions.
	- ODBChstmt (2)   The internal ODBC statement handle that can be used by
	                  external library files (.FLL files) to call the ODBC
	                  API functions.
	
	(1) If in manual transaction mode, the connection is not deactivated.
	
	(2) If a connection is deactivated, the ODBChdbc and ODBChstmt values are
	   no longer valid.
	
	NOTE: See SQLSETPROP() in the Visual FoxPro Help file for a list of the settings
	you can set with the SQLSETPROP() function.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          : kbvfp300 kbMDAC250 
	Technology        : kbVFPsearch kbAudDeveloper kbMDACSearch kbMDAC250 kbVFP300
	Version           : WINDOWS:2.5,3.0
	Issue type        : kbinfo
	
	=============================================================================
	
