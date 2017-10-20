---
layout: page
title: "Q196402: XADM: Changes Made During Move Server Process are Not Saved"
permalink: /kb/196/Q196402/
---

## Q196402: XADM: Changes Made During Move Server Process are Not Saved

{% raw %}

	Article: Q196402
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When moving a mailbox using the Microsoft Exchange Move Server Wizard, if the
	Windows NT permissions associated with the mailbox are modified during the move,
	the modified Windows NT permissions are not added back to the mailbox. This
	occurs even if the user has the same Windows NT Security ID.
	
	CAUSE
	=====
	
	The Move Server Wizard takes a snapshot of the directory prior to moving a
	server. After the server is moved, the snapshot is imported into the new
	directory. Therefore, any changes that occur during the move will not be saved.
	
	WORKAROUND
	==========
	
	The documentation is clear in stating that NO changes should be made during the
	migration process. If changes are made, they are at risk of being lost.
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WinNT:5.5
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
