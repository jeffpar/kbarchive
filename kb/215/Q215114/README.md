---
layout: page
title: "Q215114: SMS: Clients of SMS 1.2 Site Are Orphaned After Upgrade to SMS 2"
permalink: kb/215/Q215114/
---

## Q215114: SMS: Clients of SMS 1.2 Site Are Orphaned After Upgrade to SMS 2

	Article: Q215114
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200
	Last Modified: 05-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you upgrade a Systems Management Server 1.2 site server to Systems Management
	Server 2.0, the existing 1.2 clients are unable to report inventory and are
	unavailable for remote tools or software distribution until they (the 1.2
	clients) are upgraded to Systems Management Server 2.0 clients. The processes
	that install a client are not enabled on the upgraded site.
	
	Microsoft has confirmed this to be a problem in Systems Management Server version
	2.0.
	
	WORKAROUND
	==========
	
	The Systems Management Server 2.0 site server must be configured to install
	clients through the Systems Management Server Administrator console. This
	includes enabling discovery methods, client installation methods, and client
	agents to be installed. After clients are installed as Systems Management Server
	2.0 clients, they are no longer orphaned.
	
	MORE INFORMATION
	================
	
	A future version of Systems Management Server will include a Site Configuration
	Wizard utility that allows you to create site templates. This will facilitate
	the configuring of multiple upgraded sites in a large hierarchy.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbprb
	
	=============================================================================
	
