---
layout: page
title: "Q69392: Configuring GENIUS Mice for Microsoft Windows 3.0"
permalink: kb/069/Q69392/
---

## Q69392: Configuring GENIUS Mice for Microsoft Windows 3.0

	Article: Q69392
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains instructions on how to configure the following GENIUS mice
	for use with Microsoft Windows 3.0:
	
	- GENIUS GM-6X
	
	- GENIUS GM-F302
	
	- GM-F303
	
	- GM-6000
	
	MORE INFORMATION
	================
	
	GENIUS GM-6X
	------------
	
	The GENIUS GM-6X mouse is a three-button mouse that does not emulate the
	Microsoft Mouse. Configure the mouse for use with Windows as follows:
	
	1. Install the Windows Mouse Systems (or Vision) on COMx.
	
	2. Remove the Microsoft MOUSE.SYS mouse driver from the CONFIG.SYS file if
	  installed.
	
	3. Insert GMOUSE.COM in the AUTOEXEC.BAT file.
	
	4. Save your changes and restart your system.
	
	GENIUS GM-F302, GM-F303, or GM-6000
	-----------------------------------
	
	These three models can emulate either a Mouse Systems Mouse or Microsoft Mouse. A
	switch on the bottom of the mouse allows you to toggle the emulation mode from
	two-button Microsoft emulation to three-button Mouse Systems Mouse emulation.
	Configure the mouse for use with Windows as follows:
	
	1. Install the Windows-compatible GENIUS mouse driver that corresponds with the
	  GENIUS mouse setting.
	
	2. Remove the Microsoft MOUSE.SYS mouse driver from the CONFIG.SYS file.
	
	3. Install either one of the Mouse drivers supplied with the GENIUS mouse. Use
	  the GMOUSE.SYS driver in the CONFIG.SYS file or the GMOUSE.COM driver in the
	  AUTOEXEC.BAT file.
	
	4. Save your changes and restart your system.
	
	For further information, contact KYE International technical support.
	
	Additional query words: 3.00 3.00a KBHW 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
