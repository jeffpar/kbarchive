---
layout: page
title: "Q185590: Guide To Windows NT 4.0 Profiles and Policies (Part 5 of 6)"
permalink: /kb/185/Q185590/
---

## Q185590: Guide To Windows NT 4.0 Profiles and Policies (Part 5 of 6)

{% raw %}

	Article: Q185590
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): 4.0,4.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft BackOffice Small Business Server versions 4.0, 4.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article is the fifth in a series of articles that provides information and
	procedures for implementing Microsoft Windows NT 4.0 Profiles and Policies on
	client workstations and servers.
	
	A whitepaper is available that contains all of this information and additional
	flowcharts, diagrams and examples and can be downloaded from the following web
	page:
	
	  http://www.microsoft.com/ntserver/techresources/management/prof_policies.asp
	
	For the other sections of this guide, please click the article numbers below to
	view the articles in the Microsoft Knowledge Base:
	
	  Q161334 Guide To Windows NT 4.0 Profiles and Policies (Part 1 of 6)
	
	  Q185587 Guide To Windows NT 4.0 Profiles and Policies (Part 2 of 6)
	
	  Q185588 Guide To Windows NT 4.0 Profiles and Policies (Part 3 of 6)
	
	  Q185589 Guide To Windows NT 4.0 Profiles and Policies (Part 4 of 6)
	
	  Q185591 Guide To Windows NT 4.0 Profiles and Policies (Part 6 of 6)
	
	MORE INFORMATION
	================
	
	WINDOWS NT SERVER OPERATING SYSTEM
	----------------------------------
	
	White Paper
	
	Guide to Microsoft Windows NT 4.0 Profiles and Policies:
	
	Copyright 1997 Microsoft Corporation. All rights reserved.
	
	The information contained in this document represents the current view of
	Microsoft Corporation on the issues discussed as of the date of publication.
	Because Microsoft must respond to changing market conditions, it should not be
	interpreted to be a commitment on the part of Microsoft, and Microsoft cannot
	guarantee the accuracy of any information presented after the date of
	publication.
	
	This White Paper is for informational purposes only. MICROSOFT MAKES NO
	WARRANTIES, EXPRESS OR IMPLIED, IN THIS DOCUMENT.
	
	Microsoft, the BackOffice logo, MS-DOS, Windows, and Windows NT are registered
	trademarks of Microsoft Corporation.
	
	Other product or company names mentioned herein may be the trademarks of their
	respective owners.
	
	Microsoft Corporation
	One Microsoft Way
	Redmond, WA 98052-6399
	USA
	0997
	
	REGISTRY KEYS MODIFIED BY THE SYSTEM POLICY EDITOR DEFAULT TEMPLATES:
	
	The following outlines the locations and values for registry entries that are
	written to a Windows NT-based workstation or server when you use the System
	Policy Editor to modify a policy. Knowing the location of these registry
	settings may help you to resolve problems.
	
	DEFAULT USER SETTINGS:
	
	The following data is specific to the options found in the Default User portion
	of the System Policy Editor.
	
	Control Panel Display Application:
	Category: Control Panel
	Subcategory: Display
	Selection: Restrict display
	Description: Removes or enables tabs from the Control Panel Display application.
	Key: HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\
	Policies\System
	
	Registry Value Registry Data Description
	NoDispCPL REG_DWORD Off = 0 or value removed; On = 1
	NoDispBackgroundPage REG_DWORD Off = 0 or value removed; On = 1
	NoDispScrSavPage REG_DWORD Off = 0 or value removed; On = 1
	NoDispAppearancePage REG_DWORD Off = 0 or value removed; On = 1
	NoDispSettingsPage REG_DWORD Off = 0 or value removed; On = 1
	
	Wallpaper:
	Category: Desktop
	Selection: Wallpaper
	Description: Defines the path to be used when loading wallpaper, and determines
	whether to tile it or not.
	Key: HKEY_CURRENT_USER\Control Panel\Desktop
	
	Registry Value Registry Data Description
	Wallpaper REG_SZ Off = value is removed; On = text of path to wallpaper
	TileWallpaper REG_SZ Off = 0 or value is removed; On = 1
	
	Color Scheme:
	Category: Desktop
	Selection: Color scheme
	Key: HKEY_CURRENT_USER\Control Panel\Appearance
	
	Registry Value Registry Data Description
	Current REG_SZ Off = value is removed; On = text of color scheme name
	
	Start Menu Run Command:
	Category: Shell
	Subcategory: Restrictions
	Selection: Remove Run command from Start menu
	Description: Removes the user's ability to start applications or processes from
	the Start menu by removing the option completely. Note that if the user still
	has access to the MS-DOS prompt icon or command prompt, the user can start
	unauthorized applications. To further restrict the user's ability to run
	specific applications, refer to the policy setting for "Run only allowed Windows
	applications" later in this section.
	Key: HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion
	\Policies\Explorer
	
	Registry Value Registry Data Description
	NoRun REG_DWORD Off = 0 or value is removed; On = 1
	
	Settings Folders:
	Category: Shell
	Subcategory: Restrictions
	Selection: Remove folders from settings on Start menu
	Description: Removes the Control Panel and Printers folders from the Settings
	menu. Removing the Taskbar, Control Panel, and Printer folders causes the
	Settings menu to be removed completely.
	Key: HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion
	\Policies\Explorer
	
	Registry Value Registry Data Description
	NoSetFolders REG_DWORD Off = 0 or value is removed; On = 1
	
	Settings Taskbar:
	Category: Shell
	Subcategory: Restrictions
	Selection: Remove Taskbar from settings on Start menu
	Description: Removes the Taskbar option from settings on the Start menu. Removing
	the Taskbar, Control Panel, and Printer folders causes the Settings menu to be
	removed completely.
	Key: HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion
	\Policies\Explorer
	
	Registry Value Registry Data Description
	NoSetTaskbar REG_DWORD Off = 0 or value is removed; On = 1
	
	Start Menu Find Command:
	Category: Shell
	Subcategory: Restrictions
	Selection: Remove Find command from Start menu
	Description: Completely removes the Find option from the Start menu.
	Key: HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion
	\Policies\Explorer
	
	Registry Value Registry Data Description
	NoFind REG_DWORD Off = 0 or value is removed; On = 1
	
	My Computer Drive Icons:
	Category: Shell
	Subcategory: Restrictions
	Selection: Hide drives in My Computer
	Description: Removes the icons for the drives in My Computer.
	Key: HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion
	\Policies\Explorer
	
	Registry Value Registry Data Description
	NoDrives REG_DWORD Off = value is removed; On = 3fffffff
	
	Network Neighborhood Icon:
	Category: Shell
	Subcategory: Restrictions
	Selection: Hide Network Neighborhood
	Description: Removes the Network Neighborhood icon from the desktop. In addition,
	disables UNC capability from within the Explorer interface, including the Start
	menu's Run command, UNC paths configured by the administrator in Policies for
	shared folders, desktop icons, the Start command, and so forth. This does not
	impair the functionality of the command line Net.exe command.
	Key: HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion
	\Policies\Explorer
	
	Registry Value Registry Data Description
	NoNetHood REG_DWORD Off = 0 or value is removed; On = 1
	
	Network Neighborhood Display:
	Category: Shell
	Subcategory: Restrictions
	Selection: No Entire Network in Network Neighborhood
	Key: HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion
	\Policies\Network
	
	Registry Value Registry Data Description
	NoEntireNetwork REG_DWORD Off = 0 or value is removed; On = 1
	
	Network Neighborhood Workgroup Contents:
	Category: Shell
	Subcategory: Restrictions
	Selection: No workgroup contents in Network Neighborhood
	Key: HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion
	\Policies\Network
	
	Registry Value Registry Data Description
	NoWorkgroupContents REG_DWORD Off = 0 or value is removed; On = 1
	
	Desktop Display:
	Category: Shell
	Subcategory: Restrictions
	Selection: Hide all items on desktop
	Description: Hides all desktop items regardless of menus, folders, and shortcuts
	defined either by profiles or by other pointers in the policy file for custom
	program folders, custom desktop icons, and so on.
	Key: HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion
	\Policies\Explorer
	
	Registry Value Registry Data Description
	NoDesktop REG_DWORD Off = 0 or value is removed; On = 1
	
	Start Menu Shut Down Command:
	Category: Shell
	Subcategory: Restrictions
	Selection: Disable Shut Down command
	Description: Disables the Shut Down option on the Start menu. Note that this does
	not disable the user's ability to shut down the computer using the CTRL-ALT-DEL
	sequence. If you want to remove the user's ability to use CTRL-ALT-DEL, remove
	the user's name from the "Shut down the system" user right in User Manager.
	Key: HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion
	\Policies\Explorer
	
	Registry Value Registry Data Description
	NoClose REG_DWORD Off = 0 or value is removed; On = 1
	
	Saved Settings:
	Category: Shell
	Subcategory: Restrictions
	Selection: Don't save settings at Exit Description: Disables or enables the
	ability to save modifications that the user makes during the logon session.
	Key: HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion
	\Policies\Explorer
	
	Registry Value Registry Data Description
	NoSaveSettings REG_DWORD Off = 0 or value is removed; On = 1
	
	Registry Editing Tools:
	Category: System
	Subcategory: Restrictions
	Selection: Disable registry editing tools
	Description: Disable user's ability to run Regedit.exe or Regedt32.exe.
	Key: HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion
	\Policies\System
	
	Registry Value Registry Data Description
	DisableRegistryTools REG_DWORD Off = 0 or value is removed; On = 1
	
	Windows Applications Restrictions:
	Category: System
	Subcategory: Restrictions
	Selection: Run only allowed Windows applications
	Description: Restricts the applications that the user can start through the
	Explorer interface. If an application is not specified, a dialog box is
	presented that states: "Restrictions: This operation has been canceled due to
	restrictions in effect on this computer. Please contact your system
	administrator." Be sure to include Systray.exe in the list of allowed
	applications if this policy is to be enforced. Note that users may still have
	the ability to start restricted applications from the command prompt if you give
	them access to Cmd.exe.
	Key: HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion
	\Policies\Explorer
	
	Registry Value Registry Data Description
	RestrictRun REG_DWORD Off = 0 or value is removed; On = 1
	
	Key: HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion
	\Policies\Explorer\RestrictRun
	
	Registry Value Registry Data Description
	Number Increment Starting with 1 REG_SZ Off = value is removed; On = text of
	application name
	
	Custom Programs:
	Category: Windows NT Shell
	Subcategory: Custom Folders
	Selection: Custom Program folder
	Description: Specifies the UNC path for the folder to use when displaying
	folders, files, and shortcuts available when the user selects Programs from the
	Start menu. The user's profile Programs is an additional selection.
	Key: HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion \Explorer\User
	Shell Folders
	
	Registry Value Registry Data Description
	Programs REG_ REG_SZ Off = value is removed; On = text of UNC path to folder.
	Default = %USERPROFILE%\Start Menu\Programs
	
	Custom Desktop Icons:
	Category: Windows NT Shell
	Subcategory: Custom Folders
	Selection: Custom desktop icons
	Description: Specifies the UNC path the folder is to use when displaying the
	folders, files, and shortcuts the user receives on the desktop.
	Key: HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion \Explorer\User
	Shell Folders
	
	Registry Value Registry Data Description
	Desktop REG_SZ Off = value is removed; On = text of UNC path to folder.
	Default = %USERPROFILE%\Desktop
	
	Start Menu Subfolders:
	Category: Windows NT Shell
	Subcategory: Custom Folders
	Selection: Hide Start menu subfolders
	Description: Hides subfolders, such as the user's Programs folder, if a custom
	Programs folder exists.
	Key: HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion
	\Policies\Explorer
	
	Registry Value Registry Data Description
	NoStartMenuSubFolders REG_DWORD Off = 0 or value is removed; On = 1
	
	Custom Startup Folder:
	Category: Windows NT Shell
	Subcategory: Custom Folders
	Selection: Custom Startup folder
	Description: Specifies the UNC path the folder is to use when folders, files, and
	shortcuts are to start at user logon.
	Key: HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion \Explorer\User
	Shell Folders
	
	Registry Value Registry Data Description
	Startup REG_SZ Off = value is removed; On = text of UNC path to folder. Default =
	%USERPROFILE%\Start Menu\Programs\Startup
	
	Custom Network Neighborhood:
	Category: Windows NT Shell
	Subcategory: Custom Folders
	Selection: Custom Network Neighborhood
	Description: Specifies the UNC path the folder is to use to create the folders,
	files, and shortcuts the user receives when navigating through Network
	Neighborhood.
	Key: HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion \Explorer\User
	Shell Folders
	
	Registry Value Registry Data Description
	NetHood REG_SZ Off = value is removed; On = text of UNC path to folder. Default =
	%USERPROFILE%\NetHood
	
	Custom Start Menu:
	Category: Windows NT Shell
	Subcategory: Custom Folders
	Selection: Custom Start menu
	Description: Specifies the UNC path the folder is to use when displaying the
	folders, files, and shortcuts the user receives as part of the Start menu.
	Key: HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion \Explorer\User
	Shell Folders
	
	Registry Value Registry Data Description
	Start Menu REG_SZ Off = value is removed; On = text of UNC path to folder.
	Default = %USERPROFILE%\Start Menu
	
	Shell Extensions:
	Category: Windows NT Shell
	Subcategory: Restrictions
	Selection: Only use approved shell extensions
	Key: HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion
	\Policies\Explorer
	
	Registry Value Registry Data Description
	EnforceShellExtensionSecurity REG_DWORD Off = 0 or value is removed; On = 1
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q216384 INFO: Approved Shell Extensions Only Enforced If
	  EnforceShellExtensionSecurity Key Is Turned On
	
	Explorer File Menu:
	Category: Windows NT Shell
	Subcategory: Restrictions
	Selection: Remove File menu from Explorer
	Description: Removes the File option from Explorer's toolbar. (This option was
	added in Service Pack 2.)
	Key: HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion
	\Policies\Explorer
	
	Registry Value Registry Data Description
	NoFileMenu REG_DWORD Off = 0 or value is removed; On = 1
	
	Start Menu Common Program Groups:
	Category: Windows NT Shell
	Subcategory: Restrictions
	Selection: Remove common program groups from Start menu
	Description: Disables the display of common groups when the user selects Programs
	from the Start menu.
	Key: HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion
	\Policies\Explorer
	
	Registry Value Registry Data Description
	NoCommonGroups REG_DWORD Off = 0 or value is removed; On = 1
	
	Taskbar Context Menus:
	Category: Windows NT Shell
	Subcategory: Restrictions
	Selection: Disable context menus for the Taskbar
	Description: Removes the context menus for the tray, including the Start button,
	Tab control, and Clock. (This option was added in Service Pack 2.)
	Key: HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion
	\Policies\Explorer
	
	Registry Value Registry Data Description
	NoTrayContextMenu REG_DWORD Off = 0 or value is removed; On = 1
	
	Explorer Context Menu:
	Category: Windows NT Shell
	Subcategory: Restrictions
	Selection: Disable Explorer's default context menu
	Description: Removes the context menu that would normally appear when the user
	right clicks on the desktop or in the Explorer right results pane. (This option
	was added in Service Pack 2.)
	Key: HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion
	\Policies\Explorer
	
	Registry Value Registry Data Description
	NoViewContextMenu REG_DWORD Off = 0 or value is removed; On = 1
	
	Network Connections:
	Category: Windows NT Shell
	Subcategory: Restrictions
	Selection: Remove the Map Network Drive and Disconnect Network Drive options
	Description: Prevents users from making additional network connections by
	removing the Map Network Drive and Disconnect Network Drive buttons from the
	toolbar in Explorer and also removing the menu items from the Context menu of My
	Computer and the Tools menu of Explorer. (This option was added in Service Pack
	2.)
	Key: HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion
	\Policies\Explorer
	
	Registry Value Registry Data Description
	NoNetConnectDisconnect REG_DWORD Off = 0 or value is removed; On = 1
	
	Explorer Context Menu:
	Category: Windows NT Shell
	Subcategory: Restrictions
	Selection: Disable link file tracking
	Description: When enabled, link file tracking uses the configured path shown in
	properties for the shortcut to an application instead of the absolute path. This
	option disables link file tracking. (This option was added in Service Pack 2.)
	Key: HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion
	\Policies\Explorer
	
	Registry Value Registry Data Description
	LinkResolveIgnoreLinkInfo REG_DWORD Off = 0 or value is removed; On = 1
	
	Autoexec.bat:
	Category: Windows NT System
	Selection: Parse Autoexec.bat
	Description: When this value is 1, the environment variables declared in the
	Autoexec.bat file are included in the user's environment.
	Key: HKEY_CURRENT_USER\Software\Microsoft\Windows NT\CurrentVersion \Winlogon
	
	Registry Value Registry Data Description
	ParseAutoexec REG_SZ Off = 0 or value is removed; On = 1
	
	Logon Scripts:
	Category: Windows NT System
	Selection: Run logon scripts synchronously
	Description: Determines whether the shell waits for the logon script to complete
	or not. If the value is 0, the logon script is run during the startup of the
	shell and allows items in the Startup group to start. If the value is 1, the
	logon script completes before the shell or any items in the Startup group are
	started. If this value is also set in the Computer section, the Computer section
	value takes precedence.
	Key: HKEY_CURRENT_USER\Software\Microsoft\Windows NT\CurrentVersion \Winlogon
	
	Registry Value Registry Data Description
	RunLogonScriptSync REG_DWORD Off = 0 or value is removed; On = 1
	
	Task Manager:
	Category: Windows NT System
	Selection: Disable Task Manager
	Description: Enables or disables the user's ability to start Task Manager to view
	processes, applications running, and make changes to the priority or state of
	the individual processes. (This option was added in Service Pack 2.)
	Key: HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion
	\Policies\System
	
	Registry Value Registry Data Description
	DisableTaskMgr REG_DWORD Off = 0 or value is removed; On = 1
	
	Welcome Tips:
	Category: Windows NT System
	Selection: Show welcome tips at logon
	Description: Enables or disables the display of the Welcome screen when the user
	logs on for the first and second time. (This option was added in Service Pack
	2.)
	Key: HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion \Explorer\Tips
	
	Registry Value Registry Data Description
	Show REG_DWORD Off = 0; On = 1
	
	Default Computer Setting:
	
	The following data is specific to the options found in the Default Computer
	portion of the System Policy Editor.
	
	Remote Update:
	Category: Network
	Subcategory: System Policies update
	Selection: Remote update
	Description: Controls how policies are applied to a Windows NT 4.0-based machine.
	With UpdateMode set to 1 (Automatic, the default), Windows NT makes a connection
	to the NETLOGON share of the validating domain controller in the user's context,
	and checks for the existence of the policy file, NTconfig.pol. With UpdateMode
	set to 2 (Manual), Windows NT reads the string specified in the NetworkPath
	value, and checks that path for the existence of the policy file (in this case,
	the policy file name should be included in the NetworkPath value). With
	UpdateMode set to 0 (Off), a policy file is not downloaded from any system, and
	therefore is not applied.
	Key: HKEY_LOCAL_MACHINE\System\CurrentControlSet\Control\Update
	
	Registry Value Registry Data Description
	UpdateMode REG_DWORD Off = 0, Automatic=1; Manual=2
	NetworkPath REG_SZ Text of UNC path for manual update
	Verbose REG_DWORD Display error messages. Off = 0 or value not present; On = 1
	LoadBalance REG_DWORD Off = 0 or value not present; On = 1
	
	Communities:
	Category: System
	Subcategory: SNMP
	Selection: Communities
	Key: HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\SNMP
	\Parameters\ValidCommunities
	
	Registry Value Registry Data Description
	Increment numbers beginning with 1 REG_SZ On = text of Valid Community #x; Off =
	value is removed from registry
	NOTE: There may be multiple entries in this subkey.
	
	Permitted Managers:
	Category: System
	Subcategory: SNMP
	Selection: Permitted managers
	Key: HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\SNMP
	\Parameters\PermittedManagers
	
	Registry Value Registry Data Description
	Increment numbers beginning with 1 REG_SZ On = text of Permitted Manager #x; Off
	= value is removed from registry
	NOTE: There may be multiple entries in this subkey.
	
	Public Community Traps:
	Category: System
	Subcategory: SNMP
	Selection: Traps for public community
	Key: HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services
	\SNMP\Parameters\TrapConfiguration\Public
	
	Registry Value Registry Data Description
	Increment numbers beginning with 1 REG_SZ On = text of Trap Configuration #x; Off
	= value is removed from registry
	NOTE: There may be multiple entries in this subkey.
	
	Run Command:
	Category: System
	Subcategory: Run
	Selection: Run
	Description: Allows one or more applications to be run when the user logs on
	interactively.
	Key: HKEY_LOCAL_MACHINE\Software\Microsoft\Windows\CurrentVersion\Run
	
	Registry Value Registry Data Description
	Application Text Name REG_SZ On = executable text name (for example, Notepad is
	Notepad.exe) which may include parameters; Off = value is removed from the
	registry
	NOTE: There may be multiple entries in this subkey.
	
	Drive Shares - Workstation:
	Category: Windows NT Network
	Subcategory: Sharing
	Selection: Create hidden drive shares (workstation)
	Description: When enabled, creates administrative shares for physical drives.
	These shares were created automatically under Windows NT 3.51. This policy
	setting gives administrators the ability to control this feature. This setting
	is specific to Windows NT Workstation.
	Key: HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\LanManServer
	\Parameters
	
	Registry Value Registry Data Description
	AutoShareWks REG_DWORD NT Workstation specific: Off = 0; On = 1
	
	Drive Shares - Server:
	Category: Windows NT Network
	Subcategory: Sharing
	Selection: Create hidden drive shares (server)
	Description: When enabled, creates the administrative shares for physical drives.
	These shares were created automatically under Windows NT 3.51. This policy
	setting gives administrators the ability to control this feature. This setting
	is specific to Windows NT Server.
	Key: HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\LanManServer
	\Parameters
	
	Registry Value Registry Data Description
	AutoShareServer REG_DWORD NT Server specific: Off = 0; On = 1
	
	Printer Browse Thread:
	Category: Windows NT Printers
	Subcategory: Sharing
	Selection: Disable browse thread on this computer
	Description: When this option is enabled, the print spooler does not send shared
	printer information to other print servers.
	Key: HKEY_LOCAL_MACHINE\System\CurrentControlSet\Control\Print
	
	Registry Value Registry Data Description
	DisableServerThread REG_DWORD Off = 0 or value is removed from registry; On = 1
	
	Server Scheduler:
	Category: Windows NT Printers
	Subcategory: Sharing
	Selection: Scheduler priority
	Key: HKEY_LOCAL_MACHINE\System\CurrentControlSet\Control\Print
	
	Registry Value Registry Data Description
	SchedulerThreadPriority REG_DWORD Above normal = 1; Normal = 0, Less than normal
	= ffffffff
	
	Error Beep:
	Category: Windows NT Printers
	Subcategory: Sharing
	Selection: Beep for error enabled
	Description: Enables beeping (every 10 seconds) when a remote job error occurs on
	a print server.
	Key: HKEY_LOCAL_MACHINE\System\CurrentControlSet\Control\Print
	
	Registry Value Registry Data Description
	BeepEnabled REG_DWORD Off = 0; On = 1
	
	Authentication Retries:
	Category: Windows NT Remote Access
	Selection: Max number of unsuccessful authentication retries
	Description: Specifies the number of times authentication will be attempted for a
	user.
	Key: HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\RemoteAccess
	\Parameters
	
	Registry Value Registry Data Description
	AuthenticateRetries REG_DWORD Off = value is removed, On =Number of retries in
	hexadecimal. Decimal = 1-10; default = 2.
	
	Authentication Time Limit:
	Category: Windows NT Remote Access
	Selection: Max time limit for authentication
	Description: Defines the maximum time limit in seconds for authentication to
	occur.
	Key: HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\RemoteAccess
	\Parameters
	
	Registry Value Registry Data Description
	AuthenticateTime REG_DWORD Off = value is removed , On = time in seconds in
	hexadecimal. Decimal = 20-600; default = 120.
	
	RAS Call-back Interval:
	Category: Windows NT Remote Access
	Selection: Wait interval for callback
	Description: Specifies the time in seconds that Windows NT will wait before
	initiating the callback from a RAS dial-in user.
	Key: HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\RemoteAccess
	\Parameters
	
	Registry Value Registry Data Description
	CallbackTime REG_DWORD Off = value is removed, On = time in seconds in
	hexadecimal. Decimal = 2-12; default = 2.
	
	RAS Auto-disconnect:
	Category: Windows NT Remote Access
	Selection: Auto disconnect
	Description: Specifies the amount of idle time in minutes to wait before
	disconnecting the RAS client.
	Key: HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\RemoteAccess
	\Parameters
	
	Registry Value Registry Data Description
	AutoDisconnect REG_DWORD Off = value is removed, On = time in minutes in
	hexadecimal. Decimal: minimum = 0; default = 20.
	
	Shared Programs Folder Path:
	Category: Windows NT Shell
	Subcategory: Custom shared folders
	Selection: Custom shared Programs folder
	Description: Specifies the UNC path for the folder to use when displaying
	folders, files, and shortcuts below the division line (common groups) when the
	user selects Programs from the Start menu.
	Key: HKEY_LOCAL_MACHINE\Software\Microsoft\Windows\CurrentVersion \Explorer\User
	Shell Folders
	
	Registry Value Registry Data Description
	Common Programs REG_EXPAND_SZ (Note: REG_SZ can be used if no variables exist.)
	Off = value is removed from registry; On = text of UNC path to folder.
	Default = %SystemRoot%\Profiles\All Users\Start Menu\Programs
	
	Shared Desktop Icons Path:
	Category: Windows NT Shell
	Subcategory: Custom shared folders
	Selection: Custom shared desktop icons
	Description: Specifies the UNC path the folder is to use when displaying the
	folders, files, and shortcuts the user receives as part of the desktop.
	Key: HKEY_LOCAL_MACHINE\Software\Microsoft\Windows\CurrentVersion \Explorer\User
	Shell Folders
	
	Registry Value Registry Data Description
	Common Desktop REG_EXPAND_SZ (NOTE: REG_SZ can be used if no variables xist.) Off
	= value is removed from registry; On = text of UNC path to folder.
	Default = %SystemRoot%\Profiles\All Users\Desktop.
	
	Shared Start Menu Path:
	Category: Windows NT Shell
	Subcategory: Custom shared folders
	Selection: Custom shared Start menu
	Description: Specifies the UNC path the folder is to use when displaying the
	folders, files, and shortcuts the user receives as part of the Start menu.
	Key: HKEY_LOCAL_MACHINE\Software\Microsoft\Windows\CurrentVersion \Explorer\User
	Shell Folders
	
	Registry Value Registry Data Description
	Common Start Menu REG_EXPAND_SZ (Note: REG_SZ can be used if no variables
	exist.)
	Off = value is removed from registry, On = text of UNC path to folder.
	Default = %SystemRoot%\Profiles\All Users\Start Menu
	
	Shared Startup Folder Path:
	Category: Windows NT Shell
	Subcategory: Custom shared folders
	Selection: Custom shared Startup folder
	Description: Specifies the UNC path the folder is to use to find folders, files,
	and shortcuts that should be started when the user logs on.
	Key: HKEY_LOCAL_MACHINE\Software\Microsoft\Windows\CurrentVersion \Explorer\User
	Shell Folders
	
	Registry Value Registry Data Description
	Common Startup REG_EXPAND_SZ (NOTE: REG_SZ can be used if no variables exist.)
	Off = value is removed from registry, On = text of UNC path to folder.
	Default = %SystemRoot%\Profiles\All Users\Start Menu\Programs\Startup
	
	Logon Banner:
	Category: Windows NT System
	Subcategory: Logon
	Selection: Logon banner
	Description: Before the user logs on, displays a custom dialog box with text.
	Key: HKEY_LOCAL_MACHINE\Software\Microsoft\Windows NT\CurrentVersion \Winlogon
	
	Registry Value Registry Data Description
	LegalNoticeCaption REG_SZ Off = value is removed; On = text of caption
	LegalNoticeText REG_SZ Off = value is removed; On = text of notice
	
	Logon Dialog Shut Down Button:
	Category: Windows NT System
	Subcategory: Logon
	Selection: Enable shutdown from Authentication dialog box
	Description: Enables or disables the Shut Down button on the logon dialog
	window.
	Key: HKEY_LOCAL_MACHINE\Software\Microsoft\Windows NT\CurrentVersion \Winlogon
	
	Registry Value Registry Data Description
	ShutdownWithoutLogon REG_SZ Off = 0; On = 1
	
	Logon Name Display:
	Category: Windows NT System
	Subcategory: Logon
	Selection: Do not display last logged on user name
	Description: Enables or disables display of the last logged on user name when the
	user presses CTRL+ALT+DEL and the logon dialog is displayed.
	Key: HKEY_LOCAL_MACHINE\Software\Microsoft\Windows NT\CurrentVersion \Winlogon
	
	Registry Value Registry Data Description
	DontDisplayLastUserName REG_SZ Off = 0; On = 1
	
	Logon Scripts:
	Category: Windows NT System
	Subcategory: Logon
	Selection: Run logon scripts synchronously
	Description: Determines whether the shell waits for the logon script to complete
	or not. If the value is 0, the logon script is run during the startup of the
	shell and allows items in the Startup group to start. If the value is 1, the
	logon script completes before the shell or any items in the Startup group are
	started. If this value is also set in the User section, this value takes
	precedence.
	Key: HKEY_LOCAL_MACHINE\Software\Microsoft\Windows NT\CurrentVersion \Winlogon
	
	Registry Value Registry Data Description
	RunLogonScriptSync REG_SZ Off = 0 or value is removed; On = 1
	
	Long File Names:
	Category: Windows NT System
	Subcategory: File system
	Selection: Do not create 8.3 file names for long file names
	Key: HKEY_LOCAL_MACHINE\System\CurrentControlSet\Control\FileSystem
	
	Registry Value Registry Data Description
	NtfsDisable8dot3NameCreation REG_DWORD Off = 0 or value is removed; On = 1
	
	Extended Characters in 8.3 File Names:
	Category: Windows NT System
	Subcategory: File system
	Selection: Allow extended characters in 8.3 file names
	Description: Short file names with extended characters may not be viewable on
	computers that do not have the same character code page.
	Key: HKEY_LOCAL_MACHINE\System\CurrentControlSet\Control\FileSystem
	
	Registry Value Registry Data Description
	NtfsAllowExtendedCharacterIn8dot3Name REG_DWORD Off = 0 or value is removed; On =
	1
	
	Read Only Files - Last Access Time:
	Category: Windows NT System
	Subcategory: File system
	Selection: Do not update last access time
	Description: For files that are only to be read, specifies do not update the last
	access time. (This increases the file system's performance.)
	Key: HKEY_LOCAL_MACHINE\System\CurrentControlSet\Control\FileSystem
	
	Registry Value Registry Data Description
	NtfsDisableLastAccessUpdate REG_DWORD Off = 0 or value is removed; On = 1
	
	Cached Roaming Profiles
	Category: Windows NT User Profiles
	Selection: Delete cached copies of roaming profiles
	Description: After a user logs off from an interactive session, if this value is
	enabled, the locally cached version of the roaming User Profile is deleted.
	Key: HKEY_LOCAL_MACHINE\Software\Microsoft\Windows NT\CurrentVersion\Winlogon
	
	Registry Value Registry Data Description
	DeleteRoamingCache REG_DWORD Off = 0 or value is removed; On = 1
	
	Slow Network Detection
	Category: Windows NT User Profiles
	Selection: Automatically detect slow network connections
	Description: Enables or disables detection of a slow network.
	Key: HKEY_LOCAL_MACHINE\Software\Microsoft\Windows NT\CurrentVersion\Winlogon
	
	Registry Value Registry Data Description
	SlowLinkDetectEnabled REG_DWORD Off = 0 or value is removed; On = 1
	
	Slow Network Timeout
	Category: Windows NT User Profiles
	Selection: Slow network connection timeout
	Description: Specifies the amount of time in milliseconds that Windows NT waits
	before a slow network is determined.
	Key: HKEY_LOCAL_MACHINE\Software\Microsoft\Windows NT\CurrentVersion \Winlogon
	
	Registry Value Registry Data Description
	SlowLinkTimeOut REG_DWORD Off = 0 or value is removed; On = time in milliseconds
	in hexadecimal. Decimal: 1-120000; default = 2000.
	
	Dialog Box Timeout:
	Category: Windows NT User Profiles
	Selection: Timeout for dialog boxes
	Description: When the user is presented with a dialog box requesting User Profile
	information, this specifies the amount of time in seconds before the dialog box
	is closed and the default is accepted.
	Key: HKEY_LOCAL_MACHINE\Software\Microsoft\Windows NT\CurrentVersion \Winlogon
	
	Registry Value Registry Data Description
	Show REG_DWORD Off = 0 or value is removed; On = time in seconds in hexadecimal.
	Decimal = 0-600; default = 30.
	
	REGISTRY ENTRIES NOT INCLUDED IN THE SYSTEM POLICY EDITOR:
	
	The following section describes the locations and values for useful registry
	entries that are available in the operating system, but not available in the
	System Policy Editor.
	
	Autorun:
	Category: Windows NT Shell
	Subcategory: Removable media
	Description: Determines whether the Autorun feature is enabled on each drive
	connected to the system. When Autorun is enabled, media is started automatically
	when it is inserted in the drive. This value is comprised of 32 bits. The lower
	26 bits each represent a drive, with the lowest (right- most) bit representing
	drive A and the 26th bit from the right representing drive Z. If a bit is set to
	0, the autorun feature is enabled on that drive. If a bit is set to 1, the
	autorun feature is disabled on that drive.
	
	For example, if the value of this entry is 0x8 (1000 binary), autorun is disabled
	on drive D. Note that a value of 1 in the bit representing the CD- ROM drive
	takes precedence over the value of Autorun.
	Key: HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion
	\Policies\Explorer
	
	Registry Value Registry Data Description
	NoDriveAutoRun REG_DWORD 0x0 - 0x3FFFFFF
	
	Start Banner:
	Category: Windows NT Shell
	Subcategory: Start banner
	Description: Hides the arrow and "Click here to start" caption that appears on
	the taskbar when you start Windows NT.
	Key: HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion
	\Policies\Explorer
	
	Registry Value Registry Data Description
	NoStartBanner REG_DWORD 0 = enabled; 1= disabled.
	
	Additional query words: wpaper
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSBServSearch kbSBServ400 kbSBServ400a
	Version           : :4.0,4.0a
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
