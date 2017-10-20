---
layout: page
title: "Q142652: Windows NT 4.0 Readme.wri File (Part 5 of 5)"
permalink: /kb/142/Q142652/
---

## Q142652: Windows NT 4.0 Readme.wri File (Part 5 of 5)

{% raw %}

	Article: Q142652
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	This article contains a copy of the information in the Readme.wri file
	included in Windows NT version 4.0. Setup copies this file to the System32
	folder.
	
	Microsoft Access for Windows 95
	-------------------------------
	
	Under Windows NT version 4.0, Microsoft Access for Windows 95 may generate
	errors that it can't resolve, particularly when using the Form wizard. This
	problem will be fixed in a later version of Access 95. Contact Microsoft
	Access Product Support for more information.
	
	Microsoft Bookshelf '94
	-----------------------
	
	Bookshelf '94 may exhibit unexpected behavior when you click some of the
	options on the main menu bar.  An example of this behavior  is when you
	click the Tools menu. The menu title displayed as "ls Books" instead of
	"Tools" as expected.  This can be solved by changing  MENUPATTERN=1  to
	MENUPATTERN=0  in the [OPTIONS] section of BS94.ini.
	
	Microsoft C/C++ 7.0a
	--------------------
	
	CodeView for Windows (CVW.EXE) is not supported. To debug 16-bit Windows-
	based applications, use the Windows NT debugger, WINDBG.EXE or the
	character-mode version of CodeView.
	
	Microsoft Dinosaurs
	-------------------
	
	Microsoft Dinosaurs does not install the Macromind Multimedia Player (MMP)
	when installed on Windows NT. You must copy MMCMMP.DRV and MMP.DLL from the
	\XFILES\DRIVERS folder on the Microsoft Dinosaurs compact disc to the
	\systemroot\SYSTEM directory. After copying the files you must add the
	following entries to the Registry by using Registry Editor:
	
	Add the REG_SZ value MMMovie=MCIMMP.DRV to the key:
	
	HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\CurrentVersion\MCI
	
	Add the REG_SZ value mmm=MMMOVIE.DRV to the key:
	
	HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\CurrentVersion
	\MCI Extensions
	
	Microsoft Encarta 95
	--------------------
	
	There are known problems printing from Encarta 95 to PCL printers in 24bpp
	when metafile spooling is turned on. You can work around this problem by
	either turning off metafile spooling or by switching to 8 color or 256
	color depth in the printer's document properties dialog box. To change the
	settings, click Start, point to Settings, and then click Printers. Right-
	click the printer, then click Document Defaults. If necessary, click the
	Advanced tab. Click Document Options to disable metafile spooling.
	
	Microsoft Entertainment Pack, Idlewild
	--------------------------------------
	
	To use Idlewild screen savers with Windows NT, the full path to the screen
	savers must be added to the system path. You can either add the screen
	savers directory to the path in your AUTOEXEC.BAT file or use the System
	icon in Control Panel to add an environment variable containing the path.
	
	Microsoft Excel 5.0
	-------------------
	
	A General Protection Fault occurs when saving a file with an embedded
	PowerPoint(r) object. The RISC version of Excel returns different function
	values than values returned by x86 compatible versions.
	
	Microsoft Excel 5.0 for Windows NT
	----------------------------------
	
	The RISC versions of Microsoft Excel 5.0c for Windows NT for DEC Alpha,
	MIPS, and PowerPC return different function values than values returned by
	x86 compatible version.
	
	Windows NT version 4.0 allows you to compress NTFS drives. If you use the
	File Open dialog box in Excel 5.0c for Windows NT to view files on a
	compressed  NTFS drive, files will not be displayed. This might also affect
	any macro commands designed to open or read files. This situation occurs
	only on the x86 platform. The Digital Alpha, MIPS, PowerPC, and 16-bit
	versions of Microsoft Excel are not affected. Excel 5.0c for Windows NT
	reads non-compressed NTFS or FAT drives correctly.
	
	There are two ways to view your Excel 5.0c for Windows NT spreadsheet files
	on a compressed drive:
	
	- From the File Open dialog box in Excel 5.0c for Windows NT, type the name of
	  the file you want to open in the File Name box, and then press ENTER
	
	  - Or -
	
	- From Explorer, double click the spreadsheet file you want to open.
	
	Microsoft Explorapedia
	----------------------
	
	The Readme file included with Microsoft Explorapedia states that non-intel
	( MIPS, Alpha,  PPC, or RISC processors ) running Windows NT are not
	supported. Windows NT version 4.0 now supports these processors.  You must
	have administrator privileges to install this software application.
	
	Microsoft Money for Windows 95
	------------------------------
	
	Under Windows NT, the Microsoft Money 95 application experiences problems
	with online banking and online stock quotes. This will be fixed in a future
	release of Money 95.
	
	Microsoft Money for Windows 95, version 4.0 or 4.0a
	---------------------------------------------------
	
	To use online banking and online stock quotes in Money for Windows 95 on a
	computer running Windows NT Workstation, you must be able to dial out.
	Before you can dial out using TAPI services, replace the Xsnpc.dll file in
	the system folder of MSMONEY with the Windows NT version 4.0 release of the
	Microsoft FAST Xsnpc.dll file dated March 29, 1996.
	
	This file can be found at www.microsoft.com and this file will be included
	in the next release of  Money for Windows 95.
	
	Microsoft Office 95 Applications
	--------------------------------
	
	Changing window focus with any Microsoft Office 95 application open may
	cause screen refresh or display problems, particularly on multiprocessor
	systems. Contact Microsoft Product Service Support for a new version of
	mso95.dll which resolves the problem.
	
	Microsoft Office Standard for Windows 95 version 7.0
	----------------------------------------------------
	
	If you install Microsoft Office Standard for Windows '95 version 7.0 onto a
	machine running Windows NT version 4.0, you will receive an error stating
	"Failure to load expression service" when using the Access ODBC driver from
	Office applications such as Excel or Word.
	
	To correct this problem you need to obtain the Microsoft Office for Windows
	'95 version 7.0b release from Microsoft Product Support.  You can obtain a
	copy of this release by calling the Microsoft Order Desk at (800) 360-7561.
	If you are outside of the United States, contact the Microsoft Subsidiary
	in your area. To locate your subsidiary, see the Microsoft World Wide
	Offices Web site at:
	
	  http://www.microsoft.com/worldwide/default.htm
	
	Microsoft ODBC SDK 2.1
	----------------------
	
	The setup program for Microsoft ODBC SDK 2.1 does not correctly identify
	Windows NT as the current operating system and displays the following
	message:
	
	  "This application uses CTL3D32.DLL which is not the correct version. This
	  version of CTL3D32.DLL is designed only for WIN32s or Windows 95 systems?
	
	Rename the file %SYSTEMROOT%\SYSTEM32\CTL3D32.DLL and copy the file
	\ODBCSDK\REDIST32\WINNT\CTL3D32.DLL to %SYSTEMROOT%\SYSTEM32.
	The user interfaces for version 2.9 Microsoft ODBC 32-bit drivers, except
	for SQL Server, do not function properly under Windows NT.
	
	Microsoft PowerPoint 4.0 and PowerPoint for Windows 95
	------------------------------------------------------
	
	The Genigraphics driver included with PowerPoint 4.0 is not supported.
	Under Microsoft Windows NT, Microsoft PowerPoint for Windows 95 may
	generate errors it can't resolve, particularly when opening files or
	inserting clipart. For more information, contact Microsoft PowerPoint
	Product Support at (425) 635-7145.
	
	Microsoft Project for Windows 95
	--------------------------------
	
	Microsoft Project 95 does not run under Windows NT. To obtain an updated
	version, part number 098-63461, call the Microsoft Distribution Center at 1
	(800) 426-9400.
	
	Microsoft Publisher for Windows 95
	----------------------------------
	
	When running Publisher under Windows NT, the text on some buttons is
	truncated.
	
	Microsoft Schedule+ 7.0
	-----------------------
	
	When running under Windows NT, Schedule+ 7.0 requires the CTL3D32.DLL. This
	DLL is not installed by the Office 95 Setup Program, so you must copy it
	from the Office Pro compact disc #1. Copy the file OS\SYSTEM\CTL3D32.DLL to
	your systemroot\system32 directory.
	
	If you are upgrading from Windows NT 3.51 and have already installed Office
	for Windows 95 prior to upgrading, you will not need to copy this DLL.
	
	Microsoft SNA Server
	--------------------
	
	The SNA Administrator currently displays the wrong version number when you
	click About on the Help menu. On the MIPS platform only, SNA Server 2.11
	and the SNA Server Windows NT client display incomplete text in dialog
	boxes. To obtain an update, contact:
	
	  the MSSNA forum Lib #4 (unsupported third-party library)
	
	Running SNA Server:
	
	During the course of testing SNA Server 2.0 on Windows NT, two problems
	were discovered in SNA Server 2.0 as a result of the improved parameter
	checking and fault detection included in Windows NT. These do not affect
	the operation of SNA Server 2.0 on Windows NT 3.1.
	
	The symptoms include SDLC and X.25 SNA connections that will not activate
	and 802.2 SNA connections that cause an exception in SNALINK.EXE. Fixes for
	these problems are available in the Library 2 section of the MSSNA forum on
	CompuServe.
	
	If you have SNA Server 2.0 installed on your system, please copy the
	contents of the SNA directory to your snaroot\SYSTEM directory after you
	have upgraded your system to Windows NT version 4.0.
	
	The contents of the SNA directory are:
	IBMSDLC.DLLIBMX25.DLLSNADLC.DLL
	
	Microsoft recommends that you use SNA Server version 2.1 or 2.11 on all
	Windows NT version 4.0 systems. Please refer to the MSSNA forum on
	CompuServe for any additional updates or notices.
	
	Microsoft SQL Server for Windows
	--------------------------------
	
	If you create a new window using Tools/Windows/Form Window,
	Tools/Windows/Table Window, Tools/Windows/DialogBox, or
	Tools/Windows/MDIWindow, the form window box shows the title "frm1 tled"
	instead of "frm1 (untitled)."
	
	At the end of installation, always choose Replace Existing Program Group,
	even on the first installation. If you choose to create a new program
	group, any name used will be considered invalid.
	
	Report templates which are created or modified using Report Windows cannot
	be saved. The application reports it cannot create temporary files. This
	problem is fixed in Windows SQL Server 6.0.
	
	Microsoft Systems Management Server
	-----------------------------------
	
	The following notes apply to Microsoft Systems Management Server (SMS)
	version 1.1 under Windows NT Workstation and Windows NT Server version 4.0.
	
	Using Automation to Upgrade Clients to Windows NT version 4.0:
	
	Sending Windows NT version 4.0 unattended upgrade jobs using SMS version
	1.1 requires two new PDF files (one for Windows NT Workstation and one for
	Windows NT Server), and an updated wrapper file. The wrapper files are
	operating system and platform specific.
	
	  Wrapper filename
	
	     Operating system and hardware platform
	
	  Ntencap.exe
	
	     Windows NT on x86-compatible computers
	
	  Ntencapa.exe
	
	     Windows NT on Digital Alpha computers
	
	  Ntencapm.exe
	
	     Windows NT on MIPS computers
	
	  W16ntupg.exe
	
	     Windows 3.1 and Windows for Workgroups
	
	  Dosntupg.exe
	
	     MS-DOS
	
	Starting SMS Administrator Console:
	
	For this release, for server users, the SMS Administrator Console shortcut
	installed in the Start/Programs/SMS folder is not functional. You must
	either start SMS Administrator Console from the command line in a Command
	Prompt window or modify the shortcut path.
	
	To start SMS Administrator Console from the command line:
	
	1. Click Start, point to Programs, and then click Command Prompt.
	
	2. Change to the drive SMS is installed on.
	
	3. Change to the \sms\site.srv\xxx.bin folder, and then run SMS.EXE.
	
	To modify the SMS Administrator Console shortcut:
	
	1. Click Start, point to Programs, and then click Explorer.
	
	2. From the %systemroot%\profiles\all users\start menu\programs folder, find the
	  SMS Administrator Console shortcut.
	
	3. Right-click the SMS Administrator Console shortcut, and then click
	  Properties.
	
	4. Click the Shortcut tab.
	
	5. Add cmd /c in front of the Target path in the shortcut.
	
	Installing SMS Network Monitor:
	
	Do not install the SMS version of Network Monitor during Systems Management
	Server version 1.1 setup. After setup you can install the SMS version of
	Network Monitor from the BackOffice compact disc.
	
	To install the SMS version of Network Monitor:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click the Network icon, then click the Services tab.
	
	3. Click Add, the click Network Monitor Agent. Windows NT setup starts.
	
	4. Setup will ask for the location of the file. Type the path to the BackOffice
	  compact disc.
	
	Program Group Control Icon not Functional:
	
	For the SMS client, the Program Group Control icon in the SMS folder is not
	functional in this release. Package shortcuts sent to users will either not
	appear or will fail to function properly.
	
	SMS Folder is Displayed on the Desktop at Startup:
	
	For the SMS client, in this release, the SMS folder is displayed open on
	the desktop whenever the system is restarted.
	
	Microsoft Visual C++ version 1.52
	---------------------------------
	
	This version of Visual C++ does not compile applications on RISC platforms.
	
	Microsoft Visual C++ 2.0
	------------------------
	
	If you install Microsoft Visual C++(r) 2.0 (x86-based version) under Windows
	NT version 4.0, and attempt to run a Help file, the following error message
	appears:
	
	  Call to undefined dynalink.
	
	This problem occurs because Microsoft Visual C++ 2.0 Setup installs a
	Windows 95 version of a Windows Help extension DLL file (Msvcbook.dll) when
	you install Microsoft Visual C++ 2.0 under Windows NT. This problem has
	been corrected in Microsoft Visual C++ 2.1 and 2.2.
	
	To work around this problem, copy Msvcbook.dll from the \msvc20\bin
	directory on the Visual C++ 2.0 compact disc to your %systemroot%\system32
	directory (for example, c:\winnt\system32).
	
	Microsoft Visual C++ 4.0 and 4.1
	--------------------------------
	
	The Visual C++ 4.0 and 4.1 Help Compiler (Hcw.exe) on RISC machines
	requires Cfm30.dll to run. If this .dll file is not present on your
	computer, or you experience other problems with this executable, please
	retrieve a later version of Hcw.exe, which does not require Cfm30.dll, from
	the Windows NT version 4.0 SDK found on the August 1996 MSDN compact disc.
	
	Microsoft Windows 95 Plus! Pack
	-------------------------------
	
	The Windows 95 Plus! Pack does not install under Windows NT.
	
	Microsoft Windows Messaging 4.0
	-------------------------------
	
	Dragging a window over a message being composed in Windows Messaging
	version 4.0 may cause screen refresh or display problems, particularly on
	multiprocessor systems. Contact Microsoft Product Service Support.
	
	Microsoft Word for Windows version 6.0a
	---------------------------------------
	
	Windows NT does not support computer-based tutorial (CBT) files. The Help
	files use CBT files for the Examples, Demos, and Quick Previews. When you
	view sections of Help that use the CBT files, the following error appears:
	
	You cannot run the CBT with this operating system" or "CBT directory not
	found.
	
	Microsoft Word 5.5 for MS-DOS
	-----------------------------
	
	When using Word with a foreign language keyboard, start the application
	using the forcedos command. This enables you to compose accented characters
	with two keystrokes. For more information, see the forcedos topic in the
	Command Reference section of Windows NT Help.
	
	MS-DOS-based applications can set only standard VGA modes directly under
	Windows NT Workstation and Windows NT Server version 4.0. The higher
	graphics modes (30 lines, 80 columns, 16 color and higher) offered by Word
	are not supported. The 25 line, 80 column, 16 color graphics mode is
	supported.
	
	Microsoft Works 3.0
	-------------------
	
	Windows NT does not support computer-based tutorial (CBT) files. The Help
	files use CBT files for the Examples, Demos, and Quick Previews. When you
	view sections of Help that use the CBT files, the following error appears:
	
	You cannot run the CBT with this operating system" or, "CBT directory not
	found.
	
	Milestones, Etc
	---------------
	
	Closing multiple windows quickly may prevent the desktop from responding to
	the keyboard and mouse. Close Milestones windows individually.
	
	Millie's Math House
	-------------------
	
	This application requires MFC version 3.0 DLLs, but does not install them.
	For more information, see "Windows 95 Applications and Microsoft Foundation
	Class Libraries" earlier in this document.
	
	If the files are present, an error message referring to the Windows 95
	operating system may appear. Contact Edmark, (206) 556-8475 for more
	information.
	
	See "Software Applications by Edmark" earlier in this document.
	
	Morph
	-----
	
	This application does not run on Windows NT.
	
	Name-It
	-------
	
	Name-It fails to install on Windows NT.
	
	Netscape Navigator
	------------------
	
	Netscape Navigator 2.0 is available in several Beta versions. Do not
	install one version over another. Registry entries from one version
	conflict with earlier versions. Remove earlier versions before installing a
	new version.
	
	Norton Utilities for Windows 95
	-------------------------------
	
	The programs in Norton Utilities for Windows 95 do not run under Windows NT
	Workstation or Windows NT Server version 4.0. You can use the programs from
	Windows 95 on dual boot systems to operate on FAT-formatted drives created
	or modified by Windows NT.
	
	Because of differences in the way Windows NT and Windows 95 generate short
	filenames, the Norton Utilities programs may incorrectly report that short
	filenames created by Windows NT are no longer associated with their
	original files. If the programs attempt to "fix" the Windows NT filenames,
	the files may no longer be accessible.
	
	Norton Navigator, and AntiVirus for Windows 95
	----------------------------------------------
	
	These applications are specific to the Windows 95 operating system and are
	not intended for use on Windows NT version 4.0. They correctly detect that
	Windows 95 is not present and do not install.
	
	Norton NT Tools 1.0
	-------------------
	
	You cannot enter a colon or the designations "AM" or "PM" directly into the
	Norton Control Center virus scans scheduling edit box. You can schedule
	virus scans by copying a time from an application such as Notepad to the
	Windows clipboard and pasting it in the edit box. You can also set the
	scheduled time by choosing Scheduler on the Tools menu in the Norton
	AntiVirus Scanner.
	
	Some of the buttons in Norton System Doctor's alarms such as Task Manager
	and System Settings fail to work on Windows NT version 4.0.  Contact
	Symantec at www.symantec.com for more information.
	
	Now Up-to-Date 95
	-----------------
	
	Although this application can be installed, early versions do not run.
	
	This application requires MFC version 3.0 DLLs, but does not install them.
	For more information, see "Windows 95 Applications and Microsoft Foundation
	Class Libraries" earlier in this document.
	
	OfficeBlox
	----------
	
	Some versions of OfficeBlox install but do not run. This application
	requires MFC version 3.0 DLLs, but some versions do not install them. For
	more information, see "Windows 95 Applications and Microsoft Foundation
	Class Libraries" earlier in this document.
	Labels and values may not appear in the CalcSheets for CalcBlox objects
	embedded in the WorkBlox demonstration application in some early versions.
	Contact Alpha Blox for upgrade information.
	
	Omniform
	--------
	
	Omniform fails to install because it interprets the Windows NT 4.0 version
	number incorrectly. Contact Caere Corporation, 100 Cooper Court, Los Gatos,
	CA 95030, (800) 535-SCAN for upgrade information.
	
	OzCIS
	-----
	
	OzCIS requires that you create a .PIF file prior to installing under
	Windows NT. See "Creating PIF Files." If OzCIS loses characters when
	transmitting data, try using a lower baud rate.
	
	PackRat 5.011 for Windows
	-------------------------
	
	On RISC-based computers, the PackRat setup program generates illegal
	instructions when trying to modify the path. Select No when the PackRat
	setup program asks if you would like to add the PackRat directory to your
	path. After installation, add the directory to your path manually.
	
	pcAnywhere 2.0
	--------------
	
	Installing pcAnywhere 2.0 for Windows or pcAnywhere 2.0 for Windows 95
	under Windows NT can lead to lost files on NTFS-formatted drives. For more
	information, contact Symantec at http://www.symantec.com.
	
	pcAnywhere III for MS-DOS
	-------------------------
	
	Start pcAnywhere by using a custom PIF and custom startup files. Be sure to
	include the dosonly command in the custom configuration file. For more
	information, see "Running MS-DOS-based Remote Control Applications" earlier
	in these Release Notes.
	
	pcAnywhere32
	------------
	
	You need pcAnywhere32 version 7.5 to enter Host mode under Windows NT
	version 4.0. Contact Symantec at http://www.symantec.com for upgrade
	information.
	
	Peachtree Accounting 3.05
	-------------------------
	
	Peachtree Accounting causes a General Protection Fault with long printer
	names. Create a local printer and rename the printer to less than 15
	characters in length.
	
	PixelPro
	--------
	
	PixelPro does not install or run under Windows NT.
	
	PowerDesk
	---------
	
	PowerDesk for Windows 95 does not run after installation. PowerDesk
	requires the Windows 95 Kernel32.dll file, which is not available in
	Windows NT Workstation or Windows NT Server. The PowerDesk ExplorerPlus
	tool runs, but some folder and drive names are garbled and some functions
	do not work as expected. Microhelp does not support PowerDesk on Windows
	NT.
	
	Procomm 2.0
	-----------
	
	When setting up Procomm 2.0 for Windows, Setup does not properly install
	its icon. Instead, you can create a shortcut to start the program. To
	create a shortcut:  right-click the desktop. Click New, click Shortcut.
	Type the location and name or use the Browse button.
	
	Qmodem Pro for Windows 95
	-------------------------
	
	ToolTips may not appear. Contact Mustang Software (805.873.2500) for
	upgrade information.
	
	Quantum Gate
	------------
	
	When installing Quantum Gate, do not select the actual audio driver, but
	select Other.
	
	Quark Xpress
	------------
	
	This application warns that a font or fonts are not properly installed. You
	can uninstall offending fonts or ignore error messages. The font name box
	will sometimes overlap the left justification button and completely cover
	the center and right justification buttons.
	
	Quattro Pro
	-----------
	
	Some embedded OLE objects may not behave as expected in files opened with
	Quattro Pro 6.0. Quattro Pro 6.01 has improved OLE implementation. Contact
	Novell at (800) 861-2774.
	
	In Quattro Pro for MS-DOS (RISC only), keyboard response may be
	exceptionally slow.
	
	In Quattro Pro for Windows 1.0, multiple-copy printing is not supported.
	When you select Redirect To File in the Printer Setup dialog box, the
	printer output will be redirected to a file in the \systemroot\system32
	directory, even if you choose a different directory using the Browse
	button. The file will overwrite an existing file of the same name without
	any warning message. Another file with the same name will also be created
	in the directory you select using the Browse button, or in the Quattro Pro
	directory by default. This file will not contain any printer information
	and will have a size of zero bytes.
	
	Quattro Pro may display printers in its Printer Setup dialog box that are
	no longer available. A General Protection Fault may occur if you try to
	print to an unavailable printer. To see if a printer is still available,
	click Start  point to Settings, click Printers, and then double-click the
	printer to view the status.
	
	Quick View Plus
	---------------
	
	Close and exit Quick View Plus, including any open viewing windows, before
	attempting to remove Quick View Plus by using Add/Remove Programs in
	Control Panel.
	
	Quicken version 4.0
	-------------------
	
	The communications portion of Quicken version 4.0 will only run on Windows
	NT version 4.0 if it is installed on x86-compatible computers.
	
	Quicken version 5.0 and Quicken Deluxe version 5.0
	--------------------------------------------------
	
	Quicken 5.0 will not install on Window NT version 4.0 because the
	installation program is looking for Program Manager (Progman.exe) in the
	Windows directory. Windows NT includes a 32-bit version of Progman.exe in
	the System32 directory.
	
	If Windows NT version 4.0 has not been installed in the same directory as
	Windows 95 or Windows version 3.1,  copy Progman.exe into the systemroot
	(for example c:\winnt) directory before installing Quicken 5.0. After
	Quicken is installed, delete Progman.exe from the systemroot directory.
	
	If Windows NT version 4.0 has been installed in the same directory as
	Windows 95 or Windows version 3.1, the Windows 95 or Windows 3.1 version of
	Progman.exe will already be in the Windows directory.
	
	Copy the existing version of Progman.exe to another directory before
	copying  the 32-bit version of Progman.exe from the System32 directory to
	the Windows directory. After Quicken is installed, copy the Windows 95 or
	the Windows 3.1 version of Progman.exe back into the Windows directory.
	
	Reflection 2
	------------
	
	Only a small portion of the printer icon appears in the Print dialog. If
	you have more than one printer, you can select any of them in the Print
	Setup dialog, but the change is not reflected in the Print dialog and all
	hard copy is sent to the default printer.
	
	Remotely Possible/32
	--------------------
	
	If you have Remotely Possible/32 version 2.0 or 2.1 installed on computer
	running Windows NT 3.51, you must uninstall Remotely Possible before
	installing Windows NT 4.0. If you do not, Windows NT will not install
	correctly. You can uninstall Remotely Possible by running the Remove.bat
	file located on the Remotely Possible distribution disk. After you have
	upgraded to Windows NT, you can reinstall Remotely Possible.
	
	Remotely Possible/32 versions 2.0 and 2.1 do not enter Host mode under
	Windows NT version 4.0. Remotely Possible/32 can be run in client mode
	under Windows NT version 4.0 and can connect with Window NT 3.51 and
	Windows 95 hosts. Contact Avalan at http://www.avalan.com for upgrade
	information.
	
	Remove-It 95
	------------
	
	Remove-It 95 fails to install under Windows NT version 4.0.
	
	Rumba
	-----
	
	For information on running Rumba, see Running Windows Mainframe
	Connectivity Software earlier in this chapter.
	
	Sammy's Science House
	---------------------
	
	See "Software Applications by Edmark" earlier in this document.
	
	Serif PagePlus Home/Office
	--------------------------
	
	When Serif PagePlus Home/Office is installed, the program group icons
	"PagePlus Home Office Online Documentation", "PagePlus Home Office Readme"
	and "Serif PagePlus Home Office" icons are not added to the Start menu.
	Normally, the icons would appear when you click Start, point to Programs,
	and then click Serif Applications/(missing filename). The icons do not
	appear because the application's install program creates a filename with a
	forward slash (/) in it ("...Home/Office").  Because Windows NT maintains
	POSIX compatibility, forward slashes are directory separators.
	
	Seattle Film Works Photoworks
	-----------------------------
	
	This application's depth of color cannot be converted to an optimized
	Indexed-256 Colors including the system colors. Any other depth of colors
	can be applied.
	
	The option to use the current picture as wallpaper does not work on Windows
	NT. To use the current picture as wallpaper, save it, then right click on
	the desktop and use the Browse button in Wallpaper to select the saved
	picture file.
	
	The Screen Saver slide show option does not work under Windows NT.
	
	Sidekick 95
	-----------
	
	Sidekick 95 cannot be installed on Windows NT version 4.0. However, if you
	have a current version of Sidekick 95 running under Windows NT version 3.51
	and you upgrade to Windows NT version 4.0, Sidekick will work as it does
	under Windows NT version 3.51. For more information, contact Starfish
	Technical Support. (On the Microsoft Network and other online services, GO
	Starfish.)
	
	SigmaPlot
	---------
	
	SigmaPlot cannot print charts on Windows NT version 4.0. No error dialogs
	appear. Data and other modes print as expected. Contact Jandel at
	http://www.jandel.com for upgrade information.
	
	Simply 3D
	---------
	
	Visual Software does not support this application on Windows NT version
	4.0. Contact Visual Software for more information.
	
	Smartcom Windows Communication Software 1.0A
	--------------------------------------------
	
	Use the Smartcom custom tool program to configure Smartcom to use the
	Windows NT communications driver COMM.DRV.
	
	SmartSketch 95
	--------------
	
	The installation utility does not create a program group. You must create
	the group manually:
	
	1. Right click on the Start button.
	
	2. Click Open to create a Personal Group or click Open All Users to create a
	  Common Group.
	
	3. Double-click the Programs folder.
	
	4. On the File menu, point to New and then click Folder.
	
	5. Type SmartSketch 95 next to the folder icon..
	
	6. Double-click the new folder to open it.
	
	7. Open the Windows NT Explorer .
	
	8. Open the SmartSketch folder. By default it is located in the Program Files
	  folder.
	
	9. Copy the Sketch32.exe and Uninstlr.exe files into the new folder. Rename them
	  to names such as SmartSketch 95 and SmartSketch 95 Uninstall.
	
	Software Toolworks Multimedia Encyclopedia
	------------------------------------------
	
	Fullscreen videos do not play. Do not select the Fullscreen option; allow
	the videos to play in their normal mode.
	
	Solid Edge
	----------
	
	Access violations may occur when printing or when accessing some menu
	items. Contact Micrografx at (214) 234-2694 or online at
	http://www.micrografx.com for upgrade information.
	
	Stanford Graphics
	-----------------
	
	After previewing several different presentation styles, an Access Violation
	may occur.
	
	The first slide may not appear when viewing a slide show, a blank white
	screen may appear instead. Press the Page Down key followed by the Page Up
	key to view the first slide.
	
	The Prime Time viewing utility may dislpay background colors incorrectly.
	
	Star Trek Interactive Technical Manual
	--------------------------------------
	
	This application requires a directory labeled \WINDOWS\SYSTEM in which to
	place Quick Time Movie files. Before installing this application, create
	this directory so that the files can be copied to your computer.
	
	Strategy Games of the World
	---------------------------
	
	See "Software Applications by Edmark" earlier in this document.
	
	SuperPrint 2.2
	--------------
	
	The application is not supported because it relies on incompatible 16-bit
	device drivers.
	
	Symantec C++ 7.2
	----------------
	
	- The 16-bit IDE interprets the Windows NT version incorrectly and displays
	  user interface elements incorrectly. The 32-bit IDE interprets the Windows NT
	  version number incorrectly and looks for the wrong filenames when you chose a
	  Help menu option or click a Help button in a dialog box. You can add the
	  necessary help files by following the "Instructions for users running NT 3.50
	  only" in the Using Symantec C++ Help on Windows NT section of the Readme.txt
	  file located on the Symantec C++ CD in the \sc\readme directory.
	
	- When setting the colors using the Color tab in the Settings dialog box in the
	  16-bit IDE, many of the color changes in the color selection boxes are not
	  accurately reflected in the color boxes of the dialog boxes or in the 16-bit
	  IDE itself. (The Settings dialog box is accessed by clicking Environment
	  Setting on the Environment menu.)
	
	TabWorks
	--------
	
	TabWorks shows all available drives as icons. Although each icon is
	associated with the correct drive, TabWorks displays the icons with the
	same label.  TabWorks may not recognize local or network printers and print
	options might not be available.
	
	TabWorks detects applications only in the current user's groups, not in
	common groups.
	
	Contact Xsoft at 1(800) 909-4446 for update information.
	
	TapCIS
	------
	
	The installation command window does not resize correctly. Change your
	command window size to 80 x 25.
	
	TelcomFax 3.0
	-------------
	
	Installing the Print-to-Fax driver in this application can cause problems
	with the Windows NT Printers folder. For more information, contact Telcom
	at http://www.ltc.com.
	
	Thinkin' Things Collection 1
	----------------------------
	
	See "Software Applications by Edmark" earlier in this document.
	
	US Atlas 3.1.0, The Software Toolworks
	--------------------------------------
	
	The application may fail when printing to a printer whose port name
	contains more than 12 characters. To avoid this problem, make sure that the
	printer name is less than 12 characters.
	
	Viewer 95
	---------
	
	Viewer 95 installs but does not run. Viewer 95 requires MFC version 3.0 DLL
	files but does not install them. For more information, see "Windows 95
	Applications and Microsoft Foundation Class Libraries" earlier in this
	document. The application might terminate unexpectedly after viewing
	several files or after scrolling through a large file.
	
	Contact Inso (formerly Mastersoft) for upgrade information.
	
	Mastersoft is now owned by Inso. For more information, please contact Inso.
	For information about how to contact Inso, please see the following article
	in the Microsoft Knowledge Base:
	
	  ARTICLE-ID: Q65416
	  TITLE : Hardware and Software Third-Party Vendor Contact List, A-K
	
	Visio 3.0 & 4.0
	---------------
	
	A 32-bit version of Visio 3.0 was released in limited distribution. When
	started under Windows NT version 4.0, it displays an error box saying that
	Windows 95 or Windows NT version 3.5 or higher is required.
	
	VISIO 4.0 32-bit will not install on RISC platforms. You can install the 16-
	bit version of Visio 4.0. From the command line type,
	
	  setup /16
	
	The Visio 4.0 Unistall program does not list itself in Add/Remove Programs
	in the Control Panel folder.
	
	Summary of Visio Installation options:
	
	  Visio 3.0:
	
	     16-bit on x86 compatible >yes
	     16-bit on RISC >yes
	     32-bit on x86 compatible >no
	     32-bit on RISC >no
	
	  Visio 4.0
	
	     16-bit on x86 compatible >yes
	     16-bit on RISC >yes
	     32-bit on x86 compatible >yes
	     32-bit on RISC >no
	
	Visual Slick Edit
	-----------------
	
	Visual Slick Edit may terminate unexpectedly when updating its Help files
	index. It may appear to create a help file index during installation, then
	report that no index exists when you access Help. Older versions of Visual
	Slick Edit cannot index the version 4.0 Help files found in some
	applications, such as the Win32 SDK. Contact MicroEdge at www.slickedit.com
	for upgrade information.
	
	Visual Staff Scheduler
	----------------------
	
	Printing a list of legends (abbreviations) may cause the program to stop
	unexpectedly.
	
	WinZip
	------
	
	Early versions of WinZip may exhibit control problems and may not recognize
	long filenames or directory names. Contact Nico Mak Computing for upgrade
	information.
	
	WordPerfect 6.0a for Windows
	----------------------------
	
	In order for the tutorial to select the correct menu items, the menu font
	should be the default style and size.
	
	WordPerfect 6.1 for Windows
	---------------------------
	
	The tutorial is not supported.
	
	WordPerfect's "high" Print Quality selection found under the Print,
	Document Settings option, emphasizes resolution over color depth.
	Selecting "high" to some devices which support higher resolution in
	monochrome mode will result in high resolution monochrome output.  To
	receive color output, select the "medium" option.
	
	XYWrite 4.0
	-----------
	
	On some display cards, the BIOS does not set all of the CRTC registers
	correctly.  This problem causes XyWrite 4.0 to be unreadable in graphics
	mode. If you run into the problem just type <ALT>-V-D to return to draft
	view.
	
	Additional query words: read-me
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	
	=============================================================================
	

{% endraw %}
