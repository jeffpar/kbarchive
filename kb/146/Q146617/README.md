---
layout: page
title: "Q146617: FIX: SetWindowText(NULL) Doesn't Clear .OCX Edit Control"
permalink: kb/146/Q146617/
---

## Q146617: FIX: SetWindowText(NULL) Doesn't Clear .OCX Edit Control

	Article: Q146617
	Product(s): Microsoft C Compiler
	Version(s): winnt:4.0,4.1
	Operating System(s): 
	Keyword(s): kbole kbCtrl kbMFC kbVC400bug kbVC410bug kbVC420fix kbGrpDSMFCATL kbNoUpdate
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), included with:
	   - Microsoft Visual C++, 32-bit Editions, versions 4.0, 4.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	It is possible to use AppWizard to create an OLE Custom Control (.ocx file) that
	subclasses a standard Windows control. If you choose to subclass an edit
	control, the control will not exhibit the same behavior as a standard edit
	control.
	
	Specifically, in the case where the control is not initialized with data, the
	user types some text into the control, and then SetWindowText(NULL) is called to
	clear the text, the text in the control will not be cleared. If this same
	sequence of events were to occur in a standard edit control, the contents of the
	edit control would be cleared.
	
	CAUSE
	=====
	
	COleControl handles the WM_SETTEXT message in its OnSetText handler. The first
	few lines of this function are:
	
	  LRESULT COleControl::OnSetText(WPARAM wParam, LPARAM lParam)
	  {
	     ASSERT(lParam == 0 || AfxIsValidString((LPCTSTR)lParam));
	     // Is the property changing?
	     if ((lParam == 0 && m_strText.IsEmpty()) ||
	        (lParam != 0 && m_strText == (LPCTSTR)lParam))
	        return 0;
	             .
	           .
	           .
	  }
	
	When a user types text into the control, the m_strText member is not updated.
	Therefore, when SetWindowText(NULL) is called on the control, the first
	expression is evaluated as TRUE, even though the edit control is not truly
	empty. This expression is interpreted as property not changed, and the function
	exits.
	
	RESOLUTION
	==========
	
	To work around this problem, override OnSetText() in the COleControl derived
	class, and copy the code from COleControl::OnSetText() into the overridden
	funtion, with the following change:
	
	  LRESULT CMyOleControl::OnSetText(WPARAM wParam, LPARAM lParam)
	  {
	     ASSERT(lParam == 0 || AfxIsValidString((LPCTSTR)lParam));
	     // Is the property changing?
	     if ((lParam == 0 && InternalGetText().IsEmpty()) ||
	        (lParam != 0 && m_strText == (LPCTSTR)lParam))
	        return 0;
	                      .
	           .
	           .
	  }
	
	Calling InternalGetText() will give access to the text property, and then calling
	IsEmpty() on the return from it will correctly check to see if the edit control
	has been updated.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This problem was corrected in Visual C++ 32-bit
	Edition, version 4.2.
	
	Additional query words: 4.00 4.10 vcfixlist420
	
	======================================================================
	Keywords          : kbole kbCtrl kbMFC kbVC400bug kbVC410bug kbVC420fix kbGrpDSMFCATL kbNoUpdate 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:4.0,4.1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
