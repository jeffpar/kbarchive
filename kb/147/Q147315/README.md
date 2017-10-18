---
layout: page
title: "Q147315: FIX: Access Violation After Unloading Extension DLL"
permalink: kb/147/Q147315/
---

## Q147315: FIX: Access Violation After Unloading Extension DLL

	Article: Q147315
	Product(s): Microsoft C Compiler
	Version(s): winnt:2.0,2.1,2.2,4.0,4.1,4.2
	Operating System(s): 
	Keyword(s): kbtool kbwizard kbDLL kbMFC kbVC200bug kbVC210bug kbVC220bug kbVC400bug kbVC410bug kbVC
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The AppWizard, included with:
	   - Microsoft Visual C++, 32-bit Editions, versions 2.0, 2.1, 2.2, 4.0, 4.1 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you dynamically unload an AppWizard-generated Microsoft Foundation Class
	(MFC) Extension DLL, an access violation may occur as you try to gain access to
	Windows resources. The last MFC function on the call stack is usually
	AfxFindResourceHandle().
	
	NOTE: This occurs only when Extension DLLs are loaded and unloaded explicitly
	with calls to AfxLoadLibrary() and AfxFreeLibrary() or LoadLibrary() and
	FreeLibrary(). Most Extension DLLs are loaded implicitly by linking to their
	import libraries.
	
	CAUSE
	=====
	
	When AppWizard generates the program template for an Extension DLL, it is not
	including a call to AfxTermExtensionModule(). This function removes the DLL from
	the list of loaded MFC Extension DLLs. Since this list is used when searching
	for resources, an access violation may occur after an AppWizard-generated
	Extension DLL is freed.
	
	RESOLUTION
	==========
	
	Add the following line to the DLL_PROCESS_DETACH section of an AppWizard-
	generated Extension DLL's DllMain():
	
	     else if (dwReason == DLL_PROCESS_DETACH)
	     {
	        // Add the following line
	        AfxTermExtensionModule(extensionDLL);
	
	            // TODO: perform other cleanup tasks here
	     }
	
	extensionDLL should be the same static value passed to AfxInitExtensionModule()
	in the DLL_PROCESS_ATTACH section. This value should be different for every
	Extension DLL.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This problem has been fixed in Visual C++ 5.0.
	
	MORE INFORMATION
	================
	
	NOTE: Dynamically loading and unloading MFC Extension DLLs was not supported in
	versions prior to Visual C++ 4.0. Dynamically loading or freeing Extension DLLs
	built with earlier versions could corrupt static MFC state information.
	
	AfxLoadLibrary() and AfxFreeLibrary() should be called to load and free MFC
	Extension DLLs. Calling the Win32 API functions LoadLibrary() and FreeLibrary()
	to load or free MFC Extension DLLs can cause problems in multi-threaded
	applications.
	
	For more information on AfxTermExtensionModule() see the "TN033: DLL Version of
	MFC" technote in the MFC documentation.
	
	Additional query words: _AFXDLL gpfault gpf
	
	======================================================================
	Keywords          : kbtool kbwizard kbDLL kbMFC kbVC200bug kbVC210bug kbVC220bug kbVC400bug kbVC410bug kbVC420bug kbVC500fix kbGrpDSMFCATL kbNoUpdate kbbuglist
	Technology        : kbVCsearch kbAudDeveloper kbAppWizard
	Version           : winnt:2.0,2.1,2.2,4.0,4.1,4.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
