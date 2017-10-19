---
layout: page
title: "Q289112: HOWTO: Initialize COM Apartment in an ISAPI Extension or Filter"
permalink: /kb/289/Q289112/
---

## Q289112: HOWTO: Initialize COM Apartment in an ISAPI Extension or Filter

	Article: Q289112
	Product(s): Internet Information Server
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to initialize a Component Object Model (COM)
	apartment in an Internet Server API (ISAPI) extension or filter. To use a COM
	component in an ISAPI filter, you need to fully understand how COM apartments
	and ISAPI thread pools interact.
	
	MORE INFORMATION
	================
	
	Internet Information Server (IIS) is a multithreaded application, and the ISAPI
	extension is called on different threads for each request. When a threading
	model mismatch occurs, COM creates the component in a thread of its own. This
	thread inherits the credentials of the calling process, which is InetInfo.exe.
	To correctly initialize the desired COM apartment in an ISAPI extension or
	filter, you must create a separate thread and initialize that thread with the
	required apartment.
	
	ASP threads are initialized as apartment threads in both the IIS 4.0 and the IIS
	5.0 threading models. However, to use COM in ISAPI, you should not initialize
	COM or make a COM call in the GetExtensionVersion function unless you require
	that these calls be made under the credentials of either the SYSTEM account (for
	low-security ISAPI DLLs) or the IWAM_machinename account (for medium- or
	high-security ISAPI DLLs).
	
	You can use COM in ISAPI in the following two ways:
	
	- Create your own thread or a thread pool in an ISAPI DLL and initialize the
	  thread (or each thread in the pool) to match the threading model of the COM
	  component. Then use this thread (or a thread pool) to instantiate and call
	  the component.
	
	  NOTE: Microsoft recommends that you use this procedure.
	
	- In HttpExensionProc, call the CoInitializeEx(NULL, COINIT_MULTITHREADED)
	  function and verify that this succeeds. If CoInitializeEx is successful, you
	  can create, call, or release the COM component, and then call CoUninitialize
	  prior to returning.
	
	  NOTE: Microsoft does not recommend that you use this procedure.
	
	REFERENCES
	==========
	
	For additional information, click the article numbers below to view the articles
	in the Microsoft Knowledge Base:
	
	  Q197728 Creating a Thread Pool for MFC-Based ISAPI Extensions
	
	  Q150777 INFO: Descriptions and Workings of OLE Threading Models
	
	  Q185518 HOWTO: Implement Worker Threads Using MFC ISAPI Extension
	
	For more information, see the following Microsoft Web site:
	
	  Processes, Threads, and Apartments
	  http://msdn.microsoft.com/library/default.asp?url=/library/en-us/com/aptnthrd_8po3.asp?frame=true
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis500 kbiis400
	Version           : :4.0,5.0
	Issue type        : kbhowto
	
	=============================================================================
	
