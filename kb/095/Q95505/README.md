---
layout: page
title: "Q95505: Troubleshooting GP Faults (UAEs)"
permalink: kb/095/Q95505/
---

## Q95505: Troubleshooting GP Faults (UAEs)

	Article: Q95505
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): kbfile kbtshoot
	Last Modified: 20-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	- Microsoft Windows for Workgroups 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This document describes general protection (GP) faults (referred to as
	unrecoverable application errors [UAEs] in Windows 3.0), details the causes of
	these errors, and provides a systematic approach to eliminate them.
	
	WHAT IS A GENERAL PROTECTION (GP) FAULT?
	----------------------------------------
	
	GP faults occur only in the standard and 386 enhanced modes of Windows; they
	cannot occur in the real mode of Windows 3.0. A GP fault signifies that
	something unexpected has happened within the Windows environment, typically an
	improper memory access. For example, an application or a Windows component might
	read or write to a memory location that has not been allocated to it (memory
	that it does not "own"), potentially overwriting and corrupting other program
	code in that area of memory.
	
	Another situation where a GP fault may occur involves the passing of parameters
	between applications and the Windows environment. Invalid parameters can cause
	invalid instructions to be executed, resulting in GP faults. This is usually the
	result of an application's internal program code incorrectly passing specific
	data that could not be correctly interpreted by Windows or a Windows-based
	application.
	
	What Is a System Integrity Violation?
	-------------------------------------
	
	A system integrity violation error message indicates that an MS- DOS-based
	application has caused a GP fault. Similar to a GP fault, system integrity
	violations indicate that an MS-DOS-based application has accessed memory that
	does not belong to it. Because Windows is managing memory in this situation, the
	MS-DOS- based application's memory access often corrupts Windows program code or
	data. The result is an application execution error generated from Windows that
	reports the "application has violated system integrity due to an invalid general
	protection fault and will be terminated." This message can also occur when an
	MS-DOS- based application has tried to directly access a hardware component of
	the system.
	
	HOW DO WINDOWS 3.1 AND WINDOWS FOR WORKGROUPS 3.1 AND 3.11 HANDLE GP FAULTS?
	----------------------------------------------------------------------------
	
	The parameter validation feature allows Windows 3.1 and both versions of Windows
	for Workgroups to check for invalid parameters passed between Windows and
	Windows-based applications. Windows 3.1 and Windows for Workgroups are also
	designed to better manage and maintain which applications "own" specific memory
	locations and system resources. As a result, Windows 3.1 and Windows for
	Workgroups are better at recovering a particular application's memory and system
	resources if the application causes a GP fault and subsequently stops responding
	(hangs).
	
	When you see a GP fault message while running Windows 3.1 or Windows for
	Workgroups, the message provides specific information about which applications
	and Windows components were running at the time of the error, and where the
	error occurred. If the GP fault is not too severe, Windows can continue to run
	the application that caused the fault, allowing you to save your work before you
	close the application.
	
	Performing a Local Reboot
	-------------------------
	
	Depending on the severity of a GP fault in Windows 3.1 or Windows for Workgroups,
	you may be able to press CTRL+ALT+DEL to display information concerning system
	integrity and the application that caused the fault. The severity of a GP fault
	can be measured by how well an application functions after the fault has
	occurred. When you press CTRL+ALT+DEL after a less severe fault occurs, the
	following message appears:
	
	  System has either become busy or has become unstable
	
	- Press any key to return to Windows and wait
	
	- Press CTRL+ALT+DEL again to restart your computer (all unsaved information
	  will be lost)
	
	When you get this message, you can return to Windows and wait for the system to
	recover, but you will probably have to restart the system. When you press
	CTRL+ALT+DEL after a more severe fault occurs, the following message appears:
	
	  This Windows application has stopped responding to the system
	
	- Press ESC to cancel and return to Windows
	
	- Press ENTER to close this application (all unsaved information will be lost)
	
	- Press CTRL+ALT+DEL again to restart your computer (all unsaved information
	  will be lost)
	
	When you get this error message, you can usually press the ESC key to return to
	your application and save your work (if possible) or press the ENTER key to
	close the application and return to Windows; this is known as a local reboot.
	Once you have saved your work or returned to Windows, quit Windows and restart
	your computer to prevent additional GP faults.
	
	PREPARING TO TROUBLESHOOT GP FAULTS
	-----------------------------------
	
	The procedures in the following section provide a proven way to troubleshoot GP
	faults. Many of these troubleshooting steps require changes to system
	configuration files. These changes are not intended to be permanent; they should
	be used as techniques for isolating the conflict that caused the GP fault.
	Before you begin making changes, you should back up your system files and make a
	startup (also known as system or boot) disk. This gives you the ability to
	restart your computer and edit your CONFIG.SYS or AUTOEXEC.BAT files should any
	changes cause the system to hang. This also ensures that you can return to your
	original system configuration by restoring your original system files after you
	have determined the source of the problem.
	
	To create a startup disk with the necessary files:
	
	1. Insert a formatted disk in your floppy disk drive, type the following
	  command, and press ENTER:
	
	  sys c: a:
	
	  If you are using a version of MS-DOS earlier than 5.0, you also need to copy
	  the COMMAND.COM file to drive A by typing the following command and pressing
	  ENTER:
	
	  copy c:\command.com a:
	
	2. Copy an ASCII text editor (such as MS-DOS Editor [including QBASIC.EXE] or
	  Edlin) to the disk in drive A by typing the following commands, pressing
	  ENTER after each:
	
	  copy c:\dos\edit.com a:
	  copy c:\dos\qbasic.exe a:
	
	  If you are running version 4.0 or earlier of Microsoft MS-DOS, your editor is
	  called Edlin. To copy Edlin to drive A, type the following command and press
	  ENTER:
	
	  copy c:\dos\edlin.com a:
	
	3. Copy your AUTOEXEC.BAT, CONFIG.SYS, SYSTEM.INI, and WIN.INI files to the disk
	  in drive A with the following commands:
	
	  copy c:\autoexec.bat a:
	  copy c:\config.sys a:
	  copy c:\windows\system.ini a:
	  copy c:\windows\win.ini a:
	
	  NOTE: If your Windows directory is on a drive other than C, substitute the
	  appropriate drive letter for "c" in the above steps.
	
	SYSTEMATICALLY ISOLATING GP FAULTS
	----------------------------------
	
	It is important that you follow the steps in this section in sequence. GP faults
	are usually caused by the interaction of two or more applications; therefore,
	skipping steps may prolong the time required to isolate the problem.
	
	NOTE: Most people find the cause of the GP fault in the first half of these
	procedures.
	
	Eliminate the Basics
	--------------------
	
	1. Ensure the application was not designed for an earlier version (2.x) of
	  Windows.
	
	  If you are running Windows in standard or 386 enhanced mode, check to see if
	  you are running an application that was designed for an earlier version (2.x)
	  of Windows. Applications designed for Windows 2.x cause errors when run under
	  Windows 3.0 or 3.1 in standard or 386 enhanced mode. Windows displays a
	  warning message when you run an application designed for Windows version 2.0,
	  2.03, 2.1, or 2.11. Such applications should be run only under Windows 3.0 in
	  real mode, as the dialog box suggests. Since real mode is not available in
	  Windows 3.1 or Windows for Workgroups, contact the manufacturer of the
	  application for possible workarounds or to obtain a software upgrade.
	
	2. Run the MS-DOS CHKDSK command with the /F switch.
	
	  NOTE: Before you run this command, you must quit Windows.
	
	  By running CHKDSK /F, any lost allocation units or other file allocation table
	  (FAT) errors are corrected. For more information on CHKDSK, refer to your
	  MS-DOS documentation.
	
	  NOTE: If you are using MS-DOS 6.2 or later, run SCANDISK instead of CHKDSK /F.
	
	3. Ensure system resources are above 60 percent.
	
	  From the Help menu in Program Manager, choose About Program Manager. You
	  should be running Windows in the highest mode your hardware supports, and
	  your system resources should be close to 60 percent. If system resources are
	  lower than 60 percent, you may have an application running in the background
	  using resources. If this is the case, close all applications before
	  proceeding.
	
	4. Check the MS-DOS version you are running.
	
	  Your machine should have the proper MS-DOS version for its hardware type.
	  Original equipment manufacturer (OEM) versions of MS-DOS (such as COMPAQ(R)
	  MS-DOS or IBM(R) PC-DOS) should be used only on their respective OEM hardware
	  platforms (that is, COMPAQ MS-DOS on COMPAQ machines only and IBM PC-DOS on
	  IBM machines only).
	
	  NOTE: Microsoft MS-DOS 5 Upgrade and Microsoft MS-DOS 6 Upgrade are platform
	  independent-they function correctly on all 100- percent IBM
	  PC/AT(R)-compatible machines.
	
	5. Determine if the problem occurs in standard mode.
	
	  If you are having problems with GP faults in 386 enhanced mode, try running
	  Windows in standard mode (WIN /S) to see if the GP faults still occur. If the
	  errors are present in both standard and 386 enhanced mode, the problem may be
	  caused by a conflict between Windows and a hardware device, or you may have a
	  corrupted file.
	
	  NOTE: Standard mode is not available in Windows for Workgroups 3.11. Start
	  Windows for Workgroups 3.11 by typing WIN /D:T to prevent loading any 386
	  enhanced mode virtual device drivers.
	
	
	6. Run Windows without using the WIN.INI file.
	
	  To determine if you are having problems with corrupted fonts, a corrupted
	  printer driver, or software loading from the run= or load= line, rename the
	  WIN.INI file with the following command, then restart Windows:
	
	  ren c:\windows\win.ini winini.old
	
	  If this procedure corrects the problem, ensure the load= and the run= lines in
	  the [windows] section of the WIN.INI file are either blank or preceded with a
	  semicolon (;) to prevent any software from loading. If this fails to correct
	  the problem, contact Microsoft Product Support Services for assistance in
	  isolating the problem within the WIN.INI file.
	
	  If the previous procedure does not correct the problem, rename WININI.OLD to
	  WIN.INI, by typing the following command:
	
	  copy c:\windows\winini.old c:\windows\win.ini
	
	7. Reinstall the software that is causing the GP fault.
	
	If the GP fault can be tracked to a specific application, reinstall the software
	causing the GP fault. The files on disk may have been corrupted or damaged, or
	the application may have been improperly installed. Contact the software vendor
	for assistance if you need help reinstalling the application.
	
	Eliminate Other Software Conflicts Within Windows
	-------------------------------------------------
	
	It is essential to determine whether the GP fault is caused by a conflict between
	Windows and your hardware or a conflict between Windows and other software. To
	do this, eliminate possible software conflicts before testing your hardware.
	After you remove the software listed below, restart your computer and try to
	reproduce the GP fault.
	
	To eliminate possible software conflicts:
	
	1. Ensure that the StartUp group is empty.
	
	2. Ensure that no screen savers, including built-in Windows screen savers, are
	  running. In the Control Panel window, choose the Desktop icon and ensure the
	  Screen Saver Name list box is empty.
	
	3. Ensure Windows is not being run from a menu program, such as MS- DOS Shell.
	
	Configure Windows for the Lowest Level Configuration
	----------------------------------------------------
	
	Use the Windows Setup program to configure Windows for the minimum necessary
	hardware devices. Run the MS-DOS version of Windows Setup (from the Windows
	directory [usually named WINDOWS], type setup) and select the lowest level
	configuration of device drivers. When you troubleshoot GP faults, use only the
	standard Windows device drivers listed below, if possible.
	
	  Display: VGA (Version 3.0)
	  Mouse: No mouse or other pointing device
	  Network: No network installed (This is not an option for Windows for
	  Workgroups.)
	
	  NOTE: Systems with EGA cards and/or monitors should use the EGA display
	  driver.
	
	Check for Unsupported Third-Party Drivers
	-----------------------------------------
	
	1. The installation programs of some applications modify the SYSTEM.INI and
	  WIN.INI files to enhance the overall functionality of Windows or provide
	  additional features to the Windows environment. For example, programs such as
	  Adobe Type Manager(R) (ATM[R]), Bitstream(R), and SuperPrint add device
	  drivers to the SYSTEM.INI file. Temporarily comment out all lines relating to
	  third-party drivers to ensure that Windows uses a minimum configuration for
	  testing purposes. (To comment out a line, use an ASCII text editor, such as
	  Windows Notepad, to edit the .INI file and place a semicolon at the beginning
	  of the appropriate line.)
	
	  If this corrects the problem, the problem was most likely caused by one of the
	  drivers you commented out. To identify which line is causing the problem,
	  replace the commented-out lines one by one until the problem reoccurs.
	
	2. The statements below are those most commonly altered by third- party software
	  manufacturers. Make sure your configuration does not differ from the default
	  Windows configuration shown below:
	
	SYSTEM.INI                 | WIN.INI
	[boot]                     | [windows]
	shell=progman.exe          | load=
	system.drv=system.drv      | run=
	keyboard.drv=keyboard.drv  |
	mouse.drv=mouse.drv        |
	display.drv=vga.drv        |
	comm.drv=comm.drv          |
	sound.drv=mmsound.drv      |
	
	Eliminate Software Conflicts at the MS-DOS Level
	------------------------------------------------
	
	Check for incompatible terminate-and-stay-resident (TSR) programs or unsupported
	device drivers in your CONFIG.SYS and AUTOEXEC.BAT files.
	
	Temporarily comment out all lines relating to device drivers and TSR programs
	that are not required to start your system. These may include virus-detection
	programs, disk-imaging programs, undelete utilities, caching programs, CD-ROM
	drivers, multimedia drivers, terminal-emulation software, and so on. (To comment
	out a line, use a text editor, such as MS-DOS Editor or Edlin, open the
	AUTOEXEC.BAT or CONFIG.SYS file, and type "rem" (without the quotation marks) at
	the beginning of the line, then save the file and restart your computer.)
	
	NOTE: Do not comment out network files if the Windows files are on a network
	server.
	
	Minimum MS-DOS configuration for Windows versions 3.0 and 3.1:
	
	  CONFIG.SYS                       | AUTOEXEC.BAT
	-----------------------------------------------------------------
	  files=50                         | path c:\;c:\dos;c:\windows
	  buffers=30                       | prompt $p$g
	  device=c:\<path>\himem.sys       | set temp=c:\ 
	  stacks=9,256 (Windows 3.1 only)  |
	
	Minimum MS-DOS configuration for Windows for Workgroups 3.1 (with the Microsoft
	Windows network):
	
	  CONFIG.SYS                         | AUTOEXEC.BAT
	-----------------------------------------------------------------------
	  files=50                           | c:\<path>\net start
	  buffers=30                         | path c:\;c:\dos;c:\windows
	  device=c:\<path>\himem.sys         | prompt $p$g
	  stacks=9,256                       | set temp=c:\ 
	 *device=c:\<path>\protman.dos       |
	     /I:<path>\protocol.ini          |
	  device=c:\<path>\<mac driver>.dos  |
	  device=c:\ <path>\workgrp.sys      |
	
	*NOTE: This should appear on a single line in your CONFIG.SYS file.
	
	Minimum MS-DOS configuration for Windows for Workgroups 3.11 (with the Microsoft
	Windows network):
	
	  CONFIG.SYS                   | AUTOEXEC.BAT
	--------------------------------------------------------------
	  files=50                     | c:\<path>\net start
	  buffers=30                   | path c:\;c:\dos;c:\windows
	  device=c:\<path>\himem.sys   | prompt $p$g
	  stacks=9,256                 | set temp=c:\ 
	  device=c:\<path>\ifshlp.sys  |
	
	CAUTION: Before modifying these files, make sure you don't comment out lines
	pertaining to other hardware-specific device drivers, such as disk-compression
	utilities, extended memory boards, third- party disk-partitioning programs, and
	so on. If you do not know the purpose of a line in your CONFIG.SYS or
	AUTOEXEC.BAT file, do not comment it out. The following drivers may be required
	to start the computer or to access your hard disk:
	
	  Device driver   | Function
	----------------------------------------------------------------
	  SSWAP.COM       | Stacker(TM) disk compression
	  STACKER.COM     | Stacker disk compression
	  DASDDRVR.SYS    | IBM BIOS fix
	  DMDRVR.SYS      | Ontrack disk partition
	  SSTORE.SYS      | SpeedStor(R) disk compression
	  ASPI4DOS.SYS    | Adaptec(TM) SCSI BIOS extensions
	  SCSIHA.SYS      | Adaptec SCSI buffering device
	
	If the previous procedure corrects the problem, the problem is related to one of
	the drivers or TSR programs that you commented out. To identify which line is
	loading the TSR program or device driver that causes the error, restore the
	commented-out lines one by one until the problem reoccurs.
	
	Eliminate Potential Network Conflicts
	-------------------------------------
	
	If the machine is running on a network, disabling the network software is the
	easiest and quickest way to determine whether the network software is causing
	the problem.
	
	To disable the network software:
	
	1. If Windows is running on the local hard disk drive (that is, you are not
	  running a network installation of Windows [installed by running SETUP /N]),
	  comment out all network drivers and statements from the AUTOEXEC.BAT and
	  CONFIG.SYS files.
	
	2. Configure Windows for "No network" by changing to the WINDOWS directory (CD
	  \WINDOWS), typing "setup" (without the quotation marks), and changing the
	  installed network to "No network installed."
	
	  NOTE: "No network installed" is not a choice in Windows for Workgroups. For
	  Windows for Workgroups 3.1, comment out the network statements in the
	  CONFIG.SYS and AUTOEXEC.BAT files. When you restart your system, ignore the
	  error messages about the network. For Windows for Workgroups 3.11, type "win
	  /n" (without the quotation marks) to disable network functionality.
	
	3. Ensure login scripts are not altering the PATH environment variable.
	
	  Check the PATH environment variable prior to starting Windows. To do this,
	  type "set" (without the quotation marks) to display the path. Replace the
	  current path command with the minimum path required to test for GP faults.
	  For example
	
	  path=c:\windows;c:\dos
	
	  or, if Windows is running over the network
	
	  path=<c>:\windows;<drive>:\<public\windir>;c:\dos;<drive>:\<system>
	
	  where <c> is your hard disk drive, <drive> is a network drive,
	  <public\windir> is the directory containing the shared Windows program
	  files, and <system> is the directory containing the network files.
	
	  NOTE: If you need to test a specific application, include the application's
	  directory in the path.
	
	4. Make sure that your WINDOWS directory does not contain any .DRV files. These
	  files should be located either in the WINDOWS\SYSTEM subdirectory or in the
	  shared directory on the server if you are running a network installation of
	  Windows.
	
	  NOTE: If you are running a network installation of Windows, you should not
	  have a WINDOWS\SYSTEM directory on your local hard disk drive or in the
	  shared Windows directory on the network server.
	
	5. Make sure you are using the correct version of the network shell. (Use the
	  version that ships with Windows.)
	
	Eliminate Potential Video Conflicts
	-----------------------------------
	
	If a poorly designed or corrupted video driver is installed, GP faults may occur
	at seemingly random times, sometimes very frequently. You may also see a blank
	screen or the system may hang when you quit an MS-DOS-based application that is
	running in a window. These problems can be caused by a poorly designed or
	corrupted video driver or by the use of the incorrect video grabber file. Use
	the following steps to ensure you are using a compatible video driver:
	
	1. Quit Windows and use the Microsoft Diagnostics (MSD) program to check the
	  video hardware. If you have a video BIOS dated earlier than 1988, contact
	  your video card manufacturer to see if a more recent version of the BIOS is
	  required for use with Windows. If a high-resolution card, such as the ATI or
	  Orchid coprocessor card, is installed, make sure that it is configured
	  correctly for your hardware--these cards may require that you select a
	  vertical scan rate and monitor type.
	
	2. Install the generic VGA driver by quitting Windows and running Setup from the
	  WINDOWS directory. If this driver is already installed, press the ESC key
	  when you are prompted with the following message:
	
	  To replace the currently installed driver, press ESC.
	
	  This ensures that new video driver, font, and video grabber files are
	  installed. If this fails to correct the problem, repeat this procedure and
	  install the VGA 3.0 driver. If the problems persist, install the EGA video
	  driver. If none of these drivers improves the situation, reinstall the
	  standard VGA video driver and continue troubleshooting.
	
	  NOTE: The VGA (version 3.0) driver is not available in Windows 3.0. EGA is not
	  available in Windows for Workgroups 3.11.
	
	3. Make sure that the correct 286 and 386 grabber files are installed. The
	  following entries should be present in the [boot] section of the SYSTEM.INI
	  file; the corresponding files should be in the WINDOWS\SYSTEM subdirectory:
	
	  In Windows 3.0:
	
	  286grabber=vgacolor.gr2
	  386grabber=vga.gr3
	
	  In Windows 3.1 and Windows for Workgroups 3.1:
	
	  286grabber=vgacolor.2gr
	  386grabber=vgadib.3gr or 386grabber=vga.3gr
	
	  In Windows for Workgroups 3.11:
	
	  386grabber=vga.3gr
	
	Ensure You Are Using the Correct Switch for HIMEM.SYS
	-----------------------------------------------------
	
	HIMEM.SYS is the default device driver Windows uses in the standard and 386
	enhanced modes to access extended memory, including the high memory area
	(HMA)--the first 64K of extended memory (1024K-1088K). HIMEM.SYS accesses the
	HMA through the A20 line of memory using A20 "handlers." The method used to
	access the HMA depends on the hardware you are using, so HIMEM.SYS has been
	designed to use several different A20 handlers.
	
	HIMEM.SYS follows a routine at load time to determine which A20 handler is
	appropriate for your machine. Unfortunately, some nonstandard machines do not
	respond to the HIMEM.SYS tests, which can result in the wrong A20 handler being
	selected. Using the incorrect A20 handler can result in many problems, such as
	slow system performance and GP faults. The system may also hang when HIMEM.SYS
	loads, leaving the following message on the screen:
	
	  HIMEM: DOS XMS Driver, Version x.xx - MM/DD/YY
	
	The /MACHINE switch is used to gain control of the A20 line by forcing HIMEM.SYS
	to use a specific handler. For example:
	
	  device=c:\<path>\himem.sys /machine:1
	
	-or-
	
	  device=c:\<path>\himem.sys /m:1
	
	To test the different HIMEM.SYS switches on your machine, edit the CONFIG.SYS
	file with an ASCII text editor and add the /MACHINE switch with one of the
	machine-specific handler numbers (1-16). If you do not know which number to use,
	refer to your current MS-DOS or Windows documentation. For most IBM PC/AT 100
	percent- compatible machines, one of the IBM PC/AT compatible A20 handler
	switches (/M:1, /M:11, /M:12, /M:13) should work. If your computer is not listed
	in the documentation, you are not sure which number to use, or the machine
	number for your computer doesn't correct the problem, try these machine numbers
	in the following order: 1, 11, 12, 13, 8, 2-7, 9-10, 14-16. Check your current
	MS-DOS or Windows documentation for the list of machines that require a specific
	A20 handler.
	
	WARNING: When you are testing to see which A20 handler is appropriate, make sure
	you have a startup MS-DOS disk with an ASCII text editor (such as MS-DOS Editor
	or Edlin), because some A20 handlers will cause your machine to hang.
	
	For MS-DOS versions 6.2 and later, you can force the testing of XMS memory with
	the TESTMEM:ON parameter. If you continue to have problems accessing extended
	memory, try enabling and disabling XMS testing. For example:
	
	  device=c:\<path>\himem.sys /testmem:on
	
	-or-
	
	  device=c:\<path>\himem.sys /testmem:off
	
	Ensure Windows Is Configured for the Correct Computer Type and Network
	----------------------------------------------------------------------
	
	Some machines and networks require that you override the Windows Setup default
	setting for the computer type and network. If the correct selection is not made
	during Setup, Windows may not operate correctly, or you may receive GP faults.
	
	Machines that must be specifically selected during Windows Setup include the
	following:
	
	                                             Windows      | Workgroups
	Machine                                     3.0 | 3.1/3.11 | 3.1 | 3.11
	------------------------------------------------------------------------
	AST(R)--all 80386- and 80486-based machines  X  |    X     |     |
	AST Premium 386/25 and 386/33 (CUPID)           |          |  X  |  X
	AT&T(R) PC                                      |    X     |  X  |  X
	AT&T NSX 20--Safari Notebook                    |    X     |  X  |  X
	Everex(TM) Step 386/25 (or compatible)       X  |    X     |  X  |  X
	Hewlett-Packard(R)--all machines             X  |    X     |  X  |  X
	IBM PS/2(R) Model 70P                           |    X     |  X  |  X
	IBM PS/2 Model L40sx                            |    X     |  X  |  X
	Intel(R) 386SL-based system with APM            |    X     |  X  |  X
	MS-DOS system with APM                          |    X     |  X  |  X
	NCR-all 80386- and 80486-based machines         |    X     |  X  |  X
	NCR PC386sx                                  X  |    X     |     |
	NCR PC 925                                   X  |          |     |
	NEC(R) PowerMate SX Plus                     X  |    X     |  X  |  X
	NEC ProSpeed 386                             X  |    X     |  X  |  X
	Toshiba(R) 1200XE                               |    X     |  X  |
	Toshiba 1600                                 X  |    X     |  X  |  X
	Toshiba 5200                                 X  |    X     |  X  |  X
	Zenith(R)-all 80386-based machines           X  |    X     |     |
	Zenith Data Systems-all 80386-based machines    |    X     |     |
	Zenith-all 386/486-based machines               |          |     |  X
	
	Networks that must be specifically selected during Windows Setup include the
	following:
	
	NOTE: This information does not apply to Windows for Workgroups.
	
	                                                    Windows
	Network                                             3.0 | 3.1/3.11
	---------------------------------------------------------------------
	3Com(R) 3+Open(R) LAN Manager (XNS only)             X  |
	3Com 3+Open                                             |    X
	3Com 3+Share(R)                                      X  |    X
	Artisoft(R) LANtastic(R)                                |    X
	Banyan(R) VINES(R) 4.0                               X  |    X
	DEC(R) Pathworks(TM)                                    |    X
	IBM OS/2(R) Lan Server                                  |    X
	IBM PC LAN Program                                   X  |    X
	LAN Manager versions 1.x (or 100-percent compatible) X  |    X
	LAN Manager 2.0 (or 100-percent compatible)          X  |    X
	LAN Manager 2.1 (or 100-percent compatible)             |    X
	Novell(R) NetWare(R)                                    |    X
	TCS(R) 10NET                                            |    X
	
	If your computer and/or network is on either of these lists and you did not
	select your computer type or network specifically during Setup, quit Windows and
	run the MS-DOS version of Setup from the WINDOWS directory. This allows you to
	make the proper selection without having to reinstall Windows.
	
	Use 386 Enhanced Mode for Troubleshooting
	-----------------------------------------
	
	If GP faults occur in 386 enhanced mode but do not occur in standard mode, your
	system may have a memory conflict in the upper memory blocks (UMBs). Such errors
	occur only in 386 enhanced mode and most frequently in Windows 3.0, because
	version 3.0 does not inherit UMB usage from the expanded memory manager (EMM).
	
	To eliminate the possibility of a UMB conflict:
	
	1. Edit the SYSTEM.INI file with the MS-DOS Editor or Edlin and insert the
	  following line in the [386Enh] section:
	
	  EMMExclude=A000-EFFF
	
	  NOTE: This line is not case sensitive.
	
	  If you are using an expanded memory manager, such as EMM386.EXE or Qemm(TM),
	  with Windows 3.1 and Windows for Workgroups, you must either disable it or
	  exclude the memory range shown above with the appropriate EMM. This
	  information is inherited by Windows from the EMM and overrides any entries in
	  the SYSTEM.INI file. The following is an example of excluding the memory
	  range with EMM386.EXE:
	
	  device=c:\windows\emm386.exe noems x=A000-EFFF
	
	  IMPORTANT: If you are using Windows 3.1 or Windows for Workgroups, and you are
	  not using an EMM, use the command WIN /D:X to load Windows from the MS-DOS
	  command prompt. The /D:X switch excludes the memory range A000-EFFF from
	  mapping, similar to the statement EMMExclude=A000-EFFF in the [386Enh]
	  section of the SYSTEM.INI file. However, as with the EMMExclude= statement,
	  this switch is overridden by any settings inherited from the EMM.
	
	2. If making the above change corrects the problem, determine the position of
	  all hardware adapters in the adapter segment and exclude them specifically,
	  rather than excluding the entire region. If necessary, you can use multiple
	  EMMExclude= lines to do this. If you leave the entire range excluded, Windows
	  cannot set up expanded memory for MS-DOS-based applications.
	
	  If you are using a Micro Channel(R) Architecture (MCA) bus machine, such as an
	  IBM PS/2, you can determine the adapter location by restarting the machine
	  with the IBM Reference Disk in drive A. If you are using an Industry Standard
	  Architecture (ISA) bus machine, consult your adapter documentation and/or
	  your manufacturer's technical support service for information on the memory
	  locations the bus machine uses.
	
	3. Disable virtual hard disk access.
	
	  If you are running Windows 3.1 or Windows for Workgroups, start Windows with
	  the /D:V parameter (WIN /D:V). If this prevents the GP faults, add the
	  following line in the [386Enh] section of the SYSTEM.INI file:
	
	  VirtualHDIRQ=OFF
	
	  If you are running Windows 3.0, edit the SYSTEM.INI file and comment out the
	  VirtualHDIRQ= line in the [386Enh] section. (To comment out a line, use an
	  ASCII text editor, such as Windows Notepad, to edit the .INI file and place a
	  semicolon at the beginning of the appropriate line.)
	
	4. Ensure your permanent swap file is not corrupted.
	
	  If you are running Windows 3.1 or Windows for Workgroups, you can remove your
	  permanent swap file by using the 386 Enhanced icon in the Control Panel
	  window.
	
	  If you are running Windows 3.0, restart Windows in real mode and run the
	  Swapfile program with the following steps:
	  a. Start Windows in real mode by typing "win /r" (without the quotation
	     marks).
	
	  b. Close any applications that load automatically.
	
	  c. From the File menu, choose Run.
	
	  d. Type "swapfile" (without the quotation marks) and then press the ENTER
	     key.
	
	  If removing the permanent swap file corrects the problem, optimize your hard
	  disk with a program such as Symantec's Speed Disk or PC Tools(TM) Compress
	  and then reinstall the permanent swap file.
	
	5. Turn off 32-bit disk access and 32-bit file access.
	
	If you are running Windows 3.1 or Windows for Workgroups, start Windows with the
	/D:F parameter (WIN /D:F) to disable 32-bit disk access.
	
	If you are running Windows for Workgroups 3.11, start Windows with the /D:C
	parameter (WIN /D:C) to disable 32-bit file access. The /D:F and the /D:C
	parameters (WIN /D:FC) can be combined to disable 32-bit disk access and 32-bit
	file access at the same time.
	
	REINSTALLING WINDOWS
	--------------------
	
	If you have followed all the above steps and still receive GP faults, there is
	most likely a problem with the machine or the way the hardware is configured.
	Use the following procedure to reinstall Windows to eliminate any possible
	remaining software or disk-integrity conflicts:
	
	1. Remove any hardware such as external drives, modems, sound cards, and so
	  forth from the machine. If the machine uses other special hardware, such as a
	  full-page monitor, printer-sharing devices, or hardware keys used for copy
	  protection, these items should be removed or swapped for standard devices
	  that are known to work correctly.
	
	2. Use the machine's CMOS Setup program to disable any feature that moves
	  memory. (Consult your hardware documentation for specific instructions on
	  modifying the CMOS settings.) This includes video shadowing, ROM BIOS
	  shadowing, and any feature dealing with A20 handling. Also make sure the
	  machine's primary startup (boot) drive is drive A.
	
	3. Delete any reference to Windows on the PATH command in your AUTOEXEC.BAT
	  file. Also, remove the DEVICE command for HIMEM.SYS from the CONFIG.SYS file.
	  For more information, see the "Eliminate Software Conflicts at the MS-DOS
	  Level" section on page 6 of this document.
	
	4. Run Windows Setup with the following steps:
	
	  a. To run Windows Setup in Custom mode, type "a:setup" (without the quotation
	     marks) and press ENTER. When prompted for Express or Custom Setup, press C
	     for Custom Setup.
	
	  b. When you are prompted with the current Windows directory name, choose a
	     new directory (such as WINTEST) to make sure the files are copied to a new
	     location on your hard disk.
	
	  c. At the configuration screen, ensure the appropriate options are selected
	     for your specific hardware. Make sure the Computer setting is correct, set
	     the Mouse option to "no mouse or pointing device," and set the Display
	     option to VGA. Press the ENTER key to continue.
	
	  d. In the Windows Setup dialog box, clear the Set Up Printers check box
	     (press ALT+P) and the Set Up Applications Already On Hard Disk(s) check
	     box (press ALT+A), then choose the Continue button.
	
	  e. Clear all five check boxes in the Component section of the Windows Setup
	     dialog box and choose the Continue button. Since you don't have mouse
	     functionality at this time, clear the check boxes as you did in the
	     previous step by pressing the ALT key plus the underlined letter in the
	     component name.
	
	  f. Choose the Change button in the Virtual Memory dialog box and then choose
	     the OK button.
	
	  g. Under New Settings, select None in the Type box.
	
	  h. Choose the Change button and then choose the Yes button.
	
	  i. Choose the Continue button to allow Windows Setup to update your
	     CONFIG.SYS and AUTOEXEC.BAT files.
	
	You now have the minimum Windows installation, with the new Windows files in a
	different location on the hard disk. If this doesn't eliminate the GP faults, a
	hardware or BIOS conflict exists somewhere in your system.
	
	Additional query words: gpf
	
	======================================================================
	Keywords          : kbfile kbtshoot 
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : :3.0,3.0a,3.1,3.11
	Issue type        : kbinfo
	
	=============================================================================
	
