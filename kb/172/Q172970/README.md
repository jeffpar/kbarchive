---
layout: page
title: "Q172970: DMOD Does Not Recreate I/O Threads If Reinitialized"
permalink: /kb/172/Q172970/
---

## Q172970: DMOD Does Not Recreate I/O Threads If Reinitialized

	Article: Q172970
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0 SP1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 3.0 SP1, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you attempt to connect to backup sponsors or backup domains, DMOD does not
	recreate the I/O Worker threads when it reinitializes, so SnaBase fails to
	connect to the backup sponsor.
	
	CAUSE
	=====
	
	When SnaBase switches from the primary domain to the backup domain, it shuts
	down the DMOD and then reinitializes it. This shutdown terminates the I/O
	threads but the reinitialization does not recreate them.
	
	RESOLUTION
	==========
	
	DMOD has been modified so that it will recreate the I/O threads when
	reinitialized.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server 3.0 Service Pack 1
	(SP1). This problem was corrected in the latest SNA Server version 3.0 U.S.
	Service Pack. For information on obtaining this Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:3.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
