---
layout: page
title: "Q183216: PRB: AtlAdvise() Returns 80004002, 80040200, or 80040202 Errors"
permalink: /kb/183/Q183216/
---

## Q183216: PRB: AtlAdvise() Returns 80004002, 80040200, or 80040202 Errors

	Article: Q183216
	Product(s): Microsoft C Compiler
	Version(s): 2.0,2.1,3.0,4.2b,5.0,6.0
	Operating System(s): 
	Keyword(s): kbActiveX kbATL200 kbATL210 kbCOMt kbConnPts kbDebug kbVC420 kbVC500 kbVC600 kbATL300 k
	Last Modified: 13-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Active Template Library (ATL), versions 2.0, 2.1, 3.0, used with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.2b, 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, versions 4.2b, 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	   - Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Calling the AtlAdvise() function to setup a connection point might return one of
	the following error numbers:
	
	  0x80004002 (E_NOINTERFACE or "No such interface supported")
	  0x80040200 (CONNECT_E_NOCONNECTION)
	  0x80040202 (CONNECT_E_CANNOTCONNECT)
	
	CAUSE
	=====
	
	E_NOINTERFACE Error
	-------------------
	
	The E_NOINTERFACE error is returned when AtlAdvise() calls the QueryInterface()
	method for IID_IConnectionPointContainer and fails.
	
	CONNECT_E_NOCONNECTION Error
	----------------------------
	
	The CONNECT_E_NOCONNECTION error is returned when AtlAdvise() calls the
	IConnectionPointContainer::FindConnectionPoint() method and fails. The ATL
	implementation of the IConnectionPointContainerImpl::FindConnectionPoint()
	function looks in the connection point map for the event interface and returns
	this error if it doesn't find it.
	
	CONNECT_E_CANNOTCONNECT Error
	-----------------------------
	
	The CONNECT_E_CANNOTCONNECT error is returned when AtlAdvise() calls the
	IConnectionPoint::Advise() method and fails. The ATL implementation of the
	IConnectionPointImpl::Advise() function calls QueryInterface() on the sink
	object (the client), looking for the event interface, and returns this error if
	it doesn't find it.
	
	RESOLUTION
	==========
	
	E_NOINTERFACE Error
	-------------------
	
	For the E_NOINTERFACE error, verify that the source or server supports the
	IconnectionPointContainer interface. In ATL, this means that the source object
	should derive from the IConnectionPointContainerImpl class and that
	IConnectionPointContainer needs to be in the COM map, as in the following
	example:
	
	Sample Code
	-----------
	
	  class ATL_NO_VTABLE CMySource :
	    public IConnectionPointContainerImpl<CMySource>
	    ...
	
	  BEGIN_COM_MAP(CMySource)
	    ...
	    COM_INTERFACE_ENTRY_IMPL(IConnectionPointContainer)
	  END_COM_MAP()
	
	CONNECT_E_NOCONNECTION Error
	----------------------------
	
	For the CONNECT_E_NOCONNECTION error, verify that there is a connection point
	entry for the globally unique identifier (GUID) of the event interface in the
	connection point map, as in the following example:
	
	Sample Code
	-----------
	
	  BEGIN_CONNECTION_POINT_MAP(CMySource)
	     CONNECTION_POINT_ENTRY(DIID__MySourceEvents)
	  END_CONNECTION_POINT_MAP()
	
	CONNECT_E_CANNOTCONNECT Error
	-----------------------------
	
	For the CONNECT_E_CANNOTCONNECT error, verify that the event interface is in the
	sink, or client, COM map, as in the following example:
	
	  BEGIN_COM_MAP(CDispSink)
	     COM_INTERFACE_ENTRY(IDispatch)
	     COM_INTERFACE_ENTRY_IID(DIID__MySourceEvents, IDispatch)
	  END_COM_MAP()
	
	Another cause of failure might be that the event interface is a custom interface
	and the source, or server, is out of process (an .exe file). You need to install
	a marshaler for the custom interface for QueryInterface() to work across process
	boundaries.
	
	If all the methods of the event interface pass automation-compatible types (they
	are VARIANT-compatible), you can set an attribute of "oleautomation" in the
	source .idl file. When an ATL server is registered, its type library is also
	registered. This sets up the marshaler for this interface to be the universal
	marshaler (in OleAut32.dll).
	
	If the event interface passes non-automation-compatible types, then a proxy DLL
	needs to be built and registered. The ATL Project Wizard creates a proxy
	makefile in your project directory with the name <Project>.mk. You can run
	NMake.exe on this .mk file to build the proxy DLL.
	
	MORE INFORMATION
	================
	
	If you look up these HRESULTs in the Error Lookup tool, you get a different
	description. 0x80040200 appears as "Unable to impersonate DCOM client" or
	CO_E_FAILEDTOIMPERSONATE. 0x80040202 appears as "Unable to open the access token
	of the current thread" or CO_E_FAILEDTOOPENTHREADTOKEN. These HRESULTS have a
	Facility of FACILITY_ITF, which means they are used for custom interfaces and
	there can be duplicates (the Facility is bits 15-30 of the HRESULT).
	
	AtlAdvise() wraps the following steps:
	
	1. Calls QueryInterface() to get an IConnectionPointContainer*.
	
	2. Calls IConnectionPointContainer::FindConnectionPoint() to get an
	  IConnectionPoint*.
	
	3. Calls IConnectionPoint::Advise().
	
	REFERENCES
	==========
	
	Microsoft Visual C++ Samples, ATL Samples: POLYGON Sample; CONNECT Sample
	
	Additional query words: 80004002 80040200 80040202 kbVC420 kbVC500 kbVC600 kbATL200 kbATL210 kbATL300 kbserver
	
	======================================================================
	Keywords          : kbActiveX kbATL200 kbATL210 kbCOMt kbConnPts kbDebug kbVC420 kbVC500 kbVC600 kbATL300 kbGrpDSMFCATL 
	Technology        : kbVCsearch kbAudDeveloper kbATLsearch
	Version           : :2.0,2.1,3.0,4.2b,5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
