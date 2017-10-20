---
layout: page
title: "Q72056: User's Guide Incorrectly Describes How Paintbrush Uses Fonts"
permalink: /kb/072/Q72056/
---

## Q72056: User's Guide Incorrectly Describes How Paintbrush Uses Fonts

{% raw %}

	Article: Q72056
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	Page 275 of the "Microsoft Windows User's Guide" for version 3.0
	incorrectly states:
	
	  The availability of point sizes depends on the resolution of your printer.
	
	It should state:
	
	  The availability of point sizes depends on the resolution of your screen.
	
	To determine what fonts Paintbrush will use, look at the [FONTS] section of
	the WIN.INI file. Up to the first 15 fonts listed will appear in the Fonts
	menu of Paintbrush. When Paintbrush selects these fonts, it will ignore
	duplicate instances of the same font, showing only the first instance.
	
	This information applies to Microsoft Windows version 3.0. This information
	does not apply to later versions of Windows.
	
	Additional query words: documentation error 3.0 3.00 3.00a docerr
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	

{% endraw %}
