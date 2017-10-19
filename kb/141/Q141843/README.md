---
layout: page
title: "Q141843: Norton AntiVirus 95 May Cause Problems on Dual-Boot Computer"
permalink: /kb/141/Q141843/
---

## Q141843: Norton AntiVirus 95 May Cause Problems on Dual-Boot Computer

	Article: Q141843
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95 appscomp kbAppCompatibility
	Last Modified: 28-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you add the line "BootMulti=1" to the [Options] section of the Msdos.sys file
	and then try to boot to the previous version of MS-DOS on the computer, Windows
	95 may start normally instead.
	
	CAUSE
	=====
	
	This behavior can occur if Norton AntiVirus for Windows 95 version 1.0 is
	installed on the computer. AntiVirus may overwrite the MS-DOS versions of the
	Command.com, Io.sys, Msdos.sys, Autoexec.bat, and Config.sys files with its own
	version of these files. AntiVirus inoculates the Io.sys and Msdos.sys files by
	default. However, other files may have been added to the inoculation list by
	earlier versions of AntiVirus.
	
	RESOLUTION
	==========
	
	To work around this behavior, follow these steps:
	
	1. Remove the Master Boot Record (MBR) and the Io.sys, Msdos.sys, Command.com,
	  Autoexec.bat, and Config.sys files from the AntiVirus inoculation list using
	  Norton AntiVirus for Windows 95.
	
	2. Start your computer with the MS-DOS version 6.x Upgrade Disk 1 in drive A.
	  Type the following lines at the command prompt:
	
	  " a:\attrib c:\msdos.sys -s -h -r
	  copy c:\msdos.sys c:\msdos.xxx
	  a:\sys a: c: " (without the quotation marks)
	
	  NOTE: If drive C is compressed and is currently mounted, you need to use the
	  SYS command to make the host drive for drive C bootable as well.
	
	3. Type the following lines at the command prompt:
	
	  " a:\attrib c:\io.sys -s -h -r
	  a:\attrib c:\msdos.sys -s -h -r
	  a:\attrib c:\io.dos -s -h -r
	  a:\attrib c:\msdos.dos -s -h -r
	  del c:\io.dos
	  del c:\msdos.dos
	  copy c:\io.sys c:\io.dos
	  copy c:\msdos.sys c:\msdos.dos " (without the quotation marks)
	
	4. Restart your computer using the Windows 95 Startup Disk, and then type the
	  following line at the command prompt:
	
	  " a:\sys a: c: " (without the quotation marks)
	
	  NOTE: If drive C is compressed and is currently mounted, you need to use the
	  SYS command to make the host drive for drive C bootable as well.
	
	5. Type the following lines at the command prompt:
	
	  " a:\attrib c:\msdos.sys -s -h -r
	  copy c:\msdos.xxx c:\msdos.sys " (without the quotation marks)
	
	6. Restart your computer.
	
	MORE INFORMATION
	================
	
	Norton AntiVirus for Windows 95 version 1.0 makes a backup copy of system
	configuration, system, and other files on the inoculation list. By default,
	these files are stored in the C:\Ncdtree folder. When the computer starts, the
	command "c:\progra~1\norton~1\navboot.exe" in the Autoexec.bat file is carried
	out. Navboot.exe compares the backup files in the C:\Ndtree folder with the
	files that are in use to determine if they have changed.
	
	If AntiVirus senses that a change has been made to these files or that an attempt
	was made to write to the MBR, it displays a virus warning message and prompts
	you to inoculate, repair, or continue. If you choose to repair, AntiVirus
	reverses the changes by restoring from the backup files. If you choose to
	inoculate, the program updates the backup files to the new versions. If you
	choose continue, nothing is done and the warning message appears again during
	the next boot.
	
	The problem usually occurs when Norton AntiVirus 3.0 was installed prior to
	installing Norton AntiVirus for Windows 95. Both programs use the same folder to
	store inoculated files and data. By default, AntiVirus 3.0 makes a backup of the
	Command.com file (and other system files) in the C:\Ncdtree folder where Norton
	AntiVirus for Windows 95 later finds it.
	
	
	The third-party product discussed in this article is manufactured by a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	======================================================================
	Keywords          : win95 appscomp kbAppCompatibility 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
