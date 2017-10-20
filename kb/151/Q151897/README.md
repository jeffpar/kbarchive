---
layout: page
title: "Q151897: FIX: CListCtrl::InsertColumn() Causes Column Data to Shift"
permalink: /kb/151/Q151897/
---

## Q151897: FIX: CListCtrl::InsertColumn() Causes Column Data to Shift

{% raw %}

	Article: Q151897
	Product(s): Microsoft C Compiler
	Version(s): winnt:4.0,4.1,4.2
	Operating System(s): 
	Keyword(s): kbListView kbMFC KbUIDesign kbVC kbVC420 kbVC500fix kbGrpDSMFCATL
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Editions, versions 4.0, 4.1 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After adding items to a CListCtrl, if you call InsertColumn() to add additional
	columns, column data starting from the second column will be shifted right. For
	example, if you initially create two columns and add your items, adding a third
	column will cause the data from the second column to disappear and reappear in
	the third column. You may need to force a repaint (minimize the window and
	restore it) to see the changes.
	
	CAUSE
	=====
	
	This is a bug in the Listview control. Sending an LVM_INSERTCOLUMN after data
	has already been inserted, causes this problem.
	
	RESOLUTION
	==========
	
	There are several ways to work around this problem:
	
	Method #1
	---------
	
	Use LPSTR_TEXTCALLBACK in the call to InsertItem(). This will cause a
	notification LVN_GETDISPINFO to be sent to the parent of the CListCtrl each time
	the text for each item is needed. The handler for this notification will then
	fill in the appropriate text for each item.
	
	Method #2
	---------
	
	Create all the columns up front before adding any items. You can hide columns by
	setting their initial width to zero in the call to InsertColumn(). To show
	columns, you can call SetColumnWidth() or SetColumn(). The only drawback to this
	method is that the user can still resize the column by dragging in the header
	control.
	
	Method #3
	---------
	
	Reset the contents of the CListCtrl via DeleteAllItems() and add all column data
	again after calling InsertColumn().
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This bug has been fixed in COMCTL32.DLL which as
	been released with Microsoft Windows NT 4.0 and Microsoft Internet Explorer
	3.01.
	
	MORE INFORMATION
	================
	
	Sample Code
	-----------
	
	Method #1
	---------
	
	     // m_pList is of type CListCtrl*
	     BEGIN_MESSAGE_MAP(CTestView, CView)
	          ON_NOTIFY (LVN_GETDISPINFO, IDC_LIST, OnGetDispInfo)
	     END_MESSAGE_MAP()
	
	        int CTestView::OnCreate(LPCREATESTRUCT lpCreateStruct)
	        {
	            // create CListCtrl and columns
	        ...
	            // insert item; text will be set in LVN_GETDISPINFO
	            m_pList->InsertItem (iIndex, LPSTR_TEXTCALLBACK);
	        ...
	        }
	
	        void CTestView::OnGetDispInfo (NMHDR* pnmhdr, LRESULT* pResult)
	        {
	            LV_DISPINFO* pdi = (LV_DISPINFO *) pnmhdr;
	
	            // set text for column #1
	            if (0 == pdi->item.iSubItem)
	                pdi->item.pszText = "1st Column Data";
	            // set text for column #2
	            else if (1 == pdi->item.iSubItem)
	                pdi->item.pszText = "2nd Column Data";
	            // set text for column #3
	            else if (2 == pdi->item.iSubItem)
	                pdi->item.pszText = "3rd Column Data";
	        }
	
	Method #2
	---------
	
	     int CTestView::OnCreate(LPCREATESTRUCT lpCreateStruct)
	     {
	         // create CListCtrl and columns
	         ...
	         // create 3rd column with zero width so it is not visible
	         m_pList->InsertColumn (2, "", LVCFMT_LEFT, 0);
	         // add items
	         ...
	         return 0;
	     }
	
	     // this function makes the 3rd column appear
	     void CTestView::AddColumn()
	     {
	         LV_COLUMN lvc;
	
	         lvc.mask = LVCF_TEXT | LVCF_WIDTH;
	         lvc.cx = 100;
	         lvc.pszText = "Column #3";
	         // set the text and width of column #3
	         m_pList->SetColumn (2, &lvc);
	     }
	
	     /* Compile options needed: default
	     */ 
	
	Additional query words: kbVC400bug
	
	======================================================================
	Keywords          : kbListView kbMFC KbUIDesign kbVC kbVC420 kbVC500fix kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:4.0,4.1,4.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
