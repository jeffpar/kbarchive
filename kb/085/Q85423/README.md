---
layout: page
title: "Q85423: README.WRI: Microsoft Windows &amp; MS-DOS 5 for IBM PS/2"
permalink: kb/085/Q85423/
---

## Q85423: README.WRI: Microsoft Windows &amp; MS-DOS 5 for IBM PS/2

	Article: Q85423
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 3.1 
	- Microsoft MS-DOS operating system version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following information was taken from the Windows & MS-DOS 5 for IBM PS/2
	README.WRI file.
	
	MORE INFORMATION
	================
	
	More Information About Microsoft Windows Version 3.1
	----------------------------------------------------
	
	This document contains important information that is not included in the
	Microsoft Windows User's Guide or in online Help.
	
	Within this document, "Windows Setup" refers to the Windows part of the Windows
	and MS-DOS Setup program. You can execute the Windows only part of this program
	by following the instructions below:
	
	When this file instructs you to run Windows Setup, do the following:
	
	- If this file instructs you to run Setup from the Main Group, carry out the
	  procedure.
	
	- If you have not installed Microsoft Windows and MS-DOS, carry out the
	  procedure described in "Running Setup" in the Microsoft Windows and MS-DOS
	  Getting Started manual. In this case, you will have to install MS-DOS before
	  you install Windows.
	
	- If you have installed Microsoft Windows and MS-DOS, and this\177 file does
	  not instruct you to run Setup from the Main Group, carry out the following
	  procedure to run Setup for Windows only:
	
	  1. Make drive C your current drive.
	
	  2. Insert Setup Disk #1 into drive A.
	
	  3. Type the following at the C> command prompt:
	
	  " a:setup" (without the quotation marks)
	
	Note: If you plan on using a terminate-and-stay-resident (TSR) program with
	Windows, please read the SETUP.TXT online document first. It contains important
	information about running TSR programs with Windows version 3.1 and the Windows
	and MS-DOS Setup program.
	
	Using Write to View This Document
	
	If you enlarge the Write Window to its maximum size, this document will be easier
	to read. To do so, click the Maximize button in the upper-right corner of the
	window. Or open the Control menu in the upper-left corner of the Write window
	(press ALT+SPACEBAR), and then choose the Maximize command.
	
	To move through the document, press PAGE UP or PAGE DOWN or click the arrows at
	the top and bottom of the scroll bar along the right side of the Write window.
	
	To print the document, choose the Print command from the File menu.
	
	For Help on using Write, press F1.
	
	To read other online documents, choose the Open command from the File menu.
	
	Contents
	
	This document contains additional information on the following topics:
	
	1.0 Running Windows with an Operating System Other Than MS- DOS
	
	2.0  Preventing Stack Overflow
	
	3.0  Using 32-Bit Disk Access
	
	4.0  Using Memory Managers
	4.1    Solving Memory Conflicts by Using MONOUMB.386 or MONOUMB2.386
	4.2    Solving Memory Conflicts by Excluding an Address Range
	4.3    Using 386MAX
	
	5.0  Using Advanced Power Management (APM)
	
	6.0  Using SMARTDrive Version 4.0
	6.1    Accessing Floppy Disk Drives on Older COMPAQ DESKPROS
	6.2    Using SMARTDrive with Double Buffering
	6.3    Using SMARTDrive with Norton Utilities Version 6.0 Disk Monitor
	6.4    Using SMARTDrive with SuperStor Disk-Compression Utility
	6.5    Using SMARTDrive with Copy-Protected Games Applications
	
	7.0  Using Multimedia Extensions with Windows Version 3.1
	7.1    Upgrading to Windows Version 3.1
	7.2    Configuring MIDI Setups
	7.3    Configuring Your Display
	7.4    Sample MIDI Files
	7.5    Using HyperGuide
	7.6    Using Music Box
	7.7    Using Alarm Clock
	
	8.0  Running Specific Non-Windows Applications
	8.1    Communications Applications
	8.2    Creative Labs JukeBox
	8.3    Game or Timing-Sensitive Applications
	8.4    Third-Party Expanded-Memory Emulators with MS-DOS Version 5.0
	8.5    PC Tools Applications
	8.6    WordPerfect Version 5.1
	8.7    3270-Emulation Applications
	
	9.0  Using Specific Displays with Windows Version 3.1
	9.1     Installing Display Adapters by Following the Manufacturer's
	       Instructions
	9.2     Upgrading Display Drivers When Using Soft-Font Packages
	9.3     Using Self-Configuring Display Adapters
	9.4     Hercules Graphics Station
	9.5     LCD
	9.6     SuperVGA
	9.7     Third-Party Display Drivers: Running Non-Windows Applications
	9.8     TIGA
	9.9     VGA-Compatible
	9.10    Video Seven: Using 256-Color Support
	9.11    WinSpeed
	9.12    IBM XGA: Configuring Color and Resolution
	9.13    IBM XGA: Using EMM386
	9.14    Video Seven: VEGA Deluxe card
	
	10.0  Using Specific Mice with Windows Version 3.1
	10.1    Microsoft Mouse
	10.2    Genius Mouse
	10.3    Logitech Mouse
	10.4    Logitech Cordless Mouse
	10.5    Logitech or Microsoft Ballpoint Mouse on a Toshiba T2200SX
	10.6    Mouse Systems Mouse on PS/2 Ports
	10.7    Mouse Systems optical mouse
	
	11.0  Using Additional Hardware Configurations with Windows 3.1
	11.1    CD-ROM Drives
	11.2    EISA Systems with More Than 16 Megabytes of Extended Memory
	11.3    Epson Screen Savers
	11.4    Everex 386/25 with EMM386
	11.5    NCR 925 with EMM386
	11.6    Non-US Keyboard Layouts: Using Application Shortcut Keys
	11.7    Plus Hardcard
	11.8    SCSI Hard Disk Using DMA
	11.9    Columbia Data Products SCSI Hard-Disk Controller
	11.10   Serial Ports on 286-Based Computers: Improving   Performance
	11.11   Sound Blaster Audio Card
	11.12   Tandy 2500XL with MS-DOS in ROM
	11.13   Wyse Computers
	11.14   Memory Cards: Parity Errors
	
	12.0  Other Online Documents
	
	1.0  Running Windows with an Operating System Other Than MS-DOS
	---------------------------------------------------------------
	
	Microsoft Windows and MS-DOS work together as an integrated system.
	They were designed together and extensively tested together on a wide
	variety of computers and hardware configurations. Running Windows
	version 3.1 on an operating system other than MS-DOS could cause
	unexpected results or poor performance.
	
	2.0  Preventing Stack Overflow
	------------------------------
	
	Stacks are temporary data structures that MS-DOS and applications use
	for processing hardware events. If, while setting up Windows, Setup
	detects hardware or software that require a certain stack size, Setup
	will place the following command line in your CONFIG.SYS file:
	
	stacks=9,256
	
	This should be sufficient most of the time. However, if you receive
	the Internal Stack Overflow message when running Windows in 386
	enhanced mode, or if your system fails for no apparent reason when
	running Windows in standard mode (especially if you are setting up or
	moving the mouse), first try increasing the second number on the
	stacks= command line (for example, 256)  If that doesn't work, try
	increasing the first number (for example, 9). For more information
	about the stacks setting and modifying the CONFIG.SYS file, see your
	MS-DOS documentation.
	
	3.0  Using 32-Bit Disk Access
	-----------------------------
	
	By default, 32-bit disk access is turned off to prevent disk errors on
	some battery-powered portable computers. However, 32-bit disk access
	may run correctly with some battery-powered portable computers, such
	as the Zenith MasterSport SL. If you want to try using 32-bit disk
	access, select the 32-bit disk access check box in the Virtual Memory
	dialog box (choose the 386 Enhanced option in Control Panel). For more
	information, see Chapter 14, "Optimizing Windows," in the Microsoft
	Windows User's Guide.
	
	Caution: Before using 32-bit disk access on a battery-powered portable
	computer, it is highly recommended that you back up your hard disk.
	Because 32-bit Disk Access has not been fully tested on all battery-
	powered systems, you may receive disk errors while using it.
	
	4.0  Using Memory Managers
	--------------------------
	
	This section describes problems you may encounter using memory
	managers with Windows
	version 3.1.
	
	4.1  Solving Memory Conflicts by Using MONOUMB.386 or MONOUMB2.386
	------------------------------------------------------------------
	
	If you encounter the following message when starting Windows in 386
	enhanced mode, your display driver may be accessing the monochrome
	address range (B000-B7FF), which prevents the memory manager from
	using this range for upper memory blocks:
	
	"Windows cannot set up an upper memory block at segment B000. Exclude
	this address space by using the syntax of your memory manager. For
	more information, see the README.WRI file. Type WIN /S to start
	Windows in standard mode and choose the Read Me icon,"
	
	To solve this problem, try installing MONOUMB2.386 on your system.
	MONOUMB2.386 is a device driver provided with Windows that allows
	certain memory managers to use the monochrome address range for upper
	memory blocks, even if your display driver is accessing this range.
	
	To install MONOUMB2.386:
	
	1.  Copy and expand the MONOUMB2.38_ file that is on your Windows disk
	   to your Windows SYSTEM directory by typing the following at the
	   MS-DOS prompt:
	
	       expand a:monoumb2.38_ c:\windows\system\monoumb2.386
	
	2.  Add the following setting to the [386Enh] section in the
	   SYSTEM.INI file:
	
	       device=monoumb2.386
	
	3.  Start Windows.
	
	Note: MONOUMB2.386 may not work with some memory managers, such as
	EMM386.EXE. In this case, you can try using MONOUMB.386, provided with
	the Windows Driver Library. To obtain a copy of the Windows Driver
	Library, contact Microsoft.
	
	You can also exclude the address region B000-B7FF, which specifies
	that the memory manager should not try to use this address range for
	upper memory blocks.  For information about excluding specific address
	ranges, see the following topic.
	
	4.2  Solving Memory Conflicts by Excluding an Address Range
	
	If you encounter the following message when starting Windows in 386
	enhanced mode, and the address specified is not B000, you must exclude
	the address range.
	
	"Windows cannot set up an upper memory block at segment xxxx. Exclude
	this address space by using the syntax of your memory manager. For
	more information, see the README.WRI file. Type WIN /S to start
	Windows in standard mode and choose the Read Me icon."
	
	If the address specified is B000, you can try using MONOUMB2.386 or
	MONOUMB.386, as described in the preceding topic.
	
	The method you use to exclude an address range depends on the memory
	manager you are using. For example, if you are using EMM386.EXE, you
	need to remove the I=xxxxx option from the device=emm386.exe command
	line in your CONFIG.SYS file, where xxxxx is the address range
	starting at the address specified in the error message.
	
	If you are using QEMM, you need to include the X= option on the
	device=qemm386.sys command line in your CONFIG.SYS file. For example,
	to exclude the address range C000-C7FF, you would specify the
	following:
	
	  device=qemm386.sys X=C000-C7FF
	
	For more information about modifying your CONFIG.SYS file, see your
	MS-DOS documentation. For more information about installing and
	configuring EMM386.EXE, see Chapter 14, "Optimizing Windows," in the
	Microsoft Windows User's Guide. For information about installing
	and configuring other memory managers, see the documentation provided
	with your memory manager.
	
	4.3  Using 386MAX
	-----------------
	
	If you are running 386MAX with Windows version 3.1, note the
	following:
	
	- Do not use options that limit the EMS swap region in the upper
	memory area. If you include exclude= options on the 386max or bluemax
	command line or in the .PRO file (usually called 386MAX.PRO), make
	sure that the address range specified does not extend beyond A000.
	
	For example, exclude=1800-A000 is acceptable, but exclude=1800-B800 is
	not. If the address range specified by using the exclude= option
	extends beyond A000, Windows may not run properly in 386 enhanced
	mode. If you must exclude an address range above A000, use the
	RAM= option instead. For more information about this and other
	options, see your 386MAX documentation.
	
	- Do not load SMARTDrive when QCache is running.
	
	Note: The 386MAX setup program does not detect SMARTDrive version 4.0
	and may recommend that you install QCache.
	
	- If you update an earlier version of 386MAX to version 6.0, the
	386MAX version 6.0 setup program may not remove the LOAD=WINDOWS.LOD
	line from your .PRO file. You can remove this line manually. It is not
	needed and removing it will free up a small amount of memory.
	
	5.0  Using Advanced Power Management (APM)
	------------------------------------------
	
	Windows version 3.1 includes support for Advanced Power Management
	(APM). This enables Windows to extend battery life, display power-
	status information, and work together with the suspend features of
	battery-powered personal computers. To find out if your computer
	supports APM, contact your computer manufacturer.
	
	If your computer supports APM, do the following to install it on your
	system:
	
	1. Quit Windows.
	
	2. Run Windows Setup and select one of the following system types:
	
	  - MS-DOS System with APM
	  - Intel 386SL Based System with APM
	
	 Select "Intel 386SL Based System with APM" if your computer has an
	 Intel 386SL processor and supports the SL Enhanced Options for APM.
	 Otherwise, select "MS-DOS System with APM."
	
	3.  Restart Windows.
	
	    A Power icon appears in the Control Panel window.
	
	4.  Choose the Power icon to configure power-management settings.
	
	For more information about the settings, press F1 or choose the Help
	button while using the Power
	Management dialog box.
	
	6.0  Using SMARTDrive Version 4.0
	---------------------------------
	
	This section describes some solutions to problems that you might
	encounter when using SMARTDrive version 4.0 (provided with Windows
	version 3.1) together with specific applications or hardware.
	
	6.1  Accessing Floppy Disk Drives on Older COMPAQ DESKPROS
	----------------------------------------------------------
	
	On some COMPAQ DESKPRO 386/16 and 386/20 computers, you might
	experience problems accessing floppy disks when SMARTDrive version 4.0
	is installed. To work around the problem, you can try one of the
	following solutions:
	
	- Place the SMARTDrive buffer into low memory by adding the following
	option to the smartdrv command line in the AUTOEXEC.BAT file:
	
	     smartdrv /L
	
	- Disable the caching on floppy disk drives by adding the following
	options to the smartdrv command line in the AUTOEXEC.BAT file:
	
	     smartdrv A- B-
	
	For more information about these options, see Chapter 14, "Optimizing
	Windows," in the Microsoft Windows User's Guide.
	
	6.2  Using SMARTDrive with Double Buffering
	-------------------------------------------
	
	Most expanded-memory emulators attempt to optimize SMARTDrive by
	configuring it to load into upper memory blocks (UMBs). This will
	cause problems if you are running Windows in 386 enhanced mode with
	double buffering. If you need to use double buffering with SMARTDrive,
	make sure that SMARTDrive is configured in the CONFIG.SYS file to load
	into low memory. The command line should look like this:
	
	       device=smartdrv.exe /double_buffer
	
	This problem applies only to the smartdrv command line in the
	CONFIG.SYS file. It does not apply to the references to SMARTDrive in
	the AUTOEXEC.BAT file. For more information about using double
	buffering with SMARTDrive, see Chapter 14, "Optimizing Windows," in
	the Microsoft Windows User's Guide.
	
	6.3  Using SMARTDrive with Norton Utilities Version 6.0 Disk Monitor
	--------------------------------------------------------------------
	
	Do not use the Disk Protect feature in Norton Utilities Version 6.0
	Disk Monitor with SMARTDrive version 4.0. If you try to write to the
	protected drive, you will encounter an error and your system will
	fail. If you want to write to and cache a protected drive, add the
	drive letter to the smartdrv command line in your AUTOEXEC.BAT file.
	For example, if drive D is a protected drive, you would add the
	following:
	
	  smartdrv d
	
	Or you can use the Norton cache program instead when using Disk
	Monitor.
	
	6.4  Using SMARTDrive with SuperStor Disk-Compression Utility
	-------------------------------------------------------------
	
	-  Do not use the Create Mountable Drive, Mount, and Dismount features
	of SuperStor after SMARTDrive is loaded. You must configure your
	SuperStor partitions before loading SMARTDrive. Windows Setup places
	the smartdrv command line first in your AUTOEXEC.BAT file. If your
	AUTOEXEC.BAT file includes "mount" configuration commands, make sure
	that the smartdrv command line follows the SuperStor configuration
	command lines.
	
	-  Also, you will receive read-write errors if you use SMARTDrive to
	cache a SuperStor compressed drive. To prevent SMARTDrive from caching
	the compressed drive, you must include the drive letter- option on the
	smartdrv command line.
	
	For example, if drive C is the uncompressed drive, and drives E and F
	are the compressed SuperStor drives, you would include the following
	command line in your AUTOEXEC.BAT file:
	
	       smartdrv e- f-
	
	6.5  Using SMARTDrive with Copy-Protected Games and Applications
	----------------------------------------------------------------
	
	When using SMARTDrive, you may encounter problems starting a copy-
	protected application that requires you to place the master disk in
	the floppy disk drive. To solve this problem, you need to disable
	caching on the floppy disk drive by using the drive letter - option
	when you load SMARTDrive. For example, if you load SMARTDrive from
	your AUTOEXEC.BAT file and are using drive A, you need to include the
	following command line in your AUTOEXEC.BAT file:
	
	  smartdrv a-
	
	7.0  Using Multimedia Extensions Version 1.0 with Windows Version 3.1
	---------------------------------------------------------------------
	
	This section covers information that is specific to using the
	Multimedia Extensions version 1.0 with Windows version 3.1. It also
	covers additional tasks you need to perform to configure your system
	properly for use with the multimedia extensions.
	
	7.1  Upgrading to Windows Version 3.1
	-------------------------------------
	
	To use the multimedia extensions with Windows version 3.1, first set
	up Windows with Multimedia version 1.0, and then upgrade to Windows
	version 3.1 by installing it into the same directory. If you set up
	Windows version 3.1 before setting up Windows with Multimedia, not all
	the files will be properly installed.
	
	7.2  Configuring MIDI Setups
	----------------------------
	
	When you set up Windows version 3.1, Setup copies the multimedia
	extensions MIDI-setup file MIDIMAP.CFG to MIDIMAP.OLD, and then
	replaces it with an updated version. This version contains several new
	MIDI setups that support playing MIDI information authored according
	to General MIDI guidelines. If you want to use a setup in the new
	MIDIMAP.CFG file and are using sound drivers that are not provided by
	Windows, you will need to change the port settings to match the ports
	used by your sound device. To do this, use the MIDI Mapper option in
	Control Panel.
	
	You can also use the original MIDIMAP.CFG file (renamed by Setup to
	MIDIMAP.OLD). You might want to do this if the original file contains
	custom MIDI setups that you created yourself or that were provided by
	your sound-device manufacturer. To use the original file, rename
	MIDIMAP.CFG to MIDIMAP.WIN, and then rename MIDIMAP.OLD to
	MIDIMAP.CFG. If the port settings in your original setups refer to the
	Ad Lib or Sound Blaster ports and you are using different drivers,
	then you will need to change the port settings to match the output
	ports used by your sound device.
	
	For more information about using MIDI Mapper to modify MIDI setups,
	see Chapter 5, "Control Panel," in the Microsoft Windows User's Guide.
	
	7.3  Configuring Your Display
	-----------------------------
	
	The multimedia extensions Display icon in Control Panel is not
	available when you upgrade from Windows with Multimedia version 1.0 to
	Windows version 3.1. If you need to change options for your display,
	use the Windows Setup application in the Main group in Program Manager
	to make these changes.
	
	7.4  Sample MIDI File
	---------------------
	
	The sample MIDI file CANYON.MID included with Windows version 3.1 that
	you can play with Windows Media Player is provided by Passport
	Designs, Inc.
	
	7.5  Using HyperGuide
	---------------------
	
	The information in HyperGuide refers to Windows version 3.0, not
	Windows version 3.1. If you need to use Windows documentation, see the
	Microsoft Windows User's Guide that comes with Windows version 3.1.
	
	7.6  Using Music Box
	--------------------
	
	Music Box is not fully compatible with Windows version 3.1. Although
	your compact discs will play correctly, you will encounter problems
	using the Save Info button in the Program dialog box to save disc-
	title and track-title information. If you want to modify this
	information, you must do so manually by editing the MUSICBOX.INI file.
	To add a new disc to the file, you can determine the disc ID number by
	viewing the information in the About dialog box.
	
	7.7  Using Alarm Clock
	----------------------
	
	The Alarm Clock in the Multimedia Extensions version 1.0 is not fully
	compatible with Windows version 3.1. If you are using the digital
	display, the time may appear slanted or a system error may occur,
	depending on the size of the Alarm Clock window.
	
	8.0  Running Specific Non-Windows Applications
	----------------------------------------------
	
	This section provides general information about running applications
	in Windows version 3.1. It also describes problems you might encounter
	while running specific non-Windows applications with Windows version
	3.1.
	
	8.1  Communications Applications
	--------------------------------
	
	For best results when running a non-Windows communications application
	in the background, run it as an icon instead of in a window. Also,
	create a PIF (program information file) for the non-Windows
	Communications application (if one does not already exist) and do the
	following:
	
	- Select the Execute: Background check box.
	
	- If you encounter errors during file transfers while running the
	 application in the background, increase the Background Priority
	 option in the Advanced Options dialog box.
	
	- If you use a permanent swap file with 32-bit disk access, select the
	 Lock Application Memory check box in the Advanced Options dialog
	 box.
	
	For information about using and creating PIFs, see Chapter 8, "PIF
	Editor,"in the Microsoft Windows User's Guide.
	
	8.2  Creative Labs JukeBox
	--------------------------
	
	If you are using a Sound Blaster sound card, do not set up or use the
	JukeBox application included in your Sound Blaster package with
	Windows version 3.1.  JukeBox interferes with the Windows version 3.1
	driver for the Ad Lib synthesizer and causes errors when you try to
	install the drivers for the Sound Blaster card.
	
	8.3  Game or Timing-Sensitive Applications
	------------------------------------------
	
	Some game applications or applications that rely on the computer's
	timer may perform poorly in Windows version 3.1. You can try
	increasing the performance by turning off the TrapTimerPorts
	setting in the [386Enh] section of the SYSTEM.INI file, as follows:
	
	  TrapTimerPorts=Off
	
	Note: The TrapTimerPorts setting is on by default. Turning it off may
	cause errors or a loss of data when transferring files by using a
	communications application. It is recommended that you leave this
	setting turned on when using a communications application.
	
	8.4  Third-Party Expanded-Memory Emulators with MS-DOS Version 5.0
	------------------------------------------------------------------
	
	Many expanded-memory emulators will cause problems if you use them to
	provide upper memory blocks (UMBs) for the MS-DOS version 5.0 loadhigh
	and devicehigh commands. If you want to use these MS-DOS commands to
	load drivers or applications high, then use the Windows EMM386.EXE
	expanded-memory emulator to provide UMBs instead. If you must use a
	third-party expanded-memory emulator, then use the load high feature
	provided with the emulator, instead of the MS-DOS commands.
	
	8.5  PC Tools Applications
	--------------------------
	
	If you run a PC Tools non-Windows application in a window, or if you
	switch to it while Windows is running in standard mode, the display
	might be garbled, because PC Tools applications use a graphics font
	that is not displayed correctly (this problem does not occur if you
	run the application in a full screen when Windows is running in 386
	enhanced mode).
	
	To correct the problem, start your PC Tools non-Windows applications
	by using the /NF option. If your PC Tools non-Windows applications are
	included in a Program Manager group, use the Properties command to add
	the /NF option to the command line for the application. For more
	information about changing application properties, see Chapter 3,
	"Program Manager," in the Microsoft Windows User's Guide.
	
	You can also include the /NF option in the application's program
	information file (PIF) by typing it in the Optional Parameters text
	box in PIF Editor, or you can use the PC Tools PC Config program to
	specify that PC Tools applications should use the Text Font to display
	information. For more information about changing an application's PIF,
	see Chapter 8, "PIF Editor," in the Microsoft Windows User's Guide.
	
	8.6  WordPerfect Version 5.1
	----------------------------
	
	When running WordPerfect version 5.1 in a window, the Windows mouse
	pointer and the WordPerfect mouse pointer will not appear in the same
	place. To fix this problem, do the following:
	
	1.  In WordPerfect, press SHIFT+F1.
	
	2.  Select M for Mouse and A for Acceleration Factor.\177
	
	3.  Set the Acceleration Factor to 1.
	
	4.  Press ENTER three times to return to your document.
	
	5.  Enlarge the WordPerfect window to fill the entire screen.
	
	6.  Move the Windows mouse pointer into the WordPerfect window, and
	   then move it to the far-right edge of the window.
	
	7.  Move the mouse pointer to the far-left edge of the window.
	
	8.  Move the pointer back to the center of the window, and then move
	   it down to the bottom edge.
	
	9.  Finally, move the pointer up to the upper-left corner of the
	   window.
	
	The Windows mouse pointer and the WordPerfect mouse pointer should now
	be in the same
	location.
	
	8.7  3270-Emulation Applications
	--------------------------------
	
	You may encounter problems using certain 3270-emulation applications
	with Windows version 3.1. If you are using one of these applications,
	it is recommended that you purchase the Windows Resource Kit for the
	Microsoft Windows Operating System Version 3.1. This kit provides
	troubleshooting information about using 3270-emulation applications,
	in addition to complete technical information about Windows version
	3.1 for the support professional. It includes a technical reference
	manual and a disk containing helpful utilities, system resource
	viewers, drivers, and accessories. To order the Windows Resource Kit
	within the United States, dial:
	
	  1-800-642-7676
	
	To order outside of the United States, dial the phone number for your
	area. You can find this number on the International Subsidiary card.
	
	9.0  Using Specific Display Adapters with Windows Version 3.1
	-------------------------------------------------------------
	
	This section describes some problems you might encounter using
	specific display adapters or drivers with Windows version 3.1.
	
	9.1  Installing Display Adapters by
	Following the Manufacturer's Instructions
	-----------------------------------------
	
	The procedures that are provided by display-adapter manufacturers for
	installing display adapters may require you to replace or modify the
	SETUP.INF file in the Windows SYSTEM directory. This will cause
	problems in Windows version 3.1.
	
	If your third-party display installation replaces or modifies the
	SETUP.INF file, follow these instructions instead to install the
	display-adapter drivers:
	
	1.  Rename the SETUP.INF file provided with your display-adapter
	package to OEMSETUP.INF, and place it on the disk and in the directory
	containing the third-party display driver files.
	
	2.  Run Windows Setup from the Main group and select Other Display
	(Requires disk from OEM) from the list of Display options.
	
	3.  Insert the disk that contains the OEMSETUP.INF file and the driver
	files for your display adapter. Or, if these files are located on your
	hard disk, type the path to the directory that contains the files in
	the text box, and then choose the OK button.
	
	4.  Select the type of display adapter you want to use, and then
	choose the OK button. Windows Setup copies all necessary files from
	the driver disk, and may request files from the Setup disks.
	
	5.  Insert any additional disks that are requested, and then choose
	the OK button.
	
	If you accidentally overwrite the original SETUP.INF file, you can
	copy it from Setup Disk 3 back into your Windows SYSTEM directory.
	
	9.2  Upgrading Display Drivers When Using Soft-Font Packages
	------------------------------------------------------------
	
	If you are using certain soft-font packages, including Bitstream
	Facelift, Publisher PowerPak, and Hewlett-Packard Intellifont, Windows
	Setup may not update your display driver when you upgrade to Windows
	version 3.1. In this case, you need to update your display driver
	after you have set up Windows. To do this, run Windows Setup from the
	Main group, and then select the display driver you want to use from
	the list of Display options. For more information about using Setup
	after you have installed Windows, see Chapter 15, "Maintaining Windows
	with Setup," in the Microsoft Windows User's Guide.
	
	9.3  Using Self-Configuring Display Adapters
	--------------------------------------------
	
	Some display adapters can change their configurations to match what an
	application tries to do. For example, if an application tries to use a
	video graphics adapter (VGA) configuration and your display adapter is
	currently configured as an extended graphics adapter (EGA), the
	adapter can switch from an EGA configuration to a VGA configuration.
	This type of display adapter makes use of non-maskable interrupts
	(NMIs) to change its configuration while you work.
	
	To use this type of display adapter with Windows running in 386
	enhanced mode, you must disable the NMI (also called self-configuring,
	auto-switching, or auto-emulating) option. First, configure
	the display adapter, and then disable the NMI option. For more
	information, see your display-adapter documentation.
	
	9.4  Hercules Graphics Station
	------------------------------
	
	Hercules Graphics Station adapters are supported by Windows version
	3.1 using the TIGA display drivers. If you encounter problems running
	Windows in 386 enhanced mode with the Hercules GS, try adding the
	following line to the [386Enh] section of your SYSTEM.INI file:
	
	  emmexclude=C000-CFFF
	
	For more information about modifying settings in the SYSTEM.INI file,
	see the SYSINI.WRI online document.
	
	9.5  LCD
	--------
	
	If you use an LCD screen, set it for white text on a black background
	instead of black text on a white background. When using Windows, black
	text on a white background wears out LCD screens. See the
	documentation for your screen for instructions on how to do this.
	
	9.6  Super VGA
	--------------
	
	- If you are using a video card and monitor (NEC MultiSync 3D/4D/5D or
	other multifrequency monitor) capable of 800x600, 16-color resolution
	with a third-party Super VGA driver, or one of the following drivers
	provided in the Windows 3.0 Supplemental Driver Library (SDL):
	
	- ATI Mode 54h (800x600 16 colors) v2.00
	- CHIPS Super VGA 82C451 (800x600 16 colors)
	- CHIPS Super VGA 82C452 (800x600 16 colors)
	- Paradise VGA (800x600 16 colors)
	
	use the Super VGA (800x600, 16 colors) driver provided with Windows
	instead. If you do not update your driver, Windows may not work
	properly when running in 386 enhanced mode. In addition, the 3.1
	driver contains new features and performance enhancements.
	
	To install the Windows version 3.1 Super VGA driver, run Windows Setup
	from the Main group, and then select "Super VGA 800x600, 16 colors"
	from the list of Display options. For more information on using Setup
	after you have installed Windows, see Chapter 15, "Maintaining Windows
	with Setup," in the Microsoft Windows User's Guide.
	
	- Super VGA VESA Mode 6Ah
	
	Some Super VGA adapters support higher monitor-refresh rates at
	800x600 resolution with a special VESA mode. If both your video
	adapter and monitor support a higher refresh rate and if you are using
	the Super VGA driver, you may be able to get better video results by
	including the following setting in the [display] section of the
	SYSTEM.INI file:
	
	  svgamode=106
	
	If you encounter problems using this mode, delete this setting from
	the SYSTEM.INI file, and then restart Windows.
	
	9.7  Third-Party Display Drivers: Running Non-Windows Applications
	------------------------------------------------------------------
	
	If you are using a display driver that is not provided with Windows
	version 3.1 and you receive one of the following messages while trying
	to run a non-Windows application:
	
	"Incorrect system version. Run the Windows Setup program again."
	       or
	"386 System display type mismatch."
	
	contact your display manufacturer for an updated driver. You can also
	solve this problem manually by installing 3.0 driver files. These
	files are included on the Windows and MS-DOS Setup disks.
	
	If your display driver works in Windows version 3.0 using the standard
	VGA virtual-display-device file (specified by the device=*vddvga
	setting in the [386Enh] section of the SYSTEM.INI file), then do the
	following:
	
	1. Copy and expand the VDDVGA30.386 file from the Windows and MS-DOS
	  Setup disks to your Windows 3.1 SYSTEM directory.
	
	2. Change the display= setting in the [386Enh] section of the
	  SYSTEM.INI file to: display=VDDVGA30.386
	
	3. Restart Windows.
	
	If your display driver works in Windows version 3.0 using the standard
	VGA grabber file (specified by the 386Grabber=VGA.GR3 setting in the
	[boot] section of the SYSTEM.INI file), then do the following:
	
	1. Copy and expand the VGA30.3GR file from the Windows and MS-DOS
	  Setup disks to your Windows 3.1 SYSTEM directory.
	
	2. Change the 386Grabber setting in the [386Enh] section of the
	  SYSTEM.INI file to: 386Grabber=VGA30.3GR
	
	3. Restart Windows.
	
	9.8  TIGA
	---------
	
	If you are using a Texas Instruments Graphics Architecture (TIGA)-
	based display adapter, make sure that you are using a TIGA display
	driver that is provided by Windows version 3.1. Windows provides two
	versions of the TIGA display driver, "TIGA (Small fonts)" and "TIGA
	(Large fonts)."
	
	To install one of the drivers, run Windows Setup from the Main group,
	and then select the version you want from the list of Display options.
	For more information on using Setup after you have installed Windows,
	see Chapter 15, "Maintaining Windows with Setup," in the Microsoft
	Windows User's Guide.
	
	Note: You cannot use Windows Setup to change TIGA screen resolution.
	If you want to change the resolution, you must first quit Windows, and
	then use the TIGAMODE utility or another resolution utility supplied
	with your display adapter. Unless you want to use a different version
	of the TIGA driver (Small fonts or Large fonts) to change font sizes,
	it is not necessary to run Windows Setup after changing your TIGA
	screen resolution.
	
	9.9  VGA-Compatible
	-------------------
	
	Most VGA-compatible display-adapter cards and main-adapter chips use
	additional memory to enhance their performance. When Windows is
	running in 386 enhanced mode and is configured for VGA, Windows
	detects most of these cards and automatically excludes the additional
	memory.
	
	However, if you have an enhanced VGA that Windows does not recognize,
	you must exclude the additional memory yourself by adding the
	following line to the [386Enh] section of the SYSTEM.INI file:
	
	  emmexclude=C400-C7FF
	
	For more information about modifying the SYSTEM.INI file, see the
	SYSINI.WRI online document.
	
	9.10  Video Seven: Using 256-Color Support
	------------------------------------------
	
	Windows version 3.1 provides 256-color support at several resolutions
	for Video Seven display adapters that have at least 512K of video
	memory. The following table shows the Video Seven 256-color modes that
	are supported by the Video Seven display drivers provided with Windows
	version 3.1.
	
	Model                   640x480     720x512     800x600     1024x768
	
	FastWrite 512K            Yes
	1024i 512K                Yes
	VRAM 512K                 Yes         Yes
	VRAM II 512K              Yes         Yes
	VRAM II 1MB               Yes         Yes         Yes          Yes
	
	If you are using a Video Seven display adapter that has at least 512K
	of video memory, you should use one of the Video Seven display drivers
	for 256-color video provided with Windows version 3.1. These drivers
	take full advantage of the performance improvements and mouse support
	in non-Windows applications. To install one of the drivers, run
	Windows Setup from the Main group, and then select the driver you want
	from the list of Display options. For more information about using
	Setup after you have installed Windows, see Chapter 15, "Maintaining
	Windows with Setup," in the Microsoft Windows User's Guide.
	
	9.11  WinSpeed
	--------------
	
	The WinSpeed version 1.0 installation program, INSTALL.EXE, does not
	work properly with Windows version 3.1. It copies an incompatible
	version of the SETUP.INF file to your Windows directory. To install
	WinSpeed for use with Windows version 3.1, you must get updated
	installation disks from Panacea.
	
	If you have already used the INSTALL.EXE program to install the
	WinSpeed drivers onto your system, the following message will appear
	when you try to run Windows Setup from the Main group:
	
	"The SETUP.INF file on your system is not valid for use with this
	version of Setup."
	
	To correct this problem, do the following:
	
	1. If there is a SETUP.INF file in your Windows directory, delete it.
	  (The SETUP.INF file should never be in your Windows directory.)
	
	2. Copy the SETUP.INF file on Setup Disk 3 to your Windows SYSTEM
	  directory.
	
	3. Contact Panacea Inc. for updated WinSpeed installation disks that
	  are compatible with Windows version 3.1, and then reinstall
	  WinSpeed.
	
	9.12  IBM XGA: Configuring Color and Resolution
	-----------------------------------------------
	
	Windows Setup will automatically configure an IBM XGA for 16-color,
	640x480 resolution. If your monitor can support 256 colors or higher
	resolutions, you can configure your XGA to use the color and
	resolution settings you want. To do this, run Windows Setup from the
	Main group, and then select one of the following drivers from the list
	of Display options:
	
	- XGA (640x480, 16 colors)
	
	This is the default setting and should not be changed if you are using
	the plasma screen on the PS/2 model 75.
	
	- XGA (640x480, 256 colors)
	- XGA (Small fonts)
	- XGA (Large fonts)
	
	Both the Small and Large fonts settings configure the XGA for 1024x786
	resolution and 256 colors, if your monitor supports it. Otherwise
	these settings configure your display for 640x480 resolution. Select
	Small Fonts if you have a large monitor (at least 16 inches) or want
	to fit more information on your screen. Select Large Fonts if you want
	to improve the readability of text.\177
	
	Make sure that your monitor supports the XGA configuration you select.
	If it doesn't, you will be returned to the MS-DOS prompt when you try
	to start Windows.
	
	For more information on using Setup after you have installed Windows,
	see Chapter 15, "Maintaining Windows with Setup," in the Microsoft
	Windows User's Guide.
	
	9.13  IBM XGA: Using EMM386
	---------------------------
	
	To use the IBM XGA successfully with the EMM386 expanded-memory
	emulator, you need to manually prevent EMM386 from using the memory
	address range used by the XGA display. To do this, include the X=
	option on the device=EMM386.EXE line in your CONFIG.SYS file. For
	example:
	
	  device=EMM386.EXE  X=C600-C7FF
	
	Replace "C600-C7FF" with the correct value for the address range used
	by your XGA. To identify this range, run the System Configuration
	Program on the System Reference Disk for your Personal System/2
	(PS/2), and select "Display Memory Map." A common range is C600-C7FF.
	
	With some PS/2 model 75 plasma screens or with XGA configured for
	640x480 resolution and 16 colors, you must also include the NOEMS or
	RAM option on the device=EMM386.EXE line in your CONFIG.SYS file. For
	example:
	
	  device=EMM386.EXE NOEMS X=C600-C7FF
	
	Do not include the i=B000-BE00 option on the device=EMM386.EXE line in
	your CONFIG.SYS file. This address range is used by the XGA when
	running Windows in 386 enhanced mode. Therefore, it cannot be used as
	upper memory area. Windows will not recognize XGA configurations if
	EMM386 is using this address range.
	
	For more information about modifying your CONFIG.SYS file, see your
	MS-DOS documentation. For more information about installing the EMM386
	expanded-memory emulator and configuring the way it uses memory, see
	Chapter 14, "Optimizing Windows," in the Microsoft Windows User's
	Guide.
	
	9.14   Video Seven: VEGA Deluxe card
	------------------------------------
	
	The VDDEGA.386 driver that Windows 3.1 supplies does not support the
	Video Seven VEGA Deluxe card. If your computer has this video card and
	the VDDEGA.386 driver is specified in the [386Enh] section of your
	SYSTEM.INI file, your display may not be readable. To correct this
	problem, you can do one of the following:
	
	  - Run Windows in standard mode only.
	  - Contact Video Seven for a video display driver that supports the
	    VEGA Deluxe card.
	  - Replace the VEGA Deluxe card with a Windows-compatible card.
	
	10.0  Using Specific Mice with Windows Version 3.1
	--------------------------------------------------
	
	This section describes some problems you may encounter using specific
	types of mice with
	Windows version 3.1.
	
	10.1  Microsoft Mouse
	---------------------
	
	Windows 3.1 includes version 8.20 of the Microsoft mouse drivers. If
	you have a Microsoft mouse, Setup installs the Windows mouse driver
	(MOUSE.DRV) in your Windows SYSTEM directory and an MS-DOS mouse
	driver (MOUSE.COM or MOUSE.SYS) in your Windows directory. If you have
	additional versions of the Microsoft mouse drivers on your system,
	make sure that you are using the mouse drivers provided with Windows
	3.1.
	
	If you use the Microsoft Mouse Control Panel version 8.0 or later, you
	need to set your MS-DOS mouse variable to the directory on your hard
	disk that contains the control-panel program files POINT.EXE and
	PANEL.COM. You can do this by modifying your AUTOEXEC.BAT file. For
	example, if the control-panel program files are located in the \MOUSE
	directory, you would add the following line to your AUTOEXEC.BAT file:
	
	  set mouse=c:\mouse
	
	This ensures that the mouse settings are stored in the MOUSE.INI file
	located in the specified directory. If the mouse variable is not set
	correctly, you may experience problems with mouse acceleration and
	other mouse settings.
	
	It is recommended that you use the mouse driver MOUSE.COM instead of
	MOUSE.SYS, and that you load MOUSE.COM from your AUTOEXEC.BAT file. If
	you use MOUSE.SYS, you may encounter problems saving MS-DOS mouse
	control-panel settings. If you must use MOUSE.SYS and encounter
	problems saving mouse settings, make sure you load it from your mouse
	directory instead of from your Windows directory.
	
	For more information about installing the mouse drivers, see Chapter
	3, "Troubleshooting," in the Windows and MS-DOS Getting Started
	manual.
	
	10.2  Genius Mouse
	------------------
	
	If you are using a Genius mouse and are running non-Windows
	applications in 386 enhanced mode, the mouse may not work properly,
	especially if you have several non-Windows applications running at the
	same time.
	
	To correct this problem, add the following line to the [386Enh]
	section of your SYSTEM.INI file:
	
	  local=PC$MOUSE
	
	For more information about changing settings in the SYSTEM.INI file,
	see the SYSINI.WRI online document.
	
	10.3  Logitech Mouse
	--------------------
	
	- Some Logitech mouse models are detected as "Microsoft or IBM PS/2"
	mouse models by the Setup program. In this case, Setup will install
	the mouse driver for the Microsoft or IBM PS/2 mouse. If you have a
	Logitech mouse, you should use the Logitech mouse driver instead.
	
	To install the Logitech mouse driver, run Windows Setup from the Main
	group, and then select Logitech from the list of Mouse options. For
	more information about using Setup after you have installed Windows,
	see Chapter 15, "Maintaining Windows with Setup," in the Microsoft
	Windows User's Guide.
	
	- When installing the Logitech mouse driver, Windows Setup copies the
	LMOUSE.COM file to your Windows directory. This is the mouse driver
	that is required in order to use the Logitech mouse with non-Windows
	applications. To use your mouse with non-Windows applications, you
	need to load LMOUSE.COM before you start Windows. You can do this by
	adding it to your AUTOEXEC.BAT file. You will also need to add the
	following line to the [386Enh] section of your SYSTEM.INI file:
	
	  local=PC$MOUSE
	
	10.4  Logitech Cordless Mouse
	-----------------------------
	
	If you have a Logitech Cordless mouse and you run Windows in 386
	enhanced mode, you may encounter problems, such as an unresponsive
	pointer, when running MS-DOS Prompt or non-Windows applications in a
	window. To correct this problem, you need to do the following:
	
	1. Change the baud-rate setting for the mouse driver. To do this, add
	  the following line to the [LogiMouse] section of the SYSTEM.INI
	  file:
	
	     BaudRate=1200
	
	2. Include the 1200 option in the command line that loads the MS-DOS
	  Logitech mouse driver (which is provided with Windows 3.1) as
	  follows:
	
	     LMOUSE 1200
	
	Add the above line to your AUTOEXEC.BAT file to load the mouse driver
	each time you start your system. The next time you start Windows, your
	mouse should work correctly.
	
	10.5  Logitech or Microsoft Ballpoint Mouse on a Toshiba T2200SX
	----------------------------------------------------------------
	
	If you are using a Toshiba T2200SX computer with a BIOS version
	earlier than 1.20 and you have a Logitech or Microsoft ballpoint mouse
	connected to the PS/2 mouse port, you may have problems moving the
	mouse pointer. If the mouse does not respond, try connecting your
	mouse to the serial port instead, or contact Toshiba for an upgraded
	version of the BIOS.
	
	10.6  Mouse Systems Mouse on PS/2 Ports
	---------------------------------------
	
	The "Mouse Systems" serial and bus mouse drivers provided with Windows
	do not support a Mouse Systems mouse when it is connected to a PS/2
	style mouse port. If you are using a Mouse Systems mouse connected to
	a PS/2 style mouse port, Setup installs the "Microsoft or IBM PS/2"
	mouse driver for you. This is the correct driver. Do not change it.
	
	10.7  Mouse Systems optical mouse
	---------------------------------
	
	Setup does not detect "Mouse Systems" optical mouse. However, the
	optical mouse is compatible with Windows 3.1. To use the "Mouse
	Systems" optical mouse, you need to install its driver with
	Windows Setup. For instructions, see "Installing a Device Driver Not
	Supplied with Windows Version 3.1" in Chapter 15, "Maintaining Windows
	with Setup," in the "Microsoft Windows User's Guide."
	
	11.0  Using Additional Hardware Configurations with Windows 3.1
	---------------------------------------------------------------
	
	This section contains information about using Windows version 3.1 with
	different types of computers and hardware configurations.
	
	11.1  CD-ROM Drives
	-------------------
	
	- If you are using a CD-ROM drive with Windows 3.1, you should use
	version 2.21 of Microsoft MS-DOS CD-ROM Extensions (MSCDEX) with all
	configurations of CD-ROM drives. If you use version 2.20 or later, you
	must also remove the following setting from the [386Enh] section of
	the SYSTEM.INI file:
	
	    device=LANMAN10.386
	
	This setting can cause some CD-ROM drives to timeout and fail with
	versions later than 2.20 of MSCDEX. However, if you must use a version
	earlier than 2.20 of MSCDEX, the above setting is required in the
	[386Enh] section of your SYSTEM.INI file.
	
	- If a CD-ROM drive causes instability in your system or causes your
	system to fail, you may need to update the CD-ROM driver. Also, the
	MCI (Media Control Interface) driver MCICDA.DRV may not work properly
	with older CD-ROM drivers. Contact your CD-ROM-drive manufacturer
	about obtaining an updated driver.
	
	11.2  EISA Systems with More Than 16 Megabytes of Extended Memory
	-----------------------------------------------------------------
	
	On some EISA (extended industry standard architecture) computers,
	there may be more extended memory available than the system's Int
	15h/88h BIOS call can detect. On these computers, HIMEM.SYS uses only
	the amount of extended memory detected. This can result in a large
	amount of unused memory.
	
	You can have HIMEM.SYS use all available extended memory by using the
	/EISA option in the CONFIG.SYS file. For example, if HIMEM.SYS is
	located in your WINDOWS directory, you would use the following command
	line in the CONFIG.SYS file to take advantage of all available
	extended memory:
	
	  device=c:\windows\himem.sys /EISA
	
	If you use the /EISA option, do not load any device drivers that use
	the Int 15h/88h BIOS call to allocate extended memory before loading
	HIMEM.SYS. If you do, your system may not work properly. If you must
	reserve some extended memory for device drivers or applications that
	use the Int 15h/88h BIOS call, you can specify the amount of memory in
	kilobytes that you want reserve by using the /INT15= option. For
	example, if you want to reserve 128 kilobytes of extended memory, you
	would use the following command line in the CONFIG.SYS file:
	
	  device=c:\windows\himem.sys /EISA /INT15=128
	
	HIMEM.SYS must still be loaded before other device drivers in the
	CONFIG.SYS file.
	
	To determine if your device driver or application use the Int15h/88h
	BIOS call, see the
	documentation for your device or contact your device dealer. For more
	information about using
	HIMEM.SYS with the INT15 option, see Chapter 14, "Optimizing Windows,"
	in the Microsoft
	Windows User's Guide.
	
	11.3  Epson Screen Savers
	
	Some Epson computers have screen-saver utilities that clear the screen
	after a specified period of
	inactivity. With Windows version 3.1, the screen saver might detect
	that the system is idle when it
	is not. Windows will function properly even though the screen is
	blank, but nothing will be
	displayed until you quit Windows and then restart it.
	
	See the documentation that you received with your Epson computer for
	instructions on how to turn
	off the screen saver.
	
	11.4  Everex 386/25 with EMM386.EXE
	-----------------------------------
	
	If you are using an Everex 386/25 with EMM386.EXE, include the
	following options on the device=emm386.exe command line in your
	CONFIG.SYS file:
	
	  device=EMM386.EXE X=C600-C7FF
	
	11.5  NCR 925 with EMM386.EXE
	-----------------------------
	
	If you are using an NCR 925 with EMM386.EXE, include the following
	option on the device=emm386.exe command line in your CONFIG.SYS file:
	
	  device=EMM386.EXE X=E000-EFFF
	
	11.6  Non-US Keyboard Layouts: Using Application Shortcut Keys
	==============================================================
	
	Some non-US keyboards show two characters per alphabet key and three
	characters per alphanumeric key. To type the second or third
	character, you must press and hold down CTRL+ALT or ALTGR before
	pressing the key. If you are using such a keyboard layout, do not use
	keys that show two or three characters as application shortcut keys.
	
	11.7  Plus Hardcard
	-------------------
	
	- To run Windows version 3.1 with a Hardcard, you must include the
	following line in the [386Enh] section in the SYSTEM.INI file:
	
	  VirtualHDIRQ=Off
	
	For information on how to modify the SYSTEM.INI file, see the
	SYSINI.WRI online document.
	
	Note:  This procedure is not necessary if you are using a Hardcard II
	or a Hardcard II XL.
	
	- It is also recommended that you use SMARTDrive with a Hardcard. For
	more information about using SMARTDrive, see Chapter 14, "Optimizing
	Windows," in the Microsoft Windows User's Guide.
	
	11.8  SCSI Hard Disk Using DMA
	------------------------------
	
	If your computer has a SCSI hard disk that uses Direct Memory Access
	(DMA), you must include the following entry in the [386Enh] section of
	the SYSTEM.INI file:
	
	  VirtualHDIRQ=Off
	
	In addition, you must have SMARTDrive installed and you must NOT
	disable double-buffering by removing or remarking out the \D option in
	the CONFIG.SYS file.
	
	11.9 Columbia Data Products SCSI Hard-Disk Controller
	-----------------------------------------------------
	
	To use the Columbia Data Products SCSI hard-disk controller with
	Windows version 3.1 in 386 enhanced mode, you must update the Columbia
	Data Products SCSI driver to version 3.35 or higher.
	
	11.10 Serial Ports on 80286-Based Computers: Improving Performance
	------------------------------------------------------------------
	
	If the baud rate-setting for your COM ports is 9600 or higher and you
	are experiencing slow COM performance or are losing characters when
	sending or receiving information using a communications application in
	standard mode, try the following solutions to correct the problem.
	Try solution one first. If that doesn't work, then try solution two,
	and so on:
	
	1. Reduce the number of MS-DOS drivers and terminate-and-stay-resident
	  programs (TSRs) loaded from your CONFIG.SYS file.
	
	2. Add the following line to the [standard] section of the SYSTEM.INI
	  file:
	
	     FasterModeSwitch=1
	
	Note: The FasterModeSwitch setting may not work on older systems or
	systems that are incompatible with Windows version 3.1. In this case,
	Windows may fail when you start it.
	
	3.   Do not load MS-DOS 5.0 into upper memory (do not include the
	command line dos=high in your CONFIG.SYS file).
	
	11.11  Sound Blaster Audio Card
	-------------------------------
	
	If you are using a Sound Blaster audio card that includes a Digital
	Signal Processor (DSP) chip earlier than version 2.0, you may want to
	upgrade to version 2.0 to improve audio performance. To find out which
	version of the DSP chip you currently have, run the TEST-SBC.EXE
	utility included in your Sound Blaster package. To receive version 2.0
	of the DSP chip, contact Creative Labs, Inc.
	
	11.12  Tandy 2500 XL with MS-DOS in ROM
	---------------------------------------
	
	The Tandy 2500 XL can be configured to use MS-DOS in read-only memory
	(ROM). If you want to use this feature, after you run Windows Setup
	you must run the Tandy setup program (SETUPXL). Modify your
	configuration so that your AUTOEXEC.BAT and CONFIG.SYS files are read
	from drive C.
	
	11.13  Wyse Computers
	---------------------
	
	If you are using a Wyse computer to run Windows, you might need to
	modify the device=HIMEM.SYS line in your CONFIG.SYS file to read:
	
	  device=[path]HIMEM.SYS  /M:WYSE
	
	11.14  Memory Chips: Parity Errors
	----------------------------------
	
	If you are receiving parity errors while running Windows 3.1, you
	probably have a bad memory chip, even if you didn't have parity errors
	while running Windows 3.0. (Windows 3.0 did not detect parity errors.)
	
	If you run a memory test utility and it reports that the memory is
	fine, you should still have your machine tested. Memory tests, in
	general, do not do a good job of detecting parity errors. For
	assistance in testing your computer for a bad memory chip, contact
	your hardware vendor.
	
	Some hardware can cause Windows to erroneously generate a parity
	error. Windows will display a parity error if the hardware on the
	machine generates a nonmaskable interrupt (NMI). Windows will only
	display a parity error when a true parity error occurs or when a
	system component such as an older autoswitching EGA card can generate
	a NMI. It is possible for a card such as this to cause a false parity
	error. This only happens when changing video modes.
	
	For example, if you get a parity error every time you start MS-DOS
	Prompt in full-screen mode (the video mode will change from graphics
	to text mode), the video card is probably causing an NMI, which causes
	Windows 3.1 to display a parity error.
	
	12.0  Other Online Documents
	----------------------------
	
	The following table describes other online documents that contain
	important information about Windows version 3.1 that is not included
	in the Microsoft Windows User's Guide or in online Help:
	
	Document       Information
	--------       -----------
	
	APPS.HLP:      Information about updating some older Windows
	              applications for use with Windows version 3.1. You can
	              view this file by starting Windows Help from any
	              application, and then using the Open command on the
	              File menu to open the file. For more information about
	              using Help, see Chapter 1, "Windows Basics," in the
	              Microsoft Windows User's Guide.
	
	SETUP.TXT:     Information about problems that may occur when you are
	              setting up Windows.
	
	README.WRI:    Information about using Windows with Multimedia
	              Extensions 1.0, specific displays and system
	              configurations, and non-Windows applications, and
	              information that was unavailable when the Microsoft
	              Windows User's Guide was printed.
	
	PRINTERS.WRI:  Information about particular printers and fonts.
	
	SYSINI.WRI:    Information about the settings in the SYSTEM.INI file.
	
	WININI.WRI:    Information about the settings in the WIN.INI file.
	
	Additional query words: 3.10 3.1 5.00a 5.0a kbmm
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbMSDOSSearch kbMSDOS500
	Version           : :
	
	=============================================================================
	
