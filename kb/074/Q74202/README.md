---
layout: page
title: "Q74202: Contents of the MS-DOS 5.x and 6.x Upgrade Uninstall Disk"
permalink: /kb/074/Q74202/
---

## Q74202: Contents of the MS-DOS 5.x and 6.x Upgrade Uninstall Disk

{% raw %}

	Article: Q74202
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.0,5.0a,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following is a list of the contents of the Uninstall disk created when you
	install Microsoft MS-DOS 5 Upgrade, MS-DOS 6 Upgrade, MS-DOS 6.2 Upgrade, MS-DOS
	6.2 Step-Up, MS-DOS 6.21 Upgrade, MS-DOS 6.22 Upgrade, or MS-DOS 6.22 Step-Up.
	
	  Filename              Description
	  -----------------------------------------------------------------------
	
	  IO.SYS       (hidden)  MS-DOS system file
	  MSDOS.SYS    (hidden)  MS-DOS system file
	  DBLSPACE.BIN (hidden)  MS-DOS system file (MS-DOS 6.x only)
	  DRVSPACE.BIN*(hidden)  MS-DOS system file (MS-DOS 6.22 only)
	  COMMAND.COM            MS-DOS system file
	  AUTOEXEC.BAT           Starts Uninstall
	  UNINSTAL.EXE           Uninstall program
	  SETUP.INI              Binary data file for Uninstall (MS-DOS 5 only)
	  DOSSETUP.INI           Binary data file for Uninstall (MS-DOS 6.x only)
	  UPDATE.INI             Binary data file for Uninstall (MS-DOS 6.2 and
	                         6.22 Step-Up only)
	  GLOBAL.DAT             Data structure needed by Uninstall
	  BIOS.OLD               Original IO.SYS file       (optional)
	  DOS.OLD                Original MSDOS.SYS file    (optional)
	  COMMAND.DAT            Original COMMAND.COM file  (optional)
	  AUTOEXEC.DAT           Original AUTOEXEC.BAT file (optional)
	  CONFIG.DAT             Original CONFIG.SYS file   (optional)
	  WINA20.386             Original WINA20.386 file   (optional)
	  MBOOT0.DAT             Original master boot record on first
	                         physical hard drive
	  PBOOT.DAT              Original boot record on boot partition
	  BPB0.DAT               Partition and boot record information from
	                         first physical hard drive
	  MBOOT1.DAT             Original master boot record on second
	                         physical hard drive (optional)
	  BPB1.DAT               Partition and boot record information from
	                         second physical hard drive (optional)                    
	  ROOT.DAT               Original root directory from boot partition
	  FAT.DAT                Original file allocation table from boot
	                         partition
	  DBLSPBIN.HST**         Original DBLSPACE.BIN file (host drive)
	  DBLSPINI.HST***        Original DBLSPACE.INI file (host drive)
	  DRVSPBIN.HST****       Original DRVSPACE.BIN file (host drive)
	  DRVSPINI.HST****       Original DRVSPACE.INI file (host drive)
	
	  * This file is present when you install MS-DOS 6.0, 6.2, 6.21, or 6.22 over
	  MS-DOS 6.x and you are using DoubleSpace.
	
	  ** This file is present when you install MS-DOS 6.22 over MS-DOS 6.22 and you
	  are using DriveSpace.
	
	  *** This file is present when you install MS-DOS 6.22 over a previous copy of
	  MS-DOS 6.0 or 6.20 and you are using DoubleSpace.
	
	  **** This file is present when you install MS-DOS 6.22 over a previous copy of
	  MS-DOS 6.22 and you are using DriveSpace.
	
	Additional query words: 5 6 5.00 6.00 double space dblspace 6.20 step up 5.00a drive
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.0,5.0a,6.0,6.2,6.21,6.22
	
	=============================================================================
	

{% endraw %}
