---
layout: page
title: "Q149198: TN3270 Users Are Able to Get an LU After It Has Been Removed"
permalink: kb/149/Q149198/
---

## Q149198: TN3270 Users Are Able to Get an LU After It Has Been Removed

	Article: Q149198
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 2.11, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In some situations, you can get an LU that has been previously removed from the
	TN3270 configuration.
	
	
	WORKAROUND
	==========
	
	Stop and restart the TN3270 server after you remove the LU from the
	configuration.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server version
	2.11. This problem was corrected in the latest U.S. Service Pack for SNA Server.
	For information on obtaining this update, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: 2.11 sp1 prodsna
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.11
	Issue type        : kbprb
	
	=============================================================================
	
