---
layout: page
title: "Q182065: SNA Client Traps When MMC Snap-in Is Chosen During Installation"
permalink: kb/182/Q182065/
---

## Q182065: SNA Client Traps When MMC Snap-in Is Chosen During Installation

	Article: Q182065
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Windows NT client for SNA Server traps when you open Microsoft Management
	Console (MMC). This problem occurs when the SNA MMC Snap-in is the only option
	chosen during SNA client installation.
	
	CAUSE
	=====
	
	SNA Server Manager was not chosen during SNA client installation, causing the
	trap to occur when you open the Microsoft Management Console window.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 4.0. This
	problem was corrected in the latest SNA Server version 4.0 U.S. Service Pack.
	For information on obtaining this Service Pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	MORE INFORMATION
	================
	
	The SNA Setup has been modified to check whether SNA Manager will be installed.
	If MMC will be installed and SNA Manager has not been selected, the user will be
	returned to the Options dialog box.
	
	Additional query words: snammc
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400
	Version           : WINDOWS:4.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
