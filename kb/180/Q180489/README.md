---
layout: page
title: "Q180489: APPC Partnership Changes May Cause SNA Manager to Disappear"
permalink: /kb/180/Q180489/
---

## Q180489: APPC Partnership Changes May Cause SNA Manager to Disappear

	Article: Q180489
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0 SP2
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 01-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 3.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	This problem occurs when you are using SNA Server on the Windows NT platform.
	After you add or remove several static APPC partnerships from any APPC Mode
	Definition within SNA Server Manager, and you save the configuration, you may
	get an access violation. This access violation occurs either when you save the
	configuration or later when you close the subdomain.
	
	CAUSE
	=====
	
	This is caused when Snaadmin.dll fails to properly release the temporary
	configuration records it created while editing APPC partnerships.
	
	Some of the functions used to support APPC static partnering create a temporary
	edit copy. These functions do not get deleted when cleaning up the records;
	Snaadmin.dll ends up with bad pointers.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem with SNA Server 3.0 Manager
	included in Microsoft SNA Server version 3.0 Service Pack 2.
	
	This problem was corrected in the latest SNA Server version 3.0 U.S. Service
	Pack. For information on obtaining this Service Pack, query on the following
	word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: snamanager vanish poof
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300SP2
	Version           : WINDOWS:3.0 SP2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
