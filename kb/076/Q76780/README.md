---
layout: page
title: "Q76780: README.TXT: General Notes About Applications"
permalink: kb/076/Q76780/
---

## Q76780: README.TXT: General Notes About Applications

	Article: Q76780
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
	
	<BR/>
	This section includes important information about other problems you
	might encounter running applications with Windows 3.0.
	
	Running Non-Windows Applications
	--------------------------------
	
	If you have problems with your display when you try to run two
	non-Windows applications and Windows in 386 enhanced mode, add the
	following line to the [386Enh] section of your SYSTEM.INI file:
	
	  local=EGA$
	
	Increasing Your Display's Update Speed
	--------------------------------------
	
	If a non-windows application running in 386 enhanced mode Windows
	seems to be updating the display very slowly, try creating or
	modifying the application's program information file (PIF).
	
	Check the application's PIF file to make sure none of the Monitor
	Ports check boxes are selected in the Advanced Settings dialog box. On
	some displays, canceling the Monitor Ports options might mean that you
	cannot switch back to the application after switching away. In this
	case, you must exit the first application before starting another.
	
	See "Monitor Ports," in the HyperGuide PIF Editor Advanced Options
	for more information about this setting.  The PIF Editor is part of
	the Accessories Group in HyperGuide.
	
	Running Windows 2.x and Windows 3.0
	-----------------------------------
	
	 *  If you have both versions of Windows on your hard disk,
	    make sure that the directory containing Windows 3.0 is
	    included in the PATH command in your AUTOEXEC.BAT, not the
	    directory for Windows 2.x.
	
	 *  Because Windows searches the current directory before it
	    searches other directories in the PATH command, when you
	    want to run an application, print, install a printer, or
	    install any other drivers in Windows 3.0, make sure the
	    Windows 2.x directory is not the current directory.
	
	 *  If you want to run Windows versions 2.x and 3.0 on the same
	    computer at different times, make sure that your CONFIG.SYS
	    file includes the Windows 3.0 HIMEM.SYS driver.
	
	 *  If you use SMARTDrive or RAMDrive with Windows/386 2.x,
	    make sure the drivers are 2.x drivers. The Windows 3.0
	    drivers for SMARTDrive and RAMDrive will not work with
	    Windows/386 2.x.
	
	Omit the APPEND, JOIN, and SUBST MS-DOS Utilities
	-------------------------------------------------
	
	The MS-DOS utilities APPEND, JOIN, and SUBST can cause problems when
	you are running Windows 3.0. If you included APPEND, JOIN, or SUBST in
	your AUTOEXEC.BAT file, remove them and refrain from running them
	within Windows.
	
	Running Batch Files and Embedded Macros
	---------------------------------------
	
	If you want to run a batch file with a Windows application that uses
	embedded macro language, do so from a PIF. If you will be running it
	with Windows in 386 enhanced mode, make sure that the Background check
	box in the batch file's PIF is not selected. That way the batch file
	will run exclusively, causing the Windows application to pause until
	processing is complete. To learn about creating PIFs, see the
	HyperGuide section entitled "Creating PIFs for Batch Files," in the
	PIF Editor procedures. The PIF Editor is part of the Accessories Group
	in HyperGuide.
	
	Using SHARE.EXE with Windows
	----------------------------
	
	To prevent two applications from modifying the same file, run the
	MS-DOS utility, SHARE.EXE, before you start Windows. It will not work
	correctly if you run it from within Windows. See your MS-DOS
	documentation for details about what SHARE.EXE does and how to install
	it.
	
	Preventing Stack Overflow
	-------------------------
	
	Stacks are temporary data structures that MS-DOS and applications use
	for processing hardware events. If you receive the Internal Stack
	Overflow message when you are running Windows in 386 enhanced mode,
	you need to change your stacks= setting.
	
	 *  If your system uses MS-DOS 3.2, include the following line
	    in your CONFIG.SYS file:
	
	      stacks=9,192
	
	 *  If your system uses MS-DOS 3.3 or above, include the
	    following line in your CONFIG.SYS file:
	
	      stacks=0,0
	
	Selecting a Port for a Serial Mouse
	-----------------------------------
	
	Do not try to run your serial mouse from a COM3 or COM4 port. Windows
	supports serial mice on COM1 and COM2 only.
	
	Running Windows from the OS/2 version 1.2 DOS Compatibility Box
	---------------------------------------------------------------
	
	 *  Do not allow Windows Setup to make changes to your
	    AUTOEXEC.BAT file or CONFIG.SYS file. Make the appropriate
	    changes yourself.
	
	 *  To print, you must set the printer driver port to one with
	    an .OS2 extension as follows:
	
	    If your printer is physically connected to LPT1 or to LPT2,
	    when you configure your printer, make sure you set the
	    printer-driver port to LPT1.OS2 or LPT2.OS2.
	
	    If the printer is physically connected to LPT3 or LPT4, you
	    must create a line for LPT3.OS2 or LPT4.OS2 in the [ports]
	    section of your WIN.INI file and then set the printer
	    driver to the appropriate .OS2 port when you configure it.
	
	    For more information about WIN.INI settings, see the
	    on-line document called WININI.TXT.
	
	Running Applications that Require Expanded Memory
	-------------------------------------------------
	
	If you have an 80386 system and use applications that require
	expanded memory, you can use EMM386.SYS, the expanded memory
	emulator that comes with Windows 3.0.
	
	Setting the D= Switch for EMM386
	--------------------------------
	
	If you install EMM386, before you can start Windows in 386
	enhanced mode, you must include the following setting on your
	EMM386 command line:
	
	  d=48
	
	Running SMARTDrive with Disk Manager, SpeedStor or Vfeature Deluxe
	------------------------------------------------------------------
	
	SMARTDrive will not run if your hard disk was partitioned using
	one of the following utilities:
	
	 *  Disk Manager (Ontrack Computer Systems)
	 *  SpeedStor (Storage Dimensions)
	 *  Vfeature Deluxe (Golden Bow Systems)
	
	If your hard disk was partitioned using one of these utilities,
	SMARTDrive will not start. Instead, it displays the following message:
	
	 Incompatible disk partition detected.
	
	SMARTDrive does this  to protect your hard disk from possible damage.
	Hard disks partitioned using these three utilities are often
	incompatible with SMARTDrive; running SMARTDrive on such a hard disk
	could destroy the data on that disk.
	
	Additional query words: MMWIN kbmm 1.00 readme
	
	======================================================================
	Keywords          :  
	Technology        : kbWinMultiXSearch kbWinMultiX100
	Version           : :1.0
	
	=============================================================================
	
