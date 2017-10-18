---
layout: page
title: "Q125644: FIX: Property Sheet with Edit Doesn't Close On ESC Key"
permalink: kb/125/Q125644/
---

## Q125644: FIX: Property Sheet with Edit Doesn't Close On ESC Key

	Article: Q125644
	Product(s): Microsoft C Compiler
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbMFC kbPropSheet KbUIDesign kbVC200bug kbVC210fix kbGrpDSMFCATLkbbuglist kbfixlist
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Editions, version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Pressing the ESC key when focus is in a multiline edit control does not cause
	the Property Sheet to close (OnCancel) even if it has an IDCANCEL button. This
	problem may also exhibit itself when the focus is on other child controls that
	return the DLGC_WANTALLKEYS or the DLGC_WANTMESSAGE value in response to a
	WM_GETDLGCODE message.
	
	CAUSE
	=====
	
	The framework's code for handling the ESC key does not translate the ESC key if
	the child window (control) wants to handle it. A multiline edit control, which
	requests all messages in response to a WM_GETDLGCODE message, sends a WM_CLOSE
	message to its parent window (the CPropertyPage in this case) when the ESC key
	is received. However, the WM_CLOSE message is not handled in a CPropertyPage.
	Therefore it is ignored and is never received by the CPropertySheet.
	
	RESOLUTION
	==========
	
	To take care of this behavior, provide an OnClose() handler for your
	CPropertyPage derived class, and post the WM_CLOSE message to the parent window
	(the CPropertySheet). Add the WM_CLOSE message handler to your CPropertyPage
	derived class using ClassWizard. Then implement it as follows:
	
	  void CMyPropertyPage::OnClose()
	      {
	      GetParent()->PostMessage(WM_CLOSE);
	      CPropertyPage::OnClose();
	      }
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This problem was corrected in Visual C++ version 2.10
	for Windows NT.
	
	Additional query words: 2.00 3.00 multi line cr lf IDCANCEL cancel
	
	======================================================================
	Keywords          : kbMFC kbPropSheet KbUIDesign kbVC200bug kbVC210fix kbGrpDSMFCATL kbbuglist kbfixlist
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:2.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
