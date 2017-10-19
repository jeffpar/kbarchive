---
layout: page
title: "Q153797: FIX: Memory Leak with ODBC Driver Manager During Connect"
permalink: /kb/153/Q153797/
---

## Q153797: FIX: Memory Leak with ODBC Driver Manager During Connect

	Article: Q153797
	Product(s): Open Database Connectivity (ODBC)
	Version(s): WINDOWS:2.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Open Database Connectivity, version 2.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When an ODBC application makes a certain sequence of calls to connect to an ODBC
	driver, a memory loss on the order of a few hundred bytes may occur due to a
	memory leak in the Driver Manager. The sequence that results in the memory leak
	is as follows:
	
	     SQLAllocEnv<BR/>
	     SQLAllocConnect<BR/>
	     SQLConnect or SQLDriverConnect<BR/>
	     SQLDisconnect<BR/>
	     SQLFreeConnect<BR/>
	     SQLFreeEnv
	
	This leak affects only those applications that connect and disconnect frequently
	without ever exiting the application. For SQL Server replication users, this
	problem is encountered when a distribution server connects to subscription
	servers as an ODBC client.
	
	WORKAROUND
	==========
	
	An application can share connections. If an application needs to connect and
	disconnect frequently, you can shut down the application periodically. For
	example, if an application is running as a Windows NT service, you can
	periodically shut down and restart the service in order to clean up the memory
	leak.
	
	
	Under Windows NT and Windows 95, each application has its own memory address
	space. After the application is shut down, Windows NT and Windows 95 will clean
	up the application's memory space, including the memory leak.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Open Database
	Connectivity version 2.5.x. This problem has been corrected in Microsoft Open
	Database Connectivity version 3.0.x.
	
	Additional query words: 2.50 ODBC DM VC++ VB C++ MSVC FoxPro
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbODBCSearch kbODBC250
	Version           : WINDOWS:2.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
