---
layout: page
title: "Q83361: Problems with Changing to EGA Display from Within Windows"
permalink: kb/083/Q83361/
---

## Q83361: Problems with Changing to EGA Display from Within Windows

	Article: Q83361
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
	
	When using the Windows 3.0 or 3.1 Setup program to change from another video
	type to EGA, you may encounter problems when trying to run non-Windows-based
	applications in real (version 3.0 only) or standard mode (versions 3.0 and
	3.1).
	
	If this change is made through the Windows Setup program, the device line for
	EGA.SYS is not added to the CONFIG.SYS file. The loading of this device file is
	essential to non-Windows-based applications running within Windows 3.0.
	
	MORE INFORMATION
	================
	
	The correct way to install both the video driver and the EGA.SYS file is to run
	the Setup program from the Windows MS-DOS Prompt and allow the Setup program to
	modify the CONFIG.SYS file.
	
	If the EGA video driver is already installed from the Windows Setup program
	inside Windows, either of the following processes may correct the problem:
	
	1. Run Setup from the Windows MS-DOS Prompt and select a previously unselected
	  video driver. (If the display type that was installed before EGA is chosen,
	  Setup will not ask for any disks and the SYSTEM.INI file will not be
	  updated.)
	
	2. Once Setup is finished, run Setup again from the Windows MS-DOS Prompt and
	  change the video driver back to EGA. Allow Setup to modify the CONFIG.SYS
	  file when prompted.
	
	-or-
	
	1. Because the EGA.SYS is the only utility missing, the Windows EXPAND.EXE
	  utility can be used to expand EGA.SYS from the Windows installation disks.
	  Manually insert the device line for EGA.SYS into the CONFIG.SYS file.
	
	2. The EXPAND utility is located on Disk 2 of the 5.25-inch (1.2 MB) and
	  3.5-inch (1.44 MB) disks, and Disk 5 of the 3.5-inch (720K) disks. Copy the
	  EXPAND.EXE file to the Windows directory. The EGA.SY$ file (note the $ as the
	  last letter in the compressed EGA.SYS file) is located on Disk 3 of the
	  5.25-inch disks and on Disk 5 of the 3.5-inch disks.
	
	3. From the WINDOWS directory, type the following to expand the compressed
	  EGA.SY$ file
	
	  c:\windows>expand a:ega.sy$ c:\windows\ega.sys
	
	  where c: is the drive and \windows is the installed location of Windows 3.0.
	
	4. Use a text editor such as the Windows Notepad to add the following line to
	  the CONFIG.SYS file:
	
	  device=c:\windows\ega.sys
	
	KBCategory: kbsetup kbdisplay kbenv
	KBSubcategory: win30 win31 windrvr
	
	Additional query words: 3.00 3.00a 3.10 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
