---
layout: page
title: "Q100910: File Manager Modified When No Optional Utilities Installed"
permalink: kb/100/Q100910/
---

## Q100910: File Manager Modified When No Optional Utilities Installed

	Article: Q100910
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.21,6.22; WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21, 6.22 
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This information applies to both Microsoft DoubleSpace and Microsoft DriveSpace.
	For MS-DOS 6.22, use DRVSPACE in place of DBLSPACE for commands and filenames.
	
	When you install MS-DOS on a computer running Windows 3.1, MS-DOS Upgrade Setup
	modifies Windows File Manager to include a Tools menu and an Undelete command,
	even if you did not choose to install the optional MS-DOS utilities (Backup,
	Undelete, and Anti-Virus). Microsoft Windows for Workgroups users also have four
	tool icons added to the File Manager toolbar.
	
	MORE INFORMATION
	================
	
	MS-DOS Upgrade Setup offers the option to install the Windows and MS-DOS
	versions of the Microsoft Backup, Undelete, and Anti-Virus utilities. Regardless
	of which option you select (Windows only, MS-DOS only, Windows and MS-DOS, or
	None), MS-DOS 6 Setup installs the MSTOOLS.DLL file and modifies Windows File
	Manager. Setup creates a Tools menu containing the Backup, Anti-Virus, and
	DoubleSpace Info commands and adds the Undelete command to the File menu.
	
	If you choose a menu item or a tool for an optional utility that has not been
	installed, you receive a "Cannot Run File" error message stating the utility was
	not found in the MS-DOS directory. This error message also explains that to
	install the utility, you should run SETUP /E from the MS-DOS command prompt.
	
	Additional query words: msbackup 6.22 6.00 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin310 kbWin311 kbWFW310 kbWFW311 kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22; WINDOWS:3.1,3.11
	
	=============================================================================
	
