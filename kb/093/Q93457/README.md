---
layout: page
title: "Q93457: SYSINI.WRI from Windows for Workgroups Version 3.1 (Part A)"
permalink: /kb/093/Q93457/
---

## Q93457: SYSINI.WRI from Windows for Workgroups Version 3.1 (Part A)

	Article: Q93457
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
	version 3.1 SYSINI.WRI file. This article contains the first half of the
	SYSINI.WRI file.
	
	MORE INFORMATION
	================
	
	SYSTEM.INI File Settings
	------------------------
	
	Windows initialization files contain information that defines your
	Windows environment. Windows for Workgroups and Windows-based
	applications can use the information stored in these files to
	configure themselves to meet your needs and preferences.
	
	There are two standard Windows initialization files:
	
	- WIN.INI, which primarily contains settings that Windows for
	  Workgroups maintains to customize your Windows for Workgroups
	 environment according to your preferences.
	
	- SYSTEM.INI, which primarily contains settings that customize
	  Windows for Workgroups to meet your system's hardware needs.
	
	This document describes only a few of the settings in the SYSTEM.INI
	file. You can get a more complete listing of the SYSTEM.INI settings
	by purchasing the Windows for Workgroups Resource Kit for the
	Microsoft Windows Operating System version 3.1. The Resource Kit
	provides complete technical information about Windows for Workgroups
	for the support professional. It includes a technical reference manual
	and a disk containing helpful utilities, system resource-viewers,
	drivers, and accessories.
	
	To order the Resource Kit within the United States, call (800)
	642-7676.
	
	To order outside of the United States, dial the phone number for your
	area. You can find this number on the International Subsidiary card.
	
	Format of the SYSTEM.INI File
	-----------------------------
	
	The SYSTEM.INI file contains several sections, each of which consists
	of a group of related settings. The sections and settings are listed
	in the SYSTEM.INI file in the following format:
	
	  [section name]
	  SettingName=value
	
	In this example, [section name] is the name of a section. The
	enclosing brackets ([ ]) are required, and the left bracket must be in
	the leftmost column on the screen.
	
	The SettingName=value statement defines the value of each setting. A
	setting name consists of any combination of letters and digits in
	uppercase or lowercase, and it must be followed immediately by an
	equal sign (=). The value of the setting can be an integer, a letter,
	a Boolean value, a string, or a quoted string, depending on the
	setting. There are multiple settings in most sections.
	
	You can include comments in initialization files. You must begin each
	line of a comment with a semicolon (;).
	
	How to Read the Listings in This Document
	-----------------------------------------
	
	In this document, settings in SYSTEM.INI are listed alphabetically
	within sections. However, the settings do not appear alphabetically in
	the SYSTEM.INI file. To change a setting, you need to search for it in
	the appropriate section.
	
	The syntax, default value, and purpose appear in the following format.
	
	SettingName=<value>
	
	Default: The Windows for Workgroups default value for this setting or
	        the value that is used if the setting is not present in your
	        SYSTEM.INI file.
	
	Purpose: A brief description of the function of the setting.
	
	<value> indicates whether the value should be an integer, a letter, a
	range of numbers, a Boolean value, or something else. If you want to
	enable a Boolean setting, you can set the value to: True, Yes, On, or
	1. If you want to disable the Boolean setting, you can set the value
	to: False, No, Off, or 0.
	
	Changing Settings
	-----------------
	
	When the Setup program creates the SYSTEM.INI file, it assigns default
	values to many of the settings. Other settings have values that
	correspond to the type of hardware you are using.
	
	Some settings listed in this document do not usually appear in your
	SYSTEM.INI file. Most of these settings have a built-in default value
	that is present whether or not the setting appears in SYSTEM.INI. You
	might need to change one or more of these values to improve the
	performance of Windows for Workgroups or applications with your
	system.
	
	To change the values of the settings described in "[Network] Section
	Settings" in this document, use the Network option in Control Panel.
	For more information about changing your network settings, see Help
	for Control Panel and Chapter 9, "Customizing Windows for Workgroups,"
	in the "Microsoft Windows for Workgroups User's Guide."
	
	To change the values of the rest of the settings described in this
	document, open the SYSTEM.INI file and edit it by using a text editor,
	such as Notepad. Do not use a formatting editor, such as Write or a
	word processor in document mode; it can corrupt your SYSTEM.INI file.
	For more information on how to use Notepad, see Help for Notepad.
	
	Any changes you make to SYSTEM.INI settings do not take effect until
	you restart Windows for Workgroups.
	
	Caution: Do not change any settings that are not described in this
	document. If you need to change additional settings, refer to the
	Windows for Workgroups Resource Kit. Always back up your SYSTEM.INI
	file before you change any of its settings. That way, you can restore
	the original file if you make incorrect changes. Be careful when
	making changes to the SYSTEM.INI file. Your system will not work
	properly if you edit this file incorrectly.
	
	[boot] Section Settings
	=======================
	
	All settings in this section, except for CachedFileHandles, are
	required. If you modify or delete one of these settings, Windows for
	Workgroups might not work properly. There are no specific default
	values for these settings; Setup assigns values based on your system
	configuration.
	
	If you want to run a different application when you start Windows for
	Workgroups, change the following setting.
	
	shell=<filename>
	
	Default: None (Setup initializes this value as PROGMAN.EXE.)
	
	Purpose: Specifies the application that runs when you start Windows
	for Workgroups. Unless you change this setting, Program Manager runs
	when you start Windows for Workgroups. For example, if you want to run
	File Manager instead of Program Manager, you could change this setting
	as follows:
	
	  shell=winfile.exe
	
	[Network] Section Settings
	==========================
	
	The [Network] section contains settings that affect how your computer
	interacts with the network. You can change most of these settings by
	using the Network option in Control Panel. However, to change some
	settings, you must edit the SYSTEM.INI file. It is recommended that
	you use Control Panel whenever possible to change the settings. For
	more information about customizing how your computer interacts with
	the network, see Chapter 9, "Customizing Windows for Workgroups," in
	the "Microsoft Windows for Workgroups User's Guide" and Help for
	Control Panel.
	
	The [Network] section can contain the following settings:
	
	AutoLogon=<boolean>
	
	Default: Yes
	
	Purpose: Specifies whether you will be automatically logged on when
	you start Windows for Workgroups. If this setting is disabled, you
	will not be logged on. If this setting is enabled, you will be logged
	on. If you are using a logon password, the logon dialog box will
	appear, asking you to supply your password. To log on, you must supply
	your password.
	
	AutoStart=<full-or-base>
	
	Default: Full (for computers that have an 80286 processor)
	
	Purpose: Specifies the type of redirector support that Windows for
	Workgroups provides. If the value for this setting is Full, Windows
	for Workgroups provides the same support as the virtual redirector
	(VREDIR). If the value for this setting is Base, Windows for
	Workgroups provides limited redirector support. This setting only
	applies if you are using a computer that has an 80286 processor. To
	change this setting, you must use Notepad to edit the SYSTEM.INI file.
	
	CacheThisPassword=<boolean>
	
	Purpose: Determines whether the Save This Password In Your Password
	List check box in the Enter Password or LAN Manager dialog box is
	selected the next time the dialog box is displayed. If this setting is
	enabled, the check box is selected. If this setting is disabled, the
	check box is not selected. When you select or clear the check box, the
	value for this setting changes in the SYSTEM.INI file to reflect the
	current state of the check box.
	
	Comment=<string-of-characters>
	
	Default: None
	
	Purpose: Provides a description of your computer. This description
	appears next to your computer name in the Connect Network Drive and
	Connect Network Printer dialog boxes. The comment value cannot contain
	commas.
	
	ComputerName=<name>
	
	Default: The name you provided for your computer during Setup.
	
	Purpose: Specifies the name of your computer. Your computer name must
	be unique, can be up to 15 characters long, and can contain letters,
	numbers, and any of the following characters:
	
	  ! # $ % & (  ) - . @ ^ _ ' { } ~
	
	Your computer name appears in the Connect Network Drive, Connect
	Network Printers, and Select Computer dialog boxes.
	
	EnableSharing=<0-or-1>
	
	Default: 1
	
	Purpose: Turns sharing on or off. If this setting is enabled, you can
	share your resources. If this setting is disabled, you cannot share
	your resources.
	
	Note: Windows for Workgroups must be running in 386 enhanced mode for
	you to share your resources.
	
	Exclude=<lana number, lana number>
	
	Default: None
	
	Purpose: Specifies that Windows for Workgroups should not use the
	protocols represented by the LANA numbers assigned to this setting.
	This setting overrides the LANAs= setting. If you are using Novell
	NetWare NetBIOS, you will need to exclude it by using this setting.
	For more information, see the NETWORKS.WRI online document.
	
	KeepConn=<seconds>
	
	Default: 600
	
	Purpose: Specifies the number of seconds Windows for Workgroups
	should wait before disconnecting an implicit connection that is no
	longer being used. This is useful if you are performing several
	directory searches or lists using an implicit connection, or if you
	are performing several tasks that involve pipes. If the applications
	that you are using to perform these tasks run slowly, then increase
	this value. Otherwise, you should never need to change this setting.
	
	LANAs=<lana number, lana number>
	
	Default: None
	
	Purpose: Overrides the automatic detection of protocols, if you start
	the network before starting Windows for Workgroups, and specifies that
	Windows for Workgroups should use only those protocols represented by
	the LANA numbers assigned to this setting.
	
	LMAnnounce=<yes-or-no>
	
	Default: No
	
	Purpose: Enables or disables LAN Manager compatibility in the browser
	on your computer. If your workgroup includes computers or servers that
	are running LAN Manager, set this value to Yes.
	
	LMLogon=<0-or-1>
	
	Default: 0
	
	Purpose: Specifies whether you log on to a LAN Manager domain when
	you start Windows for Workgroups. If this value is set to 1 and you
	have stored the domain password in your password list, Windows for
	Workgroups logs you on to a LAN Manager domain and runs your logon
	script, if you have one. If the domain password is not in your
	password list, the LAN Manager Logon dialog box appears so that you
	can pick the domain you want to log on to and specify the password for
	that domain. If this value is set to 0, you will not log on to a LAN
	Manager domain.
	
	LogonDomain=<domain name>
	
	Default: The workgroup your computer belongs to.
	
	Purpose: Specifies the name of the default LAN Manager domain
	(workgroup) that validates your password, if you choose to log on to a
	LAN Manager domain when you start Windows for Workgroups.
	
	LogonValidated=<boolean>
	
	Default: No
	
	Purpose: Specifies the value of the LMLogon setting when you last
	logged on. If you decide to change the LMLogon value by selecting or
	clearing the Log On To LAN Manager Domain check box in Control Panel
	while you are still logged on, the LogonValidated setting ensures that
	you are logged off properly when you end your Windows for Workgroups
	session, or if you choose to log off by using Control Panel. You
	should never need to change this setting.
	
	MaintainServerList=<yes-no-auto>
	
	Default: Auto
	
	Purpose: Specifies whether the browser on your computer acts as the
	browse master or a back-up browse master. If the value for this
	setting is Auto, the browser on your computer will act as either, as
	needed. If the value for this setting is No, the browser will never
	act as a browse master or a back-up browse master. If the value for
	this setting is Yes, the browser will always act as both. If you are
	setting up a computer as a dedicated server for a small workgroup of
	three to four computers, you may want to set this value to Yes on the
	server and to No on the other computers. Otherwise, you should never
	need to change this value.
	
	MultiNet=<name>
	
	Default: None
	
	Purpose: Specifies the other networks you have added support for.
	
	PrintBufTime=<seconds>
	
	Default: 45
	
	Purpose: Specifies the number of seconds of idle printing time that
	Windows for Workgroups should wait before indicating that the end of a
	print job has been reached when printing from an MS-DOS-based
	application. When printing to a network printer from an MS-DOS-based
	application, your documents do not start printing until the
	application finishes processing the print job. If you are using an MS-
	DOS-based application that processes print jobs quickly and you want
	your documents to print sooner, decrease this value. If you are using
	an MS-DOS-based application that takes longer to process print jobs or
	if your documents are not printing continuously, increase this value.
	The time during which an MS-DOS-based application is suspended is not
	counted.
	
	Priority=<number>
	
	Default: 80
	
	Purpose: Specifies the priority given to running your applications
	and sharing your resources. The lower the number, the faster your
	applications run. The higher the number, the faster your resources are
	shared.
	
	Reconnect=<boolean>
	
	Purpose: Determines whether the Reconnect At Startup check box in the
	Connect Network Drive or Connect Network Printer dialog box is
	selected the next time the dialog box is displayed. If this setting is
	enabled, the check box is selected. If this setting is disabled, the
	check box is not selected. When you select or clear the check box, the
	value for this setting changes in the SYSTEM.INI file to reflect its
	current state.
	
	Reshare=<boolean>
	
	Purpose: Determines whether the Reshare At Startup check box in the
	Share Directory or Share Printer dialog box is selected the next time
	the dialog box is displayed. If this setting is enabled, the check box
	is selected. If this setting disabled, the check box is not selected.
	When you select or clear the check box, the value for this setting
	changes in the SYSTEM.INI file to reflect its current state.
	
	Username=<name>
	
	Default: Your computer name until you log on for the first time. Then
	the default value becomes the logon name you specify in the Welcome To
	Windows For Workgroups dialog box.
	
	Purpose: Specifies the default logon name used to log on to Windows
	for Workgroups. The value for this setting changes to the logon name
	you specify when you log on to Windows for Workgroups for the first
	time.
	
	WorkGroup=<name>
	
	Default: The workgroup you specified during Setup.
	
	Purpose: Specifies the workgroup your computer belongs to. If this
	setting is missing from your SYSTEM.INI file, the Windows for
	Workgroups redirector will not load and you will not have full
	networking capabilities.
	
	[Password List] Section Settings
	================================
	
	The [Password List] section contains settings that specify the
	location of the password-list files for each user who logs on to your
	computer. The password-list file contains a list of the passwords you
	use to connect to password-protected resources.
	
	The [Password List] section can contain one or more occurrences of the
	following setting:
	
	  <username>=<drive><directory><password-list-filename>
	
	Purpose: Username specifies the logon name of the user; drive
	specifies the drive the password-list file is located on; directory
	specifies the name of the directory in which the password-list file is
	located; and password-list-filename specifies the name of the
	password-list file.
	
	[NonWindowsApp] Section Settings
	================================
	
	The [NonWindowsApp] section contains settings that affect the
	performance of MS-DOS-based applications:
	
	The [NonWindowsApp] section can contain the following settings:
	
	CommandEnvSize=<bytes>
	
	Default: 0 for MS-DOS versions earlier than 3.2. Otherwise, the
	default is the value for the /e: option in the shell= command line in
	the CONFIG.SYS file.
	
	Purpose: Specifies the size of the COMMAND.COM environment. Note that
	running batch files with the extension .BAT starts COMMAND.COM, so
	this setting also applies to batch files. The value for this setting
	must be either 0 or between 160 and 32768. A value of 0 disables this
	setting. If the value is too small or too large, it will be rounded up
	to 160 or down to 32768. If the value is less than the current size of
	the actual environment, this setting will be disabled, as if it were
	set to 0. If you have specified the environment size in a PIF file for
	COMMAND.COM, the PIF-file setting overrides this setting.
	
	DisablePositionSave=<0-or-1>
	
	Default: 0
	
	Purpose: When this setting is disabled, the position and fonts used by
	an MS-DOS-based application are saved in the DOSAPP.INI file when you
	quit the application. If this setting is enabled, the position and
	fonts used by an MS-DOS-based application whose settings have not been
	previously saved in the DOSAPP.INI file will not be saved. If enabled,
	the setting can be overridden for each MS-DOS-based application by
	selecting the Save Settings On Exit check box in the Font Selection
	dialog box in the application.
	
	FontChangeEnable=<0-or-1>
	
	Default: 1 on systems that use Windows version 3.1 or Windows for
	Workgroups grabbers. 0 on systems that use Windows version 3.0
	grabbers.
	
	Purpose: Provides the ability to change fonts when running an MS-DOS-
	based application in a window on a system that uses version 3.0
	grabbers (usually used in 3.0 display drivers). Windows version 3.1
	video grabbers (used in 3.1 display drivers) include built-in support
	for changing fonts when running an MS-DOS-based application in a
	window. If you are using a 3.0 grabber that has not been updated to
	include the ability to change fonts and you want to use this feature,
	enable this setting. However, with this setting enabled, your screen
	may lose characters and the cursor may change size and position
	slightly.
	
	LocalTSRs=<list-of-TSR-applications>
	
	Default: DOSEDIT, CED
	
	Purpose: Specifies which terminate-and-stay-resident (TSR) programs
	work properly if they are copied to each instance of a virtual
	machine. When you start Windows for Workgroups, it detects any TSR
	programs that are currently running. If the TSR is on the LocalTSRs
	list, Windows for Workgroups copies the TSR to each virtual machine
	you run. Many TSRs will not run properly if they are added to this
	list. Make sure your TSR is fully compatible with Windows for
	Workgroups and can be copied to a virtual machine before you add it to
	the list.
	
	MouseInDosBox=<0-or-1>
	
	Default: 1 if an MS-DOS mouse driver is loaded that has the extension
	.COM or .SYS and supports the use of a mouse with an MS-DOS-based
	application. Otherwise, the default is 0.
	
	Purpose: Specifies whether the mouse is supported when running an MS-
	DOS-based application in a window. Mouse support for an MS-DOS-based
	application running in a window is automatically available if you are
	using a Windows version 3.1 grabber. If you are using a Windows
	version 3.0 grabber and you want mouse support, enable this setting.
	If you do not want mouse support, disable this setting.
	
	NetAsynchSwitching=<0-or-1>
	
	Default: 0, unless an application is running that supports the use of
	the Task Switcher UPI by the NetBIOS.
	
	Purpose: Specifies whether you can switch away from an application
	(running in standard mode) after it has made an asynchronous network
	BIOS call. If this setting is disabled, you cannot switch away.
	Switching away from some applications that make these calls might
	cause your system to fail. After Windows for Workgroups detects an
	asynchronous NetBIOS call, you cannot switch away from the
	application, even if no more of these calls are made. Enable this
	setting only if you are sure that the applications you use will not
	receive network messages while they are inactive.
	
	ScreenLines=<number>
	
	Default: 25
	
	Purpose: Specifies the number of lines that will be displayed on the
	screen when you run an MS-DOS-based application. An application that
	specifies a different screen mode can override this setting.
	
	SwapDisk=<drive:directory>
	
	Default: The directory that the TEMP environment variable points to;
	if there is no TEMP variable, the default is the root directory of
	your first hard drive (usually labeled C:). If you do not have a hard
	disk, the default is the root directory of your first floppy disk
	drive (usually labeled A:).
	
	Purpose: Provides the name of the disk drive and directory to which
	Windows for Workgroups running in standard mode swaps MS-DOS-based
	applications.
	
	KBCategory: kbnetwork kbdisplay kb3rdparty kbref
	KBSubcategory:
	
	Additional query words: 3.10 wfw wfwg
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
