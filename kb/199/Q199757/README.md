---
layout: page
title: "Q199757: XIMS: Link Monitor Setup Fails with Two NDRs on Notes Connector"
permalink: /kb/199/Q199757/
---

## Q199757: XIMS: Link Monitor Setup Fails with Two NDRs on Notes Connector

	Article: Q199757
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you set up a link monitor to a foreign system, you can send a ping message
	to a mailbox that doesn't exist. A mail message with an invalid address will
	make it across the connector into the foreign system where it is rejected as an
	invalid address and returned to the Exchange Server address of the sender. In
	the case of the Notes Connector, the sender's address will be the Notes address
	of the Exchange Server System Attendant.
	
	MORE INFORMATION
	================
	
	The first non-delivery report (NDR) in this case is normal. If, however, the
	Exchange Server computer sends an NDR in reply to the original NDR, the problem
	lies with the Notes address of the System Attendant.
	
	To verify the System Attendant's e-mail addresses perform the following:
	
	1. Start the Microsoft Exchange Administrator program.
	
	2. Open the Exchange Server's Mailbox Resources under the server's Private
	  Information Store object.
	
	3. Double-click the System Attendant mailbox.
	
	4. Select the E-mail Addresses tab, and verify that the Notes address is
	  correct, (for example, it has no extra spaces).
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbinfo
	
	=============================================================================
	
