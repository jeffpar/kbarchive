---
layout: page
title: "Q184027: Multiple Default Documents Fail With 403 Access Forbidden"
permalink: kb/184/Q184027/
---

## Q184027: Multiple Default Documents Fail With 403 Access Forbidden

	Article: Q184027
	Product(s): Internet Information Server
	Version(s): WINNT:2.0,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server versions 2.0, 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If multiple default documents are defined, users may receive the following error
	when accessing the WWW service through a browser:
	
	  HTTP/1.0 403 Access Forbidden
	
	CAUSE
	=====
	
	This problem occurs when Microsoft Internet Information Server (IIS) versions
	2.0 is installed after Windows NT 4.0 Service Pack 3.
	
	RESOLUTION
	==========
	
	Reapplying Windows NT 4.0 Service Pack 3 will update Internet Information Server
	from version 2.0 to 3.0. IIS 2.0 does not support multiple default documents.
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis300 kbiis200
	Version           : WINNT:2.0,3.0
	Issue type        : kbprb
	Solution Type     : kbfix
	
	=============================================================================
	
