---
layout: page
title: "Q236391: Restoring SNA Configuration May Not Save Host Security Domains"
permalink: /kb/236/Q236391/
---

## Q236391: Restoring SNA Configuration May Not Save Host Security Domains

	Article: Q236391
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:4.0,4.0 SP1,4.0 SP2
	Operating System(s): 
	Keyword(s): kbsna400sp3fix sna4 kbsna400sp1 kbsna400sp2kbfaq
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 4.0, 4.0 SP1, 4.0 SP2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	After you restore the SNA Server configuration (Com.cfg file) that includes Host
	Security Domains, the next time you go into the Host Account Manager (UDConfig),
	you do not see any of the Host Security Domains that were originally configured.
	
	CAUSE
	=====
	
	If SNA Server is removed and then reinstalled through the Setup process, some
	registry parameters for the SnaDatabase and SnaPMP keys are also inadvertently
	removed. These parameters are needed when using Host Security Integration.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for SNA Server version
	4.0. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q215838 How to Obtain the Latest SNA Server Version 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 4.0, 4.0
	SP1, and 4.0 SP2. This problem was first corrected in SNA Server version 4.0
	Service Pack 3.
	
	MORE INFORMATION
	================
	
	The following steps outline when this problem can be observed:
	
	1. SNA Server is configured using Host Security Domains.
	
	2. The configuration (Com.cfg file) is saved.
	
	3. SNA Server is uninstalled, however, none of the Host Security Components are
	  removed.
	
	4. SNA Server is reinstalled and the Com.cfg file restored.
	
	5. When you go into Host Account Manager (UDConfig), the Host Security Domains
	  that were listed before the restore are gone.
	
	When you view the application log of the Event Viewer, you see the following
	event messages:
	
	  Event 29:
	  PMP attempt to read registry values failed.
	
	  Event 531
	  Unable to Start SnaPMP Server.
	
	  Event 1214
	  Unable to access registry: This could be as a result of an unsuccessful
	  attempt to de-install the host account cache, supplied code 0x0.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsna400sp3fix sna4 kbsna400sp1 kbsna400sp2 kbfaq
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400 kbSNAServ400SP1 kbSNAServ400SP2
	Version           : WINDOWS:4.0,4.0 SP1,4.0 SP2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
