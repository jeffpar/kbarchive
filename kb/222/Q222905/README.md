---
layout: page
title: "Q222905: HOWTO: Display a Context Menu for CTreeCtrl"
permalink: /kb/222/Q222905/
---

## Q222905: HOWTO: Display a Context Menu for CTreeCtrl

{% raw %}

	Article: Q222905
	Product(s): Microsoft C Compiler
	Version(s): winnt:
	Operating System(s): 
	Keyword(s): kbCmnCtrls kbCtrl kbMenu kbMFC kbTreeView KbUIDesign kbVC kbGrpDSMFCATL
	Last Modified: 24-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC) 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article explains how to display a context menu for a tree control in MFC.
	
	MORE INFORMATION
	================
	
	On Windows platforms, the windowing subsystem encourages the developer to handle
	context menu requests in top level windows. The traditional Windows programming
	paradigm therefore concentrates the code for handling all of the context menu
	requests in a few window and dialog procedures. However, with the advent of
	object oriented programming a different solution can be embraced; that is to
	handle the WM_CONTEXTMENU message within the control itself thereby creating
	self-contained entities and objects. This method allows reuse of the control in
	more than just one parent window and dialog.
	
	In the case of a tree view control, the drag-and-drop functionality that it
	embeds requires that special steps be taken in order to obtain independence from
	the containing window. After the tree view control receives a WM_RBUTTONDOWN
	message, messages are not forwarded by the control until a WM_RBUTTONUP message
	is received. The control decides if a drag-and-drop operation was or was not
	initiated.
	
	- If the user did initiate a drag-and-drop operation, then USER32 generates a
	  WM_CONTEXTMENU message and sends it to the tree view control. If the tree
	  view control does not handle this message then the default window procedure
	  forwards it to the control's parent window.
	
	- If the user did not initiate a drag-and-drop operation then the control's
	  window procedure sends a WM_NOTIFY (code NM_RCLICK) message and then a
	  WM_CONTEXTMENU message to the parent window.
	
	Consequently, consider the following three cases:
	
	- When SHIFT+F10 is pressed and the control has the focus, a WM_CONTEXTMENU
	  message is sent to the tree view control.
	
	- When the user performs a drag-and-drop operation a WM_CONTEXTMENU message is
	  sent to the tree view control.
	
	- When the user right-clicks, a WM_NOTIFY (code NM_RCLICK) message is sent by
	  the tree control to the control's parent. If you handle the reflected
	  notification as shown below, the control displays the context menu in all
	  situations.
	
	To implement a context menu for a tree view control it is recommended that
	message handlers for both the WM_CONTEXTMENU and reflected WM_NOTIFY (NM_RCLICK)
	messages be implemented by the control. For example:
	
	  BEGIN_MESSAGE_MAP(CMyTreeCtrl, CTreeCtrl)
	  	//{{AFX_MSG_MAP(CMyTreeCtrl)
	  	ON_NOTIFY_REFLECT(NM_RCLICK, OnRClick)
	  	ON_WM_CONTEXTMENU()
	  	//}}AFX_MSG_MAP
	  END_MESSAGE_MAP()
	
	  void CMyTreeCtrl::OnRClick(NMHDR* pNMHDR, LRESULT* pResult) 
	  {
	  	TRACE0("CMyTreeCtrl::OnRClick()\n");
	  	// Send WM_CONTEXTMENU to self
	  	SendMessage(WM_CONTEXTMENU, (WPARAM) m_hWnd, GetMessagePos());
	  	// Mark message as handled and suppress default handling
	  	*pResult = 1;
	  }
	
	  void CMyTreeCtrl::OnContextMenu(CWnd* pWnd, CPoint ptMousePos) 
	  {
	  	// if Shift-F10
	  	if (ptMousePos.x == -1 && ptMousePos.y == -1)
	  		ptMousePos = (CPoint) GetMessagePos();
	
	  	ScreenToClient(&ptMousePos);
	
	  	UINT uFlags;
	  	HTREEITEM htItem;
	  	
	  	htItem = HitTest( ptMousePos, &uFlags );
	
	  	if( htItem == NULL )
	  		return;
	  	
	  	m_hActiveItem = htItem;
	
	  	CMenu menu;
	  	CMenu* pPopup;
	
	  	// the font popup is stored in a resource
	  	menu.LoadMenu(IDR_TREEITEM_CONTEXTMENU);
	  	pPopup = menu.GetSubMenu(0);
	  	ClientToScreen(&ptMousePos);
	  	pPopup->TrackPopupMenu( TPM_LEFTALIGN, ptMousePos.x, ptMousePos.y, this );
	  }
	
	Additional query words: CTreeView popup menu context
	
	======================================================================
	Keywords          : kbCmnCtrls kbCtrl kbMenu kbMFC kbTreeView KbUIDesign kbVC kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
