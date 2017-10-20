---
layout: page
title: "Q135217: Problems with Hardware Cursor on Compaq LTE Elite"
permalink: /kb/135/Q135217/
---

## Q135217: Problems with Hardware Cursor on Compaq LTE Elite

{% raw %}

	Article: Q135217
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	On Compaq LTE Elite computers, displaying the hardware cursor with a monochrome
	mouse pointer can lead to strange behavior. On these computers, you can toggle a
	function key to display the power status, power usage, and volume control in the
	form of the hardware cursor.
	
	CAUSE
	=====
	
	Windows 95 also uses the hardware cursor for a monochrome mouse pointer. When
	you invoke one of these function keys, the mouse pointer may disappear when the
	hardware cursor is displayed. Also, if an animated monochrome pointer is used,
	the hardware cursor might not even appear, or might appear and then disappear.
	
	RESOLUTION
	==========
	
	Either set the Graphics Hardware Acceleration slider one notch to the left, or
	add the following line to the [Display] section of the System.ini file:
	
	  SWCursor=1
	
	MORE INFORMATION
	================
	
	Compaq LTE Elite computers contain a Western Digital 90C24C adapter. When a
	monochrome cursor is used, the driver chooses to use the hardware cursor. The
	problem occurs when you press one of the function keys that trigger the hardware
	cursor to show volume, power status, or power usage settings.
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	

{% endraw %}
