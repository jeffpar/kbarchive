---
layout: page
title: "Q82333: Out Of Memory Errors with True Color Display Drivers"
permalink: /kb/082/Q82333/
---

## Q82333: Out Of Memory Errors with True Color Display Drivers

{% raw %}

	Article: Q82333
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 27-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you change to True Color display drivers that support 16bpp (bits per
	pixel) or greater color depth, the following error message may be displayed when
	you start Microsoft Windows:
	
	  Extremely Low On Memory: Not Enough memory to convert all the program icons
	
	CAUSE
	=====
	
	The above error occurs because Program Manager does not have enough memory while
	trying to convert the icons in a group from the previous color format (4bpp - 16
	colors, or 8bpp - 256 colors) to the new color depth supported by the new
	display driver.
	
	When Program Manager runs out of memory, it stops converting icons. The icons
	that have not yet been converted appear as black boxes.
	
	WORKAROUND
	==========
	
	You can manually convert black icons by doing the following:
	
	1. Choose the program item with a black icon.
	
	2. From the File menu, choose Properties, or press ALT+ENTER.
	
	3. Choose the OK button.
	
	If you have abnormally large groups, you may have to split the group into two or
	more separate groups to comply with the 64K limit for a Program Manager group.
	The size restriction of 64K includes information for each program item,
	including icon color information.
	
	When you change from a 16 color display driver (4bpp such as VGA or super VGA) or
	a 256 color (8bpp such as 8514 or v7vga) to a 16bpp or greater display card, the
	groups must be smaller to accommodate the additional color information for each
	program item.
	
	Additional query words: 3.10 3.11 16bpp progman
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
