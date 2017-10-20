---
layout: page
title: "Q165746: DOC: Incomplete Documentation on CListCtrl::SetColumnWidth"
permalink: /kb/165/Q165746/
---

## Q165746: DOC: Incomplete Documentation on CListCtrl::SetColumnWidth

{% raw %}

	Article: Q165746
	Product(s): Microsoft C Compiler
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): kbui kbdocfix kbdocerr kbListView kbMFC KbUIDesign kbVC500bug kbVC600fix kbGrpDSMFCATL
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The online documentation for CListCtrl::SetColumnWidth is incomplete. The
	current documentation says:
	
	CListCtrl::SetColumnWidth
	-------------------------
	
	  BOOL SetColumnWidth( int nCol, int cx );
	
	   Return Value
	      Nonzero if successful; otherwise zero.
	
	Parameters
	  nCol   Index of the column whose width is to be set. In list view,
	         this parameter must be [ASCII 150]1.
	
	  cx   The new width of the column.
	
	Remarks
	  Changes the width of a column in report view or list view.
	
	The documentation of the parameter cx is incomplete and should be the
	following:
	
	 cx   New width of the column, in list view coordinates, or one of the
	      following values:
	
	 Value                      Meaning
	 -----                      -------
	 LVSCW_AUTOSIZE             Automatically sizes the column.
	 LVSCW_AUTOSIZE_USEHEADER   Automatically sizes the column to fit the
	                            header text.
	
	This documentation was corrected in Visual C++ version 6.0 for Windows.
	
	Additional query words: MFC listview
	
	======================================================================
	Keywords          : kbui kbdocfix kbdocerr kbListView kbMFC KbUIDesign kbVC500bug kbVC600fix kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:5.0
	
	=============================================================================
	

{% endraw %}
