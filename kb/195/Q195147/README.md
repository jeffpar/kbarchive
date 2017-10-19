---
layout: page
title: "Q195147: XADM: MSW Allows Last Private Store Server to Move from Site"
permalink: /kb/195/Q195147/
---

## Q195147: XADM: MSW Allows Last Private Store Server to Move from Site

	Article: Q195147
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Microsoft Exchange Server Move Server Wizard (MSW) will move the last
	Private Store server out of a site without warning. For example, if there were
	two servers in a site, and one server was a Public Store only server, and the
	other was a Private Store only server, when the MSW is used to move the Private
	Store only server out of the site, there will be no errors.
	
	This leaves the old site without a server containing a Private Store. The problem
	is that mailboxes can be created in the old site without a home server. These
	mailboxes cannot be accessed by a client.
	
	WORKAROUND
	==========
	
	Customers with this problem need to add a Private Store to the server in the old
	site. After the Private Store is created, the Administrator can give the
	"stranded" mailboxes a home server.
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WinNT:5.5
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
