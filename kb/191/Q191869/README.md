---
layout: page
title: "Q191869: BUG: RELEASE MENUS _MSYSMENU Releases System Menu"
permalink: /kb/191/Q191869/
---

## Q191869: BUG: RELEASE MENUS _MSYSMENU Releases System Menu

	Article: Q191869
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Issuing a RELEASE MENUS _MSYSMENU command with only the Visual FoxPro system
	menu active causes the Sysmenu menu to disappear.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this bug and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	The Help file indicates that the RELEASE MENUS should release user defined menus
	and not the System menu.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. In the Command window, issue the following command:
	
	        RELEASE MENUS _MSYSMENU
	
	2. After pressing the ENTER key, notice that the System menu disappears. In
	  Visual FoxPro 5.x and 6.0, a small rectangular box appears in the upper
	  left-hand corner of the Visual FoxPro desktop. If you invoke the Task Bar by
	  pressing the ALT+TAB keys, you see that two Visual FoxPro icons appear.
	  Clicking the bottom of the box produces a "Menu manager internal consistency
	  error" dialog box. After clicking OK, Visual FoxPro causes an access
	  violation error.
	
	  In Visual FoxPro 3.x, the system menu disappears without any small box and any
	  errors.
	
	3. Quit Visual FoxPro and restart to restore the System menu.
	
	Additional query words: kbVFp600bug kbXBase kbVFp500abug kbVFp300bbug
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
