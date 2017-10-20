---
layout: page
title: "Q256905: Resync Request Files Accumulate on Site Server and CAP"
permalink: /kb/256/Q256905/
---

## Q256905: Resync Request Files Accumulate on Site Server and CAP

{% raw %}

	Article: Q256905
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0,2.0 SP1,2.0 SP2
	Operating System(s): 
	Keyword(s): kbtool kbsms200 kbsms200bug
	Last Modified: 25-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1, 2.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you look at the \CAP_xxx\clidata.box on the Client Access Point (CAP) or
	\SMS\Inboxes\Clidata.src on the site server, you may find a large amount of .cfg
	files that are several months old.
	
	CAUSE
	=====
	
	This problem can occur because .cfg files on CAP and site server are not deleted
	after the client performs the resync request.
	
	WORKAROUND
	==========
	
	To work around this problem, analyze the Client.lkp file, and then delete all
	.cfg files that are not being referenced from the Site Server
	\SMS\Inboxes\Clidata.src and the CAP \CAP\Clidata.box. Note that deleting them
	on the site server would prevent them from being copied to any new CAPs, but
	does not remove them from existing CAPs.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0.
	
	
	Additional query words: prodsms resync clidata.src client.lkp
	
	======================================================================
	Keywords          : kbtool kbsms200 kbsms200bug 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1 kbSMS200SP2
	Version           : :2.0,2.0 SP1,2.0 SP2
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
