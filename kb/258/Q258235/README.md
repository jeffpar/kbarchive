---
layout: page
title: "Q258235: BUG: Memory Leak with ATL Containment"
permalink: kb/258/Q258235/
---

## Q258235: BUG: Memory Leak with ATL Containment

	Article: Q258235
	Product(s): Microsoft C Compiler
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbActiveX kbATL kbCOMt kbContainer kbCtrl kbATL300bug kbGrpDSMFCATL
	Last Modified: 26-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Active Template Library (ATL) 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A memory leak occurs when hosting an ActiveX control in an Active Template
	Library (ATL) control container. This memory leak also occurs at design time.
	
	CAUSE
	=====
	
	When the control is activated, the container provides its in-place accelerator
	table. The container creates the accelerator table by making a call to the
	CreateAcceleratorTable function. The memory thus allocated is never released by
	ATL.
	
	RESOLUTION
	==========
	
	To work around this problem, perform the following steps:
	
	1. Make a copy of the Atlhost.h file, and name it Fixatlhost.h.
	
	2. In the Fixatlhost.h file, add a data member of type HACCEL to the
	  CAxHostWindow class.
	
	3. Modify the IOleInPlaceSite::GetWindowContext method by storing the HACCEL
	  that is returned by the call to CreateAcceleratorTable in the new data
	  member.
	
	4. To release the memory, call DestroyAcceleratorTable on the cached HACCEL in
	  the IOleInPlaceSite::OnInPlaceDeactivate method.
	
	5. Save these changes to Fixatlhost.h.
	
	6. In the Stdafx.h file, comment out Atlhost.h and include FixAtlHost.h instead:
	
	      // #include <atlhost.h>
	      #include "FixAtlHost.h" 
	
	This technique works only in Debug or ReleaseMinDependency builds. It does not
	work in ReleaseMinSize builds, because in that case Atl.dll would be used, not
	the code in Fixatlhost.h.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a bug in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	When an ATL control is in-place activated in an ATL container, the control's
	server calls the container's IOleInPlaceSite::GetWindowContext method, which
	fills in an OLEINPLACEFRAMEINFO structure. In this method, the container creates
	an accelerator table by using the CreateAcceleratorTable API. OLE uses the
	information in this structure to determine whether a message maps to one of the
	container's accelerators. Because this memory has been allocated by the
	container, it is the container's responsibility to call DestroyAcceleratorTable
	to effectively release the memory.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbActiveX kbATL kbCOMt kbContainer kbCtrl kbATL300bug kbGrpDSMFCATL 
	Technology        : kbVCsearch kbAudDeveloper kbATLsearch kbATL300
	Version           : WINDOWS:3.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
