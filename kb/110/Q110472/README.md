---
layout: page
title: "Q110472: INF: How to Differentiate Multiple SQLAllocEnv() Calls"
permalink: /kb/110/Q110472/
---

## Q110472: INF: How to Differentiate Multiple SQLAllocEnv() Calls

{% raw %}

	Article: Q110472
	Product(s): Open Database Connectivity (ODBC)
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Open Database Connectivity, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In version 1.0 of Open Database Connectivity (ODBC), every time an application
	calls SQLConnect(), the Driver Manager calls the Driver's SQLAllocEnv(),
	SQLAllocConnect(), and SQLConnect() functions in succession. This means that an
	ODBC driver can be called to allocate multiple environments for the same
	application.
	
	Since a driver must allocate only one environment per application, it must be
	able to distinguish between the first call to SQLAllocEnv from an application
	and subsequent calls to SQLAllocEnv()
	
	MORE INFORMATION
	================
	
	Since only one environment should be allocated for an ODBC application by the
	driver, even though multiple calls to SQLAllocEnv are made from the Driver
	Manager, a driver can use the Windows function GetCurrentTask() to determine
	whether an environment has already been allocated for the calling application
	(task).
	
	Typically, a driver can build a list of tasks that currently have the
	environments allocated, and on every call to SQLAllocEnv(), the driver can use
	this list to determine if the current task has an allocated environment. If the
	task is found in this list, the driver can return the previously allocated
	environment associated with that task, without having to allocate a new
	environment.
	
	Drivers written to the ODBC version 2.0 specification need not use the above
	mechanism because the 2.0 Driver Manager does not call SQLAllocEnv() in the
	Driver on every SQLConnect(). Thus, an ODBC 2.0 driver is assured that its
	SQLAllocEnv() will be called only once on the first SQLConnect() from the
	application. Subsequent SQLConnect() calls in the application to that driver
	will not result in SQLAllocEnv() calls into the driver.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbODBCSearch kbODBC100
	Version           : WINDOWS:1.0
	
	=============================================================================
	

{% endraw %}
