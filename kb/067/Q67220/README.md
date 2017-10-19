---
layout: page
title: "Q67220: Screen Problems on the Compuadd 386 SL Using Windows"
permalink: /kb/067/Q67220/
---

## Q67220: Screen Problems on the Compuadd 386 SL Using Windows

	Article: Q67220
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	On a Compuadd 316 SL Laptop computer, when you operate an MS-DOS application
	under Microsoft Windows 3.0, 3.0a or 3.1 in 386 enhanced mode and you exit the
	MS-DOS application, the display screen splits and the machine locks up.
	
	CAUSE
	=====
	
	The Compuadd 316 SL Laptop requires the VDDDRAG.386 device driver to run Windows
	3.0, 3.0a, or 3.1 in 386 enhanced mode. All new models of the 316 SL are shipped
	with this driver, as well as Windows 3.0, 3.0a or 3.1, installed.
	
	WORKAROUND
	==========
	
	To verify that the VDDDRAG.386 driver has been installed, check the Windows
	SYSTEM.INI file [386Enh] section for the following device line:
	
	       device=vdddrag.386
	
	The driver was shipped on a supplementary disk with some older models of the 316
	SL. The VDDDRAG.386 device driver may be obtained from Compuadd technical
	support at (800) 999-9901 or downloaded from the Compuadd BBS at (512) 250-3226.
	The file to download is 316SLDRV.ZIP.
	
	MORE INFORMATION
	================
	
	The 316 SL is equipped with a screen saving device that is dependent on the BIOS
	of the keyboard. The saver is not compatible with Windows and should be disabled
	before running Windows. To disable the screen saver, from the MS-DOS prompt
	press CTRL+LEFT SHIFT+L. This sequence toggles the screen saver function on and
	off.
	
	The Compuadd products included here is manufactured by a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding these products'
	performance or reliability.
	
	Additional query words: 3.0 3.0a 3.00 3.00a 3.1 3.10 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
