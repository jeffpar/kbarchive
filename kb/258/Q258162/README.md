---
layout: page
title: "Q258162: SMS: High Number of SMS 1.2 Child Sites May Create a Backlog"
permalink: /kb/258/Q258162/
---

## Q258162: SMS: High Number of SMS 1.2 Child Sites May Create a Backlog

{% raw %}

	Article: Q258162
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug kbsms200sp2fix
	Last Modified: 25-JUN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attach a large number of Systems Management Server 1.2 child sites to a
	Systems Management Server 2.0 parent site, you do not see inventory information
	from those child sites reported in the parent site. When you check the parent
	site, you may find a large number of files in the following directory tree:
	
	  Sms\Inboxes\Dataldr.box
	
	In particular, you may notice a large number of files in the Orphans
	subdirectory.
	
	CAUSE
	=====
	
	The Dataloader and Software Inventory Processor may not be able to process
	inventory files fast enough. In addition, the Dataloader creates Data Discovery
	Records (DDRs) for each Management Information Format (MIF) file that is
	processed when the computer cannot be located in the database. Systems
	Management Server 1.2 clients never create DDRs, so the Discovery Data Manager
	(DDM) creates a DDR for each 1.2 MIFs found. In a high-volume situation, the DDM
	is unable to process those DDRs fast enough. The Dataloader tries to process an
	MIF, but is unable to find the computer in the database, so it creates a DDR for
	that client and places the MIF in the Orphans folder. Every 10 minutes,
	Dataloader tries to reprocess the MIF, but it is still unable to find the
	computer in the database, and therefore it creates another DDR for it and moves
	the MIF back to Orphans.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Systems Management
	Server version 2.0. For additional information, click the following article
	number to view the article in the Microsoft Knowledge Base:
	
	  Q236325 How to Obtain the Latest Systems Management Server 2.0 Service Pack
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in Systems Management Server
	version 2.0. This problem was first corrected in Systems Management Server
	version 2.0 Service Pack 2.
	
	MORE INFORMATION
	================
	
	Systems Management Server 2.0 clients generate their own DDRs, unlike Systems
	Management Server 1.2 clients. Data Loader and Software Inventory Processor were
	changed in Systems Management Server 2.0 Service Pack 1 so that they only
	generate a new DDR for a orphan client once every 24 hours, unless the MIF
	originates from a 1.2 client.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug kbsms200sp2fix 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
