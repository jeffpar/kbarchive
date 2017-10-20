---
layout: page
title: "Q148980: ROUTER.EXE Does Not Support API Tracing"
permalink: /kb/148/Q148980/
---

## Q148980: ROUTER.EXE Does Not Support API Tracing

{% raw %}

	Article: Q148980
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11,2.11 SP1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, 2.11 SP1, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The SNA Server MS-DOS client supports both Internal and API traces. However, the
	SNA Server Router, a replacement for the IBM AS/400 PC Support program router
	component, included with the SNA Server MS-DOS client, does not support API
	tracing. Chapter 13 of the SNA Server Administration Guide describes how to
	enable traces on the SNA Server and SNA Server clients.
	
	
	MORE INFORMATION
	================
	
	Chapter 13 of the SNA Server Administration Guide describes how to enable SNA
	Server traces. The SNA Server MS-DOS client supports the following types of
	tracing:
	
	Type of Tracing     Activity Traced                   Applies To
	----------------------------------------------------------------------
	
	Internal            Activity within a software        SnaBase,
	                   component of SNA Server           SNA Applications
	
	API                 Information passed into and       SNA Applications
	                   out of a SNA Server DLL, such
	                   as the APPC DLL, as the DLL
	                   communicates with an
	                   application.
	
	KBCategory: kbnetwork
	KBSubcategory: snados
	
	Additional query words: 2.0 2.10 2.11 2.11.sp1 service pack 1
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.0,2.1,2.11,2.11 SP1
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
