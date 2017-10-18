---
layout: page
title: "Q182707: MMC Component Does Not Prompt for Restart After Installation"
permalink: kb/182/Q182707/
---

## Q182707: MMC Component Does Not Prompt for Restart After Installation

	Article: Q182707
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Microsoft Management Console (MMC) requires a restart when initially
	installed. However, SNA Server Setup does not inform the user that a restart is
	required. This can cause unpredictable results when you run the SNA Snap-in.
	
	CAUSE
	=====
	
	The MMC setup code does not set the restart flag during installation.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 4.0. This
	problem was corrected in the latest SNA Server version 4.0 U.S. Service Pack.
	For information on obtaining this Service Pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400
	Version           : WINDOWS:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
