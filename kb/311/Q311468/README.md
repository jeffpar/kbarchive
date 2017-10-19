---
layout: page
title: "Q311468: Exchange 2000 Does Not Support IMAP4 NAMESPACE Command"
permalink: /kb/311/Q311468/
---

## Q311468: Exchange 2000 Does Not Support IMAP4 NAMESPACE Command

	Article: Q311468
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange 2000 Server 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In Exchange 2000, Internet Message Access Protocol 4 (IMAP4) protocol does not
	support the other user's name space. This functionality is available only in
	Exchange Server 5.5. When you open an IMAP4 connection on port 143 (default port
	number) to an Exchange server, log on with a user name and password, and then
	run the namespace command, Exchange Server 5.5 returns the list of name spaces
	including the other users' name spaces (delegated users). Exchange 2000 only
	returns the name space for the current user.
	
	MORE INFORMATION
	================
	
	Note the output you receive when you run the following commands:
	
	  telnet <exchange server name> 143
	  a001 login <user name><password>
	  a002 namespace
	
	In Exchange 2000, you receive the following output:
	
	  * NAMESPACE (("" "/")) NIL (("Public Folders/" "/"))
	
	In Exchange Server 5.5, you receive the following output:
	
	  * NAMESPACE (("" "/")) (("Other users/" "/")) (("Public Folders/" "/"))
	
	Additional query words: IMAP4
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2 kbExchange2000Search kbExchange2000Serv
	Version           : :5.5
	Issue type        : kbinfo
	
	=============================================================================
	
