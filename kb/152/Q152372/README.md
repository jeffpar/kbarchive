---
layout: page
title: "Q152372: BUG: No Help with Class Info Dialog from ? Menu Pad"
permalink: /kb/152/Q152372/
---

## Q152372: BUG: No Help with Class Info Dialog from ? Menu Pad

	Article: Q152372
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:3.0b
	Operating System(s): 
	Keyword(s): kbenvkbbuglist
	Last Modified: 15-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the Class Info dialog is displayed, choosing Microsoft Visual FoxPro
	Help... from the ? (Help) menu pad does not bring up Visual FoxPro Help.
	However, the shortcut key combination for this menu command (CMD+?) does bring
	up Help.
	
	Also, the About Microsoft Visual FoxPro... command on the Apple menu does not
	bring up the About Microsoft Visual FoxPro dialog, nor does the Technical
	Support command on the ? menu pad function.
	
	CAUSE
	=====
	
	These menu items should appear disabled (grayed out) but do not.
	
	RESOLUTION
	==========
	
	To bring up Visual FoxPro Help when the Class Info dialog is displayed, choose
	the Help button on that dialog or use the CMD+? key combination.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Enter the following command in the Command window:
	
	     CREATE CLASS x OF Test AS COMMANDBUTTON
	
	2. From the Class menu, choose the Class Info command. The Class Info dialog
	  should now be displayed. It is a modal dialog. The FoxPro menus pull down but
	  all the commands on them are disabled (grayed out), the tool buttons don't
	  function, and the Class Designer cannot be activated.
	
	  The ? and Apple menus do not show disabled commands, however. In fact, the
	  commands on these two menu pads function properly (with three exceptions).
	  This is because the commands are Macintosh System commands, not FoxPro
	  commands.
	
	3. From the ? menu, choose the Microsoft Visual FoxPro Help command. From the ?
	  menu, choose the Technical Support command. From the Apple menu, choose the
	  About Microsoft Visual FoxPro command. Nothing should happen when these are
	  chosen.
	
	Additional query words: VFoxMac
	
	======================================================================
	Keywords          : kbenv kbbuglist
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbVFP300bMac
	Version           : MACINTOSH:3.0b
	
	=============================================================================
	
