---
layout: page
title: "Q244495: HOWTO: Implement Thread-Pooled, Apartment Model COM Svr in ATL"
permalink: /kb/244/Q244495/
---

## Q244495: HOWTO: Implement Thread-Pooled, Apartment Model COM Svr in ATL

	Article: Q244495
	Product(s): Microsoft C Compiler
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbActiveX kbCOMt kbLocalSvr kbService kbThread kbVC600 kbATL300 kbDSupport kbGrpDSMFCAT
	Last Modified: 26-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Active Template Library (ATL) 3.0, included with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft Active Template Library (ATL) allows you to define a pool of STA
	threads in an ATL out of process server with each object created running on its
	own thread. The steps in the "More Information" section of this article shows
	how to do this.
	
	MORE INFORMATION
	================
	
	The following steps are needed to create objects out of a thread pool:
	
	1. Derive your CExeModule or CServiceModule class from:
	
	  CComAutoThreadModule<>
	
	  CExeModule : public CComAutoThreadModule<>
	
	2. Declare DECLARE_CLASSFACTORY_AUTO_THREAD() in each ATL class that can be run
	  on an STA pool thread
	
	3. Declare DECLARE_NOT_AGGREGATABLE() in each ATL class that can be run on an
	  STA pool thread
	
	  DECLARE_NOT_AGGREGATABLE(CMyPooledObject)
	
	4. Change the module CExeModule::Unlock() or CServiceModule::Unlock() method to
	  call:
	
	  CComAutoThreadModule<>::Unlock()
	
	  LONG CExeModule::Unlock()
	  {
	     LONG l = CComAutoThreadModule<>::Unlock();
	     if (l == 0)
	     {
	       bActivity = true;
	       SetEvent(hEventShutdown); // tell monitor that we transitioned to zero
	     }
	     return l;
	  }
	
	If this is being done for a service, you will need to do one more step. Change
	the following code from:
	
	  inline void CServiceModule::Init(_ATL_OBJMAP_ENTRY* p, HINSTANCE h, UINT nServiceNameID, const GUID* plibid)
	  {
	     CComModule::Init(p, h, plibid);
	
	to:
	
	  inline void CServiceModule::Init(_ATL_OBJMAP_ENTRY* p, HINSTANCE h, UINT nServiceNameID, const GUID* plibid)
	  {
	     CComAutoThreadModule<>::Init(p, h, plibid);
	
	By default, ATL creates a pool of four threads per processor. You can change this
	in the _Module.Init() call in the tWinMain() function call by specifying the
	number of threads in the optional forth parameter. By default,
	CComAutoThreadModule uses CComSimpleThreadAllocator as the thread allocator.
	CComSimpleThreadAllocator uses a simple round robin scheme to creating objects
	in the thread pool.
	
	REFERENCES
	==========
	
	For more information lookup DECLARE_CLASS_FACTORY_AUTO_THREAD() and
	CComAutoThreadModule and the Microsoft Developer's Network (MSDN).
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q202128 BUG: ATL EXE Server Based on CComAutoThreadModule May Hang on
	  Registration
	
	Additional query words:
	
	======================================================================
	Keywords          : kbActiveX kbCOMt kbLocalSvr kbService kbThread kbVC600 kbATL300 kbDSupport kbGrpDSMFCATL kbArchitecture 
	Technology        : kbAudDeveloper kbATLsearch
	Version           : WINDOWS:3.0
	Issue type        : kbhowto
	
	=============================================================================
	
