---
layout: page
title: "Q156138: INFO: Limitations of DAO, DAO SDK in NT Service or with Threads"
permalink: /kb/156/Q156138/
---

## Q156138: INFO: Limitations of DAO, DAO SDK in NT Service or with Threads

{% raw %}

	Article: Q156138
	Product(s): Microsoft C Compiler
	Version(s): 4.0,4.1,4.2
	Operating System(s): 
	Keyword(s): kbcode kbDAOsearch kbDatabase kbMFC kbODBC kbService kbVC
	Last Modified: 15-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Editions, versions 4.0, 4.1 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	   - The DAO SDK 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	With the release of MFC Open Database Connectivity (ODBC) in Visual C++ 4.2, you
	can use both MFC and the MFC ODBC classes within the multithreaded environment
	of a Windows NT Service. Neither the MFC Data Access Objects (DAO) classes nor
	the DAO SDK are thread-safe because the underlying Jet engine is not thread-safe
	and cannot be used in a Windows NT Service.
	
	The techniques presented here are valid for any multithreaded environment with
	the MFC ODBC classes, not just a Windows NT Service.
	
	The remainder of this article explores the following three areas relating to
	using MFC-based database classes within a Windows NT Service:
	
	- How a Windows NT Service works
	
	- How to use MFC ODBC in a multithreaded environment
	
	- Why MFC DAO or the DAO SDK cannot be used in a multithreaded environment
	
	MORE INFORMATION
	================
	
	How a Windows NT Service Works
	------------------------------
	
	A Windows NT Service consists of code that is roughly similar to the following:
	
	     VOID WINAPI Main( VOID )
	     {
	         ...
	         if (!StartServiceCtrlDispatcher(...))
	             AddToMessageLog(TEXT("StartServiceCtrlDispatcher failed."));
	         ...
	     }
	
	When a service is started, the Service Control Manager waits for the primary
	thread of the service to invoke a call to StartServiceCtrlDispatcher(). This
	call triggers the creation of a named pipe whose purpose is to provide a
	communication channel between the service and the Service Control Manager. The
	primary thread acts as a control dispatcher for the service. The service
	receives control requests from the Service Control Manager via the control
	handler (callback function). In addition, the StartServiceCtrlDispatcher()
	invokes a secondary thread that contains the entry point of the service as
	specified by the SERVICE_TABLE_ENTRY structure. If the
	StartServceCtrlDispatcher() call succeeds, the StartServiceCtrlDispatcher() call
	in the primary thread does not return until all running services in the process
	have terminated.
	
	Any attempt to use database classes within a running service must not only be
	thread-safe, but must also be able to operate in the secondary thread.
	
	How to Use MFC ODBC in a Multithreaded Environment
	--------------------------------------------------
	
	With the release of Visual C++ 4.2, both MFC and the MFC ODBC database code is
	safe to use in a multithreaded environment. However, you should keep the
	following points in mind:
	
	- Use an ODBC Driver That Is Thread-Safe.
	
	  The multithreading support for the ODBC classes has some limitations. Because
	  these classes wrap the ODBC API, they are restricted to the multithreading
	  support of the components on which they are built. For example, there are
	  many ODBC drivers that are not thread-safe; therefore, the MFC ODBC classes
	  are not thread-safe if you use them with one of these drivers. You should
	  verify whether your particular driver is thread-safe, as well as any
	  components it uses.
	
	
	- Avoid Using MFC ODBC Globally or Across Multiple Threads.
	
	  When creating a multithreaded application, you should be very careful in using
	  multiple threads to manipulate the same object. For example, using the same
	  CRecordset object in two threads may cause problems when retrieving data; a
	  fetch operation in one thread may overwrite the data fetched in the other
	  thread.
	
	  A global Database object, even protected by a global instance of
	  CCriticalSection, may not be safe.
	
	- Use a System Data Source Name (DSN) for Your ODBC Data Source.
	
	  Any ODBC Data Source used by the MFC ODBC classes within a Windows NT Service
	  must be a System DSN. Without a System DSN you see the following Error when
	  trying to open the data source:
	
	  Data source name not found and no default driver specified
	  State:IM002,Native:0,Origin:[Microsoft][ODBC Driver Manager]
	
	  The process for creating a System DSN is identical to creating a regular data
	  source. Open the 32-bit ODBC Administrator (in the Control Panel) and click
	  the button that says "System DSN" to create or modify your System Data
	  Sources.
	
	  See the Knowledge Base article listed in the REFERENCES section of this
	  article for more information.
	
	- It May Be Necessary to Impersonate a Valid Windows NT User.
	
	  When you use an Internet Server API (ISAPI) dynamic-link library (DLL) to get
	  to a data source that is not on the same machine as the ISAPI DLL, you might
	  need to impersonate a valid Windows NT user. For example, an ISAPI DLL using
	  MFC ODBC to manipulate data on a SQL Server that is on a different machine
	  requires a valid Windows NT Domain userid and password. Otherwise, the
	  Windows NT machine running SQL Server does not allow the ISAPI DLL to make
	  the connection.
	
	  Win32 provides several functions that allow you to log on with a valid userid
	  and password, letting the ISAPI DLL "impersonate" a valid user.
	
	  See the two Knowledge Base articles listed in the REFERENCES section of this
	  article for more information.
	
	- Using MFC ODBC in a Windows NT Service Is Just Like Using MFC ODBC in a
	  Console Application.
	
	  A Windows NT Service is similar to a console application in that it does not
	  offer the standard Windows Message Pump. The MFC ODBC classes, with Visual
	  C++ 4.2, have been written to be more friendly to console applications.
	  However, there are some issues that you should be aware of.
	
	  See the Knowledge Base article listed in the REFERENCES section of this
	  article for more information.
	
	Why MFC DAO or DAO SDK Cannot Be Used in a Multithreaded Environment
	--------------------------------------------------------------------
	
	
	DAO version 3.x is a single-threaded in-process server and was originally written
	for Access 1.x and 2.0 and Visual Basic 3.0, both of which are single-threaded.
	This means that clients (MFC DAO or DAO SDK) can use DAO via custom interfaces
	only from the first thread in the process that initialized COM, that is, the
	"primary" thread.
	
	If the client has already initialized COM in the primary thread and then calls
	CoCreateInstance in the secondary thread asking for the IDAODBEngine interface,
	CoCreateInstance fails. This fails because COM sees that DAO is not marked as
	apartment or free threaded in the registry, calls DllGetClassObject from the
	primary thread, gets the IDAODBEngine interface, tries to marshal it back to the
	secondary thread, and fails.
	
	See the Knowledge Base article listed in the REFERENCES section of this article
	for more information.
	
	
	REFERENCES
	==========
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q169395 PRB: Thread Safety for DAO/Jet 3.5
	
	System Data Sources
	-------------------
	
	  Q136481 INF: Running ODBC Applications as Windows NT Services
	
	Impersonating a Valid Windows NT User
	-------------------------------------
	
	  Q96005 Validating User Accounts (Impersonation)
	
	
	Using MFC Database Classes in a Console Application
	---------------------------------------------------
	
	  Q152696 HOWTO: Using the MFC Database Classes in Console Applications
	
	Why DAO Cannot Be Used in a Multithreaded Environment
	-----------------------------------------------------
	
	  Q151407 PRB: DAO Must Be Used in Primary Thread
	
	Using MFC ODBC with an ISAPI DLL
	--------------------------------
	
	  Q160906 HOWTO: Use MFC 4.2 ODBC Classes in an ISAPI DLL
	
	Additional query words:
	
	======================================================================
	Keywords          : kbcode kbDAOsearch kbDatabase kbMFC kbODBC kbService kbVC 
	Technology        : kbAudDeveloper kbMFC
	Version           : :4.0,4.1,4.2
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
