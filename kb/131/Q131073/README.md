---
layout: page
title: "Q131073: Datagram Sends Fail if Route is Not in IPX Cache"
permalink: kb/131/Q131073/
---

## Q131073: Datagram Sends Fail if Route is Not in IPX Cache

	Article: Q131073
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If your transport driver interface (TDI) program is a client of the IPX protocol
	and uses datagram-sends for connectionless sends at an interval that is greater
	than 15 minutes, it fails. If the interval is shorter than 15 minutes, your TDI
	client performance is slowed down.
	
	This symptom occurs if your TDI client program is a socket program using
	datagram-sends, the NetWare redirector, or the Server Message Block (SMB)
	redirector or server.
	
	The problem does not occur with the SPX or NetBEUI protocol, or their TDI
	clients. The RIP protocol is also not affected by this problem.
	
	CAUSE
	=====
	
	When your transport driver interface (TDI) client does a send to a destination
	whose route is not in the IPX cache, IPX sends a corrupted packet in form of
	some superfluous bytes appended to the IPX header. The next time the client
	sends the datagram, assuming it is within 15 minutes which is the default
	routing information protocol (RIP) time-out, it succeeds. If a send happens
	after 15 minutes, then assuming that the route did not get cached again, the
	send fails. A subsequent send succeeds. This pattern repeats itself with each
	datagram send in these intervals.
	
	RESOLUTION
	==========
	
	To correct this problem, install the latest U.S. Service Pack for Windows NT
	version 3.51.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. This
	problem has been corrected in the latest U.S. Service Pack for Windows NT
	version 3.51. For information on obtaining the Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : 3.51
	
	=============================================================================
	
