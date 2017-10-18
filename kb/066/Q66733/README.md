---
layout: page
title: "Q66733: Windows Err Msg: Setup Cannot Modify Your SYSTEM.INI..."
permalink: kb/066/Q66733/
---

## Q66733: Windows Err Msg: Setup Cannot Modify Your SYSTEM.INI...

	Article: Q66733
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 31-JAN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may receive the following error message during the setup of Microsoft
	Windows version 3.0:
	
	  Setup cannot modify your SYSTEM.INI. Delete WINVER.EXE and re-install Windows
	
	CAUSE
	=====
	
	This indicates that SETUP.EXE cannot modify or create the SYSTEM.INI file.
	However, you can't delete the WINVER.EXE file because it hasn't been created
	yet. The error message can be caused by the following:
	
	- Making backups (DISKCOPY.COM) off of the original Windows 3.0 installation
	  disks.
	
	- Disk 1 of the Windows installation disks is corrupted.
	
	- The computer system you are installing on has TSR
	  (terminate-and-stay-resident) software, an improper configuration, or a
	  similar problem.
	
	WORKAROUND
	==========
	
	Follow these troubleshooting steps:
	
	1. Delete all the related Windows 3.0 files in the directory where Windows was
	  partially installed.
	
	2. Remove any TSR software from the AUTOEXEC.BAT and CONFIG.SYS files.
	
	3. Re-install off of the original disks if the backups were used for the
	  corrupted installation or copy (do not use the DISKCOPY.COM file) the
	  original files to preformatted disks and install from them.
	
	4. If Disk 1 is corrupted, replace the disk and follow steps 1-3. To obtain a
	  replacement disk, call Microsoft Product Support Services at (425) 637-7098.
	
	MORE INFORMATION
	================
	
	The file SYSTEM.SRC is copied from the setup disks and renamed to SYSTEM.INI
	during Windows setup. If Windows SETUP.EXE cannot update the new SYSTEM.INI file
	with drivers and parameters, you will receive the above error message.
	
	You can tell that the SYSTEM.SRC file is corrupted when you try to expand the
	file and get an error message indicating that this file is already expanded. The
	SYSTEM.SRC file is located on Disk 1 and has a compressed file size of 470
	bytes. The expanded size should be 790 to 791 bytes in size.
	
	If you do expand the SYSTEM.SRC file, load this file into a text editor (such as
	Notepad) and verify that the file is complete with no strange characters or
	missing sections. It is normal for some sections (such as the Nonwindowsapp and
	Standard sections) to have no entries under them. It is also normal that some
	drivers will have no entries for them.
	
	Additional query words: 3.00 3.0 3.0a 3.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : :3.0,3.0a
	
	=============================================================================
	
