---
layout: page
title: "Q93460: README.WRI from Windows for Workgroups Version 3.1 (Part C)"
permalink: /kb/093/Q93460/
---

## Q93460: README.WRI from Windows for Workgroups Version 3.1 (Part C)

	Article: Q93460
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following information was taken from the Microsoft Windows for Workgroups
	version 3.1 README.WRI file. This article contains sections 11.0 through 14.0
	
	MORE INFORMATION
	================
	
	11.0 Using Specific Mice with Windows for Workgroups
	----------------------------------------------------
	
	This section describes some problems you may encounter using specific
	types of mice with Windows for Workgroups.
	
	11.1 Microsoft Mouse
	--------------------
	
	Windows for Workgroups includes version 8.20 of the Microsoft mouse
	drivers. If you have a Microsoft mouse, Setup installs the Windows
	mouse driver (MOUSE.DRV) in your Windows SYSTEM directory and an MS-
	DOS mouse driver (MOUSE.COM or MOUSE.SYS) in your Windows directory.
	If you have additional versions of the Microsoft mouse drivers on your
	system, make sure that you are using the mouse drivers provided with
	Windows for Workgroups.
	
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
	control-panel settings. If you must use MOUSE.SYS and you encounter
	problems saving mouse settings, make sure you load the driver from
	your mouse directory instead of from your Windows directory.
	
	For more information about installing the mouse drivers, see Chapter
	6, "Troubleshooting," in the "Getting Started" manual.
	
	11.2 Genius Mouse
	-----------------
	
	If you are using a Genius mouse and are running MS-DOS-based
	applications in 386 enhanced mode, the mouse may not work properly,
	especially if you have several MS-DOS-based applications running at
	the same time.
	
	To correct this problem, add the following line to the [386Enh]
	section of your SYSTEM.INI file:
	
	  local=PC$MOUSE
	
	For more information about changing settings in the SYSTEM.INI file,
	see the SYSINI.WRI online document.
	
	11.3 Logitech Mouse
	-------------------
	
	Some Logitech mouse models are detected as "Microsoft or IBM PS/2"
	mouse models by the Setup program. In this case, Setup installs the
	mouse driver for the Microsoft or IBM PS/2 mouse. If you have a
	Logitech mouse, you should use the Logitech mouse driver instead.
	
	To install the Logitech mouse driver, run Windows Setup from the Main
	group, and then select Logitech from the list of Mouse options. For
	more information about using Setup after you have installed Windows,
	see Chapter 10, "Configuring Hardware," in the "Microsoft Windows for
	Workgroups User's Guide."
	
	When installing the Logitech mouse driver, Windows Setup copies the
	LMOUSE.COM file to your Windows directory. This is the mouse driver
	that is required in order to use the Logitech mouse with MS-DOS-based
	applications. To use your mouse with MS-DOS-based applications, you
	need to load LMOUSE.COM before you start Windows. You can do this by
	adding it to your AUTOEXEC.BAT file. You also need to add the
	following line to the [386Enh] section of your SYSTEM.INI file:
	
	  local=PC$MOUSE
	
	11.4 Logitech Cordless Mouse
	----------------------------
	
	If you have a Logitech Cordless mouse and you run Windows in 386
	enhanced mode, you may encounter problems, such as an unresponsive
	pointer, when running MS-DOS Prompt or MS-DOS-based applications in a
	window.
	
	To correct this problem:
	
	1. Change the baud-rate setting for the mouse driver. To do this, add
	  the following line to the [LogiMouse] section of the SYSTEM.INI file:
	
	   BaudRate=1200
	
	2. Include the 1200 option in the command line that loads the MS-DOS
	  Logitech mouse driver (which is provided with Windows for Workgroups)
	  as follows:
	
	     LMOUSE 1200
	
	3. Add the above line to your AUTOEXEC.BAT file to load the mouse
	  driver each time you start your system. The next time you start
	  Windows for Workgroups, your mouse should work correctly.
	
	For more information about changing settings in the SYSTEM.INI file,
	please refer to the SYSINI.WRI online document.
	
	11.5 Logitech or Microsoft BallPoint Mouse on a Toshiba T2200SX
	---------------------------------------------------------------
	
	If you are using a Toshiba T2200SX computer with a BIOS version
	earlier than 1.20 and you have a Logitech or Microsoft BallPoint mouse
	connected to the PS/2 mouse port, you may have problems moving the
	mouse pointer. If the mouse does not respond, try connecting your
	mouse to the serial port instead, or contact Toshiba for an upgraded
	version of the BIOS.
	
	11.6 Mouse Systems Mouse on PS/2 Ports
	--------------------------------------
	
	The "Mouse Systems" serial and bus mouse drivers provided with Windows
	do not support a Mouse Systems mouse when it is connected to a PS/2
	style mouse port. If you are using a Mouse Systems mouse connected to
	a PS/2 style mouse port, Setup installs the "Microsoft or IBM PS/2"
	mouse driver for you. This is the correct driver. Do not change it.
	
	12.0 Using Additional Hardware Configurations with Windows for
	Workgroups
	--------------------------------------------------------------
	
	This section contains information about using Windows for Workgroups
	with different types of computers and hardware configurations.
	
	12.1 CD-ROM Drives
	------------------
	
	If you are using a CD-ROM drive with Windows for Workgroups, you
	should use version 2.21 of Microsoft MS-DOS CD-ROM Extensions (MSCDEX)
	with all configurations of CD-ROM drives. If you use version 2.20 or
	later, you must also remove the following setting from the [386Enh]
	section of the SYSTEM.INI file:
	
	  device=LANMAN10.386
	
	This setting can cause some CD-ROM drives to timeout and fail with
	versions later than 2.20 of MSCDEX. However, if you must use a version
	earlier than 2.20 of MSCDEX, the above setting is required in the
	[386Enh] section of your SYSTEM.INI file.
	
	For more information about changing settings in the SYSTEM.INI file,
	see the SYSINI.WRI online document.
	
	If a CD-ROM drive causes instability in your system or causes your
	system to fail, you may need to update the CD-ROM driver. Also, the
	MCI (Media Control Interface) driver MCICDA.DRV may not work properly
	with older CD-ROM drivers. Contact your CD-ROM-drive manufacturer
	about obtaining an updated driver.
	
	12.2 EISA Systems with More Than 16 Megabytes of Extended Memory
	----------------------------------------------------------------
	
	On some EISA (Extended Industry Standard Architecture) computers,
	there may be more extended memory available than the system's Int
	15h/88h BIOS call can detect. On these computers, HIMEM.SYS uses only
	the amount of extended memory detected. This can result in a large
	amount of unused memory.
	
	You can have HIMEM.SYS use all available extended memory by using the
	/EISA option in the CONFIG.SYS file. For example, if HIMEM.SYS is
	located in your WINDOWS directory, you would use the following command
	line in the CONFIG.SYS file to take advantage of all available
	extended memory:
	
	  device=c:\windows\himem.sys  /EISA
	
	If you use the /EISA option, do not load any device drivers that use
	the Int 15h/88h BIOS call to allocate extended memory before loading
	HIMEM.SYS. If you do, your system may not work properly. If you must
	reserve some extended memory for device drivers or applications that
	use the Int 15h/88h BIOS call, you can specify the amount of memory in
	kilobytes that you want reserve by using the /INT15= option. For
	example, if you want to reserve 128 kilobytes of extended memory, you
	would use the following command line in the CONFIG.SYS file:
	
	  device=c:\windows\himem.sys  /EISA  /INT15=128
	
	HIMEM.SYS must still be loaded before other device drivers in the
	CONFIG.SYS file.
	
	To determine if your device driver or application use the Int15h/88h
	BIOS call, see the documentation for your device or contact your
	device dealer. For more information about using HIMEM.SYS with the
	INT15 option, see Chapter 11, "Managing Memory and Performance," in
	the Microsoft Windows for Workgroups User's Guide.
	
	12.3 Epson Screen Savers
	------------------------
	
	Some Epson computers have screen-saver utilities that clear the screen
	after a specified period of inactivity. With Windows for Workgroups,
	the screen saver might detect that the system is idle when it is not.
	Windows will function properly even though the screen is blank, but
	nothing will be displayed until you quit Windows and then restart it.
	
	See the documentation that you received with your Epson computer for
	instructions on how to turn off the screen saver.
	
	12.4 NCR 925 with EMM386.EXE
	----------------------------
	
	If you are using an NCR 925 with EMM386.EXE, include the following
	option on the device=EMM386.EXE command line in your CONFIG.SYS file:
	
	  device=EMM386.EXE  X=E000-EFFF
	
	12.5 Non-US Keyboard Layouts: Using Application Shortcut Keys
	-------------------------------------------------------------
	
	Some non-US keyboards show two characters per alphabet key and three
	characters per alphanumeric key. To type the second or third
	character, you must press and hold down CTRL+ALT or ALTGR before
	pressing the key. If you are using such a keyboard layout, do not use
	keys that show two or three characters as application shortcut keys.
	
	12.6 Plus Hardcard
	------------------
	
	To run Windows for Workgroups with a Hardcard, you must include the
	following line in the [386Enh] section in the SYSTEM.INI file:
	
	  VirtualHDIRQ=OFF
	
	For information on how to modify the SYSTEM.INI file, see the
	SYSINI.WRI online document.
	
	Note: This procedure is not necessary if you are using a Hardcard II
	or a Hardcard II XL.
	
	It is also recommended that you use SMARTDrive with a Hardcard. For
	more information about using SMARTDrive, see Chapter 11, "Managing
	Memory and Performance," in the Microsoft Windows for Workgroups
	User's Guide.
	
	12.7 SCSI Hard Disk Using DMA
	-----------------------------
	
	If your computer has a SCSI hard disk that uses Direct Memory Access
	(DMA), you must include the following entry in the [386Enh] section of
	the SYSTEM.INI file:
	
	  VirtualHDIRQ=OFF
	
	In addition, you must have SMARTDrive installed and you must NOT
	disable double-buffering by removing or remarking out the \D option in
	the CONFIG.SYS file.
	
	For information on how to modify the SYSTEM.INI file, see the
	SYSINI.WRI online document.
	
	12.8 Columbia Data Products SCSI Hard-Disk Controller
	-----------------------------------------------------
	
	To use the Columbia Data Products SCSI hard-disk controller with
	Windows for Workgroups in 386 enhanced mode, you must update the
	Columbia Data Products SCSI driver to version 3.35 or higher.
	
	12.9 Serial Ports on 80286-Based Computers: Improving Performance
	-----------------------------------------------------------------
	
	If the bit rate-setting for your COM ports is 9600 bits per second (BPS) or
	higher and you are experiencing slow COM performance or are losing
	characters when sending or receiving information using a communications
	application in standard mode, try the following solutions to correct the
	problem. Try solution one first. If that doesn't work, then try solution
	two, and so on:
	
	1. Reduce the number of MS-DOS drivers and terminate-and-stay-resident
	  programs (TSRs) loaded from your CONFIG.SYS file.
	
	2. Add the following line to the [standard] section of the SYSTEM.INI
	  file:
	
	     FasterModeSwitch=1
	
	  Note: The FasterModeSwitch setting may not work on older systems or
	  systems that are incompatible with Windows for Workgroups. In this
	  case, Windows may fail when you start it.
	
	3. Do not load MS-DOS 5.0 into upper memory (do not include the
	  command line dos=high in your CONFIG.SYS file).
	
	For information on how to modify the SYSTEM.INI file, see the
	SYSINI.WRI online document.
	
	12.10 Sound Blaster Audio Card
	------------------------------
	
	If you are using a Sound Blaster audio card that includes a Digital
	Signal Processor (DSP) chip earlier than version 2.0, you may want to
	upgrade to version 2.0 to improve audio performance. To find out which
	version of the DSP chip you currently have, run the TEST-SBC.EXE
	utility included in your Sound Blaster package. To receive version 2.0
	of the DSP chip, contact Creative Labs, Inc.
	
	12.11 Tandy 2500 XL with MS-DOS in ROM
	--------------------------------------
	
	The Tandy 2500 XL can be configured to use MS-DOS in read-only memory
	(ROM). If you want to use this feature, after you run Windows Setup
	you must run the Tandy setup program (SETUPXL). Modify your
	configuration so that your AUTOEXEC.BAT and CONFIG.SYS files are read
	from drive C.
	
	12.12 Wyse Computers
	--------------------
	
	If you are using a Wyse computer to run Windows, you might need to
	modify the device=HIMEM.SYS line in your CONFIG.SYS file to read:
	
	  device=[path]HIMEM.SYS  /M:WYSE
	
	13.0 Using Mail
	---------------
	
	This section gives some additional information about using Mail with
	Windows for Workgoups.
	
	13.1 Running Mail with Windows for Workgroups in Standard Mode
	--------------------------------------------------------------
	
	If you plan to run Mail with Windows for Workgroups running in
	standard mode, you must run SHARE.EXE before starting Windows for
	Workgroups. SHARE controls file-sharing and file-locking in standard-
	mode. Each application that accesses your Mail message file must be
	able to lock portions of the file to prevent other applications from
	overwriting information in the file. Mail will not start if you have
	not run SHARE.EXE.
	
	When you are running Mail with Windows for Workgroups in 386 enhanced
	mode, VSHARE.386 is loaded automatically, so SHARE.EXE is not needed.
	
	13.2 Backing Up the Mail Message File
	-------------------------------------
	
	In some circumstances, Mail may encounter problems in the mail message
	file (.MMF) and you will be asked if you want Mail to repair the file.
	If you choose Yes, Mail makes a backup copy of the message file in the
	Windows directory or in the directory specified by the MailTmp
	parameter in the MSMAIL.INI file. Each time the file is repaired, a
	new backup file is created. The first such backup file will be named
	MSMAIL.BAK, and subsequent backup files will be named MSMAIL.001,
	MSMAIL.002, and so on. You can delete these backup files.
	
	13.3 Creating and Accessing Other Message Files
	-----------------------------------------------
	
	You can create message files in addition to your primary message file
	by using the Backup command or the Export Folders command.
	
	To access these files, use the /f option to include the name of the
	file in the Mail command line, as follows:
	
	  msmail.exe  /f  filename
	
	Mail starts offline, and then opens the specified message file instead
	of your primary message file. To revert to your primary message file,
	start Mail without using the /f option.
	
	13.4 Checking for New Mail
	--------------------------
	
	The setting in the Options dialog box that determines how often Mail
	checks for new messages also determines how often Mail checks the
	Outbox for messages to submit to the postoffice. A message first waits
	in the Outbox for the amount of time specified, and then waits again
	for the same amount of time until Mail checks for new messages. For
	example, if you specified that Mail should check for new messages
	every three minutes, it can take up to six minutes before you receive
	new mail.
	
	If it takes longer than you expect to receive your messages, try
	specifying a lower value.
	
	13.5 Sending a Bitmap as an Attachment
	--------------------------------------
	
	In a mail message, if you include a bitmap that was created by using
	Paintbrush or another graphics application, the recipient may not be
	able to view the bitmap if using a display adapter that has a
	different resolution from yours.
	
	13.6 Compressing Shared Folders
	-------------------------------
	
	When compressing shared folders in the Postoffice Manager, the
	administrator should ensure that the shared folders are not being used
	by Mail users.
	
	13.7 Connecting to a Postoffice on a NetWare Server
	---------------------------------------------------
	
	When you connect to an existing postoffice by using Mail, Mail
	displays a network-share browser which enables the user to select the
	network server and share on which the postoffice resides. For NetWare
	servers, the user must have previously attached to the server. Then,
	in the Network Path box, the user can specify the path to the
	postoffice directory.
	
	13.8 Workgroup Postoffice Must Be at the Root of Share
	------------------------------------------------------
	
	If you create a Workgroup Postoffice on a LAN Manager or similar
	network server, you must define a share on that server that has the
	WGPO directory as its root. When users run Mail to connect to a
	postoffice on the network, they can select only a postoffice that
	resides in the root of the share, not one in a subdirectory of the
	share.
	
	13.9 Workgroup Postoffice Share Name
	------------------------------------
	
	The share name defined for a Workgroup Postoffice should not be longer
	than eight characters. Mail has difficulty connecting to the
	postoffice if the share name is longer than eight characters.
	
	13.10 Multiple Mail Users on One Computer
	-----------------------------------------
	
	Mail creates two files the first time a user signs in to Mail. These
	files, named MSMAIL.INI and MSMAIL.MMF, are created in the user's
	Windows directory. MSMAIL.INI contains the postoffice location and
	user-preference information. MSMAIL.MMF contains the user's messages.
	Access is controlled by the user's Mail password.
	
	When a user runs Mail for the first time on a computer, Mail creates
	these two files for this user. If a second user wants to use Mail on
	the same computer, that user needs to rename the two existing files,
	to enable Mail to create new files for the second user. When the first
	user wants to use Mail again, he or she can rename the files.
	
	For example, Joe signs in to Mail on his computer and Mail creates the
	MSMAIL.INI and MSMAIL.MMF files for Joe. After Joe quits and signs out
	of Mail, if Sue wants to run Mail she needs to rename these two files
	-- for example, to JOE.INI and JOE.MMF. When Sue signs in to Mail, new
	MSMAIL.INI and MSMAIL.MMF files are created for Sue. When Joe wants to
	sign in to Mail again, he needs to rename Sue's files to, for example,
	SUE.INI and SUE.MMF, and then rename JOE.INI and JOE.MMF to MSMAIL.INI
	and MSMAIL.MMF respectively. Joe and Sue can continue alternating the
	use of Mail by using this renaming process. Any number of users can
	use Mail on the computer at different times by using this renaming
	technique.
	
	Caution: The MSMAIL.MMF file contains all the messages and folders for
	a user. Care must be taken to not delete or overwrite this file, or
	all the mail for that user will be lost.
	
	13.11 Creating Schedule+ Resources
	----------------------------------
	
	To create a Schedule+ resource (for a conference room, overhead
	projector, or other shared equipment), the Mail Manager must do the
	following:
	
	1. Create a Mail account for that resource by using the Postoffice
	  Manager command on the Mail menu.
	
	2. Quit and sign out of Mail.
	
	3. Sign in to Mail and Schedule+ by using the mailbox name and
	  password that correspond to the resource.
	
	4. From the Schedule+ Options menu, choose the General Options
	  command.
	
	5. Select "This account is for a resource," and then choose the OK
	  button.
	
	6. Quit Mail and Schedule+ by choosing Exit & Sign Out from the
	  Schedule+ File menu.
	
	If you will be setting up resources from a computer that is used by
	another Mail account, this process will require you to sign in as
	multiple Mail users on the same computer. As noted in the preceding
	section, you must take special steps to maintain separate message
	files (*.MMF files) on the same computer. If you do not need to
	maintain separate message files, you can use multiple accounts on the
	same computer by setting the account passwords to be the same.
	Resources do not receive mail, so in most cases there is no need to
	maintain separate message files for them. Therefore, if you are
	setting up resources on a computer that is used by only one other mail
	user (or no other mail users), set the passwords for all the accounts
	on that computer to be the same. You will be able to sign in as any of
	the accounts without following the extra steps described in the
	"Multiple Mail users on one computer" section.
	
	14.0 Other Online Documents
	---------------------------
	
	The following table describes other online documents that contain
	important information about Windows for Workgroups that is not
	included in the Microsoft Windows for Workgroups User's Guide or in
	Help:
	
	SETUP.TXT
	---------
	Information about problems that may occur when you set up Windows for
	Workgroups.
	
	NETWORKS.WRI
	------------
	Information about running Windows for Workgroups with specific network
	configurations.
	
	PRINTERS.WRI
	------------
	Information about specific printers and fonts.
	
	SYSINI.WRI
	----------
	Information about the settings in the SYSTEM.INI file.
	
	WININI.WRI
	----------
	Information about the settings in the WIN.INI file.
	
	PRINTERS.WRI
	------------
	Information about specific printers and fonts.
	
	KBCategory: kbref kbdisplay kbsound
	KBSubcategory:
	
	Additional query words: 3.10 wfw wfwg
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
