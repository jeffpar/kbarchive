---
layout: page
title: "Q140595: DOC: How to Display Tool Tips After Calling EnableToolTips"
permalink: /kb/140/Q140595/
---

## Q140595: DOC: How to Display Tool Tips After Calling EnableToolTips

	Article: Q140595
	Product(s): Microsoft C Compiler
	Version(s): winnt:4.0,4.1,4.2
	Operating System(s): 
	Keyword(s): kbcode kbui kbdocfix kbdocerr kbMFC kbToolTip KbUIDesign kbVC400bug kbVC410bug kbVC420b
	Last Modified: 09-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 4.0, 4.1 
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	- Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft Foundation Classes (MFC) 4.x documentation states that you can
	call the CWnd::EnableToolTips function to enable tool tips for the child
	controls of a window. For example, this function can be used to display tool
	tips for all the controls on a Form View.
	
	However, simply calling this function is not sufficient. In an application built
	with MFC 4.x, tool tips for your child controls will not display correctly
	unless you provide a handler for the TTN_NEEDTEXT tool tip notification.
	
	This documentation error has been fixed in Visual C++ version 5.0.
	
	MORE INFORMATION
	================
	
	The default tool tips provided for your windows by EnableToolTips do not have
	text associated with them. In order to retrieve text for the tool tip to
	display, the TTN_NEEDTEXT notification is sent to the tool tip control's parent
	window just before the tool tip window is displayed. If there is no handler for
	this message to assign some value to the pszText member of the TOOLTIPTEXT
	structure, there will be no text displayed for the tool tip.
	
	Tool tips are displayed for tool bar buttons without any extra effort. This is
	because the parent of the tool bar is derived from CFrameWnd, which has a
	default handler for the TTN_NEEDTEXT notification. This handler is designed for
	handling TTN_NEEDTEXT notifications from tool tip controls associated with tool
	bar buttons.
	
	This handler is not called when the notification is sent from a tool tip control
	associated with a child control in a window that is not a CFrameWnd such as a
	control on a dialog box or a form view. Therefore, it is necessary for the user
	to provide a handler function for the TTN_NEEDTEXT notification message in order
	to display tool tips for child controls.
	
	Steps to Enable Tool Tips for Child Controls
	--------------------------------------------
	
	To enable tool tips for the child controls of a window (such as the controls on a
	form view), follow these steps:
	
	1. Call EnableToolTips() for the window for which you want to provide tool tips.
	
	2. Provide a separate string resource for each control that has the same ID as
	  the control. These separate string resources will contain the text for each
	  control's tool tip. Note that when adding tool tip text for tool bar buttons,
	  the string resource is of this form:
	
	  "Status bar text\nTool Tip Text"
	
	  The tool tip text is separated from the status bar text by \n. If you want to
	  duplicate this functionality in your form views, you should implement the
	  code used in CFrameWnd::OnToolTipText (MFC source: Winfrm.cpp, line 1680) in
	  your own handler as described in the next step.
	
	3. Provide a TTN_NEEDTEXT notification handler in the message map of the window
	  that contains the child controls (for example, your form view class). This
	  handler will call a function that will identify the control and pass the ID
	  of the control and the instance handle of the application that contains the
	  string resource to the appropriate TOOLTIPTEXT structure members.
	
	Sample Code
	-----------
	
	     // Each control on the form view has an associated
	     // string resource with the same ID in the string table of
	     // this application.
	
	     // Message Map for CFormView derived class
	     BEGIN_MESSAGE_MAP(CMyFormView, CFormView)
	          ON_NOTIFY_EX_RANGE(TTN_NEEDTEXT,0,0xFFFF,OnToolTipNotify)
	     END_MESSAGE_MAP()
	
	     //Notification handler - add entry to class definition
	     BOOL CMyFormView::OnToolTipNotify(UINT id, NMHDR *pNMH,
	               LRESULT *pResult)
	     {
	         TOOLTIPTEXT *pText = (TOOLTIPTEXT *)pNMH;
	         int control_id =  ::GetDlgCtrlID((HWND)pNMH->idFrom);
	         if(control_id)
	         {
	             pText->lpszText = MAKEINTRESOURCE(control_id);
	             pText->hinst = AfxGetInstanceHandle();
	             return TRUE;
	         }
	         return FALSE;
	     }
	
	     void CKbtestView::OnInitialUpdate()
	     {
	         CFormView::OnInitialUpdate();
	         EnableToolTips(TRUE);
	     }
	
	REFERENCES
	==========
	
	For further information on how commands such as WM_NOTIFY are routed, see
	Programming with MFC Overview, Working with Messages and Commands, How the
	Framework Calls a Handler, Command Routing in Books Online.
	
	For further information on how to handle a WM_NOTIFY message such as
	TTN_NEEDTEXT, see Tech Note 61: ON_NOTIFY and WM_NOTIFY Messages.
	
	Additional query words: kbVC400bug
	
	======================================================================
	Keywords          : kbcode kbui kbdocfix kbdocerr kbMFC kbToolTip KbUIDesign kbVC400bug kbVC410bug kbVC420bug kbVC500fix kbGrpDSMFCATL 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbVC410 kbVC420 kbVC32bitSearch
	Version           : winnt:4.0,4.1,4.2
	Solution Type     : kbfix
	
	=============================================================================
	
