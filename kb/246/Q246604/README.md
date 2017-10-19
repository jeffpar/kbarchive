---
layout: page
title: "Q246604: SMS: Software Inventory Is Not Processed Without Parent Site CAP"
permalink: /kb/246/Q246604/
---

## Q246604: SMS: Software Inventory Is Not Processed Without Parent Site CAP

	Article: Q246604
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0,2.0 SP1,2.0 SP2,2.0 SP3
	Operating System(s): 
	Keyword(s): kbClient kbConfig kbDatabase kbMMC kbServer kbsms200 kbsms200bug kbCAP kbCollections kb
	Last Modified: 16-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1, 2.0 SP2, 2.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Software inventory information from a child (primary or secondary) site may not
	appear in the site database on the parent site. Additionally, software inventory
	files may be backlogged in the Sms\Inboxes\Sinv.box folder on the parent site
	server.
	
	CAUSE
	=====
	
	A Client Access Point (CAP) is not defined for the parent site. By default, the
	site server is assigned the CAP role. The Systems Management Server (SMS)
	Administrator console allows the administrator to remove this role, providing a
	warning that no CAPs are defined.
	
	WORKAROUND
	==========
	
	Under Site Settings, click Site Systems. Click an appropriate site system, or
	add a new one, and then enable the CAP role for that site system. There is very
	little impact on the site in having a CAP and no clients assigned.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0.
	
	MORE INFORMATION
	================
	
	If logging is enabled, check the Sinvproc.log file. It reports the following
	message:
	
	  Waiting for the inbox manager to create the inboxes, retry in 10 seconds.
	
	Even if there are no clients directly assigned to a site, a CAP is required for
	Inbox Manager to create the appropriate inbox definitions and rules. The
	Software Inventory processor relies on these to locate the incoming folder for
	software inventory files and process files that are replicated from child
	(primary or secondary) sites.
	
	For additional information about how to enable logging, click the article number
	below to view the article in the Microsoft Knowledge Base:
	
	  Q214969 SMS: Server Component Logging Is Turned Off by Default
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbClient kbConfig kbDatabase kbMMC kbServer kbsms200 kbsms200bug kbCAP kbCollections kbInventory 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1 kbSMS200SP2 kbSMS200SP3
	Version           : :2.0,2.0 SP1,2.0 SP2,2.0 SP3
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
