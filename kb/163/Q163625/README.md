---
layout: page
title: "Q163625: XFOR: How to Completely Remove a Requestor"
permalink: /kb/163/Q163625/
---

## Q163625: XFOR: How to Completely Remove a Requestor

	Article: Q163625
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage exc4 exc5 exc55
	Last Modified: 19-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Sometimes customers need to remove a Requestor or a Remote Requestor object
	either to troubleshoot or to make a change in their organization configuration.
	
	MORE INFORMATION
	================
	
	Note that deleting the requestor or remote requestor object will not remove the
	hidden custom recipient address. This address will be in the Recipients
	container and will be in the form of <network>\<postoffice>\$SYSTEM,
	where <network> and <postoffice> correspond to the connected
	postoffice on Microsoft Mail.
	
	When you remove a Requestor or Remote Requestor object, this address should be
	deleted, and then replication allowed to occur to propagate this change before
	another Requestor or Remote Requestor is created. This will prevent duplicate
	addresses from being inadvertently created.
	
	To remove the hidden recipient, use the following steps:
	
	1. In Exchange Administrator, open the Recipients container.
	
	2. From the View menu, choose Hidden Recipients. This should allow you to see
	  all hidden recipients in the container.
	
	3. Delete the hidden recipient for the $SYSTEM account on the connected
	  Network/Postoffice.
	
	When MS Mail sends a dirsync (directory synchronization) message to Exchange, it
	sends it from $SYSTEM to the dirsync address of the Exchange local postoffice.
	If there are duplicates of the $SYSTEM address, the directory service will not
	process the message. In addition, non-delivery reports (NDRs) of dirsync
	messages are not returned to the sender nor copied to the Administrator or
	Postmaster.
	
	Indicators that duplicate addresses exist are 139 errors in the application log
	(with directory synchronization logging turned to maximum) and SrvTx messages
	not appearing in the Administrator's mailbox as specified. An additional
	indicator is that updates will not appear in Exchange after synchronization.
	
	For information about how to copy dirsync messages to a requestor mailbox on
	Exchange, please see the following article in the Microsoft Knowledge Base:
	
	  Q149905 XFOR: Copying DXA Messages to a Mailbox
	
	Additional query words: 139 error message copy SYSTEM1
	
	======================================================================
	Keywords          : kbusage exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	
	=============================================================================
	
