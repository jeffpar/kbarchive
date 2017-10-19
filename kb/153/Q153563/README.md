---
layout: page
title: "Q153563: SMS: Inventory of NetWare Servers Is Delayed"
permalink: /kb/153/Q153563/
---

## Q153563: SMS: Inventory of NetWare Servers Is Delayed

	Article: Q153563
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1
	Operating System(s): 
	Keyword(s): kbnetwork kbInventory kbMaintMan smsinv smsmaintman
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	The following tasks performed by the Maintenance Manager service may be delayed:
	
	- RAW inventory files remain on logon servers awaiting collection
	
	- Updated Resync.cfg file not posted to logon servers
	
	- Site property changes involving clients are not reflected in Domain.ini on
	  the logon servers
	
	- A site component addition or removal involving logon server components does
	  not reach the logon servers
	
	- NetWare logon server performance may appear to be degraded by excessive disk
	  activity. When you check with the Monitor utility on a NetWare server, you
	  may see sporadic processor utilization and hard disk activity.
	
	CAUSE
	=====
	
	The Systems Management Server Maintenance Manager service performs inventory on
	the NetWare server every 24 hours. This includes software inventory, if defined.
	On NetWare servers with large volumes, this can take a considerable amount of
	time. Combined with the fact that a number of NetWare logon server may be
	defined, the Maintenance Manager service can take an extended period to perform
	the software inventory.
	
	Inventory is initially taken for NetWare servers during the first cycle of
	Maintenance Manager after startup. Inventory is again taken 24 hours after the
	last inventory of a NetWare server is taken. There is no way to alter the
	24-hour inventory period in Systems Management Server 1.0 or 1.1.
	
	WORKAROUND
	==========
	
	Disable software inventory for each package for which inventory is defined on
	the site server.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	versions 1.0 and 1.1. This problem has been corrected in Systems Management
	Server version 1.2.
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbnetwork kbInventory kbMaintMan smsinv smsmaintman 
	Technology        : kbSMSSearch kbSMS100 kbSMS110
	Version           : winnt:1.0,1.1
	
	=============================================================================
	
