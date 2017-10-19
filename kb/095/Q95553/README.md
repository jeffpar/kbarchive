---
layout: page
title: "Q95553: Applications That Require SETVER.EXE to Run with MS-DOS 5.0"
permalink: /kb/095/Q95553/
---

## Q95553: Applications That Require SETVER.EXE to Run with MS-DOS 5.0

	Article: Q95553
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article includes information on several applications that require the
	SETVER.EXE program in order to run successfully under MS-DOS 5.0. This article
	contains the following sections:
	
	- What Is SETVER.EXE?
	
	- Applications That Require SETVER.EXE
	
	- How to Use SETVER.EXE
	
	What Is SETVER.EXE?
	-------------------
	
	When you start an application, often the first thing it does during its
	initialization phase is check the version number of MS-DOS. This is done to
	ensure that the program is compatible with the current version of the operating
	system. Since MS-DOS 5.0 is compatible with earlier versions of MS-DOS, most
	programs should run well, regardless of what version they expect.
	
	SETVER.EXE was designed to enable version-checking applications to run
	successfully under MS-DOS 5.0. SETVER.EXE does only one thing; it reports the
	necessary version number so that any application can start and be used
	normally.
	
	In most situations, running a program that was designed for an earlier version of
	MS-DOS is safe. However, in some cases, a program that makes certain assumptions
	based on the MS-DOS version number may make mistakes. Data loss and file
	corruption can occur. This is why a warning message is displayed whenever you
	add a program to the SETVER.EXE version table. If you are working with important
	or valuable data, you may want to contact your application vendor before using
	SETVER.EXE.
	
	Applications That Require SETVER.EXE
	------------------------------------
	
	
	The following applications require versions of MS-DOS earlier than 5.0. Their
	filenames and required versions (to be added to the SETVER.EXE version table)
	are listed in their titles, followed by any other applicable information:
	
	ACCESS.EXE 4.0
	--------------
	
	ACCESS.EXE, the EasyNetwork redirector, appears to run successfully until a
	remote user attempts to access a network drive. The remote user may be able to
	log on to the drive, but any further use of it results in a network crash. This
	applies to the following versions of EasyNetwork:
	
	  Standard configuration, version 1.92 or earlier
	  ArcNet configuration, version 1.96 or earlier
	  EtherNet configuration, version 1.96 or earlier
	
	FOCUS.EXE 4.01
	--------------
	
	Information Builders Incorporated FOCUS.EXE may display the following error
	message if it is not added to the SETVER.EXE version table:
	
	  Too many open files. DOS has no more handles.
	
	GEOS.EXE 4.0
	------------
	
	(America Online)
	
	Lotus 1-2-3 3.30
	----------------
	
	(applies to version 2.01 of Lotus 1-2-3)
	
	MSCDEX.EXE 4.01
	---------------
	
	MSCDEX.EXE version 2.2 requires the use of SETVER.EXE. MSCDEX.EXE should already
	be in your SETVER.EXE table, unless you have IBM PC-DOS 5.0. If you have
	Microsoft MS-DOS 5.0, make sure you are loading SETVER.EXE in the CONFIG.SYS
	file. If you have IBM PC-DOS, make sure SETVER.EXE is in the CONFIG.SYS file and
	add MSCDEX.EXE to the SETVER.EXE version table.
	
	PCBFAST.EXE 4.01
	----------------
	
	(applies to version 1.25 of Intelligent Devices Corporation [IDC] PowerCache)
	
	PLAYER.EXE 4.0
	--------------
	
	(Chinon CD-ROM Music Player)
	
	PRODIGY.EXE 4.01
	----------------
	
	(Prodigy Services)
	
	TURBO.EXE 3.30
	--------------
	
	NEC has confirmed that TURBO.EXE, included with NEC-DOS version 3.3, can be used
	with MS-DOS 5.0. The TURBO command is used to toggle between clock speeds on NEC
	PowerMate 286 and NEC PowerMate 286 Plus machines.
	
	Note: MS-DOS 5.0 Setup copies TURBO.EXE to the OLD_DOS.1 subdirectory. TURBO.EXE
	should be copied to the upgraded MS-DOS subdirectory to avoid the possibility of
	its deletion if the OLD_DOS.1 subdirectory is removed.
	
	10NET.EXE 4.0
	-------------
	
	(DCA 10Net Network)
	
	10NET16.EXE 4.01
	----------------
	
	If 10NET16.EXE (for DCA 10Net networks) detects an unexpected MS-DOS version, the
	following error message may be displayed:
	
	  SERVER NOT FOUND
	
	How to Use SETVER.EXE
	---------------------
	
	SETVER.EXE allows you to change the version of MS-DOS reported to an application
	by adding the application name and the desired version of MS-DOS to the
	SETVER.EXE table.
	
	To modify the version table, do the following:
	
	1. At any MS-DOS prompt, type the following:
	
	  " setver <program name> <version> " (without the quotation marks)
	
	  For example: If you want MS-DOS to report version 4.01 to EXAMPLE.EXE, type
	  the following:
	
	  " setver example.exe 4.01 " (without the quotation marks)
	
	2. Verify that the command was added to the version table by typing "setver"
	  (without the quotation marks).
	
	3. Reboot (press CTRL+ALT+DEL) so that the change to the version table takes
	  effect.
	
	NOTE: Before you can use the SETVER command, the SETVER.EXE version table must be
	loaded by a DEVICE command in your CONFIG.SYS file. By default, MS- DOS 5.0
	Setup modifies your CONFIG.SYS file to ensure that the version table is loaded
	into memory each time you start your computer. If you have problems following
	the previous steps, check that SETVER.EXE is being loaded in your CONFIG.SYS
	file.
	
	MORE INFORMATION
	================
	
	For more information, query on the following words here in the Microsoft
	Knowledge Base:
	
	  " <product name> and setver " (without the quotation marks)
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	Additional query words: 5.00 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS500
	Version           : MS-DOS:5.0
	
	=============================================================================
	
