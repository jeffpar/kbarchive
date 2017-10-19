---
layout: page
title: "Q121847: Systems Management Server Upgrade with Debug Option Fails"
permalink: /kb/121/Q121847/
---

## Q121847: Systems Management Server Upgrade with Debug Option Fails

	Article: Q121847
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0
	Operating System(s): 
	Keyword(s): kbnetwork smsgeneral kbArtTypeINF
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run Windows NT Server version 3.5 in Kernel Debug mode, the Systems
	Management Server software upgrade process fails on several dynamic-link library
	(DLL) files, thus not completing the upgrade process.
	
	RESOLUTION
	==========
	
	Restart Windows NT Server without the debug option and perform the Systems
	Management Server upgrade process.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.0. This problem was corrected in Systems Management Server version
	1.1.
	
	Additional query words: sms prodsms
	
	======================================================================
	Keywords          : kbnetwork smsgeneral kbArtTypeINF 
	Technology        : kbSMSSearch kbSMS100
	Version           : winnt:1.0
	
	=============================================================================
	
