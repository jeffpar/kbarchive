---
layout: page
title: "Q140961: XADM: Duplicate Entries in PC Mail GAL"
permalink: /kb/140/Q140961/
---

## Q140961: XADM: Duplicate Entries in PC Mail GAL

{% raw %}

	Article: Q140961
	Product(s): Microsoft Exchange
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 13-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you change the Display name of a Microsoft Exchange user, you might cause
	duplicate entries in the PC Mail Global Address List (GAL) or duplicate user
	errors in the PC Mail Dirsync.log after Directory Synchronization to be created.
	
	MORE INFORMATION
	================
	
	If this problem is exhibited, there are two workarounds available:
	
	- Request a full import via that requestor's PC Mail admin utility (Config,
	  Dirsync, Requestor, Import).
	
	  -or-
	
	- Select a full export via the Microsoft Exchange Administrator program (Export
	  on next cycle).
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem was corrected in Microsoft Exchange Server 4.0 U.S.
	Service Pack 2. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : 4.0
	
	=============================================================================
	

{% endraw %}
