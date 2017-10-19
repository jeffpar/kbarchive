---
layout: page
title: "Q257170: SMS: Collection Evaluator May Not Manage Custom MIF Files"
permalink: /kb/257/Q257170/
---

## Q257170: SMS: Collection Evaluator May Not Manage Custom MIF Files

	Article: Q257170
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug kbCollections
	Last Modified: 03-MAY-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Systems Management Server (SMS) 2.0, when a custom Management Information
	Format (MIF) file is implemented at some sites in a hierarchy, but not in the
	entire hierarchy, Collection Evaluator at the other sites may report errors in
	the status message system because it may not insert the correct criteria for the
	custom-MIF-based collection.
	
	CAUSE
	=====
	
	This problem can occur in a hierarchy that consists of a central site and child
	primary sites. When a custom MIF file is inserted at the central site and at one
	of the child primary sites, along with collections created at the central site
	that are based on the custom MIF file information that may be propagated down
	the hierarchy, the sites that are unaware of the custom MIF files may start
	generating a large number of error messages with status message ID 620.
	Collection Evaluator may report 6 error messages, and then may report 1 error
	message every 15 minutes. This cycle may be repeated indefinitely.
	
	WORKAROUND
	==========
	
	To avoid this problem, implement custom MIF files to all sites in the hierarchy.
	
	MORE INFORMATION
	================
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug kbCollections 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbprb
	
	=============================================================================
	
