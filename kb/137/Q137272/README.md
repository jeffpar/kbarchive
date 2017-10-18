---
layout: page
title: "Q137272: Damaged Cabinet File on Non-DMF MS Plus! Disk Set"
permalink: kb/137/Q137272/
---

## Q137272: Damaged Cabinet File on Non-DMF MS Plus! Disk Set

	Article: Q137272
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Plus! for Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to install Microsoft Plus! for Windows 95 using a 3.5-inch standard
	(non-DMF) 1.44-MB disk set, you may receive the following error message when
	Setup reaches eight percent complete:
	
	  The compressed file '<drive>:\plus_1.CAB' cannot be decompressed and
	  may be corrupted.
	
	After Setup closes and you restart the computer, you may receive the following
	error message when you try to perform a DriveSpace operation:
	
	  The compression driver that is currently loaded is incompatible with your
	  version of Windows compression. ID Number: DRVSPACE484
	
	In addition, you may receive "Out of memory" error messages if your Windows swap
	file is located on a compressed drive, and the Disk Compression status line on
	the Performance tab in System properties may report that compressed drives are
	being access in MS-DOS Compatibility mode.
	
	CAUSE
	=====
	
	The cabinet (.cab) file located on disk 1 is damaged. The disk sets known to
	have this problem have a disk assembly number of 320-051-013. The disk assembly
	number is located in the lower right corner of the disk, above the words "All
	rights reserved."
	
	The damaged cabinet file prevents Setup from copying the protected-mode
	DriveSpace 3 driver (Drvspacx.vxd) to the hard disk, and causes Setup to fail.
	When you restart your computer, the real-mode DriveSpace 3 driver is loaded,
	causing your compressed drives to use MS-DOS Compatibility mode. This driver is
	incompatible with the Windows 95 version of DriveSpace that is currently
	installed, preventing you from running DriveSpace in Windows 95.
	
	RESOLUTION
	==========
	
	Remove the Program Files\Plus! folder that was created by Setup, and then
	reinstall Microsoft Plus from a CD-ROM, a 3.5-inch DMF disk set, or a 3.5- inch
	standard (non-DMF) disk set that does not have this problem. To obtain a
	replacement non-DMF disk set that does not have this problem, please contact
	Microsoft Product Support.
	
	
	If you are using DriveSpace and you cannot reinstall Microsoft Plus! from a
	CD-ROM, a 3.5-inch DMF disk set, or a 3.5-inch standard (non-DMF) disk set that
	does not have this problem right away, restore the Windows 95 DriveSpace files
	that were replaced by Microsoft Plus! Setup before you use Windows 95. To do so,
	start your computer at a command prompt, change to the drive containing Windows
	95, and type the following commands. Press ENTER after each command.
	
	NOTE: These commands assume that your Windows folder is named Windows. If your
	Windows folder is named something else, substitute the name of your Windows
	folder in the following commands.
	
	  cd \windows\command
	  copy drvbin.w95 drvspace.bin /y
	  copy dblbin.w95 dblspace.bin /y
	  copy drvsys.w95 drvspace.sys /y
	  copy dblsys.w95 dblspace.sys /y
	  cd \windows\system\iosubsys
	  copy drvvxd.w95 drvspacx.vxd /y
	  cd\ 
	  attrib *.w95 -s -h -r
	  attrib *.bin -s -h -r
	  copy drvbin.w95 drvspace.bin /y
	  copy dblbin.w95 dblspace.bin /y
	
	NOTE: Depending on the version of MS-DOS or Windows that was originally used to
	compress your drive, some of the .w95 files referenced in the above commands may
	not exist. If you receive a "File not found" error message after typing one of
	the above commands, try typing the command again to see if you typed it
	correctly. If you receive the same error message again, move on to the next
	command.
	
	If the drive that contains the Windows folder is not also the physical boot
	drive, change to the physical boot drive and type the following commands. Press
	ENTER after each command:
	
	  cd\ 
	  attrib *.w95 -s -h -r
	  attrib *.bin -s -h -r
	  copy drvbin.w95 drvspace.bin /y
	  copy dblbin.w95 dblspace.bin /y
	
	After you type these commands, restart your computer.
	
	Additional query words: corrupt
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbGamesSearch kbPlusSearch kbZNotKeyword3 kbPlus95
	
	=============================================================================
	
