---
layout: page
title: "Q166213: PRB: Right-Clicking CRichEditView Doesn't Activate Frame"
permalink: /kb/166/Q166213/
---

## Q166213: PRB: Right-Clicking CRichEditView Doesn't Activate Frame

{% raw %}

	Article: Q166213
	Product(s): Microsoft C Compiler
	Version(s): winnt:4.0,4.0a,4.1,4.2,4.2b,5.0,6.0
	Operating System(s): 
	Keyword(s): kbDocView kbMDI kbMFC kbRichEdit KbUIDesign kbVC kbVC400 kbVC410 kbVC420 kbVC500 kbVC60
	Last Modified: 04-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Editions, versions 4.0, 4.0a, 4.1 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2b 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 4.2b 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you have a CRichEditView or CRichEditCtrl on a CMDIChildWnd and you
	right-click the richedit control, focus is set to the richedit control but the
	frame is not activated.
	
	CAUSE
	=====
	
	The richedit control is not sending a WM_MOUSEACTIVATE message to its parent.
	
	RESOLUTION
	==========
	
	Override OnMouseActivate() in a CRichEditView or CRichEditCtrl and pass this
	message on to the parent. The MORE INFORMATION section below has code that
	illustrates this.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this bug and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Sample Code
	-----------
	
	     /* Compile options needed: default
	     */ 
	
	     int CTestView::OnMouseActivate(CWnd* pDesktopWnd,
	        UINT nHitTest, UINT message)
	     {
	        const MSG* pMsg = GetCurrentMessage();
	
	        GetParent()->SendMessage(WM_MOUSEACTIVATE,
	           pMsg->wParam, pMsg->lParam);
	
	        return CRichEditView::OnMouseActivate(pDesktopWnd,
	           nHitTest, message);
	     }
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDocView kbMDI kbMFC kbRichEdit KbUIDesign kbVC kbVC400 kbVC410 kbVC420 kbVC500 kbVC600 kbVS600 kbWndwMsg kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:4.0,4.0a,4.1,4.2,4.2b,5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
