---
layout: page
title: "Q168662: DLC May Fail When Connecting Through an IBM 2210 Router"
permalink: /kb/168/Q168662/
---

## Q168662: DLC May Fail When Connecting Through an IBM 2210 Router

	Article: Q168662
	Product(s): Microsoft Windows NT
	Version(s): 3.51,4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Operating System(s): 
	Keyword(s): kbnetwork kbWinNT400sp4fix
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.51, 4.0 SP1, 4.0 SP2, 4.0 SP3 
	- Microsoft Windows NT Workstation versions 3.51, 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	With a data link control (DLC) connection established to a mainframe over an IBM
	2210 router on a slow network, the network communication fails between the
	mainframe and the Microsoft DLC client.
	
	CAUSE
	=====
	
	When the IBM 2210 router is operating on a slow network there is a possibility
	that the receive buffer for the router (the receiving station) will fill up.
	Under these conditions, the IBM 2210 router will send two LLC packets to the
	Microsoft client (the sending station), a Receiver Not Ready (RNR) which
	indicates that the last Information Frame (I-Frame) packet was received from the
	sending station and that the receiving station is temporarily unavailable. Then
	the sending station sends a Receiver Ready (RR) for the same sequence packet
	that it had previously acknowledged with a RNR frame. This causes a problem in
	the Microsoft DLC stack because our client is not expecting two acknowledgements
	for the same I-Frame packet.
	
	
	MORE INFORMATION
	================
	
	If you look at a network trace of this problem, you will see a RNR message from
	the router immediately followed by a RR message. The Microsoft client will send
	a frame reject (FRMR) message followed by a disconnect (DISC) message.
	
	1.  RNR DSAP=0x04 SSAP=0x05 R N(R) = 0x2A FINAL  - Router
	2.  RR DSAP=0x04 SSAP=0x04 C N(R) = 0x2B  - Router
	3.  FRMR DSAP=0x04 SSAP=0x05 R FINAL - Client
	4.  DISC DSAP=0x04 SSAP=0x04 C POLL - Client
	5.  DISC DSAP=0x04 SSAP=0x04 C POLL - Client
	6.  DISC DSAP=0x04 SSAP=0x04 C POLL - Client
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. A
	supported fix is now available, but has not been fully regression- tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 4.
	
	
	Additional query words: 3.51 4.00 SNA Rumba Attachmate
	
	======================================================================
	Keywords          : kbnetwork kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTW400sp3 kbWinNTW400sp2 kbWinNTW400sp1 kbWinNTSsearch kbWinNTS400sp3 kbWinNTS400sp2 kbWinNTS400sp1 kbWinNTS400search kbWinNTS351 kbNTTermServ400 kbNTTermServSearch kbWinNTS351search
	Version           : :3.51,4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
