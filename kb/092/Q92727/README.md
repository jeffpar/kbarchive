---
layout: page
title: "Q92727: Using Norton Utilities with Windows 3.1"
permalink: kb/092/Q92727/
---

## Q92727: Using Norton Utilities with Windows 3.1

	Article: Q92727
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	This article discusses incompatibilities between Norton Utilities and Windows
	3.1.
	
	MORE INFORMATION
	================
	
	Disk Monitor
	------------
	
	Norton Utilities Disk Monitor can cause problems with SMARTDrive if you are
	running Microsoft Windows operating system version 3.1. Turning off write-behind
	caching or removing Disk Monitor corrects these problems. If you try to write to
	the protected drive, you encounter an error and your system fails. If you want
	to write to and cache a protected drive, add the drive letter to the SMARTDRV
	command line in your AUTOEXEC.BAT file. For example, if drive D is protected by
	Disk Monitor, add the following line to your AUTOEXEC.BAT file:
	
	  SMARTDRV D
	
	NUCONFIG
	--------
	
	The program NUCONFIG.EXE that comes with Norton Utilities versions 6.x doesn't
	run correctly with Windows 3.1. This program configures NCACHE.EXE, which should
	not be used with Windows 3.1. You should use SMARTDRV.EXE or another cache that
	is Windows compatible.
	
	NUCONFIG may appear to stop responding (hang) when run with Windows 3.1. In most
	cases, if you wait long enough, the program does return. This application may
	also cause a system integrity violation error.
	
	Norton Command Center
	---------------------
	
	The Norton Command Center (NCC) in Norton Utilities version 4.5 doesn't correctly
	reset the display if you are using 40-column mode. To work around this problem,
	issue the command again, or upgrade to Norton version 5.0 or later.
	
	TIMEMARK
	--------
	
	Norton TIMEMARK cannot keep track of time that has passed between the use of the
	Start parameter in one command prompt and the use of the Stop parameter in
	another command prompt in Windows 3.1 standard mode.
	
	NCACHE
	------
	
	Norton Utilities Version 5.0 (DISKREET, NCACHE)
	-----------------------------------------------
	
	This program is incompatible with Windows 3.1 and may cause your system to fail.
	It is recommended that you upgrade to the most recent version of Norton
	Utilities to correct such problems.
	
	Norton Utilities Version 6.01 (NCACHE)
	--------------------------------------
	
	Some versions of NCACHE may prevent you from setting up or starting Windows 3.1.
	When Windows is running in standard mode, your system may fail, especially if
	NCACHE is set up as an EMS cache. Setting up NCACHE as an EMS cache is not
	recommended. Setting up NCACHE as an XMS cache may correct this problem.
	
	You may also encounter additional problems using NCACHE. New versions may correct
	these problems. For an updated version of NCACHE, contact Symantec Corporation.
	In the meantime, you can use SMARTDrive, which is provided with Windows 3.1.
	
	Norton Utilities Version 6.01 (DISKMON)
	---------------------------------------
	
	The text below discusses information from the Symantec application note #4103
	about Norton Utilities version 6.01 and Microsoft Windows operating system
	version 3.1.
	
	1. NCACHE, the Norton disk caching software, may cause system lockups when
	  Windows 3.1 is run in standard mode. Norton recommends configuring NCACHE for
	  extended memory. If the problem continues, disable the Write cache. Consult
	  your Norton manual for instructions.
	
	2. NCACHE is incompatible with Windows 3.1 32-bit Disk Access. If using 32-bit
	  Disk Access, then use SMARTDRV.EXE version 4.0.
	
	3. The following error message will occur if you run Norton's Calibrate utility
	  while SMARTDRV.EXE is caching the drive:
	
	  Disk Mapping Error
	
	  Disable SMARTDRV.EXE when using the Calibrate program.
	
	4. Microsoft recommends not running Norton Disk Monitor, DISKMON.EXE, while
	  Windows is running. It may cause a prolonged beeping noise.
	
	5. Erase Protect is normally configured to use as much free hard drive space as
	  necessary, this sometimes causes Windows to experience printing and temporary
	  swap file problems, because of lack of space for temporary files. Norton
	  recommends configuring Erase Protect not to protect files with the extensions
	  of .TMP and .SWP, and limiting the size of the of Erase Protect to 2048.
	  Consult your Norton manual for instructions.
	
	
	Norton Shell
	------------
	
	The Norton Shell should not be used to start Windows 3.1. Microsoft recommends
	starting Windows operating system version 3.1 from the command prompt or the
	AUTOEXEC.BAT file.
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	Additional query words: appnote 3.10 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
