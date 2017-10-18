---
layout: page
title: "Q116357: Windows 95 Err Msg: Access Pack Error. Could Not Initialize..."
permalink: kb/116/Q116357/
---

## Q116357: Windows 95 Err Msg: Access Pack Error. Could Not Initialize...

	Article: Q116357
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
	
	When you run Windows 95, the following error message is displayed:
	
	  Access Pack Error
	  Could not initialize the Mini VxD, load aborted
	  Press a key to continue
	
	CAUSE
	=====
	
	This error message can be caused by older versions of the Sejin SKR-1032
	Keyboard/Mouse combination drivers.
	
	RESOLUTION
	==========
	
	For keyboard support, you can use the Sejin SKR-1032 as a keyboard only if you
	use the keyboard drivers that ship with Windows 95. For mouse support, you can
	use a separate mouse and the mouse driver that ships with Windows 95.
	
	The steps below reinstall the 101/102 Enhanced keyboard driver and the Microsoft
	Mouse driver.
	
	1. In a text editor (such as WordPad or the MS-DOS Editor), open the SYSTEM.INI
	  file from your Windows directory.
	
	2. Change the MOUSE.DRV line in the [Boot] section to read:
	
	  MOUSE.DRV=MOUSE.DRV
	
	3. Change the KEYBOARD.DRV line in the [Boot] section to read:
	
	  KEYBOARD.DRV=KEYBOARD.DRV
	
	4. Change the MOUSE= line in the [386Enh] section to read:
	
	  MOUSE=*VMOUSE
	
	5. Change the KEYBOARD= line in the [386Enh] section to read:
	
	  KEYBOARD=*VKD
	
	MORE INFORMATION
	================
	
	For information about updated keyboard/mouse drivers, contact Sejin America.
	
	The Sejin SKR-1032 is manufactured by Sejin America, a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	Additional query words: 3rdparty segin jmouse skr1032
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
