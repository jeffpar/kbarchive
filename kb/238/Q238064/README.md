---
layout: page
title: "Q238064: SMS: Sender Routing in Multi-Tiered Hierarchies"
permalink: kb/238/Q238064/
---

## Q238064: SMS: Sender Routing in Multi-Tiered Hierarchies

	Article: Q238064
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbnetwork kbsms200
	Last Modified: 10-MAY-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article summarizes how packages that are configured and sent at a central
	site are sent down to grandchild sites. The following hierarchy example is used
	in this article:
	
	Central Site
	|
	Primary Child Site
	|
	Secondary Child Site (grandchild to the central site)
	
	MORE INFORMATION
	================
	
	A package that is configured at a central site and that is destined for all
	child sites below it, is sent directly to each child site. However, if the
	central site does not have an address to the grandchild site, or if the address
	is unavailable (due to scheduling configuration), the central site sends the
	package through the grandchild's direct parent. This is called routing.
	
	Routing through the direct parent site is recommended in low bandwidth
	environments where the child and the grandchild share the same link to the
	central site (such as through dial-up or RAS). Routing is also recommended for
	ISDN environments that are billed by connection time, as it prevents the same
	package information from being sent twice over the same link.
	
	For more information about senders and addresses, please refer to the Configuring
	Site Communications section of the Administrator's Guide, Chapter 8. For
	information about scheduling, please refer to the following Help file topics:
	
	- Standard Sender Address Properties Dialog Box: General Tab
	
	- Standard Sender Address Properties Dialog Box: Schedule Tab
	
	Additional query words: prodsms lansend outbox schedule route fanout fan out distribute
	
	======================================================================
	Keywords          : kbnetwork kbsms200 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbinfo
	
	=============================================================================
	
