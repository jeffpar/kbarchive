---
layout: page
title: "Q232307: XFOR: How to One-off a SNADS Address"
permalink: kb/232/Q232307/
---

## Q232307: XFOR: How to One-off a SNADS Address

	Article: Q232307
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 09-AUG-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to one-off address mail from Microsoft Exchange
	Server to SNADS.
	
	MORE INFORMATION
	================
	
	To one-off address mail to SNADS, perform the following:
	
	1. From the Microsoft Exchange or Microsoft Outlook client, compose a new
	  message.
	
	2. In the To field, type the following:
	
	  [SNADS:DGN(DEN)]
	
	  where DGN is the recipient's Distribution Group Name and DEN is the
	  recipient's Distribution Element Name. DGN and DEN are addressing components
	  of a SNADS address. DGN is similar to a post office (or just a grouping of
	  users); DEN is similar to a username. For example:
	
	  [SNADS:MICROSFT(USERID)]
	
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbhowto
	
	=============================================================================
	
