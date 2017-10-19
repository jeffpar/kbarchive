---
layout: page
title: "Q164905: Can't Find PDC When Creating new Host Security Domain"
permalink: /kb/164/Q164905/
---

## Q164905: Can't Find PDC When Creating new Host Security Domain

	Article: Q164905
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 3.0, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If SNA Server Manager shows the first SNA Server in the subdomain as Offline,
	Manager will display the following error when it attempts to create a new host
	security domain:
	
	  Cannot contact Windows NT Primary Domain Controller
	
	CAUSE
	=====
	
	The SNA Server Manager Host Security extension (Hostsec.dll) was attempting to
	use the first SNA Server in the configuration to locate the Windows NT primary
	domain controller.
	
	RESOLUTION
	==========
	
	An update to SNA Server 3.0 is available to correct this problem. The host
	security extension now tries all SNA Servers in the configuration, not just the
	first server.
	
	The updated module is \<snaroot>\System\Hostsec.dll.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 3.0. This
	problem was corrected in the latest Microsoft SNA Server 3.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsna snahostsec snamanager
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
