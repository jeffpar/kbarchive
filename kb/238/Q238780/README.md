---
layout: page
title: "Q238780: SMS: Best Practices for Applying Systems Management Server 2.0 S"
permalink: /kb/238/Q238780/
---

## Q238780: SMS: Best Practices for Applying Systems Management Server 2.0 S

	Article: Q238780
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200
	Last Modified: 25-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	There are various issues to consider before a Systems Management Server 2.0 site
	is upgraded to Service Pack 1 (SP1), including:
	
	- Site system automatic upgrade considerations
	
	- Client upgrade considerations
	
	- Network bandwidth considerations
	
	You can use this article as a best practices checklist when upgrading your sites.
	
	MORE INFORMATION
	================
	
	Single Domain/Multiple-Site Model
	---------------------------------
	
	If you have multiple Systems Management Server 2.0 sites sharing the same Windows
	NT domain, and these sites have Windows NT Logon Discovery/Installation enabled,
	please click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q236596 SMS: Client Components Fail to Install with SMS 2.0 SP1
	
	When one site in this model is upgraded to Systems Management Server 2.0 SP1, all
	logon points are also upgraded. The next time clients log on and run the Systems
	Management Server logon scripts, they also receive the upgraded base components
	(shared components) from the logon point. However, if the client's site is not
	upgraded (therefore, the client access point (CAP) servers are not upgraded),
	the client upgrade may not be successful when the client connects to the CAP
	server for optional components. At this point, the client may also stop
	responding (hang).
	
	To avoid client computer hanging problems, use the following recommended
	guidelines before you upgrade a Systems Management Server 2.0 site to SP1:
	
	- Disable Systems Management Server logon scripts on all sites in the
	  organization. You can do this using several methods. One of the easiest
	  methods is to add the following line at the top of the Smsls.bat logon
	  script:
	
	  GOTO END
	
	- Stop or disable all advertisements to clients.
	
	- Upgrade all sites in the organization at the same time, or at least as
	  closely together as possible. This prevents client component version mismatch
	  problems.
	
	- Turn on logon scripts for a few clients at a time after all sites, CAP
	  servers, and logon point servers are upgraded.
	
	- Schedule a site upgrade right before a slow network activity period (for
	  example, on a Friday afternoon), so site systems and clients that are on the
	  network are upgraded during the weekend.
	
	For additional information, please click the article numbers below to view
	related articles in the Microsoft Knowledge Base:
	
	  Q236325 How to Obtain the Latest Systems Management Server Service Pack
	
	  Q237543 SMS: Service Pack Upgrade Considerations for Clients
	
	  Q236596 SMS: Client Components Fail to Install with SMS 2.0 SP1
	
	  Q238864 Windows 98/95 Clients Hang or Become Unstable After SP1 Upgrade
	
	Clients Upgrade During CCIM 23-Hour Maintenance Cycle
	-----------------------------------------------------
	
	When a site is upgraded, all CAP servers and logon points are automatically
	upgraded. Windows NT-based computers that are on the network and computers
	running Microsoft Windows 95/98 that are logged on to the network and left
	running all night, initiate the upgrade process during their 23-hr Client
	Component Installation Manager (CCIM) maintenance cycle.
	
	Upgrade Considerations for Site Systems on Slow WAN Links
	---------------------------------------------------------
	
	Because of potential problems stemming from slow network performance, the
	installation of CAP servers and logon points located across WAN links is not
	recommended or supported. If your hierarchy includes such systems, keep in mind
	that upgrading your site initiates an automatic and irreversible upgrade of
	these systems.
	
	RAS Clients Receive SP1 Upgrade on Next Access to Upgraded CAP Server or Logon Point
	------------------------------------------------------------------------------------
	
	If you have Systems Management Server client software installed on computers
	dialing in to the network, upgrading your site to SP1 initiates a client upgrade
	the next time the client dials in and contacts the site systems. To avoid
	upgrading over a RAS connection, schedule a site upgrade during a time when
	laptops can be logged on to the LAN.
	
	Remote Systems Management Server Administrator Consoles
	-------------------------------------------------------
	
	Upgrading a site does not automatically upgrade all remote Systems Management
	Server Administrator consoles. Remote consoles must be manually upgraded.
	Upgrade the remote consoles as soon as possible after the site upgrade, to
	ensure consistency with the site server and site database.
	
	Additional query words: prodsms servpack considerations sms20sp1 kbhowto smsfaqtop
	
	======================================================================
	Keywords          : kbsms200 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbinfo
	
	=============================================================================
	
