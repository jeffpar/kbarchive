---
layout: page
title: "Q157123: Communicating with SNA Hosts May Cause STOP 0x0A in DLC.SYS"
permalink: kb/157/Q157123/
---

## Q157123: Communicating with SNA Hosts May Cause STOP 0x0A in DLC.SYS

	Article: Q157123
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbnetwork kbWinNT400sp4fix
	Last Modified: 20-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use the DLC protocol for SNA host communications, the Windows NT server
	may sporadically hang (stop responding) with STOP code 0x0a. The debug
	information states that Dlc.sys is canceling IRPs.
	
	NOTE: This problem is more likely to occur on multiprocessor computers and when
	the network experiences high load or network errors.
	
	
	CAUSE
	=====
	
	This problem occurs when an IRP is cancelled twice.
	
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
	
	
	
	Additional query words: 4.00
	
	======================================================================
	Keywords          : kbnetwork kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : :4.0
	Issue type        : kbbug
	
	=============================================================================
	
