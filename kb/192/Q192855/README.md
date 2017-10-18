---
layout: page
title: "Q192855: System Preparation Tool Does Not Save Desktop Preferences"
permalink: kb/192/Q192855/
---

## Q192855: System Preparation Tool Does Not Save Desktop Preferences

	Article: Q192855
	Product(s): Microsoft Windows NT
	Version(s): 2000,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows 2000 Advanced Server 
	- Microsoft Windows 2000 Server 
	- Microsoft Windows 2000 Professional 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you configure a Windows NT-based computer by using the System Preparation
	(Sysprep) tool, your desktop preferences are not saved, except for the local
	administrator preferences.
	
	CAUSE
	=====
	
	This problem can occur when you use Sysprep to configure a Windows NT- based
	computer. Sysprep may delete any locally stored profile, except the profile of
	the administrator.
	
	RESOLUTION
	==========
	
	If you do not use roaming profiles and you need to have the same desktop
	preferences as the administrator:
	
	1. On the computer with the source installation files, log on as the local
	  administrator.
	
	2. Select the desktop preferences for use as the default settings for all users.
	
	3. Click Start, point to Settings, and then click Control Panel.
	
	4. Double-click System, and then click User Profiles.
	
	5. Click Administrator, and then click Copy To.
	
	6. In the Copy Profile To box, type the following line:
	
	  %systemroot%\profiles\default user
	
	7. Click Change.
	
	8. In the List Names From box, click the name of the current computer.
	
	9. Click Everyone, Click Add, and then click OK.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Windows NT 4.0 System
	Preparation tool.
	
	MORE INFORMATION
	================
	
	The desktop preferences are stored in a Ntuser.dat file that is specific to each
	user. When you run Sysprep on a computer, it changes the Security Identifiers
	(SIDs) on the local Ntuser.dat file for only the local administrator, and then
	any other Ntuser.dat files for users other than the administrator are deleted.
	
	
	When you log on for the first time, Windows NT checks for a local profile in the
	%SystemRoot%\Profiles\%Username% folder. If Windows NT does not find one, a
	local profile is created by using defaults from the %SystemRoot%\ Profiles\All
	Users folder and the %SystemRoot%\Profiles\Default User folder and your SID is
	appended to the new Ntuser.dat file.
	
	Therefore, when the administrator logs on, Windows NT uses the profile of the
	administrator that is located in the %SystemRoot%\Profiles folder and the SID in
	the Ntuser.dat file matches.
	
	Additional query words: image duplicate cloning
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000Serv kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbwin2000ServSearch kbwin2000Search kbwin2000ProSearch kbwin2000Pro kbWinAdvServSearch
	Version           : :2000,4.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
