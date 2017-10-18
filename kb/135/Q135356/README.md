---
layout: page
title: "Q135356: Win32 CPIC CMEPLN Call May Return Truncated Partner LU Name"
permalink: kb/135/Q135356/
---

## Q135356: Win32 CPIC CMEPLN Call May Return Truncated Partner LU Name

	Article: Q135356
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
	
	If a Windows NT CPIC application calls Extract_Partner_LU_Name (cmepln) and a
	fully qualified partner LU name is configured within the CPIC side information
	in the SNA Server configuration file, the last byte of the partner LU name is
	truncated.
	
	This problem occurs only with Windows NT-based programs. The correct partner LU
	name is returned to Initialize_Conversation (cminit), so this problem occurs
	only with the cmepln call.
	
	CAUSE
	=====
	
	
	RESOLUTION
	==========
	
	Microsoft has updated the file SNABASE.EXE to correct this problem.
	
	To work around the problem, configured the Partner LU name, from the CPIC
	symbolic destination name properties dialog box, with an alias name rather than
	a fully qualified name.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server for Windows NT. This
	problem was corrected in the latest SNA Server for Windows NT, 2.11 U.S. Service
	Pack. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsna 2.00 2.10 2.11 cmepln
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.0,2.1,2.11
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
