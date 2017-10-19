---
layout: page
title: "Q151199: TN3270E Admin Shows LU Names Incorrectly in Edit Configuration"
permalink: /kb/151/Q151199/
---

## Q151199: TN3270E Admin Shows LU Names Incorrectly in Edit Configuration

	Article: Q151199
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11 SP1
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 2.11 SP1, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The SNA Server 2.11 Service Pack 1 TN3270E Administration utility incorrectly
	displays LU or LU Pools in the Edit Configuration dialog box.
	
	CAUSE
	=====
	
	The TN3270E Admin utility does an incorrect string compare on LU names when it
	searches for an LU.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server for Windows NT
	version 2.11.sp1. This problem was corrected in the latest Microsoft SNA Server
	2.11 U.S. Service Pack. For information on obtaining the service pack, query on
	the following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	MORE INFORMATION
	================
	
	Steps to Reproduce the Problem
	------------------------------
	
	1. Define 1 LUA Pool and 3 LUAs via the SNA Server Admin
	
	  a. LUA Pool name is LUA.
	
	  b. LUA names are LUA2, LUA3, and LUA4.
	
	2. Run Tnadmin.exe, and select the Config button.
	
	3. Select LUA2 in Available LUs/Pools list box, and select the Add button.
	
	4. Select LUA2 in Configured LUs/Pools list box, and select the Edit button.
	  Tnadmin displays LUA information instead of LUA2.
	
	Additional query words: prodsna tn3270
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.11 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
