---
layout: page
title: "Q83272: Help File Missing Green Text or Text is Hard to Read"
permalink: /kb/083/Q83272/
---

## Q83272: Help File Missing Green Text or Text is Hard to Read

	Article: Q83272
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you have a system with a WACOM tablet installed, hypertext context jumps and
	glossary entries do not appear on the screen.
	
	CAUSE
	=====
	
	This occurs because the default color for the hypertext keywords is light green,
	and the recommended settings for using Microsoft Windows with the WACOM tablet
	disable the green video signal.
	
	WORKAROUND
	==========
	
	Two settings in the WIN.INI file allow you to specify a different color for the
	hypertext keywords. Use the following procedure to change these settings.
	
	NOTE: You may find this procedure helpful if you wish to change the hypertext
	color just because you find the green text difficult to read.
	
	1. Use a text editor to modify the WIN.INI file.
	
	2. Find the [Windows Help] section.
	
	3. Add two lines that resemble the following:
	
	        JUMPCOLOR=(255,0,0)
	        POPUPCOLOR=(255,0,0)
	
	This changes the hypertext keywords to red. The value to the right of the equal
	sign represents a red, green, blue (RGB) color-value triple. While any color may
	be specified (because the green signal is disabled), changing the green
	parameter makes no difference in the color selected.
	
	The WACOM product included here is manufactured by a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	Additional query words: 3.10 3.11 PENWIN SD-510C 510C 648A hyper text
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
