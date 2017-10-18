---
layout: page
title: "Q228811: Socket Programs May Not Connect to Server"
permalink: kb/228/Q228811/
---

## Q228811: Socket Programs May Not Connect to Server

	Article: Q228811
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0 SP4
	Operating System(s): 
	Keyword(s): kbnetwork kbWinNT400sp5fix
	Last Modified: 18-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 SP4 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install Windows NT 4.0 Service Pack 4 on your computer running Windows
	NT, socket-based programs may stop responding (hang). A network trace may show
	that the TCP/IP packets may not be ordered in the proper sequence.
	
	CAUSE
	=====
	
	This behavior is caused by a change in the calculations for random Initial
	Sequence Numbers (ISN) used in TCP/IP packets. As a result, an ISN may be
	generated that is less than the current ISN and, as a result, TCP/IP packets may
	be out of sequential order.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0. For
	additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article. This problem was first corrected in
	Windows NT version 4.0 Service Pack 5.
	
	MORE INFORMATION
	================
	
	For additional information about random Initial Sequence Numbers, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q192292 Unpredictable TCP Sequence Numbers in SP4
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork kbWinNT400sp5fix 
	Technology        : kbWinNTsearch kbWinNT400xsearch kbWinNTSsearch kbWinNTS400sp4 kbWinNTS400xsearch
	Version           : winnt:4.0 SP4
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
