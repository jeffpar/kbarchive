---
layout: page
title: "Q103562: Using CTRL+F8 to Process Configuration Files on Host Drive"
permalink: /kb/103/Q103562/
---

## Q103562: Using CTRL+F8 to Process Configuration Files on Host Drive

	Article: Q103562
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.2,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.2, 6.22 
	-------------------------------------------------------------------------------
	
	This information applies to both Microsoft DoubleSpace and Microsoft
	DriveSpace. For MS-DOS 6.22, use DRVSPACE in place of DBLSPACE for commands
	and filenames.
	
	SUMMARY
	=======
	
	After you press CTRL+F8 to start your system without loading the DoubleSpace
	component (DBLSPACE.BIN), you are given the option to process the configuration
	files (CONFIG.SYS and AUTOEXEC.BAT) on the host drive (if there are any).
	
	For example, you can have configuration files on the DoubleSpace- compressed
	drive C and configuration files for a different configuration (such as playing
	games) on the host drive (such as H).
	
	MORE INFORMATION
	================
	
	When you interactively boot your computer without DoubleSpace (CTRL+F8), MS- DOS
	interactively processes the configuration files on drive C, which are normally
	seen on the host drive H. If you are using CTRL+F8 to simply get the
	configuration files processed but you don't want to step through them, press
	ESC. (This basically answers yes to all additional yes/no prompts).
	
	NOTE: Any device drivers or terminate-and-stay-resident (TSR) programs referenced
	in the configuration files on the host drive must also be located on the host
	drive (or an uncompressed drive). For example, if you have a CONFIG.SYS file on
	H referencing C:\DOS\HIMEM.SYS, you need to create a DOS directory on the host
	drive and copy HIMEM.SYS from C to H.
	
	Additional query words: 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS622 kbMSDOS620
	Version           : MS-DOS:6.2,6.22
	
	=============================================================================
	
