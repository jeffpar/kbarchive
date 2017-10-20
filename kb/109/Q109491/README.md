---
layout: page
title: "Q109491: SYSINI.WRI from Windows for Workgroups 3.11 (Part 1 of 3)"
permalink: /kb/109/Q109491/
---

## Q109491: SYSINI.WRI from Windows for Workgroups 3.11 (Part 1 of 3)

{% raw %}

	Article: Q109491
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
	version 3.11 SYSINI.WRI.
	
	MORE INFORMATION
	================
	
	Microsoft and MS-DOS are registered trademarks and Windows is a
	trademark of Microsoft Corporation.
	
	Novell and NetWare are registered trademarks of Novell, Inc.
	
	SYSTEM.INI File Settings
	______________________________________________________
	Windows initialization files contain information that defines your
	Windows environment. Windows for Workgroups and Windows-based
	applications can use the information stored in these files to make
	their configurations meet your needs and preferences.
	
	There are two standard Windows initialization files:
	
	- WIN.INI, which primarily contains settings that Windows for
	  Workgroups maintains to customize your Windows for Workgroups
	  environment according to your preferences.
	
	- SYSTEM.INI, which primarily contains settings that customize
	  Windows for Workgroups to meet your system's hardware needs.
	
	This document describes only a few of the settings in the SYSTEM.INI
	file. You can get a more complete listing of the SYSTEM.INI settings
	by purchasing the Windows for Workgroups Resource Kit. The Resource
	Kit provides complete technical information about Windows for
	Workgroups for the support professional. It includes a technical
	reference manual and a disk containing helpful utilities, system
	resource-viewers, drivers, and accessories.
	
	To order the Resource Kit within the United States, dial:
	
	1-800-642-7676
	
	To order outside of the United States, dial the phone number for your
	area. You can find this number on the International Subsidiary card.
	
	Format of the SYSTEM.INI File
	
	The SYSTEM.INI file contains several sections, each of which consists
	of a group of related settings. The sections and settings are listed
	in the SYSTEM.INI file in the following format:
	
	[section name]
	SettingName=value
	
	In this example, [section name] is the name of a section. The
	enclosing brackets ([ ]) are required, and the left bracket must be
	in the leftmost column on the screen.
	
	The SettingName=value statement defines the value of each setting. A
	setting name consists of any combination of letters and digits in
	uppercase or lowercase, and it must be followed immediately by an
	equal sign (=). The value of the setting can be an integer, a letter,
	a Boolean value, a string, or a quoted string, depending on the
	setting. Most sections contain multiple settings.
	
	You can include comments in initialization files. You must begin each
	line of a comment with a semicolon (;).
	
	How to Read the Listings in This Document
	
	In this document, settings in the SYSTEM.INI file are listed
	alphabetically within each section. However, the settings do not
	appear alphabetically in the SYSTEM.INI file. To change a setting,
	you need to search for it in the appropriate section of the
	SYSTEM.INI file.
	
	The syntax, default value, and purpose of each setting appear in the
	following format.
	____________________________________________________________
	SettingName=<value>
	
	Default:     The Windows for Workgroups default value for this
	setting or the value that is used if the setting is not present in
	your SYSTEM.INI file.
	Purpose:     The function of the setting.
	
	<value> indicates whether the value should be an integer, a letter, a
	range of numbers, a Boolean value, or something else. If you want to
	enable a Boolean setting, you can set the value to True, Yes, On, or
	1. If you want to disable the Boolean setting, you can set the value
	to False, No, Off, or 0.
	____________________________________________________________
	
	Changing Settings
	
	When the Setup program creates the SYSTEM.INI file, it assigns
	default values to many of the settings. Other settings have values
	that correspond to the type of hardware you are using.
	
	Some settings listed in this document do not usually appear in your
	SYSTEM.INI file. Most of these settings have a built-in default value
	that is present whether or not the setting appears in your SYSTEM.INI
	file. You might need to change one or more of these values to improve
	the performance of Windows for Workgroups or applications with your
	system.
	
	To change the values of the settings described in  "[Network] Section
	Settings" in this document, use the Network Setup icon the in Network
	group, or the Network icon in Control Panel. For more information
	about changing your network settings, see Help for Windows Setup and
	Chapter 8, "Customizing Network Settings and Improving Performance,"
	in the Microsoft Workgroup Add-on User's Guide.
	
	To change the values of the rest of the settings described in this
	document, open the SYSTEM.INI file and edit it by using a text
	editor, such as Notepad. Do not use a formatting editor, such as
	Write or a word processor in document mode; it can corrupt your
	SYSTEM.INI file. For more information on how to use Notepad, see Help
	for Notepad.
	
	Any changes you make to your SYSTEM.INI file settings do not take
	effect until you restart Windows for Workgroups.
	
	Caution:  Do not change any settings that are not described in this
	document. If you need to change additional settings, refer to the
	Windows for Workgroups Resource Kit. Always back up your SYSTEM.INI
	file before you change any of its settings. That way, you can restore
	the original file if you make incorrect changes. Be careful when you
	make changes to the SYSTEM.INI file. Your system will not work
	properly if you edit this file incorrectly.
	
	[boot] Section Settings
	
	All settings in this section, except for CachedFileHandles, are
	required. If you modify or delete one of these settings, Windows for
	Workgroups might not work properly. There are no specific default
	values for these settings; Setup assigns values based on your system
	configuration.
	
	If you want to run a different application when you start Windows for
	Workgroups, change the following setting:
	____________________________________________________________
	shell=<filename>
	
	Default:     None (Setup initializes this value as PROGMAN.EXE.)
	Purpose:     Specifies the application that runs when you start
	Windows for Workgroups. Unless you change this setting, Program
	Manager runs when you start Windows for Workgroups. For example, if
	you want to run File Manager instead of Program Manager, you could
	change this setting as follows:
	
	shell=winfile.exe
	____________________________________________________________
	
	[Network] Section Settings
	
	The [Network] section contains settings that affect how your computer
	interacts with the network. You can change most of these settings by
	using either the Network icon in Control Panel or the Network Setup
	in the Network group. However, to change some settings, you must edit
	the SYSTEM.INI file. It is recommended that you use Control Panel or
	Windows Setup whenever possible to change the settings. For more
	information about customizing how your computer interacts with the
	network, see Chapter 8, "Customizing Network Settings and Improving
	Performance," in the Microsoft Workgroup Add-on User's Guide and Help
	for Windows Setup.
	
	The [Network] section can contain the following settings:
	____________________________________________________________
	AuditEvents=<hexadecimal number>
	
	Default:     0
	Purpose:     Specifies which networking events are recorded, or
	audited, in an event log.
	____________________________________________________________
	AuditEnabled=<0-or-1>
	
	Default:     0
	Purpose:     Turns event logging on or off. If this setting is
	enabled, Windows for Workgroups records network events in an event
	log. If this setting is disabled, Windows for Workgroups does not log
	network events.
	____________________________________________________________
	AuditLog=<number>
	
	Default:     4
	Purpose:     Specifies the size (in kilobytes) of the event log file.
	____________________________________________________________
	AutoLogon=<boolean>
	
	Default:     Yes
	Purpose:     Specifies whether you will automatically be logged on
	when you start Windows for Workgroups. If this setting is disabled,
	you will not be logged on. If this setting is enabled, you will be
	logged on. If you are using a logon password, the logon dialog box
	will appear, asking you to supply your password. To log on, you must
	supply your password.
	____________________________________________________________
	AutoStart=<full-or-basic>
	
	Default:     Basic
	Purpose:     Specifies the type of redirector support that Windows
	for Workgroups provides. If the value for this setting is Full,
	Windows for Workgroups provides the same support as the virtual
	redirector (VREDIR). If the value for this setting is Basic, Windows
	for Workgroups provides limited redirector support. To change this
	setting, you must use Notepad to edit the SYSTEM.INI file.
	____________________________________________________________
	CacheThisPassword=<boolean>
	
	Default:     None
	Purpose:     Determines whether the Save This Password In Your
	Password List check box in the Enter Password or LAN Manager dialog
	box is selected the next time the dialog box is displayed. If this
	setting is enabled, the check box is selected. If this setting is
	disabled, the check box is not selected. When you select or clear the
	check box, the value for this setting changes in the SYSTEM.INI file
	to reflect the current state of the check box.
	____________________________________________________________
	Comment=<string-of-characters>
	
	Default:     None
	Purpose:     Provides a description of your computer. This
	description appears next to your computer name in the Connect Network
	Drive and Connect Network Printer dialog boxes. The comment value
	cannot contain commas.
	____________________________________________________________
	ComputerName=<name>
	
	Default:     The name you provided for your computer during Setup.
	Purpose:     Specifies the name of your computer. Your computer
	name must be unique, can be up to 15 characters long, and can contain
	letters, numbers, and any of the following characters:
	
	! # $ % & (  ) - . @ ^ _ ' { } ~
	
	Your computer name appears in the Connect Network Drive, Connect
	Network Printers, and Select Computer dialog boxes.
	____________________________________________________________
	EnableSharing=<0-or-1>
	
	Default:     1
	Purpose: Turns sharing on or off by controlling whether Windows for
	Workgroups loads the VSERVER.386 device driver at startup. This
	setting is controlled by the FileSharing= and PrintSharing= settings.
	If either of these settings is set to 1, then EnableSharing is set to
	1. If both of these settings are set to 0, then EnableSharing is set
	to 0.
	
	____________________________________________________________
	Exclude=<lana number, lana number>
	
	Default:     None
	Purpose:     Specifies that Windows for Workgroups should not use
	the protocols represented by the LANA numbers assigned to this
	setting. This setting overrides the LANAs= setting. If you are using
	Novell NetWare NetBIOS, you will need to exclude it by using this
	setting. For more information, see the NETWORKS.WRI online document.
	____________________________________________________________
	FileSharing=<boolean>
	
	Default:     1
	Purpose:     Turns file sharing on or off. If this setting is
	enabled, you can use the File Manager to share files and directories.
	If this setting is disabled, you cannot share files and directories.
	
	Note:  If your Network Administrator has disabled file sharing, this
	switch will have no effect.
	____________________________________________________________
	KeepConn=<seconds>
	
	Default:     600
	Purpose:     Specifies the number of seconds Windows for
	Workgroups should wait before disconnecting an implicit connection
	that is no longer being used. This is useful if you are performing
	several directory searches or lists using an implicit connection, or
	if you are performing several tasks that involve pipes. If the
	applications that you are using to perform these tasks run slowly,
	then increase this value. Otherwise, you should never need to change
	this setting.
	____________________________________________________________
	LANAs=<lana number, lana number>
	
	Default:     None
	Purpose:     Overrides the automatic detection of protocols, if
	you start the network before starting Windows for Workgroups, and
	specifies that Windows for Workgroups should use only those protocols
	represented by the LANA numbers assigned to this setting.
	____________________________________________________________
	LMAnnounce=<yes-or-no>
	
	Default:     No
	Purpose:     Enables or disables Windows NT or LAN Manager
	compatibility in the browser on your computer. If your workgroup
	includes computers or servers that are running Windows NT or LAN
	Manager, set this value to Yes.
	____________________________________________________________
	LMLogon=<0-or-1>
	
	Default:     0
	Purpose:     Specifies whether you log on to a Windows NT or LAN
	Manager domain when you start Windows for Workgroups. If this value
	is set to 1 and you have stored the domain password in your password
	list, Windows for Workgroups logs you on to a Windows NT or LAN
	Manager domain and runs your logon script, if you have one. If the
	domain password is not in your password list, the LAN Manager Logon
	dialog box appears so that you can pick the domain you want to log on
	to and specify the password for that domain. If this value is set to
	0, you will not log on to a Windows NT or LAN Manager domain.
	____________________________________________________________
	LogonDomain=<domain name>
	
	Default:     The workgroup your computer belongs to.
	Purpose:     Specifies the name of the default Windows NT or LAN
	Manager domain (workgroup) that validates your password, if you
	choose to log on to a Windows NT or LAN Manager domain when you start
	Windows for Workgroups.
	____________________________________________________________
	LogonValidated=<boolean>
	
	Default:     No
	Purpose:     Specifies the value of the LMLogon setting when you
	last logged on. If you decide to change the LMLogon value by
	selecting or clearing the Log On To Windows NT or LAN Manager Domain
	check box in Control Panel while you are still logged on, the
	LogonValidated setting ensures that you are logged off properly when
	you end your Windows for Workgroups session, or if you choose to log
	off by using Control Panel. You should never need to change this
	setting.
	____________________________________________________________
	
	Additional query words: wfw wfwg 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	

{% endraw %}
