---
layout: page
title: "Q138833: SNA Admin Loads Faster with Improvements in SNACFG.DLL"
permalink: kb/138/Q138833/
---

## Q138833: SNA Admin Loads Faster with Improvements in SNACFG.DLL

	Article: Q138833
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
	
	The following changes have been made to the configuration interface (SNACFG.DLL)
	so that the SNA Server Administration program loads faster:
	
	1. When the SNA Server configuration file (COM.CFG) is loaded, SNA Server no
	  longer verifies that all SNA Server users and 3270 LUs/pools are uniquely
	  defined in the configuration file.
	
	2. The handling of SNA Server user record entries has been improved to speed up
	  retrieval of user records, when requested by a 3270 emulation program.
	
	STATUS
	======
	
	Obtaining the Updated SNACFG.DLL
	--------------------------------
	
	This feature is included in the latest U.S. Service Pack for SNA Server for
	Windows NT, version 2.11. For information on obtaining the Service Pack, query
	on the following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsna 2.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.11
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
