---
layout: page
title: "Q160828: Network Monitor Parses DNS WINS Lookup Queries as DNS Packets"
permalink: /kb/160/Q160828/
---

## Q160828: Network Monitor Parses DNS WINS Lookup Queries as DNS Packets

	Article: Q160828
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you use Network Monitor to capture a trace of the Microsoft Domain Name
	Service (DNS) server doing a WINS lookup and display the capture, the Protocol
	column will say DNS even when the packet being sent to the WINS server is a
	NetBT packet destined for port 137.
	
	CAUSE
	=====
	
	Network Monitor parses DNS WINS Lookup packets as if they were DNS protocol
	packets. These are actually NetBT packets and should be parsed as such.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT Server version 4.0.
	We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	The capture will display the WINS Lookup name query as:
	
	  + UDP: Src Port: DNS, (53); Dst Port: NETBIOS Name Service (137); Length
	  = 58 (0x3A)
	  + DNS: 0x8002:Std Qry for EKEFFCEJEDEPDECACACACACACACACAAA. of type
	  Unknown Type
	
	You would expect to see the following:
	
	  + UDP: Src Port: DNS, (53); Dst Port: NETBIOS Name Service (137); Length
	  = 58 (0x3A)
	  + NBT: NS: Query req. for COMPUTER1
	
	Additional query words: netmon
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	
	=============================================================================
	
