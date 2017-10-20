---
layout: page
title: "Q82800: TrueType Character Spacing Incorrect in AmiPro"
permalink: /kb/082/Q82800/
---

## Q82800: TrueType Character Spacing Incorrect in AmiPro

{% raw %}

	Article: Q82800
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	TrueType font characters may run into each other on the display in AmiPro 2.0
	and other applications. Turn off the application's Display As Printed option and
	the spacing problems should be resolved. In AmiPro 2.0, the switch is in the
	View Preferences dialog box under the View menu, and is called Display as
	Printed.
	
	MORE INFORMATION
	================
	
	This problem is sometimes referred to as a "kerning" problem because it appears
	as though the application is kerning the text too tightly.
	
	Many applications format the document for a printer and then scale it to fit on
	the display. With TrueType fonts, Windows has much more information about the
	characters in a font and can space them closer together. The combination of
	tighter spacing and scaling from a printer to the screen can cause TrueType
	characters to touch each other on the screen but print correctly. A solution to
	the problem is to tell the application to use screen spacing on the screen, and
	printer spacing on the printer.
	
	Additional query words: 3.10 True Type Ami spacing kerning
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
