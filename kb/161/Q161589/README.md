---
layout: page
title: "Q161589: DOC: AfxGetStaticModuleState() Causes Errors in an Extension DLL"
permalink: /kb/161/Q161589/
---

## Q161589: DOC: AfxGetStaticModuleState() Causes Errors in an Extension DLL

	Article: Q161589
	Product(s): Microsoft C Compiler
	Version(s): winnt:4.1
	Operating System(s): 
	Keyword(s): kbdocfix kbdocerr kbDLL kbMFC kbVC410bug kbVC420fix kbGrpDSMFCATL
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, version 4.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Visual C++ version 4.1 MFC documentation indicates that MFC Extension DLLs
	need to use the macro expression "AFX_MANAGE_STATE(AfxGetStaticModuleState());"
	at the top of every exported DLL function. This is incorrect; MFC Extension DLLs
	do not need to use this expression.
	
	This error was fixed in the documentation for Visual C++ version 4.2 and later
	versions of Visual C++.
	
	MORE INFORMATION
	================
	
	Under the subheading "Extension DLLs" of the article "Visual C++ Books -> MFC
	4.2 -> Programming with MFC:Encyclopedia - > Dynamic-Link Libraries (DLLs)
	-> Dynamic-Link Libraries (DLLs)," the following text appears:
	
	  "If you have a resource in your DLL, such as a dialog, you need to use the
	  macro AFX_MANAGE_STATE to switch the MFC module state correctly, so that
	  Windows looks in the DLL and not in the EXE for the resource. This can be
	  done by adding the following line of code to the beginning of functions
	  exported from the DLL:
	
	     AFX_MANAGE_STATE(AfxGetStaticModuleState( ))"
	
	This is incorrect. Extension DLLs do not need to add this macro at the top of
	every exported function . The AFX_MANAGE_STATE macro can be used inside of
	callbacks or custom window procedures to properly adjust the current module
	state, but it should be used with AfxGetAppModuleState() or a specific module
	state instance instead of AfxGetStaticModuleState().
	
	Any attempt to use AfxGetStaticModuleState( ) in an Extension DLL will result in
	possible run-time problems and the following linker errors:
	
	  
	
	  "mfcs40d.lib(dllmodul.obj) : error LNK2005: __pRawDllMain already
	  defined in testdll1.obj
	  mfcs40d.lib(dllmodul.obj) : error LNK2005: _DllMain@12 already defined
	  in testdll1.obj
	  mfcs40d.lib(dllmodul.obj) : warning LNK4006: __pRawDllMain already
	  defined in testdll1.obj; second definition ignored
	  mfcs40d.lib(dllmodul.obj) : warning LNK4006: _DllMain@12 already defined
	  in testdll1.obj; second definition ignored"
	
	The incorrect paragraph was removed from the documentation for Visual C++ in
	version 4.2.
	
	(c) Microsoft Corporation 1999, All Rights Reserved.
	Contributions by Jason Strayer, Microsoft Corporation
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbdocfix kbdocerr kbDLL kbMFC kbVC410bug kbVC420fix kbGrpDSMFCATL 
	Technology        : kbVCsearch kbAudDeveloper kbVC410
	Version           : winnt:4.1
	Solution Type     : kbfix
	
	=============================================================================
	
