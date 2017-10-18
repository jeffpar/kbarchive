---
layout: page
title: "Q155789: XADM: Removing Replication Connector Removes Replicated Info."
permalink: kb/155/Q155789/
---

## Q155789: XADM: Removing Replication Connector Removes Replicated Info.

	Article: Q155789
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 03-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If a Microsoft Exchange Messaging Connector and a Microsoft Exchange Replication
	Connector have been set up between two Microsoft Exchange Sites and you no
	longer want either of the Sites to know about the other as if replication had
	never occurred, you can simply delete the Replication Connector. All data that
	had been replicated via the connector will automatically be deleted over a
	period of time.
	
	It is also a good idea to run a Knowledge Consistency Check after deleting the
	Replication Connector in order for the data to be updated immediately.
	
	MORE INFORMATION
	================
	
	Deleting a Replication Connector does not just prohibit any new additions and
	deletions from being made to the Microsoft Exchange Directory. It actually
	causes the Directory to be returned to its original state, as if replication had
	never occurred.
	
	To delete the Replication Connector, simply press Delete while the Replication
	Connector is highlighted in the Microsoft Exchange Administrator program. This
	will generate the following message:
	
	  Deleting the directory replication connector that connects with Site
	  'site name' will stop replication with that site. To re-establish
	  replication with that site, you must add a new directory replication
	  connector. Are you sure you want to delete the directory replication
	  connector?.
	
	Click Yes. You will then get a prompt asking if you want to delete the
	replication connector in the remote site also. After clicking Yes, you will get
	the following confirmation:
	
	  The directory replication connector has been deleted from both the local
	  site and the remote site. Allow up to an hour for replicated data to be
	  completely deleted.
	
	Additional query words: removing deleting replicas
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	
	=============================================================================
	
