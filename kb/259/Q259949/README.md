---
layout: page
title: "Q259949: INFO: SetCaretPos Is Not Appropriate with CEdit or CRichEditCtrl"
permalink: kb/259/Q259949/
---

## Q259949: INFO: SetCaretPos Is Not Appropriate with CEdit or CRichEditCtrl

	Article: Q259949
	Product(s): Microsoft C Compiler
	Version(s): winnt:
	Operating System(s): 
	Keyword(s): kbCaret kbCursor kbMFC kbGrpDSMFCATL
	Last Modified: 01-JUL-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC) 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You cannot use the SetCaretPos function to set the caret position for CEdit or
	CRichEditCtrl controls. You should use the SetSel function instead.
	
	MORE INFORMATION
	================
	
	The caret is a shared resource. A window should not move the caret if it does
	not own the caret. You cannot use the SetCaretPos function to change the
	position of the caret because the control doesn't own the caret.
	
	To move the caret, use the SetSel function and specify the same position for both
	the start and end parameters. This moves the text insertion point, and
	repositions the caret.
	
	REFERENCES
	==========
	
	Online help for SetCaretPos()
	
	Additional query words:
	
	======================================================================
	Keywords          : kbCaret kbCursor kbMFC kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:
	Issue type        : kbinfo
	
	=============================================================================
	
