---
layout: page
title: "Q190552: WinNT 4.0 DHCP Client Modified to meet RFC 2131"
permalink: /kb/190/Q190552/
---

## Q190552: WinNT 4.0 DHCP Client Modified to meet RFC 2131

	Article: Q190552
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	There will be occasional failures to lease an IP address during busy network or
	DHCP server times.
	
	CAUSE
	=====
	
	The DHCP client retry mechanism has been modified to be in compliance with RFC
	2131.
	
	The mechanism is described in RFC 2131, which states:
	
	  DHCP clients are responsible for all message retransmission. The client MUST
	  adopt a retransmission strategy that incorporates a randomized exponential
	  backoff algorithm to determine the delay between retransmissions. The delay
	  between retransmissions SHOULD be chosen to allow sufficient time for replies
	  from the server to be delivered based on the characteristics of the
	  internetwork between the client and the server. For example, in a 10Mb/sec
	  Ethernet internetwork, the delay before the first retransmission SHOULD be 4
	  seconds randomized by the value of a uniform random number chosen from the
	  range -1 to +1. Clients with clocks that provide resolution granularity of
	  less than one second may choose a non-integer randomization value. The delay
	  before the next retransmission SHOULD be 8 seconds randomized by the value of
	  a uniform number chosen from the range -1 to +1. The retransmission delay
	  SHOULD be doubled with subsequent retransmissions up to a maximum of 64
	  seconds. The client MAY provide an indication of retransmission attempts to
	  the user as an indication of the progress of the configuration process.
	
	The new Windows NT DHCP client (Dhcpcsvc.dll) behaves as described in the RFC. It
	sends the first DHCP request plus up to three retries, if needed.
	
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
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
