---
layout: page
title: "Q243298: FIX: Err Msg: C2668: InlineIsEqualGUID : Ambiguous Call..."
permalink: kb/243/Q243298/
---

## Q243298: FIX: Err Msg: C2668: InlineIsEqualGUID : Ambiguous Call...

	Article: Q243298
	Product(s): Microsoft C Compiler
	Version(s): 3.0,6.0
	Operating System(s): 
	Keyword(s): kbCOMt kbDebug kbSDKPlatform kbSDKWin32 kbVC600bug kbATL300bug kbDSupport kbfix kbGrpDS
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
	
	Building a default ATL project containing a COM object supporting
	ISupportErrorInfo might result in the following error:
	
	  C2668: 'InlineIsEqualGUID' : ambiguous call to overloaded function
	
	This error may also occur when calling the function InlineIsEqualGUID() in your
	ATL project.
	
	CAUSE
	=====
	
	The problem occurs because the function InlineIsEqualGUID() is defined both in
	the ATL header file, AtlBase.h, and the Platform SDK header file, Guiddef.h, in
	different name spaces. The include paths for the build point first to the
	Platform SDK include directory, and then to the ATL include directory. In the
	ATL header, InlineIsEqualGUID() is defined in a name space called "ATL", while
	in the Platform SDK header it is defined in the global name space. Because
	AtlBase.h includes the statement
	
	  using namespace ATL;
	
	the compiler is unable to distinguish which definition to use.
	
	RESOLUTION
	==========
	
	To work around this problem, prefix the call to the InlineIsEqualGUID() function
	with "::ATL::" (without the quotation marks). This explicitly qualifies the ATL
	namespace from where the implementation of InlineIsEqualGUID is pulled in. For
	example:
	
	  ::ATL::InlineIsEqualGUID()
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create an ATL DLL project and insert a simple object into the project with
	  ISupportErrorInfo support.
	
	2. Make sure that the includes path for the Platform SDK include directory comes
	  before the ATL include directory on the Directory tab of the Options dialog
	  box, which is accessed from the Tools menu.
	
	3. Build the project, and the error message appears.
	
	
	Additional query words: PlatSDK MMC Samples ATL Object Wizard
	
	======================================================================
	Keywords          : kbCOMt kbDebug kbSDKPlatform kbSDKWin32 kbVC600bug kbATL300bug kbDSupport kbfix kbGrpDSMFCATL 
	Technology        : kbVCsearch kbAudDeveloper kbATLsearch
	Version           : :3.0,6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
