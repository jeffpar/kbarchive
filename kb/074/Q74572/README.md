---
layout: page
title: "Q74572: How Microsoft Windows Uses an MS-DOS Mouse Driver"
permalink: /kb/074/Q74572/
---

## Q74572: How Microsoft Windows Uses an MS-DOS Mouse Driver

{% raw %}

	Article: Q74572
	Product(s): Microsoft Windows Device Driver Kit
	Version(s): 3.0,3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Device Development Kit (DDK) for Windows, versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	For performance reasons, the Microsoft Windows graphical environment does not
	use the MS-DOS mouse driver even if one is installed. Windows has its own mouse
	driver (usually a file named MOUSE.DRV) that handles mouse input. Therefore,
	Windows applications can use the mouse as long as the appropriate Windows mouse
	driver is installed, regardless of whether an MS-DOS mouse driver is present.
	
	The Windows mouse driver does not provide any mouse support for MS-DOS
	(non-Windows) applications. You must load the MS-DOS mouse driver to use the
	mouse with an MS-DOS application running under Windows. You can load the MS-DOS
	mouse driver either before running Windows or in an MS-DOS session under
	Windows. However, we recommend that you load the mouse driver before starting
	Windows because hardware conflicts may occur if a mouse driver attempts to
	initialize the hardware after Windows has started.
	
	The virtual device driver named VMD manages ownership of the mouse hardware
	between the Windows mouse driver and the MS-DOS mouse driver. VMD is not a mouse
	driver; it simply switches hardware ownership between the MS-DOS and Windows
	drivers.
	
	Additional query words: 3.00 3.10 control
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWinDDKSearch kbWinDDK300 kbWinDDK310
	Version           : :3.0,3.1
	
	=============================================================================
	

{% endraw %}
