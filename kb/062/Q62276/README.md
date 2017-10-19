---
layout: page
title: "Q62276: Nonexpanded Windows Mouse Driver Freezes Machine"
permalink: /kb/062/Q62276/
---

## Q62276: Nonexpanded Windows Mouse Driver Freezes Machine

	Article: Q62276
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-SEP-1999
	
	3.00 3.00a 3.10 3.11
	
	WINDOWS
	
	kbusage kbtool
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Windows files must be decompressed before they can be used by the
	computer. If you copy a compressed mouse driver from the Windows disks to your
	hard drive without decompressing the driver first, adding it to your CONFIG.SYS
	file, and then rebooting the machine, the machine hangs.
	
	Rebooting the machine, or turning it off and on again does not solve the problem
	because the unreadable file prevents the computer from going through the startup
	procedure correctly.
	
	MORE INFORMATION
	================
	
	To correct this situation, do the following:
	
	1. Boot from an MS-DOS floppy disk.
	
	2. Delete the compressed mouse driver file. (Depending on your Windows version,
	  compressed files have "$" or "_".) If the compressed file was renamed, giving
	  it the correct last letter, check the size of the file against the compressed
	  file on your floppies.
	
	3. Copy EXPAND.EXE from Windows Disk 2 onto your hard drive.
	
	4. Insert the disk with the file to be expanded into a floppy drive.
	
	5. Type the following, where X: is the source disk, and press ENTER:
	
	  
	
	  EXPAND X:FILENAME.SY$ C:\WINDIRECTORY\FILENAME.SYS (Windows 3.0)
	  EXPAND X:FILENAME.SY_ C:\WINDIRECTORY\FILENAME.SYS (Windows 3.1)
	
	  FILENAME.SY$ is the name of the compressed file to be copied.
	  WINDIRECTORY is the name of your Windows directory.
	  FILENAME.SYS is the renamed file that appears on the hard drive.
	
	  The following are examples:
	
	  EXPAND A:\MOUSE.SY$ C:\WINDOWS\MOUSE.SYS (Windows 3.0, 3.0a)
	  EXPAND A:\MOUSE.SY_ C:\WINDOWS\MOUSE.SYS (Windows 3.1, 3.11)
	
	NOTE: The information about EXPAND.EXE is covered in the Windows version 3.0
	README.TXT in the "Copying Files from the Windows 3.00 Disks" section.
	
	Additional query words: 3.00 3.00a 3.10 3.11 hangs crashes freezes locksup locks up
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
