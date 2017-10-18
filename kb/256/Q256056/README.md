---
layout: page
title: "Q256056: FIX: DllMain Throws Unhandled Exception with DLL_THREAD_DETACH"
permalink: kb/256/Q256056/
---

## Q256056: FIX: DllMain Throws Unhandled Exception with DLL_THREAD_DETACH

	Article: Q256056
	Product(s): Microsoft C Compiler
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbDLL kbMFC kbDSupport kbGrpDSMFCATL kbExceptHandMFC kbArchitecture kbVS600sp4fix kbVS6
	Last Modified: 20-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), included with:
	   - Microsoft Visual C++, 32-bit Editions, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The DllMain code in MFC throws an unhandled exception if the system runs out of
	memory during the DLL_THREAD_DETACH operation. This applies to regular DLLs,
	either statically or dynamically linked to MFC and also to any module that uses
	the MFC Dlls (MFC42[U].dll, MFC42[U]D.dll, MFCO42[U]D.dll, MFCN42[U]D.dll,
	MFCD42[U]D.dll).
	
	CAUSE
	=====
	
	MFC, in the DllMain code, during the DLL_THREAD_DETACH operation, cleans up the
	thread local data that it maintains. In the process, it creates some new
	temporary objects. If the memory allocation fails during this process due to low
	memory conditions in the system, it throws a memory exception. Because this
	exception never gets caught, you receive an unhandled exception from the
	process.
	
	RESOLUTION
	==========
	
	The Mfc42.dll and Mfc42u.dll files that shipped with Windows 2000 have this fix
	incorporated.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a bug in the Microsoft products that are
	listed at the beginning of this article. This bug was corrected in the latest
	service pack for Visual Studio 6.0.
	
	Microsoft has confirmed that this is a bug in the Microsoft products that are
	listed at the beginning of this article.
	
	
	REFERENCES
	==========
	
	- The Different Kinds of DLLs Available with Visual C++
	
	- DllMain
	
	- Exception Handling Topics (MFC)
	
	- Q105675 INFO: First and Second Chance Exception Handling
	
	Additional query words: sp4 new malloc memory starved resources exit afxtermthread
	
	======================================================================
	Keywords          : kbDLL kbMFC kbDSupport kbGrpDSMFCATL kbExceptHandMFC kbArchitecture kbVS600sp4fix kbVS600sp5fix kbExceptHandling kbfixlist
	Technology        : kbAudDeveloper kbMFC
	Version           : :5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
