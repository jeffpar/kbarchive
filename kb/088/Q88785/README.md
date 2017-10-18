---
layout: page
title: "Q88785: Windows Err Msg: A Permanent Swap File Has..."
permalink: kb/088/Q88785/
---

## Q88785: Windows Err Msg: A Permanent Swap File Has...

	Article: Q88785
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When attempting to create a permanent swap file using Control Panel in Microsoft
	Windows, you may get the following error message:
	
	  A permanent swap file has been found on a drive where one cannot be created.
	  Select a different drive, or change Type to None.
	
	  Do you want to set the swap-file type to None?
	
	CAUSE
	=====
	
	This problem occurs when using the keyboard to select the new drive by typing
	the letter of the new drive before accessing the Drive list box.
	
	WORKAROUND
	==========
	
	This error message can be avoided by using the mouse or by using the keyboard in
	the following way:
	
	1. Run Control Panel and choose the 386 Enhanced icon.
	
	2. Choose the Virtual Memory button, then choose Change.
	
	3. Use the TAB key to select the Drive list box.
	
	4. Press the DOWN ARROW key to drop down the drive listings, rather than typing
	  the letter of the new drive.
	
	5. Select the appropriate drive from the Drive list box by either typing the
	  drive letter or by using the DOWN ARROW key to select the drive. Press ENTER.
	
	Additional query words: 3.10 3.11 swapfile perm temp
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
