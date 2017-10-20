---
layout: page
title: "Q150271: Duplicate Name on the Network error message"
permalink: /kb/150/Q150271/
---

## Q150271: Duplicate Name on the Network error message

{% raw %}

	Article: Q150271
	Product(s): Microsoft Windows NT
	Version(s): 3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A DHCP client receives a "Duplicate name on the network" error message when
	logging on to the network.
	
	Also, the Enable IP Routing check box in the TCP/IP properties of the Network
	Control Panel tool is checked, but is unavailable and cannot be cleared.
	
	CAUSE
	=====
	
	If Remote Access Service (RAS) has been installed, in addition to another
	network protocol, and then removed or disabled, the registry entries may not be
	automatically removed.
	
	RESOLUTION
	==========
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	1. If RAS is still installed, remove it using the Network Control Panel tool,
	  under Installed Network Software.
	
	2. Start Registry Editor (Regedt32.exe) and go to the following subkey:
	
	  \HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services
	  \Tcpip\Parameters
	
	3. Change the 'EnableIpRouting' value to 0.
	
	4. Restart the computer.
	
	The computer will now only request an IP address for the installed network
	interface.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5 and 3.51.
	We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : :3.5,3.51,4.0
	
	=============================================================================
	

{% endraw %}
