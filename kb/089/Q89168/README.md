---
layout: page
title: "Q89168: Windows Err Msg: Drivers Require an Updated Version..."
permalink: kb/089/Q89168/
---

## Q89168: Windows Err Msg: Drivers Require an Updated Version...

	Article: Q89168
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): win31
	Last Modified: 02-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you try to install updated sound card drivers in Windows, you may receive the
	following error message:
	
	  These drivers require a newer version of Windows 3.1
	
	CAUSE
	=====
	
	This error message occurs under the following circumstances:
	
	- You attempt to add updated sound card drivers designed for Windows 3.1 to
	  Windows 3.0 with multimedia extensions.
	
	- You have installed both Norton Desktop for Windows and Berkeley System's
	  After Dark screen saver on Windows 3.1. Norton Desktop and After Dark add
	  virtual device drivers (VxDs) in the [386ENH] section of the SYSTEM.INI file.
	  These drivers can cause the error message to occur.
	
	- You have a tape drive, SCSI drive, or other hardware device installed on the
	  system, and that device is using the same DMA channel as the sound card.
	
	WORKAROUND
	==========
	
	Troubleshooting Steps
	---------------------
	
	To correct this problem, follow these troubleshooting steps:
	
	1. If this error message occurs under Windows 3.0, install the drivers that were
	  provided by the manufacturer for use with the Windows 3.0 multimedia
	  extensions, or check with the manufacturer to make sure that the drivers were
	  intended to be used with Windows 3.0.
	
	2. Make sure that no terminate-and-stay-resident (TSR) programs or device
	  drivers are loading in the CONFIG.SYS and AUTOEXEC.BAT files that may be
	  conflicting with Windows. For more information, query on "clean boot" in the
	  Knowledge Base.
	
	3. Run Windows in standard mode (use the WIN /S command), then try installing
	  the drivers for the sound card.
	
	4. If the problem still occurs in standard mode, make sure there is no conflict
	  between the sound card and another hardware device. For more information on
	  configuring the sound card, consult the manufacturer.
	
	5. If there is no hardware conflict, try reinstalling Windows 3.1 into a new
	  directory. Make sure that no third-party applications (for example, Norton
	  Desktop or After Dark) are installed on top of Windows. Then try adding the
	  drivers for the sound card.
	
	Norton Desktop for Windows and Berkeley Systems' After Dark are manufactured by
	vendors independent of Microsoft; we make no warranty, implied or otherwise,
	regarding these products' performance or reliability.
	
	Additional query words: ndw 3.00 3.00a 3.10 3.11 afterdark NDT desk top 3rdparty sound blaster tshoot Soundblaster
	
	======================================================================
	Keywords          : win31 
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
