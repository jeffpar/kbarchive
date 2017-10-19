---
layout: page
title: "Q192292: Unpredictable TCP Sequence Numbers in SP4"
permalink: /kb/192/Q192292/
---

## Q192292: Unpredictable TCP Sequence Numbers in SP4

	Article: Q192292
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0,4.0a
	Operating System(s): 
	Keyword(s): kbFEA kbWinNT400sp4fea
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	- Microsoft BackOffice Small Business Server versions 4.0, 4.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The TCP protocol assigns an initial sequence number to each connection. Prior to
	Service Pack 4, it is possible, through careful analysis, to determine the
	initial TCP sequence number for a specific Windows NT communications session. By
	predicting a TCP session's sequence number, it could be possible to disrupt the
	integrity of a communication session that does not provide its own session
	integrity. This is often referred to as "connection hijacking."
	
	In Service Pack 4, the method of assigning sequence numbers to TCP session has
	changed to make them more unpredictable.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT version
	4.0. For more information, please see the following article in the Microsoft
	Knowledge Base.
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem was first corrected in Windows NT 4.0 Service Pack 4.
	
	Additional query words: security hijacking hijack tcp port connect connections ISN SYN
	
	======================================================================
	Keywords          : kbFEA kbWinNT400sp4fea 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch kbAudDeveloper kbSBServSearch kbSBServ400 kbSBServ400a
	Version           : winnt:4.0,4.0a
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
