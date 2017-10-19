---
layout: page
title: "Q76783: README.TXT: General Notes About Hardware"
permalink: /kb/076/Q76783/
---

## Q76783: README.TXT: General Notes About Hardware

	Article: Q76783
	Product(s): Miscellaneous Windows Products
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows with Multimedia Extensions, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following information is contained in the Windows with Multimedia Extensions
	version 1.0 README.TXT file. The Setup program copies this file to the Windows
	with Multimedia Extensions directory.
	
	This information does not apply to later versions of Windows.
	
	MORE INFORMATION
	================
	
	GENERAL NOTES ABOUT HARDWARE
	============================
	
	More than 16 megabytes (MB) of RAM
	----------------------------------
	
	If your computer has over 16MB of RAM, you must run the HIMEM.SYS that
	you received with Windows 3.0, not other XMS drivers.
	
	Using COM Ports for Communications
	----------------------------------
	
	If you are running a non-Windows application that uses COM ports for
	communications, you might lose characters or receive protection
	violations. If so, include the following setting in your SYSTEM.INI
	file
	
	  COMxProtocol=XOFF
	
	where x is the number for the COM port
	
	For information on this switch and instructions on changing SYSTEM.INI
	settings, see the on-line document, SYSINI2.TXT.
	
	Using Serial Communications Ports Simultaneously
	------------------------------------------------
	
	On some systems, you might have problems simultaneously using the COM1
	and COM3 ports or the COM2 and COM4 ports. If so, make sure the
	[386enh] section of your SYSTEM.INI file contains the following
	setting:
	
	  COMIrqSharing=true
	
	This setting allows simultaneous use of the COM1 and COM3 (or COM2 and
	COM4) ports on some systems. However, many serial communications
	adapters do not allow these ports to be used simultaneously,
	regardless of the setting in your SYSTEM.INI file.
	
	Using the COM3 and COM4 Serial Ports in 386 Enhanced Mode
	---------------------------------------------------------
	
	Some PC systems with COM3 and COM4 serial communications ports use I/O
	base port addresses that differ from the default addresses that
	Windows uses when running in 386 enhanced mode. This difference can
	cause Windows to deny access to a port that is actually available. To
	avoid this problem, make sure that all COMxBase= settings in the
	[386enh] section of the SYSTEM.INI file are set correctly for the
	serial port adapter(s) you are using. Many adapters use the values
	COM3Base=3E8h and COM4Base=2E8h instead of the default Windows values.
	See your hardware documentation for the correct values for your serial
	port adapter(s).
	
	See the SYSINI2.TXT file for additional information about the
	communications port settings.
	
	Adaptec Controller Boards
	-------------------------
	
	If you are using an Adaptec controller board, you might need to turn
	off double-buffering in SMARTDrive. You can do this by adding the /B-
	switch at the end of the SMARTDrive device line in your CONFIG.SYS
	file.
	
	The following is an example of such an entry:
	
	  device=c:\windows\smartdrv.sys 1024 512 /B-
	
	The All ChargeCard with a 3Com Network
	---------------------------------------
	
	If you have problems running the All ChargeCard in standard mode with
	a 3Com network, remove ALLEMM4.SYS from your CONFIG.SYS file.
	
	Alternately, you can keep ALLEMM4.SYS and start Windows in real mode.
	To start in real mode, type WIN /r at the DOS prompt and press ENTER.
	
	Apricot Computers
	-----------------
	
	 *  If you are running Windows in 386 enhanced mode on Apricot
	    DOS 3.3, you must install a console device driver such as
	    the ANSI.SYS driver you received with MS-DOS.
	
	Adding an entry like the following to your CONFIG.SYS file will
	suffice:
	
	  device=c:\DOS\ANSI.SYS
	
	Failing to do so might cause CTRL+BREAK keystrokes to terminate
	the wrong application.
	
	 *  If you want to run Windows in 386 enhanced mode, you need
	    to install special drivers.  You can obtain these from your
	    Apricot distributor.
	
	AST Rampage Boards
	------------------
	
	You need to upgrade your AST RAMTYPE.SYS driver if both the following
	conditions are true:
	
	 *  You have an IBM PS/2 or micro-channel architecture computer.
	 *  Your board is configured for expanded and extended memory.
	
	RAMTYPE drivers before version 1.20 will not coexist with other
	applications that use extended memory. This makes them incompatible
	with the HIMEM.SYS, which is required by Windows 3.0.
	
	The Windows Setup procedure removes RAMTYPE.SYS from your CONFIG.SYS
	file. This might cause error messages to appear when you start your
	computer, as other drivers that rely on RAMTYPE cannot load. This also
	means that no application can use the expanded memory on your system.
	However, with RAMTYPE.SYS removed, Windows 3.0 runs correctly.
	
	If you have a version of RAMTYPE newer than 1.20, or if you upgrade to
	a newer version, you can include the RAMTYPE command line in your
	CONFIG.SYS file. If you are installing an upgrade, you can simply copy
	this entry from CONFIG.OLD made by Setup when you installed Windows.
	
	AT&T 386 computers with Phoenix ROM BIOS
	----------------------------------------
	
	If your AT&T 386 computer has a Phoenix ROM BIOS version 1.10.14 or
	earlier, you might be unable to run a non-Windows application in a
	window. (To determine whether your computer uses a Phoenix ROM BIOS
	and which version, reboot and check the top line on your screen.)
	
	To correct the problem, complete the following steps:
	
	1. Reboot with the AT&T Customer Test disk you received with your
	  computer.
	
	2. Choose the Setup Utility.
	
	3. Make sure these two settings are disabled: Redirect to Com1
	  Redirect to Com2
	
	4. Follow the instructions to exit and save your changes.
	
	CD-ROM Extensions
	-----------------
	
	If you are using CD-ROM Extensions, include the following entry in the
	[386Enh] section of your SYSTEM.INI file:
	
	  device=LANMAN10.386
	
	You also need to activate the drive by sending it a command before you
	start Windows. For example, type the following at the DOS prompt and
	then start Windows:
	
	  dir x:
	
	where x is the drive letter for the CD ROM drive.
	
	Epson Screen Savers
	-------------------
	
	Some Epson computers have screen-saver utilities that clear the screen
	after a specified period of inactivity. With Windows 3.0, the screen
	saver might detect that the system is idle when it is not. Windows
	will function properly even though the screen is blank, but nothing
	will be displayed until you exit Windows and start up again.
	
	See the documentation that you received with your Epson computer for
	instructions about disabling the screen saver.
	
	For information about ScreenSavers included with the Multimedia
	extensions, see the HyperGuide section entitled Appearances, in the
	Control Panel Concepts. The Control Panel is part of the Main Group in
	HyperGuide.
	
	Everex 386/25 and EMM386.SYS
	----------------------------
	
	If you are using an Everex 386/25 with EMM386.SYS, include the
	following parameters in your CONFIG.SYS file:
	
	  device=EMM386.SYS C600-C7FF
	
	Hitachi Amdek Drives
	--------------------
	
	These drives do not work reliably with Windows 3.0. To resolve this
	problem access the drive before you start Windows by typing the
	following at the DOS prompt
	
	  dir x:
	
	where x: is the drive letter for the Amdek drive
	
	IBM Expanded Memory
	-------------------
	
	If you want your 286-based PS/2 computer configured to use expanded
	memory, you must add the following line to your CONFIG.SYS file:
	
	  device=XMA2EMS.SYS
	
	When you ran Setup to install Windows and chose to let Windows modify
	your CONFIG.SYS, this line was removed. Check the backup, CONFIG.OLD
	for the exact entry you must add.
	
	See your "IBM DOS Command Reference" for further information on using
	XMA2EMS.SYS.
	
	Logitech Bus Mouse
	------------------
	
	If you have a Logitech bus mouse on your computer, Setup will identify
	it as a Microsoft or PS/2 mouse. This is correct. The Logitech bus
	mouse is compatible with the Microsoft mouse driver.
	
	The Logitech serial mouse uses its own driver.
	
	LCD displays
	------------
	
	If you use an LCD display, set it for white text on a black background
	instead of black on white. When you are using Windows, black on white
	is hard on LCD displays. See the documentation that came with your
	display for instructions on changing it.
	
	NCR 925 and EMM386.SYS
	----------------------
	
	If you are using an NCR 925 with EMM386.SYS, include the following
	parameters in your CONFIG.SYS file:
	
	  device=EMM386.SYS E000-EFFF
	
	Plus Hardcard
	-------------
	
	To run Windows 3.0 with a Hardcard you must include the following line
	in your SYSTEM.INI file in the [386Enh] section:
	
	  VirtualHDIRQ=off
	
	See the on-line document SYSINI3.TXT for information about the
	procedure.
	
	It is also a good idea to use SMARTDrive with a Hardcard. See Chapter
	4, "Optimizing Your System," in Introducing Windows with Multimedia
	for more information on using SMARTDrive.
	
	SCSI Hard Disk Drive using DMA
	------------------------------
	
	If your computer has an SCSI hard disk that uses DMA, you must include
	the following entry in the [386Enh] section of your SYSTEM.INI file:
	
	  VirtualHDIRQ=FALSE
	
	In addition, you must have SMARTDrive installed and you must NOT
	disable double-buffering by using the /B- option.
	
	Columbia Data Products SCSI
	---------------------------
	
	To use the Columbia Data Products SCSI hard disk controller with
	Windows 3.0 in 386 enhanced mode, you must update the Columbia Data
	Products SCSI software to version 3.35 or higher.
	
	Tandy 2500 XL with ROM DOS
	---------------------------
	
	The Tandy 2500 XL can be configured to use ROM DOS. If you want to use
	this feature, after you run Windows Setup, you must run the Tandy
	setup program (SETUPXL). Modify your configuration so that your
	AUTOEXEC.BAT and CONFIG.SYS files are read from drive C.
	
	Toshiba Plasma Display
	----------------------
	
	Toshiba VGA-compatible plasma displays have built-in protection
	against overheating. This protection causes the screen to dim whenever
	more than half of the screen is brightly lit. If this makes your
	display difficult to use with Windows, change your display colors by
	using the VCHAD program provided with your Toshiba hardware.
	
	To change the plasma display colors you'll need to copy special files
	to your Windows directory, modify the Windows desktop colors, and
	create a special batch file for starting Windows. The procedures are
	outlined in the following steps.
	
	Copying the Files
	-----------------
	
	1. Copy VCHAD.EXE into your Windows directory. (The VCHAD program
	  should be on the Toshiba Diagnostics and Supplemental Disk you
	  received with the DOS disks for your Toshiba. If not, request it
	  from Toshiba at 1-800-999-4CSD in the United States. Outside the
	  U.S., contact your local Toshiba office.)
	
	2. Copy TOSHWIN.VCD from the MOAK CD-ROM into your Windows directory.
	
	Modifying the Windows Desktop Colors
	------------------------------------
	
	1. Start Windows and from Control Panel, choose the Color icon.
	
	2. Open the Color Scheme drop-down list box and select Fluorescent.
	
	3. Choose the Color Palette button.
	
	4. Make the following color changes to Screen Elements:
	
	       Screen Element          Color
	       ---------------------------------------------------
	
	       Window Background       fifth column, fifth color
	       Window Text             bottom right color (white)
	       Application Workspace   last column, second color
	
	     See the HyperGuide section, "Appearances," in the Control
	     Panel Concepts for more information on changing desktop colors.
	     The Control Panel is part of the Main  Group in HyperGuide.
	
	5. Choose the Save Scheme button and choose OK to save your changes.
	
	6. Choose OK to close Control Panel.
	
	Creating the Batch File
	-----------------------
	
	1. Using Windows Notepad (or another text editor), create the
	  following batch file and save it in your Windows directory as
	  WINPLSMA.BAT.
	
	       VCHAD /R:TOSHWIN.VCD
	       WIN
	       VCHAD /C:1
	
	  For information about using Notepad, see the description of Notepad
	  in the HyperGuide Accessories Group.
	
	2. Exit Windows and start it again using WINPLSMA.BAT.
	
	Wyse Computers
	--------------
	
	If you are using a Wyse computer to run Windows, you might need to
	modify the device=HIMEM.SYS line in your CONFIG.SYS file to read:
	
	  device=[path]HIMEM.SYS  /M:WYSE
	
	Using VGA Display Adapters
	--------------------------
	
	 *  If you use a VGA-compatible display adapter and have
	    difficulties running Windows in 386 enhanced mode, you
	    might need to include the following line in the [386Enh]
	    section of your SYSTEM.INI file:
	
	      EMMEXCLUDE=C400-C7FF
	
	    This is because some VGA compatible cards use additional
	    memory to enhance the performance of their cards.
	    Manufacturers of these cards include Video 7 and Paradise.
	    Display adapter boards with the main chip(s) manufactured
	    by Tseng Labs, Chips and Technologies, Paradise, and
	    Headland Technologies also function this way.
	
	    When Windows is running in 386 enhanced mode and is
	    configured for VGA, Windows detects most of these cards
	    and automatically excludes the additional memory. However,
	    you must add the line to SYSTEM.INI yourself if:
	
	      - You have both an 8514 and a VGA display adapter and
	        configured Windows for the 8514.
	
	      - You have an enhanced VGA adapter that Windows does
	        not recognize.
	
	    See the SYSINI2.TXT on-line document for the procedure.
	
	 *  If you have both a VGA display adapter (primary) and an
	    8514 (secondary), you might have problems switching between
	    full-screen non-Windows applications when running Windows
	    in 386 enhanced mode.
	
	    If an application does not display properly, the digital
	    to analog converter (DAC) on your VGA card needs to be
	    updated. Contact the manufacturer for an upgrade.
	
	    In the meantime, if your application has a command to
	    refresh the screen, you might be able to temporarily
	    correct the display so you can use the application. For
	    example, if your display is a color display, you can type
	    the following at the DOS Prompt and press ENTER:
	
	      MODE CO80
	
	    See your application's documentation for information about
	    commands that refresh the screen.
	
	Using Self-Configuring Display Adapters
	---------------------------------------
	
	Some display adapters can change their configurations to match what an
	application tries to do. For example, if an application tries to use a
	VGA display, the adapter could switch from an EGA configuration to
	VGA. This type of display adapter makes use of non-maskable interrupts
	(NMIs) to reconfigure itself as you work.
	
	To use this type of display adapter with Windows running in 386
	enhanced mode, you must disable the NMI (self-configuring) option.
	First configure the display adapter for the type of monitor you have,
	then disable the NMI option. See your hardware documentation for
	further instructions.
	
	KBCategory: kbref kbdisplay
	KBSubcategory:
	
	Additional query words: MMWIN kbmm 1.00 readme
	
	======================================================================
	Keywords          :  
	Technology        : kbWinMultiXSearch kbWinMultiX100
	Version           : :1.0
	
	=============================================================================
	
