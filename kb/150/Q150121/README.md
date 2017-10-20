---
layout: page
title: "Q150121: PRB: MFC Loads Wrong Resource in Extension DLL"
permalink: /kb/150/Q150121/
---

## Q150121: PRB: MFC Loads Wrong Resource in Extension DLL

{% raw %}

	Article: Q150121
	Product(s): Microsoft C Compiler
	Version(s): winnt:2.0,2.1,2.2,4.0,4.1,4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbcode kbnokeyword kbBitmap kbDLL kbIcon kbMFC kbResource kbString kbVC100 kbVC150 kbVC
	Last Modified: 03-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5, 1.51, 1.52 
	   - Microsoft Visual C++, 32-bit Editions, versions 2.0, 2.1, 2.2, 4.0, 4.1 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The wrong resource is loaded when CBitmap::LoadBitmap, CMenu::LoadMenu,
	CString::LoadString or any other MFC resource-loading function is called in an
	MFC extension DLL (AFXDLL). In some cases, a resource in the application is
	loaded instead of the appropriate resource in the extension DLL.
	
	CAUSE
	=====
	
	When a resource in the application or another extension DLL gets loaded instead
	of a resource in the current extension DLL, the cause is usually improper
	resource management. An MFC application and all of its extension DLLs are one
	global chain of resources. If there are multiple resources with the same ID
	value in any of the modules in the chain, MFC uses the first resource it finds
	with the desired ID value. The first resource is often found in the application,
	which is searched before any of the extension DLLs.
	
	RESOLUTION
	==========
	
	Change the ID values of any resources that conflict so they are unique in both
	the application and any extension DLL that the application uses. These values
	are stored in the Resource.h file for each project and can be modified in the
	Resource Editor or AppStudio with the Resource Symbols command.
	
	To ensure that modules do not use conflicting symbol values, reserve different
	ranges of ID values for each module in the 1 through 0x6FFFF range. Set the
	_APS_NEXT_RESOURCE_VALUE definition in the Resource.h file for each module to
	the low end of that module's range before creating any resources. The Resource
	Editor uses this symbol to determine the ID value of the next resource created.
	
	This technique is documented in MFC Technical Note 35 and in the DLLHUSK sample
	included with Visual C++.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	In .exe or .dll files that link to MFC dynamically, MFC resource-loading
	functions call AfxFindResourceHandle() to obtain the handle of the module where
	a resource is located. AfxFindResourceHandle() searches for resources by type
	and symbol value in:
	
	- The module returned by AfxGetResourceHandle(). This is usually the
	  application.
	
	- The extension DLLs through the chain of CDynLinkLibrary objects.
	
	- Any language-specific resource DLLs.
	
	- Any attached MFC system DLLs (MFCxx.dll, for example).
	
	NOTE: Some 16-bit MFC resource loading functions do not call
	AfxFindResourceHandle(), but instead use the value returned from
	AfxCurrentResourceHandle().
	
	Each extension DLL creates, initializes, and then passes a CDynLinkLibrary object
	to AfxInitExtensionModule() that places the DLL in the resource chain.
	AfxTermExtensionModule() removes the DLL from the chain when the DLL is detached
	from the application.
	
	A benefit of this design is that MFC automatically locates a resource for an
	application or extension DLL, even if that resource is located in a distant
	extension DLL or the application itself. All resources in the process are
	chained, so ID values are passed between DLLs and the application and the proper
	resources are loaded. A disadvantage is that there are no duplicate ID values
	between any of the extension DLLs or the application that uses them.
	
	To set the default location where AfxFindResourceHandle() first checks for a
	resource, use AfxSetResourceHandle(). Because AfxFindResourceHandle() first
	checks the handle set by AfxSetResourceHandle(), it can be used to circumvent
	the chain and load a resource from one particular DLL or application. The
	resource handle is restored to its original value immediately after loading the
	resources. The current default resource handle is found with
	AfxGetResourceHandle().
	
	The DLLHUSK sample included with Visual C++ also illustrates this technique. In
	Testdll2.cpp, CListOutputFrame::Create() sets the resource handle to the module
	handle stored in the AFX_EXTENSION_MODULE structure extension DLL. This
	structure is initialized with the module handle when it is passed to the
	CDynLinkLibrary constructor in InitTestDLL2().
	
	REFERENCES
	==========
	
	For more information on:
	
	- Extension DLLs, see the MFC Technical Note 33 and the DLLHUSK sample.
	
	- Resource management in projects, see Technical Note 35.
	
	(c) Microsoft Corporation 1999, All Rights Reserved.
	Contributions by Jason Strayer, Microsoft Corporation
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbcode kbnokeyword kbBitmap kbDLL kbIcon kbMFC kbResource kbString kbVC100 kbVC150 kbVC200 kbVC500 kbVC600 kbGrpDSMFCATL kbArchitecture 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:2.0,2.1,2.2,4.0,4.1,4.2,5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
