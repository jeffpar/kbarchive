---
layout: page
title: "Q137154: FIX: ClassWizard Generates Bad Code for Tree View Messages"
permalink: kb/137/Q137154/
---

## Q137154: FIX: ClassWizard Generates Bad Code for Tree View Messages

	Article: Q137154
	Product(s): Microsoft C Compiler
	Version(s): winnt:2.1
	Operating System(s): 
	Keyword(s): kbwizard kbMFC kbTreeView kbVC200bug kbVC210bug kbVC220bug kbVC400fix kbGrpDSMFCATL kbN
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The ClassWizard, used with:
	   - Microsoft Visual C++, 32-bit Editions, version 2.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Class Wizard generates the following incorrect code for the
	TVN_BEGINLABELEDIT, TVN_ENDLABELEDIT, TVN_GETDISPINFO, TVN_SETDISPINFO, and
	TVN_KEYDOWN Tree View Control notification messages.
	
	  void CMyDialog::OnXXXXtreeview1(NMHDR* pNMHDR, LRESULT* pResult)
	  {
	     NM_TREEVIEW* pNMTreeView = (NM_TREEVIEW*)pNMHDR;
	     // TODO: Add your control notification hander code here
	     *pResult = 0;
	  }
	
	RESOLUTION
	==========
	
	For TVN_BEGINLABELEDIT, TVN_ENDLABELEDIT, TVN_GETDISPINFO, and TVN_SETDISPINFO,
	the pNMHDR parameter should be cast to a TV_DISPINFO*. For example:
	
	  void CMyDialog::OnXXXXtreeview1(NMHDR* pNMHDR, LRESULT* pResult)
	  {
	     TV_DISPINFO* pTVDispInfo = (TV_DISPINFO*)pNMHDR;
	     // TODO: Add your control notification hander code here
	     *pResult = 0;
	  }
	
	For TVN_KEYDOWN, the pNMHDR parameter should be cast to a TV_KEYDOWN*. For
	example:
	
	  void CMyDialog::OnXXXXtreeview1(NMHDR* pNMHDR, LRESULT* pResult)
	  {
	     TV_KEYDOWN* pTVKeyDown = (TV_KEYDOWN*)pNMHDR;
	     // TODO: Add your control notification hander code here
	     *pResult = 0;
	  }
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This problem was corrected in Visual C++ version 4.0.
	
	Additional query words: 2.10
	
	======================================================================
	Keywords          : kbwizard kbMFC kbTreeView kbVC200bug kbVC210bug kbVC220bug kbVC400fix kbGrpDSMFCATL kbNoUpdate kbbuglist kbfixlist
	Technology        : kbVCsearch kbAudDeveloper kbClassWizard
	Version           : winnt:2.1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
