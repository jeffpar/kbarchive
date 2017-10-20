---
layout: page
title: "Q142446: PRB: Stacked Tabs Aren't Displayed Correctly After AddPage()"
permalink: /kb/142/Q142446/
---

## Q142446: PRB: Stacked Tabs Aren't Displayed Correctly After AddPage()

{% raw %}

	Article: Q142446
	Product(s): Microsoft C Compiler
	Version(s): winnt:
	Operating System(s): 
	Keyword(s): kbMFC kbPropSheet kbTabCtrl KbUIDesign kbVC400 kbGrpDSMFCATL
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++ 32-bit Edition, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When CPropertySheet::AddPage() is called and a tab is too wide to fit in the
	existing row of tabs, the CPropertySheet will create a new row with the new tab.
	This can cause the bottom row of tabs to disappear.
	
	NOTE: This will only occur when calling CPropertySheet::AddPage() after calling
	CPropertySheet::Create or CPropertySheet::DoModal().
	
	CAUSE
	=====
	
	The CPropertyPage and CPropertySheet are not resized when AddPage() is called.
	As a result, the active CPropertyPage could cover a row of tabs and obscure it
	from view.
	
	RESOLUTION
	==========
	
	You can do either of the following:
	
	- Call CPropertySheet::EnableStackedTabs(FALSE) before the call to DoModal() or
	  Create(). This will disable stacked tabs. When there isn't enough space to
	  add a tab and AddPage() is called, a scrollbar will appear which allows you
	  to scroll to the desired tab.
	
	-or-
	
	- Call AddPage() for all possible pages. This will create a CPropertySheet with
	  CProppertyPage items whose size will allow for the additional rows of tabs.
	  If you don't want to display all of the pages initially, derive a class from
	  CPropertySheet, override CPropertySheet::OnInitDialog(), and remove unwanted
	  tabs by calling RemovePage().
	
	Additional query words: 4.00
	
	======================================================================
	Keywords          : kbMFC kbPropSheet kbTabCtrl KbUIDesign kbVC400 kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
