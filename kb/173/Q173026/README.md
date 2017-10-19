---
layout: page
title: "Q173026: PRB: Message-Handlers for ActiveX Control Aren't Called"
permalink: /kb/173/Q173026/
---

## Q173026: PRB: Message-Handlers for ActiveX Control Aren't Called

	Article: Q173026
	Product(s): Microsoft C Compiler
	Version(s): winnt:4.0,4.0a,4.1,4.2,4.2b,5.0,6.0
	Operating System(s): 
	Keyword(s): kbActiveX kbMFC kbVC400 kbVC410 kbVC420 kbVC500 kbVC600 kbGrpDSMFCATL
	Last Modified: 02-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Editions, versions 4.0, 4.0a, 4.1, 4.2b 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you create an ActiveX control dynamically via CWnd::CreateControl(), your
	window's message-handlers in the CWnd-derived class will not be called. For
	example, if you create a handler for WM_KILLFOCUS [OnKillFocus()] in the
	CWnd-derived class of a Microsoft Masked Edit control, it will not be called.
	
	CAUSE
	=====
	
	CWnd::CreateControl() doesn't subclass the HWND associated with the control.
	
	RESOLUTION
	==========
	
	For message-handlers to be called, the CWnd-derived class needs to subclass the
	HWND. You can do this by calling SubclassDlgItem(). Calling SubclassDlgItem()
	right after CreateControl() will cause an assert because CreateControl()
	previously called CWnd::Attach(). SubclassDlgItem() will call Attach() again. To
	avoid this assert, we need to call Detach() first before calling
	SubclassDlgItem() as follows:
	
	     // m_MaskEdit is the Microsoft Masked Edit control and 100 is
	     // its resource ID.
	     m_MaskEdit.Create("", WS_VISIBLE | WS_CHILD | WS_TABSTOP,
	        CRect(0,0,100,25), this, 100);
	     m_MaskEdit.Detach();
	     m_MaskEdit.SubclassDlgItem(100, this);
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	To set up a message handler for WM_KILLFOCUS in the CWnd-derived class of
	Microsoft Masked Edit control, you'll need to add the following lines to the
	header file:
	
	     afx_msg void OnKillFocus(CWnd* pNewWnd);
	     DECLARE_MESSAGE_MAP()
	
	The following lines go in the .CPP file:
	
	     BEGIN_MESSAGE_MAP(CMSMask, CWnd)
	        ON_WM_KILLFOCUS()
	     END_MESSAGE_MAP()
	
	     void CMSMask::OnKillFocus(CWnd* pNewWnd)
	     {
	        TRACE ("CMSMask::OnKillFocus\n");
	     }
	
	When you insert an ActiveX control via Component Gallery, the Visual C++ wrapper
	class has Create() functions that end up calling CWnd::CreateControl().
	
	Additional query words: ocx
	
	======================================================================
	Keywords          : kbActiveX kbMFC kbVC400 kbVC410 kbVC420 kbVC500 kbVC600 kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:4.0,4.0a,4.1,4.2,4.2b,5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
