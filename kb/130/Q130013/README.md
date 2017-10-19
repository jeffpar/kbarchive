---
layout: page
title: "Q130013: IPX Addressing Format For Microsoft SNMP Agents"
permalink: /kb/130/Q130013/
---

## Q130013: IPX Addressing Format For Microsoft SNMP Agents

	Article: Q130013
	Product(s): Microsoft Windows NT
	Version(s): 3.50
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you enter the trap destination IPX address for a client computer running
	an SNMP management program, such as Hewlett-Packard (HP) OpenView, the following
	error message appears when you restart Windows NT:
	
	  Error 3
	
	CAUSE
	=====
	
	This problem occurs if the SNMP Service Configuration of the IPX address in
	Windows NT is incorrect. The trap destination address for Microsoft SNMP must
	use the "8.12" format for the network number and Media Access Control (MAC)
	address. For example, HP OpenView may use a comma or a hyphen to for separation
	between a network number and a MAC address, such as 00008022,0002C0-F7AABD. The
	Windows NT SNMP agent does not recognize this address, thus cannot send any
	traps to the computer using the SNMP management program.
	
	
	RESOLUTION
	==========
	
	To correct this problem, enter the IPX address for the trap destination in the
	8.12 format. For example, the following format is valid:
	
	  xxxxxxxx.yyyyyyyyyyyy
	
	where xxxxxxxx is the network number and yyyyyyyyyyyy is the MAC address.
	
	Additional query words: prodnt host
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : 3.50
	
	=============================================================================
	
