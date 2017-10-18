---
layout: page
title: "Q129562: Logitech Cyberman Requires MS-DOS Mode"
permalink: kb/129/Q129562/
---

## Q129562: Logitech Cyberman Requires MS-DOS Mode

	Article: Q129562
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95 appscomp kbAppCompatibility
	Last Modified: 28-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Logitech Cyberman does not work correctly when you try to use it with an
	MS-DOS-based program in a window. This problem usually occurs with MS-DOS-based
	games.
	
	CAUSE
	=====
	
	The Cyberman does not function correctly in a window because the Windows 95
	Logitech mouse driver does not support Cyberman. The real-mode Cyberman drivers
	for Windows 3.x provided by Logitech do not work correctly in a windowed session
	in Windows 95.
	
	RESOLUTION
	==========
	
	Run MS-DOS-based programs that require the Logitech Cyberman's 3-D functionality
	using the MS-DOS Mode option.
	
	MORE INFORMATION
	================
	
	When you upgrade a system configured with the Logitech Cyberman from Windows or
	Windows for Workgroups 3.x to Windows 95, the real-mode driver for the Cyberman
	is moved from the AUTOEXEC.BAT file to the DOSSTART.BAT file for MS-DOS Mode
	compatibility. Setup also removes the old Logitech mouse driver from the
	SYSTEM.INI file.
	
	The hardware detection portion of Setup detects the Cyberman as a serial mouse
	and installs the Windows 95 driver for the serial mouse. This lets you use the
	Cyberman as a mouse with no 3-D capabilities in Windows 95.
	
	Cyberman is manufactured by Logitech, a vendor independent of Microsoft; we make
	no warranty, implied or otherwise, regarding this product's performance or
	reliability.
	
	======================================================================
	Keywords          : win95 appscomp kbAppCompatibility 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
