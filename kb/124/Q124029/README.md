---
layout: page
title: "Q124029: No Site-Based Mapping for Single-Domain-Multiple-Site Clients"
permalink: kb/124/Q124029/
---

## Q124029: No Site-Based Mapping for Single-Domain-Multiple-Site Clients

	Article: Q124029
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.1
	Operating System(s): 
	Keyword(s): kbnetwork smsgeneral kbArtTypeINF
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you implement logon scripts with Smsls.bat on a single master user domain
	that is split over several sites, you find that a client can be mapped to a
	server in the correct domain, but in the wrong site.
	
	CAUSE
	=====
	
	The SETLS program randomly picks a server from that domain that could be another
	site server and, therefore, prevents the use of logon scripts per site.
	
	RESOLUTION
	==========
	
	Microsoft has modified the files Setls32.exe, Setls16.exe, and Setlsos2.exe to
	correct this problem.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.1. This problem has been corrected in Systems Management Server
	version 1.2.
	
	
	Additional query words: prodsms sms
	
	======================================================================
	Keywords          : kbnetwork smsgeneral kbArtTypeINF 
	Technology        : kbSMSSearch kbSMS110
	Version           : winnt:1.1
	
	=============================================================================
	
