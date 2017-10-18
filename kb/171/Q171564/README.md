---
layout: page
title: "Q171564: TCP/IP Dead Gateway Detection Algorithm Updated for Windows NT"
permalink: kb/171/Q171564/
---

## Q171564: TCP/IP Dead Gateway Detection Algorithm Updated for Windows NT

	Article: Q171564
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbnetwork kbWinNT400sp4fix
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	You may experience a loss of connectivity to computers across the router when
	your primary gateway fails, even though your computer running Windows NT is
	configured with multiple default gateways for redundancy.
	
	CAUSE
	=====
	
	Windows NT 4.0 supports dead gateway detection using the Triggered Reselection
	method described in RFC 816. This implementation can cause the current default
	gateway to switch to the second or third configured gateway very easily;
	however, it does not test the gateway being switched to prior to making the
	change.
	
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
	
	
	
	MORE INFORMATION
	================
	
	The description and explanation of the Windows NT 4.0 dead gateway detection
	algorithm follows:
	
	- When any TCP connection that is routed through the default gateway has
	  attempted to send a TCP packet to the destination a number of times equal to
	  one-half of the registry value TcpMaxDataRetransmissions, but receives no
	  response, the algorithm advises IP to switch to the next gateway in the
	  list.
	
	  The new algorithm, however, is more cautious about advising IP to switch
	  gateways:
	
	- When any TCP connection that is routed through the default gateway has
	  attempted to send a TCP packet to the destination a number of times equal to
	  one-half of the registry value TcpMaxDataRetransmissions, but receives no
	  response, the algorithm changes the Route Cache Entry (RCE) for that one
	  remote IP address to use the next default gateway in the list. When 25
	  percent of the TCP connections have moved to the next default gateway, the
	  algorithm advises IP to change the default gateway for the whole computer to
	  the one that the connections are now using.
	
	Example of the New Algorithm
	----------------------------
	
	Assume that there are currently TCP connections to 11 different IP addresses that
	are being routed through the default gateway. Now assume that the default
	gateway fails, that there is a second default gateway configured, and that the
	value for TcpMaxDataRetransmissions is at the default of 5.
	
	When the first TCP connection tries to send data, it will not receive any
	acknowledgments. After the third retransmission, the RCE for that remote IP
	address will be switched to use the next default gateway in the list. At this
	point, any TCP connections to that one remote IP address will have switched
	over, but the remaining connections will still try to use the original default
	gateway.
	
	When the second TCP connection tries to send data, the same thing will happen.
	Now, two of the 11 RCEs will point to the new gateway.
	
	When the third TCP connection tries to send data, after the third retransmission,
	three of 11 RCEs will have been switched to the second default gateway. Since,
	at this point, over 25 percent of the RCEs have been moved, the default gateway
	for the whole computer will be moved to the new one.
	
	At this point, that default gateway remains the primary one for the computer
	until it experiences problems (causing the dead gateway algorithm to try the
	next one in the list again) or until the computer is restarted.
	
	When the end of the list of default gateways is reached, the search returns to
	the beginning again.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
