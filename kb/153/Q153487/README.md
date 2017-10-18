---
layout: page
title: "Q153487: XFOR: Exchange Proxy Addresses Not Deleted on cc:Mail POs"
permalink: kb/153/Q153487/
---

## Q153487: XFOR: Exchange Proxy Addresses Not Deleted on cc:Mail POs

	Article: Q153487
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 31-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you apply a filter of the type "Only import directory entries of these
	formats", deleted Microsoft Exchange users are not removed from the cc:Mail
	postoffice after directory synchronization (dir-sync).
	
	CAUSE
	=====
	
	When you apply the filter, the cc:Mail Connector applies the filter to Microsoft
	Exchange addresses as well as cc:Mail addresses.
	
	WORKAROUND
	==========
	
	To work around this problem:
	
	- Include the Microsoft Exchange cc:Mail site proxy address in the filter
	
	  For example: * at SITE1.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.0 This problem was corrected in the latest Microsoft Exchange 5.0
	Server U.S. Service Pack. For information on obtaining the service pack, query
	on the following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	
	Additional query words: dirsync dirsynch
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : winnt:5.0
	
	=============================================================================
	
