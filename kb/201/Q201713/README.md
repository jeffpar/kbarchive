---
layout: page
title: "Q201713: SMS: Error Message on Child Site During Upgrade of Parent"
permalink: /kb/201/Q201713/
---

## Q201713: SMS: Error Message on Child Site During Upgrade of Parent

	Article: Q201713
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsetup kbsms200 kbsms200bug kbsms120 kbUpgrade
	Last Modified: 19-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a Systems Management Server (SMS) 1.2 Primary site, with children, upgrades
	to Systems Management Server (SMS) 2.0, you may receive the following error at
	the child site(s):
	
	  "The network name was deleted"
	
	CAUSE
	=====
	
	The error occurs if a child of the site being upgraded reports to the parent
	site during the upgrade process.
	
	If the parent's upgrade process is delayed, or continues beyond a reporting
	period for the child site, the preceding error occurs.
	
	You can ignore the error. The information reported from the child to the parent
	will be processed into the database.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Install a Systems Management Server version 1.2 site.
	
	2. Create a Secondary site or a Primary child site sharing the database.
	
	3. Attach the child Primary site to the Primary site from step 1.
	
	4. Upgrade the parent Primary site to 2.0.
	
	Additional query words: prodsms smssetup
	
	======================================================================
	Keywords          : kbsetup kbsms200 kbsms200bug kbsms120 kbUpgrade 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
