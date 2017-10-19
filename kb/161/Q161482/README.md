---
layout: page
title: "Q161482: XCON: A Directory Name Object Allocation Command Failed"
permalink: /kb/161/Q161482/
---

## Q161482: XCON: A Directory Name Object Allocation Command Failed

	Article: Q161482
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Exchange MTA may generate the following warning every time a pair of MTAs
	connects either within the site or via a site connector:
	
	  Event ID: 2247
	  A directory name (DN) object allocation command failed. [RD Server MAIN BASE 1
	  114] (12)
	
	CAUSE
	=====
	
	This occurs due to an event logging problem with the MTA.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem has been fixed in Microsoft Exchange Server version
	5.0.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	Issue type        : kbbug
	
	=============================================================================
	
