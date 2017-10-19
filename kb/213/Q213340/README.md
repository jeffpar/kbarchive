---
layout: page
title: "Q213340: SMS: Can't Open Membership Rules Tab at Child Site"
permalink: /kb/213/Q213340/
---

## Q213340: SMS: Can't Open Membership Rules Tab at Child Site

	Article: Q213340
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbMMC kbServer kbsms200 kbsms200bug kbCollections
	Last Modified: 22-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attach a site to a parent site that has a collection with an identical
	name as a collection at the new child site, the collections are properly
	replicated to the child site and may result in two identically named collections
	being listed at the child site. However, when you click the Membership Rules tab
	of either collection, you receive the following error message:
	
	  This collection name is already in use. Please enter a different name.
	
	CAUSE
	=====
	
	This behavior occurs because Microsoft Systems Management Server 2.0 enforces
	uniqueness based on name. Note that this behavior does not occur for the default
	collections installed by Systems Management Server.
	
	WORKAROUND
	==========
	
	In this situation, Systems Management Server 2.0 prompts the user to fix the
	name conflict. When the collection's Properties page is open, change either the
	child site's collection name or the identical collection name at the parent
	site.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Systems Management
	Server version 2.0.
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbMMC kbServer kbsms200 kbsms200bug kbCollections 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
