---
layout: page
title: "Q198759: XADM: Move Server Wizard: Exporting Custom Attributes and Values"
permalink: /kb/198/Q198759/
---

## Q198759: XADM: Move Server Wizard: Exporting Custom Attributes and Values

{% raw %}

	Article: Q198759
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 28-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	Custom attributes can be exported during the Move Server operation even if they
	do not have the same name (description and admin-display-name) in both the
	source and in the destination sites. The data is preserved while the attribute
	name might differ.
	
	MORE INFORMATION
	================
	
	To test the behavior, follow these steps:
	
	Configuration:
	
	- Server S1 in site1/org1
	
	- Server S2 in site2/org2
	
	1. In site1, rename CustomAttribute1 as BirthDate.
	
	2. In site2, rename CustomAttribute1 as HiringDate.
	
	3. Create a mailbox, M, on S1, and set BirthDate = 5/6/65.
	
	4. Move server S1 to site2/org2.
	
	Result:
	
	M in site2/org2 will have HiringDate = 5/6/65.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
