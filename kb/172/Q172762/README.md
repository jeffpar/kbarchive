---
layout: page
title: "Q172762: Continuous Bhnt.sys Load and Unload Causes STOP 0xA and 0x7F"
permalink: kb/172/Q172762/
---

## Q172762: Continuous Bhnt.sys Load and Unload Causes STOP 0xA and 0x7F

	Article: Q172762
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may receive one of the following STOP error messages in Windows NT:
	
	  0x0000000A (0x00000003, 0x0000001c, 0x00000000, 0x00000003)
	
	NOTE: The parameters may vary.
	
	  0x0000007F (0x0000008, 0x0000000, 0x00000000, 0x00000000)
	
	NOTE: The parameters will appear as above.
	
	  0x0000001e (c0000005 f1f733f7 00000000 0000000c)
	
	NOTE: The third parameter will be different and is dependent on system
	configurations.
	
	CAUSE
	=====
	
	This problem is caused by drivers that load Bhnt.sys, or services that cause
	Bhnt.sys to be loaded, to get the network counters, and then unload it. If this
	happens continuously, a corruption may occur in the unloading of Bhnt.sys.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, do any one of the following:
	
	- Obtain the latest version of Compaq Insight Management Agents for Windows NT
	  from Compaq, if applicable.
	
	
	- Configure BH Service (Network Monitor Agent Driver) to load at system
	  startup.
	
	- To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	  Windows NT Server 4.0, Terminal Server Edition. For additional information,
	  please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Network Monitor Agent
	Driver. This problem was first corrected in Windows NT 4.0 Service Pack 4.0 and
	Windows NT Server 4.0, Terminal Server Edition Service Pack 4.
	
	MORE INFORMATION
	================
	
	Compaq Insight Manager is manufactured by Compaq, a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	Additional query words: cpqmgmt.sys
	
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
