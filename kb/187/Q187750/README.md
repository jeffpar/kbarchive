---
layout: page
title: "Q187750: Internet Information Server Returns Old Content to Browsers"
permalink: /kb/187/Q187750/
---

## Q187750: Internet Information Server Returns Old Content to Browsers

	Article: Q187750
	Product(s): Internet Information Server
	Version(s): WINNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 28-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Internet Information Server version 4.0 (IIS) may not refresh updated HTML pages
	or text files. The old content is returned, even if the file has been modified
	on the IIS server. This may happen on a heavily loaded IIS server with repeated
	hits to the content, which is frequently updated.
	
	CAUSE
	=====
	
	IIS fails to update its cache properly.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT version
	4.0. For more information, please see the following article in the Microsoft
	Knowledge Base.
	
	  Q152734 : How To Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Internet Information Server
	version 4.0. This problem was first corrected in Windows NT 4.0 Service Pack 4.
	
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400
	Version           : WINNT:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
