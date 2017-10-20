---
layout: page
title: "Q262942: SMS: LSM Is Unable to Uninstall When SMS Sites Share a Domain"
permalink: /kb/262/Q262942/
---

## Q262942: SMS: LSM Is Unable to Uninstall When SMS Sites Share a Domain

{% raw %}

	Article: Q262942
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0,2.0 SP1
	Operating System(s): 
	Keyword(s): kbtool kbsms200 kbsms200bug kbDiscovery
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	When logon points are shared by multiple sites and one domain is removed from
	logon installation and logon discovery, Logon Server Manager (LSM) tries to
	remove the site from the logon points. This succeeds, but the domain entry in
	the site server registry and site control file are not updated and removed.
	Because of this, Logon Server Manager (from that site) continues to try to
	connect to the primary domain controller (PDC) of the appropriate domain during
	each scheduled update interval and repeatedly tries to uninstall.
	
	WORKAROUND
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To work around this problem, delete the domain in the following site server
	registry key:
	
	  HKEY_LOCAL_MACHINE/Software/Microsoft/SMS/Components/SMS NT Logon Server
	  Manager/Domains
	
	After the registry key is removed, the entry is removed from the site control
	file.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0.
	
	MORE INFORMATION
	================
	
	Excessive network traffic and site server processing are experienced as each
	site that wants to remove the domain continues to retry during each logon point
	update cycle. By default, this occurs once per day. Logon Server Manager
	connects to each domain controller in the target domain during each update cycle
	whether or not it is the senior site. Networks with hundreds or even thousands
	of domain controllers, many of which are using slow connections, are the most
	effected. The only way for this cycle to end normally is when all sites have
	removed the domain. When this occurs, each site completely removes the domain
	from its site and never tries to connect to it again. This happens for senior
	sites as well as junior sites.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbtool kbsms200 kbsms200bug kbDiscovery 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1
	Version           : winnt:2.0,2.0 SP1
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
