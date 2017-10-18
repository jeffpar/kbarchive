---
layout: page
title: "Q247030: XADM: Custom Attributes 11-15 Are Not Replicated to Other Sites"
permalink: kb/247/Q247030/
---

## Q247030: XADM: Custom Attributes 11-15 Are Not Replicated to Other Sites

	Article: Q247030
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55kbfaq
	Last Modified: 10-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Custom Attributes 11-15 are not being replicated to other sites.
	
	CAUSE
	=====
	
	This behavior is by design. Custom Attributes 11-15 do not replicate to other
	sites by default. Intersite replication of these attributes can be enabled
	through the Microsoft Exchange Server Administrator program.
	
	RESOLUTION
	==========
	
	To replicate these attributes outside the site:
	
	1. In the Administrator program, click to expand the Configuration container for
	  your site.
	
	2. Double-click the DS Site Configuration object or click it, and click
	  Properties on the File menu.
	
	3. Click the Attributes tab.
	
	4. Under Configure, click Inter-site replication.
	
	5. Under Show attributes for, click "All mail recipients" from the list, and
	  click to select the attributes you want to be replicated to other sites.
	
	Additional query words: replicating
	
	======================================================================
	Keywords          : exc55 kbfaq
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Hardware          : ALPHA MIPS PPC x86
	Issue type        : kbprb
	
	=============================================================================
	
