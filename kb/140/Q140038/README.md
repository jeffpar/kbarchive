---
layout: page
title: "Q140038: DEMO SDLC Link Service Setup Script Removes Wrong Link Service"
permalink: kb/140/Q140038/
---

## Q140038: DEMO SDLC Link Service Setup Script Removes Wrong Link Service

	Article: Q140038
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
	
	When you remove an SNA Server 2.11 DEMO SDLC Link Service using SNA Server
	Setup, the DEMO SDLC Link Service setup script removes the wrong link service.
	
	After you select a DEMO SDLC Link Service in the Link Service Configuration
	during SNA Server Setup and you click the Remove button, the wrong link service
	is removed although the Link Services Installed listbox display is correct.
	
	CAUSE
	=====
	
	After adding DEMO SDLC Link Services during SNA Server Setup, if the number of
	link services in the Link Services Installed listbox exceeds 10 items, SNA
	Server incorrectly maps the displayed link services to the underlying link
	service.
	
	RESOLUTION
	==========
	
	The DEMO SDLC Link Service setup script (SNACLASP.INF) has been modified to
	remove the correct link service.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server for Windows NT. This
	problem was corrected in the latest SNA Server for Windows NT, 2.11 U.S. Service
	Pack. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsna
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.11
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
