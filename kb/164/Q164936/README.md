---
layout: page
title: "Q164936: Shared Folders Gateway Creates Incorrect Drive &amp; Share Info."
permalink: /kb/164/Q164936/
---

## Q164936: Shared Folders Gateway Creates Incorrect Drive &amp; Share Info.

	Article: Q164936
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 3.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The SNA Server 3.0 shared folders gateway (SFGW) service may try to share out
	folders from multiple AS/400's with the same share name. It may also try to
	create multiple drives with the same drive letter.
	
	CAUSE
	=====
	
	SFGW does not check to determine whether the share name and drive letter are
	unique when folders are set up from multiple AS/400's. When sharing multiple
	folders from a single system, share names and drive letters are correct.
	
	RESOLUTION
	==========
	
	A fix is available to correct this problem.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 3.0. This
	problem was corrected in the latest Microsoft SNA Server 3.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsna
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300
	Version           : WINDOWS:3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
