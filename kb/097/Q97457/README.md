---
layout: page
title: "Q97457: MS-DOS Err Msg: Setup Did Not Find Windows in the Path..."
permalink: /kb/097/Q97457/
---

## Q97457: MS-DOS Err Msg: Setup Did Not Find Windows in the Path...

	Article: Q97457
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.21,6.22; WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21, 6.22 
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You can install the MS-DOS 6.0 and later optional programs (Anti-Virus,
	Undelete, and Backup) with either SETUP or SETUP /E. If you install any of these
	programs using either command, you may receive the following error message:
	
	  Setup Did Not Find Windows in the Path Specified
	
	CAUSE
	=====
	
	One or more of the optional program(s) you attempted to install was the
	Windows-based version, and one of the following files is missing from your
	computer system:
	
	  SYSTEM.INI
	  PROGMAN.INI
	
	If you use Norton Desktop for Windows or another replacement shell for Program
	Manager, you receive the above error message if the PROGMAN.INI file has been
	deleted.
	
	You may also receive the above error message if Windows has been installed to the
	root directory of a logical drive.
	
	WORKAROUND
	==========
	
	Missing PROGMAN.INI
	-------------------
	
	If the PROGMAN.INI file has been deleted and you cannot restore it, you can
	re-create the PROGMAN.INI file by using the following steps:
	
	1. At the MS-DOS command prompt in the Windows directory, type the following,
	  pressing ENTER after each line:
	
	  " copy con progman.ini [groups] " (without the quotation marks)
	
	2. Press CTRL+Z, then press ENTER.
	
	3. Run SETUP or SETUP /E again.
	
	Missing SYSTEM.INI
	------------------
	
	If the SYSTEM.INI file has been deleted and you cannot restore, you can re-create
	the SYSTEM.INI file by using the following steps:
	
	1. Expand the file SYSTEM.SR_ from the original Windows 3.1 disks to your
	  Windows directory with the following command
	
	  " <destination>:\windows\expand <drive>:system.sr_
	  <destination>:
	  \windows\system.ini " (without the quotation marks)
	
	  where <destination> is your hard disk drive and <drive> is your
	  floppy disk drive containing the original Windows 3.1 disk.
	
	  NOTE: SYSTEM.SR_ is found on Disk 1 on the 1.44-megabyte 3.5-inch disk set and
	  on Disk 2 of the 1.2-megabyte 5.25-inch disk set.
	
	2. Change to the drive containing Windows, and then change to the Windows
	  directory.
	
	3. Type "setup" (without the quotation marks) to start the MS-DOS portion of
	  Windows Setup.
	
	4. Select the correct hardware options for your system. (The options are blank
	  by default.)
	
	5. Accept your changes.
	
	  NOTE: At this point, you can have Setup copy new drivers.
	
	6. Open the new SYSTEM.INI file in a text editor, such as Microsoft MS-DOS
	  Editor, and make the following changes:
	
	  a. In the [BOOT] section, add PROGMAN.EXE to the SHELL= line.
	
	  b. In the [BOOT] section, remove or remark out the Taskman.exe= line.
	
	7. Run SETUP or SETUP /E again.
	
	Windows Was Installed in the Root Directory
	-------------------------------------------
	
	If Windows has been installed to the root directory of a logical drive, you can
	work around the problem by specifying the root directory name, followed by a
	period. For example, if Windows has been installed in the root directory of
	drive D, type "D:\." (without the quotation marks).
	
	Norton Desktop for Windows (NDW) is manufactured by Symantec, a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	Additional query words: 6.22 6.00 undelete 6.20 ndw
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311 kbWFW310 kbWFW311 kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22; WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
