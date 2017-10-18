---
layout: page
title: "Q104252: Running MS-DOS 6.2 Step-Up over an OEM Version of MS-DOS 6.0"
permalink: kb/104/Q104252/
---

## Q104252: Running MS-DOS 6.2 Step-Up over an OEM Version of MS-DOS 6.0

	Article: Q104252
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.2,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.2, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	
	This information applies to both Microsoft DoubleSpace and Microsoft DriveSpace.
	For MS-DOS 6.22, use DRVSPACE in place of DBLSPACE for commands and filenames.
	
	SYMPTOMS
	========
	
	When you try to install MS-DOS 6.2 Step-Up over an original equipment
	manufacturer (OEM) version of MS-DOS 6.0, you may receive one of the following
	error messages:
	
	  In order to run the MS-DOS 6.2 single-disk upgrade, you must already have
	  MS-DOS 6.0 installed on your system.
	
	  -or-
	
	  Cannot Update File. Setup could not update the following file to MS-DOS 6.2:
	
	  <filename>
	
	  Although Setup can continue without updating this file, your MS-DOS 6.2
	  installation will be incomplete.
	
	CAUSE
	=====
	
	If you receive the first error message noted above, you either have the OEM
	"base version" of MS-DOS 6.0, or your OEM has modified the core MS-DOS 6.2
	system files (IO.SYS, MSDOS.SYS, and COMMAND.COM). If your OEM version of MS-DOS
	6.2 falls into either of these categories, you must either obtain your OEM's
	version of MS-DOS 6.2 or obtain the MS-DOS 6.2 Upgrade. If you choose to obtain
	the MS-DOS 6.2 Upgrade, you may lose some MS-DOS functionality or features added
	to MS-DOS 6.0 by your OEM.
	
	NOTE: Step-Up cannot upgrade the OEM base version of MS-DOS 6.0 because the OEM
	base version does not include DoubleSpace, Microsoft Backup, Microsoft
	Anti-Virus, and Microsoft Undelete.
	
	If you receive the second error message noted above, your OEM has modified one or
	more of the MS-DOS 6.2 files but has not modified the core system files. In this
	case, you can successfully install MS-DOS 6.2, but some files will not be
	updated. You may be able to work around this situation by copying the MS-DOS 6.0
	OEM version of the files that were not updated from the C:\OLD_DOS.1 directory
	to the C:\DOS directory and then using SETVER.EXE to report MS-DOS as version
	6.0 to the program files that were not updated. Before doing so, contact your
	OEM to determine if this would be a safe and practical workaround.
	
	The following OEMs have modified MS-DOS 6.0 in some manner:
	
	
	- Compaq
	
	- Dell
	
	- Texas Instruments
	
	- Toshiba
	
	MORE INFORMATION
	================
	
	
	Dell
	----
	
	MS-DOS 6.2 Step-Up installs successfully, but you lose OEM-added functionality
	with the following programs:
	
	  KEYB.COM
	  POWER.EXE
	
	Texas Instruments (TI)
	----------------------
	
	TI modified core MS-DOS system files. You must either obtain the OEM version of
	MS-DOS 6.2 or the MS-DOS 6.2 Upgrade. With the MS-DOS 6.2 Upgrade, you may lose
	functionality added by TI. Texas Instruments modified the following MS-DOS 6.0
	files:
	
	  COMMAND.COM
	  DOSSETUP.INI
	  FORMAT.COM
	  IO.SYS
	  PRINT.EXE
	  SETUP.OEM
	  SYS.COM
	
	
	Toshiba
	-------
	
	Toshiba has released the Toshiba Special Enhancements Package (TSEP)for MS-DOS
	6.2. This release updates an installation of MS-DOS 6.2, adding Toshiba's
	special enhancements for complete compatibility with Toshiba's proprietary
	features. To use TSEP, your specific Toshiba model must be compatible with this
	release of TSEP and must already have MS-DOS 6.2 or the MS-DOS 6.2 Step-Up
	package installed on it.
	
	To obtain TSEP, download TSEP62.EXE from the Toshiba bulletin board at (714)
	837-4408. For more information, contact Toshiba Technical Support.
	
	Toshiba replaces the following MS-DOS 6.2 files:
	
	  IO.SYS
	  ANSI.SYS
	  DISPLAY.SYS
	  KEYBOARD.SYS
	  EGA.SYS
	  GRAPHICS.COM
	  GRAPHICS.PRO
	  KEYB.COM
	  MODE.COM
	  EGA.CPI
	  CGA.GRB
	  EGA.GRB
	  EGAMONO.GRB
	  MONO.GRB
	  VGA.GRB
	  VGAMONO.GRB
	  EMM386.EXE
	  FDISK.EXE
	  SMARTDRV.EXE
	  FORMAT.COM
	
	Additional query words: 6.20 "incorrect msdos.sys or io.sys"
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS622 kbMSDOS620
	Version           : MS-DOS:6.2,6.22
	
	=============================================================================
	
