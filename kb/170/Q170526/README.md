---
layout: page
title: "Q170526: User Settings and Profiles Missing After Full Reinstallation"
permalink: /kb/170/Q170526/
---

## Q170526: User Settings and Profiles Missing After Full Reinstallation

	Article: Q170526
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbenv kbsetup
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you reinstall Microsoft Windows NT Workstation version 4.0, all your
	settings, profiles, and files saved to your desktop may be missing.
	
	CAUSE
	=====
	
	This behavior can occur when you perform a full Windows NT Workstation
	installation, rather than an upgrade, over an existing installation of Windows
	NT Workstation.
	
	RESOLUTION
	==========
	
	Re-create your settings and profiles in the new installation.
	
	MORE INFORMATION
	================
	
	When you perform a full installation of Windows NT Workstation, all user
	registry settings are removed. The full installation process assumes that there
	is no Windows NT folder and therefore does not look for settings to move to the
	new installation; all registry settings are rewritten. The Profiles folder is
	re-created to include only the files and folders that are present in a new
	installation. Because files saved to the desktop are saved in a folder in the
	Profiles folder, the files are deleted. To preserve your settings, Profiles
	folder, and any information contained in the Profiles folder, you must choose
	the Upgrade option during Setup when you reinstall Windows NT Workstation.
	
	The following folders may be present in the Winnt\Profiles\<name> folder
	
	- Application Data
	
	- Desktop
	
	- Favorites
	
	- NetHood
	
	- Personal
	
	- PrintHood
	
	- Recent
	
	- SendTo
	
	- Start Menu
	
	- Templates
	
	where <name> is the name you use to log in to Windows NT.
	
	======================================================================
	Keywords          : kbenv kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search
	Version           : 4.0
	
	=============================================================================
	
