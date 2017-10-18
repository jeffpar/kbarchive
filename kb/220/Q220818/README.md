---
layout: page
title: "Q220818: XADM: Removed Mailbox Cleanup Agent Remains in Mailbox Resources"
permalink: kb/220/Q220818/
---

## Q220818: XADM: Removed Mailbox Cleanup Agent Remains in Mailbox Resources

	Article: Q220818
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 16-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Mailbox Cleanup Agent remains as an entry in the private information store
	Mailbox Resources after the Mailbox Cleanup Agent has been removed.
	
	RESOLUTION
	==========
	
	The Mailbox Cleanup Agent can be installed in any of the following containers:
	
	- Configuration
	
	- Add-Ins
	
	- Addressing
	
	- Address-Templates
	
	- Address-Types
	
	- Display-Templates
	
	- Connections
	
	- Dir-Repl
	
	- Monitors
	
	- Recipients
	
	If the Mailbox Cleanup Agent was installed in a Recipients container, you can
	remove the mailbox resource. To remove the entry from the private information
	store Mailbox Resources:
	
	1. Create a mailbox in the same Recipients container that the Mailbox Cleanup
	  Agent was installed in.
	
	2. In the Alias box, type "MSExchangeMCA" (without the quotation marks).
	
	3. In the other boxes, type any applicable information that you want to.
	
	4. After you create the mailbox, you can delete it, and then the mailbox
	  resource for the Mailbox Cleanup Agent is deleted as well.
	
	When you create this mailbox you create an object that has the same Distinguished
	Name (DN) as the Mailbox Cleanup Agent mailbox resource.
	
	MORE INFORMATION
	================
	
	This behavior is by design.
	
	
	Additional query words: mca, mbclean
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	
