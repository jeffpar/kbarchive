---
layout: page
title: "Q162765: Access Violation in Snadmod.dll with Multithreaded SLI App."
permalink: /kb/162/Q162765/
---

## Q162765: Access Violation in Snadmod.dll with Multithreaded SLI App.

	Article: Q162765
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11,2.11 SP1
	Operating System(s): 
	Keyword(s): kbnetworkkbbuglist
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.11, 2.11 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you run a multithreaded SLI application on an SNA Server or an SNA Server
	Windows NT client, an access violation may occur within Snadmod.dll.
	
	CAUSE
	=====
	
	This is caused by an internal error within the SNA Server Windows NT client.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 2.11and 2.11
	Service Pack 1. (SP1)
	
	
	A supported fix is now available for 2.11 SP1, but it has not been fully
	regression-tested and should be applied only to systems experiencing this
	specific problem. Unless you are severely impacted by this specific problem,
	Microsoft recommends that you wait for the next Service Pack that contains this
	fix. Contact Microsoft Technical Support for more information.
	
	
	
	
	Additional query words: prodsna
	
	======================================================================
	Keywords          : kbnetwork kbbuglist
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ211 kbSNAServ211SP1
	Version           : WINDOWS:2.11,2.11 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
