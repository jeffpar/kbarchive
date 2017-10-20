---
layout: page
title: "Q263395: SMS: LSM Prevents Senior Site Logic from Being Transferred"
permalink: /kb/263/Q263395/
---

## Q263395: SMS: LSM Prevents Senior Site Logic from Being Transferred

{% raw %}

	Article: Q263395
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0,2.0 SP1,2.0 SP2
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug kbsms200preSP3
	Last Modified: 20-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1, 2.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Logon Server Manager does not reset senior site information when processing
	multiple domains.
	
	CAUSE
	=====
	
	This behavior occurs because the in-memory cache object is recycled for each
	domain by its primary domain controller (PDC), and it is not able to configure
	the senior site on the backup domain controllers (BDCs).
	
	The Logon Server Manager designates a senior site to update BDCs in cases where
	more than one site shares a logon point. The general logic for senior site
	election gives preference to site version, then to site code ASCII values on the
	sites. The Senior.lst file can be placed on the PDC of a domain to designate a
	specific senior site that can override that logic. However, when sites span
	multiple domains, the Senior.lst file cannot transmit the senior site
	information to the BDCs. The file is not able to configure a senior site for
	other domains.
	
	WORKAROUND
	==========
	
	If the Logon Service Manager is servicing more than one domain, the Senior.lst
	file must be added to all the domains. This can be done by adding the file to
	the PDC on each of the domains.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	
	Additional query words: prodsms senior.lst site
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug kbsms200preSP3 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1 kbSMS200SP2
	Version           : winnt:2.0,2.0 SP1,2.0 SP2
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
