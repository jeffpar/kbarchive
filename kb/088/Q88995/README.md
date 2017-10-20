---
layout: page
title: "Q88995: Micrografx Designer 3.1 Fails to Release GDI Resources"
permalink: /kb/088/Q88995/
---

## Q88995: Micrografx Designer 3.1 Fails to Release GDI Resources

{% raw %}

	Article: Q88995
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Micrografx Designer 3.1 may fail to release GDI resources during zooms and text
	editing. These problems are aggravated if you use a high-resolution display
	(1024 x 768), and you may experience slow response and the application may stop
	responding (hang). These problems can also occur when you paste Micrografx
	images into other applications.
	
	RESOLUTION
	==========
	
	Micrografx has a patch called GDIFIX.EXE that resolves this problem. You can
	download the patch from the Micrografx bulletin board service (BBS). Contact
	Micrografx for more information.
	
	If you need an immediate workaround, add the following lines to the [Micrografx
	Fonts] section of WIN.INI. You may see some slowing during redraws; however,
	Designer will release GDI resources.
	
	     [Micrografx Fonts]
	     MGXFNT=C:\WINDOWS\MGXLIBS\MGXFONTS,MGXFNT,MGXFNT.FTM,0,0
	     FONT CACHE = 5
	     BITMAP CACHE = 2000
	     CHARACTER CACHE = 2048
	
	Values                   Definitions
	---------------------------------------------------------
	
	Font Cache value:        3 through 30; default is 25.
	Bitmap Cache value:      100 through 8192; default is 8192.
	Character Cache value:   1024 through 16384; default is 16384.
	
	The Micrografx products included here are manufactured by a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding these products'
	performance or reliability.
	
	Additional query words: 3.10 3.11 heap micro graphics system 3rdparty high resolution
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
