---
layout: page
title: "Q164642: SNANLS API Problems Using Far-East Codepages"
permalink: /kb/164/Q164642/
---

## Q164642: SNANLS API Problems Using Far-East Codepages

	Article: Q164642
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 3.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	There are two problems which can occur when calling the SNANLS API using Far
	East code pages (such as Japan and China):
	
	- Incorrect return codes may be returned.
	
	- There is no support for Unicode to double-byte character set (DBCS) extended
	  binary coded decimal interchange code (EBCDIC) conversion.
	
	CAUSE
	=====
	
	This is a problem with the SNANLS API.
	
	RESOLUTION
	==========
	
	The SNANLS API libraries have been modified so that:
	
	  Correct return codes are now returned from the TrnsDt API.
	
	  -and-
	
	  Unicode to DBCS EBCDIC conversion is now supported.
	
	The updated modules are \<snaroot>\System\Snanls.dll for Microsoft SNA
	Server, Windows NT, and Windows 95 clients.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 3.0. This
	problem was corrected in the latest Microsoft SNA Server 3.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsna snaprog sna30
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300
	Version           : WINDOWS:3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
