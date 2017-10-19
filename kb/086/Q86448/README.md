---
layout: page
title: "Q86448: WRK Graphics Viewer and 256-Color Bitmaps (BMPs)"
permalink: /kb/086/Q86448/
---

## Q86448: WRK Graphics Viewer and 256-Color Bitmaps (BMPs)

	Article: Q86448
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Graphics Viewer 1.0 from the Windows Resource Kit for Microsoft Windows
	operating system version 3.1 only supports 16 colors when viewing bitmap (.BMP)
	files. With a 256-color driver loaded and Windows 3.1 configured properly, a
	256-color .BMP file is rendered in only 16 colors.
	
	CAUSE
	=====
	
	The Graphics Viewer (BMPVIEW.EXE) does not support File Manager's Associate
	command. Therefore, you cannot associate .BMP files with this program.
	
	Both of these limitations are by design.
	
	Additional query words: 3.10 3.11 bitmap
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
