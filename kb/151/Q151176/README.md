---
layout: page
title: "Q151176: Policy Registry Entries (Default User)"
permalink: kb/151/Q151176/
---

## Q151176: Policy Registry Entries (Default User)

	Article: Q151176
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 20-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article outlines the locations and values for registry entries that are
	written to a Windows NT workstation or Windows NT server when the administrator
	makes modifications via the System Policy Editor. To run this application,
	select Start\Programs\AdministrativeTools(Common)\System Policy Editor. Knowing
	the location of these registry settings will assist you in troubleshooting
	problems. This article is specific to the options found in the <User>
	section of the System Policy Editor. The format for the information below is:
	
	(1st line)   The location in the System Policy Editor being described
	(2nd line)   Key: <path to subkey where values will be located>
	(indented text)   One or more values that will appear for a given subkey
	                 and their descriptions under System Policy Editor.
	
	MORE INFORMATION
	================
	
	For <user>\Control Panel\Display:
	Key: My Computer\HKEY_CURRENT_USER\Software\ 
	    Microsoft\Windows\CurrentVersion\Policies\System
	
	     NoDispAppearancePage       Restrict Display - Hide Appearance Tab
	     NoDispBackgroundPage       - Hide Background Tab
	     NoDispCPL                  - Deny Access to display icon
	     NoDispScrSavPage           - Hide Screen Saver tab
	     NoDispSettingsPage         - Hide Settings tab
	
	For <user>\Desktop:
	Key: My Computer\HKEY_CURRENT_USER\Control Panel\ 
	
	Subkey: Desktop
	
	     Wallpaper        Wallpaper
	     TileWallpaper    - Tile Wallpaper
	
	Subkey: Appearance
	
	     Current          Color scheme
	
	For <user>\Shell\Custom folders:
	Key: My Computer\HKEY_CURRENT_USER\Software\ 
	    Microsoft\Windows\CurrentVersion\Explorer\User Shell Folders
	
	     Programs         Custom Programs folder
	     Desktop          Custom desktop icons
	     Startup          Custom Startup folder
	     Start Menu       Custom Start menu
	     NetHood          Custom Network Neighborhood
	
	
	For <user>\Shell\Restrictions:
	Key: My Computer\HKEY_CURRENT_USER\Software\ 
	    Microsoft\Windows\CurrentVersion\Policies\ 
	
	Subkey: Explorer
	
	
	     NoClose          Disable Shut Down command
	     NoDesktop        Hide all items on desktop
	     NoDrives         Hide drives in My Computer
	     NoFind           Remove Find command from Start menu
	     NoNetHood        Hide Network Neighborhood
	     NoRun            Remove Run command from Start menu
	     NoSaveSettings   Don't save settings at exit
	     NoSetFolders     Remove folders from Settings @ Start menu
	     NoSetTaskbar     Remove Taskbar from Settings / Start menu
	
	Subkey: Network
	
	    NoEntireNetwork      No Entire Network in Net Neighborhood
	    NoWorkgroupContents  No workgroup contents
	
	For <user>\System\Restrictions:
	Key: MyComputer\HKEY_CURRENT_USER\Software\ 
	    Microsoft\Windows\CurrentVersion\Policies\ 
	
	Subkey: Explorer
	
	     RestrictRun          Run only allowed Windows applications
	
	
	Subkey: Explorer\RestrictRun
	
	  as   1 with data of  "<application>"
	       2 with data of  "<application2>", etc.
	
	For <user>\Windows NT Shell\Custom Folders:
	Key: MyComputer\HKEY_CURRENT_USER\Software\ 
	    Microsoft\Windows\CurrentVersion\Explorer\User Shell Folders
	
	      Desktop       Custom Desktop icons
	      NetHood       Customer Network Neighborhood
	      Programs      Custom Programs folder
	      Start Menu    Custom Start menu
	      Startup       Custom Startup folder
	
	
	For <user>\Windows NT System:
	Key: MyComputer\HKEY_CURRENT_USER\Software\ 
	    Microsoft\Windows NT\CurrentVersion\Winlogon
	
	     ParseAutoexec        Parse Autoexec.bat
	
	Additional query words: ntregistry
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Issue type        : kbinfo
	
	=============================================================================
	
