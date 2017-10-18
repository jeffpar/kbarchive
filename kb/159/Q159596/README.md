---
layout: page
title: "Q159596: Enabling The Prompt for Multiple Profiles in Windows Messaging"
permalink: kb/159/Q159596/
---

## Q159596: Enabling The Prompt for Multiple Profiles in Windows Messaging

	Article: Q159596
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	By default, Windows Messaging starts with only the profile you select using the
	Control Panel Mail utility. It is possible, however, to enable Windows Messaging
	to prompt you for a different profile to use on startup. This is configured not
	with the Control Panel Mail utility, but in the Options dialog box in Windows
	Messaging itself.
	
	MORE INFORMATION
	================
	
	You can create Windows Messaging profiles with the Control Panel Mail utility
	(the Mail icon found in Control Panel when the Windows Messaging component is
	installed). This tool allows you to pick one of the created profiles at a time
	to use with Windows Messaging. To do this, perform the following steps:
	
	1. Click the Start button, point to Settings, and then click Control Panel.
	
	2. Double-click the Mail icon.
	
	3. Click Show Profiles.
	
	4. Select the profile to use from the list "When starting Windows Messaging, use
	  this profile".
	
	5. Click Apply, and then click Close.
	
	There is no option in the Control Panel Mail utility to have Windows Messaging
	prompt you at start up for which profile to use; however, you can configure such
	an option by performing the following steps:
	
	1. Click the Start button, point to Settings, and click Control Panel.
	
	2. Double-click the Mail icon and click Options from the Tools menu of Windows
	  Messaging.
	
	3. On the General properties page, click the "Prompt for a profile to be used"
	  option in the frame entitled "When starting Windows Messaging".
	
	4. Click the Apply, and then click Close.
	
	With this feature enabled, you receive a "Choose Profile" prompt when starting
	Windows Messaging, allowing you to choose which profile to use for the current
	Windows Messaging session. Notice also that you have the option in this prompt
	to create new profiles, as well as other profile options.
	
	Additional query words: exchange client
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbinfo
	
	=============================================================================
	
