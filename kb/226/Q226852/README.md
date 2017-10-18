---
layout: page
title: "Q226852: SMS: Parent Site Collections Locked at Detached Child Site"
permalink: kb/226/Q226852/
---

## Q226852: SMS: Parent Site Collections Locked at Detached Child Site

	Article: Q226852
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug kbCollections
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After a child site is detached from its parent, you may notice collections from
	the parent site still showing in the Administrator Console for the child site.
	These collections are locked and cannot be modified.
	
	CAUSE
	=====
	
	This situation occurs if the SMS_SQL_MONITOR (Smsdbmon.Exe) service experiences
	problems during the detachment process. If SMS_SQL_MONITOR fails, the
	SMS_COLLECTION_EVALUATOR service is not notified that the child site has been
	detached from the parent site, and it does not unlock parent site collections.
	
	WORKAROUND
	==========
	
	To work around this behavior, create a <Site_code>.sha file in the
	Colleval.box directory at the child site.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0.
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug kbCollections 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbbug
	
	=============================================================================
	
