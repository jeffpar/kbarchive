---
layout: page
title: "Q145616: HOWTO: How to Enable Edit Menu Commands for Edit Controls"
permalink: kb/145/Q145616/
---

## Q145616: HOWTO: How to Enable Edit Menu Commands for Edit Controls

	Article: Q145616
	Product(s): Microsoft C Compiler
	Version(s): winnt:2.0,2.1,2.2,4.0
	Operating System(s): 
	Keyword(s): kbCtrl kbDocView kbEditCtrl kbMFC KbUIDesign kbVC kbGrpDSMFCATL
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5, 1.51, 1.52 
	   - Microsoft Visual C++, 32-bit Editions, versions 2.0, 2.1, 2.2, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	On a CDialog or other window that has no edit menu options for cutting, copying,
	and pasting, CEdit controls handle these functions through the normal Windows
	accelerator processing (CTRL+X,V,C, or the SHIFT-DELETE, SHIFT-INSERT,
	CTRL-INSERT, CTRL-DELETE, and so on keys). However, in a typical MDI or SDI
	application, these options are disabled.
	
	This is due to the default implementation for menu handlers and accelerator keys
	that AppWizard adds to your application to handle these functions. These menu
	handlers get the accelerator keystrokes instead of your edit control. This
	article shows you how to implement the edit control's clipboard functions on a
	CFormView-derived form.
	
	MORE INFORMATION
	================
	
	If you completely remove the menu options (not just enable or disable) and any
	accelerator definitions for the standard edit accelerator keys, then there will
	be no conflict and your CEdit controls will take care of their clipboard
	functions as usual. However, if you want to implement the common Edit menu
	clipboard functions (and toolbar Edit buttons), you will have to add some
	additional handlers to your program.
	
	- Your UPDATE_COMMAND_UI handlers will need to determine if the control with
	  the focus is really a CEdit and if there is any text available for the
	  operation.
	
	- Because you have menu items for Cut, Copy, or Paste that are tied to the
	  standard accelerators, you need to write handlers for the actions.
	
	Step-by-Step Example
	--------------------
	
	This example provides the code you would add for doing text cut, copy, or paste
	in CEdit controls in a CFormView.
	
	1. First, determine if it is a CEdit control that has the focus:
	
	     // IsEdit: a helper function to determine if a given CWnd pointer
	     // points to a CEDit control.
	     // Use the SDK ::GetClassName() function because MFC IsKindOf
	     // fails if no CEdit variable has been created for the control you're
	     // trying to test.
	
	     BOOL CMyFormView::IsEdit( CWnd* pWnd )
	     {
	        ASSERT( pWnd != NULL );
	        HWND hWnd = pWnd->GetSafeHwnd();
	        if (hWnd == NULL)
	           return FALSE;
	
	        TCHAR szClassName[6];
	        return ::GetClassName(hWnd, szClassName, 6) &&
	               _tcsicmp(szClassName, _T("Edit")) == 0;
	     }
	
	2. Add an UPDATE_COMMAND_UI handler for ID_EDIT_COPY & ID_EDIT_CUT:
	
	     // UPDATE_COMMAND_UI handler for Edit Copy and Edit Cut which both
	     // require that the current focus is on an edit control that has
	     // text selected.
	
	     void CMyFormView::OnUpdateNeedSel(CCmdUI* pCmdUI)
	     {
	       // get the current focus & determine if its on a CEdit control
	        CWnd* pWnd = GetFocus();
	        if (NULL == pWnd || !IsEdit( pWnd ))
	        {
	           pCmdUI->Enable( FALSE );
	        }
	        else
	        {
	           CEdit* pEdit = (CEdit*)pWnd;
	           int nBeg, nEnd;
	
	           pEdit->GetSel( nBeg, nEnd );
	           pCmdUI->Enable( nBeg != nEnd );
	        }
	     }
	
	3. Add UPDATE_COMMAND_UI handlers for ID_EDIT_PASTE:
	
	     // UPDATE_COMMAND_UI handlers for Edit Paste requires that focus be
	     // on an edit control and that the clipboard contains text to be
	     // pasted into the control.
	
	     void CMyFormView::OnUpdateNeedClip(CCmdUI* pCmdUI)
	     {
	        // get the current focus & determine if its on a CEdit control
	        // also check to see if the control is read-only.
	        CWnd* pWnd = GetFocus();
	        if (  NULL == pWnd ||
	              !IsEdit( pWnd ) ||
	              (pWnd->GetStyle() & ES_READONLY) != 0 )
	        {
	           pCmdUI->Enable( FALSE );
	        }
	        else
	           pCmdUI->Enable(::IsClipboardFormatAvailable(CF_TEXT));
	     }
	
	4. Add standard handlers for ID_EDIT_COPY, ID_EDIT_CUT, and ID_EDIT_PASTE:
	
	     void CMyFormView::OnEditCopy()
	     {
	        CEdit* pEdit = (CEdit*)GetFocus();
	        ASSERT( IsEdit( pEdit) );
	        pEdit->Copy();
	     }
	
	     void CMyFormView::OnEditCut()
	     {
	        CEdit* pEdit = (CEdit*)GetFocus();
	        ASSERT( IsEdit( pEdit) );
	        pEdit->Cut();
	     }
	
	     void CMyFormView::OnEditPaste()
	     {
	        CEdit* pEdit = (CEdit*)GetFocus();
	        ASSERT( IsEdit( pEdit) );
	        ASSERT(::IsClipboardFormatAvailable(CF_TEXT));
	        pEdit->Paste();
	     }
	
	Additional query words: kbinf 1.00 1.50 2.50 2.51 2.52 2.00 2.10 2.20 3.00 3.10 3.20 4.00
	
	======================================================================
	Keywords          : kbCtrl kbDocView kbEditCtrl kbMFC KbUIDesign kbVC kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:2.0,2.1,2.2,4.0
	Issue type        : kbhowto
	
	=============================================================================
	
