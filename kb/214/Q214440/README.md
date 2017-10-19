---
layout: page
title: "Q214440: Terminal Server STOP 0xA When Remote Clients Log Off"
permalink: /kb/214/Q214440/
---

## Q214440: Terminal Server STOP 0xA When Remote Clients Log Off

	Article: Q214440
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): _IK
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may experience the following blue screen error message when a high number of
	Terminal Server clients have active sessions and a client is in the process of
	logging off:
	
	  STOP: 0x0000000A (00000008 0000001c 00000000 80117f9c)
	
	NOTE: The parameters in the STOP code may be different depending on your system
	configuration.
	
	CAUSE
	=====
	
	A file system notification was being freed incorrectly.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT Server
	4.0, Terminal Server Edition. For additional information, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT Server 4.0, Terminal
	Server Edition. This problem was first corrected in Windows NT Server 4.0,
	Terminal Server Edition Service Pack 4.
	
	MORE INFORMATION
	================
	
	For additional information, please see the following article(s) in the Microsoft
	Knowledge Base:
	
	  Q186416 System Hang Results from Large Number of Notify Syncs
	
	Additional query words: 4.00 wts tse
	
	======================================================================
	Keywords          : _IK 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
