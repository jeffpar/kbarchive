---
layout: page
title: "Q75711: Windows Err Msg: Unable to Start Enhanced Mode... (Networks)"
permalink: kb/075/Q75711/
---

## Q75711: Windows Err Msg: Unable to Start Enhanced Mode... (Networks)

	Article: Q75711
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you run Windows in 386 enhanced mode on a workstation without a hard disk (a
	"diskless" workstation) over a Novell or DEC Pathworks network, Windows may
	generate the following error:
	
	  Unable to start Enhanced Mode Windows due to invalid path specification for
	  EMM386
	
	CAUSE
	=====
	
	Some networks, such as Novell and DEC Pathworks, set up diskless workstations by
	using a DOSGEN program that generates a system startup profile for each
	workstation. This profile is based upon the system configuration contained on
	the workstation's startup (boot) disk. Once generated, the profile is stored on
	the network server. However, if Windows is running on a diskless workstation
	under such a network, it has difficulty finding the EMM386.EXE and WINA20.386
	files and therefore cannot run in 386 enhanced mode.
	
	WORKAROUND
	==========
	
	You can alleviate this problem by correcting some settings in the CONFIG.SYS and
	SYSTEM.INI files.
	
	To correct the problem, you need to use two features of MS-DOS version 5.0 or 6.0
	in the boot disk that is used to generate the startup image for the diskless
	workstation, and you need to add an additional line needs to the SYSTEM.INI file
	in the Windows directory.
	
	On the boot disk used for generating the startup image, the CONFIG.SYS file must
	contain the /Y parameter on the EMM386.EXE line specifying the path to
	EMM386.EXE and the switches=/W line, as follows:
	
	     device=emm386.exe /y=u:\emm386.exe noems
	     switches=/w
	
	where "u" is the net drive letter.
	
	The path to the network server location of the WINA20.386 file must be specified
	in the [386Enh] section of the SYSTEM.INI file, as follows:
	
	       device=U:\wina20.386
	
	NOTE: Be sure to verify that the AUTOEXEC.BAT file used to boot the diskless
	workstation does not have a path that mentions drive A. If the AUTOEXEC.BAT
	points to drive A, the workstation attempts to map to that drive and is unable
	to boot. To correct this problem, remove any such portion of a path statement
	that points to drive A.
	
	Once these are correctly specified, the diskless workstation startup image can be
	generated, and Windows should run in 386 enhanced mode.
	
	MORE INFORMATION
	================
	
	Novell Networks
	---------------
	
	On Novell networks only, this error can be alleviated by mapping the original
	disk drive letter that the disk image NET$DOS.SYS was created from to a public
	directory containing EMM386.EXE. For instance, if the NET$DOS.SYS file was
	created from a floppy disk in drive A, remapping drive A to a public directory
	containing EMM386.EXE allows Windows to find it.
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	Additional query words: 3.00 5.00 3.00a 3.0 3.0a 3rdparty 4.1 EMM386 parameters parms remote boot rom diskless win31 6 6.0 6.00 3.10 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
