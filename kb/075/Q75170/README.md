---
layout: page
title: "Q75170: PRB: Some PWB Key Reassignments Do Not Work in Help Windows"
permalink: /kb/075/Q75170/
---

## Q75170: PRB: Some PWB Key Reassignments Do Not Work in Help Windows

{% raw %}

	Article: Q75170
	Product(s): Microsoft Programming Utilities
	Version(s): MS-DOS:1.0,1.1; OS/2:1.0,1.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Programmer's Workbench for MS-DOS, versions 1.0, 1.1 
	- Microsoft Programmer's Workbench for OS/2, versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Assigning functions to certain keys and attempting to invoke those functions
	while a Help window is active does not work as expected in the Programmer's
	WorkBench (PWB) versions 1.0 and 1.1. If any other window is active, the
	functions are invoked as expected by the assigned keystrokes.
	
	CAUSE
	=====
	
	Some keys have fixed meanings that override any user assignments while inside
	the PWB help system. These keys and their Help system functionality are as
	follows:
	
	     Key(s)                       Functionality
	     ------                       -------------
	
	     TAB                          Next Hyperlink
	
	     SHIFT+TAB                    Previous Hyperlink
	
	     SPACEBAR, ENTER,             Activate current hyperlink
	     numeric keypad ENTER         (includes shifted versions of these
	     (NUMENTER)                   keys)
	
	     <character>                  Go to next link beginning with
	                                  <character>
	
	     SHIFT+<chararcter>           Go to previous link beginning with
	                                  <character>
	
	     ESC                          Cancel Help
	
	RESOLUTION
	==========
	
	Since the above keystrokes have predefined meanings in the Help window, any
	functions needed in a Help window should be assigned to other keys, or the
	default keystrokes should be used while the Help window is active.
	
	MORE INFORMATION
	================
	
	PWB allows user assignment of all keys. For example, the "arg" function is
	assigned to ALT+A by default, but it could also be assigned to the ENTER key on
	the numeric keypad (NUMENTER) by placing the following line under the [PWB]
	tagged section of the TOOLS.INI file:
	
	     arg:NumEnter
	
	If you make this assignment and activate a PWB Help window, NUMENTER will not
	perform the arg function (though ALT+A still will). In fact, if a hyperlink
	button is highlighted, the NUMENTER key will execute the link as if the ENTER
	key had been pressed, since that is the NUMENTER functionality in a Help Window.
	Pressing NUMENTER while any other window is active will invoke the arg function.
	
	Additional query words: 1.00 1.10 PWBIss
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbPWBSearch kbZNotKeyword3 kbPWB100DOS kbPWB110DOS kbPWB100OS2 kbPWB110OS2
	Version           : MS-DOS:1.0,1.1; OS/2:1.0,1.1
	
	=============================================================================
	

{% endraw %}
