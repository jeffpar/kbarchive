---
layout: page
title: "Q166540: XFOR: IMC Appears Hung with Improper DN Format"
permalink: kb/166/Q166540/
---

## Q166540: XFOR: IMC Appears Hung with Improper DN Format

	Article: Q166540
	Product(s): Microsoft Exchange
	Version(s): WinNT:4.0,5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 28-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Internet Mail Connector (IMC) or Internet Mail Service may stop processing
	mail and a mail backlog may build in the connector's mailbox in the Information
	Store (MTS-OUT).
	
	Under the debugger, the connector's threads appear inactive and waiting on a
	critical section.
	
	CAUSE
	=====
	
	An improperly formatted distinguished name (DN) causes the IMC or IMS to
	overwrite memory and corrupt the heap.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 4.0. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server version
	5.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.0. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	MORE INFORMATION
	================
	
	This is a very isolated case in which a third-party product, Baranof's
	MailCheck, was set up with a DN that looked like the following:
	
	  /O=ORGNAME=OU=SITENAME
	
	A proper DN should look like /O=ORGNAME/OU=SITENAME. Baranof's software does not
	check the validity of the DN when entered during the product's setup. As a
	result, messages sent from MailCheck contain this incorrect DN and caused the
	IMC to seem to stop responding.
	
	With the fix applied, the IMC or IMS validates the DN before writing it into
	memory.
	
	MailCheck is manufactured by Baranof's, a vendor independent of Microsoft; we
	make no warranty, implied or otherwise, regarding this product's performance or
	reliability.
	
	
	Additional query words: crash hang
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2
	Version           : WinNT:4.0,5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
