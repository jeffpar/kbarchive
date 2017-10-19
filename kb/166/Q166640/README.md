---
layout: page
title: "Q166640: XFOR: Unable to Delete Read Receipts from Mail Sent to PROFS"
permalink: /kb/166/Q166640/
---

## Q166640: XFOR: Unable to Delete Read Receipts from Mail Sent to PROFS

	Article: Q166640
	Product(s): Microsoft Exchange
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you attempt to delete or move Read Receipts to the Deleted Items, Outbox,
	or Sent Items folders using a Microsoft Exchange Client connected to Microsoft
	Exchange Server version 5.0, the following error message may appear:
	
	  The item could not be deleted. Client operation failed.
	
	The Read Receipts that cause this problem were returned from messages sent to
	PROFS users, using the LINKAGE PROFS connector.
	
	WORKAROUND
	==========
	
	There are two workarounds for this problem:
	
	1. If the Read Receipts are first moved to a personal folder (PST) file, they
	  can be deleted.
	
	2. If you log in Off-line and delete the Read Receipts, and then synchronize the
	  Off-line personal folder (OST), they will be deleted.
	
	MORE INFORMATION
	================
	
	Microsoft Exchange Server configurations that are affected by this problem
	include:
	
	- If you upgrade Microsoft Exchange Server from version 4.0 to 5.0, any Read
	  Receipts generated before the upgrade that still exist after the upgrade will
	  produce this problem.
	
	- If the PROFS connector is installed on a Microsoft Exchange Server version
	  4.0, Read Receipts generated from messages sent over the PROFS connector
	  originating from a user on a Microsoft Exchange Server version 5.0 will
	  produce this problem.
	
	Microsoft Exchange Server configurations that are not affected by this problem
	include:
	
	- If the LINKAGE connector is installed on Microsoft Exchange Server version
	  4.0, Read Receipts generated from messages sent from a Microsoft Exchange
	  Server version 4.0 user across the LINKAGE connector to a PROFs user can be
	  deleted.
	
	- If the LINKAGE connector is installed on Microsoft Exchange Server version
	  5.0, Read Receipts generated from messages sent from a Microsoft Exchange
	  Server version 5.0 user across the LINKAGE connector to a PROFs user can be
	  deleted.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.0. For information on obtaining the service
	pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : 5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
