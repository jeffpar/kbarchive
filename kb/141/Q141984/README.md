---
layout: page
title: "Q141984: XCLN: Location of User Profiles"
permalink: /kb/141/Q141984/
---

## Q141984: XCLN: Location of User Profiles

	Article: Q141984
	Product(s): Microsoft Exchange
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 12-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	
	IMPORTANT: This article contains information about the registry. Before you
	edit the registry, you should first make a backup copy of the registry
	files (System.dat and User.dat). Both are hidden files in the Windows
	folder.
	
	SUMMARY
	=======
	
	This article describes the location of Microsoft Exchange, version 4.0, client
	User Profiles.
	
	MORE INFORMATION
	================
	
	
	When using the Microsoft Exchange client for Windows 95, the user profiles are
	saved in the Registry under the following key:
	
	HKEY_CURRENT_USER\SOFTWARE\MICROSOFT\WINDOWS MESSAGING SUBSYSTEM\PROFILES
	
	
	NOTE: The Microsoft Exchange user profiles contain binary information and should
	not be modified in the registry. Editing the profiles this way can cause
	irreparable damage to the profile. It will then have to be deleted and
	recreated, resulting in the loss of all settings.
	
	
	Additional query words: user profiles
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : 4.0
	Issue type        : kbhowto
	
	=============================================================================
	
