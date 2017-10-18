---
layout: page
title: "Q140819: Systems Management Server is Unable to Get Global Groups"
permalink: kb/140/Q140819/
---

## Q140819: Systems Management Server is Unable to Get Global Groups

	Article: Q140819
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.10
	Operating System(s): 
	Keyword(s): kbnetwork kbPGC smspgc
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.10 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When Systems Management Server is unable to obtain a domain controller address
	(via the browser service), Systems Management Server is unable to get global
	groups.
	
	For example:
	
	Assume a Windows for Workgroups client is on a network segment, and a logon
	domain server is on a different segment connected through a router. The
	computers are running TCP/IP as their only protocol, and are using the LMHOSTS
	file for name resolution. There is also a resource domain on the client segment
	to which inventory is reported through SMSLS.INI mapping. Further assume there
	are no computers on the client segment acting as Segment Master Browser for the
	logon domain, (which thus causes domain-wide browsing to fail.)
	
	CAUSE
	=====
	
	The failure occurs because SMS Program Group Control (PGC) issues a browse list
	request (NetServerEnum2 API call) to look for domain controllers in the logon
	domain, yet there is no Segment Master Browser to respond. The router prevents
	browse request broadcasts from propagating to other segments, so no browse list
	is ever received.
	
	NOTE: for more information on browsing with LMHOSTS files, see Q150800 - Domain
	Browsing with TCP/IP and LMHOSTS Files.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.1. This problem has been corrected in Systems Management Server
	version 1.2.
	
	
	Additional query words: prodsms sms
	
	======================================================================
	Keywords          : kbnetwork kbPGC smspgc 
	Technology        : kbSMSSearch
	Version           : winnt:1.10
	
	=============================================================================
	
