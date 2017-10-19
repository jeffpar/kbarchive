---
layout: page
title: "Q109511: SETUP.TXT from Windows for Workgroups 3.11 (Part 2 of 3)"
permalink: /kb/109/Q109511/
---

## Q109511: SETUP.TXT from Windows for Workgroups 3.11 (Part 2 of 3)

	Article: Q109511
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following information was taken from the Microsoft Windows for Workgroups
	version 3.11 SETUP.TXT file.
	
	MORE INFORMATION
	================
	
	Setting Up an XGA Video Adapter on a PS/2(R) Model 75 or 90
	-----------------------------------------------------------
	
	If you have a PS/2 model 75 or 90 with an XGA video adapter, Windows for
	Workgroups Setup will configure the display adapter for 16-color, 640x480
	resolution. Do not change this configuration during Setup. Specifying a
	different XGA configuration while setting up Windows for Workgroups may
	cause Setup to fail.
	
	After you have successfully installed Windows, you can configure your XGA
	to use a different resolution or 256 colors, if your monitor supports it.
	For more information on how to do this, see the topic "IBM XGA: 
	Configuring
	Color and Resolution" in the README.WRI online document.
	
	If you are using the plasma screen on the PS/2 model 75, use ONLY the
	640x480, 16-color configuration. If you change this configuration, you
	return to the MS-DOS prompt when you try to start Windows.
	
	Setting up an IBM Token Ring 4/16Mbs Network Card on a Microchannel
	(MCA) Computer
	--------------------------------------------------------------------
	
	If you have a Microchannel computer, and you are installing Windows for
	Workgroups support for the IBM Token Ring 4/16Mbs network card, you must
	make sure the Maximum Transmits parameter is set no higher than 1024. If
	you try to use a higher value, the network card will not work with your
	computer.
	
	Correcting the "Out of Environment Space" Error Message
	-------------------------------------------------------
	
	If you receive an "out of environment space" message when starting
	Windows, you can solve the problem in either of two ways:
	
	- Increase the size of your environment by adding the SHELL= command line
	  to your CONFIG.SYS file. See your MS-DOS documentation for more
	  information about the SHELL command and about modifying your CONFIG.SYS
	  file.
	
	- Move the SET commands in your AUTOEXEC.BAT file to the beginning of the
	  file so that they run before the commands that load terminate-and-stay-
	  resident (TSR) programs or drivers, such as SMARTDrive.
	
	Using Multimedia Extensions Version 1.0 with Windows for Workgroups
	-------------------------------------------------------------------
	
	To use the Multimedia Extensions with Windows for Workgroups, first set up
	Windows with Multimedia Extensions version 1.0. Then upgrade to Windows 
	for
	Workgroups by installing it into the same directory. If you set up Windows
	for Workgroups before setting up Multimedia Extensions, not all the files
	will be properly installed.
	
	See the README.WRI online document for more information about running
	Multimedia Extensions with Windows for Workgroups.
	
	USING TERMINATE-AND-STAY-RESIDENT (TSR) PROGRAMS AND DRIVERS
	WITH WINDOWS FOR WORKGROUPS
	============================================================
	
	The "Program Listing" section of this document lists a number of 
	terminate-
	and-stay-resident (TSR) programs and drivers that are known to cause
	problems when running with Windows for Workgroups. Some of the problems 
	you
	may encounter include system failures or incorrect screen displays. In 
	some
	cases, we have included solutions or workarounds for the problems.
	
	When you install Windows for Workgroups, Setup searches your AUTOEXEC.BAT
	and CONFIG.SYS files for references to TSR programs and drivers and scans
	memory for TSRs that are currently running. If Setup detects a TSR that is
	known to cause problems when running with Windows for Workgroups, a 
	message
	appears asking whether you want to continue or quit Setup.
	
	If you receive such a message, carry out the following procedure:
	
	1. Locate your TSR in the "Program Listing" section of this document.
	  Determine whether the situation prevents Setup from successfully
	  installing Windows for Workgroups.
	
	2. If the situation does not affect Setup, continue setting up Windows for
	  Workgroups by following the instructions on your screen.
	
	  If the situation does affect Setup and prevents it from installing
	  Windows for Workgroups, quit Setup, and then carry out the following
	  steps.
	
	3. Quit the TSR and remove all references to it from your AUTOEXEC.BAT and
	  CONFIG.SYS files. For more information, see the documentation for your
	  TSR.
	
	4. Restart your computer.
	
	5. Run Windows for Workgroups Setup again.
	
	After Windows for Workgroups is successfully set up, you may want to
	restore your TSRs.
	
	Setup cannot detect all the TSRs or drivers included in the "Program
	Listing" section. The TSRs and drivers that Setup can detect are listed in
	the in the [incomptsr1] and [incomptsr2] sections of the SETUP.INF file.
	
	PROGRAM LISTING
	===============
	
	This section describes some problems that you might encounter while using 
	a
	TSR with Windows for Workgroups. It does not include all possible problems
	that can occur.
	
	386MAX(R)
	---------
	
	The documentation for 386MAX recommends against setting the EXT parameter
	below 64. If you set this parameter to 0, Setup will fail.
	
	See the README.WRI online document for more information about running
	386MAX with Windows for Workgroups.
	
	386MAX Disk-Cache Utility (QCACHE.EXE)
	--------------------------------------
	
	Do not use this disk-cache utility simultaneously with SMARTDrive. There 
	is
	no reason to use two disk-cache utilities with Windows for Workgroups. It
	is recommended that you use SMARTDrive, provided with Windows for
	Workgroups, instead.
	
	All Charge 386 Version 3.1
	--------------------------
	
	ALLEMM4.SYS is a memory manager that causes problems with Setup and 
	Windows
	for Workgroups. If you encounter problems running this program with 
	Windows
	for Workgroups, it is recommended that you use EMM386.EXE and HIMEM.SYS,
	provided with Windows for Workgroups, to manage memory instead.
	
	Anarkey Version 4.00
	--------------------
	
	Do not run Windows for Workgroups when Anarkey version 4.00 is running.
	With some memory configurations, running Anarkey version 4.00 with Windows
	for Workgroups may cause unpredictable system failures. In rare cases, 
	this
	program can also corrupt hard-disk data. Also, Windows for Workgroups 
	might
	not start when this program is running.
	
	Version 4.01 may correct these problems. Contact Moderne Software for
	a free upgrade to Anarkey 4.01.
	
	Anarkey Version 4.01
	--------------------
	
	Do not load Anarkey HIGH before starting Windows for Workgroups. If you
	load Anarkey HIGH, your system may fail when you try to start an
	application.
	
	APPEND (MS-DOS)
	---------------
	
	Do not use the APPEND utility with Windows for Workgroups. It prevents
	Windows and Windows-based applications from creating valid Well-Formed-
	Path
	(WFP) names for the files they are using. (A WFP is the complete name of a
	file, including the drive letter and full path specification, starting 
	from
	the root directory.)
	
	ASP Integrity Toolkit Version 3.7
	---------------------------------
	
	This virus-protection program can cause problems when you are running
	Windows for Workgroups Setup, including system failure, automatic
	restarting of the system, and keyboard failure. You should turn off
	protection in the Toolkit before you set up Windows for Workgroups. For
	information about how to do this, see your ASP Integrity documentation.
	
	Autocon Version 2.0e
	--------------------
	
	Autocon enables you to select up to 50 different configurations when you
	start your system. To do this, it modifies your CONFIG.SYS and 
	AUTOEXEC.BAT
	files, based on information in its database (AUTOCON.DAT), when you 
	restart
	your system from within Autocon.
	
	Windows for Workgroups Setup modifies only the first section in your
	CONFIG.SYS and AUTOEXEC.BAT files. If you want to use specific
	configurations with Windows, you must run Autocon and then manually edit
	the configurations in the database that you want to use. You must do this
	after setting up Windows for Workgroups. For your changes to take effect,
	you must restart your system from within Autocon. For more information, 
	see
	your Autocon documentation.
	
	Bootcon Version 1.60
	--------------------
	
	Bootcon enables you to maintain different system-configuration information
	in your CONFIG.SYS and AUTOEXEC.BAT files. You can then select the
	configuration you want to use from a menu when you start your system.
	
	Setup modifies the first section in your CONFIG.SYS and AUTOEXEC.BAT files
	and may modify certain other sections that contain network drivers (for
	example, LAN Manager drivers and NetWare drivers may be deleted). After 
	you
	set up Windows for Workgroups, you must edit the sections of those files
	that contain other configurations you want to use. For more information,
	see your Bootcon documentation.
	
	BOOT.SYS
	--------
	
	BOOT.SYS enables you to maintain different system-configuration 
	information
	in your CONFIG.SYS and AUTOEXEC.BAT files. You can then select the
	configuration you want to use from a menu when you start your system.
	
	Setup modifies the first section in your CONFIG.SYS and AUTOEXEC.BAT files
	and may modify certain other sections that contain network drivers (for
	example, LAN Manager drivers and NetWare drivers may be deleted). After 
	you
	set up Windows for Workgroups, you must edit the sections of those files
	that contain other configurations you want to use. For more information,
	see your BOOT.SYS documentation.
	
	CACHE.EXE Disk-Cache Utility
	----------------------------
	
	Do not use two disk-cache utilities with Windows for Workgroups. It is
	recommended that you use SMARTDrive, provided with Windows for Workgroups,
	and remove all references to other disk-cache utilities from your
	CONFIG.SYS and AUTOEXEC.BAT files. (If CACHE.EXE is detected, Setup 
	removes
	it from your CONFIG.SYS file for you.)
	
	CACHE.SYS Disk-Cache Utility
	----------------------------
	
	This disk-cache utility will not work properly with SMARTDrive. It is
	recommended that you use SMARTDrive, provided with Windows for Workgroups,
	and remove all references to other disk-cache utilities from your
	CONFIG.SYS and AUTOEXEC.BAT files. (If CACHE.SYS is detected, Setup 
	removes
	it from your CONFIG.SYS file for you.)
	
	CED Version 1.0e
	----------------
	
	Using CED with Windows for Workgroups may cause problems, including system
	failure. It is recommended that you do not use CED with Windows for
	Workgroups.
	
	Central Point Anti-Virus Version 1.1 (VSAFE.COM/VSAFE.SYS)
	----------------------------------------------------------
	
	VSAFE.COM/VSAFE.SYS should not be loaded when you set up Windows for
	Workgroups. Otherwise, Setup may not run properly. After you set up 
	Windows
	for Workgroups, you can load VSAFE.
	
	If you are upgrading to Windows for Workgroups 3.11, you must also delete
	all the CHKLIST.MS files that VSAFE has created before you run Setup.
	
	Because Windows uses the disk for memory swapping, you should turn off the
	VSAFE write-protection option when you run Windows for Workgroups.
	
	For more information, see the Central Point Anti-Virus documentation.
	
	CMDEDIT.COM Version 2.0
	-----------------------
	
	If this command-line editor is loaded before Windows for Workgroups is
	started, it may cause a General Protection Fault when you run multiple MS-
	DOS Prompts.
	
	Cubit Version 3.01
	------------------
	
	When you are using Cubit with Windows for Workgroups, do not compress the
	Windows SYSTEM directory or any file that is loaded from your CONFIG.SYS
	file. Compressing these files could cause problems.
	
	Before you upgrade to Windows for Workgroups, make sure that the earlier
	version of Windows is uncompressed on your hard disk. You may recompress
	the files after you have successfully set up Windows for Workgroups.
	
	Data Physician Plus Version 2.0 (VirALERT)
	------------------------------------------
	
	It is recommended that you do not set up Windows for Workgroups while
	VirALERT is running. If you do, VirALERT will display a warning message
	every few seconds while Setup is running.
	
	After you have set up Windows for Workgroups, you can run VirALERT. Press
	ALT+V to display the VirALERT menu. You can use the commands on this menu
	to disable and enable VirALERT.
	
	DOSCUE.COM Command-Line Editor
	------------------------------
	
	The DOSCUE command-line editor produces unexpected results when used with
	Windows for Workgroups. It is recommended that you do not use this editor
	with Windows for Workgroups.
	
	Doubledisk Version 2.5
	----------------------
	
	Windows for Workgroups may try to access "phantom" disk drives if you use
	it with Doubledisk. Phantom drives occur when you use Doubledisk to create
	a compressed drive. For example, if you have drives A, B, and C on your
	computer and you use Doubledisk to create drive F, Windows for Workgroups
	and MS-DOS recognize drives D and E as valid drives, even though they do
	not actually exist. You can use the DRVOFF utility to prevent Windows from
	recognizing phantom drives. Contact Vertisoft to order a copy of the 
	DRVOFF
	utility.
	
	Fastopen (MS-DOS)
	-----------------
	
	Fastopen is a RAM-resident utility. Problems involving the file allocation
	table (FAT) may occur if Fastopen is used with disk-defragmenting
	utilities. In low-memory situations, you may need to remove Fastopen for
	Windows for Workgroups to run properly.
	
	Flash Disk-Cache Utility (FLASH.EXE)
	------------------------------------
	
	Do not use this disk-cache utility simultaneously with SMARTDrive. There 
	is
	no reason to use two disk-cache utilities with Windows for Workgroups. It
	is recommended that you use SMARTDrive, provided with Windows for
	Workgroups, instead.
	
	Graphics (MS-DOS)
	-----------------
	
	Loading Graphics from MS-DOS Prompt within Windows can cause unexpected
	results when you are printing. The active MS-DOS Prompt will send its
	output to the printer. Switching between multiple MS-DOS Prompts may 
	result
	in mixed printing jobs.
	
	HPEMM386.SYS and HPEMM486.SYS
	-----------------------------
	
	These expanded-memory managers are incompatible with Windows for
	Workgroups. It is recommended that you use EMM386.EXE to manage memory
	instead.
	
	HPMM.SYS - HP Memory Manager
	----------------------------
	
	When HPMM.SYS is running, you cannot set up Windows for Workgroups. You
	should remove all references to HPMM.SYS from your CONFIG.SYS and
	AUTOEXEC.BAT files before setting up Windows for Workgroups.
	
	Hyperdisk Disk-Cache Utility
	----------------------------
	
	Do not use this disk-cache utility simultaneously with SMARTDrive. There 
	is
	no reason to use two disk-cache utilities with Windows for Workgroups. It
	is recommended that you use SMARTDrive, provided with Windows for
	Workgroups, instead.
	
	IBM VDISK.SYS (RAM Disk Utility)
	--------------------------------
	
	VDISK.SYS is incompatible with Windows for Workgroups because it occupies
	extended memory required to run Windows for Workgroups. This utility
	prevents any XMS-compatible memory manager from loading.
	
	IEMM.SYS Memory Manager
	-----------------------
	
	The IEMM.SYS memory manager is incompatible with Windows for Workgroups. 
	It
	is recommended that you remove all references to IEMM.SYS from your
	CONFIG.SYS and AUTOEXEC.BAT files and use EMM386.EXE, provided with 
	Windows
	for Workgroups, to manage memory instead.
	
	ICACHE.SYS Disk-Cache Utility
	-----------------------------
	
	Do not use two disk-cache utilities with Windows for Workgroups. It is
	recommended that you use SMARTDrive, provided with Windows for Workgroups,
	and remove all references to other disk-cache utilities from your
	CONFIG.SYS and AUTOEXEC.BAT files. (If ICACHE.SYS is detected, Setup
	removes it from your CONFIG.SYS file for you.)
	
	IBMCACHE.SYS Disk-Cache Utility
	-------------------------------
	
	Do not use two disk-cache utilities with Windows for Workgroups. It is
	recommended that you use SMARTDrive, provided with Windows for Workgroups,
	and remove all references to other disk-cache utilities from your
	CONFIG.SYS and AUTOEXEC.BAT files. (If IBMCACHE.SYS is detected, Setup
	removes it from your CONFIG.SYS file for you.)
	
	Intel(R) Expanded-Memory Emulator (ILIM386.SYS)
	-----------------------------------------------
	
	The ILIM386.SYS expanded-memory emulator, provided with the Intel
	Inboard(TM)/386 product, is incompatible with Windows for Workgroups. It 
	is
	recommended that you remove all references to this emulator from your
	CONFIG.SYS and AUTOEXEC.BAT files before setting up Windows for 
	Workgroups.
	
	Additional query words: gpf wfw wfwg 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	
