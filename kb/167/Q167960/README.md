---
layout: page
title: "Q167960: BUG: ESC/ENTER Keys Do Not Work When Editing CTreeCtrl Labels"
permalink: kb/167/Q167960/
---

## Q167960: BUG: ESC/ENTER Keys Do Not Work When Editing CTreeCtrl Labels

	Article: Q167960
	Product(s): Microsoft C Compiler
	Version(s): 2.0,2.1,2.2,4.0,4.0a,4.1,4.2,4.2b,5.0,6.0
	Operating System(s): 
	Keyword(s): kbui kbMFC kbTreeView KbUIDesign kbVC kbVC200bug kbVC210bug kbVC220bug kbVC400bug kbVC4
	Last Modified: 13-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 2.0, 2.1, 2.2, 4.0, 4.0a, 4.1 
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.2, 4.2b, 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 4.2, 4.2b, 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	- Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you edit labels in a CTreeCtrl, you are allowed to press the ESC key to
	cancel the changes or press the ENTER key to accept the changes. However, when
	the CTreeCtrl is a child window of a dialog box (CDialog), a formview window
	(CFormView), or a property page (CPropertyPage), the ESC or ENTER keys do not
	function as expected.
	
	CAUSE
	=====
	
	IsDialogMessage() function is called in the PreTranslateInput() function which
	in turn is called in the PreTranslateMessage() function of all CFormView or
	CDialog derived classes mentioned above. The ESC and ENTER keys are processed in
	IsDialogMessage() but are not passed on to the edit control created by the
	tree-view control. Thus, these keystrokes have no effect.
	
	RESOLUTION
	==========
	
	For Visual C++ 4.xx and later, we can trap the ESC and ENTER keystroke messages
	in the PreTranslateMessage() function for all CFormView, CDialog (modal or
	modeless) and CPropertyPage (either in modal or modeless CPropertySheet) derived
	classes.
	
	In the code below, m_TreeCtrl is a member variable of those derived classes and
	it is of CTreeCtrl data type, and CMyXxx can be any CFormView, CDialog, or
	CPropertyPage derived class.
	
	     BOOL CMyXxx::PreTranslateMessage(MSG* pMsg)
	     {
	        // If edit control is visible in tree view control, when you send a
	        // WM_KEYDOWN message to the edit control it will dismiss the edit
	        // control. When the ENTER key was sent to the edit control, the
	        // parent window of the tree view control is responsible for updating
	        // the item's label in TVN_ENDLABELEDIT notification code.
	        if (pMsg->message == WM_KEYDOWN &&
	           pMsg->wParam == VK_RETURN || pMsg->wParam == VK_ESCAPE)
	        {
	           CEdit* edit = m_TreeCtrl.GetEditControl();
	           if (edit)
	           {
	              edit->SendMessage(WM_KEYDOWN, pMsg->wParam, pMsg->lParam);
	              return TRUE;
	           }
	        }
	        // CXxxx can be a CFormView, Cdialog, or CPropertyPage class.
	        return CXxxx::PreTranslateMessage(pMsg);
	     }
	
	For Visual C++ 2.xx, since PreTranslateMessage() is not called for modal
	CDialog-derived classes, the sample code above does not apply to the modal
	dialog and property page in a modal CPropertySheet derived class. In this
	situation, those keystroke messages can be trapped in the overridden OnOK() (for
	Enter key) and OnCancel() (for Esc key) functions in either CDialog or
	CPropertySheet derived-class. The sample code works fine even in the absence of
	both the OK and Cancel buttons from the dialog resource template.
	
	NOTE: It is too late to trap those keystroke messages in CPropertyPage's OnOK()
	and OnCancel() functions. Therefore, we have to do it in CPropertySheet-derived
	class.
	
	A new member function called IsTreeCtrlEditMessage() is added to the CDialog or
	CPropertySheet derived-class. This function sends a WM_KEYDOWN message to the
	tree-view's edit control when it is the window with focus. And it is being
	called in both overridden OnOK() and OnCancel() functions. The CMyDxxx in the
	sample code below can either be a CDialog or a CPropertySheet derived-class.
	Note that the MODAL_PROPERTYSHEET constant is declared and used in
	IsTreeCtrlEditMessage() so the same code can be applied to both CDialog and
	CPropertySheet derived-classes.
	
	     // Set MODAL_PROPERTYSHEET to 1 for modal CPropertySheet-derived class
	     // and 0 for CDialog-derived class.
	     #define MODAL_PROPERTYSHEET  1
	
	     BOOL CMyDxxx::IsTreeCtrlEditMessage(WPARAM KeyCode)
	     {
	        BOOL       rvalue = FALSE;
	
	        // pWnd is a pointer to either an active CPropertyPage of the modal
	        // CPropertySheet or a modal CDialog object.
	        CWnd*   pWnd = this;
	     #if MODAL_PROPERTYSHEET
	        pWnd = GetActivePage();
	     #endif
	
	        // IDC_TREECTRL is the ID of the tree view control.
	        CTreeCtrl *treectrl = (CTreeCtrl *) pWnd->GetDlgItem(IDC_TREECTRL);
	        if (!treectrl)
	           return rvalue;
	
	        // If the edit control of the tree view control has the input focus,
	        // sending a WM_KEYDOWN message to the edit control will dismiss the
	        // edit control.  When ENTER key was sent to the edit control, the
	        // parentwindow of the tree view control is responsible for updating
	        // the item's label in TVN_ENDLABELEDIT notification code.
	        CWnd*  focus = GetFocus();
	        CEdit* edit  = treectrl->GetEditControl();
	        if ((CEdit *) focus == edit)
	        {
	           edit->SendMessage(WM_KEYDOWN, KeyCode);
	           rvalue = TRUE;
	        }
	        return rvalue;
	     }
	
	     void CMyDxxx::OnOK()
	     {
	        // Do not dismiss the dialog object if ENTER key was sent to the tree
	        // view's edit control.  You may call the CDialog::OnOK() function if
	        // this is for CDialog.
	        if (!IsTreeCtrlEditMessage(VK_RETURN))
	           EndDialog(IDOK);
	     }
	
	     void CMyDxxx::OnCancel()
	     {
	        // Do not dismiss the dialog object if ESC key was sent to the tree
	        // view's edit control.  You might call the CDialog::Cancel()
	        // function if this is for CDialog.
	        if (!IsTreeCtrlEditMessage(VK_ESCAPE))
	           EndDialog(IDCANCEL);
	     }
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	For more information about CTreeCtrl, please refer to the MFC online help and
	Win32 SDK help files.
	
	REFERENCES
	==========
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q130691 BUG: ESC/ENTER Keys Don't Work When Editing Labels in TreeView
	
	(c) Microsoft Corporation 1997, All Rights Reserved. Contributions by Yeong-Kah
	Tam, Microsoft Corporation
	(c) Microsoft Corporation 1997, All Rights Reserved.
	Contributions by Yeong-Kah Tam, Microsoft Corporation
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbui kbMFC kbTreeView KbUIDesign kbVC kbVC200bug kbVC210bug kbVC220bug kbVC400bug kbVC410bug kbVC420bug kbVC500bug kbVC600bug kbGrpDSMFCATL 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbVC220 kbVC410 kbVC420 kbVC500 kbVC600 kbVC200 kbVC210 kbVC32bitSearch kbVC400a kbVC420b kbVCNET kbVC500Search
	Version           : :2.0,2.1,2.2,4.0,4.0a,4.1,4.2,4.2b,5.0,6.0
	Issue type        : kbbug
	
	=============================================================================
	
