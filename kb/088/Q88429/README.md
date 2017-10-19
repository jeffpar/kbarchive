---
layout: page
title: "Q88429: Problems with Swan Video Drivers and Utilities and Windows"
permalink: /kb/088/Q88429/
---

## Q88429: Problems with Swan Video Drivers and Utilities and Windows

	Article: Q88429
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 01-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you have a Swan products video driver or adapter, you may experience the
	following problems when you run Microsoft Windows version 3.1:
	
	- Swan Products Super VGA card (SVGA-16) comes with a Windows high- resolution
	  video drivers dated 01/21/91. Some of these drivers work correctly in
	  standard mode, but do not allow Windows to run in 386 enhanced mode.
	
	- EANSI.SYS version 6.0, which comes with the Swan Products video adapter
	  Palette Plus, causes Windows 3.1 to stop responding (hang) when you run a
	  Windows-based application in standard or 386 enhanced mode.
	
	CAUSE
	=====
	
	Swan Products' video drivers and the EANSI.SYS utility need to be updated to
	function properly with Microsoft Windows version 3.1.
	
	RESOLUTION
	==========
	
	To correct these problems, obtain a new video adapter driver (UPDATE31.ZIP) from
	Swan technical support, or remove EANSI.SYS from the CONFIG.SYS file.
	
	The Swan products included here are manufactured by a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding these products'
	performance or reliability.
	
	Additional query words: 3.00 3.00a 3.10 3.11 3rdparty SWAN SVGA phone crash stop freeze hangs crashes freezes up
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
