---
layout: page
title: "Q225016: XADM: How to Change the Recipients Container for PF Mailboxes"
permalink: /kb/225/Q225016/
---

## Q225016: XADM: How to Change the Recipients Container for PF Mailboxes

	Article: Q225016
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 27-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you create a public folder, a mailbox for that public folder is created in
	the default Recipients container. This mailbox is hidden from the address list.
	
	MORE INFORMATION
	================
	
	You can use the Exchange Server Administrator program to find out where your
	public folder mailboxes are created. Click the Recipients container, and then,
	on the View menu, click Hidden Recipients.
	
	To change the Recipients container that the public folders are created in, use
	the Exchange Server Administrator program to perform the following steps:
	
	1. Click the Configuration object, and then click Information Store Site
	  Configuration.
	
	2. Click the General tab. In the Public Folder Container field, click Modify,
	  and then click the new container.
	
	3. The mailbox for any new public folders that you created is put in the new
	  folder.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbhowto
	
	=============================================================================
	
