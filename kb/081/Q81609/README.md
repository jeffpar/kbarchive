---
layout: page
title: "Q81609: Err Msg: 'Incorrect System Version' When Starting MS-DOS App"
permalink: /kb/081/Q81609/
---

## Q81609: Err Msg: 'Incorrect System Version' When Starting MS-DOS App

	Article: Q81609
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	You may receive one of the following error messages when you try to run an
	MS-DOS-based application under Microsoft Windows or Windows for Workgroups in
	the 386 enhanced mode:
	
	- Incorrect system version; reinstall the 386 enhanced mode of Windows
	
	- Incompatible Version of Operating System
	
	
	CAUSE
	=====
	
	The problem is probably caused by one of the following:
	
	- The video grabber does not match the virtual display device.
	
	- An old WINOA386.MOD file resides in the Windows\SYSTEM subdirectory.
	
	- The machine has a duplicate COMMAND.COM file (dated prior to your current
	  version) in the Windows directory.
	
	- You have a WINOA386.MOD file in both the Windows and Windows\SYSTEM
	  subdirectory.
	
	WORKAROUND
	==========
	
	To correct these problems, see the appropriate section below.
	
	Wrong Video Grabber
	-------------------
	
	The SYSTEM.INI file contains three entries that specify which video driver you
	use in the 386 enhanced mode of Windows. These are the "386Grabber" and
	"display.drv" entries in the [boot] section and the "display" entry in the
	[386Enh] section. The error message above usually occurs when one of these
	entries is not consistent with the others--usually due to using a Windows
	version 3.0 video driver with Windows version 3.1.
	
	If you are using display drivers not included with Windows 3.1, contact your
	display adapter manufacturer to get an updated driver installation disk.
	
	In many cases, you can work around this problem by manually installing the
	version 3.0 driver files that are included on the Windows 3.1 Setup disks. If
	your display driver works in Windows 3.0 using the standard VGA virtual display
	device file (specified by "display=*vddvga" in the [386Enh] section of the
	SYSTEM.INI file), then do the following:
	
	1. Copy and expand the VDDVGA30.386 file from the Windows 3.1 Setup Disk 1
	  (5.25-inch or 3.5-inch disk set) into your Windows 3.1 SYSTEM subdirectory.
	
	  To expand the VDDVGA30.386 file, use the Expand utility (EXPAND.EXE) in the
	  Windows directory. If you are unsure of the syntax for using Expand, type
	  "expand /?" (without the quotation marks) at the MS-DOS command prompt.
	
	2. Change the line "display=..." in the [386Enh] section of SYSTEM.INI to read:
	
	  display=VDDVGA30.386
	
	If your display driver works in Windows 3.0 using the standard VGA grabber file
	(specified by "386Grabber=VGA.3GR" in the [boot] section of the SYSTEM.INI
	file), then do the following:
	
	1. Copy and expand the VGA30.3GR file from the Windows 3.1 Setup disks (Disk 3
	  for the 5.25-inch disk set and Disk 2 for the 3.5-inch disk set) into your
	  Windows 3.1 SYSTEM subdirectory.
	
	  To expand the VGA30.3GR file, use the Expand utility (EXPAND.EXE) in the
	  Windows directory. If you are unsure of the syntax for using Expand, type
	  "expand /?" (without the quotation marks) at the MS-DOS command prompt.
	
	2. Change the line "386Grabber=" in the [boot] section of the SYSTEM.INI file to
	  read:
	
	  386Grabber=VGA30.3GR
	
	Old WINOA386.MOD File
	---------------------
	
	To determine if this is the problem, do the following:
	
	1. Run File Manager.
	
	2. Change to the root directory (C:\).
	
	3. From the File menu, choose Search.
	
	4. In the Search For box, type "*.MOD" (without the quotation marks). Make sure
	  the Search All Subdirectories check box is selected, and choose the OK
	  button.
	
	5. When the Search Results window appears, choose All File Details from the View
	  menu.
	
	6. If the WINOA386.MOD file is not in the Windows\SYSTEM directory, or if the
	  file is has a date earlier than March 10, 1992, delete it.
	
	7. If you deleted a file in step 6, copy and expand the WINOA386.MOD file from
	  the Windows 3.1 Setup Disk 4 (5.25-inch or 3.5-inch disk set) into your
	  Windows 3.1 SYSTEM subdirectory.
	
	  To expand the WINOA386.MOD file, use the Expand utility (EXPAND.EXE) in the
	  Windows directory. If you are unsure of the syntax for using Expand, type
	  "expand /?" (without the quotation marks) at the MS-DOS command prompt.
	
	Duplicate COMMAND.COM File
	--------------------------
	
	You should have two COMMAND.COM files on your machine: one in your root directory
	and the other in the directory that contains your MS-DOS files (typically
	C:\DOS). If you have an extra COMMAND.COM file, it is probably in your Windows
	directory and it is probably dated prior to the version of COMMAND.COM loaded
	when you booted MS-DOS. You need to delete this file.
	
	To verify that this is the problem, double-click on the COMMAND.COM file in the
	root directory and it will launch a virtual MS-DOS machine.
	
	Duplicate WINOA386.MOD File
	---------------------------
	
	To work correct this situation, delete the WINOA386.MOD file from the Windows
	directory.
	
	Additional query words: tshoot 3.10 3.1 3.00 3.0 3.11 applications c:\windows
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin310 kbWin311 kbWFW310 kbWFW311
	Version           : :3.1,3.11
	
	=============================================================================
	
