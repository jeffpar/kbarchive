---
layout: page
title: "Q82095: Windows Err Msg: Unable to Use XXXX.BMP As a Desktop Bitmap"
permalink: kb/082/Q82095/
---

## Q82095: Windows Err Msg: Unable to Use XXXX.BMP As a Desktop Bitmap

	Article: Q82095
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the desktop wallpaper feature in the Windows 3.0 Control Panel, the
	following error message may be displayed:
	
	  Unable to Use XXXX.BMP As a Desktop Bitmap
	
	where XXXX.BMP is the filename of a bitmap.
	
	CAUSE
	=====
	
	Any of the following can cause this problem:
	
	- There is not enough free memory or free system resources to display the
	  picture.
	
	- The picture is not a valid bitmap (.BMP) file.
	
	- The path to the bitmap is incorrect when selecting a bitmap from another
	  directory.
	
	WORKAROUND
	==========
	
	Verifying There Is Enough Memory
	--------------------------------
	
	To verify that there is enough memory or resources, make sure that Windows is not
	running in real mode. Real mode may not allocate enough free memory or system
	resources to Windows to display a bitmap as a background wallpaper. Large
	bitmaps, such as CHESS.BMP, cannot run in real mode. Large bitmaps such as this
	CHESS.BMP require more free memory than is likely to be available in real mode.
	
	Verifying the Picture Is a Bitmap
	---------------------------------
	
	To verify that the picture is a valid bitmap, do the following:
	
	1. Load the file into Paintbrush.
	
	2. Save the picture, as a bitmap called TEST.BMP, to the WINDOWS directory.
	
	3. Run Control Panel and choose the Desktop icon.
	
	4. In the Wallpaper section, select TEST.BMP. (Note: If Windows is running in
	  real mode, you must restart Windows in order to see the new wallpaper.)
	
	Selecting a Bitmap as Wallpaper
	-------------------------------
	
	To select a bitmap for use as wallpaper from another directory:
	
	1. Run Control Panel and choose the Desktop icon.
	
	2. In the Wallpaper section, enter the complete path and filename of the bitmap.
	  This will copy the bitmap to the Windows program directory and select it for
	  use as a wallpaper. The bitmap must be copied because Windows looks for
	  bitmaps located within the Windows program directory only.
	
	Additional query words: 3.00 3.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
