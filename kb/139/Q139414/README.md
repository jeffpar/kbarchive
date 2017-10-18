---
layout: page
title: "Q139414: Bad IP Address When Using HOSTS or LMHOSTS"
permalink: kb/139/Q139414/
---

## Q139414: Bad IP Address When Using HOSTS or LMHOSTS

	Article: Q139414
	Product(s): Microsoft Windows NT
	Version(s): 3.1,3.11,3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.1, 3.5, 3.51, 4.0 
	- Microsoft Windows NT Workstation versions 3.1, 3.5, 3.51, 4.0 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft TCP/IP-32 for Windows for Workgroups, version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may receive Bad IP address "name" when trying to ping a NetBIOS or HOST
	name.
	
	CAUSE
	=====
	
	Possible causes include:
	
	- The LMHOSTS or HOSTS file was saved as a Unicode file.
	
	- Entry does not exist or is incorrect in LMHOSTS, HOSTS, or Windows Internet
	  Name service (WINS).
	
	- LMHOSTS lookup is not enabled.
	
	RESOLUTION
	==========
	
	1. Load LMHOSTS or HOSTS file in Notepad and save as a standard text file
	  instead of a Unicode file.
	
	2. Be sure the entry does exist in LMHOSTS, HOSTS, or is registered with your
	  WINS server. If using static mapping on WINS server be sure the entry it is
	  correct.
	
	3. Check your settings in Control Panel Network (TCPIP/Advanced) to make sure
	  Enable LMHOSTS Lookup is checked.
	
	Additional query words: prodnt wfw wfwg
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNTS310search kbAudDeveloper kbWinNT310Search kbWinNTW310Search kbTCPIPSearch kbZNotKeyword3 kbTCPIP311
	Version           : :3.1,3.11,3.5,3.51,4.0
	
	=============================================================================
	
