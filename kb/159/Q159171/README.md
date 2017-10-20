---
layout: page
title: "Q159171: XADM: Mailboxes Show Multiple Instances in Admin Resources Page"
permalink: /kb/159/Q159171/
---

## Q159171: XADM: Mailboxes Show Multiple Instances in Admin Resources Page

{% raw %}

	Article: Q159171
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are using the Microsoft Exchange Server Administrator program to view
	the Mailbox Resources tab of the Private Information Store object in the server
	container, the same mailbox may be listed more than once.
	
	CAUSE
	=====
	
	When the call by the Information Store to look up a mailbox's root folder ID
	fails (for example, RPC busy), a new mailbox is created upon message delivery.
	
	
	MORE INFORMATION
	================
	
	The Information Store will only resort to creating a new mailbox if the record
	is not found in the JET database.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem was corrected in the latest Microsoft Exchange 4.0
	U.S. Service Pack. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
