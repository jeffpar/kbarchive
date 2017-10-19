---
layout: page
title: "Q303847: User Group Discovery  Collection Is Not Populated to Child Sites"
permalink: /kb/303/Q303847/
---

## Q303847: User Group Discovery  Collection Is Not Populated to Child Sites

	Article: Q303847
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbConfig kbMMC kbServer kbsms200 kbCollections kbDiscovery kbsmsAdmin
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you create a new collection that is based on User and/or User Group
	Discovery account information on a site that is the parent of one or more child
	sites, the collection may not be populated correctly on the child sites. You may
	observe that the collection is created at a child primary site, but the
	collection may not have any members.
	
	Also, you may receive the following status messages for a secondary site in the
	Collection Evaluator component:
	
	  Status Message ID 2519
	  SMS Collection Evaluator failed to enumerate members of collection
	  <CollID> at site <SecondarySiteCode>.
	
	  Status Message ID 2512
	  SMS Collection Evaluator failed to replicate collection <CollID> to
	  child sites.
	
	CAUSE
	=====
	
	This behavior can occur when child sites do not have the User and/or User Group
	Discovery methods enabled.
	
	WORKAROUND
	==========
	
	To work around this behavior, enable the User and/or User Group Discovery
	methods at the child primary site (or sites).
	
	MORE INFORMATION
	================
	
	If either the User or User Group Discovery methods have been previously enabled
	on the child site, the collections can be evaluated, but they may contain
	inaccurate membership information.
	
	Status messages are not displayed at a child primary site to indicate a warning
	or error condition.
	
	Additional query words: prodsms collection child
	
	======================================================================
	Keywords          : kbConfig kbMMC kbServer kbsms200 kbCollections kbDiscovery kbsmsAdmin 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbprb
	
	=============================================================================
	
