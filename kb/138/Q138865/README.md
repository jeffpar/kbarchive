---
layout: page
title: "Q138865: PRB: Resource Editor Shows Top-Level Menu Items as PopUp Menus"
permalink: /kb/138/Q138865/
---

## Q138865: PRB: Resource Editor Shows Top-Level Menu Items as PopUp Menus

	Article: Q138865
	Product(s): Microsoft C Compiler
	Version(s): 4.0 4.1 5.0 6.0
	Operating System(s): 
	Keyword(s): kbui _IK920 kbVC kbVC400 kbVC410 kbVC500 kbVC600 kbGrpDSTools
	Last Modified: 03-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Resource Editor, included with:
	   - Microsoft Visual C++, 32-bit Editions, versions 4.0, 4.1 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Menu Editor to add top-level menu items without adding any
	drop-down items, and you save or close the resource, upon opening the Menu
	Resource again, the Resource Editor displays the top-level menu items as pop-up
	menus.
	
	RESOLUTION
	==========
	
	Right-click and clear the View As Popup check box. This will display the
	top-level menus horizontally.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new Menu Resource by clicking Resource on the Insert menu.
	
	2. Add top-level menu items without entering any drop-down items.
	
	3. Save or close the Resource file.
	
	4. Open the Resource file, and view your Menu resource.
	
	5. The Menu appears stacked (popup style) instead of horizontal style.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbui _IK920 kbVC kbVC400 kbVC410 kbVC500 kbVC600 kbGrpDSTools 
	Technology        : kbVCsearch kbAudDeveloper kbVC32bitSearch kbResourceEd
	Version           : 4.0 4.1 5.0 6.0
	Issue type        : kbprb
	
	=============================================================================
	
