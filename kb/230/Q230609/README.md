---
layout: page
title: "Q230609: XADM: How to Post to Public Folders Using Fax Senior Gateway"
permalink: /kb/230/Q230609/
---

## Q230609: XADM: How to Post to Public Folders Using Fax Senior Gateway

{% raw %}

	Article: Q230609
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 23-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes a way to post public folder messages across a Fax Senior
	Gateway. If your Microsoft Exchange Server 5.5 Service Pack 2 (SP2) computer has
	a Fax Senior Gateway installed on it and a user from outside of the Exchange
	Server organization wants to post a message to the public folders using the Fax
	Senior Gateway, the steps in the "More Information" section explain how.
	
	MORE INFORMATION
	================
	
	If a user wants to post messages to the public folders using a Fax Senior
	Gateway:
	
	1. The administrator needs to create a user mailbox on the Exchange Server
	  computer.
	
	2. The user sends faxes directly to the user mailbox using the Fax Senior
	  Gateway.
	
	3. The user sets up an Inbox rule on the user mailbox to post it to the public
	  folder.
	
	If the user tries to post the fax message directly to the public folder, it does
	not work. This is by design.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
