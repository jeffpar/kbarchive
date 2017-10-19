---
layout: page
title: "Q166767: PRB: GetControlUnknown() Returns NULL in COleControl"
permalink: /kb/166/Q166767/
---

## Q166767: PRB: GetControlUnknown() Returns NULL in COleControl

	Article: Q166767
	Product(s): Microsoft C Compiler
	Version(s): winnt:4.2,4.2b,5.0,6.0
	Operating System(s): 
	Keyword(s): kbole kbActiveX kbCOMt kbCtrl kbInprocSvr kbMFC kbVC420 kbVC500 kbVC600 kbGrpDSMFCATL
	Last Modified: 04-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.2, 4.2b, 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 4.2, 4.2b, 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you call GetControlUnknown() from inside a COleControl-derived class, it
	always returns NULL.
	
	CAUSE
	=====
	
	The function CWnd::GetControlUnknown() should be called from the control
	container.
	
	RESOLUTION
	==========
	
	Call CCmdTarget::GetControllingUnknown() instead of
	CWnd::GetControlUnknown().
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	CWnd::GetControlUnknown() can be called to check if the CWnd is being used as a
	proxy, or wrapper, for a contained Activex control. It does this by checking the
	m_pCtrlSite CWnd member to see if it's NULL or not. If m_pCtrlSite is NULL, then
	NULL is returned. Since m_pCtrlSite is only set when the CWnd represents a
	contained ActiveX control, m_pCtrlSite will always be NULL if
	GetControlUnknown() is called from inside an ActiveX control's source.
	
	CCmdTarget::GetControllingUnknown() can be used to get the IUnknown of the outer,
	or controlling, object from within an object which is being aggregated. If the
	object is not being aggregated then CCmdTarget::GetControllingUnknown() simply
	returns the object's own IUnknown.
	
	Note that CCmdTarget::GetControllingUnknown() is an undocumented function and may
	change in future versions of MFC.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbole kbActiveX kbCOMt kbCtrl kbInprocSvr kbMFC kbVC420 kbVC500 kbVC600 kbGrpDSMFCATL 
	Technology        : kbVCsearch kbAudDeveloper kbVC420 kbVC500 kbVC600 kbVC32bitSearch kbVC420b kbVC500Search
	Version           : winnt:4.2,4.2b,5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
