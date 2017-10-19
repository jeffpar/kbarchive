---
layout: page
title: "Q176042: FIX: Altering a Button's Tab Order Causes Illegal Operation"
permalink: /kb/176/Q176042/
---

## Q176042: FIX: Altering a Button's Tab Order Causes Illegal Operation

	Article: Q176042
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a
	Operating System(s): 
	Keyword(s): kbvfp kbvfp600fix
	Last Modified: 24-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you edit a property in the Properties window, after changing a button's Tab
	Order in a toolbar class, a General Protection Fault (GP fault) error occurs.
	
	RESOLUTION
	==========
	
	On the Main menu, click Tools and Options to open the Options dialog box. Click
	the Forms tab, and then change the Tab Order to By List instead of Interactive.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This has been corrected in Visual FoxPro 6.0.
	
	MORE INFORMATION
	================
	
	This error also occurs when you edit a property in the Properties window of Form
	Designer after you make changes to the Tab Order of a subclassed toolbar.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. In the Command window, type the following command to create a toolbar class:
	
	        CREATE CLASS myclass OF tool AS Toolbar
	
	2. Add two command buttons to the toolbar.
	
	3. On the View menu, choose Tab Order.
	
	4. Click the first command button, and then click the second command button to
	  change the tab order.
	
	5. Click any of the properties in the Properties window and the following error
	  occurs:
	
	  "This program performed an illegal operation and will be shut down."
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp kbvfp600fix 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP500a
	Version           : WINDOWS:5.0,5.0a
	Issue type        : kbbug kbprb
	Solution Type     : kbfix
	
	=============================================================================
	
