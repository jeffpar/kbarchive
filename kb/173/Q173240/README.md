---
layout: page
title: "Q173240: Multihomed Agent Sends SNMP Trap with Incorrect IP Source"
permalink: /kb/173/Q173240/
---

## Q173240: Multihomed Agent Sends SNMP Trap with Incorrect IP Source

	Article: Q173240
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbnetwork kbSDKPlatform kbSNMP kbGrpDSNet
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When your multihomed Windows NT computer sends Simple Network Management
	Protocol (SNMP) traps, the IP address of the first interface is included as the
	originating host in the Agent ID field of the Trap Protocol Data Unit (PDU),
	even though the SNMP traps are being sent to the network on a different
	interface.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0.
	
	
	A supported fix is now available, but has not been fully regression-tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	
	MORE INFORMATION
	================
	
	The Trap PDU is issued by an SNMP entity on behalf of a network management agent
	application. It is used to notify the management station of a significant event.
	The Agent ID field is included in the Trap PDU, and it should contain the IP
	address of the object generating the trap.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	ARTICLE-ID: Q172879
	TITLE : Simple Network Management Protocol (SNMP) and Traps
	
	Additional query words: multi-homed
	======================================================================
	Keywords          : kbnetwork kbSDKPlatform kbSNMP kbGrpDSNet 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbbug
	
	=============================================================================
	
