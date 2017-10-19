---
layout: page
title: "Q89698: Windows Err Msg: You Must Have the File WINA20.386..."
permalink: /kb/089/Q89698/
---

## Q89698: Windows Err Msg: You Must Have the File WINA20.386...

	Article: Q89698
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may get the following message when trying to run Windows version 3.0 in 386
	enhanced mode:
	
	  You must have the file WINA20.386 in the root of your boot drive to run
	  Windows in enhanced mode
	
	CAUSE
	=====
	
	WINA20.386 is a file included in compressed format with MS-DOS version 5.0. The
	compressed filename is WINA20.38_. It should be copied to the root directory
	during the MS-DOS 5.0 installation/upgrade. If it is not, you will receive this
	message.
	
	WORKAROUND
	==========
	
	Use this procedure to reinstall the WINA20.386 file:
	
	1. Insert MS-DOS 5.0 Disk 3 (for 3.5-inch disks) or Disk 5 (for 5.25-inch disks)
	  into drive A or B.
	
	2. Use the EXPAND.EXE utility provided with MS-DOS 5.0. From the root directory
	  type the following:
	
	  expand a:\wina20.38_ c:\wina20.386
	
	  NOTE: You must use the EXPAND.EXE utility provided with MS-DOS 5.0. If
	  EXPAND.EXE is not in the DOS directory, do the following:
	
	  a. Insert MS-DOS 5.0 Disk 3 (for 3.5-inch disks) or Disk 6 (for 5.25-inch
	     disks) into drive A or B.
	
	  b. Change to drive A or B.
	
	  c. Type the following:
	
	  copy expand.exe c:\expand.exe
	
	  d. Change back to drive C and follow the above instructions.
	
	3. Start Windows (you do not need to reboot).
	
	Moving WINA20.386 Out of Root Directory
	---------------------------------------
	
	If the WINA20.386 file is in a different directory, do the following:
	
	1. Add a SWITCHES=/W command to your CONFIG.SYS file.
	
	2. Add the following line to the [386Enh] section of your SYSTEM.INI file:
	
	  DEVICE=<<drive:><path>> WINA20.386
	
	  where <<drive:><path>> refers to the drive and path where
	  the WINA20.386 file is located.
	
	QEMM and Windows 3.1
	--------------------
	
	Using a version of Quarterdeck QEMM386 earlier than 6.0 with the NOEMS switch
	causes a message to appear when starting Windows 3.1. Windows is able to run in
	all modes, but a message is displayed stating that the WINA20.386 file could not
	be found.
	
	This behavior is caused in part by measures taken to work with earlier versions
	of QEMM. When Windows starts, it sends two version messages, one saying that it
	is version 3.0, and another saying it is version 3.1. When MS-DOS 5.0 intercepts
	the 3.0 message, it immediately checks for the existence of the WINA20.386 file.
	MS-DOS does not need this file if you are running Windows version 3.1.
	
	The following are methods to prevent the WINA20.386 error message from being
	displayed:
	
	- Upgrade QEMM to the latest version (6.0 or later).
	
	- Add the following line to the CONFIG.SYS file:
	
	  switches=/w
	
	
	Some of the products included here are manufactured by vendors independent of
	Microsoft; we make no warranty, implied or otherwise, regarding these products'
	performance or reliability.
	
	REFERENCES
	==========
	
	MS-DOS 5.0 readme text, section 5.3
	
	Additional query words: 3.00 3.00a WINA20 win30 3rdparty 3.10 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
