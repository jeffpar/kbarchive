---
layout: page
title: "Q191417: SMS: Dataloader Service Delete Group Action May Fail"
permalink: kb/191/Q191417/
---

## Q191417: SMS: Dataloader Service Delete Group Action May Fail

	Article: Q191417
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbDataLoader smsdataloader
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The System Management Server Dataloader service may fail to perform a Delete
	Group on the attribute intended for history from the current inventory record.
	When an inventory attribute changes on a client, the old one must be deleted and
	the new one added. The problem occurs, however, when the Delete fails, which can
	lead to duplication of group data.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2. This problem has been corrected in the latest U.S. service pack for
	Systems Management Server version 1.2. For information on obtaining the service
	pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsms SP SP4
	
	======================================================================
	Keywords          : kbDataLoader smsdataloader 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
