---
layout: page
title: "Q151698: APPC DISPLAY Verb May Return Incorrect LU6.2 Session Info"
permalink: /kb/151/Q151698/
---

## Q151698: APPC DISPLAY Verb May Return Incorrect LU6.2 Session Info

	Article: Q151698
	Product(s): Microsoft SNA Server
	Version(s): 2.0,2.1,2.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server for Windows NT, versions 2.0, 2.1, 2.11 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When an Advanced Program-to-Program Communications (APPC) application calls the
	DISPLAY function and requests information on active LU6.2 sessions (using the
	sess_info structure), SNA Server may return incorrect Request/Response Unit (RU)
	sizes or pacing window sizes.
	
	CAUSE
	=====
	
	The SNA Server APPC DISPLAY function implements sess_info formatting incorrectly
	in some cases, namely, where the LU-SSCP session properties are returned with
	the mode name from the PLU-SLU session. This could cause the APPC application to
	retrieve RU sizes or pacing window sizes that do not match the actual values
	negotiated on the PLU-SLU BIND.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server 2.11 and 2.11 Service
	Pack 1. This problem was corrected in the latest Microsoft SNA Server 2.11 U.S.
	Service Pack. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodsna
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ200NT kbSNAServ210NT kbSNAServ211NT
	Version           : :2.0,2.1,2.11
	
	=============================================================================
	
