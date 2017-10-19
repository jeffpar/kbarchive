---
layout: page
title: "Q194180: FIX: Unregistering ATL Server Causes Access Violation"
permalink: /kb/194/Q194180/
---

## Q194180: FIX: Unregistering ATL Server Causes Access Violation

	Article: Q194180
	Product(s): Microsoft C Compiler
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kberrmsg kbservicepack kbActiveX kbCOMt kbRegistry kbVC600bug kbATL300 kbATL300bug kbVS
	Last Modified: 28-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Active Template Library (ATL) 3.0, used with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Unregistering an ATL DLL or .exe file that was built with a version of Visual
	C++ prior to 6.0 might result in an access violation when Atl.dll (version
	3.00.8168) that ships with Visual C++6.0 is installed on the machine.
	
	Running "REGSVR32.EXE /U" to unregister an ATL DLL might display the following
	error message:
	
	  DllUnregisterServer in <component.dll> failed. Return code was:
	  0xc0000005
	
	Running an ATL .exe file with the "/Unregserver" switch may display a dialog box
	titled "OleMainThreadWndName: <server.exe> - Application Error", with the
	following error message:
	
	  The instruction at 0x00000000 referenced memory at 0x00000000. The memory
	  could not be read.
	
	The ATL server has to be of build type Release MinSize or Unicode Release
	MinSize.
	
	CAUSE
	=====
	
	In the version of Atl.dll that comes with Visual C++ 6.0, the _ATL_OBJMAP_ENTRY
	structure has an additional member called "pfnGetCategoryMap". During
	unregistration, AtlModuleUnregisterServerEx() tries to access this member, which
	does not exist for ATL servers built prior to Visual C++ 6.0, and the access
	violation occurs.
	
	RESOLUTION
	==========
	
	To work around this problem, use one of the following options:
	
	- Rebuild your server with Release MinDependency. This statically links in all
	  the code that was in Atl.dll, so your server isn't dependent on it. Even for
	  a 'Release MinDependency' atl.dll may need to be shipped.
	
	For additional information about this, click the article number below to view the
	article in the Microsoft Knowledge Base:
	
	  Q244955 PRB: MinDependency Project May Need to Include Atl.dll
	
	- Rebuild your server with Visual C++ 6.0.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.This bug was corrected in Visual Studio 6.0 Service
	Pack 3. For more information about Visual Studio service packs, please see the
	following articles in the Microsoft Knowledge Base:
	
	  Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	  Q194295 HOWTO: Tell That Visual Studio 6.0 Service Packs Are Installed
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbservicepack kbActiveX kbCOMt kbRegistry kbVC600bug kbATL300 kbATL300bug kbVS600sp2 kbFAQ kbVS600SP1 kbVS600sp3fix kbGrpDSMFCATL 
	Technology        : kbVCsearch kbAudDeveloper kbATLsearch
	Version           : WINDOWS:3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
