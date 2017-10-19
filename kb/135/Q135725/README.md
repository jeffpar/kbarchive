---
layout: page
title: "Q135725: PRB: Messages May Not Appear in Status Bar"
permalink: /kb/135/Q135725/
---

## Q135725: PRB: Messages May Not Appear in Status Bar

	Article: Q135725
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Messages defined for individual menu items in a user-defined menu disappear when
	the main desktop window is resized and the SET STATUS ON command is issued.
	
	CAUSE
	=====
	
	The SET STATUS ON command creates a character-based status bar. By default,
	messages are displayed in the center of the screen underneath the status bar.
	This character-based status bar does not resize itself proportionately to the
	desktop window; consequently, the message is placed in a location outside the
	resized desktop coordinates (position).
	
	RESOLUTION
	==========
	
	Instead of using SET STATUS ON, use the SET STATUS BAR ON command. This creates
	a graphical status bar display that resizes itself accurately as the desktop
	window is resized.
	
	STATUS
	======
	
	Microsoft is researching this behavior and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a simple user-defined menu with the menu generator, and define
	  messages for several menu options.
	
	2. Generate the menu.
	
	3. From the Command window, issue the SET STATUS ON command. The default status
	  bar will be replaced with a character-based status bar.
	
	4. Run the menu program by using the this command:
	
	     DO x.mpr
	
	5. Select the menu options with messages. The messages should be displayed in
	  the center of the screen under the status bar.
	
	6. Make the main Visual FoxPro desktop window smaller.
	
	7. Select a menu option with a defined message. The message will no longer be
	  visible.
	
	8. Resize the desktop to full screen size. The messages should become visible
	  again, so you select those menu items.
	
	9. Issue the SET STATUS BAR ON command to restore the graphical status bar. The
	  messages will appear in the same position regardless of the size of the
	  desktop window.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
