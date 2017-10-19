---
layout: page
title: "Q106114: 32-bit Windows SLI Applications Encounter Application Exception"
permalink: /kb/106/Q106114/
---

## Q106114: 32-bit Windows SLI Applications Encounter Application Exception

	Article: Q106114
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 15-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 2.11, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	A 32-bit Windows application which uses the SNA Server Windows NT SLI interface
	periodically encounters an application exception.
	
	
	CAUSE
	=====
	
	The SLI interface was reusing a deleted control block due to a timing related
	problem, leading to an application exception.
	
	RESOLUTION
	==========
	
	Microsoft has updated the SNA Server 2.11 file, WINSLI32.DLL, to correct this
	problem.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server for Windows NT. This
	problem was corrected in the latest SNA Server for Windows NT, 2.11 U.S. Service
	Pack. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsna
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.11
	Issue type        : kbbug
	
	=============================================================================
	
