---
layout: page
title: "Q81640: 256-Color Bitmap in Paintbrush Causes Wallpaper Change"
permalink: /kb/081/Q81640/
---

## Q81640: 256-Color Bitmap in Paintbrush Causes Wallpaper Change

{% raw %}

	Article: Q81640
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you display a 256-color bitmap in Microsoft Windows Paintbrush, the
	wallpaper color may change to a different shade. In addition, the wallpaper
	color behind some icons may change significantly when you run Windows with a
	256-color display driver.
	
	CAUSE
	=====
	
	This behavior is caused by rotating color palettes. The color of the wallpaper
	changes somewhat because Paintbrush realizes a palette that conflicts with the
	one required by the wallpaper. Windows performs a "best match" to match the
	colors after the palette has changed.
	
	Some icons on the desktop may have background colors that do not match the
	background at all. Control Panel and Program Manager icons, for example, may
	display with incorrect background colors. Dr. Watson, however, displays the
	correct background color. Dr. Watson repaints its icon when the new palette is
	selected by Paintbrush; however, Control Panel and Program Manager do not.
	
	Additional query words: 3.00 3.00a 3.10 3.11 d 3d paint brush drwatson
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	

{% endraw %}
