---
layout: page
title: "Q220886: Active SNA Server Clients Do Not Appear in License Manager"
permalink: /kb/220/Q220886/
---

## Q220886: Active SNA Server Clients Do Not Appear in License Manager

	Article: Q220886
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0SP1,3.0SP2,3.0SP3,4.0,4.0SP1,4.0SP2
	Operating System(s): 
	Keyword(s): kbsna400sp3fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0SP1, 3.0SP2, 3.0SP3, 4.0, 4.0SP1, 4.0SP2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Connected SNA Server Clients do not show up in License Manager when the SNA
	Server has been be configured for "Per Server" mode. This does not affect SNA
	Servers configured for "Per Seat" mode.
	
	CAUSE
	=====
	
	In "Per Seat" mode, when a new client connects, SNA Server calls the Windows NT
	License API, NtLicenseRequest(), and when a client disconnects, the
	NtLSFreeHandle() is called. When SNA Server is configured for "Per Server" mode,
	at startup it reads the number of licenses from the registry and, then SNA
	Server enforces this number. In this mode, SNA Server will never call the
	Windows NT License APIs.
	
	SNA Server has now been changed to call the Windows NT License APIs when running
	in "Per Server" mode.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for SNA Server version
	4.0. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q215838 How to Obtain the Latest SNA Server Version 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server 3.0, 3.0 SP1, 3.0
	SP2, 4.0, 4.0 SP1, 4.0 SP2. This problem was first corrected in SNA Server
	version 4.0 Service Pack 3.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsna400sp3fix 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400
	Version           : WINDOWS:3.0,3.0SP1,3.0SP2,3.0SP3,4.0,4.0SP1,4.0SP2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
