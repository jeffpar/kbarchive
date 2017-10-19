---
layout: page
title: "Q174728: XADM: Err Msg: Error Occurred While Processing E-mail Address"
permalink: /kb/174/Q174728/
---

## Q174728: XADM: Err Msg: Error Occurred While Processing E-mail Address

	Article: Q174728
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use the Microsoft Exchange Server Administrator program to create a new
	mailbox, the following error message may appear:
	
	  An error occurred while processing an e-mail address.
	
	CAUSE
	=====
	
	This error can occur when a newer version of an Exchange Server computer has
	been added to the site but is still unavailable. It is possible that the version
	numbers stored in the directory have been replicated, but the address proxy DLLs
	themselves have not yet been replicated.
	
	When a mailbox is added, the version number for the proxy DLLs is obtained from
	the directory. If the newest version of the proxy DLLs is not available on this
	server, an attempt is made to locate a server in the site with the newest
	version of the proxy DLLs. When the server with the correct version of the DLLs
	is not up and running, cannot be reached, does not have the appropriate shares,
	or the user running the Administrator program does not have access to the
	Address share, this error occurs.
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WinNT:5.5
	Issue type        : kbbug
	
	=============================================================================
	
