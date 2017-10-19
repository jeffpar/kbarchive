---
layout: page
title: "Q244955: PRB: MinDependency Project May Need to Include Atl.dll"
permalink: /kb/244/Q244955/
---

## Q244955: PRB: MinDependency Project May Need to Include Atl.dll

	Article: Q244955
	Product(s): Microsoft C Compiler
	Version(s): 3.0,6.0
	Operating System(s): 
	Keyword(s): kbCOMt kbContainer kbRegistry kbVC600 kbATL300 kbDSupport kbGrpDSMFCATL
	Last Modified: 18-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Active Template Library (ATL) 3.0, used with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	ATL projects built for MinDependency will still need Atl.dll if they use ATL
	control containment code.
	
	CAUSE
	=====
	
	ATL's control containment implements interfaces that are described by the type
	library in Atl.dll.
	
	RESOLUTION
	==========
	
	Include the Atl.dll file.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	ATL's control containment implements two dual interfaces,
	IDocHostUIHandlerDispatch and IAxWinAmbientDispatch, as a part of the control
	container. Because the dual interfaces are implemented using IDispatchImpl, they
	delegate to the type library for implementation of IDispatch methods. This
	requires the type library describing these interfaces to be registered. This
	type library exists in Atl.dll.
	
	Additional query words: IDocHostUIHandlerDispatch, IAxWinAmbientDispatch IDispatchImpl static
	
	======================================================================
	Keywords          : kbCOMt kbContainer kbRegistry kbVC600 kbATL300 kbDSupport kbGrpDSMFCATL 
	Technology        : kbVCsearch kbAudDeveloper kbATLsearch
	Version           : :3.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
