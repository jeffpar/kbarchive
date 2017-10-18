---
layout: page
title: "Q196089: PRB: ALT Key Activates a Menu Defined Programmatically"
permalink: kb/196/Q196089/
---

## Q196089: PRB: ALT Key Activates a Menu Defined Programmatically

	Article: Q196089
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbvfp500 kbvfp500a kbvfp600 kbXBase
	Last Modified: 11-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Pressing the ALT key after defining a menu programmatically activates the menu.
	
	RESOLUTION
	==========
	
	To workaround this problem issue the SET SYSMENU SAVE command before the code
	and SET SYSMENU TO DEFAULT after the code as follows:
	
	     SET SYSMENU SAVE
	
	     DEFINE MENU HotKeys BAR AT LINE 3
	     DEFINE PAD HotKeys OF HotKeys PROMPT "Hot Keys" COLOR SCHEME 3
	
	     SET SYSMENU TO DEFAULT
	
	STATUS
	======
	
	Microsoft is researching this behavior and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Run the following set of commands:
	
	        DEFINE MENU HotKeys BAR AT LINE 3
	        DEFINE PAD HotKeys OF HotKeys PROMPT "Hot Keys" COLOR SCHEME 3
	
	2. Press the ALT key.
	
	Notice that the "Hot Keys" menu activates. However, ALT key should not active the
	menu.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp500 kbvfp500a kbvfp600 kbXBase 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:5.0,5.0a,6.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
