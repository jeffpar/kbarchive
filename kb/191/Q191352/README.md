---
layout: page
title: "Q191352: SMS: Duplicate/Cross Linked Datakeys Appear on Very Large Sites"
permalink: kb/191/Q191352/
---

## Q191352: SMS: Duplicate/Cross Linked Datakeys Appear on Very Large Sites

	Article: Q191352
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbDatabase kbInventory smsinv smsdatabasekbfaq
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After sites have more than 15,000 computers inventoried into the database,
	duplicate or cross-linked datakeys may begin to appear.
	
	This can cause such problems as the wrong computer being remote controlled or
	receiving the wrong software distribution.
	
	When cross-linked and duplicate datakeys begin to appear, they may be found on
	but are not limited to the following tables:
	
	  Netcard_spec
	  Disk_spec
	  Environment_spec
	  Identification_spec
	
	Please contact Microsoft Systems Management Server Product support for more
	information.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2. This problem was corrected in the latest Microsoft Systems
	Management Server 1.2 U.S. Service Pack. For information on obtaining the
	service pack, query on the following word in the Microsoft Knowledge Base
	(without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsms sp sp4 data keys key crosslink crosslinked crosslinks
	
	======================================================================
	Keywords          : kbDatabase kbInventory smsinv smsdatabase kbfaq
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
