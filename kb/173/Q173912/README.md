---
layout: page
title: "Q173912: XCLN: Exchange Generates Conflict Messages for Same PF Replica"
permalink: /kb/173/Q173912/
---

## Q173912: XCLN: Exchange Generates Conflict Messages for Same PF Replica

{% raw %}

	Article: Q173912
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When simultaneous changes to the same item are saved to a single Public Folder
	(PF) replica in Microsoft Exchange, a PF item conflict notification will be
	generated. This item conflict notification, which includes the contents of both
	versions of the item, will be sent to the owner of the PF.
	
	MORE INFORMATION
	================
	
	The owner can then manually resolve the conflict. In previous versions of
	Microsoft Exchange, an item conflict notification was only generated if an item
	change was simultaneously saved on different replicas of a PF.
	
	Additional query words: Functionality Enhancement Changes XADM
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
