---
layout: page
title: "Q260013: XADM: Unable to View Free and Busy Time Across Exchange Sites"
permalink: /kb/260/Q260013/
---

## Q260013: XADM: Unable to View Free and Busy Time Across Exchange Sites

	Article: Q260013
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0,5.5
	Operating System(s): 
	Keyword(s): exc5 exc55
	Last Modified: 16-JUL-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When users attempt to view free and busy time for users in another site, they
	may only see hash marks for those users on the Attendee Availability tab, for
	example:
	
	  Username \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
	
	CAUSE
	=====
	
	Free and busy replication has not been configured to replicate across all sites.
	
	RESOLUTION
	==========
	
	In the Exchange Administrator program, follow these steps to configure free and
	busy replication:
	
	1. Locate the Schedule+ Free Busy folder. To do this, click the Organization
	  Level, click Folders, click System Folders, and then click Schedule+ Free
	  Busy folder. This displays all free and busy folders for each site within the
	  organization.
	
	2. Open the properties for the local site.
	
	3. On the Replicas tab, include the other sites in the Replicate Folders To
	  pane.
	
	After the replication procedure is finished, all users can view free and busy
	information across all sites.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : winnt:5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
