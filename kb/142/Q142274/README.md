---
layout: page
title: "Q142274: BUG: Assertion Failure When Handling xN_SETFOCUS in CFormView"
permalink: /kb/142/Q142274/
---

## Q142274: BUG: Assertion Failure When Handling xN_SETFOCUS in CFormView

{% raw %}

	Article: Q142274
	Product(s): Microsoft C Compiler
	Version(s): winnt:
	Operating System(s): 
	Keyword(s): kbDocView kbMFC KbUIDesign kbVC400bug kbVC410fix kbGrpDSMFCATL kbNoUpdate
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++ 32-bit Edition, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Focus notifications (EN_SETFOCUS, BN_SETFOCUS, and so on) for controls in a
	CFormView are usually handled in the CFormView class. Calling a function that
	relies on the window handle of the control (m_hWnd) inside such a handler may
	cause an assertion failure in Afxwin2.inl. This happens only if the control is
	the first one in the tab order.
	
	CAUSE
	=====
	
	The assertion failure occurs because the focus handler for the control is being
	called before OnInitialUpdate() is called for the CFormView.
	
	RESOLUTION
	==========
	
	To work around this problem, make sure that the m_hWnd member of the control is
	not NULL before calling any function that relies on it.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in Visual C++ 4.1.
	
	Sample Code
	-----------
	
	The following illustrates calling SetSel in the for an Edit control.
	
	      void CSettestView::OnSetFocusEdit1()
	      {
	          if(NULL != m_Edit.m_hWnd)
	              m_Edit.SetSel( 0,1 );
	      }
	
	Additional query words: kbVC400bug 4.00 4.10
	
	======================================================================
	Keywords          : kbDocView kbMFC KbUIDesign kbVC400bug kbVC410fix kbGrpDSMFCATL kbNoUpdate 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
