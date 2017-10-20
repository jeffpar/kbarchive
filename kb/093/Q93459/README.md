---
layout: page
title: "Q93459: README.WRI from Windows for Workgroups Version 3.1 (Part B)"
permalink: /kb/093/Q93459/
---

## Q93459: README.WRI from Windows for Workgroups Version 3.1 (Part B)

{% raw %}

	Article: Q93459
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following information was taken from the Microsoft Windows for Workgroups
	version 3.1 README.WRI file. This article contains sections 7.0 through 10.11.
	
	MORE INFORMATION
	================
	
	7.0 Using Multimedia Extensions Version 1.0 with Windows for
	Workgroups
	------------------------------------------------------------
	
	This section covers information that is specific to using the
	Multimedia Extensions version 1.0 with Windows for Workgroups. It also
	covers additional tasks you need to perform to configure your system
	properly for use with the Multimedia Extensions.
	
	7.1 Upgrading to Windows for Workgroups
	---------------------------------------
	
	To use the Multimedia Extensions with Windows for Workgroups, first
	set up Windows with Multimedia Extensions version 1.0. Then upgrade to
	Windows for Workgroups by installing it into the same directory. If
	you set up Windows for Workgroups before setting up Multimedia
	Extensions, not all the files will be properly installed.
	
	7.2 Configuring MIDI Setups
	---------------------------
	
	When you set up Windows for Workgroups, Setup copies the Multimedia
	Extensions MIDI-setup file MIDIMAP.CFG to MIDIMAP.OLD, and then
	replaces it with an updated version. This version contains several new
	MIDI setups that support playing MIDI information authored according
	to General MIDI guidelines. If you want to use a setup in the new
	MIDIMAP.CFG file and are using sound drivers that are not provided by
	Windows for Workgroups, you need to change the port settings to match
	the ports used by your sound device. To do this, use the MIDI Mapper
	option in Control Panel.
	
	You can also use the original MIDIMAP.CFG file (renamed by Setup to
	MIDIMAP.OLD). You might want to do this if the original file contains
	custom MIDI setups that you created yourself or that were provided by
	your sound-device manufacturer. To use the original file, rename
	MIDIMAP.CFG to MIDIMAP.WIN, and then rename MIDIMAP.OLD to
	MIDIMAP.CFG. If the port settings in your original setups refer to the
	Ad Lib or Sound Blaster ports and you are using different drivers,
	then you need to change the port settings to match the output ports
	used by your sound device.
	
	For more information about using MIDI Mapper to modify MIDI setups,
	see Chapter 9, "Customizing Windows for Workgroups," in the "Microsoft
	Windows for Workgroups User's Guide."
	
	7.3 Configuring Your Display
	----------------------------
	
	The Multimedia Extensions Display icon in Control Panel is not
	available when you upgrade from Windows with Multimedia version 1.0 to
	Windows for Workgroups. If you need to change options for your
	display, run Windows Setup from the Main group in Program Manager to
	make these changes.
	
	7.4 Sample MIDI File
	--------------------
	
	The sample MIDI file CANYON.MID included with Windows for Workgroups,
	which you can play with Windows Media Player, is provided by Passport
	Designs, Inc.
	
	7.5 Using HyperGuide
	--------------------
	
	The information in HyperGuide refers to Windows version 3.0, not
	Windows for Workgroups. If you need to use Windows documentation, see
	the "Microsoft Windows for Workgroups User's Guide" that comes with
	Windows for Workgroups.
	
	7.6 Using Music Box
	-------------------
	
	Music Box is not fully compatible with Windows for Workgroups.
	Although your compact discs will play correctly, you will encounter
	problems when using the Save Info button in the Program dialog box to
	save disc-title and track-title information. If you want to modify
	this information, you must do so manually by editing the MUSICBOX.INI
	file. To add a new disc to the file, you can determine the disc ID
	number by viewing the information in the About dialog box.
	
	7.7 Using Alarm Clock
	---------------------
	
	The Alarm Clock in the Multimedia Extensions version 1.0 is not fully
	compatible with Windows for Workgroups. If you are using the digital
	display, the time may appear slanted or a system error may occur,
	depending on the size of the Alarm Clock window.
	
	8.0 Running Specific MS-DOS-Based Applications
	----------------------------------------------
	
	This section provides general information about running applications
	in Windows for Workgroups. It also describes problems you might
	encounter while running specific MS-DOS-based applications with
	Windows for Workgroups.
	
	8.1 Creative Labs JukeBox
	-------------------------
	
	If you are using a Sound Blaster sound card, do not set up or use the
	JukeBox application included in your Sound Blaster package with
	Windows for Workgroups. JukeBox interferes with the Windows for
	Workgroups driver for the Ad Lib synthesizer and causes errors when
	you try to install the drivers for the Sound Blaster card.
	
	8.2 Game or Timing-Sensitive Applications
	-----------------------------------------
	
	Some game applications or applications that rely on the computer's
	timer may perform poorly in Windows for Workgroups. You can try
	increasing the performance by turning off the TrapTimerPorts setting
	in the [386Enh] section of the SYSTEM.INI file, as follows:
	
	  TrapTimerPorts=OFF
	
	Note: The TrapTimerPorts setting is on by default. Turning it off may
	cause errors or a loss of data when you transfer files by using a
	communications application. It is recommended that you leave this
	setting turned on when using a communications application.
	
	8.3 Third-Party Expanded-Memory Emulators with MS-DOS Version 5.0
	-----------------------------------------------------------------
	
	Many expanded-memory emulators will cause problems if you use them to
	provide upper memory blocks (UMBs) for the MS-DOS version 5.0 loadhigh
	and devicehigh commands. If you want to use these MS-DOS commands to
	load drivers or applications high, use the Windows EMM386.EXE
	expanded-memory emulator to provide UMBs instead. If you must use a
	third-party expanded-memory emulator, use the load high feature
	provided with the emulator instead of the MS-DOS commands.
	
	8.4 PC Tools Applications
	-------------------------
	
	If you run a PC Tools MS-DOS-based application in a window, or if you
	switch to such an application while Windows is running in standard
	mode, the display might be garbled, because PC Tools applications use
	a graphics font that is not displayed correctly. (This problem does
	not occur if you run the application in a full screen when Windows is
	running in 386 enhanced mode.)
	
	To correct the problem, start your PC Tools MS-DOS-based applications
	by using the /NF option. If these applications are included in a
	Program Manager group, use the Properties command to add the /NF
	option to the command line for each application. For more information
	about changing application properties, see Help for Program Manager.
	
	You can also include the /NF option in the application's program
	information file (PIF) by typing it in the Optional Parameters text
	box in PIF Editor, or you can use the PC Tools PC Config program to
	specify that PC Tools applications should use the Text Font to display
	information. For more information about changing an application's PIF,
	see Chapter 8, "MS-DOS Applications," in the "Microsoft Windows for
	Workgroups User's Guide."
	
	8.5 WordPerfect Version 5.1
	---------------------------
	
	When you run WordPerfect version 5.1 in a window, the Windows mouse
	pointer and the WordPerfect mouse pointer do not appear in the same
	place.
	
	To correct this problem:
	
	1. In WordPerfect, press SHIFT+F1.
	
	2. Select M for Mouse and A for Acceleration Factor.
	
	3. Set the Acceleration Factor to 1.
	
	4. Press ENTER three times to return to your document.
	
	5. Enlarge the WordPerfect window to fill the entire screen.
	
	6. Move the Windows mouse pointer into the WordPerfect window, and
	  then move it to the far-right edge of the window.
	
	7. Move the mouse pointer to the far-left edge of the window.
	
	8. Move the pointer back to the center of the window, and then move
	  it down to the bottom edge.
	
	9. Finally, move the pointer up to the upper-left corner of the
	  window.
	
	The Windows mouse pointer and the WordPerfect mouse pointer should now
	be in the same location.
	
	8.6 3270-Emulation Applications
	-------------------------------
	
	You may encounter problems using certain 3270-emulation applications
	with Windows for Workgroups. If you are using one of these
	applications, it is recommended that you purchase the Windows for
	Workgroups Resource Kit for the Microsoft Windows for Workgroups
	Operating System Version 3.1. This kit provides troubleshooting
	information about using 3270-emulation applications, in addition to
	complete technical information about Windows for Workgroups for the
	support professional. It includes a technical reference manual and a
	disk containing helpful utilities, system-resource viewers, drivers,
	and accessories. To order the Resource Kit within the United States,
	call (800) 642-7676.
	
	To order outside the United States, dial the phone number for your
	area. You can find this number on the International Subsidiary card.
	
	8.7 C/C++ Version 7.0
	---------------------
	
	If you are running Microsoft C/C++ Version 7.0 with Windows for
	Workgroups and your system locks up when compiling a file, add the
	following line to the [386Enh] section of SYSTEM.INI:
	
	  MAXBPS=400
	
	This increases the number of breakpoints the system uses.
	
	For more information about this setting, see the Windows for
	Workgroups Resource Kit.
	
	9.0 Running Communications Applications
	---------------------------------------
	
	This section describes some guidelines for using communications
	applications with Windows for Workgroups.
	
	The maximum bit rate possible when running your communications
	program with Windows is determined by your CPU speed in addition to
	port and modem capabilities.To communicate at speeds of 9600 bits per
	second (BPS) and faster, follow these guidelines:
	
	Use Windows-based communications applications when possible.
	
	Use 16550A-compatible serial ports and modems. To determine if your
	serial port is 16550A-compatible, you can run the Microsoft
	Diagnostics program (MSD.EXE) included with Windows for Workgroups. To
	run MSD, quit Windows, and then at the command prompt (not from MS-DOS
	Prompt within Windows), type msd and then press ENTER.
	
	Avoid closing MS-DOS-based applications during a background download.
	
	Use a PIF file to run MS-DOS-based communications applications. Use
	PIF Editor to select the "Background Execution" and "Lock Application
	Memory" check boxes.
	
	When running an MS-DOS-based communications application in the
	background, reduce it to an icon rather than running it in a window.
	
	SMARTDrive may cause download errors when it clears the write-behind
	cache. If this happens, disable the SMARTDrive write-behind cache
	during high-speed downloads. This can be done easily using the
	SmartMon utility included in the Windows for Workgroups Resource Kit.
	
	10.0 Using Specific Display Adapters with Windows for Workgroups
	----------------------------------------------------------------
	
	This section describes some problems you might encounter when using
	specific display adapters or drivers with Windows for Workgroups.
	
	10.1 Installing Display Adapters by Following the Manufacturer's
	Instructions
	----------------------------------------------------------------
	
	The procedures that are provided by display-adapter manufacturers for
	installing display adapters may require you to replace or modify the
	SETUP.INF file in the Windows SYSTEM directory. This will cause
	problems in Windows for Workgroups.
	
	If your third-party display-adapter installation replaces or modifies
	the SETUP.INF file, use the following procedure instead.
	
	To install the display-adapter drivers:
	
	1. Rename the SETUP.INF file provided with your display-adapter
	  package to OEMSETUP.INF, and place it on the disk and in the directory
	  containing the third-party display-driver files.
	
	2. Run Windows Setup from the Main group and select Other Display
	  (Requires disk from OEM) from the list of Display options.
	
	3. Insert the disk that contains the OEMSETUP.INF file and the driver
	  files for your display adapter. Or, if these files are located on your
	  hard disk, type the path to the directory that contains the files, and
	  then choose the OK button.
	
	4. Select the type of display adapter you want to use, and then choose
	  the OK button.
	
	Setup copies all necessary files from the driver disk and may request
	files from the Windows for Workgroups disks.
	
	5. Insert any additional disks that are requested, and then choose the
	  OK button.
	
	If you accidentally overwrite the original SETUP.INF file, you can
	copy it from Windows for Workgroups Disk 1 back into your Windows
	SYSTEM directory.
	
	10.2 Upgrading Display Drivers When Using Soft-Font Packages
	------------------------------------------------------------
	
	If you are using certain soft-font packages, including Bitstream
	Facelift, Publisher PowerPak, and Hewlett-Packard Intellifont, Setup
	may not update your display driver when you upgrade to Windows for
	Workgroups. In this case, you need to update your display driver after
	you have set up Windows for Workgroups. To do this, run Windows Setup
	from the Main group, and then select the display driver you want to
	use from the list of Display options. For more information about using
	Setup after you have installed Windows, see Chapter 10, "Configuring
	Hardware," in the "Microsoft Windows for Workgroups User's Guide."
	
	10.3 Using Self-Configuring Display Adapters
	--------------------------------------------
	
	Some display adapters can change their configurations to match what an
	application tries to do. For example, if an application tries to use a
	video graphics adapter (VGA) configuration and your display adapter is
	currently configured as an enhanced graphics adapter (EGA), the
	adapter can switch from an EGA configuration to a VGA configuration.
	This type of display adapter makes use of nonmaskable interrupts
	(NMIs) to change its configuration while you work.
	
	To use this type of display adapter with Windows running in 386
	enhanced mode, you must disable the NMI (also called self-configuring,
	auto-switching, or auto-emulating) option. Configure the display
	adapter, and then disable the NMI option. For more information, see
	your display-adapter documentation.
	
	10.4 LCD
	--------
	
	If you use an LCD screen, set it for white text on a black background
	instead of black text on a white background. When Windows is running,
	black text on a white background wears out LCD screens. See the
	documentation for your screen for instructions on how to do this.
	
	10.5 Super VGA
	--------------
	
	If you are using a video card and monitor (NEC MultiSync 3D/4D/5D or
	other multifrequency monitor) capable of 800x600, 16-color resolution
	with a third-party Super VGA driver, or one of the following drivers
	provided in the Windows 3.0 Supplemental Driver Library (SDL)
	
	  ATI Mode 54h (800x600 16 colors) v2.00
	  CHIPS Super VGA 82C451 (800x600 16 colors)
	  CHIPS Super VGA 82C452 (800x600 16 colors)
	  Paradise VGA (800x600 16 colors)
	
	use the Super VGA (800x600, 16 colors) driver provided with Windows
	for Workgroups instead. If you do not update your driver, Windows may
	not work properly when running in 386 enhanced mode. In addition, the
	version 3.1 driver contains new features and performance enhancements.
	
	To install the Windows for Workgroups Super VGA driver, run Windows
	Setup from the Main group, and then select "Super VGA 800x600, 16
	colors" from the list of Display options. For more information about
	using Setup after you have installed Windows for Workgroups, see
	Chapter 10, "Configuring Hardware," in the "Microsoft Windows for
	Workgroups User's Guide."
	
	  Super VGA VESA Mode 6Ah
	
	Some Super VGA adapters support higher monitor-refresh rates at
	800x600 resolution with a special VESA mode. If both your video
	adapter and monitor support a higher refresh rate and if you are using
	the Super VGA driver, you may be able to get better video results by
	including the following setting in the [display] section of the
	SYSTEM.INI file:
	
	  svgamode=106
	
	If you encounter problems using this mode, delete this setting from
	the SYSTEM.INI file, and then restart Windows for Workgroups.
	
	10.6 Third-Party Display Drivers: Running MS-DOS-Based Applications
	-------------------------------------------------------------------
	
	If you are using a display driver that is not provided with Windows
	for Workgroups and you receive one of the following messages while
	trying to run a MS-DOS-based application
	
	  Incorrect system version. Run the Windows Setup program again.
	
	 -or-
	
	  386 System display type mismatch.
	
	contact your display manufacturer for an updated driver. You can also
	solve this problem manually by installing version 3.0 driver files.
	These files are included on the Windows for Workgroups disks.
	
	If your display driver works in Windows version 3.0 using the standard
	VGA virtual-display-device file (specified by the device=*vddvga
	setting in the [386Enh] section of the SYSTEM.INI file), use the
	following procedure.
	
	To install the driver files:
	
	1. Copy and expand the VDDVGA30.386 file from the Windows for
	  Workgroups disk to your Windows SYSTEM directory by typing the
	  following at the MS-DOS prompt:
	
	     expand a:\vddvga30.38_ c:\windows\system\vddvga30.386
	
	2. Change the display= setting in the [386Enh] section of the
	  SYSTEM.INI file to:
	
	     display=vddvga30.386
	
	3. Restart Windows for Workgroups.
	
	If your display driver works in Windows version 3.0 using the standard
	VGA grabber file (specified by the 386Grabber=VGA.GR3 setting in the
	[boot] section of the SYSTEM.INI file), use the following procedure.
	
	To install the driver files:
	
	1. Copy and expand the VGA30.3GR file from the Windows for Workgroups
	  disk to your Windows SYSTEM directory.
	
	2. Change the 386Grabber setting in the [386Enh] section of the
	  SYSTEM.INI file to:
	
	     386Grabber=vga30.3gr
	
	3. Restart Windows for Workgroups.
	
	For more information about modifying the SYSTEM.INI file, see the
	SYSINI.WRI online document.
	
	10.7 VGA-Compatible
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
	
	10.8 Video Seven: Using 256-Color Support
	-----------------------------------------
	
	Windows for Workgroups provides 256-color support at several
	resolutions for Video Seven display adapters that have at least 512K
	of video memory. The following table shows the Video Seven 256-color
	modes that are supported by the display drivers provided with Windows
	for Workgroups.
	
	Model            640x480     720x512     800x600     1024x768
	-----            -------     -------     -------     --------
	
	FastWrite 512K     Yes
	1024i 512K         Yes
	VRAM 512K          Yes         Yes
	VRAM II 512K       Yes         Yes
	VRAM II 1MB        Yes         Yes         Yes          Yes
	
	If you are using a Video Seven display adapter that has at least 512K
	of video memory, you should use one of these display drivers. These
	drivers take full advantage of the performance improvements and mouse
	support in MS-DOS-based applications. To install one of the drivers,
	run Windows Setup from the Main group, and then select the driver you
	want from the list of Display options. For more information about
	using Setup after you have installed Windows, see Chapter 10,
	"Configuring Hardware," in the "Microsoft Windows for Workgroups
	User's Guide."
	
	Note: Windows for Workgroups does not include drivers for the new
	Video Seven display adapters that are based on Headland
	Technology/Video 7 HT216, HT216-32, or HT217. If you have one of these
	display adapters, Setup automatically installs a VGA driver. Your
	display-adapter package may include an updated driver, which you can
	install by using the instructions included in the package. If no
	updated driver is included, you can obtain one by contacting your
	display-adapter vendor.
	
	10.9 WinSpeed
	-------------
	
	The WinSpeed version 1.0 installation program, INSTALL.EXE, does not
	work properly with Windows for Workgroups. It copies an incompatible
	version of the SETUP.INF file to your Windows directory. To install
	WinSpeed for use with Windows for Workgroups, you must get updated
	installation disks from Panacea.
	
	If you have already used the INSTALL.EXE program to install the
	WinSpeed drivers on your system, the following message appears when
	you try to run Windows Setup from the Main group:
	
	  The SETUP.INF file on your system is not valid for use with this
	  version of Setup.
	
	To correct this problem:
	
	1. If there is a SETUP.INF file in your Windows directory, delete it.
	  (The SETUP.INF file should never be in your Windows directory.)
	
	2. Copy the SETUP.INF file on Windows for Workgroups Disk 1 to your
	  Windows SYSTEM directory.
	
	3. Contact Panacea, Inc. for updated WinSpeed installation disks that
	  are compatible with Windows for Workgroups, and then use these to
	  reinstall WinSpeed.
	
	10.10 IBM XGA: Configuring Color and Resolution
	-----------------------------------------------
	
	Windows Setup automatically configures an IBM XGA for 16-color,
	640x480 resolution. If your monitor can support 256 colors or higher
	resolutions, you can configure your XGA to use the color and
	resolution settings you want. To do this, run Windows Setup from the
	Main group, and then select one of the following drivers from the list
	of Display options:
	
	  XGA (640x480, 16 colors)
	
	This is the default setting and should not be changed if you are using
	the plasma screen on the PS/2 model 75.
	
	  XGA (640x480, 256 colors)
	  XGA (Small fonts)
	  XGA (Large fonts)
	
	Both the Small and Large fonts settings configure the XGA for 1024x786
	resolution and 256 colors, if your monitor supports it. Otherwise,
	these settings configure your display for 640x480 resolution. Select
	Small Fonts if you have a large monitor (at least 16 inches) or want
	to fit more information on your screen. Select Large Fonts if you want
	to improve the readability of text.
	
	Make sure that your monitor supports the XGA configuration you select.
	If it does not, you return to the MS-DOS prompt when you try to start
	Windows for Workgroups.
	
	For more information about using Setup after you have installed
	Windows, see Chapter 10, "Configuring Hardware," in the "Microsoft
	Windows for Workgroups User's Guide."
	
	10.11 IBM XGA: Using EMM386
	---------------------------
	
	To use the IBM XGA display adapter successfully with the EMM386
	expanded-memory emulator, you need to manually prevent EMM386 from
	using the memory address range used by the XGA display. A common range
	is C600-C7FF. To prevent the memory manager from using this range,
	include the X= option on the device=EMM386.EXE line in your CONFIG.SYS
	file, as follows:
	
	  device=EMM386.EXE X=C600-C7FF
	
	To identify the exact range that your XGA display adapter uses, run
	the System Configuration Program on the System Reference Disk for your
	Personal System/2 (PS/2), and select "Display Memory Map."
	
	With some PS/2 model 75 plasma screens, or with XGA configured for
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
	Chapter 11, "Managing Memory and Performance," in the "Microsoft
	Windows for Workgroups User's Guide."
	
	Additional query words: 3.10 wfw wfwg
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310
	Version           : WINDOWS:3.1
	
	=============================================================================
	

{% endraw %}
