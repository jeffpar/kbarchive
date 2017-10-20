---
layout: page
title: "Q135898: Windows 95 CD-ROM Programs.txt File (2 of 2)"
permalink: /kb/135/Q135898/
---

## Q135898: Windows 95 CD-ROM Programs.txt File (2 of 2)

{% raw %}

	Article: Q135898
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): win95kbfaq
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	This article contains a copy of the information in the Programs.txt file from
	the Windows 95 CD-ROM. Setup copies this file to the Windows folder. This
	article is the second of two articles.
	
	MORE INFORMATION
	================
	
	-----------------------------------------------------------------
	      Microsoft Windows 95 README for Programs Information
	
	                     August l995
	-----------------------------------------------------------------
	
	        (c) Copyright Microsoft Corporation, 1995
	
	This document provides complementary or late-breaking information to
	supplement the Microsoft Windows 95 documentation.
	
	MicroHelp Compression Plus 4.0: If you have problems installing
	Compression Plus on Windows 95, try carryout out the following
	procedure.
	1. Add the word progman to the end of the SHELL= line in your
	  System.ini file. For example:
	
	  shell=explorer.exe progman
	
	2. Restart your computer, and then reinstall MicroHelp Compression.
	3. Change your System.ini file back to its original setting.
	
	Microsoft Client for NetWare, running with Dial-Up Networking: This
	may cause some problems with Pagemaker 5.0 and Quark Xpress 3.3.
	QuarkXpress 3.3 may not work properly when only the DIAL-UP\IPX
	components are loaded but the computer is not connected to a valid
	network. If you see the message "Unable to access network [116]" when
	starting QuarkXpress 3.3, remove the DIAL-UP\IPX components or connect
	to a valid network. This problem will be fixed in QuarkXPress 3.32.
	
	Microsoft FORTRAN 5.1: If you want to create QuickWin applications
	using Microsoft FORTRAN 5.1 running on Windows 95, you need to either
	delete or comment out the following line in the Fl.def file:
	
	    APPOADER '___MSLANGLOAD'
	
	After you remove this line, you need to recompile any QuickWin
	programs that were built with version 5.1 in order for these programs
	to run in Windows 95.
	
	Microsoft FORTRAN PowerStation: Microsoft FORTRAN PowerStation for
	MS-DOS and Windows is designed to work optimally under Windows 3.1.
	If you use Microsoft FORTRAN PowerStation with Windows 95, graphics
	programs that you compiled using the program will fail when you run
	them. A runtime error appears instead of the usual graphics output.
	
	A patch is available to solve this problem. If you are still using
	version 1.0 instead of version 1.0a, you need to obtain an updated
	version of the program. To determine which version you are running,
	change to the Bin directory, and then run Link.exe. If you are
	running version 1.0a, the text "Version 1.0F" should appear.
	
	To obtain the patch, contact Microsoft product support services at
	the number listed in your documentation. Or, if you live in the
	United States or Canada, call (425) 635-7015. You can also download
	the file Fpsfix.exe from the Microsoft Download Center on
	CompuServe or on Anonymous FTP.
	
	Microsoft Mail 3.2 and Microsoft Schedule+: Microsoft Exchange is
	an upgrade to Microsoft Mail v3.2 and replaces many of the older
	components. For this reason, Microsoft Mail v3.2 will not work if you
	have installed Microsoft Exchange. Also, the Windows 3.1 version of
	Microsoft Schedule+ will not be able to use Exchange to send Email.
	
	Microsoft Visual C++ version 1.5: With the Windows 95 interface
	enhancements, dialog boxes in Visual C++ version 1.5x may appear in
	different screen locations than on Windows 3.1 or Windows NT. When
	you are debugging a program under the Visual C++ environment, it is
	recommended that you not minimize the Visual C++ main window. This
	may cause debug dialog boxes to be displayed off-screen, which would
	result in your not being able to maximize the Visual C++ main window.
	
	Microtek ScanWizard 2.0b7: If you have problems installing this
	program, try carrying out the following procedure:
	1. Add the following line to the [Compatibility] section of your
	  Win.ini file:
	
	  DSHELL=0x00400000
	
	2. Restart your computer, and then re-install Microtek ScanWizard.
	3. Remove this line from your Win.ini file.
	
	Nickelodeon Director's Lab: Some messages may display at the end of
	the setup program. You will need to close the setup program manually.
	This does no harm, because Director's Lab has already been installed.
	After the setup program has added the new shortcuts, you may see the
	following message: "Setup Message: Script or DLL has been corrupted.
	Unable to load dialog template: 'mscuistf.dll: 2'." If this message
	appears, follow these steps.
	1. Press CTRL+ALT+DEL.
	2. Click the Director's Lab setup program, and then click End Task.
	
	Norton Backup: Windows 95 requires new settings for this program.
	Before you run Norton Backup, delete the Nbackup.pif file located in
	the Norton Backup directory.
	
	Office Accelerator: Because there is no Print Manager, Office
	Accelerator will not load using the Office Accelerator menus. Instead,
	configure your printers by clicking the Start menu, clicking Settings,
	and then clicking Printers.
	
	Paint Shop Pro v2.0: You will not be able to use this program to draw
	capture areas inside 32-bit programs, because 16-bit programs do not
	see mouse movements over 32-bit programs. All other mouse capture
	methods will still work, and this will continue to work with 16-bit
	programs.
	
	PCTools Versions 7 Through 9: Shortcuts will not be created during
	installation of PCTOOLS versions 7 through 9 on Windows 95. To create
	shortcuts after installation:
	1. Click the Start menu, and then click Run.
	2. Type Cpsdos.grp, and then press ENTER.
	
	PCTools will be added to your Programs folder. For the shortcuts to
	work, you must add the PCTOOLS directory to the PATH.
	
	Because of changes to the Windows 95 file system, these disk utilities
	will not work correctly with long filenames. For information about
	purchasing disk utilities that were designed for Windows 95, contact
	Symantec.
	
	Personal Oracle 7.1 for Windows 3.1: This program cannot be installed
	on   Windows 95  because it requires a Win32s .dll that is no longer
	used. For information about obtaining an updated version for Windows
	95, call Oracle Corporation at (415) 506 7000 or contact your local
	Oracle office.
	
	QuarkXPress 3.3: You may experience the following problems:
	- Out-of-memory error. Upgrading to QuarkXPress 3.32 should solve the
	 problem. You can download a patch from CompuServe, or contact Quark
	 directly.
	- QuarkXpress 3.3/3.31x library windows may fail to display control
	 box and menu items, rendering it impossible to resize or close
	 library files. This problem will be corrected in QuarkXpress 3.32
	- The QuarkXPress installer may stop at 99% complete when installing
	 on some Windows 95 computers. To properly complete the installation
	 process, select the Continue button.
	
	Quickbooks 2.0: If you experience problems running Quickbooks 2.0
	with Windows 95, add the following entry to the [Compatibility]
	section of your Win.ini file:
	    QBW=0x08000000
	
	Quickbooks 3.0: Before you minimize Quickbooks, be sure to register
	the product. If you have already minimized it and are experiencing
	problems running Quickbooks 3.0, delete the Qbw.ini file in your
	Quickbooks directory.
	
	Quicken: If you configured Quicken to use a printer other than the
	system default printer or to use custom fonts, you will lose these
	settings after upgrading to Windows 95. After Windows 95 is installed,
	you can use Quicken to restore these settings.
	
	Rumba Office 2.0: The shared folders functionality is not functional
	in Windows 95 and will cause installation problems if selected. To
	turn off this feature, when installing Rumba:
	1. Select Custom.
	2. Select AS/400.
	3. Make sure the check box titled Shared Folders And Client API's is
	  not checked.
	4. Continue the installation.
	
	Splice 2.0: You may encounter a General Protection Fault if you try
	to create an optimal palette with some video files. This problem has
	been fixed by Asymetrix in the most recent version (now called Digital
	Video Producer). An free upgrade is available from Asymetrix for all
	registered Splice users. For more information, contact Asymetrix
	Technical Support at 206-637-1600.
	
	SuperPrint: Because of changes to the Windows operating system,
	Version 2.0 of SuperPrint (which includes SuperQue) does not work
	with Windows 95. For more information about SuperQue 95, call
	(800) 366 7494.
	
	Talk-To Plus: For information about the availability of an upgrade
	that may be compatible with Windows 95, call Dragon Systems at
	(800) 825-5897 or (617) 965-5200.
	
	The 7th Guest: If you are running The 7th Guest with a Pro Audio
	Spectrum 16 sound card, you will either need to enable and use the
	Sound Blaster compatibility mode, or configure your Pro Audio Spectrum
	card to IRQ 5 and DMA 3.
	
	Timeline: You may have problems running existing macros with Timeline.
	Timeline tries to use window handles that it has already freed and may
	cause an error. For information about program updates, contact the
	vendor.
	
	Typestry 2.0: If you experience problems running Typestry 2.0, you
	need to obtain a patch from Pixar, Inc. Call the product support
	number that came with your software. You may also have problems using
	Typestry to print to a PostScript printer under Windows 95. The
	workaround is to use a non-PostScript or UniDrive printer.
	
	Ultima VI/Wing Commander CD: Because Windows 95 does not support the
	JOIN command, you will need to run the Ultima VI/Wing Commander CD
	from your hard drive. The procedure for doing this is outlined below
	and in the documentation for this CD game. You will need to copy all
	programs to your hard drive, and then run Install.exe to configure the
	program. You will need approximately 13 MB of space for Wing Commander
	and 5 MB of space for Ultima VI.
	
	To copy all files for either Wing Commander or Ultima VI:
	1. Click the Start menu, click Programs, and then click Explorer.
	2. Double click your CD-ROM drive.
	3. Click the icon for the folder you want to move, and then drag it
	  to the icon for your hard disk.
	4. Run the install program from your hard drive to configure the
	  proper video and sound options.
	
	View Software: Some utilities for Windows 3.1, such as Long File
	Names, need to be upgraded or used differently with Windows 95. To
	obtain a version of View Software that works with Windows 95, in the
	United States call (800) 536-8439. Outside the United States, call
	(415) 856-8439.
	
	XtraDrive: You must load SETVER before the file Xtradrv.sys loads.
	
	YiJaak Graphic Suite: Some problems may occur when running
	Smuggler.exe with Windows 95. To avoid problems:
	- Use the screen capture utility for only short periods of time.
	- Periodically restart your computer to regain system resources when
	 running Smuggler.exe for long periods of time.
	
	For information about obtaining a Windows 95 version of this program,
	in the United States call Inset Systems, Inc., at (800) DR-INSET.
	Outside the United States, call (203) 740-2400.
	
	THIRD-PARTY MEMORY MANAGERS
	===========================
	
	386MAX 7.0
	----------
	Windows 95 removes the following lines from the Config.sys file during
	Setup:
	    Device=\386MAX\ExtraDOS.max pro=\386MAX\ExtraDOS.pro
	    Install=\386MAX\ExtraDOS.max
	
	If Windows 95 fails to start after Setup, try carrying out the
	following procedure:
	1. Refer to the \Manual\Readme.txt file (packaged with 386MAX) about
	  specific software and hardware incompatibilities with the 386MAX
	  software.
	2. Run the MAXIMIZE program, and then follow these steps:
	  a. After MAXIMIZE restarts your computer for the first time, press
	     F8 when you see the "Starting Windows 95" message.
	  b. Choose Safe Mode Command Prompt Only.
	  c. Open your Config.sys file by using any text editor, such as
	     MS-DOS Editor, and remove the following lines:
	  Device=\386MAX\ExtraDOS.max pro=\386MAX\ExtraDOS.pro
	  Install=\386MAX\ExtraDOS.max
	
	  d. Open your 386max.pro file, which is located in the directory
	     where 386MAX is installed, and remove the following lines if
	     they exist:
	  Line beginning with "PRGREG"
	  Line beginning with "HPDAREG"
	  Line beginning with "STACKREG"
	
	  e. Restart your computer.
	  f. When you see the "Starting Windows 95" message, press F8.
	  g. Choose Command Prompt Only. MAXIMIZE should continue setting up.
	  h. Each time the computer restarts, repeat steps f and g until
	     MAXIMIZE has finished.
	
	NOTE: If you see the message "ExtraDOS Error," click OK.
	
	386MAX v7.02, BLUEMAX v7.02, and later versions
	--------------------------------------------
	Version 7.02 and later of BLUEMAX and 386MAX were designed to run with
	Windows 95, and a free update can be obtained from Qualitas, Inc. at
	the following locations:
	
	Qualitas BBS - Dial (301) 907-8030
	CompuServe - PCVENA, GO QUALITAS
	America OnLine - Keyword Qualitas
	Qualitas Customer Service - (301) 907-7400
	
	If you have version 7.02 or later of these memory managers, you do not
	need to follow the work-arounds described in the following sections.
	However, if you install Windows 95 on a system that already has a
	later version of BLUEMAX or 386MAX, you should run the MAXIMIZE
	utility to reinstall the ExtraDOS utility that Windows 95 removes
	during setup.
	
	BLUEMAX 7.0
	-----------
	Windows 95 removes the following lines from the Config.sys file during
	Setup:
	    Device=\BlueMAX\ExtraDOS.max pro=\BlueMAX\ExtraDOS.pro
	    Install=\BlueMAX\ExtraDOS.max
	
	If Windows 95 fails to start after Setup, try the following procedure:
	1. Refer to the \Manual\Readme.txt file (packaged with BlueEMAX) about
	  specific software and hardware incompatibilities with the BlueMAX
	  software.
	2. Run the MAXIMIZE program, and then follow these steps:
	  a. After MAXIMIZE restarts your computer for the first time, press
	     F8  when you see the "Starting Windows 95" message.
	  b. Choose Safe Mode Command Prompt Only.
	  c. Open your Config.sys file by using any text editor, such as
	     MS-DOS Editor, and remove the following lines:
	    Device=\BlueMAX\ExtraDOS.max pro=\BlueMAX\ExtraDOS.pro
	    Install=\BlueMAX\ExtraDOS.max
	
	  d. Open your Bluemax.pro file, which is located in the directory
	     where BlueMAX is installed, and remove the following lines if
	     they exist:
	    Line beginning with "PRGREG"
	    Line beginning with "HPDAREG"
	    Line beginning with "STACKREG"
	
	  e. Restart your computer.
	  f. When you see the "Starting Windows 95" message, press F8.
	  g. Choose Command Prompt Only. MAXIMIZE should continue setting up.
	  h. Each time the computer restarts, repeat steps f and g until
	     MAXIMIZE has finished.
	
	NOTE: If you see the message "ExtraDOS Error," click OK.
	
	NETROOM version 3
	-----------------
	Before setting up Windows 95, verify that CACHECLK is not being
	loaded in the Autoexec.bat file. Windows 95 Setup will fail with
	CACHECLK loaded.
	
	After Setup, if Windows 95 fails to start:
	1. Refer to the \Manual\Readme.txt file (packaged with Netroom) about
	  specific software and hardware incompatibilities with the NETROOM
	  software.
	2. Run the CUSTOMIZE program.
	
	QEMM 7.01 - 7.5
	---------------
	Windows 95 removes the following drivers from the Config.sys file
	during Setup:
	    Dosdata.sys
	    Dos-up.sys
	    St-dbl.sys   (7.01-7.04)
	    St-dspc.sys  (7.5)
	
	After Setup, if Windows 95 fails to start:
	1. Refer to the Manual\Technotes\Readme.txt file (packaged with
	  QEMM) for information about specific software and hardware
	  incompatibilities with QEMM software.
	2. Check Stealthing Options. Try changing ST:M to ST:F on the
	  Qemm386.sys line in the Config.sys file, and then restarting your
	  computer. If that doesn't work, try removing the ST:M or ST:F
	  completely from the Qemm386.sys line in the Config.sys file and
	  then restarting your computer.
	3. Run QSETUP and turn off DOS-UP, Quickboot, and Stealthing Options
	  (see above). QSETUP will recommend running OPTIMIZE.
	4. Run the OPTIMIZE program. (NOTE: If DOS-UP or Stealthing are
	  enabled in QSETUP, then OPTIMIZE will add them to the Config.sys
	  file. Currently, Windows 95 may fail to start with Dosdata.sys and
	  Dos-up.sys installed in the Config.sys file.)
	
	Dosdata.sys, a portion of the DOS-UP features of QEMM, causes the
	Windows 95 multi-boot feature to attempt to start Windows 95 even
	after you select the Previous Version Of MS-DOS option. To bypass
	this situation, press F4 during the second appearance of "Starting
	Windows 95." To correct this problem permanently, remove Dosdata.sys
	and Dos-up.sys from the Config.dos file.
	
	Additional query words:
	
	======================================================================
	Keywords          : win95 kbfaq
	Technology        : kbWin95search kbWin95
	Version           : :
	
	=============================================================================
	

{% endraw %}
