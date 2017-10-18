---
layout: page
title: "Q129428: INFO: CListBox::SelItemRange Selects Only Two or More Items"
permalink: kb/129/Q129428/
---

## Q129428: INFO: CListBox::SelItemRange Selects Only Two or More Items

	Article: Q129428
	Product(s): Microsoft C Compiler
	Version(s): winnt:
	Operating System(s): 
	Keyword(s): kbcode kbdocfix kbListBox kbMFC KbUIDesign kbVC200bug kbVC210bug kbVC400fix kbGrpDSMFCA
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++ 32-bit Edition, versions 2.0, 2.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The documentation for CListBox::SelItemRange says that it can be used to select
	one or more items in a CListBox. This is not correct. SelItemRange can only be
	used to select two or more items. This is because CListBox::SelItemRange uses
	the windows message LB_SELITEMRANGEEX which deselects the item if the first and
	last index of the range are equal.
	
	MORE INFORMATION
	================
	
	Here are two possible ways to enable the ability to select one or more items:
	
	- Test for the condition when the first and last items are equal, and in that
	  case, use CListBox::SetSel.
	
	-or-
	
	- Use the windows message LB_SELITEMRANGE. The following code fragment
	  demonstrates how to use this message. The code works when CMyListBox is
	  derived from CListBox.
	
	Sample Code
	-----------
	
	  int CMyListBox::MySelItemRange (BOOL bSelect,
	                                  int nFirstItem,
	                                  int nLastItem)
	  {
	     ASSERT_VALID(this);
	     return (int)SendMessage(LB_SELITEMRANGE,
	                                bSelect,
	                                MAKELPARAM(nFirstItem,nLastItem));
	  }
	
	NOTE: This problem was fixed in Microsoft Visual C++, 32-bit Edition, version
	4.0. The following is from the Visual C++ 4.0 Books On-Line entry for
	CListBox::SelItemRange:
	
	  Selects multiple consecutive items in a multiple-selection list box.
	
	  Use this member function only with multiple-selection list boxes. If you need
	  to select only one item in a multiple-selection list box that is, if
	  nFirstIem is equal to nLastItem call the SetSel member function instead.
	
	Additional query words: 2.00 2.10 3.00 3.10 4.00 noupdate
	
	======================================================================
	Keywords          : kbcode kbdocfix kbListBox kbMFC KbUIDesign kbVC200bug kbVC210bug kbVC400fix kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:
	
	=============================================================================
	
