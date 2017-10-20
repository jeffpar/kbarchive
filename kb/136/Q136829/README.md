---
layout: page
title: "Q136829: Grays Displayed with Blue Tint Using 1-MB #9 GXE Adapter"
permalink: /kb/136/Q136829/
---

## Q136829: Grays Displayed with Blue Tint Using 1-MB #9 GXE Adapter

{% raw %}

	Article: Q136829
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Plus! for Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are using a #9 1-MB GXE display adapter by Number Nine with a
	resolution of 640 x 480 and a 16-bit color palette, shades of gray may be
	displayed with a blue tint. If you are using the Windows Standard desktop
	scheme, dialog boxes, scroll bars, and other items that should appear gray have
	a blue tint.
	
	CAUSE
	=====
	
	Windows 95 cannot initialize the #9 GXE display adapter properly.
	
	
	RESOLUTION
	==========
	
	To work around this problem, add the following line to the [Display] section of
	the System.ini file in the Windows folder, and then restart your computer:
	
	     HighColor=15
	
	Additional query words: grey
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbGamesSearch kbPlusSearch kbZNotKeyword3 kbPlus95
	Version           : WINDOWS:95
	
	=============================================================================
	

{% endraw %}
