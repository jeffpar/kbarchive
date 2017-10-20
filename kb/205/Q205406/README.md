---
layout: page
title: "Q205406: SMS: Client Access Point and Distribution Point Selection"
permalink: /kb/205/Q205406/
---

## Q205406: SMS: Client Access Point and Distribution Point Selection

{% raw %}

	Article: Q205406
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbAdvertisement kbCAP kbsmsUtil kbSoftwareDist
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you 
	modify the registry, make sure to back it up and make sure that you understand how to restore 
	the registry if a problem occurs. For information about how to back up, restore, and edit the 
	registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	Systems Management Server (SMS) clients use existing connections from the Client
	Access Points (CAPs) and Distribution Points (DPs) designated in their site by
	default. If no existing connection exists, clients randomly select from the
	CAP/DP list for their site. Sites are defined by local or fast network
	connectivity, ensuring load balancing across all CAPs and DPs in the site.
	
	MORE INFORMATION
	================
	
	In some situations, a site may manage a handful of clients across a slow link.
	Although this is not a recommended configuration, there are provisions in the
	SMS 2.0 architecture to force a client to use a specific CAP or DP. When you
	consider an implementation where specific clients have a designated CAP or DP,
	keep in mind that clients that do not explicitly have a preferred CAP or DP
	identified, select their servers randomly. In other words, if a CAP or DP is
	available over a slow link, it still may be chosen by a local client that does
	not have designated preferred servers. Defining a site that includes wide area
	subnets is not recommended as it negates the SMS 2.0 architecture.
	
	For more information about site boundaries and hierarchy configuration, refer to
	Chapter 3 (Planning for SMS in Your Organization) and Chapter 9 (Discovering
	Resources and Installing Clients) in the Microsoft Systems Management Server 2.0
	Administrator's Guide.
	
	Clients can use the following three methods to determine which CAP or DP to use
	(listed in order of attempted use):
	
	- Preferred
	  Connections are attempted to shares that have been assigned to the preferred
	  list and the CAP/DP list. This method is disabled by default. You can specify
	  preferred servers using the Prefserv tool (Prefserv.exe), which is included
	  with the Microsoft BackOffice 4.5 Resource Kit.
	
	- Existing Connection
	  The current list of connections is checked for matches against the shares in
	  the CAP/DP list. The first existing connection is reused. This method is
	  enabled by default for configurations where workgroups, by way of a drive
	  mapping at logon, default to designated application servers, which also
	  perform the role of a DP.
	
	- Random
	  A share is chosen randomly from the list. This method is enabled by default to
	  ensure load balancing across a site.
	
	It is possible to enable, disable, or otherwise configure each server selection
	method using the Prefserv tool.
	
	
	For additional information about this topic, click the article numbers below to
	view the articles in the Microsoft Knowledge Base:
	
	  Q226115 SMS: Preferred Distribution Point Selection Requires Full Package
	  Path
	
	
	Additional query words: prodsms selection designate
	
	======================================================================
	Keywords          : kbsms200 kbAdvertisement kbCAP kbsmsUtil kbSoftwareDist 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
