---
layout: page
title: "Q145587: ARP -A Performs Badly When ARP Cache Contains Many Addresses"
permalink: kb/145/Q145587/
---

## Q145587: ARP -A Performs Badly When ARP Cache Contains Many Addresses

	Article: Q145587
	Product(s): Microsoft Windows NT
	Version(s): 3.51 4.0
	Operating System(s): 
	Keyword(s): kbnetwork kbtool
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.00 
	- Microsoft Windows NT Server versions 3.51, 4.00 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you have several hundred IP addresses in your ARP cache, the execution of
	the arp -a command can take an hour or more. To get this many addresses in your
	cache, you have to increase ArpCacheLife.
	
	CAUSE
	=====
	
	ARP is using SNMP to retrieve the contents of the ARP cache. The SNMP agent is
	not designed to query large numbers of objects.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT Server and
	Workstation versions 3.51 and 4.0. We are researching this problem and will post
	new information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodnt
	======================================================================
	Keywords          : kbnetwork kbtool 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : 3.51 4.0
	
	=============================================================================
	
