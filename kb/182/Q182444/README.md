---
layout: page
title: "Q182444: NBF MaxFrameSize Calculated Incorrectly on Token Ring"
permalink: /kb/182/Q182444/
---

## Q182444: NBF MaxFrameSize Calculated Incorrectly on Token Ring

	Article: Q182444
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
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
	
	In a Token Ring network, NBF clients are disconnected from the server after
	receiving the following message:
	
	  Drive x not available
	
	A network trace shows either:
	
	- An NBF REJ frame from the client because the server skips an NBF sequence
	  number sending data. The server and the client never recover from this state
	  and the server finally disconnects.
	
	  -or-
	
	- The client sends an SMB read raw and the server no longer answers. the server
	  and client exchange POLL - FINAL frames and finally disconnect.
	
	CAUSE
	=====
	
	In a Token Ring source routing network, NBF uses the source routing information
	to calculate the maximum datasize it can use. During the stages of the NBF
	connection setup, frames are received through different paths containing a
	different amount of source routing information. Because of the different amount
	of Token Ring source routing information, the maximum datasize was calculated
	incorrectly.
	
	If NBF tries to send the maximum calculated amount of data after setting up the
	connection, the network card discards these packets because they are too long.
	NBF retries several times and then disconnects.
	
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
	
	
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
