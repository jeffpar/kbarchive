---
layout: page
title: "Q131992: HOWTO: How to Create a Property Sheet That Has Scrolling Tabs in"
permalink: kb/131/Q131992/
---

## Q131992: HOWTO: How to Create a Property Sheet That Has Scrolling Tabs in

	Article: Q131992
	Product(s): Microsoft C Compiler
	Version(s): winnt:2.0,2.1,4.0
	Operating System(s): 
	Keyword(s): kbcode kbMFC kbPropSheet KbUIDesign kbVC152 kbVC200 kbVC210 kbVC400 kbGrpDSMFCATL
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++ for Windows, 16-bit edition, version 1.52 
	   - Microsoft Visual C++, 32-bit Editions, versions 2.0, 2.1, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article explains how to create a property sheet (tabbed dialog box) that
	uses a scrolling-tabs style instead of the default stacked-tabs style.
	
	MORE INFORMATION
	================
	
	A property sheet is created using the CPropertySheet class. This class uses an
	internal class (CTabControl) to manage the actual tabs appearing along the top
	of the property sheet. When there are more tabs than will fit across a single
	row, the default behavior is to display the tabs stacked in multiple rows.
	
	In an application where this will cause layout problems or where screen space is
	at a premium, a scrolling-tab style may be preferred. The CTabControl can show
	its tabs in a single row with small scroll arrows on the ends. When a user
	clicks the arrows, the tabs which were not visible are scrolled into view. The
	CPropertySheet class uses its m_bStacked member variable to determine which
	style to use when creating the CTabControl. If it is set to TRUE (the default),
	the tabs are created stacked; when FALSE, the scrolling tab style is used. You
	can use the inline member function EnableStackedTabs() to set the value of
	m_bStacked.
	
	The simplest approach is to call EnableStackedTabs(FALSE) on the property sheet
	variable just before calling DoModal or Create on it. This requires that you
	call the EnableStackedTabs function whenever you create a modal or a modeless
	property sheet. To incorporate this style in a CPropertySheet derived class, you
	need to write a message handler for WM_CREATE. In the overridden version of
	OnCreate(), call EnableStackedTabs(FALSE) before calling the base class
	implementation:
	
	  int CMyPropertySheet::OnCreate(LPCREATESTRUCT lpCreateStruct)
	  {
	        // Set for Scrolling Tabs style
	        EnableStackedTabs(FALSE);
	
	        // Call the base class
	        if (CPropertySheet::OnCreate(lpCreateStruct) == -1)
	              return -1;
	
	        // TODO: Add your specialized creation code here
	
	        return 0;
	  }
	
	Be aware that CPropertySheet::EnableStackedTabs() is declared in the
	"Implementation" portion of the CPropertySheet class declaration (for Visual C++
	version 4.0, see AFXDLGS.H). It is entirely likely that this function will
	change with the next release of MFC. If at all possible, do not design your MFC
	application to depend upon any object's methods or data that are declared with
	an Implementation section.
	
	REFERENCES
	==========
	
	For more information, refer to the "MFC: Using the MFC Source Files" topic of
	"Programming with MFC:Encyclopedia" in Visual C++ 4.2 Books Online.
	
	Additional query words: 1.52 2.00 2.10 4.00
	
	======================================================================
	Keywords          : kbcode kbMFC kbPropSheet KbUIDesign kbVC152 kbVC200 kbVC210 kbVC400 kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:2.0,2.1,4.0
	Issue type        : kbhowto
	
	=============================================================================
	
