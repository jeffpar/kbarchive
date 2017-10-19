---
layout: page
title: "Q152363: BUG: Project Manager Context Menu Visible After Program Switch"
permalink: /kb/152/Q152363/
---

## Q152363: BUG: Project Manager Context Menu Visible After Program Switch

	Article: Q152363
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
	
	If a Context menu has been activated from a Project Manager tab, the menu may
	remain visible after switching to another application. Returning to Visual
	FoxPro may require an additional click in the title bar to activate the
	application.
	
	WORKAROUND
	==========
	
	Before switching to another application, close the Context menu by pressing the
	ESC key, or clicking on another Visual FoxPro element.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	MORE INFORMATION
	================
	
	The torn-off Project Manager Tab, similar to a Toolbar, does not have the
	capability of appearing inactive or dim, nor will it be hidden after a program
	switch.
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Close the Visual FoxPro Screen.
	
	2. Create a new project.
	
	3. Dock the Project Manager.
	
	4. Tear a tab off the Project Manager.
	
	5. Press COMMAND+OPTION+CLICK or CONTROL+CLICK on the torn-off menu to bring up
	  a Context menu.
	
	6. Click on a Finder window.
	
	Additional query words: VFoxMac
	
	======================================================================
	Keywords          : kbenv kbbuglist
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbVFP300bMac
	Version           : MACINTOSH:3.0b
	
	=============================================================================
	
