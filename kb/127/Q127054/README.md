---
layout: page
title: "Q127054: Loopback Functionality Does Not Work with Miniport Drivers"
permalink: /kb/127/Q127054/
---

## Q127054: Loopback Functionality Does Not Work with Miniport Drivers

{% raw %}

	Article: Q127054
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run an SPX sockets application on a token ring network with miniport
	drivers, the loopback functionality with NWLink does not work; the SPX sockets
	application is not able to connect to shares on the local system.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	When you develop an NDIS 3.0 driver, half of the code is common for all NDIS
	drivers and the other half is specific to hardware. Miniport is an extension to
	the NDIS 3.0 specification which allows developers to write code specific to the
	hardware and merge the common interface to the NDIS wrapper.
	
	Additional query words: prodnt NDIS IPX mini port
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	
	=============================================================================
	

{% endraw %}
