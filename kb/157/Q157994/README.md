---
layout: page
title: "Q157994: XADM: Directory Store Stops While Calculating Hierarchy Table"
permalink: /kb/157/Q157994/
---

## Q157994: XADM: Directory Store Stops While Calculating Hierarchy Table

{% raw %}

	Article: Q157994
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 09-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Microsoft Exchange Server directory store (DS) may stop responding while
	calculating the hierarchy table. Through replication, the bad hierarchy may be
	copied to all other computers running Microsoft Exchange Server, causing them to
	come down also.
	
	CAUSE
	=====
	
	The DS incorrectly searches memory that was not allocated when it looks for the
	non-existent parent of an orphaned entry in the hierarchy table. The search loop
	looking for the parent object decrements and dereferences a pointer over and
	over, eventually getting to non-allocated memory. If this hierarchy table is
	replicated with orphaned objects, the problem is replicated with it.
	
	WORKAROUND
	==========
	
	To work around this problem, obtain the hotfix mentioned below. With the hotfix,
	the search loop is now checked at each iteration against the record count. If
	the pointer is invalid, the object is marked as having no parent.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem was corrected in the latest Microsoft Exchange 4.0
	U.S. Service Pack. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
