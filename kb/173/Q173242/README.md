---
layout: page
title: "Q173242: PRB: Use Masks to Set/Get Item States in CListCtrl"
permalink: kb/173/Q173242/
---

## Q173242: PRB: Use Masks to Set/Get Item States in CListCtrl

	Article: Q173242
	Product(s): Microsoft C Compiler
	Version(s): winnt:4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbCtrl kbListBox kbVC kbGrpDSMFCATL
	Last Modified: 04-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	With the CListCtrl class there are no explicit function calls to set or retrieve
	the states of the list items. This functionality is handled with flags or masks.
	This article explains how to use these masks to get list items and change their
	states.
	
	Sample Code
	-----------
	
	The following code demonstrates how to select all items in the CListCtrl that
	begin with the letter "A" and deselect all others. Note that m_listCtrl is a
	ClassWizard added control data member declared as CListCtrl.
	
	     void CMyView::OnInitialUpdate()
	     {
	        CFormView::OnInitialUpdate();
	
	        m_listCtrl.InsertColumn(0, "Western States", LVCFMT_LEFT, 150);
	
	        LV_ITEM lvItem;
	        ZeroMemory(&lvItem, sizeof(lvItem));
	        lvItem.mask = LVIF_TEXT | LVIF_STATE;
	
	        lvItem.iItem = 0;
	        lvItem.state = LVIS_CUT | LVIS_SELECTED;
	        lvItem.pszText = "Washington";
	        m_listCtrl.InsertItem(&lvItem); // initially selected
	
	        lvItem.iItem = 1;
	        lvItem.state = LVIS_CUT | LVIS_SELECTED;
	        lvItem.pszText = "Arizona";
	        m_listCtrl.InsertItem(&lvItem); // initially selected
	
	        lvItem.iItem = 2;
	        lvItem.state = LVIS_CUT;
	        lvItem.pszText = "Alaska";
	        m_listCtrl.InsertItem(&lvItem);
	
	        lvItem.iItem = 3;
	        lvItem.state = LVIS_CUT;
	        lvItem.pszText = "California";
	        m_listCtrl.InsertItem(&lvItem);
	
	        lvItem.iItem = 4;
	        lvItem.state = LVIS_CUT;
	        lvItem.pszText = "Nevada";
	        m_listCtrl.InsertItem(&lvItem);
	
	        UINT nState;
	        CString strText;
	        int iItem = -1;
	
	        // as long as GetNextItem found an item...
	        while ((iItem = m_listCtrl.GetNextItem(iItem, LVNI_ALL)) > -1 )
	        {
	           // get item string
	           strText = m_listCtrl.GetItemText(iItem, 0);
	
	           // show initial state of flags
	           nState = m_listCtrl.GetItemState(iItem, LVIS_SELECTED | LVIS_CUT);
	           TRACE("%s state flag is %0x\n", strText, nState);
	
	           // Get only LVIS_SELECTED flag
	           // note that LVIS_CUT is not returned in nState
	           nState = m_listCtrl.GetItemState(iItem, LVIS_SELECTED);
	
	           // select states beginning with 'A'
	           if (strText[0] == 'A' && !nState) {
	              TRACE("%s needed to be selected\n", strText);
	              m_listCtrl.SetItemState(iItem,
	                 LVIS_SELECTED,  // nState
	                 LVIS_SELECTED); // nMask
	
	           // deselect states that don't begin with 'A'
	           } else if (strText[0] != 'A' && nState) {
	              TRACE("%s needed to be deselected\n", strText);
	              m_listCtrl.SetItemState(iItem,
	                 0,              // nState
	                 LVIS_SELECTED); // nMask
	           }
	
	           // show new flags if modified, note that LVIS_CUT wasn't affected
	           nState = m_listCtrl.GetItemState(iItem, LVIS_SELECTED | LVIS_CUT);
	           TRACE("%s state flag is now %0x\n", strText, nState);
	        }
	     }
	
	MORE INFORMATION
	================
	
	The CListCtrl class supports the GetItemState, SetItemState and GetNextItem
	functions. If you use GetNextItem with the appropriate mask, you should be able
	to locate the desired list item by its order or its state. To change the state
	you would call GetItemState on the item you have located to obtain the current
	desired state flag(s), make modifications to the flag(s) and call SetItemState.
	
	GetNextItem
	-----------
	
	The GetNextItem function takes two parameters. The first indicates which item (0
	based) in the list after which you should begin your search. The current item is
	excluded from the search. To search the entire list, supply a -1 for this
	parameter.
	
	The second parameter indicates the state that identifies the item for which you
	are searching. For the CListCtrl, the flags all begin with LVNI_. (see the
	documentation on CListCtrl::GetNextItem for a complete list).
	
	GetItemState, SetItemState
	--------------------------
	
	The GetItemState function will returns a UINT indicating current state flag(s) of
	the indicated list item. SetItemState accepts a UINT to set the state flag(s) of
	the indicated list item. Both of these functions take a UINT mask that indicates
	which of the state flags should be affected.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbCtrl kbListBox kbVC kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:4.2,5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
