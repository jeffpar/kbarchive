---
layout: page
title: "Q248227: SMS: Data Loader Drops Info When Processing an SMS 1.2 MIF"
permalink: /kb/248/Q248227/
---

## Q248227: SMS: Data Loader Drops Info When Processing an SMS 1.2 MIF

	Article: Q248227
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbinterop kbClient kbMMC kbsms200 kbsms200bug kbDataLoader kbInventory kbsmsAdmin
	Last Modified: 12-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When hardware inventory from a Microsoft Systems Management Server (SMS) version
	1.2 client is passed from an SMS 1.2 child site to an SMS 2.0 parent site, the
	Last Login Name, Domain Name, and MAC Address fields in the Management
	Information Format (MIF) file are ignored by the SMS 2.0 Data Loader and are not
	written to the database as expected.
	
	WORKAROUND
	==========
	
	To work around this issue, use the SMS 1.2 site to query for Last Login Name,
	Domain Name, and MAC Addresses.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0.
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbinterop kbClient kbMMC kbsms200 kbsms200bug kbDataLoader kbInventory kbsmsAdmin 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
