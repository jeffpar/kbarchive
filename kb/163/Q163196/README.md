---
layout: page
title: "Q163196: New Windows NT PING.EXE Prevents Hanging Other TCP/IP Stacks"
permalink: /kb/163/Q163196/
---

## Q163196: New Windows NT PING.EXE Prevents Hanging Other TCP/IP Stacks

	Article: Q163196
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbnetworkkbbuglist kbfixlist
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Windows NT 4.0 version of the Ping utility (Ping.exe) to test
	IP communication to a network resource, the networked computer or other device
	may experience symptoms including one or more of the following:
	
	- The system may hang.
	
	- A Panic error may be displayed.
	
	- Other errors may occur.
	
	CAUSE
	=====
	
	Under some circumstances it is possible for the Windows NT Ping utility to send
	an IP packet which is interpreted as an invalid IP datagram.
	
	RESOLUTION
	==========
	
	Obtain the hotfix referenced below.
	
	MORE INFORMATION
	================
	
	Computers running Windows NT, Windows 95, or Windows for Workgroups do not
	experience these problems, but they may occur on other systems such as Unix
	hosts, Macintosh computers, or network printers.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem was corrected in the latest Microsoft Windows NT 4.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	For information on the updated version of Ping.exe for Windows 95, please see the
	following article in the Microsoft Knowledge Base:
	
	  ARTICLE-ID: Q162542
	  TITLE : New Ping Tool Prevents Hanging Other TCP/IP Stacks
	
	
	Additional query words: 95 prodnt crash ping of death
	
	======================================================================
	Keywords          : kbnetwork kbbuglist kbfixlist
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbbug
	
	=============================================================================
	
