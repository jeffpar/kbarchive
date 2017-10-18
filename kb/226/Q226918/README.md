---
layout: page
title: "Q226918: SMS: Status Message Numbers Not Consistent Btwn Child and Parent"
permalink: kb/226/Q226918/
---

## Q226918: SMS: Status Message Numbers Not Consistent Btwn Child and Parent

	Article: Q226918
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In Microsoft Systems Management Server (SMS) 2.0, after a child site attaches to
	its parent, the number of status messages reported by the parent site is
	inconsistent with the number reported by the child site.
	
	MORE INFORMATION
	================
	
	When a child site connects to a parent site, the status summarizers forward a
	copy of their status summaries to the parent site. Also, some of the other data
	in the database, such as inventory and discovery records, are sent up to the
	parent site so that the parent site has duplicate copies of all the child site's
	data. Unlike inventory and discovery data, no status messages are sent to the
	parent site. After the attachment has been made, only new status messages are
	replicated to the parent. This behavior is by design.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbinfo
	
	=============================================================================
	
