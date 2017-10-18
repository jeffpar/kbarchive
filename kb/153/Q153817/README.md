---
layout: page
title: "Q153817: SMS: Inventory Fails if Removable Media Drive Has No Disk"
permalink: kb/153/Q153817/
---

## Q153817: SMS: Inventory Fails if Removable Media Drive Has No Disk

	Article: Q153817
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1,1.2
	Operating System(s): 
	Keyword(s): kbnetwork kbInventory smsinv
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If a client has a removable media drive, such as ZIP Disk or Bernoulli, and
	inventory is run against the client when there is no media in drive, inventory
	fails with the following error messages:
	
	  HARDWARE INVENTORY PHASE
	  -[22%]-
	  Not Ready Reading Drive D
	  Abort, Retry, Fail?
	
	NOTE: If you press A for Abort, you are instructed to select another default
	drive and INVDOS halts. If you press F for Fail, INVDOS continues.
	
	  SOFTWARE INVENTORY PHASE
	  -[100%}-
	  Not Ready Reading Drive D
	  Abort, Retry, Fail?
	
	WORKAROUND
	==========
	
	To work around this problem, create an SMSSAFE.TMP to skip the inventory check
	for the drive. Insert the necessary media into the drive prior to inventory.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Systems Management Server version 1.2. For information on obtaining
	the Service Pack, query on the following word in the Microsoft Knowledge Base
	(without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsms zip bernoulli iomega
	
	======================================================================
	Keywords          : kbnetwork kbInventory smsinv 
	Technology        : kbSMSSearch kbSMS100 kbSMS110 kbSMS120
	Version           : winnt:1.0,1.1,1.2
	
	=============================================================================
	
