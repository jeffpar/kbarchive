---
layout: page
title: "Q130929: DHCP Seconds Field Limits Forwarding of Packets by Relay Agents"
permalink: /kb/130/Q130929/
---

## Q130929: DHCP Seconds Field Limits Forwarding of Packets by Relay Agents

	Article: Q130929
	Product(s): Microsoft Windows NT
	Version(s): 3.51 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	In Windows NT 3.51, Dynamic Host Configuration Protocol (DHCP) clients set
	the seconds field in the DHCP message to zero in the initial DHCP packet.
	This field is incremented for every subsequent DHCP packet retransmitted by
	the client.
	
	The DHCP relay agents may be configured with a non-zero threshold value for
	the seconds field (a value of 4 is recommended). This prevents relay agents
	from forwarding all DHCP packets with the seconds field set to a value less
	than the threshold value. If there is a DHCP server in the local subnet
	that has an available address for lease, it will respond to the initial
	DHCP packet. The client then does not have to retransmit that DHCP packet
	with a higher number in the seconds field which will be forwarded by the
	relay agent. This considerably reduces the number of DHCP packets forwarded
	to other subnets by the relay agent.
	
	
	Additional query words: prodnt prodnt wins tcpip
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : 3.51 4.0
	
	=============================================================================
	
