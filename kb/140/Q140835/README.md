---
layout: page
title: "Q140835: SNA Server Admin Lists Wrong Dependent APPC LU as &quot;In Session&quot;"
permalink: kb/140/Q140835/
---

## Q140835: SNA Server Admin Lists Wrong Dependent APPC LU as &quot;In Session&quot;

	Article: Q140835
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
	
	An SNA Server that has a local dependent APPC (LU6.2) session partnered with
	multiple remote LUs shows that the wrong LU is "In Session".
	
	This problem occurs sporadically.
	
	CAUSE
	=====
	
	When SNA Server receives an unsolicited BIND for a dependent APPC LU, it does
	not check the names in the BIND. SNA Server assumes that it is a BIND for an LU
	on that LU address. However, if a local dependent APPC LU is partnered with more
	than one remote LU, SNA server is in effect choosing at random which LU it
	believes the BIND to be from.
	
	RESOLUTION
	==========
	
	SNA Server has been modified so that it does examine the LU names in an
	unsolicited BIND it receives for dependent APPC LUs.
	
	Microsoft has updated the following files to correct this problem:
	
	  <snaroot>\SYSTEM\SNASERVR.EXE
	  <snaroot>\SYSTEM\TRCSERVR.EXE
	
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
	
