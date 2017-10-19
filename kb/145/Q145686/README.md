---
layout: page
title: "Q145686: PRB: CDaoRecordView Bookmark Members Invalid After Requery()"
permalink: /kb/145/Q145686/
---

## Q145686: PRB: CDaoRecordView Bookmark Members Invalid After Requery()

	Article: Q145686
	Product(s): Microsoft C Compiler
	Version(s): winnt:
	Operating System(s): 
	Keyword(s): kbusage kbDAOsearch kbDatabase kbMFC kbVC kbVC400 kbVC410 kbVC420 kbVC500 kbVC600
	Last Modified: 03-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), included with:
	   - *EDITOR Please do not choose this product*Microsoft Visual C++ 32-bit Edition* use 241, 265, 225, versions 4.0, 4.1, 4.1b, 4.2, 4.2b 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In some cases, when you use CDaoRecordView, added records will not show up in
	the result set after calling Requery() on the CDaoRecordset.
	
	CAUSE
	=====
	
	CDaoRecordView uses Jet engine bookmarks to determine when you are on the first
	or last record of the related CDaoRecordset. Jet engine bookmarks are not
	guaranteed to be valid following a Requery().
	
	RESOLUTION
	==========
	
	To avoid the problem, re-initialize the CDaoRecordView bookmark members to
	indicate that they are not valid bookmark values following any Requery() on the
	related CDaoRecordset. The following example shows how this might be done in a
	CDaoRecordView-derived class's OnMove() function:
	
	     BOOL CMyRecordView::OnMove(UINT nIDMoveCommand)
	     {
	        CDaoRecordset* pRecordset = OnGetRecordset();
	        if (m_bAddMode)
	        {
	           if (!UpdateData())
	              return FALSE;
	           try
	           {
	              pRecordset->Update();
	           }
	           catch (CDaoException* e)
	           {
	              AfxMessageBox(e->m_pErrorInfo->m_strDescription);
	              e->Delete();
	              return FALSE;
	           }
	
	           pRecordset->Requery();
	
	           m_varBookmarkCurrent = 1L;   // <<- re-initialize
	           m_varBookmarkFirst =         // <<- the bookmark
	              m_varBookmarkLast = 0L;   // <<- member variables!
	
	           UpdateData(FALSE);
	           m_bAddMode = FALSE;
	           return TRUE;
	        }
	        else
	        {
	           return CDaoRecordView::OnMove(nIDMoveCommand);
	        }
	     }
	
	If you call Requery() in any other case from your CDaoRecordView-derived class,
	you should also perform this re-initialization.
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage kbDAOsearch kbDatabase kbMFC kbVC kbVC400 kbVC410 kbVC420 kbVC500 kbVC600 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:
	Issue type        : kbprb
	
	=============================================================================
	
