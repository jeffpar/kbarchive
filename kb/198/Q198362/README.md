---
layout: page
title: "Q198362: WD97: New Menu on Custom Toolbar Fails If Copied to Template"
permalink: /kb/198/Q198362/
---

## Q198362: WD97: New Menu on Custom Toolbar Fails If Copied to Template

	Article: Q198362
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you add the New Menu command to a custom toolbar and then copy the toolbar
	to another template, the New Menu command is visible but fails to function
	properly. Other command buttons added to the custom toolbar continue to function
	as expected, as do built-in menus added to the custom toolbar.
	
	WORKAROUND
	==========
	
	To work around this problem, do one of the following:
	
	Method 1: Re-create the Toolbar in the Destination Template
	-----------------------------------------------------------
	
	If you have copied the toolbar to the destination template, delete the copied
	toolbar and re-create it in the destination template.
	
	To delete the toolbar, follow these steps:
	
	1. On the View menu, point to Toolbars, and click Customize.
	
	2. Click the Toolbars tab.
	
	3. Select the copied toolbar in the list of Toolbars.
	
	4. Click Delete.
	
	Method 2: Make the Template Available Globally
	----------------------------------------------
	
	Globally load the template in which the custom toolbars were created. To make a
	template a global add-in, follow these steps:
	
	1. On the Tools menu, click Templates And Add-ins.
	
	2. Click Add.
	
	3. Find and select the template containing the toolbars.
	
	4. Click OK to return to the Templates And Add-Ins dialog box.
	
	5. Click OK.
	
	This makes available any toolbars, AutoText entries, or macros stored in that
	template.
	
	MORE INFORMATION
	================
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q163547 WD97: How to Create Custom Toolbars and Toolbar Buttons
	
	Additional query words: menu toolbar custom organizer copy
	
	======================================================================
	Keywords          : word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	
	=============================================================================
	
