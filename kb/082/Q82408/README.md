---
layout: page
title: "Q82408: Changes Norton Desktop Makes to AUTOEXEC.BAT and SYSTEM.INI"
permalink: kb/082/Q82408/
---

## Q82408: Changes Norton Desktop Makes to AUTOEXEC.BAT and SYSTEM.INI

	Article: Q82408
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article discusses the following changes that are made to your system files
	by Norton Desktop for Windows versions 1.0 and 1.1:
	
	- SHELL= Setting Changed in SYSTEM.INI File
	
	- Device Drivers Installed in the SYSTEM.INI File
	
	- Changes to the AUTOEXEC.BAT File
	
	MORE INFORMATION
	================
	
	SHELL= Setting Changed in SYSTEM.INI File
	-----------------------------------------
	
	Norton Desktop for Windows can be installed as a shell that replaces the Program
	Manager of Windows. To do this, Norton Desktop modifies the [boot] section of
	the SYSTEM.INI file. To temporarily disable Norton Desktop, edit the SYSTEM.INI
	file in a text editor (such as Microsoft Windows Notepad), and change the line
	shell=ndw.exe so that it reads "shell=progman.exe" (without the quotation
	marks).
	
	Device Drivers Installed in the SYSTEM.INI File
	-----------------------------------------------
	
	Norton Desktop for Windows installs three virtual device drivers (VFINTD, VDMADX,
	and VNSS) in the \WINDOWS\SYSTEM directory and places the following four lines
	in the [386enh] section of SYSTEM.INI:
	
	     DEVICE=VFINTD.386
	     DEVICE=VDMADX.386
	     DEVICE=VNSS.386
	     DMABufferSize=21
	
	The following is an explanation of the lines in the [386enh] section of
	SYSTEM.INI:
	
	  Lines               Description
	  -----               -----------
	
	  DEVICE=VFINTD.386   Virtual Floppy Interrupt Device Driver
	
	  DEVICE=VDMADX.386   Virtual direct memory access (DMA) Device
	                      Driver (replaces the default VFINTD, VDMADX,
	                      VNSS internal DMA device driver *vdmad)
	
	  DEVICE=VNSS.386     Virtual Screen Saver Device Driver
	
	  DMABufferSize=21    Sets amount of RAM reserved for buffered DMA
	                      (default=16)
	
	Removing or remarking out these lines causes Windows to exit to the command
	prompt when you try to start Windows in 386 enhanced mode.
	
	To remove Norton Desktop for Windows, you need to remove the three device= lines
	mentioned above and add the following line to the [386Enh] section of the
	SYSTEM.INI file:
	
	     DEVICE=*vdmad
	
	Changes to the AUTOEXEC.BAT File
	--------------------------------
	
	When you install Norton Desktop for Windows version 1.0 or 1.1, your AUTOEXEC.BAT
	file may be modified. Toward the end of the installation the following choices
	are given:
	
	- Make changes:
	
	  The NDW directory will be added to the PATH variable. Erase Protect (EP) and
	  IMAGE will be added as well.
	
	- Make changes later:
	
	  Nothing is changed.
	
	- Make no changes:
	
	  The Norton Desktop for Windows directory is added to the path. It is not added
	  if the PATH has reached its limit of 128 characters.
	
	  Some versions of Norton Desktop delete the 't' from batch file extension so
	  the batch file will not run.
	
	Norton Desktop for Windows is manufactured by Symantec Corporation, a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	For more information, call Symantec technical support.
	
	Additional query words: 1.00 1.10 1.x 3.00 3.00a 3.10 3.11 NDW ND winfest
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
