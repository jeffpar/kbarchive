---
layout: page
title: "Q152498: XADM: Unable to Enable Advanced Security on User Account"
permalink: kb/152/Q152498/
---

## Q152498: XADM: Unable to Enable Advanced Security on User Account

	Article: Q152498
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbenv exc4
	Last Modified: 21-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you try to enable Advanced Security on a user mailbox within the Microsoft
	Exchange Administrator program, you may get the following error message:
	
	  The advanced security operation failed due to an unknown cause. Restart the
	  Administrator program or the Key Management server, or both, and then try
	  again.
	
	  Microsoft Exchange Administrator
	  ID no: c1031252
	
	CAUSE
	=====
	
	This problem can occur if a comma was used in the directory name for the user
	mailbox object.
	
	WORKAROUND
	==========
	
	To check, run the Microsoft Exchange Administrator program and check the
	properties for the user's mailbox. Then click the Advanced tab and look the
	Directory Name.
	
	Currently there is no way to modify the Exchange X.500 database, so the user
	account will need to be deleted and recreated to fix the problem. Move the
	user's mail to a .PST file. Delete and recreated the user's mailbox, then import
	the .PST file back onto the server store.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem was corrected in Microsoft Exchange Server version
	5.0.
	
	Additional query words: km digital encryption signed sealed
	
	======================================================================
	Keywords          : kbenv exc4 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
