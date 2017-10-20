---
layout: page
title: "Q190486: DOC: Missing Styles for CToolbar::SetButtonStyles"
permalink: /kb/190/Q190486/
---

## Q190486: DOC: Missing Styles for CToolbar::SetButtonStyles

{% raw %}

	Article: Q190486
	Product(s): Microsoft C Compiler
	Version(s): WINNT:6.0
	Operating System(s): 
	Keyword(s): kbdocerr kbref kbVC600
	Last Modified: 17-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), included with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The documentation for CToolBar::SetButtonStyle includes the following styles:
	TBBS_BUTTON, TBBS_SEPARATOR, TBBS_CHECKBOX, TBBS_GROUP, and, TBBS_CHECKGROUP.
	
	The following styles are missing: TBBS_DROPDOWN, TBBS_AUTOSIZE, TBBS_NOPREFIX.
	
	MORE INFORMATION
	================
	
	Following is the information for the missing styles:
	
	TBBS_DROPDOWN
	-------------
	
	Creates a drop-down list button.
	
	TBBS_AUTOSIZE
	-------------
	
	The button's width is calculated based on the text of the button, not on the size
	of the image.
	
	TBBS_NOPREFIX
	-------------
	
	The button text does not have an accelerator prefix associated with it.
	
	NOTE: CToolBar uses the underlying CToolBarCtrl common control. These styles have
	the same effect for CToolBar as the TBSTYLE flags have for the toolbar common
	control. More information about these styles can be found in the toolbar common
	control documentation.
	
	(c) Microsoft Corporation 1998, All Rights Reserved. Contributions by Yeong- Kah
	Tam, Microsoft Corporation.
	
	
	Additional query words: kbdocerr kbvc600
	
	======================================================================
	Keywords          : kbdocerr kbref kbVC600 
	Technology        : kbAudDeveloper kbMFC
	Version           : WINNT:6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
