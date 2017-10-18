---
layout: page
title: "Q183211: FIX: Assert in AtlCtl.cpp, Line 121"
permalink: kb/183/Q183211/
---

## Q183211: FIX: Assert in AtlCtl.cpp, Line 121

	Article: Q183211
	Product(s): Microsoft C Compiler
	Version(s): WINDOWS:2.0,2.1
	Operating System(s): 
	Keyword(s): kbnokeyword kbActiveX kbATL200bug kbATL210bug kbCOMt kbContainer kbCtrlCreate kbDebug k
	Last Modified: 28-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Active Template Library (ATL), versions 2.0, 2.1, used with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2b 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 4.2b 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you insert a debug version of your ATL control into a control container
	like Visual Basic, you might get an assert in AtlCtl.cpp, line The assert occurs
	in the CComControlBase::IQuickActivate_QuickActivate() method that checks
	whether the cbSize member of the QACONTAINER structure is equal to
	sizeof(QACONTAINER):
	
	  _ASSERTE(pQACont->cbSize >= sizeof(QACONTAINER));
	
	CAUSE
	=====
	
	The container initializes the QACONTAINER structure and passes it into the
	control using IQuickActivate::QuickActivate(). QACONTAINER is defined in Ocidl.h
	that comes with both Visual C++ and the Platform SDK. However, the Platform SDK
	provides a newer version of QACONTAINER that includes two additional interface
	pointers. Therefore, the QACONTAINER passed in by the container doesn't match
	the size of the QACONTAINER defined in the newer Ocidl.h.
	
	RESOLUTION
	==========
	
	The assert is harmless and can be ignored. Or, you can get rid of the assert by
	performing the following steps:
	
	1. Override IQuickActivate::QuickActivate().
	
	2. Copy the contents of CComControlBase::IQuickActivate_QuickActivate() into
	  your override of IQuickActivate::QuickActivate().
	
	3. Comment out the assert.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This problem was corrected in Visual C++ version 6.0
	for Windows.
	
	Additional query words: kbCtrl kbATL200bug kbATL210bug kbVC420 kbVC500 kbvc600fix
	
	======================================================================
	Keywords          : kbnokeyword kbActiveX kbATL200bug kbATL210bug kbCOMt kbContainer kbCtrlCreate kbDebug kbVBp kbVC420bug kbVC500bug kbVC600fix kbATL300fix kbGrpDSMFCATL 
	Technology        : kbVCsearch kbAudDeveloper kbATLsearch
	Version           : WINDOWS:2.0,2.1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
