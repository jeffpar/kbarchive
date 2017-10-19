---
layout: page
title: "Q160535: XCON: Description of Event ID 145"
permalink: /kb/160/Q160535/
---

## Q160535: XCON: Description of Event ID 145

	Article: Q160535
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You might find an entry in the Windows NT Event Viewer Application log that is
	similar to the following:
	
	  ID 145
	  Category X.400 Service
	  Server Name Event Description Occurrence
	  RED-82-MSG An error occurred while attempting to route message 1 C=US;A=
	  ;P=msft;L=RED-10-MSG-961105030314Z-20600 to alternate recipient
	  DN:/o=MICROSOFT/ou=NORTHAMERICA/cn=RECIPIENTS/cn=487.The alternate recipient
	  is unusable. [MTA DISP:ROUTER 24 119] (14)
	
	The originator of a message set the Recipient Reassignment Prohibited flag in the
	message and the recipient had an alternate recipient defined. This reassignment
	failed due to the aforementioned flag. This behavior is by product design.
	
	The Recipient Reassignment Prohibited flag is an extended MAPI call and cannot be
	set using either the Microsoft Exchange Client or the Microsoft Exchange Server
	Administrator program. To set the flag, you must have an application that uses
	the extended MAPI call.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
