---
layout: page
title: "Q224595: DCOM Client Cannot Establish CIS Session Using TCP/IP Address"
permalink: /kb/224/Q224595/
---

## Q224595: DCOM Client Cannot Establish CIS Session Using TCP/IP Address

	Article: Q224595
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Cluster Server 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install Microsoft Component Object Model (COM) Internet Services (CIS)
	on a computer running Windows NT that is configured with multiple network
	adapters or with Microsoft Cluster Server, the computer cannot establish a
	communications link to another computer configured as a Component Object Model
	server.
	
	RESOLUTION
	==========
	
	To work around this problem, configure the Distributed Component Object Model
	(DCOM) client to use the cluster server's computer name instead of the TCP/IP
	address when attempting to establish a communications session between the two
	computers.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbAudDeveloper kbClustServSearch
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
