---
layout: page
title: "Q164979: SMS: Database Does Not Reflect Site/Domain Changes Correctly"
permalink: /kb/164/Q164979/
---

## Q164979: SMS: Database Does Not Reflect Site/Domain Changes Correctly

{% raw %}

	Article: Q164979
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbnetwork kbDatabase kbInventory smsinv smsdatabasekbfixlist
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a Systems Management Server client moves from one site to another in the
	same Systems Management Server hierarchy, the client's inventory information
	does not always follow them to the new site and domain combination. Generally,
	when a client moves from a parent site down to a child site, the database
	reflects the move correctly. However, when the client either moves from a child
	site to a parent site, or moves in a "horizontal" fashion, the client's
	inventory information may be duplicated between the multiple sites.
	
	WORKAROUND
	==========
	
	For those cases where the client's inventory is duplicated, it is necessary to
	manually delete the old client record from each site's database.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2. This problem was corrected in the latest Microsoft Systems
	Management Server version 1.2 U.S. Service Pack. For information on obtaining
	the service pack, query on the following word in the Microsoft Knowledge Base
	(without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsms switch report
	
	======================================================================
	Keywords          : kbnetwork kbDatabase kbInventory smsinv smsdatabase kbfixlist
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
