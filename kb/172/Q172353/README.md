---
layout: page
title: "Q172353: Setting the NIC Driver Startup Value to SYSTEM Causes STOP 0X1E"
permalink: /kb/172/Q172353/
---

## Q172353: Setting the NIC Driver Startup Value to SYSTEM Causes STOP 0X1E

{% raw %}

	Article: Q172353
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The startup value for a network adapter in Control Panel Devices should be set
	to AUTOMATIC. Setting the value to SYSTEM or BOOT may cause the system to trap
	with a STOP:0x0000001E upon system restart.
	
	Behavior may vary from one network card to another.
	
	MORE INFORMATION
	================
	
	You may use the LastKnownGood configuration to get into the system as this will
	use the configuration prior to the changed setting, or remove the network card
	from the system. This will cause the driver to fail to load and once back into
	the system, use the default startup value as configured with adapter
	installation.
	
	Additional query words: 0x1E
	======================================================================
	Keywords          : kbenv 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	
	=============================================================================
	

{% endraw %}
