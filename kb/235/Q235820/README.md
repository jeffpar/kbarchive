---
layout: page
title: "Q235820: SMS: Programs Advertised to Users Executed by Non Members"
permalink: kb/235/Q235820/
---

## Q235820: SMS: Programs Advertised to Users Executed by Non Members

	Article: Q235820
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbtool kbsms200 kbsms200bug kbAdvertisement kbsms200sp2fix
	Last Modified: 25-JUN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a package is advertised to a collection of users, the package program may
	be executed by a user who is not a member of the collection.
	
	CAUSE
	=====
	
	This problem can occur because Systems Management Server (SMS) creates per-user
	offers only when the advertisement is configured to use the "Run once for every
	user who logs on" feature. If an advertisement is configured to use the "Run
	once for first user who logs on" feature, the advertisement appears, regardless
	of the account that is used to log on.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Systems Management
	Server version 2.0. For additional information, please see the following article
	in the Microsoft Knowledge Base:
	
	  Q236325 How to Obtain the Latest Systems Management Server 2.0 Service Pack
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article. This problem was first corrected in
	Systems Management Server version 2.0 Service Pack 2.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbtool kbsms200 kbsms200bug kbAdvertisement kbsms200sp2fix 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
