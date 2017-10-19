---
layout: page
title: "Q207303: How to Distribute Modifications to Default Regional Settings"
permalink: /kb/207/Q207303/
---

## Q207303: How to Distribute Modifications to Default Regional Settings

	Article: Q207303
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): kbenv win95
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	This article describes how to export a registry key with new default regional
	settings and then import those settings on other Windows 95-based computers.
	
	MORE INFORMATION
	================
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Regional Settings.
	
	3. Make the appropriate changes to the settings, click OK, and the close Control
	  Panel.
	
	4. Use Registry Editor to export the following key to a file named
	  Regional.reg:
	
	  HKEY_USERS\.Default\Control Panel\International
	
	5. Copy the Regional.reg file to other computers, double-click the file to load
	  the new settings, and then restart the computer to cause the new settings to
	  take effect.
	
	NOTE: If the above registry key does not reflect the changes you made to the
	regional settings, you may have user profiles enabled on the computer. If user
	profiles are enabled, the changed default regional settings are not maintained
	after the computer is rebooted. For more information about this issue, see the
	following article in the Microsoft Knowledge Base:
	
	  Q175086 Regional Settings Specified in User Profile Are Not Applied
	
	======================================================================
	Keywords          : kbenv win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95
	Issue type        : kbhowto
	
	=============================================================================
	
