---
layout: page
title: "Q122398: TCP/IP Internetworking Components Not Available"
permalink: kb/122/Q122398/
---

## Q122398: TCP/IP Internetworking Components Not Available

	Article: Q122398
	Product(s): Microsoft Windows NT
	Version(s): 3.10 3.50 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	3.10 3.50 3.51
	
	WINDOWS
	
	kbnetwork
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you upgrade to Windows NT version 3.5 or 3.51 and you try to install
	TCP/IP protocol and related components, TCP/IP Internetworking components are
	unavailable (dimmed) and the file size states 0 kilobytes (K). The option to
	Enable Automatic DHCP Configuration is also unavailable.
	
	CAUSE
	=====
	
	This problem occurs if TCP/IP protocol was previously installed and incorrectly
	removed.
	
	RESOLUTION
	==========
	
	To correct this problem, you may need to modify the Registry.
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	1. Start Registry Editor and go to the following subkey:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services
	
	2. Remove the Tcpip key and its subkeys. Also remove the TcpipCU key and its
	  subkeys if it exists.
	
	3. Go to the following subkey:
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft
	
	4. Remove the Tcpip key and its subkeys. Also remove the TcpipCU key and its
	  subkeys if it exists.
	
	5. Exit Registry Editor and restart Windows NT.
	
	Additional query words: prodnt 3.10 gray grey out reinstall
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.10 3.50 3.51
	
	=============================================================================
	
