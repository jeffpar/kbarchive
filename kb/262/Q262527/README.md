---
layout: page
title: "Q262527: SMS Provider Does Not Always Use User Group Membership Cache"
permalink: kb/262/Q262527/
---

## Q262527: SMS Provider Does Not Always Use User Group Membership Cache

	Article: Q262527
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0,2.0 SP1
	Operating System(s): 
	Keyword(s): kbSecurity kbsms200 kbsms200bug kbCollections kbQuery kbsmsProvider kbsms200preSP2fix k
	Last Modified: 25-JUN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The SMS Provider may fail to use the cache when it enumerates User Group
	membership. This may also cause collections to refresh slower when accessing a
	user account that gains rights to User Group Membership. Also, this increases
	the traffic to the Primary Domain Controller (PDC).
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Systems Management
	Server version 2.0. For additional information, please see the following article
	in the Microsoft Knowledge Base:
	
	  Q236325 How to Obtain the Latest Systems Management Server 2.0 Service Pack
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0, SP1. This problem was first corrected in Systems Management Server
	version 2.0 Service Pack 2.
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbSecurity kbsms200 kbsms200bug kbCollections kbQuery kbsmsProvider kbsms200preSP2fix kbsms200sp2fix 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1
	Version           : winnt:2.0,2.0 SP1
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
