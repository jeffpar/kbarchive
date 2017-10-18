---
layout: page
title: "Q82094: Microsoft Replacement MOUSE.DRV May Hang Windows"
permalink: kb/082/Q82094/
---

## Q82094: Microsoft Replacement MOUSE.DRV May Hang Windows

	Article: Q82094
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The MREADME.DOC file on the Setup disk for Microsoft Mouse driver disk version
	7.04 incorrectly states that the MOUSE.DRV file on the Mouse disk should be
	copied onto the Microsoft Windows original disks before you install Windows.
	
	The MOUSE.DRV on the Microsoft Mouse disk is a mouse driver for Windows versions
	2.x. Running this driver with Microsoft Windows versions 3.0 and later causes
	Windows to stop responding (hang or crash) in standard and 386 enhanced modes.
	
	MORE INFORMATION
	================
	
	The MREADME.DOC file contains the following instructions:
	
	  Using the new Mouse software with Microsoft Windows:
	
	  To use your new Mouse driver software, including the "ballistic"
	  characteristics, with Microsoft Windows, you must replace the MOUSE.DRV file
	  on the backup copy of your Windows Setup disk with the MOUSE.DRV file located
	  on the Utility or Setup disk in your Microsoft Mouse package, and then
	  reinstall Windows. You may want to make a backup copy of your WIN.INI file,
	  before doing the reinstallation. For more information on installing Microsoft
	  Windows, see the "Microsoft Windows User's Guide."
	
	These instructions should be disregarded for the Microsoft Windows 3.0 and 3.1
	setup.
	
	The MOUSE.DRV file on the Microsoft Mouse driver disk has a file date of 3- 15-90
	and a file size of 3699 bytes. The MOUSE.DRV file on the Windows 3.0 disk has a
	file date of 5-01-90, and a size of 2896 bytes. If the file size of MOUSE.DRV on
	the Windows disk is anything other than 2896 bytes, an incorrect MOUSE.DRV has
	been copied onto the disk or the disk is damaged.
	
	The Microsoft Mouse driver disk may be sent as an update from Microsoft End User
	Sales (call [800] 426-9400) and is packaged with Windows and with the Microsoft
	Mouse. Acceleration or "ballistic" mouse characteristics are already included
	with the Microsoft Mouse driver included with Windows.
	
	KBCategory: kbsetup kbhw kbdocerr
	KBSubcategory: Win30 Win31 WinDrvr WinComm
	
	REFERENCES
	==========
	
	"MREADME.DOC", Microsoft Mouse Setup Disk
	
	Additional query words: 3.0 3.00 3.0a 3.00a 3.1 3.10 lock up 3.11 lockup hang
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
