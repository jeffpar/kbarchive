---
layout: page
title: "Q176729: PRB: Menus Behave Differently in OS 8"
permalink: kb/176/Q176729/
---

## Q176729: PRB: Menus Behave Differently in OS 8

	Article: Q176729
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:2.6a,3.0b
	Operating System(s): 
	Keyword(s): kbHWMAC kbvfp
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	- Microsoft FoxPro for Macintosh, version 2.6a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Menu pads, also known as Menu titles, that do not have a submenu associated with
	them, will not work with a single mouse click when used in FoxPro with Macintosh
	OS 8. These menu pads require a double-click.
	
	CAUSE
	=====
	
	This behavior is caused by a change to the Macintosh operating system with OS 8.
	The system now has sticky menus that stay down when a menu title is clicked.
	Previously, the menu would not stay down when the title was clicked.
	
	RESOLUTION
	==========
	
	Use submenus with all menu titles (menu pads).
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	The DEFINE PAD command is used to create menu titles on menu bars. If there is
	not a menu associated with the menu title, the ON SELECTION PAD command is used
	to specify a command that executes when the menu title is selected.
	Alternatively, if a menu title has a menu associated with it, the ON PAD command
	is used to activate the popup and its bars that make up the menu. Both menu
	scenarios are illustrated in the sample program below in the Steps to Reproduce
	Behavior section.
	
	Generating a menu created in the Menu Designer produced the code used in the
	sample program. The code was copied from the .mpr file created when the menu was
	generated. The randomly generated names for the menu titles were changed to p1
	and p2. The menu title that uses the ON SELECTION PAD command requires the
	double-click for its command to execute, which has Hello as the prompt.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Type the following code into a new program file and then run the program
	  file:
	
	        SET SYSMENU TO
	        SET SYSMENU AUTOMATIC
	
	        DEFINE PAD p1 OF _MSYSMENU PROMPT "Hello" COLOR SCHEME 3 ;
	                KEY ALT+H, ""
	        DEFINE PAD p2 OF _MSYSMENU PROMPT "Get Back To Normal" ;
	                COLOR SCHEME 3 KEY ALT+G, ""
	        ON SELECTION PAD p1 OF _MSYSMENU WAIT WINDOW "Hello"
	        ON PAD p2 OF _MSYSMENU ACTIVATE POPUP getbackton
	
	        DEFINE POPUP getbackton MARGIN RELATIVE SHADOW COLOR SCHEME 4
	        DEFINE BAR 1 OF getbackton PROMPT "Red"
	        DEFINE BAR 2 OF getbackton PROMPT "Blue"
	        DEFINE BAR 3 OF getbackton PROMPT "Quit"
	        ON SELECTION BAR 1 OF getbackton WAIT WINDOW "Red"
	        ON SELECTION BAR 2 OF getbackton WAIT WINDOW "Blue"
	        ON SELECTION BAR 3 OF getbackton SET SYSMENU TO DEFAULT
	
	  The program should display a menu with a Hello pad and a "Get Back To Normal"
	  pad.
	
	2. Click the Hello pad and release the mouse button. If you are running FoxPro
	  under OS 8, the menu pad will highlight. If you click the menu pad again, a
	  WAIT WINDOW with "Hello" appears. With the Macintosh operating systems
	  earlier than OS 8, the WAIT WINDOW "Hello" appears with the first click of
	  the menu pad.
	
	3. Try the "Get Back To Normal" menu pad. When the menu pad is clicked, the
	  drop-down menu appears. Once the menu is down, the commands on the menu can
	  be selected. With the Macintosh operating systems earlier than OS 8, the menu
	  does not stay down when the mouse button is released. Select the Quit command
	  to get the FoxPro menu back.
	
	REFERENCES
	==========
	
	Visual FoxPro Help, version 3.0b; topics: Define Pad, On Selection Pad, On Pad,
	Define Popup
	
	Additional query words:
	
	======================================================================
	Keywords          : kbHWMAC kbvfp 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro260aMac kbVFP300bMac
	Version           : MACINTOSH:2.6a,3.0b
	Issue type        : kbprb
	
	=============================================================================
	
