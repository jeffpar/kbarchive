---
layout: page
title: "Q23308: PRB: Debugging High Resolution EGA or VGA Graphics with CodeView"
permalink: /kb/023/Q23308/
---

## Q23308: PRB: Debugging High Resolution EGA or VGA Graphics with CodeView

{% raw %}

	Article: Q23308
	Product(s): Microsoft Programming Utilities
	Version(s): 2.2,3.0,3.11,3.12,3.14,3.5,4.0,4.01,4.05,4.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 26-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft CodeView for MS-DOS, versions 2.2, 3.0, 3.11, 3.14, 4.0, 4.01, 4.05, 4.1 
	- Microsoft CodeView for OS/2, versions 2.2, 3.0, 3.11, 3.12, 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Debug a program that does EGA, VGA, or SVGA graphics. When you continue from a
	breakpoint after the program has painted the screen, the screen appears
	differently than before the breakpoint; all colors seemingly have been turned to
	black. The program is using the EGA in 640x350, 16-color mode.
	
	CAUSE
	=====
	
	This behavior is partly related to the size of the buffer that CodeView creates
	for storing screen information. If you are running on a CGA, EGA, or VGA board,
	this buffer is 16K by default. If you are running on a monochrome board, this
	buffer is 4K by default. As you are finding, 16K is not enough memory for a
	color image using 640x350 resolution (the maximum resolution supported is
	640x200), hence the loss of color after the breakpoint.
	
	RESOLUTION
	==========
	
	The best way to work around this limitation is to use a dual-monitor setup for
	debugging applications that run in a high resolution graphics mode. Invoke
	CodeView with the /2 switch and the CodeView display will appear on the
	secondary monitor while the program's graphical output will remain on the main
	monitor. Because the output is going to a different screen, CodeView won't have
	to worry about changing the video modes or the buffering.
	
	Additional query words: 3.00 3.50 4.00 4.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbCodeView kbZNotKeyword3 kbCodeView220DOS kbCodeView300DOS kbCodeView311DOS kbCodeView314DOS kbCodeView400DOS kbCodeView401DOS kbCodeView405DOS kbCodeView410DOS kbCodeView220OS2 kbCodeView300OS2 kbCodeView311OS2 kbCodeView312OS2 kbCodeView350OS2
	Version           : :2.2,3.0,3.11,3.12,3.14,3.5,4.0,4.01,4.05,4.1
	
	=============================================================================
	

{% endraw %}
