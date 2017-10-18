---
layout: page
title: "Q107060: Windows NT NBTSTAT -R vs. LAN Manager ADDNAME"
permalink: kb/107/Q107060/
---

## Q107060: Windows NT NBTSTAT -R vs. LAN Manager ADDNAME

	Article: Q107060
	Product(s): Microsoft Windows NT
	Version(s): 3.1 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The ADDNAME utility that ships with LAN Manager TCP/IP allows you to enter LAN
	Manager NetBIOS names and their IP addresses into the TCP/IP name cache without
	modifying the LMHOSTS file. The same functionality is available in Windows NT by
	the NBTSTAT utility.
	
	To add a new NetBIOS name IP address in Windows NT, do the following:
	
	1. Edit the file <winnt root>\SYSTEM32\DRIVERS\ETC\LMHOSTS.
	
	2. Add the new IP address and NetBIOS name.
	
	3. Put #PRE at the end of the line if you want the address to be cached into
	  memory. Otherwise, Windows NT will search the LMHOSTS file if the name is not
	  found in the cache which could take longer.
	
	4. Run NBTSTAT -R.
	
	The -R parameter rereads the LMHOSTS file and adds #PRE lines into the name
	cache.
	
	REFERENCES
	==========
	
	Windows NT "TCP/IP Reference"
	
	Additional query words: prodnt NTAS LM PING
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTW310 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.1 4.0
	
	=============================================================================
	
