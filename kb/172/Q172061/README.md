---
layout: page
title: "Q172061: Browsing Domains Using SNA Win95 UDConfig Does Not Work"
permalink: /kb/172/Q172061/
---

## Q172061: Browsing Domains Using SNA Win95 UDConfig Does Not Work

	Article: Q172061
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 01-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The SNA Windows 95 client version of the Host Account Manager configuration
	utility (UDConfig.exe) is unable to browse domains. When you click Select Domain
	on the File menu, nothing happens and no error messages are displayed.
	
	CAUSE
	=====
	
	The "Select Domain" dialog box does not function correctly in the SNA Server
	Windows 95 client version of Udconfig.exe. However, "Select Domain" does work on
	Windows NT clients.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 3.0 and 3.0
	Service Pack 1 (SP1). This problem was corrected in the latest SNA Server
	version 3.0 U.S. Service Pack. For information on obtaining this Service Pack,
	query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ300SP1
	Version           : WINDOWS:3.0,3.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
