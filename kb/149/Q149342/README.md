---
layout: page
title: "Q149342: PRB: CListCtrl Inserting Items Slow If in Icon Modes"
permalink: /kb/149/Q149342/
---

## Q149342: PRB: CListCtrl Inserting Items Slow If in Icon Modes

	Article: Q149342
	Product(s): Microsoft C Compiler
	Version(s): winnt:2.1,2.2,4.0,4.1
	Operating System(s): 
	Keyword(s): kbcode kbIcon kbListView kbMFC KbUIDesign kbVC210 kbVC220 kbVC400 kbVC410 kbGrpDSMFCATL
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), included with:
	   - Microsoft Visual C++, 32-bit Editions, versions 2.1, 2.2, 4.0, 4.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Inserting a large number of items into a CListCtrl simultaneously may take a
	long time if the control is in the LVS_ICON or LVS_SMALLICON modes.
	
	RESOLUTION
	==========
	
	Before starting to insert the items, disable painting of the control and
	re-enable the painting when the insertions are done. For more information see
	the "Sample Code" section of this article.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	A CListCtrl can display its contents in one of four styles: LVS_ICON,
	LVS_SMALLICON, LVS_LIST, or LVS_REPORT. The problem does not show up if the
	control is in the LVS_LIST or the LVS_REPORT modes.
	
	Sample Code
	-----------
	
	  //.....
	
	      m_List.SetRedraw(FALSE); // turn drawing off regardless of list mode
	
	  //....
	  //Insert the items
	  //....
	
	      m_List.SetRedraw(TRUE); // turn drawing back on and update the window
	      m_List.Invalidate();
	      m_List.UpdateWindow();
	
	Additional query words: 2.10 2.20 3.10 3.20 4.00 4.10 CListCtrl adding inserting
	
	======================================================================
	Keywords          : kbcode kbIcon kbListView kbMFC KbUIDesign kbVC210 kbVC220 kbVC400 kbVC410 kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:2.1,2.2,4.0,4.1
	Issue type        : kbprb
	
	=============================================================================
	
