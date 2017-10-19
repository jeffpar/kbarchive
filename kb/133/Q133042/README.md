---
layout: page
title: "Q133042: HOWTO: Pass IDispatch Pointer and Avoid an Application Error"
permalink: /kb/133/Q133042/
---

## Q133042: HOWTO: Pass IDispatch Pointer and Avoid an Application Error

	Article: Q133042
	Product(s): Microsoft C Compiler
	Version(s): winnt:2.0,2.1,2.2,4.0,4.1,5.0,6.0
	Operating System(s): 
	Keyword(s): kbActiveX kbAutomation kbCOMt kbMFC kbServer kbVC200 kbVC400 kbVC500 kbVC600 kbGrpDSMFC
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Editions, versions 2.0, 2.1, 2.2, 4.0, 4.1 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In some cases, you may want an OLE Automation Local-Server to pass its IDispatch
	pointer to another Local-Server through an automation method. However, the
	pointer will become invalid after the method in the second server returns, so an
	Access Violation will occur if the second server tries to use the pointer
	later.
	
	To maintain the integrity of the pointer, you need to call AddRef on the
	IDispatch pointer within the second server, as described in the following rule
	from the OLE SDK documentation:
	
	  If a local copy of an interface pointer is made from an existing global
	  interface pointer, the local copy must be independently reference-
	  counted. This separate reference count is necessary because the global
	  copy can be destroyed while the local copy is in use.
	
	MORE INFORMATION
	================
	
	Here is an example demonstrating the reasoning behind the general rule.
	
	When the IDispatch pointer from the first Local-Server (server1) is passed to the
	second Local-Server (server2), the RPC manager creates a proxy in the address
	space of server2. The pointer that server2 actually receives points to the
	proxy. This should make sense because the original object resides in the address
	space of server1, so server2 cannot actually have a pointer to it.
	
	The default life-time of the proxy is the duration of the function or automation
	method. In many cases, however, it would be convenient to use the pointer later.
	In MFC, you can do this by creating an instance of COleDispatchDriver (or an
	instance of an object derived from COleDispatchDriver) and calling
	AttachDispatch().
	
	To affect the life-time of the proxy, server2 must call AddRef for the automation
	object it receives. The RPC Manager will intercept this call and increment the
	reference count on both the proxy and the object. It is important to note that
	AddRef must be called from server2 because the proxy lives in server2's address
	space.
	
	The following sample code demonstrates how to do it. It is assumed that
	CServer2Doc is an automation object. The CServerDoc2::SetReturnDispatch method
	receives a LPDISPATCH object from server1 and will attach it to
	CServer2Doc::m_DDServer1, which is a instance of an object derived from
	COleDispatchDriver. Note that m_DDServer1 will be deleted when CServer2Doc is
	deleted; Because AttachDispatch is called with the default second parameter,
	this will cause the LPDISPATCH object Release to be called.
	
	Refer to COleDispatchDriver::~COleDispatchDriver and
	COleDispatchDriver::AttachDispatch for more information.
	
	Sample Code
	-----------
	
	  void CServer2Doc::SetReturnDispatch(LPDISPATCH lpDispServer1)
	  {
	    lpDispServer1->AddRef();         // AddRef so it can be used later
	    m_DDServer1.AttachDispatch(lpDispServer1);
	  }
	
	REFERENCES
	==========
	
	- Visual C++ Books Online Contents\OLE 2.0 SDK\Chapter 6 Component Object
	  Interfaces and Functions \Iunknown Interface\Reference Counting Rules.
	
	- OLE 2 Programmers Reference, Volume 1, pages 191-195.
	
	- Inside OLE 2, pages 83-90.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbActiveX kbAutomation kbCOMt kbMFC kbServer kbVC200 kbVC400 kbVC500 kbVC600 kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:2.0,2.1,2.2,4.0,4.1,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
