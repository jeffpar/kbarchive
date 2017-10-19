---
layout: page
title: "Q245789: XADM: Move Server Wizard Stops with c1010aae"
permalink: /kb/245/Q245789/
---

## Q245789: XADM: Move Server Wizard Stops with c1010aae

	Article: Q245789
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5,5.5 SP1,5.5 SP2,5.5 SP3
	Operating System(s): 
	Keyword(s): exc55 exc55sp1 exc55sp2 exc55sp3
	Last Modified: 25-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 5.5 SP1, 5.5 SP2, 5.5 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Exchange Server Move Server Wizard may not work properly and the following
	error message may be displayed:
	
	  The object cannot be found in the directory. This may be because replication
	  has not completed. Microsoft Exchange directory ID no. c1010aae.
	
	WORKAROUND
	==========
	
	To work around this problem:
	
	1. Export the directory to a .csv file.
	
	2. Add a value for a custom attribute object to the .csv file, such as custom
	  attribute1.
	
	3. Import the .csv file back to the directory.
	
	NOTE: When you import the .csv file, an error message similar to the following is
	displayed:
	
	  Unable to create Mailbox TestMailbox because the required Home-Server
	  attribute was not specified.
	
	4. Find the object that the .csv file import stopped responding on and either
	  modify the object by adding the required attribute, or delete the object
	  (this also deletes the contents of the mailbox).
	
	This procedure allows the Move Server Wizard operation to continue.
	
	Additional query words: msw c1010aae
	
	======================================================================
	Keywords          : exc55 exc55sp1 exc55sp2 exc55sp3 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2 kbExchange550SP1 kbExchange550SP2 kbExchange550SP3
	Version           : winnt:5.5,5.5 SP1,5.5 SP2,5.5 SP3
	Issue type        : kbprb
	
	=============================================================================
	
