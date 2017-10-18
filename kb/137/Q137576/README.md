---
layout: page
title: "Q137576: SNACFG.EXE Fails with Spaces in Username Parameter"
permalink: kb/137/Q137576/
---

## Q137576: SNACFG.EXE Fails with Spaces in Username Parameter

	Article: Q137576
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you issue the SNACFG USER <username> command to display user
	information for the user specified by <username> and <username>
	contains spaces, for example, Joe Blow, the following error message appears:
	
	  Insufficient Privilege or the configuration file is locked for
	  read\write access.
	
	CAUSE
	=====
	
	The SNACFG.EXE program does not recognize a user name containing one or more
	spaces.
	
	RESOLUTION
	==========
	
	Microsoft has updated the files SNACFG.EXE and SNACFG.DLL to correct this
	problem.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server for Windows NT. This
	problem was corrected in the latest SNA Server for Windows NT, 2.11 U.S. Service
	Pack. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsna 2.00 2.10 2.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.0,2.1,2.11
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
