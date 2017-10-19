---
layout: page
title: "Q164935: Shared Folders Drive Subdirectories Are Shared Improperly"
permalink: /kb/164/Q164935/
---

## Q164935: Shared Folders Drive Subdirectories Are Shared Improperly

	Article: Q164935
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
	
	The SNA Server 3.0 shared folders gateway (SFGW) service allows users to share
	the root directory of the drive from SNA Server Manager. You can also share
	subdirectories on that drive, but these shares are not persistent. If the SFGW
	service is stopped, all share information is lost. When you restart SFGW, it
	shares only the root directory.
	
	CAUSE
	=====
	
	When SFGW created the drive, the drive was considered a non-permanent drive,
	similar to a floppy disk. Shares created on this type of drive disappear when
	the drive does; that is, when a disk is removed or the SFGW service is stopped.
	
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
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300
	Version           : WINDOWS:3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
