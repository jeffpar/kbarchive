---
layout: page
title: "Q109504: README.WRI from Windows for Workgroups 3.11 (Part 3 of 4)"
permalink: /kb/109/Q109504/
---

## Q109504: README.WRI from Windows for Workgroups 3.11 (Part 3 of 4)

	Article: Q109504
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following information was taken from the Microsoft Windows for Workgroups
	version 3.11 README.WRI file.
	
	MORE INFORMATION
	================
	
	10.2  Upgrading Display Drivers When Using Soft-Font Packages
	
	If you are using certain soft-font packages, including Bitstream
	Facelift, Publisher PowerPak, and Hewlett-Packard Intellifont, Setup
	may not update your display driver when you upgrade to Windows for
	Workgroups. In this case, you need to update your display driver
	after you have set up Windows for Workgroups.
	
	To update your display driver after you have set up Windows for Workgroups:
	
	1. From the Main group, run Windows Setup.
	
	2. Choose Change System Settings from the Options menu.
	
	3. From the list of Display options, select the display drivers you
	  want to use.
	
	For more information about using Setup after you have installed
	Windows, see "Configuring Hardware" in your Windows or Windows for
	Workgroups user's guide.
	
	10.3  Using Self-Configuring Display Adapters
	
	Some display adapters can change their configurations to match what
	an application tries to do. For example, if an application tries to
	use a video graphics adapter (VGA) configuration and your display
	adapter is currently configured as an enhanced graphics adapter
	(EGA), the adapter can switch from an EGA configuration to a VGA
	configuration. This type of display adapter makes use of nonmaskable
	interrupts (NMIs) to change its configuration while you work.
	
	To use this type of display adapter, you must disable the NMI (also
	called self-configuring, auto-switching, or auto-emulating) option
	after you configure the display adapter. For more information, see
	your display-adapter documentation.
	
	10.4  LCD
	
	If you use an LCD screen, set it for white text on a black background
	instead of black text on a white background. When Windows is running,
	black text on a white background wears out LCD screens. See the
	documentation for your screen for instructions on how to do this.
	
	10.5  Super VGA
	
	If you are using a video card and monitor (NEC MultiSync 3D/4D/5D or
	other multifrequency monitor) capable of 800x600, 16-color resolution
	with a third-party Super VGA driver, use the Super VGA (800x600, 16
	colors) driver provided with Windows for Workgroups instead. If you
	do not update your driver, Windows may not work properly.
	
	To install the Windows for Workgroups Super VGA driver, run Windows
	Setup from the Main group, and then select "Super VGA 800x600, 16
	colors" from the list of Display options. For more information about
	using Setup after you have installed Windows for Workgroups, see your
	user's guide.
	
	Super VGA VESA Mode 6Ah
	
	Some Super VGA adapters support higher monitor-refresh rates at
	800x600 resolution with a special VESA mode. If both your video
	adapter and monitor support a higher refresh rate and if you are
	using the Super VGA driver, you may be able to get better video
	results by including the following setting in the [display] section
	of the SYSTEM.INI file:
	
	svgamode=106
	
	If you encounter problems using this mode, delete this setting from
	the SYSTEM.INI file, and then restart Windows for Workgroups.
	
	10.6  Third-Party Display Drivers: Running MS-DOS?Based Applications
	
	If you are using a display driver that is not provided with Windows
	for Workgroups and you receive one of the following messages while
	trying to run a MS-DOS?based application:
	
	"Incorrect system version. Run the Windows Setup program again."
	    or
	"386 System display type mismatch."
	
	Run Setup again, and if that doesn't work, contact your display
	manufacturer for an updated driver.
	
	10.7  VGA-Compatible
	
	Most VGA-compatible display-adapter cards and main-adapter chips use
	additional memory to enhance their performance. When Windows is
	configured for VGA, Windows detects most of these cards and
	automatically excludes the additional memory.
	
	However, if you have an enhanced VGA that Windows does not recognize,
	you must exclude the additional memory yourself by adding the
	following line to the [386Enh] section of the SYSTEM.INI file:
	
	emmexclude=C400-C7FF
	
	For more information about modifying the SYSTEM.INI file, see the
	SYSINI.WRI online document.
	
	10.8  Video Seven: Using 256-Color Support
	
	Windows for Workgroups provides 256-color support at several
	resolutions for Video Seven display adapters that have at least 512K
	of video memory. The following table shows the Video Seven 256-color
	modes that are supported by the display drivers provided with Windows
	for Workgroups.
	
	Model          640x480     720x512     800x600     1024x768
	____________________________________________________________
	
	FastWrite 512K   Yes
	1024i 512K       Yes
	VRAM 512K        Yes         Yes
	VRAM II 512K     Yes         Yes
	VRAM II 1MB      Yes         Yes         Yes         Yes
	
	If you are using a Video Seven display adapter that has at least 512K of
	video memory, you should use one of these display drivers. These drivers
	take full advantage of the performance improvements and mouse support in MS-
	DOS?based applications. To install one of the drivers, run Windows Setup
	from the Main group, and then select the driver you want from the list of
	Display options. For more information about using Setup after you have
	installed Windows, see "Configuring Hardware" in your Windows or Windows
	for Workgroups user's guide.
	
	Note:  Windows for Workgroups does not include drivers for the new Video
	Seven display adapters that are based on Headland Technology/Video 7 HT216,
	HT216-32, or HT217. If you have one of these display adapters, Setup
	automatically installs a VGA driver. Your display-adapter package may
	include an updated driver, which you can install by using the instructions
	included in the package. If no updated driver is included, you can obtain
	one by contacting your display-adapter vendor.
	
	10.9  WinSpeed
	
	The WinSpeed version 1.0 installation program, INSTALL.EXE, does not
	work properly with Windows for Workgroups. It copies an incompatible
	version of the SETUP.INF file to your Windows directory. To install
	WinSpeed for use with Windows for Workgroups, you must get updated
	installation disks from Panacea.
	
	If you have already used the INSTALL.EXE program to install the
	WinSpeed drivers on your system, the following message appears when
	you try to run Windows Setup from the Main group:
	
	"The SETUP.INF file on your system is not valid for use with this
	version of Setup."
	
	To correct this problem:
	
	1. If there is a SETUP.INF file in your Windows directory, delete
	  it. (The SETUP.INF file should never be in your Windows directory.)
	
	2. Copy the SETUP.INF file on Windows for Workgroups version 3.11
	  Disk 1 to your Windows SYSTEM directory.
	
	3. Contact Panacea, Inc. for updated WinSpeed installation disks
	  that are compatible with Windows for Workgroups, and then use these
	  to reinstall WinSpeed.
	
	10.10  IBM XGA: Configuring Color and Resolution
	
	Windows Setup automatically configures an IBM XGA for 16-color,
	640x480 resolution. If your monitor can support 256 colors or higher
	resolutions, you can configure your XGA to use the color and
	resolution settings you want. To do this, run Windows Setup from the
	Main group, and then select one of the following drivers from the
	list of Display options:
	
	- XGA (640x480, 16 colors)
	  This is the default setting and should not be changed if you are
	  using the plasma screen on the PS/2 model 75.
	- XGA (640x480, 256 colors)
	- XGA (Small fonts)
	- XGA (Large fonts)
	
	Both the Small and Large fonts settings configure the XGA for
	1024x786 resolution and 256 colors, if your monitor supports it.
	Otherwise, these settings configure your display for 640x480
	resolution. Select Small Fonts if you have a large monitor (at least
	16 inches) or want to fit more information on your screen. Select
	Large Fonts if you want to improve the readability of text.
	
	Make sure that your monitor supports the XGA configuration you
	select. If it does not, you will return to the MS-DOS prompt when you
	try to start Windows for Workgroups.
	
	For more information about using Setup after you have installed
	Windows, see "Configuring Hardware" in your Windows or Windows for
	Workgroups user's guide.
	
	10.11  IBM XGA: Using EMM386
	
	To use the IBM XGA display adapter successfully with the EMM386
	expanded-memory emulator, you need to manually prevent EMM386 from
	using the memory address range used by the XGA display. A common
	range is C600-C7FF. To prevent the memory manager from using this
	range, include the X= option on the device=EMM386.EXE line in your
	CONFIG.SYS file, as follows:
	
	device=EMM386.EXE  X=C600-C7FF
	
	To identify the exact range that your XGA display adapter uses, run
	the System Configuration Program on the System Reference Disk for
	your Personal System/2 (PS/2), and select "Display Memory Map."
	
	With some PS/2 model 75 plasma screens, or with XGA display adapters
	configured for 640x480 resolution and 16 colors, you must also
	include the NOEMS or RAM option on the device=EMM386.EXE line in your
	CONFIG.SYS file. For example:
	
	device=EMM386.EXE  NOEMS  X=C600-C7FF
	
	Do not include the i=B000-BE00 option on the device=EMM386.EXE line
	in your CONFIG.SYS file. This address range is used by the XGA when
	running Windows. Therefore, it cannot be used as upper memory area.
	Windows will not recognize XGA configurations if EMM386 is using this
	address range.
	
	For more information about modifying your CONFIG.SYS file, see your
	MS-DOS documentation. For more information about installing the
	EMM386 expanded-memory emulator and configuring the way it uses
	memory, see "Managing Memory and Performance" in your Windows or
	Windows for Workgroups user's guide.
	
	11.0  Using Specific Mice with Windows for Workgroups
	
	This section describes some problems you may encounter using specific
	types of mice with Windows for Workgroups.
	
	11.1  Microsoft Mouse
	
	Windows for Workgroups includes version 8.20 of the Microsoft mouse
	drivers. If you have a Microsoft mouse, Setup installs the Windows
	mouse driver (MOUSE.DRV) in your Windows SYSTEM directory and an
	MS-DOS mouse driver (MOUSE.COM or MOUSE.SYS) in your Windows
	directory. If you have additional versions of the Microsoft mouse
	drivers on your system, make sure that you are using the mouse
	drivers provided with Windows for Workgroups.
	
	If you use the Microsoft Mouse Control Panel version 8.0 or later,
	you need to set your MS-DOS mouse variable to the directory on your
	hard disk that contains the control-panel program files POINT.EXE and
	PANEL.COM.
	
	You can do this by modifying your AUTOEXEC.BAT file. For example, if
	the control-panel program files are located in the \MOUSE directory,
	you would add the following line to your AUTOEXEC.BAT file:
	
	set mouse=c:\mouse
	
	This ensures that the mouse settings are stored in the MOUSE.INI file
	located in the specified directory. If the mouse variable is not set
	correctly, you may experience problems with mouse acceleration and
	other mouse settings.
	
	It is recommended that you use the mouse driver MOUSE.COM instead of
	MOUSE.SYS, and that you load MOUSE.COM from your AUTOEXEC.BAT file.
	If you use MOUSE.SYS, you may encounter problems saving MS-DOS mouse
	control-panel settings. If you must use MOUSE.SYS and you encounter
	problems saving mouse settings, make sure you load the driver from
	your mouse directory instead of from your Windows directory.
	
	For more information about installing the mouse drivers, see your
	Windows or Windows for Workgroups user's guide.
	
	11.2  Genius Mouse
	
	If you are using a Genius mouse and are running MS-DOS?based
	applications, the mouse may not work properly, especially if you have
	several MS-DOS?based applications running at the same time.
	
	To correct this problem, add the following line to the [386Enh]
	section of your SYSTEM.INI file:
	
	local=PC$MOUSE
	
	For more information about changing settings in the SYSTEM.INI file,
	see the SYSINI.WRI online document.
	
	11.3  Logitech Mouse
	
	- Some Logitech mouse models are detected as "Microsoft or IBM PS/2"
	  mouse models by the Setup program. In this case, Setup installs the
	  mouse driver for the Microsoft or IBM PS/2 mouse. If you have a
	  Logitech mouse, you should use the Logitech mouse driver instead.
	
	  To install the Logitech mouse driver, run Windows Setup from the Main
	  group, and then select Logitech from the list of Mouse options. For
	  more information about using Setup after you have installed Windows,
	  see "Configuring Hardware" in your Windows or Windows for Workgroups
	  user's guide.
	
	- When installing the Logitech mouse driver, Windows Setup copies
	  the LMOUSE.COM file to your Windows directory. This is the mouse
	  driver that is required in order to use the Logitech mouse with
	  MS-DOS?based applications. To use your mouse with MS-DOS?based
	  applications, you need to load LMOUSE.COM before you start Windows.
	  You can do this by adding it to your AUTOEXEC.BAT file. You also need
	  to add the following line to the [386Enh] section of your SYSTEM.INI
	  file:
	
	     local=PC$MOUSE
	
	11.4  Logitech Cordless Mouse
	
	If you have a Logitech Cordless mouse, you may encounter problems,
	such as an unresponsive pointer, when you are running the MS-DOS
	Prompt or MS-DOS?based applications in a window.
	
	To correct this problem:
	
	1. Change the baud-rate setting for the mouse driver. To do this,
	  add the following line to the [LogiMouse] section of the SYSTEM.INI
	  file:
	
	     BaudRate=1200
	
	2. Include the 1200 option in the command line that loads the MS-DOS
	  Logitech mouse driver (which is provided with Windows for Workgroups)
	  as follows:
	
	     LMOUSE 1200
	
	3. Add the above line to your AUTOEXEC.BAT file to load the mouse
	  driver each time you start your system. The next time you start
	  Windows for Workgroups, your mouse should work correctly.
	
	  For more information about changing settings in the SYSTEM.INI file,
	  see the SYSINI.WRI online document.
	
	11.5  Logitech or Microsoft BallPoint Mouse on a Toshiba T2200SX
	
	If you are using a Toshiba T2200SX computer with a BIOS version
	earlier than 1.20 and you have a Logitech or Microsoft ballpoint
	mouse connected to the PS/2 mouse port, you may have problems moving
	the mouse pointer. If the mouse does not respond, try connecting your
	mouse to the serial port instead, or contact Toshiba for an upgraded
	version of the BIOS.
	
	11.6  Mouse Systems Mouse on PS/2 Ports
	
	The "Mouse Systems" serial and bus mouse drivers provided with
	Windows do not support a Mouse Systems mouse when it is connected to
	a PS/2-style mouse port. If you are using a Mouse Systems mouse
	connected to a PS/2-style mouse port, Setup installs the "Microsoft
	or IBM PS/2" mouse driver for you. This is the correct driver. Do not
	change it.
	
	12.0  Using Additional Hardware Configurations with Windows for Workgroups
	
	This section contains information about using Windows for Workgroups
	with different types of computers and hardware configurations.
	
	12.1  CD-ROM Drives
	
	- If you are using a CD-ROM drive, you should use version 2.23 of
	  Microsoft MS-DOS CD-ROM Extensions (MSCDEX), the version shipped with
	  Windows for Workgroups version 3.11, with all configurations of
	  CD-ROM drives.
	
	  If you have upgraded from Windows version 3.1 or Windows for
	  Workgroups version 3.1, you must remove the following setting from
	  the [386Enh] section of the SYSTEM.INI file:
	
	     device=LANMAN10.386
	
	  This setting can cause some CD-ROM drives to timeout and fail with
	  versions later than 2.20 of MSCDEX. However, if you must use a
	  version earlier than 2.20 of MSCDEX, the above setting is required in
	  the [386Enh] section of your SYSTEM.INI file.
	
	  For more information about changing settings in the SYSTEM.INI file,
	  see the SYSINI.WRI online document.
	
	- If a CD-ROM drive causes instability in your system or causes your
	  system to fail, you may need to update the CD-ROM driver. Also, the
	  MCI (Media Control Interface) driver MCICDA.DRV may not work properly
	  with older CD-ROM drivers. Contact your CD-ROM-drive manufacturer
	  about obtaining an updated driver.
	
	Additional query words: wfw wfwg 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	
