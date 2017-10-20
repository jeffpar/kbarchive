---
layout: page
title: "Q122898: DEC Pathworks Problems with 3COM Network Adapters"
permalink: /kb/122/Q122898/
---

## Q122898: DEC Pathworks Problems with 3COM Network Adapters

{% raw %}

	Article: Q122898
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	3.10 3.50
	
	WINDOWS
	
	kbnetwork kbbug3.10 kbbug3.50
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Server version 3.5 
	- Microsoft Windows NT Workstation version 3.5 
	-------------------------------------------------------------------------------
	
	The DEC Pathworks for Windows NT network does not function properly under
	Windows NT or Windows NT Advanced Server version 3.1 or Windows NT 3.5 with
	a 3COM Etherlink III network adapter. You might have problems installing
	the software, or there may be messages logged in the Event Viewer.
	
	DEC Pathworks for Windows NT needs to be able to perform a "Set Station
	Address" to the 3COM Etherlink III card. This ability is required, because
	DECnet expects that card to change it's address to AA-00-00-xx-xx-xx,
	(where the xx-xx-xx is the actual DECNET node ID) and not the physical
	hardware address of the card. With the current 3COM drivers that Microsoft
	ships, this function is not possible. (Note: This problem may also occur
	with other network adapters whose drivers do not enable this
	functionality). There is currently no workaround.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT and Windows NT
	Advanced Server version 3.1 and Windows NT 3.5. We are researching this problem
	and will post new information here in the Microsoft Knowledge Base as it becomes
	available.
	
	Additional query words: prodnt 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW310 kbWinNTSsearch kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	
	=============================================================================
	

{% endraw %}
