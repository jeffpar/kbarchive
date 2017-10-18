---
layout: page
title: "Q110475: INF: Sharing ODBC Handles Among Several Applications"
permalink: kb/110/Q110475/
---

## Q110475: INF: Sharing ODBC Handles Among Several Applications

	Article: Q110475
	Product(s): Open Database Connectivity (ODBC)
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 27-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Open Database Connectivity, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When a Windows DLL is written such that it acts as an intermediary between
	several applications and ODBC drivers, it may be necessary to share connections
	among the applications. This article discusses the architectural blocks to
	sharing ODBC environment, connection, and statement handles among several
	applications through a user Windows DLL. It also discusses how a service
	provider DLL can be written so that it can access ODBC drivers and provide an
	interface to applications without sharing handles between applications.
	
	MORE INFORMATION
	================
	
	ODBC Environment, connection, and statement handles are unique to tasks and
	cannot be shared among different tasks because the ODBC Driver Manager and ODBC
	drivers, when allocating memory for the connection, do not use the DDE_SHARE
	option on the GlobalAlloc(). For instance, in response to a call from an
	application, when a user DLL calls SQLAllocConnect() in the driver DLL, the
	memory is being allocated by the driver DLL in the context of the calling task,
	for example, the task that called the user DLL. In this scenario, another task
	that calls this same user DLL cannot then use this recently allocated connection
	handle to call ODBC functions.
	
	If an ODBC connection needs to be shared among several applications, the
	following equivalent approach may be used. Instead of writing a DLL that shares
	various ODBC handles among applications, write an application that provides the
	same services as the user DLL would. Such an application would contain the calls
	to SQLAllocEnv(), SQLAllocConnect(), SQLAllocStmt(), and various other ODBC
	calls, and the other applications that need ODBC access can communicate via DDE
	with this DDE Server application. All ODBC function calls would then be
	encapsulated in the DDE Server application.
	
	When writing a user DLL (without sharing ODBC handles among applications), it is
	important to have a separate ODBC environment for every task/application.
	Therefore, each application must make its own calls to SQLAllocEnv(), or have an
	initialization routine in the user DLL call SQLAllocEnv() in the ODBC driver in
	the context of the calling application/task.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbODBCSearch kbODBC100
	Version           : WINDOWS:1.0
	
	=============================================================================
	
