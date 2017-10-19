---
layout: page
title: "Q186873: Netbios Delays Sending/Receiving Packets When Session Is Lost"
permalink: /kb/186/Q186873/
---

## Q186873: Netbios Delays Sending/Receiving Packets When Session Is Lost

	Article: Q186873
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	On a network running NetBIOS over TCP/IP, you may notice that, if a client's
	connection to a Windows NT server fails or experiences a loss of session, this
	causes delays in sending or receiving data from other clients to and from the
	server.
	
	CAUSE
	=====
	
	During a failed or disconnected client session to the server, you may notice,
	using Network Monitor, that you can see the server is receiving packets from the
	other clients; however, NetBIOS is not passing packets back up to the clients.
	This will also show that all the send buffers have been consumed and they are
	waiting for the server to respond (this is with a low level NetBIOS ACK, not a
	NetBIOS packet). The Network Monitor trace shows that TCP/IP has already ACK'd
	these packets but the NetBIOS layer has not.
	
	It will appear that the NetBIOS layer is blocked, waiting for something just
	after the lower level protocol has notified it of a session failure.
	
	NOTE: The problem does not occur until TCP/IP sees that there is a timeout.
	
	When in this state, the NetBIOS interface will not process any command. Even
	simple commands like Adapter Status will be blocked. You may pass any NO_WAIT
	commands to NetBIOS; however, these will not be processed until it recovers.
	
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
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
