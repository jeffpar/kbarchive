---
layout: page
title: "Q182415: Access Violation with Multiple PU Passthrough Connections"
permalink: /kb/182/Q182415/
---

## Q182415: Access Violation with Multiple PU Passthrough Connections

	Article: Q182415
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
	
	When you activate multiple PU passthrough connections, an access violation may
	occur in Snaservr.exe in function s1pncpua_activate_pupassthru().
	
	CAUSE
	=====
	
	The access violation can occur when a mode-setting command (for example, SABME
	for DLC connections) is forwarded before the partner's link and station Control
	Blocks are set up. This only happens if the mode-setting command is received
	before an XID exchange, which can only happen for PU type 2 Nodes.
	
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
	
