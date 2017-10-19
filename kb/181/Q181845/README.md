---
layout: page
title: "Q181845: HOWTO: Create a Sink Interface in MFC-Based COM Client"
permalink: /kb/181/Q181845/
---

## Q181845: HOWTO: Create a Sink Interface in MFC-Based COM Client

	Article: Q181845
	Product(s): Microsoft C Compiler
	Version(s): 2.0,2.1,2.2,4.0,4.1,4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbole kbMFC kbVC200 kbVC400 kbVC410 kbVC420 kbVC500 kbVC600 kbDSupport
	Last Modified: 12-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Editions, versions 2.0, 2.1, 2.2, 4.0, 4.1 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.2, 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, versions 4.2, 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	   - Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Foundation Classes (MFC) has wizard support to add sink interfaces for
	ActiveX controls. However, this support does not extend to other COM servers.
	This article describes how to add a sink interface in an MFC client for source
	interfaces described by COM servers. Please note that this article applies to
	source interfaces, which are dispinterfaces, or dual interfaces with events
	being called through IDispatch::Invoke().
	
	MORE INFORMATION
	================
	
	Here are the steps to add a sink interface to a COM client:
	
	1. Using the Class Wizard, add a CCmdTarget derived object (for example,
	  CMySink) with automation support. In the Class Wizard, select the Automation
	  option rather than "Createable by type ID" option when adding this class.
	
	  NOTE: If you are using Visula Studio.NET do the following:
	
	  On the Project menu, select Add Class. In Add Class Dialog, select MFC
	  Class.In MFC Class Wizard, on the Names page, under the base class, select
	  CCmdTarget, and then under select support for automation, select Automation.
	
	2. In the interface map, change the IID (the second parameter in the
	  INTERFACE_PART macro) so that it is the IID of the source interface (usually
	  the interface with the default and/or source attribute in the server's .idl
	  file). The .idl file can be seen by viewing the typelib in the OLE/COM Object
	  Viewer.
	
	3. In the DISPATCH_MAP of CMySink class, add a DISP_FUNCTION_ID macro for each
	  of the events defined in the source interface that you want to handle. For
	  example:
	
	     BEGIN_DISPATCH_MAP(CMySink, CCmdTarget)
	       DISP_FUNCTION_ID(CMySink,"Quit",2,OnObjQuit,VT_EMPTY,VTS_I4 VTS_I4)
	     END_DISPATCH_MAP()
	
	  The code above is an entry for handling the Quit event with a DISPID 2, which
	  takes two long parameters and returns a void. OnObjectQuit is a CMySink
	  member function that takes two longs and returns a void. This function must
	  be added manually and is called when the COM server fires a Quit event.
	
	4. Now you have hooked up the sink interface with the server so that you can
	  start receiving events. To do this, call the AfxConnectionAdvise() function
	  once the server object is created. For example:
	
	     //Instantiate the sink class and hold a pointer to it.
	     m_pSink = new CMySink();
	
	     //Get a pointer to sinks IUnknown, no AddRef. CMySink implements only
	     //dispinterface and the IUnknown and IDispatch pointers will be same.
	     LPUNKNOWN pUnkSink = m_pSink->GetIDispatch(FALSE);
	
	     //Establish a connection between source and sink.
	     //m_pUnkSrc is IUnknown of server obtained by CoCreateInstance().
	     //m_dwCookie is a cookie identifying the connection, and is needed
	     //to terminate the connection.
	     AfxConnectionAdvise(m_pUnkSrc, IID_MYEVENT, pUnkSink, FALSE,
	        &m_dwCookie);
	
	5. When you have finished using the server object you need to terminate the
	  connection before releasing the server object. You do this by calling the
	  AfxConnectionUnadvise() function. For example:
	
	     //Get a pointer to sinks IUnknown, no AddRef.
	     LPUNKNOWN pUnkSink = m_pSink->GetIDispatch(FALSE);
	
	     //Terminate a connection between source and sink.
	     //m_pUnkSrc is IUnknown of server obtained by CoCreateInstance().
	     //m_dwCookie is a value obtained through AfxConnectionAdvise().
	     AfxConnectionUnadvise(m_pUnkSrc, IID_MYEVENT, pUnkSink, FALSE,
	     m_dwCookie);
	
	Because CMySink was created on the heap, make sure you delete it to avoid memory
	leaks.
	
	REFERENCES
	==========
	
	The sink component of the Connpts.exe sample illustrates implementation of the
	sink interface.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q152087 SAMPLE: Connpts.exe Implements Connection Points in MFC Apps
	
	(c) Microsoft Corporation 1998, All Rights Reserved.
	Contributions by Jaganathan Thangavelu, Microsoft Corporation
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbole kbMFC kbVC200 kbVC400 kbVC410 kbVC420 kbVC500 kbVC600 kbDSupport 
	Technology        : kbAudDeveloper kbMFC
	Version           : :2.0,2.1,2.2,4.0,4.1,4.2,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
