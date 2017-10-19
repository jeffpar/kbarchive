---
layout: page
title: "Q76069: PRB: Help File Missing Green Text Using WACOM Tablet"
permalink: /kb/076/Q76069/
---

## Q76069: PRB: Help File Missing Green Text Using WACOM Tablet

	Article: Q76069
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Pen Computing, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the Windows Help application is run on a system with a WACOM tablet
	installed, context jumps and glossary entries do not appear on the screen.
	
	CAUSE
	=====
	
	The default color for Windows Help hypertext keywords is light green. The
	recommended settings for using Windows with the WACOM tablet disable the green
	video signal.
	
	RESOLUTION
	==========
	
	Two settings in the WIN.INI file allow the user to specify a different color for
	the hypertext keywords. Use a text editor to modify the WIN.INI file. Find the
	[Windows Help] section. Add two lines that resemble the following:
	
	  " JUMPCOLOR=(255,0,0)
	  POPUPCOLOR=(255,0,0) " (without the quotation marks)
	
	This process will change the hypertext keywords to red. The value to the right of
	the equal sign represents a red, green, blue (RGB) color-value triple. While any
	color can be specified, because the green signal is disabled, changing the green
	parameter will make no difference in the color selected.
	
	Additional query words: 1.00
	
	======================================================================
	Keywords          :  
	Technology        : kbWinPenSearch kbZNotKeyword3 kbWinPen100
	Version           : :1.0
	Issue type        : kbprb
	
	=============================================================================
	
