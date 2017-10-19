---
layout: page
title: "Q167697: FIX: ActiveX Control in IE Asserts in CTLINPLC.CPP, Line 328"
permalink: /kb/167/Q167697/
---

## Q167697: FIX: ActiveX Control in IE Asserts in CTLINPLC.CPP, Line 328

	Article: Q167697
	Product(s): Microsoft C Compiler
	Version(s): winnt:4.0,4.0a,4.1,4.2,4.2b,5.0
	Operating System(s): 
	Keyword(s): kberrmsg kbole kbActiveX kbCOMt kbCtrl kbCtrlCreate kbIE300 kbIE301 kbMFC kbVC400bug kb
	Last Modified: 17-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Editions, versions 4.0, 4.0a, 4.1, 4.2b 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	   - Microsoft Internet Explorer (Programming) versions 3.0, 3.01, 3.02 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Clicking on an MFC ActiveX control that is hosted in a frame in Internet
	Explorer may cause an assert in CTLINPLC.CPP, line 328.
	
	CAUSE
	=====
	
	The assert is in COleControl::BuildSharedMenu(), where it checks:
	
	     if (m_pUIActiveInfo != NULL)
	     {
	        ASSERT(m_pUIActiveInfo->m_hSharedMenu != NULL);
	        return TRUE;
	     }
	
	m_pUIActiveInfo->m_hSharedMenu will always be NULL because you are not doing
	menu merging. m_pUIActiveInfo is set to NULL when the control is UI
	de-activated. In this case, the control is inplace activated when you first
	click on it, so COleControl::OnActivateInPlace() is called. This, in turn, calls
	BuildSharedMenu(). When BuildSharedMenu() returns, but before
	OnActivateInPlace() is exited, Internet Explorer calls
	DoVerb(OLEIVERB_UIACTIVATE) on the control. This causes OnActivateInPlace() to
	be re-entered and BuildSharedMenu() to be called again. Because the control has
	not been UI-de-activated, m_pUIActiveInfo is not NULL.
	
	RESOLUTION
	==========
	
	You need to prevent OnActivateInPlace() from being re-entered by overriding
	OnActivateInPlace() and setting a static boolean flag to determine if it has
	been re-entered. If that is the case, then return the following: "
	
	     HRESULT CTestCtrl::OnActivateInPlace(BOOL bUIActivate, LPMSG pMsg)
	     {
	        static BOOL bInsideFunc = FALSE;
	        if (!bInsideFunc)
	        {
	           bInsideFunc = TRUE;
	           HRESULT hr = COleControl::OnActivateInPlace(bUIActivate, pMsg);
	           bInsideFunc = FALSE;
	           return hr;
	        }
	        return S_OK;
	     }
	
	" (without the quotation marks)
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This problem was corrected in Visual C++ version 6.0
	for Windows.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Put an MFC ActiveX control in a frame in Internet Explorer.
	
	2. Click on the control.
	
	3. Click on a different frame.
	
	4. Click back on the control.
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbole kbActiveX kbCOMt kbCtrl kbCtrlCreate kbIE300 kbIE301 kbMFC kbVC400bug kbVC410bug kbVC420bug kbVC500bug kbVC600fix kbIE302 kbGrpDSMFCATL kbNoUpdate 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:4.0,4.0a,4.1,4.2,4.2b,5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
