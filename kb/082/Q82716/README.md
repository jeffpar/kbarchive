---
layout: page
title: "Q82716: Side Effects of an Aborted Windows 3.0 to 3.1 Upgrade"
permalink: kb/082/Q82716/
---

## Q82716: Side Effects of an Aborted Windows 3.0 to 3.1 Upgrade

	Article: Q82716
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The process of upgrading from Microsoft Windows operating system version 3.0 to
	Microsoft Windows operating system version 3.1 requires that the character
	(MS-DOS) mode portion of Setup disable certain Windows 3.0 components. These
	components must be replaced by new 3.1 components so that they don't interfere
	with the upgrade process. The Windows 3.1 Setup program temporarily disables the
	following items:
	
	- All fonts except the system, fixed pitch, and OEM fonts.
	
	- The shell (Program Manager, Norton Desktop for Windows, and so on).
	
	- The desktop bitmap.
	
	- Screen savers.
	
	- The Task Manager.
	
	- Installable drivers loaded through the drivers= line in the SYSTEM.INI file.
	
	If the Setup process is interrupted before the Windows graphical user interface
	(GUI) mode portion has been completed, some or all of the above items may not be
	properly reenabled.
	
	To regain Windows 3.0 functionality, the WIN.INI and SYSTEM.INI files must be
	edited as described below.
	
	MORE INFORMATION
	================
	
	To restore the disabled Windows 3.0 components that are controlled by the
	SYSTEM.INI file, rename the following lines in the SYSTEM.INI file; do NOT alter
	the information to the right of the equal sign:
	
	  Windows Component     Section       Line to Rename    New Name
	  -----------------     -------       --------------    --------
	
	  Shell                 [boot]        oldshell=         shell=
	
	  Task Manager          [boot]        oldtaskman=       taskman=
	
	  Installable drivers   [boot]        olddrivers=       drivers=
	
	To restore the disabled Windows 3.0 component that is controlled by the WIN.INI
	file, rename the following line in the WIN.INI file; do NOT alter the
	information to the right of the equal sign:
	
	  Windows Component     Section       Line to Rename    New Name
	  -----------------     -------       --------------    --------
	
	  Desktop bitmap        [desktop]     oldwallpaper=     wallpaper=
	
	  Note: The screen savers should always be properly reenabled, and
	  therefore should require no changes to be made.
	
	Fonts are disabled by renaming the [fonts] section in the WIN.INI file to
	[wt4gpi8s56bz]. Setup can encounter problems with reenabling the old fonts if
	the system memory is very low or if two aborted installations have occurred. If
	there is a problem, Setup will display a message box telling you that trouble
	was encountered when restoring the previously installed fonts and that the
	[fonts] and [wt4gpi8s56bz] sections must be merged by hand. This merging process
	is fairly simple.
	
	To merge the two sections, open the WIN.INI file in a text editor (for example,
	the MS-DOS version 5.0 Editor), and do the following:
	
	1. Delete any line from the [wt4gpi8s56bz] section that is duplicated in the
	  [fonts] section.
	
	2. Append the contents of the [wt4gpi8s56bz] section to the [fonts] section.
	
	3. Delete the [wt4gpi8s56bz] section.
	
	
	Additional query words: ndw 3.00 3.0 3.10 3.1 installation 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
