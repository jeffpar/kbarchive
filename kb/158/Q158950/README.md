---
layout: page
title: "Q158950: Auto Detection of Identical Network Adapters Finds Only One"
permalink: /kb/158/Q158950/
---

## Q158950: Auto Detection of Identical Network Adapters Finds Only One

{% raw %}

	Article: Q158950
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbhw kbnetwork kbsetup kbHardware
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you have two ISA network adapters of the same model and type installed,
	Setup's automatic detection finds only one adapter. If you click the Find Next
	button, the second adapter is not found.
	
	RESOLUTION
	==========
	
	To resolve this issue, use either of the following methods:
	
	1. During Setup, after the first adapter is detected, click Next to view the
	  settings for the first network adapter.
	
	2. Click Find Next. This should display the settings for the second network
	  adapter and allow you to install it.
	
	-or-
	
	After Setup is finished, use the Network tool in Control Panel to manually add
	the second adapter.
	
	MORE INFORMATION
	================
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbhw kbnetwork kbsetup kbHardware 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : 4.0
	
	=============================================================================
	

{% endraw %}
