---
layout: page
title: "Q191830: Memory Leak Due to Repeated Logon/Logoff May Corrupt Profiles"
permalink: kb/191/Q191830/
---

## Q191830: Memory Leak Due to Repeated Logon/Logoff May Corrupt Profiles

	Article: Q191830
	Product(s): Microsoft Windows NT
	Version(s): 4.0,4.0 SP3
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 SP3 
	- Microsoft Windows NT Server version 4.0 SP3 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Repeated logging on and logging off of a system without shutting down can lead
	to memory loss. Performance Monitor displays Handle Count and Private Bytes
	steadily increasing for the Winlogon.exe process. This may cause problems
	starting applications and can also cause profile corruption (local and
	roaming).
	
	
	CAUSE
	=====
	
	Memory allocated when logging on is not released when logging off.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 4.
	
	
	Additional query words: 1009 1450
	
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400search kbWinNT400search kbWinNTW400sp3 kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400sp3 kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : :4.0,4.0 SP3
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
