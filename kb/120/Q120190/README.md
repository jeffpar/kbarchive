---
layout: page
title: "Q120190: BUG: ON KEY LABEL RIGHTMOUSE WAIT WINDOW &quot;Text&quot; Malfunctions"
permalink: /kb/120/Q120190/
---

## Q120190: BUG: ON KEY LABEL RIGHTMOUSE WAIT WINDOW &quot;Text&quot; Malfunctions

{% raw %}

	Article: Q120190
	Product(s): Microsoft FoxPro
	Version(s): MS-DOS:2.6x; WINDOWS:2.5x,2.6x,3.0,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbprogramming kbvfp500aBUG kbvfp250bug kbvfp250aBUG
	Last Modified: 11-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 5.0, 5.0a, 6.0 
	- Microsoft FoxPro for Windows, versions 2.5x, 2.6x 
	- Microsoft FoxPro for MS-DOS, version 2.6x 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Using one of the following commands results in unexpected behavior when the
	appropriate mouse button is subsequently pressed. The WAIT window flashes
	briefly on the screen and then disappears:
	
	     ON KEY LABEL RIGHTMOUSE WAIT WINDOW "<Text>"
	
	  -or-
	
	     ON KEY LABEL LEFTMOUSE WAIT WINDOW "<Text>"
	
	  -or-
	
	     ON KEY LABEL MOUSE WAIT WINDOW "<Text>"
	
	RESOLUTION
	==========
	
	Two possible alternatives to using a WAIT window are:
	
	- Instead of using a WAIT window, use a procedure that defines a window,
	  activates it, and places an @SAY "<Text>" command inside it.
	
	-or-
	
	- Use the ON KEY LABEL RIGHTMOUSE SET MESSAGE TO "<Text>" command instead
	  of a WAIT window. The text will appear on the status bar when the right mouse
	  button is pressed.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	MORE INFORMATION
	================
	
	This command works as expected in FoxPro for MS-DOS.
	
	Additional query words: click hit appear go away kbvfp500 kbvfp600
	
	======================================================================
	Keywords          : kbprogramming kbvfp500aBUG kbvfp250bug kbvfp250aBUG 
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbZNotKeyword3 kbVFP300 kbVFP500 kbVFP600 kbVFP500a
	Version           : MS-DOS:2.6x; WINDOWS:2.5x,2.6x,3.0,5.0,5.0a,6.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
