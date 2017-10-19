---
layout: page
title: "Q143313: FIX: CToolTipCtrl Stops Working After Dialog Is Displayed"
permalink: /kb/143/Q143313/
---

## Q143313: FIX: CToolTipCtrl Stops Working After Dialog Is Displayed

	Article: Q143313
	Product(s): Microsoft C Compiler
	Version(s): 4.0,4.1,4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbMFC kbToolTip KbUIDesign kbVC kbVC400bug kbVC410bug kbVC420bug kbVC500bug kbVC600bug
	Last Modified: 11-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Editions, versions 4.0, 4.1 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.2, 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, versions 4.2, 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you create a CToolTipCtrl and call AddTool() to activate it, it will work
	until you display a modal dialog box. For example, if on the Help menu, you
	click About to display the About box, and you then click OK to dismiss it, the
	CToolTipCtrl will not pop up anymore.
	
	CAUSE
	=====
	
	MFC is sending a WM_DISABLEMODAL to all of the frame's descendant windows when a
	modal dialog box pops up. The CToolTipCtrl responds to the WM_DISABLEMODAL by
	sending itself a TTM_ACTIVATE with a FALSE. This disables it. However, the
	CToolTipCtrl doesn't reactivate itself once the frame calls EnableWindow() for
	its descendants.
	
	RESOLUTION
	==========
	
	You should have a PreTranslateMessage() function where you are calling
	RelayEvent(). The workaround for this problem is to call Activate(TRUE) before
	the call to RelayEvent().
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This problem was corrected in Microsoft Visual C++ .NET.
	
	MORE INFORMATION
	================
	
	This is only a problem if you create your own CToolTipCtrl. Using
	EnableToolTips() does not have this problem.
	
	Sample Code to Demonstrate Problem
	----------------------------------
	
	     // m_pToolTip is a CToolTipCtrl *
	     BOOL CTestView::PreTranslateMessage(MSG* pMsg)
	     {
	         switch(pMsg->message)
	         {
	             case WM_MOUSEMOVE:
	             case WM_LBUTTONDOWN:
	             case WM_LBUTTONUP:
	             case WM_MBUTTONDOWN:
	             case WM_MBUTTONUP:
	             case WM_RBUTTONDOWN:
	             case WM_RBUTTONUP:
	                 // This will reactivate the tooltip
	                 m_ToolTip.Activate (TRUE);
	                 m_ToolTip.RelayEvent (pMsg);
	         }
	         return CFormView::PreTranslateMessage(pMsg);
	     }
	
	     /* Compile options needed: default
	     */ 
	
	Additional query words: kbVC400bug kbvc410bug kbvc420bug kbvc500bug kbvc600bug CToolTipCtrl DoModal
	
	======================================================================
	Keywords          : kbMFC kbToolTip KbUIDesign kbVC kbVC400bug kbVC410bug kbVC420bug kbVC500bug kbVC600bug kbGrpDSMFCATL kbNoUpdate 
	Technology        : kbAudDeveloper kbMFC
	Version           : :4.0,4.1,4.2,5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
