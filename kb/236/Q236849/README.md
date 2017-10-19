---
layout: page
title: "Q236849: Host Account Cache Needs to Start Before SnaServer Service"
permalink: /kb/236/Q236849/
---

## Q236849: Host Account Cache Needs to Start Before SnaServer Service

	Article: Q236849
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0,4.0 SP1,4.0 SP2
	Operating System(s): 
	Keyword(s): kbsna400sp3fix kbsna300sp1 kbsna300sp2 kbsna300sp3 sna4 kbsna400sp1 kbsna400sp2
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 4.0, 4.0 SP1, 4.0 SP2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Applications that use the Single Sign-on feature of SNA Server may fail to open
	a session with the remote node because of a bad password. SnaServer internal and
	message traces will show that password substitution is not occurring while the
	Host Account Cache Service (SnaDatabase) is running on the Windows NT primary
	domain controller. The problem only occurs when the servers hosting the SNA
	Server and the Host Account Cache services are rebooted.
	
	CAUSE
	=====
	
	The SnaServer service checks for an existing Host Account Cache service in the
	Windows NT domain at startup time. If no Host Account Cache can be found within
	a minute, the SnaServer service assumes that no Host Account Cache has been
	installed in that domain and does not check again until it is restarted.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for SNA Server version
	4.0. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q215838 How to Obtain the Latest SNA Server Version 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server version
	3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 4.0, 4.0 SP1, and 4.0 SP2. This problem was
	first corrected in SNA Server version 4.0 Service Pack 3.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsna400sp3fix kbsna300sp1 kbsna300sp2 kbsna300sp3 sna4 kbsna400sp1 kbsna400sp2 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ300SP2
	Version           : WINDOWS:3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0,4.0 SP1,4.0 SP2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
