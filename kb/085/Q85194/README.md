---
layout: page
title: "Q85194: Top Questions and Answers for Windows 3.1"
permalink: kb/085/Q85194/
---

## Q85194: Top Questions and Answers for Windows 3.1

	Article: Q85194
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): win31
	Last Modified: 21-SEP-1999
	
	3.10
	
	WINDOWS
	
	kbprint kbdisplay kbsound kb3rdparty kbref kbtool kbnetwork
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This document is a list of the Top Questions and Answers for Microsoft Windows
	3.1. It is distributed via the Microsoft Knowledge Base and other distribution
	channels.
	
	MORE INFORMATION
	================
	
	Most Common Questions and Answers
	Microsoft Windows Operating System Version 3.1
	
	Setup
	-----
	
	Q: What is the most common reason for an unsuccessful Windows installation?
	
	A: Terminate-and-stay-resident programs (TSRs) loaded from the CONFIG.SYS and
	AUTOEXEC.BAT files are the number one cause of an unsuccessful Windows
	installation. If you are having difficulty with Windows Setup, insert a system
	disk in your floppy drive and start your computer. The system disk should
	contain AUTOEXEC.BAT and CONFIG.SYS with no device drivers or TSRs loaded,
	unless necessary to access the hard drive. If you use any special drivers for
	your hard drive, such as Disk Manager or Stacker, make sure the drivers are in
	your new CONFIG.SYS and AUTOEXEC.BAT files and also on the floppy disk. Q:
	During installation, when Windows Setup attempts to switch from the
	MS-DOS-character portion of Setup to the graphical-mode Windows portion of the
	installation, the hourglass cursor disappears and Setup hangs, or Windows exits
	to MS-DOS. Why?
	
	A: This may happen if there is a corrupted or earlier version of SETUP.INF or
	SETUP.EXE located in the WINDOWS or WINDOWS\SYSTEM directory. Search these
	directories and rename either of these files if found. For example, rename
	SETUP.INF to SETUP.OLD. Then run the Windows Setup program from the Windows
	disks again.
	
	Printing
	--------
	
	Q: What could be causing printing problems that didn't occur in Windows version
	3.0?
	
	A: When you set up Windows 3.1, some printer drivers may not get updated
	correctly. To make sure your printer driver was updated correctly, do the
	following.
	
	1. Remove the printer driver that you are using from your system. Run Control
	  Panel and choose Printers. Select the printer driver and choose the Remove
	  button.
	
	2. Use File Manager to change to the WINDOWS\SYSTEM directory. Select the
	  printer driver filename and press the DEL key.
	
	3. Reinstall the printer driver by running Control Panel and choosing Printers.
	  Choose the Add button, select your printer, and choose the Install button.
	
	NOTE: By reinstalling your printer driver, almost all (90 percent of) TrueType
	and third-party printing problems will be corrected.
	Q: When I print in landscape mode on a Linotronic printer, the Encapsulated
	PostScript (EPS) graphic portions of the document are rotated. Why?
	
	A: If you are using the Linotronic or another PostScript printer driver, try
	adding the following line to the [ModelName,Port] section of the WIN.INI file.
	This is the section that says [Linotronic 200/230,LPT1], and not the section
	that says [PostScript,LPT1]:
	
	  LandScapeOrient=270
	
	Q: Can I print in color using my Hewlett-Packard (HP) DeskJet 500c printer?
	
	A: Using the printer driver supplied by Hewlett-Packard, you can print in color
	using this printer. However, printer drivers supplied by Hewlett-Packard do not
	support TrueType fonts. If you want to use TrueType fonts, you can use the
	printer driver that comes with Windows 3.1; however, you won't be able to print
	in color.
	
	Applications
	------------
	
	Q: Since upgrading from Windows 3.0 to version 3.1, I can no longer use the OLE
	features in Excel or Word for Windows. Why?
	
	A: If you upgrade from Windows 3.0 to Windows 3.1, and you had installed in
	Windows 3.0 an application that support OLE), Windows 3.1 may not recognize the
	OLE database. You need to update the database, which is a file named REG.DAT. To
	update the REG.DAT file, do the following:
	
	1. From the File menu in Program Manager, choose the Run command.
	
	2. In the Command Line box, type:
	
	  regedit
	
	  The Registration Information Editor appears.
	
	3. From the File menu, choose the Merge Registration File.
	
	4. Select the registration file that corresponds to the OLE server application
	  you are using. For example, if you are using Microsoft Publisher, choose
	  MSPUB.REG.
	
	5. Choose the OK button.
	
	Q: When I tried to upgrade to Windows 3.1 using DR-DOS 6.0, I received the
	following error message. Why?
	
	  Standard Mode: Fault in MS-DOS Extender
	
	A: Microsoft can only ensure the stability of Windows 3.1 running on MS-DOS or
	PC-DOS versions 3.1 or later. Digital Research has announced the availability of
	a software update for running Windows with DR-DOS. Microsoft neither endorses
	nor ensures the stability of Windows 3.1 running on DR-DOS either with or
	without the Digital Research software update.
	
	Q: Does SMARTDrive make my system run more slowly in Windows 3.1?
	
	A: If SMARTDrive is set up to use double buffering, it is going to run more
	slowly than without double buffering. To make SMARTDrive faster when it is using
	double buffering, try adding the /L switch to the SMARTDrive command line in
	your AUTOEXEC.BAT file. This switch forces SMARTDrive to load its buffer "low,"
	into conventional memory.
	
	Note: When your hard disk requires the use of double buffering, Windows places a
	SMARTDrive command in your CONFIG.SYS file as well as in your AUTOEXEC.BAT file.
	You must place the /L switch on the command line in your AUTOEXEC.BAT file.
	
	Q: In my CONFIG.SYS file, I have the line:
	
	  DEVICE=C:\WINDOWS\SMARTDRV.EXE /DOUBLE_BUFFER
	
	Why is it there? And why can't I run Windows in 386 enhanced mode even through I
	have a 386 computer with 4 megabytes of memory?
	
	A: When Windows is set up, it tests to see if it can understand the hard drive.
	If the hard drive uses a SCSI controller or a caching controller, then Windows
	adds the line DEVICE=C:\WINDOWS\SMARTDRV.EXE /DOUBLE_BUFFER to CONFIG.SYS.
	Sometimes, double buffering may not be activated even though you have the line
	in CONFIG.SYS. If you have a SCSI controller and double buffering is not active,
	then you may not be able to run Windows in 386 enhanced mode. To force double
	buffering, add a + to the end of the SMARTDrive (SMARTDRV.EXE line):
	
	  DEVICE=C:\SMARTDRV.EXE /DOUBLE_BUFFER+
	
	Usage
	-----
	
	Q: Why doesn't my Novell NWPOPUP.EXE messaging utility initialize properly? When
	I exit Windows I get all my messages.
	
	A: If you are running Windows in 386 enhanced mode and a version of Novell
	NetWare's NWPOPUP.EXE with a file date earlier than 3/10/92 is in your WINDOWS
	directory, or if NWPOPUP.EXE is located in a directory prior to the Windows
	directory entry in the PATH= statement, then NWPOPUP.EXE will get loaded and
	will not initialize properly under Windows 3.1. It may also be necessary to try
	placing the following line in the [386Enh] section of your SYSTEM.INI file:
	
	  TimerCriticalSection=10000
	
	This increases the amount of time (specified in milliseconds) before the critical
	section is timed out. Q: I am the system administrator for a Novell network.
	Most of my workstations run with no problem, but two of my workstations only run
	in standard mode and not in 386 enhanced mode. If I do not log onto the network,
	then I can run in 386 enhanced mode.
	
	A: There are four possible causes to the problem you are experiencing:
	
	- incorrect network software drivers
	
	- IRQ conflict
	
	- RAM address conflict
	
	- Base address conflict
	
	1. Read the NETWORKS.WRI file for the steps necessary to upgrade your current
	  versions of IPX and NETX. If necessary contact your network card manufacturer
	  if you need new low-level drivers.
	
	2. Most machines do not support having two devices using the same IRQ at the
	  same time. This means that if you are using your network card on IRQ3 or
	  IRQ4, then you will have to either disable COM2 or COM1, which use the same
	  respective IRQ, or reconfigure the network card for a free IRQ. On most
	  machines, IRQ5 and IRQ2 are free, meaning no other hardware device is
	  attempting to use them.
	
	3. Many network cards use a RAM address in the Upper Memory area between 640K
	  and 1024K. If your card is using this range, then exclude use of this range
	  with EMM386.EXE or an EMMEXCLUDE statement in the SYSTEM.INI file's [386Enh]
	  section. Some cards will not function properly at D000 and need to be
	  reconfigured for D800.
	
	4. Many hardware devices have Base memory addresses (for example, COM ports).
	  There may be a conflict with an existing device. Try reconfiguring the
	  network card for an address of 300h or greater.
	
	Q: When I choose the Ports icon in Control Panel, the Advanced button in the
	Ports dialog box is unavailable (dimmed). Why is this?
	
	A: If the Windows 3.1 COMM.DRV file is not installed correctly, the Advanced
	button in the Ports dialog box will be unavailable. If you upgrade from Windows
	3.0 to 3.1 and you were using a third-party communications driver in 3.0, the
	Windows 3.1 Setup program will not update the communications driver. To make
	sure your COMM.DRV file is installed correctly, try the following:
	
	1. Make sure you have the following setting in the [boot] section of your
	  SYSTEM.INI file:
	
	  COMM.DRV=COMM.DRV
	
	2. Using the MS-DOS expand command (installed in the WINDOWS directory of your
	  hard drive during Windows setup), reinstall the COMM.DRV from the Windows
	  Setup disks (Disk 1 for 3.5-inch disks; Disk 2 for 5.25-inch disks) into the
	  SYSTEM subdirectory of your WINDOWS directory by typing the following:
	
	  expand a:\comm.dr_ c:\windows\system\comm.drv
	
	Q: Can I set up a permanent or temporary swap file on a "stacked" disk drive?
	
	A: Windows 3.1 does not support the use of a permanent or temporary swap file on
	a "stacked" drive. A stacked drive is one on which you are running the Stac
	Electronics' Stacker utility.
	
	Q: I have a sound card that plays the Windows file CANYON.MID, but when I choose
	the Sound icon from Control Panel, all of the dialog box selections are
	unavailable (dimmed). Why?
	
	A: You are using a sound card that is a MIDI synthesizer. You must use a card
	that supports the playing of audio files (files with the .WAV filename
	extension). For example, if you are using the original Adlib Music Synthesizer
	Card, it must be upgraded to the Adlib 2000 or Gold card.
	
	Error Messages:
	---------------
	
	Q: When I start File Manager, I see the following error message. What causes
	this?
	
	  Cannot read from drive I.
	
	A: An MS-DOS version 4.x file named GRAPHICS.COM might be the cause. Try removing
	from your AUTOEXEC.BAT file the command line that specifies GRAPHICS.COM. If you
	choose the OK button when you receive this error message, File Manager displays
	all of your drives; however, it cannot access any of your files. The MS-DOS
	version 5.0 GRAPHICS.COM file does not cause this problem.
	
	Q: What should I do when I receive the
	
	  Inadequate DPMI server
	
	error message?
	
	A: This error message appears when the files KRNL386.EXE and WIN386.EXE are from
	different versions of Windows (when one is from 3.0 and the other from 3.1). To
	see if this is the problem, check the dates on the these files. They are located
	in the SYSTEM subdirectory of your WINDOWS directory. It is possible that an
	older version of these files may be in the path or the WINDOWS directory; search
	the entire path for these files. If necessary, use the MS-DOS expand command to
	reinstall the files from the Windows Setup program. (The expand command is
	installed in the WINDOWS directory of your hard drive during Windows setup.)
	
	This error message can also appear when your system memory-configuration settings
	(sometimes referred to as CMOS settings) don't match the amount of memory the
	system actually has. The way you change the settings depends on the type of
	hardware you have. For more information about changing these settings, see your
	hardware documentation.
	
	Q: When switching to the MS-DOS Prompt from Windows, I receive the following
	error message:
	
	  Incorrect system version. Please install the 386 Enhanced section and run
	  Setup again.
	
	What does this mean and what should I do?
	
	A: There are two possible solutions to this problem:
	
	1. An old WINOA386.MOD may be located in the WINDOWS directory or the path.
	  Delete the old file and use the MS-DOS expand command to expand an updated
	  version from the Windows 3.1 disks by typing:
	
	  expand a:\winoa386.mo_ c:\windows\system\winoa386.mod
	
	  (The expand command is installed in the WINDOWS directory of your hard drive
	  during Windows setup.)
	
	2. In the SYSTEM.INI file, there are three lines that specify what kind of video
	  driver Windows uses when running in 386 enhanced mode. These are 386Grabber=
	  and display.drv= (located in the [boot] section) and display= (located in the
	  [386Enh] section). The
	
	  Incorrect system version
	
	  error message usually occurs when one of these entries is not consistent with
	  the others.
	
	To reset these drivers:
	
	1. Exit Windows and change to the WINDOWS directory.
	
	2. Type setup and press ENTER.
	
	3. Select the current Display option and press ENTER.
	
	4. From the Display list box, select VGA (version 3.0) and press ENTER.
	
	5. If you are asked to use an existing driver, press the ESC key to load new
	  drivers.
	
	Q: When running Windows, why do I get the following error message?
	
	  Call to Undefined Dynalink
	
	A: This error is usually caused by an old .DLL file located in the WINDOWS
	directory. The most common one is TOOLHELP.DLL. Locate this file and rename it.
	Then, restart Windows. The correct version of this file is located in the
	WINDOWS\SYSTEM directory and has a date of 3/10/92 and a size of 14128. This
	problem can also occur with an earlier version of SHELL.DLL, OLECLI.DLL,
	OLESVR.DLL, and COMMDLG.DLL. All of these file should be located in the
	WINDOWS\SYSTEM directory and have a date of 3/10/92.
	
	Additional query words: 3.10 3.1
	
	======================================================================
	Keywords          : win31 
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
