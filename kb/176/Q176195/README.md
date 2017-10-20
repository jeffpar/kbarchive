---
layout: page
title: "Q176195: XADM: Address Book Views Do Not Replicate Between Sites"
permalink: /kb/176/Q176195/
---

## Q176195: XADM: Address Book Views Do Not Replicate Between Sites

{% raw %}

	Article: Q176195
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	In Microsoft Exchange Server 5.0, Address Book Views (ABVs) may not replicate
	intersite, if parent ABV containers are deleted prior to the deletion of child
	ABV containers.
	
	CAUSE
	=====
	
	This situation may occur if the mail based (INTER-SITE) replication message
	containing the delete of the parent ABV container is processed before the
	replication message that deletes the child ABV container. A cause for this could
	be delayed message transfer between sites due to network congestion.
	
	  Address Book Views
	       +--PARENT (by Business Unit)
	          |
	          |
	          CHILD (by Dept)
	       +--PARENT2 (by Country) - from SITE2
	          |
	          |
	          CHILD2 (by City) - from SITE2
	
	For example, if the (by Dept) child ABV view is active (contains valid entries)
	and the (by Business Unit) parent ABV is deleted, then Intersite replication of
	(by Country) - from SITE 2 could fail.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.0. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	Directory replication is restored between sites by un-deleting the parent ABV
	containers if replication messages are received for child ABV containers
	containing valid members.
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : WINDOWS:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
