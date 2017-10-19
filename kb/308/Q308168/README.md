---
layout: page
title: "Q308168: DOC: IIS 5.1 Doc Incorrectly References HTTP Compression"
permalink: /kb/308/Q308168/
---

## Q308168: DOC: IIS 5.1 Doc Incorrectly References HTTP Compression

	Article: Q308168
	Product(s): Internet Information Server
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdocerr
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.1 
	- Microsoft Windows XP Professional 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The documentation that is included with Internet Information Services (IIS) 5.1
	contains an incorrect reference to the HTTP Compression feature. HTTP
	Compression is not available in IIS 5.1
	
	MORE INFORMATION
	================
	
	The IIS 5.1 documentation lists HTTP Compression as a feature of the Web server
	in the following location:
	
	  File: http://<localhost>/iishelp/iis/htm/core/iifeats.htm
	  Section: Internet Standards
	  Text:
	
	  HTTP Compression: Provides faster transmission of pages between the Web server
	  and compression-enabled clients. Compresses and caches static files, and
	  performs on-demand compression of dynamically generated files.
	
	NOTE: All HTTP Compression-related metabase property explanations are also
	invalid. These are all the properties whose name starts with "Hc."
	
	REFERENCES
	==========
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q304202 INFO: HTTP Compression Is Not Available in Internet Information
	  Services (IIS)
	
	Additional query words:
	
	======================================================================
	Keywords          : kbdocerr 
	Technology        : kbWinXPPro kbiisSearch kbWinXPProSearch kbWinXPSearch kbiis510
	Version           : :
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
