---
layout: page
title: "Q123180: Large File Download Fails Over Eicon WAN Services"
permalink: kb/123/Q123180/
---

## Q123180: Large File Download Fails Over Eicon WAN Services

	Article: Q123180
	Product(s): Microsoft SNA Server
	Version(s): winnt:
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server for Windows NT 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Downloading a 30MB host file fails after 96,000 records when you use the
	Passport Communications RJE Print Manager product (either the MS-DOS or Windows
	NT versions) over SNA Server 2.0.
	
	SNA Server is configured with an SDLC link supported by Eicon WAN Services for
	Windows NT version 3 release 1. The RJE download problem coincides with the
	Eicon SDLC connection being dropped.
	
	RESOLUTION
	==========
	
	Upgrade to Eicon WAN Services for Windows NT version 3 release 1a (v3r1a).
	
	NOTE: Eicon has a separate update for Windows NT 3.5.
	
	Additional query words: prodsna 2.00 2.10
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : winnt:
	Issue type        : kbprb
	
	=============================================================================
	
