---
layout: page
title: "Q206145: Random Characters Appear in Network Adapters List"
permalink: kb/206/Q206145/
---

## Q206145: Random Characters Appear in Network Adapters List

	Article: Q206145
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbenv kbhw kbnetwork kbHardware
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you 
	modify the registry, make sure to back it up and make sure that you understand how to restore 
	the registry if a problem occurs. For information about how to back up, restore, and edit the 
	registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	When you are viewing network adapters using the Network tool in Control Panel,
	you may see random or unintelligible characters in the list of adapters. You may
	also see the characters when you are adding a new network adapter.
	
	CAUSE
	=====
	
	This behavior can occur if there is no supported network adapter installed from
	the Windows NT CD-ROM or a third-party manufacturer, or if there is a null
	adapter entry in the corresponding Oemnadx.inf file.
	
	RESOLUTION
	==========
	
	A supported network adapter with appropriate adapter listings in the .inf file
	does not display the random characters. Consult the manufacturer of the
	installed network adapter for a supported or updated driver.
	
	
	MORE INFORMATION
	================
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	You can also edit the registry to produce readable characters. The Adapters
	dialog box in Network properties contains two fields. The first, Network
	Adapters, displays the list of installed adapters. These strings can be modified
	in the following key:
	
	  HKEY_LOCAL_MACHINE\Software\Microsoft\Windows
	  NT\CurrentVersion\NetworkCards\<X>
	
	  Value: Title
	  Type: REG_SZ
	
	<X> is the number of the installed adapter.
	
	The second field, Item Notes, displays descriptive text about the installed
	network adapters. These values can be edited at the following location in the
	registry:
	
	  HKEY_LOCAL_MACHINE\Software\Microsoft\Windows
	  NT\CurrentVersion\NetworkCards\<X>
	
	  Value: Description
	  Type: REG_SZ
	
	REFERENCES
	==========
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q131303 Latest Windows 2000 and Windows NT Hardware Compatibility List (HCL)
	
	  Q142865 Microsoft Support Policy on Hardware Not On Windows NT HCL
	
	  Q170995 How to Install Third-Party Network Adapter Drivers
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbhw kbnetwork kbHardware 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	
