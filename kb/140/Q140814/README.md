---
layout: page
title: "Q140814: TN3270 Clients Cannot Connect with a Lower-Case LU Name"
permalink: /kb/140/Q140814/
---

## Q140814: TN3270 Clients Cannot Connect with a Lower-Case LU Name

	Article: Q140814
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
	
	When a user at a TN3270 emulator requests to connect to SNA Server TN3270 Server
	using a specific LU and gives the lower-case version of the LU name, the
	emulator fails to connect.
	
	CAUSE
	=====
	
	The SNA Server LUA library is case-sensitive, and therefore does not accept
	lower-case LU names.
	
	RESOLUTION
	==========
	
	Microsoft corrected this problem. The fix causes all incoming names to be
	converted to upper case.
	
	Microsoft has updated the following files to correct this problem:
	
	  <TN3270>\I386\SYMBOLS\EXE\TN3SERVR.DBG
	  <TN3270>\I386\ TN3SERVR.EXE
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server for Windows NT. This
	problem was corrected in the latest SNA Server for Windows NT, 2.11 U.S. Service
	Pack. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsna 2.00 2.10 2.11 3.50 3.51
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.0,2.1,2.11
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
