---
layout: page
title: "Q184160: XADM: Messages Left After Deleting Mailbox w/ Directory Import"
permalink: kb/184/Q184160/
---

## Q184160: XADM: Messages Left After Deleting Mailbox w/ Directory Import

	Article: Q184160
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you delete a mailbox by performing a directory import with an import file,
	one or more messages addressed to that recipient may remain in the information
	store on the Microsoft Exchange Server computer. If you create the mailbox
	again, and then the recipient logs on to an e-mail client, the messages appear
	in the e-mail client.
	
	This behavior does not occur if you delete the mailbox from the Exchange
	Administrator program. If you delete the mailbox from the Administrator program,
	all messages addressed to recipient are removed from the information store.
	
	CAUSE
	=====
	
	When you modify or delete an object by performing a directory import, the object
	attributes required to perform the operation are the only attributes that are
	obtained from the directory. The attributes that are obtained when you delete an
	object do not include the Home-MDB attribute, which is required to remove
	messages addressed to that recipient from the information store.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.5. For information about obtaining the
	Service Pack, query on the following word in the Microsoft Knowledge Base
	(without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: resource usage
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WINDOWS:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
