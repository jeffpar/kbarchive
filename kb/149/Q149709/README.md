---
layout: page
title: "Q149709: PRB: Incorrect CListCtrl Painting During Label Editing"
permalink: /kb/149/Q149709/
---

## Q149709: PRB: Incorrect CListCtrl Painting During Label Editing

	Article: Q149709
	Product(s): Microsoft C Compiler
	Version(s): winnt:2.1,2.2,4.0,4.1
	Operating System(s): 
	Keyword(s): kbnokeyword kbListView kbMFC KbUIDesign kbVC210 kbVC220 kbVC400 kbVC410 kbGrpDSMFCATL
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Editions, versions 2.1, 2.2, 4.0, 4.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A label-editing enabled List View control with callback items (the application
	stores the text), may show selected items incorrectly highlighted when labels
	are edited in place. When label editing changes the length of the text, clearing
	the item selection and re-selecting it may cause the highlighted bar to span the
	length of the original text.
	
	CAUSE
	=====
	
	The functionality to show the highlighted bar resides in the List View control.
	In this case, the control does not calculate the new size of the highlighted bar
	for the edited label.
	
	RESOLUTION
	==========
	
	At the end of label editing, call the CListCtrl::SetItem function to make the
	control calculate the size of the just edited item. This function sets some or
	all of a list view item's attributes.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	This problem can be seen in the MSDN sample, MFCLIST. The sample demonstrates a
	simple list view control implemented with MFC. Editing any of the "Address"
	column labels and changing the text length demonstrates the problem.
	
	Sample Code
	-----------
	
	The following code demonstrates how to correct the behavior:
	
	  void CMyDialog::OnEndLabelEdit (NMHDR* pNMHDR, LRESULT* pResult)
	  {
	      LV_DISPINFO* pLvdi = (LV_DISPINFO*)pNMHDR;
	
	  // The text is maintained by the application, so first update it
	
	  // Set up the item, to reset its text
	      LV_ITEM lvi;
	      lvi.mask = LVIF_TEXT;
	      lvi.iItem=pLvdi->item.iItem;
	      lvi.iSubItem = 0;
	      lvi.pszText = LPSTR_TEXTCALLBACK;
	
	  // Call CListCtrl::SetItem, to force recalculation of the text length
	      m_ListCtl.SetItem ( &lvi );
	
	      *pResult = 0;
	  }
	
	Additional query words: 2.10 2.20 3.10 3.20 4.00 4.10 LPSTR_TEXTCALLBACK edit highlight MFCList
	
	======================================================================
	Keywords          : kbnokeyword kbListView kbMFC KbUIDesign kbVC210 kbVC220 kbVC400 kbVC410 kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:2.1,2.2,4.0,4.1
	Issue type        : kbprb
	
	=============================================================================
	
