---
layout: page
title: "Q154535: Multiple Instances of Network Interface in Performance Monitor"
permalink: kb/154/Q154535/
---

## Q154535: Multiple Instances of Network Interface in Performance Monitor

	Article: Q154535
	Product(s): Microsoft Windows NT
	Version(s): 3.5 3.51 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When the TCP/IP protocol is installed on a Windows NT system, you have the
	option in Performance Monitor to select the "Network Interface" object with
	multiple instances listed in the "Instance" section. This article explains what
	these multiple instances are.
	
	MORE INFORMATION
	================
	
	The Network Interface object is specific to IP. The instances in the Network
	Interface counter refer to the loopback address (127.0.0.1), the network card
	(if any), the dial-out WAN wrapper for each device bound under RAS, and the
	dial-in WAN wrapper for each device bound under RAS. The instances will always
	list the loopback address 127.0.0.1 first and the remaining instances should
	match the binding order of the TCP/IP protocol. To view the binding order for
	TCP/IP, choose Control Panel Network and click the Bindings button. In the Show
	Bindings For list, select TCP/IP Protocol.
	
	NOTE: If RAS does not use IP for a device, it is not counted.
	
	For example: If you have IP running on a network card, an ISDN card (dial-
	in/dial-out), and one communications port (dial-out only), but you also have
	another communications port set to dial-in/dial-out but using only NetBEUI, you
	would have the following instances:
	
	  Instance 1: Loopback adapter (127.0.0.1)
	  Instance 2: Network card
	  Instance 3: ISDN dial out
	  Instance 4: ISDN dial in
	  Instance 5: Modem dial out
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.5 3.51 4.0
	
	=============================================================================
	
