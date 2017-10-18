---
layout: page
title: "Q178163: XADM: Colon in Site Name Breaks Intersite Directory Replication"
permalink: kb/178/Q178163/
---

## Q178163: XADM: Colon in Site Name Breaks Intersite Directory Replication

	Article: Q178163
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you install Microsoft Exchange Server and create a site that contains a colon
	in the name, for example, SiteA:EAST, intersite directory replication with other
	Exchange Server sites does not work correctly.
	
	In the event viewer application log, you may notice the following event:
	
	  Event ID 1206
	  Source: MSExchangeDS
	  Type: Warning
	  Catagory: Knowledge Consistency Checker
	  Description: Couldn't modify directory replication connector
	  /O=Organization/OU=SiteA because of error 34. If this condition
	  persists, stop and restart this Microsoft Exchange Server computer.
	
	WORKAROUND
	==========
	
	Do not use a colon when naming an Exchange Server site.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.0.
	
	This problem has been corrected in the latest U.S. Service Pack for Microsoft
	Exchange Server version 5.0. For information on obtaining the Service Pack,
	query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	Additional query words: dra
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : WINDOWS:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
