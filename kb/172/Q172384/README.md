---
layout: page
title: "Q172384: WINS Database Displays Hyphens Instead of NetBIOS Suffix"
permalink: kb/172/Q172384/
---

## Q172384: WINS Database Displays Hyphens Instead of NetBIOS Suffix

	Article: Q172384
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you view the Windows Internet Name Service (WINS) database using WINS
	Manager, you may notice the sixteenth character representation of each NetBIOS
	name is a hyphen such as the following:
	
	  <computer name> - 102.54.94.97
	
	What you expect to see is a hexidecimal value such as the following:
	
	  <computer name>[00h] 102.54.94.97
	
	CAUSE
	=====
	
	WINS Manager is configured to display the database using LANManager Compatible
	conventions.
	
	RESOLUTION
	==========
	
	To resolve this issue, enable the LANManager Compatible feature using the
	following steps:
	
	1. In WINS Manager, click Options, and then click Preferences.
	
	2. Click LAN Manager-Compatible, to enable the option.
	
	3. Click OK.
	
	MORE INFORMATION
	================
	
	From the context-sensitive help in WINS Manager for Computer Names:
	
	  Specifies whether computer names will adhere to the Lan Manager naming
	  convention, where computer names are limited to 15 characters, as opposed to
	  16-character NETBIOS names used by other sources. In LAN Manager names, the
	  16th byte is used to indicate whether the device is a workstation, messenger,
	  and so on.
	
	  Select the LAN Manager Compatible check box if you want to use this
	  convention. Note that WIndows NT follows the LAN Manager convention, so this
	  check box should be selected unless your network accepts NetBIOS names from
	  other sources.
	
	Additional query words: dash space dashes missing services service
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51,4.0
	Issue type        : kbinfo
	
	=============================================================================
	
