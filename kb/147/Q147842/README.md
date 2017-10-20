---
layout: page
title: "Q147842: HOWTO: Detect a Mouse Click on Any Column of List View Control"
permalink: /kb/147/Q147842/
---

## Q147842: HOWTO: Detect a Mouse Click on Any Column of List View Control

{% raw %}

	Article: Q147842
	Product(s): Microsoft C Compiler
	Version(s): 4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbcode kbProgramming kbListView kbMFC KbUIDesign kbVC400 kbVC500 kbVC600 kbDSupport kbG
	Last Modified: 26-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), included with:
	   - Microsoft Visual C++, 32-bit Editions, version 4.0 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	   - Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	NOTE: Microsoft Visual C++ .NET (2002) supports both the managed code model that
	is provided by the Microsoft .NET Framework and the unmanaged native Microsoft
	Windows code model. The information in this article applies to unmanaged Visual
	C++ code only.
	
	By design, a left-mouse click on a column other than the first column of a List
	View control when the control is in report view will not select the first column
	of that row. This article presents a way to detect the mouse click, and
	highlight the first column of the row where the mouse was clicked.
	
	MORE INFORMATION
	================
	
	Step-by-Step Procedure
	----------------------
	
	The List View control will send a NM_CLICK notification code to its parent window
	whenever the user has clicked the left mouse button within its client area.
	Below are the necessary steps to intercept this notification code in the control
	itself (instead of the parent window) and to highlight the first column of the
	row that is being clicked:
	
	1. Open Solution Explorer. On the Project menu, click Add Class.
	
	2. In the Add Class dialog box, double-click the MFC Class in the Templates
	  pane.
	
	3. In the MFC Class Wizard, type a class name of CMyListCtrl and a base class of
	  CListCtrl, and then click Finish to add the new class to your project.
	
	4. Add a message event handler for the NM_CLICK message to the CMyListCtrl
	  class:
	
	  a. In the Class View window, click to select CMyListCtrl, open the Properties
	     window, and then click Messages.
	
	  b. In the Properties window, click to select the =NM_CLICK entry.
	
	  c. Click to select the drop-down list that results, and then add the
	     OnNMClick handler to your class. The following code is generated in the
	     CMyListCtrl class:
	
	     // In the .h file of CMyListCtrl:
	     class CMyListCtrl : public CListCtrl
	     {
	         ...
	         protected:
	         DECLARE_MESSAGE_MAP()
	         public:
	         afx_msg void OnClick(NMHDR* pNMHDR, LRESULT* pResult);
	
	     };
	
	     // In the .cpp file of CMyListCtrl:
	
	     BEGIN_MESSAGE_MAP(CMyListCtrl, CListCtrl)
	         ...
	         ON_NOTIFY_REFLECT(NM_CLICK, OnClick)
	     END_MESSAGE_MAP()
	
	     void CMyListCtrl::OnClick(NMHDR* pNMHDR, LRESULT* pResult)
	     {
	         // TODO: Add your control notification handler code here
	
	         *pResult = 0;
	     }
	
	5. Modify the CMyListCtrl::OnClick() function to perform the tasks in the sample
	  code below.
	
	Sample Code
	-----------
	
	     void CMyListCtrl::OnClick(NMHDR* pNMHDR, LRESULT* pResult)
	     {
	        // Get the current mouse location and convert it to client
	        // coordinates.
	        DWORD pos = GetMessagePos();
	        CPoint pt(LOWORD(pos), HIWORD(pos));
	        ScreenToClient(&pt);
	
	        // Get indexes of the first and last visible items in listview
	        // control.
	        int index = GetTopIndex();
	        int last_visible_index = index + GetCountPerPage();
	        if (last_visible_index > GetItemCount())
	            last_visible_index = GetItemCount();
	
	        // Loop until number visible items has been reached.
	        while (index <= last_visible_index)
	        {
	           // Get the bounding rectangle of an item. If the mouse
	            // location is within the bounding rectangle of the item,
	            // you know you have found the item that was being clicked.
	            CRect r;
	            GetItemRect(index, &r, LVIR_BOUNDS);
	            if (r.PtInRect(pt))
	            {
	                UINT flag = LVIS_SELECTED | LVIS_FOCUSED;
	                SetItemState(index, flag, flag);
	                break;
	            }
	
	            // Get the next item in listview control.
	            index++;
	        }
	
	        *pResult = 0;
	     }
	
	REFERENCES
	==========
	
	By design, a List View control in a report view will only highlight the first
	column of a row. To select an entire row, please see the following article in
	the Microsoft Knowledge Base:
	
	  Q131788 SAMPLE: Highlighting an Entire Row in a ListView Control
	
	Additional query words: CListView
	
	======================================================================
	Keywords          : kbcode kbProgramming kbListView kbMFC KbUIDesign kbVC400 kbVC500 kbVC600 kbDSupport kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : :4.0,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
