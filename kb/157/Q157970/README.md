---
layout: page
title: "Q157970: PRB: Event Firing Changes in MFC May Break Some Containers"
permalink: /kb/157/Q157970/
---

## Q157970: PRB: Event Firing Changes in MFC May Break Some Containers

	Article: Q157970
	Product(s): Microsoft C Compiler
	Version(s): winnt:4.2
	Operating System(s): 
	Keyword(s): kb3rdparty kbActivexEvents kbContainer kbCtrl kbMFC kbVC420 kbfix kbGrpDSMFCATL
	Last Modified: 04-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	- Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	ActiveX Control containers implemented with Borland Delphi (and possibly other
	containers as well) may not see events fired by ActiveX Controls created with
	MFC version 4.2. The same container may have been able to handle events fired by
	a version of the same control created with MFC 4.1 or earlier.
	
	CAUSE
	=====
	
	The problem is related to a change made in MFC 4.2's implementation of the
	IConnectionPoint::Advise method. In MFC 4.1, the framework does a QueryInterface
	on the passed in IUnknown specifying the GUID of the default event set of the
	control.
	
	In MFC 4.2, the framework was changed to do a QueryInterface on the passed in
	IUnknown for IDispatch. Failing that, it queries for the event set interface.
	
	The change made to MFC 4.2 may make some containers unable to handle the events
	fired by the control. The problem is usually related to the way the container
	has implemented its control container support.
	
	RESOLUTION
	==========
	
	This problem has been addressed with the Visual C++ 4.2 patch. With this patch,
	MFC's implementation of IConnectionPoint::Advise has been changed back to doing
	an initial QueryInterface on the passed in IUnknown specifying the GUID of the
	default event set of the control. Failing that, it queries for IDispatch.
	
	STATUS
	======
	
	This behavior is by design.
	
	REFERENCES
	==========
	
	For information on how to obtain the Visual C++ 4.2 patch, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q156934 PATCH: Visual C++ 4.2b Patch
	
	Additional query words:
	
	======================================================================
	Keywords          : kb3rdparty kbActivexEvents kbContainer kbCtrl kbMFC kbVC420 kbfix kbGrpDSMFCATL 
	Technology        : kbVCsearch kbAudDeveloper kbVC420 kbVC32bitSearch
	Version           : winnt:4.2
	Issue type        : kbprb
	
	=============================================================================
	
