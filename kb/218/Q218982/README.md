---
layout: page
title: "Q218982: HOWTO: Override IUnknown Methods in an ATL Server"
permalink: kb/218/Q218982/
---

## Q218982: HOWTO: Override IUnknown Methods in an ATL Server

	Article: Q218982
	Product(s): Microsoft C Compiler
	Version(s): 3.0,6.0
	Operating System(s): 
	Keyword(s): kbCOMt kbVC600 kbATL300 kbGrpDSMFCATL kbArchitecture
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Active Template Library (ATL) 3.0, included with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	   - Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article shows how to override the IUnknown methods (AddRef, Release and
	QueryInterface) in an ATL server.
	
	
	MORE INFORMATION
	================
	
	When the client calls AddRef, Release or QueryInterface, the following functions
	that can be overridden are called:
	
	  CComObjectRootEx<>::InternalAddRef()
	  CComObjectRootEx<>::InternalRelease()
	  CComObjectRootBase::InternalQueryInterface()
	
	To override these functions, copy and paste the following functions in your ATL
	class:
	
	  ULONG InternalAddRef()
	  {
	          // do something
	          return CComObjectRootEx<_ThreadModel>::InternalAddRef();
	  }
	
	  ULONG InternalRelease()
	  {
	  	// do something
	  	return CComObjectRootEx<_ThreadModel>::InternalRelease();
	  }
	
	  HRESULT WINAPI InternalQueryInterface(void* pThis, const _ATL_INTMAP_ENTRY* pEntries, REFIID iid, void** ppvObject)
	  {
	  	// do something
	  	return CComObjectRootBase::InternalQueryInterface(pThis, pEntries, iid, ppvObject);
	  }
	
	Additional query words:
	
	======================================================================
	Keywords          : kbCOMt kbVC600 kbATL300 kbGrpDSMFCATL kbArchitecture 
	Technology        : kbVCsearch kbAudDeveloper kbATLsearch
	Version           : :3.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
