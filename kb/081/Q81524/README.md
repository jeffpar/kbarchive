---
layout: page
title: "Q81524: Description of Files Included with Windows Version 3.0"
permalink: /kb/081/Q81524/
---

## Q81524: Description of Files Included with Windows Version 3.0

{% raw %}

	Article: Q81524
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The article below lists the files that are supplied with the Microsoft Windows
	version 3.0 package, and explains the purpose of each file. Windows drivers are
	not included in this article.
	
	Setup Program
	-------------
	
	The following is the Setup program and accompanying files:
	
	SETUP.EXE       The Windows version 3.0 Setup program
	SETUP.INF       Text setup description file used by Setup
	SYSTEM.SRC      Default SYSTEM.INI file
	WIN.SRC         Default WIN.INI file
	WIN.CNF         Binary source for WIN.COM, which will
	               be created by combining WIN.CNF with an
	               appropriate LGO file
	CGALOGO.LGO     CGA startup logo screen
	EGALOGO.LGO     EGA logo
	EGAMONO.LGO     EGA monochrome logo
	VGALOGO.LGO     VGA logo
	HERCLOGO.LGO    Hercules logo
	EXPAND.EXE      File uncompression utility program
	               (an MS-DOS utility used for network setup)
	WINVER          Windows version-check utility used by Setup
	
	MS-DOS Drivers
	--------------
	
	The following are MS-DOS drivers included with Windows version 3.0:
	
	HIMEM.SYS       Himem driver
	RAMDRIVE.SYS    RAMDrive, a RAM disk utility driver
	SMARTDRV.SYS    SmartDrive, a disk caching utility driver
	EMM386.SYS      EMM386, a 386 expanded-memory emulator
	EGA.SYS         Provides EGA register state preservation
	               for running MS-DOS applications on an EGA
	MOUSE.SYS       Microsoft MS-DOS mouse driver; not used by
	               Windows version 3.0 itself, but used by
	               MS-DOS-based applications running under
	               Windows
	MOUSE.COM       Executable version of above
	MOUSEHP.SYS     HP version of MS-DOS mouse driver
	MOUSEHP.COM     Executable version of above
	
	DLLs
	----
	
	The following are dynamic-link libraries (DLL) used by Windows applications:
	
	LZEXPAND.DLL    DLL used by Control Panel and Setup to expand
	               compressed files on the Windows version 3.0
	               distribution disks
	WIN87EM.DLL     Floating-point emulator library used by some
	               third-party Windows-based applications (not used
	               by any file in the Windows version 3.0 package
	               itself)
	
	Windows-Based Applications
	--------------------------
	
	The following are Windows-based applications included in the Windows version 3.0
	package:
	
	CALC.EXE        Windows Calculator
	CALENDAR.EXE    Windows Calendar
	CARDFILE.EXE    Windows Cardfile
	CLIPBRD.EXE     Windows Clipboard
	CLOCK.EXE       Windows Clock
	DIGITAL.FON     Digital font used only by Windows Clock
	CONTROL.EXE     Windows Control Panel
	CONTROL.INI     Default Text INI file used by Control Panel
	MSDOS.EXE       MS-DOS Executive (provided for backward
	               compatibility only; not recommended for use
	               - SEE NOTE BELOW)
	NOTEPAD.EXE     Windows Notepad
	PBRUSH.EXE      Windows Paintbrush
	PBRUSH.DLL      Library used only by Windows Paintbrush
	PIFEDIT.EXE     Windows PIF Editor
	RECORDER.EXE    Windows Macro Recorder
	RECORDER.DLL    Library used only by Windows Macro Recorder
	REVERSI.EXE     Windows Reversi
	PRINTMAN.EXE    Windows Print Manager
	PROGMAN.EXE     Windows Program Manager
	SOL.EXE         Windows Solitaire
	SYSEDIT.EXE     System editor
	TASKMAN.EXE     Windows Task Manager
	TERMINAL.EXE    Windows Terminal
	WINFILE.EXE     Windows File Manager
	WRITE.EXE       Windows Write
	
	On-Screen Help
	--------------
	
	The following are on-screen help files:
	
	CALC.HLP        Windows Calculator help
	CALENDAR.HLP    Windows Calendar help
	CARDFILE.HLP    Windows Cardfile help
	CLIPBRD.HLP     Windows Clipboard help
	CONTROL.HLP     Windows Control Panel help
	NOTEPAD.HLP     Windows Notepad help
	PBRUSH.HLP      Windows Paintbrush help
	PIFEDIT.HLP     Windows PIF Editor help
	PRINTMAN.HLP    Windows Print Manager help
	PROGMAN.HLP     Windows Program Manager help
	RECORDER.HLP    Windows Recorder help
	REVERSI.HLP     Windows Reversi help
	SOL.HLP         Windows Solitaire help
	TERMINAL.HLP    Windows Terminal help
	WINFILE.HLP     Windows File Manager help
	WRITE.HLP       Windows Write help
	
	Background Bitmaps
	------------------
	
	The following are background bitmaps (in order of resolution):
	
	WEAVE.BMP       32 x 32, 2-color (monochrome) bitmap
	BOXES.BMP       32 x 32, 16-color bitmap
	PYRAMID.BMP     32 x 32, 16-color bitmap
	PAPER.BMP       320 x 240, 2-color (monochrome) bitmap
	PARTY.BMP       320 x 240, 16-color bitmap
	RIBBONS.BMP     320 x 240, 16-color bitmap
	CHESS.BMP       640 x 480, 16-color bitmap
	
	Readme Files
	------------
	
	The following are readme files:
	
	3270.TXT        3270 terminal emulator readme
	NETWORKS.TXT    Network readme
	PRINTERS.TXT    Printers readme
	README.TXT      Main readme
	SYSINI.TXT      SYSTEM.INI readme, part 1
	SYSINI2.TXT     SYSTEM.INI readme, part 2
	SYSINI3.TXT     SYSTEM.INI readme, part 3
	WININI.TXT      WIN.INI readme, part 1
	WININI2.TXT     WIN.INI readme, part 2
	
	System Files
	------------
	
	The following are Windows system files used in all modes:
	
	GDI.EXE         Graphics Device Interface module; provides
	               graphic services
	USER.EXE        User module; provides input/output services
	
	Real Mode Files
	---------------
	
	The following are files specific to real mode Windows version 3.0:
	
	KERNEL.EXE      Real mode Kernel
	               (provides memory management services)
	WINOLDAP.MOD    Real mode Winoldap (the module used to
	               run MS-DOS-based applications, otherwise known as
	               "old applications")
	
	Standard Mode Files
	-------------------
	
	The following are files specific to standard mode Windows version 3.0:
	
	DOSX.EXE        MS-DOS Extender used to run standard mode in
	               the 286 protected mode
	KRNL286.EXE     Standard mode Kernel
	WINOA286.MOD    Standard mode Winoldap
	
	Enhanced Mode Files
	-------------------
	
	The following are files specific to enhanced mode Windows version 3.0:
	
	KRNL386.EXE     Enhanced mode Kernel
	SWAPFILE.EXE    Windows-based application used to create permanent
	               swap files for enhanced-mode virtual memory
	WINOA386.MOD    Enhanced mode Winoldap
	WIN386.EXE      Contains most of the enhanced mode virtual
	               services bound into one executable
	WIN386.PS2      Instance data for PS/2 machines
	
	Raster Fonts
	------------
	
	The following are raster fonts:
	
	HELVA.FON, Helv 8,10,12,14,18,24 (CGA resolution)
	HELVB.FON, Helv 8,10,12,14,18,24 (EGA resolution)
	HELVC.FON, Helv 8,10,12,14,18,24 (60 dpi)
	HELVD.FON, Helv 8,10,12,14,18,24 (120 dpi)
	HELVE.FON, Helv 8,10,12,14,18,24 (VGA resolution)
	HELVF.FON, Helv 8,10,12,14,18,24 (8514/a resolution)
	
	COURA.FON, Courier 10,12,15 (CGA resolution)
	COURB.FON, Courier 10,12,15 (EGA resolution)
	COURC.FON, Courier 10,12,15 (60 dpi)
	COURD.FON, Courier 10,12,15 (120 dpi)
	COURE.FON, Courier 10,12,15 (VGA resolution)
	COURF.FON, Courier 10,12,15 (8514/a resolution)
	
	TMSRA.FON, Tms Rmn 8,10,12,14,18,24 (CGA resolution)
	TMSRB.FON, Tms Rmn 8,10,12,14,18,24 (EGA resolution)
	TMSRC.FON, Tms Rmn 8,10,12,14,18,24 (60 dpi)
	TMSRD.FON, Tms Rmn 8,10,12,14,18,24 (120 dpi)
	TMSRE.FON, Tms Rmn 8,10,12,14,18,24 (VGA resolution)
	TMSRF.FON, Tms Rmn 8,10,12,14,18,24 (8514/a resolution)
	
	SYMBOLA.FON, Symbol 8,10,12,14,18,24 (CGA resolution)
	SYMBOLB.FON, Symbol 8,10,12,14,18,24 (EGA resolution)
	SYMBOLE.FON, Symbol 8,10,12,14,18,24 (VGA resolution)
	SYMBOLF.FON, Symbol 8,10,12,14,18,24 (8514/a resolution)
	
	Vector Fonts
	------------
	
	The following are vector fonts:
	
	MODERN.FON, Modern (all resolution)
	ROMAN.FON, Roman (all resolution)
	SCRIPT.FON, Script (all resolution)
	
	Special Note for MS-DOS.EXE
	---------------------------
	
	The MS-DOS Executive is included with Windows 3.0 only for those who do not want
	to use the standard Program Manager shell. Microsoft does not recommend using
	the MS-DOS Executive as the shell.
	
	Additionally, the MS-DOS Executive has not been updated for Windows 3.0 and may
	exhibit inconsistencies with applications for Windows 3.0. These inconsistencies
	include, but are not limited to the following:
	
	- The directory path is not highlighted correctly when clicked to change
	  directories.
	
	- Proportional fonts are not dealt with correctly.
	
	- Capitalization of filenames may be erratic.
	
	- There is no online help available.
	
	Additional query words: 3.0 3.0a win30
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	

{% endraw %}
