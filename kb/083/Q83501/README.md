---
layout: page
title: "Q83501: SETUP.TXT from Windows 3.1 Part B"
permalink: /kb/083/Q83501/
---

## Q83501: SETUP.TXT from Windows 3.1 Part B

	Article: Q83501
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following information was taken from the Microsoft Windows version 3.1
	SETUP.TXT file. This article contains notes on Terminate and Stay Resident (TSR)
	programs and Windows.
	
	MORE INFORMATION
	================
	
	This file contains information about problems that may occur while running
	Windows Setup and describes problems that can occur when using terminate-
	and-stay-resident (TSR) programs or drivers with Windows or Windows Setup.
	If you are using a TSR or if you encounter problems setting up Windows
	version 3.1, read this document BEFORE running Setup again.
	
	Using Terminate-and-Stay-Resident (TSR) Programs and Drivers with
	Windows Version 3.1
	=================================================================
	
	The Program Listing section of this document lists several terminate-
	and-stay-resident (TSR) programs and drivers that are known to cause
	problems when running with Windows version 3.1. Some of the problems
	you may encounter include system failures or an incorrect display of
	information on your screen. In some cases, special steps are provided
	to solve the problems.
	
	While setting up Windows version 3.1, Windows Setup searches the
	AUTOEXEC.BAT and CONFIG.SYS files for references to TSR programs and
	drivers, in addition to scanning memory for TSRs that are currently
	running. If Setup detects a TSR that is known to cause problems when
	running with Windows version 3.1, a message appears, asking whether
	you want to continue or quit Setup.
	
	If you receive such a message, do the following:
	
	1. Locate your TSR in the Program Listing section of this document
	  and use the information to determine if the situation encountered
	  prevents Windows Setup from successfully installing Windows 3.1.
	
	2. If the situation does not affect Windows Setup, you can continue
	  setting up Windows 3.1 by following the instructions on your
	  screen.
	
	  If the situation does affect Windows Setup and prevents it from
	  installing Windows on your computer, follow the instructions
	  on the screen to quit Setup, and then complete the following
	  steps.
	
	3. Quit the TSR and remove all references to it from your
	  AUTOEXEC.BAT and CONFIG.SYS files. For more information,
	  see the documentation for your TSR.
	
	4. Restart your computer.
	
	5. Run Windows Setup again.
	
	After Windows is successfully set up, you may want to restore
	your TSRs.
	
	Not all TSRs or drivers included in the Program Listing section are
	detected by Setup. The TSRs and drivers that Setup detects are in the
	SETUP.INF file, listed under the names "incomptsr1" and "incomptsr2".
	
	Program Listing
	===============
	This section describes some problems, discovered during testing, that
	you might encounter while using a TSR with Windows version 3.1. It
	does not include all possible problems that can occur.
	
	386MAX
	------
	The documentation for 386MAX recommends against setting the EXT
	parameter below 64. If you set this parameter to 0, Windows Setup and
	Windows running in standard mode will fail.
	
	See the README.WRI online document for more information about running
	386MAX with Windows 3.1.
	
	386MAX Disk-Cache Utility (QCACHE.EXE)
	--------------------------------------
	Do not use this disk-cache utility simultaneously with SMARTDrive.
	There is no reason to use two disk-cache utilities with Windows. It is
	recommended that you use SMARTDrive, which is installed with Windows
	3.1, instead.
	
	All Charge 386 Version 3.1
	--------------------------
	ALLEMM4.SYS is a memory manager that causes problems with Setup and
	Windows 3.1. If you encounter problems running this program with
	Windows, it is recommended that you use EMM386.EXE and HIMEM.SYS,
	provided with Windows 3.1, to manage memory instead.
	
	Anarkey Version 4.00
	--------------------
	With some memory configurations, Anarkey version 4.00 running with
	Windows 3.1 in 386 enhanced mode may cause unpredictable system
	failures. In rare cases, this program can also corrupt hard-disk data.
	In addition, Windows 3.1 might not start when this program is running.
	
	Do not run Windows 3.1 in 386 enhanced mode when Anarkey version 4.00
	is running. Version 4.01 may correct these problems. Contact Moderne
	Software for a free upgrade of Anarkey 4.01.
	
	Anarkey Version 4.01
	--------------------
	If Anarkey version 4.01 is loaded before starting Windows in standard
	mode, it is not available in any MS-DOS Prompt that you start from
	Windows. In this case, it is recommended that you load Anarkey from
	each MS-DOS Prompt, as needed.
	
	Do not load Anarkey HIGH before starting Windows in 386 enhanced mode.
	If you load Anarkey HIGH, your system may fail when you try to start
	an application.
	
	APPEND (MS-DOS)
	---------------
	Do not use the APPEND utility with Windows 3.1. It prevents Windows
	and Windows applications from creating valid Well-Formed-Path (WFP)
	names for the files they are using. (A WFP is the complete name of a
	file, including the drive letter and full path specification, starting
	from the root directory.)
	
	ASP Integrity Toolkit Version 3.7
	---------------------------------
	This product is a virus-protection program that can cause problems
	when running Windows Setup, including system failure, automatic
	restarting of the system, and the inability to use the keyboard. You
	should turn off protection in the toolkit before setting up Windows
	3.1. For information about how to do this, see your ASP Integrity
	documentation.
	
	NOTE: Setting up Windows is considered a system-administration
	     task. The ASP Integrity Toolkit documentation instructs
	     you to turn off protection when performing these types
	     of tasks.
	
	Autocon Version 2.0e
	--------------------
	Autocon enables you to select up to fifty different configurations
	when starting your system. To do this, it modifies the CONFIG.SYS and
	AUTOEXEC.BAT files, based on information in its database
	(AUTOCON.DAT), when you restart your system from within AUTOCON.
	
	Windows Setup modifies only the first section in the CONFIG.SYS and
	AUTOEXEC.BAT files. If you want to use specific configurations with
	Windows, you must run Autocon and then manually edit the
	configurations in the database that you want to use. You must do this
	after setting up Windows. For your changes to take effect, you must
	restart your system from within Autocon. For more information, see
	your Autocon documentation.
	
	Bootcon Version 1.60
	--------------------
	Using Bootcon, you can maintain different system-configuration
	information in your CONFIG.SYS and AUTOEXEC.BAT files. You can then
	select the configuration you want to use from a menu when starting
	your system.
	
	Windows Setup modifies only the first section in the CONFIG.SYS and
	AUTOEXEC.BAT files. You must edit the sections of those files that
	contain the configurations you want to use after you set up Windows.
	For more information, see your Bootcon documentation.
	
	BOOT.SYS
	---------
	Using BOOT.SYS, you can maintain different system-configuration
	information in your CONFIG.SYS and AUTOEXEC.BAT files. You can then
	select the configuration you want to use from a menu when starting
	your system.
	
	Windows Setup modifies only the first section in the CONFIG.SYS and
	AUTOEXEC.BAT files. You must edit the sections of those files that
	contain the configurations you want to use after you set up Windows.
	For more information, see your BOOT.SYS documentation.
	
	CACHE.EXE Disk-Cache Utility
	----------------------------
	Do not use two disk-cache utilities with Windows 3.1. It is
	recommended that you use SMARTDrive, provided with Windows 3.1, and
	remove all references to other disk-cache utilities from your
	CONFIG.SYS and AUTOEXEC.BAT files. (If CACHE.EXE is detected, Setup
	removes it from the CONFIG.SYS file for you.)
	
	CACHE.SYS Disk-Cache Utility
	----------------------------
	This disk-cache utility will not work properly with SMARTDrive. It is
	recommended that you use SMARTDrive, provided with Windows 3.1, and
	remove all references to other disk-cache utilities from your
	CONFIG.SYS and AUTOEXEC.BAT files. (If CACHE.SYS is detected, Setup
	removes it from the CONFIG.SYS file for you.)
	
	CED Version 1.0e
	----------------
	Using CED with Windows 3.1 may cause problems, including system
	failure. It is recommended that you do not use CED with Windows 3.1.
	
	Central Point Anti-Virus Version 1.1 (VSAFE.COM/VSAFE.SYS)
	----------------------------------------------------------
	VSAFE.COM/VSAFE.SYS should not be loaded when you set up Windows 3.1.
	Otherwise, Setup may not run properly. After you set up Windows 3.1,
	you can load VSAFE.
	
	Because Windows uses the disk for memory swapping, you should turn off
	the VSAFE write-protection option when running Windows. For more
	information, see the Central Point Anti-Virus documentation.
	
	CMDEDIT.COM Version 2.0 (Date 12-6-91)
	--------------------------------------
	If this command-line editor is loaded before starting Windows, it may
	cause a General Protection Fault when running multiple MS-DOS Prompts
	in 386 enhanced mode. Also, it cannot be loaded from an MS-DOS Prompt
	within Windows when Windows is running in standard mode.
	
	Cubit Version 3.01
	------------------
	When using Cubit with Windows 3.1, do not compress the Windows SYSTEM
	directory or any file that is loaded from the CONFIG.SYS file.
	Compressing these files could cause problems.
	
	Before upgrading to Windows 3.1, make sure that the earlier version of
	Windows is uncompressed on your hard disk. You may recompress the
	files after you have successfully set up Windows 3.1.
	
	Data Physician Plus Version 2.0 (VirALERT)
	------------------------------------------
	It is recommended that you do not set up Windows while VirALERT is
	running. If you do, VirALERT will display a warning message every few
	seconds while Setup is running.
	
	After you have set up Windows, you can run VirALERT. Press ALT+V to
	display the VirALERT menu. You can use the commands on this menu to
	disable and enable VirALERT.
	
	DOSCUE.COM Command-Line Editor
	------------------------------
	The DOSCUE command-line editor produces unexpected results when used
	with Windows version 3.1. It is recommended that you do not use this
	editor with Windows 3.1.
	
	Doubledisk Version 2.5
	----------------------
	Windows 3.1 may try to access "phantom" disk drives if you use
	Doubledisk with Windows 3.1. Phantom drives occur when you use
	Doubledisk to create a compressed drive. For example, if you have
	drives A, B, and C on your computer and you use Doubledisk to create
	drive F, Windows 3.1 (and MS-DOS) recognize drives D and E as valid
	drives, even though they do not actually exist. You can use the DRVOFF
	utility to prevent Windows from recognizing phantom drives. Contact
	Vertisoft to order a copy of the DRVOFF utility.
	
	FASTOPEN (MS-DOS)
	-----------------
	FASTOPEN is a RAM resident utility. Problems involving the file
	allocation table (FAT) may occur if FASTOPEN is used together with
	disk de-fragmenting utilities. In low-memory situations, you may need
	to remove FASTOPEN for Windows 3.1 to run properly.
	
	Flash Disk-Cache Utility (FLASH.EXE)
	-------------------------------------
	Do not use this disk-cache utility simultaneously with SMARTDrive.
	There is no reason to use two disk-cache utilities with Windows. It is
	recommended that you use SMARTDrive, which is installed with Windows
	3.1, instead.
	
	Graphics (MS-DOS)
	-----------------
	Loading Graphics from an MS-DOS Prompt within Windows can cause
	unexpected results when printing. The active MS-DOS Prompt will send
	its output to the printer. Switching between MS-DOS Prompts may result
	in mixed printing jobs.
	
	HPEMM386.SYS and HPEMM486.SYS
	-----------------------------
	These expanded-memory managers are incompatible with Windows when it
	is running in 386 enhanced mode. If you plan on running Windows in 386
	enhanced mode, it is recommended that you use EMM386.EXE to manage
	memory instead.
	
	HPMM.SYS - HP Memory Manager
	----------------------------
	When HPMM.SYS is running, you cannot set up Windows 3.1 or run it in
	standard mode. You should remove all references to HPMM.SYS from your
	CONFIG.SYS and AUTOEXEC.BAT files before setting up Windows 3.1.
	
	Hyperdisk Disk-Cache Utility
	----------------------------
	Do not use this disk-cache utility simultaneously with SMARTDrive.
	There is no reason to use two disk-cache utilities with Windows. It is
	recommended that you use SMARTDrive, which is installed with Windows
	3.1, instead.
	
	IBM VDISK.SYS (RAM Disk Utility)
	--------------------------------
	VDISK.SYS is incompatible with Windows because it occupies extended
	memory required to run Windows. This utility prevents any XMS-
	compatible memory manager from loading.
	
	IEMM.SYS Memory Manager
	-----------------------
	The IEMM.SYS memory manager is incompatible with Windows.It is
	recommended that you remove all references to IEMM.SYS from your
	CONFIG.SYS and AUTOEXEC.BAT files and use EMM386.EXE, provided with
	Windows 3.1, to manage memory instead.
	
	ICACHE.SYS Disk-Cache Utility
	-----------------------------
	Do not use two disk-cache utilities with Windows version 3.1. It is
	recommended that you use SMARTDrive, provided with Windows 3.1, and
	remove all references to other disk-cache utilities from your
	CONFIG.SYS and AUTOEXEC.BAT files. (If ICACHE.SYS is detected, Setup
	removes it from the CONFIG.SYS file for you.)
	
	IBMCACHE.SYS Disk-Cache Utility
	-------------------------------
	Do not use two disk-cache utilities with Windows version 3.1. It is
	recommended that you use SMARTDrive, provided with Windows 3.1, and
	remove all references to other disk-cache utilities from your
	CONFIG.SYS and AUTOEXEC.BAT files. (If IBMCACHE.SYS is detected, Setup
	removes it from the CONFIG.SYS file for you.)
	
	Intel Expanded-Memory Emulator (ILIM386.SYS)
	--------------------------------------------
	The ILIM386.SYS expanded-memory emulator, provided with the Intel
	Inboard/386 product, is incompatible with Windows 3.1. It is
	recommended that you remove all references to this emulator from your
	CONFIG.SYS and AUTOEXEC.BAT files before setting up Windows 3.1.
	
	JOIN (MS-DOS)
	-------------
	Do not add or remove "joined" drives while running Windows 3.1. If you
	use the JOIN command before starting Windows 3.1 and do not change the
	state of the joined drives from an MS-DOS Prompt within Windows,
	Windows 3.1 will work properly.
	
	It is recommended that you do not use joined drives at all if you plan
	on running Windows.
	
	KBFLOW TSR by Artisoft
	----------------------
	If you load the KBFLOW TSR utility provided by Artisoft before
	starting Windows 3.1, your system may fail when starting or using an
	MS-DOS Prompt from within Windows.
	
	KEYB.COM (MS-DOS)
	-----------------
	If you use command-line options to load KEYB.COM, it is recommended
	that you load it before starting Windows. After it is loaded, you can
	change the keyboard configuration from an MS-DOS Prompt within Windows
	any time. If you do not load KEYB.COM before starting windows, you may
	encounter problems using a KEYB command that includes an option in an
	MS-DOS Prompt. However, you can use the KEYB command without options
	at any time to display code-page information.
	
	Lansight Version 2.0
	--------------------
	Lansight is a utility that you can use to control and monitor other
	workstations attached to a Novell network. In some cases, version 2.0
	of Lansight may cause the workstation running Windows 3.1 to fail.
	
	Lasertool Control Panel Version 2.2
	------------------------------------
	If you load version 2.2 of the Lasertool Control Panel program
	(PCPANEL.EXE) from Windows 3.1, your system may fail. This program
	works properly if you load it before starting Windows.
	
	Le Menu Version 1.0
	-------------------
	When using Le Menu version 1.0 with Windows 3.1, environment
	information such as PATH, PROMPT and WINDIR may be lost if you start
	an MS-DOS Prompt from within Windows. If you want to start Windows 3.1
	by using a Le Menu menu command, it is recommended that you set up
	Windows 3.1 as a Batch-File menu command so that COMMAND.COM will load
	before starting Windows 3.1. For more information, see your Le Menu
	documentation.
	
	LOCKIT Version 3.3 (PC Vault, Secure It)
	----------------------------------------
	Version 3.3 of these programs strip out spaces from the load= command
	line in the WIN.INI file. Later versions may correct this problem.
	
	Logitech Mouse Software Version 5.0/6.0 (CLICK, LOGIMENU)
	----------------------------------------------------------
	If you want to use CLICK and LOGIMENU from an MS-DOS Prompt within
	Windows, you must load the TSRs from that MS-DOS Prompt, even if you
	loaded the TSRs before starting Windows. When you quit Windows, you
	must reload the TSRs for them to work properly from the MS-DOS prompt
	outside of Windows, even if you loaded them from an MS-DOS Prompt
	within Windows.
	
	Mace Disk-Cache Utility (MCACHE.SYS)
	------------------------------------
	This disk-cache utility will not work properly with SMARTDrive.It is
	recommended that you use SMARTDrive, provided with Windows 3.1, and
	remove all references to other disk-cache utilities from your
	CONFIG.SYS and AUTOEXEC.BAT files. (If Mace is detected, Setup removes
	it from the CONFIG.SYS file for you.)
	
	Maximizer Memory Manager (MAXIMIZE.COM)
	---------------------------------------
	If you are using the Maximizer memory manager, you may not be able to
	set up or start Windows. Make sure that you are using only one memory
	manager with Windows 3.1. It is recommended that you use HIMEM.SYS and
	EMM386.EXE, which are installed with Windows 3.1, to manage memory
	instead.
	
	MIRROR (MS-DOS)
	-----------------
	If MIRROR is loaded from Windows 3.1 by using the Run command in
	standard mode, you cannot remove it from memory by using the MIRROR /U
	command. This will cause an error message to appear.
	
	NDOSEDIT.COM (Date 1-1-84)
	--------------------------
	You may have problems loading this command-line editor. Also, it may
	cause unexpected results when running with Windows 3.1.
	
	NetRoom Memory Manager (RM386.SYS)
	-------------------------------------------
	With some older versions of NetRoom, you may encounter problems
	setting up Windows. In this case, contact Helix Software for a newer
	version of NetRoom.
	
	Newspace Version 1.07
	---------------------
	This disk-compression utility is incompatible with Windows 3.1 and may
	cause several problems.
	
	Norton Anti-Virus Version 1.0
	-----------------------------
	If you load version 1.0 of Anti-Virus before setting up Windows, Setup
	may fail. It is recommended that you contact Symantec for the most
	current version of this program.
	
	Norton Desktop for Windows (EP.EXE)
	-----------------------------------
	If the data-recovery program Erase Protect (EP.EXE) is loaded from the
	AUTOEXEC.BAT file, you need to disable it when setting up Windows 3.1,
	especially if you are upgrading over a previous version of Windows.
	Erase Protect tries to save copies of all deleted files, which can
	cause you to run out of disk space while running Setup.
	
	It is recommended that you run Erase Protect with a permanent swap
	file, not a temporary swap file. If you are using a temporary swap
	file, you need to exclude files with a .TMP or .SWP extension from
	erase protection.
	
	Norton Utilities Version 5.0 (DISKREET, NCACHE)
	-----------------------------------------------
	This program is incompatible with Windows 3.1 and may cause your
	system to fail. It is recommended that you upgrade to the most recent
	version of Norton Utilities to correct problems.
	
	Norton Utilities Version. 6.01 (NCACHE)
	---------------------------------------
	Some versions of NCACHE may prevent you from setting up or starting
	Windows 3.1. When Windows is running in standard mode, your system may
	fail, especially if NCACHE is set up as an EMS cache. Setting up
	NCACHE as an EMS cache is not recommended. Setting up NCACHE as an XMS
	cache may solve the problem.
	
	You may also encounter additional problems using NCACHE. New versions
	may correct these problems. For an updated version of NCACHE, contact
	Symantec Corporation. In the meantime, you can use SMARTDrive, which
	is provided with Windows 3.1.
	
	Norton Utilities Version 6.01 (DISKMON)
	--------------------------------------
	It is recommended that you do not use DISKMON version 6.01 with
	Windows 3.1.
	
	PCED Version 2.00
	-----------------
	Do not load the PCED command-line editor HIGH. Loading it HIGH may
	cause unexpected results, such as system failures, when Windows is
	running in 386 enhanced mode. If you load this program before starting
	Windows, it may be unavailable when Windows is running in standard
	mode.
	
	PCKEY.EXE (MultiSoft Keyboard Enhancer and Command-Line Stack)
	--------------------------------------------------------------
	PCKEY.EXE may not work properly with Windows 3.1 when you are running
	more than one non-Windows application at a time. It is recommended
	that you unload PCKEY.EXE before starting Windows.
	
	PC-Kwik Disk Accelerator
	------------------------
	If you use PC-Kwik when Windows is running in 386 enhanced mode, make
	sure that you are using version 3.55 or later and that PC-Kwik is in
	extended memory, not expanded memory. To get an upgraded version of
	PC-Kwik, contact MultiSoft.
	
	PC-Kwik Disk-Cache Utility (PC-KWIK.EXE)
	----------------------------------------
	Do not use this disk-cache utility simultaneously with SMARTDrive.
	There is no reason to use two disk-cache utilities with Windows. It is
	recommended that you use SMARTDrive, provided with Windows 3.1,
	instead.
	
	PC-Kwik Version. 1.59 (PCK.EXE, PSKSCRN.EXE, PCKEY.COM)
	-------------------------------------------------------
	If version 1.59 of PC-KWIK is loaded before setting up Windows, Setup
	may fail. PC-KWIK Version 2.0 may correct this problem.
	
	PCSXMAEM.SYS Utility
	--------------------
	This utility is incompatible with Windows. You should remove all
	references to it from your CONFIG.SYS and AUTOEXEC.BAT files before
	setting up or starting Windows 3.1. PCSXMAEM.SYS is similar to
	XMAEM.SYS. It has been renamed and slightly modified. It is provided
	with current versions of the IBM PC/3270 emulator.
	
	PCSX2EMS.SYS
	-------------
	Windows will run correctly with PCSX2EMS.SYS if it is loaded on a
	computer that has an XMA board installed. Otherwise, this program is
	incompatible with Windows. PCSX2EMS.SYS is provided with the IBM
	PC/3270 emulator.
	
	PC Tools Deluxe Version 7.1 (DATAMON)
	------------------------------------
	If you load PC Tools DATAMON using the \SENTRY+ option, Setup may fail
	if you are low on disk space. Do not use the \SENTRY+ option when
	loading DATAMON.
	
	Do not load DATAMON after loading SMARTDrive. If DATAMON is loaded
	after SMARTDrive, your system may fail. See the PC Tools documentation
	for information about how to unload DATAMON.
	
	PC Tools Deluxe Version 6.0 (DESKTOP)
	------------------------------------
	If you try to start PC Tools from an MS-DOS Prompt within Windows in
	standard mode, your system may fail. In enhanced mode, your system may
	restart itself. These problems also occur if you use MS-DOS commands
	from an MS-DOS Prompt within Windows.
	
	Version 7.0 of PC Tools may correct these problems. However, do not
	load DESKTOP from an MS-DOS Prompt if it was loaded before starting
	Windows 3.1. If you do, your system may fail when you quit Windows. It
	is recommended that you run DESKTOP from its PIF, provided with
	Windows 3.1.
	
	PC Tools Deluxe Version 7.1 (VDEFEND)
	-------------------------------------
	Setup may not work properly if VDEFEND is loaded before running Setup.
	You may load VDEFEND after setting up Windows 3.1.
	
	PC Tools Disk-Cache Utility (PC-CACHE.COM)
	-----------------------------------------
	Do not use this disk-cache utility simultaneously with SMARTDrive.
	There is no reason to use two disk-cache utilities with Windows. It is
	recommended that you use SMARTDrive, which is installed with Windows
	3.1, instead.
	
	PRINT (MS-DOS)
	--------------
	If you are printing several large documents on a network printer and
	run Windows Setup from the network, your system may fail while Setup
	is creating Program Manager groups.
	
	Printer Assist Version 4.20
	---------------------------
	Printer Assist is a TSR that you can use to share a workstation
	printer with other workstations on Netware 286 and 386 systems. Some
	Windows applications (such as Microsoft Word for Windows) print
	extended characters, mixed with correct output when this program is
	loaded.
	
	PYRO! Version 1.0
	-----------------
	If this screen saver is loaded before starting Windows 3.1, you may
	not be able to restore the Windows 3.1 screen after this screen saver
	appears.
	
	QMAPS Memory Manager Version 5.16
	---------------------------------
	If you are using the QMAPS memory manager, you may not be able to set
	up or start Windows. New versions may correct these problems. For an
	updated version of QMAPS, contact Quadtel. In the meantime, you may
	use HIMEM.SYS and EMM386.EXE, provided with Windows 3.1, to manage
	memory instead.
	
	RAMTYPE.SYS - AST RAMpage! Boards
	---------------------------------
	The RAMTYPE.SYS driver is incompatible with Windows. It is recommended
	that you remove this driver before setting up Windows 3.1. If you load
	the driver from your CONFIG.SYS file, comment out the command line for
	the driver as follows:
	
	  rem RAMTYPE.SYS
	
	Windows 3.1 will run correctly without RAMTYPE.SYS. However, other
	drivers that rely on RAMTYPE.SYS will not load and applications will
	not be able to use the expanded memory on your system.
	
	After setting up Windows, you can use version 1.2 and later of
	RAMTYPE.SYS with Windows. If you are using an earlier version on an
	IBM PS/2 or micro-channel architecture computer and your RAMpage!
	board is configured for expanded and extended memory, you need to
	upgrade your AST RAMTYPE.SYS driver after setting up Windows. You will
	also need to remove the "rem" command from your CONFIG.SYS file so
	that RAMTYPE.SYS will load properly.
	
	Secretdisk II Disk-Cache Utility (FAST512.SYS)
	----------------------------------------------
	This disk-cache utility will not work properly with SMARTDrive. It is
	recommended that you use SMARTDrive, provided with Windows 3.1, and
	remove all references to other disk-cache utilities from your
	CONFIG.SYS and AUTOEXEC.BAT files. (If this utility is detected, Setup
	removes it from the CONFIG.SYS file for you).
	
	SideKick Versions 1.0 and 2.0 and SideKick Plus
	-----------------------------------------------
	Miscellaneous problems may occur when running SideKick as a TSR with
	Windows 3.1. It is recommended that you use a PIF to run SideKick as a
	non-Windows application, instead of loading it as a TSR.
	
	SoftIce Debugger
	----------------
	If SoftIce is loaded, Setup will fail when starting the Windows
	portion of the program. It is recommended that you unload SoftIce
	before setting up Windows 3.1.
	
	SpeedFXR
	--------
	This program is incompatible with Windows 3.1 when running as a TSR.
	It tries to increase the speed of the floppy disk drives, but slows
	them down instead. To get the best results, use the -X option when
	loading SpeedFXR. This will prevent SpeedFXR from remaining in memory
	and affecting the speed of the floppy disk drives.
	
	SUBST (MS-DOS)
	--------------
	Do not add or remove "substituted" drives while running Windows 3.1.
	If you use the SUBST command before starting Windows and do not change
	the state of the substituted drives from an MS-DOS Prompt within
	Windows, Windows 3.1 will work properly.
	
	Super PC-Kwik Disk-Cache Utility (SUPERPCK.EXE)
	-----------------------------------------------
	Do not use this disk-cache utility simultaneously with SMARTDrive.
	There is no reason to use two disk-cache utilities with Windows. It is
	recommended that you use SMARTDrive, which is installed with Windows
	3.1, instead.
	
	Trantor T100 Host Adapter Driver (TSCSI.SYS)
	--------------------------------------------
	(For SCSI hard disk drives) - If you use the Trantor T100 driver
	(TSCSI.SYS), you must use version 4.33d or higher. Earlier versions
	identify the SCSI hard disk drive as a removable drive. This may cause
	problems when using File Manager, such as a system failure while
	formatting the drive and unexpected results when deleting files. To
	get an updated driver, contact Trantor Systems, Ltd.
	
	UMB PRO Version 1.07
	--------------------
	If you are running UMB PRO, you may experience problems running
	Windows in standard mode. In some cases, your system may fail. Make
	sure that you are using only one memory manager with Windows 3.1. It
	is recommended that you use HIMEM.SYS and EMM386.EXE, which are
	installed with Windows 3.1, to manage memory instead.
	
	Vaccine
	-------
	If Vaccine is loaded, Setup fails when trying to modify the CONFIG.SYS
	and AUTOEXEC.BAT files. You should unload Vaccine before setting up
	Windows 3.1. You may also encounter problems, such as beeping, while
	running Windows when Vaccine is loaded.
	
	VIREX-PC Version 1.11
	---------------------
	If VIREXPC.COM is loaded, Windows Setup and Windows 3.1 will fail when
	KRNL386.EXE performs a write operation. Also, the first time Windows
	3.1 is loaded, you may be returned to the MS-DOS prompt.
	
	Virus Prevention Plus Version 5.0
	---------------------------------
	If Virus Prevention Plus is loaded, you may not be able to
	successfully set up Windows 3.1. You may also encounter problems when
	running Windows 3.1 in 386 enhanced mode. The Keyboard Lock program
	may cause Windows to fail.
	
	Virusafe Version 4.0
	--------------------
	If this program is loaded as a TSR, Setup may fail while setting up
	Windows 3.1. It is recommended that you load Virusafe by using the /C-
	option. This option turns off the memory-change detection provided
	with Virusafe. Version 4.5 may correct this problem. For more
	information, see your Virusafe documentation.
	
	XGAAIDOS.SYS
	------------
	With XGAAIDOS.SYS loaded, Windows 3.1 will fail at the opening logo if
	you use the WIN /s option to start Windows in standard mode.
	
	XMAEM.SYS
	---------
	XMAEM.SYS is a device which causes extended memory to act like XMA.
	This utility is incompatible with Windows 3.1. It is recommended that
	you remove all references to it from your CONFIG.SYS and AUTOEXEC.BAT
	files before setting up or running Windows 3.1. XMAEM.SYS is provided
	with IBM DOS version 4.0.
	
	XMA2EMS.SYS
	-----------
	Windows will run correctly with XMA2EMS.SYS if it is loaded on a
	computer that has an XMA board installed. Otherwise, this program is
	incompatible with Windows. XMA2EMS.SYS is provided with IBM DOS
	version 4.0.
	
	Additional query words: ndw gpf 3.10 tsr
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
