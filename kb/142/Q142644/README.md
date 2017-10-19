---
layout: page
title: "Q142644: Windows NT 4.0 Readme.wri File (Part 4 of 5)"
permalink: /kb/142/Q142644/
---

## Q142644: Windows NT 4.0 Readme.wri File (Part 4 of 5)

	Article: Q142644
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	This article contains a copy of the information in the Readme.wri file
	included in Windows NT version 4.0. Setup copies this file to the System32
	folder.
	
	Multimedia Hardware Notes
	-------------------------
	
	INSTALLING JOYSTICK DRIVERS
	
	This release includes support for the Microsoft SideWinder 3D Pro joystick.
	
	To install the joystick
	-----------------------
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click the Multimedia icon.
	
	3. Click the Devices tab. If you do not have administrator privileges, log off
	  and log back on as an administrator.
	
	4. Click Add.
	
	5. Select Microsoft Sidewinder 3D Pro Joystick and then click OK. The Microsoft
	  SideWinder Joystick Configuration dialog box is displayed. No changes are
	  required.
	
	6. Click OK to close the dialog box. You must restart your computer before you
	  can use your joystick.
	
	To install the joystick driver for any other type of joystick
	-------------------------------------------------------------
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click the Multimedia icon.
	
	3. Click the Devices tab. If you do not have administrator privileges, log off
	  and log back on as an administrator.
	
	4. Click Add.
	
	5. Select Unlisted or Updated Driver, and then click OK.
	
	6. Insert the Windows NT compact disc into the CD-ROM drive.
	
	7. Type the path to the joystick drivers as follows: <cd rom drive
	  letter>:\DRVLIB\MULTIMED\JOYSTICK\<platform> where <platform>
	  is your platform type. For example, type, D:\DRVLIB\MULTIMED\JOYSTICK\X386.
	
	8. Click OK. The joystick configuration dialog box is displayed.
	
	9. Click OK to close the dialog box. You must restart your computer before you
	  can use your joystick.
	
	The joystick driver is known to be incompatible with, or may be
	incompatible with certain versions of, the following hardware:
	
	- NetPower MIPS (or any other machine using the Mozart sound/midi/joyport chip)
	
	- Aztech sound cards.
	
	PLUG AND PLAY SOUND BLASTER SUPPORT
	
	Drivers for Plug and Play Sound Blaster sound cards are included on the
	Windows NT compact disc. They can be found in \DRVLIB\AUDIO\SBPNP folder.
	Before installing the drivers see, the Readme.txt file in the same
	directory. For more information about Plug and Play on Windows NT, see
	"Plug and Play ISA Device Installation and PNPISA.SYS" earlier in this
	document.
	
	SOUND BLASTER/ATAPI PROBLEMS
	
	ATAPI devices such as CD ROM drives are not supported in this release on
	the built-in IDE controller on Sound Blaster Plug and Play adapters.
	
	SOUND BLASTER/SCSI PROBLEMS
	
	Sound Blaster/SCSI cards and PCI SCSI cards may display an
	INACCESSIBLE_BOOT_DEVICE blue screen when performing a new installation or
	an upgrade. This occurs because the BIOS assigns the PCI SCSI card an
	interrupt number that is already in use.  If this occurs, physically remove
	the sound card before reinstalling, or remove the driver during text mode
	portion of setup and then reinstall after the installation or upgrade is
	completed.
	
	DISTORTED SOUND USING TOSHIBA LAPTOP WITH INTEGRATED SOUND CARD
	
	Some games (such as Doom95) may have garbled sound on Windows NT version
	4.0 when running in full-screen mode on a Toshiba laptop with an integrated
	sound card. To solve this problem change your sound card's DMA setting
	from DMA 1 to another available channel.
	
	SOUND BLASTER PRO 2 CT1600 USING MOTOROLA POWERSTACK POWERPC
	
	When using an SB Pro2 CT1600 sound card on a Motorola Powerstack PPC the
	MIDI synth chip may hiss. This occurs if the CT1345 chip is labeled 91. To
	work around the the problem:
	
	1. Click Start, point to Programs, Accessories, Multimedia, and then
	  double-click Media Player.
	
	2. On the Device menu, click MIDI Sequencer..
	
	3. Play any MIDI file for 15 seconds or longer. Sample files are located in the
	  Media folder in your %systemroot%\Media directory.
	
	This procedure will need to be performed each time the machine is
	restarted.
	
	Determining if your system is capable of utilizing ESS audio support in
	
	WINDOWS NT VERSION 4.0
	
	Many system manufacturers implement ESS audio hardware in their mobile
	computer product lines. Some of these manufacturers include:
	
	  Digital Equipment Corporation
	  Gateway
	  Hewlett-Packard
	  IBM
	  Toshiba
	  Zeos
	
	To determine if your system implements an audio chipset, run the Windows NT
	NTHQ tool to analyze your hardware.
	
	To determine if your mobile system has ESS audio functionality available
	using Windows NTHQ:
	
	1. Insert the Windows NT compact disc in the CD-ROM drive.
	
	2. From the command prompt, run Makedisk.bat from <compact disc drive
	  letter>:\Support\HQTool
	
	3. Insert the floppy disk that you created into drive A:
	
	4. Restart the computer.
	
	5. Once the NTHQ tool has analyzed your computer, you can click Other to
	  determine if your system has ESS audio functionality implemented.
	
	If your computer has this audio functionality implemented, obtain the ESS
	driver from the \Drvlib\audio\ess\<platform> where <platform> is Alpha,
	I386, Mips, or Ppc.
	
	Application Notes
	-----------------
	
	The following sections provide general information about running
	applications on Windows NT version 4.0 that were created for MS-DOS,
	Windows version 3.1, Windows 95, or Windows NT version 3.x. Windows NT
	version 4.0 has excellent support for those applications. If you do
	encounter a problem, this section provides some solutions. In addition,
	this section lists specific applications that have known problems with
	Windows NT version 4.0. The companies have been notified of these problems.
	
	ERROR DIALOGS NAMING "REINITIALIZECRITICALSECTION"
	
	Some applications attempt to replace the URL.DLL file that ships with
	Windows NT. If the applications are successful, the replacement .DLL file
	may be an older version specific to the Windows 95 operating system. When
	any application attempts to initialize the replacement URL.DLL, the
	following error dialog will appear:
	
	  "The procedure entry point ReinitializeCriticalSection could not be located
	  in the dynamic link library KERNEL32.dll."
	
	This does not necessarily represent an error in the application you are
	launching when the dialog appears. Another unrelated application has most
	likely replaced the URL.DLL file. In most cases, you can click OK in the
	dialog box and your application will continue as expected.
	
	To reinstall the correct URL.DLL file
	-------------------------------------
	
	NOTE: To prevent a file inconsistancy between the SP1 version and the Internet Explorer versions of the Url.dll file, remember to replace the Url.dll file with the Internet Explorer version.
	
	1. In the %systemroot%\system32 folder, rename URL.DLL to URL.OLD.
	
	2. Copy URL.DLL from the \i386 folder on the Windows NT compact disc to
	  %systemroot%\system32 (substitute your platform folder for "i386" on RISC
	  machines).
	
	3. Reboot to initialize the copied URL.DLL.
	
	ERROR DIALOGS FROM WIN32S APPLICATIONS
	
	Windows NT version 4.0 has been thoroughly tested with Win32s applications
	and most users will not experience any difficulties. After upgrading from
	Windows 3.x to Windows NT version 4.0, some Win32s applications may not
	run. You may see error dialogs stating that the wrong .DLLs were installed.
	Reinstall the applications to reinstall the Win32s DLLs.  Contact the
	application vendor if problems persist.
	
	LONG PRINTER NAMES
	
	Several Windows version 3.x applications cannot print to a printer if the
	printer name contains more than a specified number of characters. Some
	applications will generate a General Protection Fault if this is attempted.
	Other applications may not print to any printer, even printers with short
	names, if the default printer has a "long" name. To resolve these problems,
	rename the printers used with the applications to shorter names and make
	one of those printers the default printer. See "General Printing Issues" in
	the Printer.wri file.
	
	SCREEN APPEARANCE
	
	Dialog and list box areas are incorrectly proportioned in some cases. You
	may be able to control some system-wide size specifications in Control
	Panel.
	
	WINDOWS 95 APPLICATIONS AND MICROSOFT FOUNDATION CLASS LIBRARIES
	
	Many Windows 95 applications use Microsoft Foundation Class (MFC) version
	3.0 libraries. Some of these applications do not install the libraries they
	require. If the libraries they require are not installed, these
	applications may not install or may not run after installation. If other
	applications have installed the MFC DLLs, installation will complete and
	the application will run as expected.
	
	To obtain the correct files, copy MFCxx.DLL (from the Windows 95
	systemroot\system directory, or from a disk supplied by the manufacturer)
	to the Windows NT systemroot\system directory (typically c:\winnt\system).
	
	OPENING FILES CREATED IN WINDOWS NT BY USING WINDOWS VERSION 3.X
	
	If you create a file, using an MS-DOS- or Windows version 3.1-based
	application on Windows NT version 4.0, you may get the error "Cannot find
	WINSPOOL.DRV" when using the file in Windows version 3.x. This error occurs
	because some 16-bit applications attach drive location information to the
	files they create.
	
	Click Close in the error message dialog box and save the file to prevent
	this error while using the file in Windows version 3.x. To prevent the
	error for all applications and their files, create a file in the
	\WINDOWS\SYSTEM directory called WINSPOOL.DRV. The file is not used, so the
	content of the file does not matter.
	
	CONNECTING TO THE INTERNET BY USING MSN
	
	You can use MSN, the Microsoft Network, as your Internet provider, only if
	you have already created an MSN account by using Windows 95. When you
	connect to the Internet through Windows NT by using MSN, proprietary online
	services such as mail or bulletin boards are not available.
	
	To connect to MSN
	-----------------
	
	1. In the Dial-Up Networking dialog box, click New.
	
	2. In the Basic tab, type a name for your entry - for example, MSN.
	
	3. Enter the phone number for the local MSN service that allows Internet access.
	
	4. Select a modem and use the default modem configurations.
	
	5. In the Server tab in the Dial-Up Server Type box, select PPP.
	
	6. In the Protocols box, select only TCP/IP.
	
	7. Clear the Enable PPP LCP Extensions box.
	
	8. In the Security tab, select the Accept Any Authentication Including Clear
	  Text option, and then click OK.
	
	9. Click Dial.
	
	10. In the Authentication dialog box, supply your MSN user name by using this
	  format: MSN/username The format is case sensitive.
	
	11. Type your MSN password, and then click OK.
	
	RUNNING SERIAL COMMUNICATIONS APPLICATIONS
	
	For reliable data transfer at the highest baud rate, use communications
	protocols that support end-to-end flow control. If the protocol you use
	does not support flow control, you may need to reduce the serial port baud
	rate for reliable communication. The following table shows which protocols
	support flow control:
	
	Serial flow control protocol
	----------------------------
	
	Flow control
	
	ASCII (Xon/Xoff)
	
	  No
	
	XMODEM
	
	  Yes
	
	XMODEM-1K
	
	  Yes
	
	YMODEM
	
	  Yes
	
	YMODEM-G (1)
	
	  No
	
	ZMODEM (2)
	
	  No
	
	Kermit
	
	  Yes
	
	CompuServe B+
	
	  Yes
	
	  (1) The -G option disables flow control
	  (2) Some applications allow flow control with ZMODEM. For example, you
	      can enable flow control with Procomm Plus 2 by setting the Transmit
	      Method to 4K WINDOW.
	
	Windows NT supports Windows version 3.x communications programs by using
	the communications driver COMM.DRV. Other communications drivers are not
	supported and may not function reliably. You can check or change the
	communications driver by using the Registry Editor. The value should be:
	comm.drv:REG_SZ:comm.drv
	
	The value is located in the following Registry key:
	
	HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\CurrentVersion\WOW\boot
	
	To run multiple Windows version 3.x communications applications
	simultaneously, or to run a Windows version 3.x communications application
	in the background or minimized and still maintain a reliable connection,
	modify your system to Foreground And Background Applications Equally
	Responsive. To do this, click Start, point to Settings, then click Control
	Panel. Double-click the System icon. Click the Performance tab and set
	Application Performance Boost to None.
	
	MULTIMEDIA APPLICATIONS
	
	Some older applications install an old version of the 16-bit Video for
	Windows runtimes. This may cause system problems with other 16-bit
	applications that play video. Your system may run out of virtual memory,
	resulting in warnings to that effect.
	
	Start the Media Player on the Start menu, point to Programs, Accessories,
	Multimedia. It will tell you that the Registry has been changed, and give
	you the option to fix it. Accept that option.
	
	If an error message stating that Wing32.dll has incorrectly been placed in
	the c:\windows\system directory appears when you run multimedia
	applications from a CD-ROM drive, move Wing32.dll to the Windows NT
	\system32 directory (typically c:\winnt\system32).
	
	Running MS-DOS-based Multimedia Applications
	--------------------------------------------
	
	All MS-DOS-based multimedia applications directly access the computer
	hardware. Windows NT does not allow applications to directly access
	hardware. Consequently, any application (including 16-bit Windows-based
	applications) that attempts to directly access the hardware might fail.
	Typically the application will run without the multimedia features, but the
	application may be slow.
	
	DISK COMPRESSION PROGRAMS
	
	If you compress files using the Microsoft DriveSpace(r) or Microsoft
	DoubleSpace(r) disk compression tool on Windows 95 or MS-DOS, you will not
	be
	able to access the files by using Windows NT version 4.0. To avoid this
	situation, do not compress files using these tools.
	
	MS-DOS ISSUES
	
	MS-DOS Undelete Sentry Blocks
	-----------------------------
	
	Windows NT cannot recognize free space that was created on a FAT partition
	by using the undelete sentry feature in MS-DOS version 6.2. With the sentry
	method, MS-DOS reserves part of the hard drive to remember deleted files,
	then compensates during MS-DOS queries about free space. Because Windows NT
	doesn't understand sentry, it reports the space on the FAT partition as
	used.
	
	Using MS-DOS-Based Disk Tools
	-----------------------------
	
	Using MS-DOS-based disk tools on FAT partitions used by Windows NT version
	4.0 can cause files to be deleted or long filenames to be lost. Microsoft
	recommends that you run only disk tools specifically designed for Windows
	NT version 4.0, or, when running MS-DOS, the chkdsk or scandisk tools.
	
	To prevent the Windows NT version 4.0 FAT file system from using long
	names, set the following Registry entry to 1, using Registry Editor:
	
	HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\FileSystem
	\Win31FileSystem
	
	After changing the entry, double-click on the entry, and then replace "0"
	displayed in DWORD Editor with "1." Then restart your computer for the
	change to take effect.
	
	Caution: If you use MS-DOS--based disk tools on a FAT disk partition used
	by Windows NT, the tool can cause the loss of long filenames or delete
	files on the FAT partition. If you dual boot to Windows 95 and Windows NT
	and use the Norton Utilities for Windows 95, the Norton DiskFix tool could
	delete any files created by Windows NT on the FAT partition. You should
	back up the FAT partition before running any disk tool other than chkdsk.
	
	MS-DOS Applications Requiring a PIF File
	----------------------------------------
	
	If you are accustomed to using a PIF (Program Information File) with your
	MS-DOS programs, you can continue doing so on Windows NT version 4.0. To
	change settings, change the .PIF or .EXE file properties, do not edit the
	.PIF file. For instructions on how to do this, on the Start menu, click
	Help, click the Contents tab, double-click How To..., double-click Run
	Programs, and then double-click "Optimizing MS-DOS Programs."
	
	Running MS-DOS-Based Remote Control Applications
	------------------------------------------------
	
	Remote control applications control a remote computer from a local computer
	through a serial connection. The local computer runs a program that sends
	keystrokes to the remote computer while displaying a copy of its screen.
	The remote computer runs a memory-resident program that allows the local
	computer to control it. If the remote computer is running Windows NT, you
	must create custom startup files and a custom PIF to set up the MS-DOS
	environment for the memory-resident program.
	
	To create the startup files:
	
	1. Edit the files AUTOEXEC.NT and CONFIG.NT files, and then save the files under
	  new names:
	
	2. In the custom AUTOEXEC file, add the name of the memory-resident program if
	  you want to start it when you run the PIF.
	
	3. In the custom CONFIG file, add the commands dosonly and echoconfig. The
	  dosonly command ensures that no programs can be started that can disable the
	  memory-resident program.
	
	To create a .PIF file for MS-DOS Remote Control Applications:
	
	1. In Windows NT Explorer, click the %ystemroot% folder, and then right- click
	  the file _DEFAULT.PIF.
	
	2. On the context menu, click Properties.
	
	3. Click the _default button Properties, click the Program tab.
	
	4. In the cmd line box, type COMMAND.COM.
	
	5. Click Windows NT.
	
	6. In Windows NT PIF Settings box, specify the names of the custom startup files
	  you created. Click OK.
	
	7. Click the Misc. tab. Under Other, ensure that the Fast Pasting box is
	  checked.
	
	RUNNING APPLICATIONS THAT ATTEMPT TO DIRECTLY ACCESS THE HARDWARE
	
	Any MS-DOS based or 16-bit Windows based application that attempts to
	directly access the hardware fails under Windows NT. Windows NT does not
	allow applications to directly access hardware. Consequently, applications
	that attempt to directly access the hardware fail.
	
	Specific Applications:
	
	Software Applications by Edmark
	-------------------------------
	
	The auto start for Windows95 Edmark applications does not work in Windows
	NT. Click OK to close the error message dialog box.
	
	The following applications have exhibited this problem:
	
	  Bailey's Book House
	  Millie's Math House
	  Sammy's Science House
	  Thinkin' Things Collection 1
	  Strategy Games of the World.
	
	To install the software:
	
	1. Click Start, and then click Run.
	
	2. Type the drive letter of your CD-ROM drive.
	
	3. Double-click the Edinst directory.
	
	4. Double-click the Stub31.exe file. The installation program should begin.
	
	4DOS for Windows NT
	-------------------
	
	In older versions of 4DOS the dir and free commands may give inaccurate low
	values for drives over 2GB. Contact J.P. Software at 617.646.3975 or
	http://www.drff.com/~drff/jpsoft.htm for upgrade information.
	
	7th Guest
	---------
	
	This application does not run under Windows NT.
	
	ABC FlowCharter
	---------------
	
	FlowCharter cannot save charts. The application misinterprets the operating
	system version information and fails to display the Save dialog box.
	Contact Micrografx at (214) 234-2694 or online at http://www.micrografx.com
	for upgrade information.
	
	ABC Graphics Suite
	------------------
	
	Customers might experience difficulties running ABC Graphics Suite under
	Windows NT, versions 3.51 and 4.0. Some problems with early versions of the
	Graphics Suite applications have been corrected with later releases.
	Contact Micrografx support at (214) 234-2694 or online at
	http://www.micrografx.com for more information. See also the separate
	entries for ABC FlowCharter, Instant 3D, Micrografx Designer and Micrografx
	Picture Publisher later in these release notes.
	
	Adobe File Utilities 1.0
	------------------------
	
	Adobe File Utilities version 1.0 does not automatically create a group in
	the Programs menu when installed under Windows NT version 4.0. Access the
	program by using the Windows NT Explorer or modify the Start menu.
	A new nested folder cannot be created by Adobe File Utilities Setup
	program. You must create the destination folder if it does not already
	exist before running Setup.
	
	Adobe PageMaker 6.0
	-------------------
	
	Error boxes appear occasionally, but they rarely prevent the application
	from functioning. Adobe will release a fix for Windows NT version 4.0.
	
	If font smoothing is enabled, you cannot skew text. To disable font
	smoothing, from Display in Control Panel, click the Plus! tab and clear the
	Smooth edges of screen fonts check box.
	
	Adobe Photoshop 2.5
	-------------------
	
	When using Adobe Photoshop version 2.5, image windows may not repaint
	properly if you are using 256 colors and open grayscale files. Also,
	loading pattern files (*.AI) in Photoshop 2.5 may fail. You will receive a
	message such as:
	
	  "Could not open C:\PHOTOSHOP\PATTERNS\[FILENAME].AI because Photoshop was
	  unable to parse the PostScript."
	
	If you choose OK in the dialog box, you can continue working in Photoshop,
	but you can't access the specified pattern file.
	
	Other windows may not repaint properly when you are running Adobe Photoshop
	using 256 colors and an operation, such as restoring a file, changes the
	color palette.
	
	After Dark
	----------
	
	When CTRL+ESC is pressed to display the Start menu, After Dark will not
	recognize keyboard or mouse activity, and the screen saver will start even
	when the computer is in use. If you press CTRL+ESC, close and restart After
	Dark.
	
	Aladdin Dongle Driver
	---------------------
	
	If problems occur when you use the Aladdin professional software protection
	system device driver (HASP), upgrade to the latest version of the driver.
	To obtain the latest driver:
	
	- Download the HASP device driver from Aladdin's FTP server at ftp.aks.com. The
	  subdirectory is: /pub/hasp/enduser/. The file is called Win32drv.zip.
	
	- Contact Aladdin Knowledge Systems Inc HASP technical support. US and Canadian
	  customers should call (212) 564-5678 or (800) 223-4277, or send email to
	  support@us.aks.com. International customers should call +972-3- 5375795 or
	  send an e-mail message to techsup@aks.com.
	
	Aldus Persuasion
	----------------
	
	Attempting to embed an AVI clip causes the application to crash. Audio
	clips will embed and play correctly, but not video.
	
	Alpha Five
	----------
	
	Alpha Five does not run under Windows NT version 4.0.
	
	Approach 3.0
	------------
	
	If you exit Approach soon after clicking SendMail on the File menu,
	Approach experiences a General Protection Fault. Do not close Approach
	while the mail client is loading.
	
	ARCServe
	--------
	
	Backups may proceed very slowly on some hardware configurations. Contact
	Cheyenne at http://www.cheyenne.com for upgrade information.
	
	AutoCAD Release 11 286 and Release 12
	-------------------------------------
	
	The Autolisp extensions (EXTLISP.EXE) for AutoCAD are not supported because
	they require Virtual Control Program Interface (VCPI).
	
	To correctly redraw and perform graphic operations such as cut and paste,
	you must use the correct AutoCAD video driver. The default AutoCAD video
	driver is Windows Accelerated Display Driver ADI 4.2 by Autodesk, Inc.
	(#1). If you use this driver you will have problems with cut and paste and
	with redraw operations. Use the Windows driver from Autodesk, Inc., and
	these operations will function correctly.
	
	AutoCAD Release 13
	------------------
	
	AutoCAD Release 13 for MS-DOS is not supported by AutoCAD for use on
	Windows NT. Use AutoCAD for Windows NT instead. AutoCAD for Windows NT is
	available on the same compact disc as the MS-DOS version.
	
	Autodesk 3D Studio, Release 2
	-----------------------------
	
	3D Studio is not supported.
	
	Autodesk Generic CADD 6.0
	-------------------------
	
	The Generic CADD 6.0 screen is limited to 640x480 VGA resolution on Windows
	NT. To use this application, select the IBM VGA (Video Graphics Array) &
	compatibles video graphics display from the Generic CADD 6.0 configuration
	tool (CONFIG.EXE).
	
	Bailey's Book House
	-------------------
	
	See "Software Applications by Edmark" earlier in this document.
	
	Banyan Enterprise Client for Windows NT
	---------------------------------------
	
	If you wish to use the Banyan Enterprise Client for NT from Banyan Systems
	with this release of Windows NT, you will need to obtain version 5.56(30)
	or later of the client. You may obtain this by contacting your Banyan
	Channel Partner or Banyan Reseller.
	
	Borland C++ 4.5
	---------------
	
	The 16-bit character-mode debugger (TD.EXE) is supported; however, the 16-
	bit Windows-based debugger (TDW.EXE) is not supported.
	
	Borland Pascal with Objects 7.0
	-------------------------------
	
	Turbo Debugger and WinSight are not supported.
	
	Borland Turbo Pascal for Windows
	--------------------------------
	
	The 16-bit character-mode debugger is supported; however, the 16-bit
	Windows-based debugger is not supported.
	
	A General Protection Fault may occur when printing to a printer that has a
	long filename . Create a short name local printer to print from Turbo
	Pascal.  See "General Printing Issues" in the Printer.wri file.
	
	Brief 3.1 for MS-DOS
	--------------------
	
	At end of installation, Brief prompts you to reboot. If you respond "y"
	(yes), Brief appears to hang. Respond "n" (no).
	
	Broderbund KidPix for Windows 1.0
	---------------------------------
	
	The application may fail when printing to a printer whose name has greater
	than 12 characters. To avoid this problem, before you print, make sure that
	the printer name is fewer than 12 characters.
	
	Broderbund Myst
	---------------
	
	Introductory videos don't play, and some movies within the game don't play
	either. This is a Myst problem which has been fixed by Broderbund. Please
	contact them for an updated copy.
	
	Calendar Creator
	----------------
	
	Calendar Creator does not display or print graphics when run under Windows
	NT. If a network printer is installed, Calendar Creator may not be able to
	print. You can print to a local printer by removing any installed network
	printer and installing a local printer.
	
	Carmel Anti-Virus
	-----------------
	
	Some text is not displayed in early versions of Carmel Anti-Virus. Contact
	Carmel Software at http://www.fbsolutions.com/NTAV for upgrade information.
	A new nested folder cannot be created by the Carmel Anti-Virus Setup
	program. You must create the destination folder if it does not already
	exist before running Setup.
	
	Chessmaster 3000
	----------------
	
	Because of copy protection on the Chessmaster distribution disks, Windows
	NT does not support installation of this application. Chessmaster 4000
	works correctly.
	
	Claris Works 2.0
	----------------
	
	Palette problems cause random General Protection Faults in version 2.0 of
	Claris Works for Windows.
	
	The problems are fixed in version 4.0. Contact Claris (5201 Patrick Henry
	Drive, PO Box 58168, Santa Clara, CA, 95052-8168) for upgrade information.
	
	Claris Works 4.0
	----------------
	
	An access violation can occur when you attempt to import documents.
	The "Introduction to Claris Works" help file does not run under Windows NT
	Workstation or Windows NT Server version 4.0.
	
	Some non-standard fonts cannot be used with Claris Works 4.0 when run under
	Windows NT version  4.0.
	
	CleanSweep 95
	-------------
	
	CleanSweep 95 detects applications only in the current user's Personal
	Groups. It does not find any applications in Common Groups.
	
	The CleanSweep 95 "Install monitor" and "Usage monitor" features are not
	available under Windows NT version 4.0.
	
	Codewright
	----------
	
	Codewright may appear to hang or crash when updating its Help files index.
	Older versions of Codewright cannot index the version 4.0 Help files found
	in some applications, such as the Win32 SDK. Contact Premia at
	www.premia.com for upgrade information.
	
	Commute
	-------
	
	Start Commute by using a custom PIF and custom startup files. Be sure to
	clear the Allow Fast Paste check box in the Advanced Options dialog box
	when creating the PIF. For more information, see "MS-DOS Applications
	Requiring a .PIF File" earlier in this document.
	
	CompuServe Information Manager (CIM) for MS-DOS
	-----------------------------------------------
	
	The MS-DOS--based version of CIM attempts to access COM1 through COM4 when
	it starts. If any of these ports is not installed or is already in use, you
	may see the following error message:  "The system cannot open COM port
	requested by the application." You can safely ignore this message unless
	your modem is installed on the unavailable port.
	
	CompuServe Information Manager (CIM) for Windows 1.4 and 2.0.1
	--------------------------------------------------------------
	
	- All versions of WinCIM.exe block all mouse input, and all top level windows
	  including the desktop and Taskbar while connecting to the service because the
	  application uses a system modal dialog when dialing and connecting.
	
	- If you receive a Winsock error when launching WinCIM 2.0.1, it means the
	  Mosaic check box is checked. CompuServe's Winsock is incompatible with
	  Windows NT. (Use of CompuServe's Mosaic is accessible by using RAS. See
	  Network.wri for more information about configuring RAS.)
	
	To eliminate the Winsock error:
	
	1. Launch WinCIM.
	
	2. On the Sessions menu, click Settings.
	
	3. Clear the Use Winsock check box, and then click OK.
	
	Copydoubler (Macintosh application)
	-----------------------------------
	
	When doing a fast replace of an existing folder, Copydoubler may
	incorrectly assume that the first directory does not exist and will attempt
	to recreate it on the server resulting in Error 48 (DuplicateFileName).
	Other copying errors may occur with the program when used with   Windows NT
	Macintosh-accessible volumes.
	
	Corel Depth 6.0
	---------------
	
	When selecting a print format, be aware that Corel DEPTH exhibits a dotted
	line illustrating the print format you have selected. When printing to
	anything larger than the white page background such as a poster/plotter
	size, the dotted line is not apparent because you  selected a size greater
	than the working plane. However, your print out will not match the expected
	print size.
	
	Corel Draw 3.0 and 4.0
	----------------------
	
	When you attempt to save a file, the error "Not enough disk space" or
	"Error writing <filename> file" might appear. To resolve this, select None,
	1K, or 2K, in the Image Header list.
	
	Corel Draw 5.0
	--------------
	
	The Roll-Up dialog boxes in Corel Draw 5.0 will not close if you double-
	click the System menu. To close Roll Up dialog boxes, click once on the
	System menu, and then click Close from the pull down menu.
	
	Corel Draw 6.0
	--------------
	
	- Corel Draw 6.0 produces an Access Violation, "closing Corel Draw," when
	  saving a file to a disk with less than 28K free. Make sure there is more than
	  28K free disk space, or you might lose all changes and possibly the file
	  itself.
	
	- Moving an object off the screen in any direction can cause an access
	  violation in Corel DRAW 6.0 (169). This also happens on Windows 95.
	
	- Corel Draw 6.0 can corrupt the heap when a user attempts multiple Save As
	  commands of a typically graphic file in combination with different thumbnail
	  sizes, and Corel versions.
	
	- When attempting to import .doc, .sam, .rtf, or other types of text documents,
	  avoid the 'import method' options to the right of the File Type box or you
	  will receive an Access Violation message.
	
	Corel Font Master 6.0
	---------------------
	
	The Create Group Icon command on the File menu does not work with Windows
	NT version  4.0.
	
	A Windows NT Access Violation occurs when the Browse button is pressed.
	The application interprets the Windows NT version 4.0 version incorrectly
	and fails to provide a File Open dialog.
	
	Corel Presents 6.0
	------------------
	
	Occasionally, while editing the font type, color, etc, of a block of text
	for a slide, text from another block appears to merge with the active text
	block window. The merged text cannot be edited unless you access that block
	of text.
	
	Corel PrintHouse
	----------------
	
	Some versions of Corel PrintHouse may have problems printing to network
	printers. Contact Corel for more information.
	
	Corel Script Editor 6.0
	-----------------------
	
	If you open a sample file, run it by selecting Debug|Run, then exit without
	saving, an Access Violation occurs. Call Corel for an updated version.
	
	Corel Quattro Pro 7
	-------------------
	
	This application will not install on Windows NT. The next release of the
	application is expected to run on Windows NT.
	
	Corel Ventura for DOS
	---------------------
	
	When running Corel Ventura Publisher for DOS on RISC-based computers, the
	application can fail when attempting to open more than one document or when
	certain mathematical formulas are entered.
	
	Corel Web.Data
	--------------
	
	An access violation may occur when using the Corel Uninstaller to remove
	Corel Web.Data.
	
	Corel WordPerfect 7
	-------------------
	
	This application will not install on Windows NT. The next release of the
	application is expected to run on Windows NT.
	
	Corel WordPerfect 6.1 for Windows
	---------------------------------
	
	See  WordPerfect 6.1 for Windows later in the document.
	
	Crosstalk for MS-DOS
	--------------------
	
	The installation command window does not resize correctly. Change your
	command window size to 80 x 25.
	
	Crosstalk 2.2 for Windows
	-------------------------
	
	An error message appears when you attempt to set the fonts for the specific
	printer using the Print Setup dialog box. To work around this problem,
	perform the following steps:
	
	To set fonts within Crosstalk 2.2 for Windows:
	
	1. Click Start, point to Settings, and then click Printers.
	
	2. Right-click the desired printer, and then click Set As Default.
	
	3. Close the Printers window.
	
	4. Open CrossTalk.
	
	5. On the File menu, click Printer Setup.
	
	6. Select Default Printer, and then set the font for the default printer.
	
	Crystal Reports
	---------------
	
	The Crystal Reports uninstaller shortcut created by Setup does not launch
	the Uninstaller program. To remove Crystal Reports from your system, use
	Add/Remove Programs in Control Panel or run Uninstall from the CRW folder.
	
	CSC ChemDraw Pro
	----------------
	
	A General Protection Fault might occur when closing early versions of this
	application. This problem has been corrected in version 3.5. Closing
	multiple windows may produce an access violation. Close each window
	separately. Contact Cambridge Software (875 Massachusetts Avenue,
	Cambridge, MA, 02139) for upgrade information.
	
	Cyberspeed
	----------
	
	Cyberspeed does not install or run under Windows NT.
	
	d-Time
	------
	
	This application is specific to the Windows 95 operating system and is not
	intended for use on Windows NT. It correctly detects that Windows 95 is not
	present and does not install.
	
	dtSearch
	--------
	
	When you run dtSearch under Windows NT, all unavailable buttons are
	unreadable. This does not affect dtSearch functionality.
	
	Dashboard 95
	------------
	
	Several Dashboard 95 features available under Windows 95 are missing under
	Windows NT version 4.0. For more information, contact Starfish Technical
	Support. (On the Microsoft Network and other online services, GO Starfish.)
	
	DeLorme Map'n'Go 1.0
	--------------------
	
	When you install DeLorme Map'n'Go 1.0 under Windows NT, the following error
	message appears:
	
	  Could not open the file named 'C:\WINDOWS\MPLAYER.INI'.
	
	If you click Ignore to continue installing DeLorme Map'n'Go 1.0, later
	during installation, a fault occurs, and the following message appears:
	
	  An error has occurred in your application.
	
	These errors are harmless. In each case, choose Ignore to continue
	installing DeLorme Map'n'Go 1.0.
	
	Delrina CommSuite
	-----------------
	
	Setup misinterprets the Windows NT 4.0 version information. Applications
	will not install.
	
	Delrina WinFax Pro 4.0
	----------------------
	
	Delrina WinFax Pro 4.0 does not add a folder to the Start/Programs menu.
	
	Delrina WinFax Pro 7.0
	----------------------
	
	The application is not supported because device drivers are not yet
	available.
	
	DeScribe
	--------
	
	DeScribe cannot view network printers.
	
	DeskScan II, version 2.3
	------------------------
	
	Hewlett-Packard DeskScan II version 2.3 runs only on Windows 95 and does
	not run on Windows NT.
	
	Obtain version 2.2 from Hewlett-Packard from one of the following
	electronic locations:
	
	- CompuServe:
	
	  GO HPPERIn the ScanJet Library, download the following file:DS22EN.EXE.
	  Description: HP DeskScan for Windows 3.1 v2.2Size: 1203301Date: 9/19/95
	
	- On the Internet:
	
	  Connect to http://www.hp.com/cposupport/indexes/swin_dos.html. Download the
	  file DS22EN.EXE (DS22xx.EXE)
	
	Director 4.04
	-------------
	
	Director may cause an error while importing a 1MB or larger graphics file
	across a network.
	
	Director 5.0
	------------
	
	- When using the ANIMWIZ dialog box, the cursor flashes from a pointer to an
	  I-bar when placed over the text edit area.
	
	- Director, Photoshop, and other 3rd party filters are not accessible when
	  selecting Filter Bitmap from the Xtras menu in either Windows NT version 4.0
	  or Windows NT version 3.51.
	
	- If you notice that your Windows NT desktop changes colors after exiting
	  Director, use the Display icon in Control Panel to reset the desktop screen
	  colors.
	
	- Several Director dialog boxes offer a shortcut key combination such as ALT+C
	  to open the color palette. The shortcut key combinations do not work on
	  Windows NT version 4.0, Windows NT version 3.51, or Windows 95.
	
	Ecco Personal Information Manager version 3.0
	---------------------------------------------
	
	The 16-bit version of Ecco Personal Information Manager does not work with
	Windows Messaging or other 32-bit applications. Contact Ecco Technical
	support at (206) 885-0559.
	
	eXalt
	-----
	
	eXalt will fail during certain cut-and-paste operations. Contact Intergraph
	Corporation for more information.
	
	eXceed 4.0 (x86 Compatible & RISC)
	----------------------------------
	
	Install eXceed on a FAT or uncompressed NTFS drive, or create an
	uncompressed installation directory on the compressed NTFS drive before
	installing eXceed 4.0. RISC versions of eXceed 4.0 do not work correctly
	with long file names or NTFS compression. An error box "Cannot create
	directory..." appears when installing on a compressed NTFS drive.
	
	Various problems are corrected in eXceed version 5.0. Contact Hummingbird
	at (416) 496-2000 for upgrade information.
	
	eXceed 5.0 (x86 Compatible)
	---------------------------
	
	Error messages relating to the HCL (Hummingbird Communications Ltd.) Inetd
	service may appear when upgrading, if Inetd is installed as a Windows NT
	service. An error box may appear when launching the Inetd service for
	configuration, but configuration proceeds as expected. An Access Violation
	may occur when stopping the Inetd service.
	
	F-19 Stealth Fighter
	--------------------
	
	This application is not supported.
	
	FastTrack Schedule
	------------------
	
	This application must be manually deleted from the Windows NT Explorer
	because the application cannot be removed by using the Add/Remove Programs
	icon in Control Panel.
	
	Fastback 6.0 for DOS
	--------------------
	
	If you experience display and/or mouse problems, try to disable the 3-D by
	changing, in Fastback, the Screen Mode to Flat Color and changing Show
	Mouse to Block.
	
	FileMaker Pro 3.0
	-----------------
	
	Due to a bug in FileMakerPro 3.0's communication with WINSPOOL,  the
	application can fail when performing a wide variety of operations, which
	include printing, using the clipboard, and opening and closing files.
	FileMaker Pro 3.0 version 3 fixes this problem. The updated version is
	available at www.claris.com.
	
	Filewalk
	--------
	
	FILEWALK.EXE (version 1.0A CDRM 566200), included on the Microsoft
	Multimedia Development Kit compact disc, attempts direct disk access and is
	not supported. A working version (S/B 1.0, CDRM 837500) of this application
	is available from Microsoft.
	
	Flight Simulator (RISC only)
	----------------------------
	
	Will not run if sound is enabled.
	
	FlowModel
	---------
	
	FlowModel 2.0 does not recognize network printers. Unless a local printer
	is installed, FlowModel 2.0 may present an error message when started or
	when printer operations are chosen.
	
	FlowModel does not let you link a FlowModel diagram to a another FlowModel
	diagram when run under Window NTversion 4.0. Contact Arcland at (610) 993-
	9904 for upgrade information.
	
	Framemaker versions 4.0 and 5.0
	-------------------------------
	
	Framemaker cannot use printer names over 32 characters. Make sure that the
	printer name is less than 32 characters.
	
	Harvard Graphics 4.0 for Windows 95
	-----------------------------------
	
	When you install Harvard Graphics 4.0 for Windows 95 under Windows NT
	Workstation or Window NT Server version 4.0, a 5-minute tour dialog box is
	displayed while online registration is running. This dialog box should not
	appear until the registration program has completed. To work around this
	problem, switch back to the registration program by pressing ALT+TAB.
	
	This problem might also occur with other programs that use the
	InstallShield 3.0 setup engine and start programs during setup. A newer
	version  of InstallShield that fixes this problem is available to
	developers.
	
	HiJaak for Windows 95
	---------------------
	
	HiJaak for Windows 95 does not install or run under Windows NT.
	
	HiJaak Graphics Suite 95
	------------------------
	
	HiJaak Graphics Suite 95 does not install or run under Windows NT.
	
	Ice & Fire
	----------
	
	Ice & Fire does not install or run under Windows NT.
	
	Intergraph G91 Display Adapters
	-------------------------------
	
	The Weitek-compatible display driver included with Windows NT version 4.0
	does not work with the Intergraph G91 display adapters. Contact Intergraph
	for an updated driver.
	
	Intergraph Voxel Analyst 2.0
	----------------------------
	
	- After creating legends, the colors in the legend may appear masked (or
	  turned) as white.
	
	- If a dialog box in this application has pull-down list boxes, you will see
	  the list box tabs as two very tiny vertical gray bars. The drop-down list box
	  displays only the file in the list box's primary selection area.
	
	- Legends cannot be moved unless the full drag option is not selected in
	  Windows NT version 4.0. To clear this option, double-click the Display icon
	  in Control Panel. Click the Plus! tab. Clear the Show window contents while
	  dragging option.
	
	- Using the Design Elements dialog box may cause an Access Violation in the
	  application .
	
	Imagineer Technical
	-------------------
	
	Access violations may occur when printing. Opening the Display Manager on
	the Tools menu may cause an access violation. Contact Micrografx at (214)
	234-2694 or online at http://www.micrografx.com for upgrade information.
	
	Instant 3D
	----------
	
	Instant 3D fails to save files because it interprets the Windows NT 4.0
	version number incorrectly. Contact Micrografx at (214) 234-2694 or online
	at http://www.micrografx.com for upgrade information.
	
	Janna Contact 95
	----------------
	
	In some versions of Janna Contact 95, Help buttons and menu selections do
	not open help files. Double-clicking the Janna .HLP files in Explorer opens
	them as expected.
	
	Janna Contact requires MFC DLLs, but early versions do not install them.
	MFC DLLs will be present on your system only if other applications have
	installed them. If other applications have installed the MFC DLLs, Janna
	Contact 95 will install as expected.
	
	Early versions might create access violations when exiting the tutorial.
	
	Contact Janna Systems (3080 Yonge St., Suite 6060, Toronto ON, M4N 3N1,
	CANADA) for upgrade information.
	
	Kai's Power Tools
	-----------------
	
	Drop-down menus may not display correctly although the menu items can be
	selected as expected.
	
	Kid Cad 1.1
	-----------
	
	You will not be able to run Kid Cad 1.1 in the Show Me mode because the
	mode requires the Windows 3.1 Macro Recorder which is not included in
	Windows NT version 4.0.
	
	Lap-Link V
	----------
	
	File transfers between parallel ports and serial ports is not supported.
	You can transfer files by using modems.
	
	LHX Attack Chopper
	------------------
	
	LHX Attack Chopper will run slowly under Windows NT if sound is turned on.
	
	Lotus 1-2-3 version 2.4 and greater
	-----------------------------------
	
	Lotus 1-2-3 can be configured to print in either parallel or LPT mode. For
	optimal printing performance with Windows NT, configure the application in
	LPT mode.
	
	Lotus Agenda
	------------
	
	Start Agenda by using the forcedos command. For more information, see the
	forcedos topic in the Command Reference section of Windows NT Help.
	
	Lotus AmiPro 3.1
	----------------
	
	Lotus AmiPro version 3.1 does not recognize Print Setup settings. If you
	change any print attributes, such as Duplex in File, Print Setup does not
	work. To make settings work correctly, set the default document properties
	in the Printers folder.
	
	Lotus cc:Mail for Windows
	-------------------------
	
	The PATH environment variable cannot exceed 143 characters or a General
	Protection Fault will occur in cc:Mail. When running 16-bit applications,
	the path used by Windows NT is created by appending the Autoexec.bat PATH
	to the System path. Reduce the System and/or the Autoexec.bat PATH.
	
	While installing cc:Mail for Windows, a General Protection Fault in
	Msconstf.dll occurs if you do not have a Config.sys file. Although
	Config.sys is required by Windows, it is not required for Windows NT. The
	cc:Mail setup program looks for Config.sys and the fault occurs if the file
	doesn't exist. Shutdown Windows NT and create an empty file named
	Config.sys in the root directory of your startup drive.
	
	Message-sorting icons appear incorrectly, looking like Minimize and
	Maximize window buttons.
	
	Lotus cc:Mail for MS-DOS
	------------------------
	
	Using the system mouse pointer during the installation of cc:Mail can lock
	the keyboard. To work around this problem, you can either hide the mouse
	pointer or, on x86-based computers only, run the installation program using
	the full screen.
	
	Lotus Freelance Graphics (Freelance 96)
	---------------------------------------
	
	The Lotus Freelance Graphics 96 setup program displays a "FLW+855:
	Overflow" error. As a result, you cannot install Lotus Freelance Graphics
	
	1. Contact Lotus for more information.
	
	Lotus Notes 3.x
	---------------
	
	Lotus Notes will not run if you are using a NetWare Notes server.
	
	Lotus Notes/FX links are not supported in Word for Windows NT (32-bit).
	Notes/FX links are supported for Word for Windows 6.0c (16-bit) under
	Windows NT version 4.0.
	
	No alert sound is heard when Lotus Notes mail is received. Notes uses
	undocumented Windows version 3.0 calls to produce its mail alert sound. The
	undocumented calls are not supported under Windows NT version 4.0.
	
	Lotus Notes clients that use NetBIOS to communicate with the Notes server
	must be configured correctly to establish communication. The server and
	client must be configured to use the same network protocol. By default, a
	Notes client uses the first protocol (for example, NetBIOS LANA number 0).
	If this does not match the Notes server configuration, you must either
	configure the correct protocol for LANA0 using the Network icon in Control
	Panel or change the port used by the Lotus Notes client.
	
	Lotus Notes does not create a list of available program groups during
	installation.
	
	Lotus Notes 4
	-------------
	
	Lotus does not support the Notes 4 16-bit client under Windows NT. Use the
	32-bit client.
	
	Lotus Organizer
	---------------
	
	Alarm tunes cannot be heard from Lotus Organizer version 1.1. However,
	Organizer version 2.x supports .WAV files in addition to its internal tunes
	for alarm sounds. The .WAV files will play as expected when an alarm
	occurs.
	
	Lotus ScreenCam
	---------------
	
	Lotus ScreenCam is not supported under Windows NT version 4.0.
	
	Lotus SmartSuite
	----------------
	
	When installing Lotus SmartSuite, a dialog may appear warning that the
	SmartSuite installation program has tried to directly access system
	hardware, which is not supported by Windows NT. Choose the ignore button
	and the installation will proceed normally.
	
	Lotus SmartSuite 96
	-------------------
	
	Do not choose to install Freelance Graphics. A problem in the Freelance
	Graphics portion of Setup will cause installation of the entire suite to
	fail under Windows NT version 4.0.
	
	The following error message appears when you install SmartSuite96 under
	Windows NT version 4.0:
	
	  Windows NT Install Detected -- Note: SmartCenter 96 and SuiteStart 96 will
	  not run under Windows NT 3.51 or earlier. Newer versions including the New
	  Shell for Windows NT were not available for testing at the time of this
	  release. Contact Lotus for updated information. Do you want to install their
	  program files anyway?
	
	SmartCenter96 and SuiteStart96 (desktop toolbars from which you run
	component applications) do not function correctly under Windows NT 4.0. The
	rest of SmartSuite (applications, documentation, etc.) will install and
	function correctly regardless of how you respond to the above error
	message. Microsoft recommends you select No. For more information, contact
	Lotus support.
	
	Lotus WordPro '96 for Windows 3.1
	---------------------------------
	
	During the installation of this application, an error dialog box appears
	stating the application may function incorrectly.  Clicking Ignore results
	in a successful installation.
	
	Macromedia Freehand
	-------------------
	
	If font smoothing is enabled, you cannot rotate text. To disable font
	smoothing, from Display in Control Panel, click the Plus! tab and clear
	font smoothing.
	
	Mathcad
	-------
	
	Printing from versions 6.0 and 6.0+ will cause an Access Violation if the
	printer name exceeds 20 characters. Patch files are available from Mathsoft
	at http://www.mathsoft.com.
	
	Maxis SimAnt
	------------
	
	Maxis SimAnt can fail when the mouse is moved if sound is enabled. To
	prevent this, disable the sound. You can either edit SIMANT.CFG and change
	the setting for Sound Mode to 0, or install the application and change the
	setting for Sound Driver to None.
	
	McAfee Anti Virus
	-----------------
	
	When uninstalling McAfee Anti Virus by using the Add/Remove Programs from
	Control Panel, the entry in the list box of removable programs remains,
	although the program is uninstalled.
	
	Micrografx Designer 6.0
	-----------------------
	
	Designer (part of the ABC Graphics Suite) may display an error dialog box
	that refers to SMapLS_IP_EBP_12 in KERNEL32.dll when printing to PostScript
	printers. The dialog box appears because Designer misinterprets the
	operating system version information and tries to call a procedure found
	only in the Windows 95 version of the .dll file. Clicking OK will allow
	printing to continue as expected.
	
	The printer setup property page has a different appearance under Windows NT
	version 4.0 than it does under Windows 95.
	
	Micrografx Designer substitutes a monospace font such as Courier for
	TrueType fonts.
	
	Contact Micrografx at (214) 234-2694 or online at http://www.micrografx.com
	for upgrade information.
	
	Micrografx Picture Publisher
	----------------------------
	
	Picture Publisher (part of the ABC Graphics Suite) may display black
	rectangles instead of text labels in dialogs or on toolbars. Picture
	Publisher occasionally misinterprets the brush handles it receives from
	Windows NT and uses a black brush instead of a gray brush to paint the
	label backgrounds. Closing and restarting Picture Publisher will often
	cause the affected labels to display normally, although other labels in
	other dialogs may then appear as black rectangles. Contact Micrografx at
	(214) 234-2694 or online at http://www.micrografx.com for upgrade
	information.
	
	Micrografx Windows Draw 3.0
	---------------------------
	
	Version 3.0 (720K) release disks may fail during installation. You cannot
	copy or cut elements from Micrografx Draw.
	
	Micrografx Windows Draw 4.0
	---------------------------
	
	Whenever attempting to select a 'New Color', the COLOR dialog may appear
	black or half black due to the access methods employed by the application.
	
	Additional query words: read-me
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	
	=============================================================================
	
