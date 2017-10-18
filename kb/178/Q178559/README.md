---
layout: page
title: "Q178559: IIS-Redirect to Secured Page Logs Successful Anonymous Access"
permalink: kb/178/Q178559/
---

## Q178559: IIS-Redirect to Secured Page Logs Successful Anonymous Access

	Article: Q178559
	Product(s): Internet Information Server
	Version(s): IIS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 3.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When a Microsoft Active Server Page (ASP) or HTML page redirects to another ASP
	or HTML page, and both pages are secured (no anonymous access), an entry is made
	in the Internet Information Server (IIS) log that indicates the anonymous user
	successfully accessed the second document.
	
	RESOLUTION
	==========
	
	Upgrade to Microsoft Internet Information Server version 4.0.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Internet Information
	Server version 3.0. This problem has been corrected in version Microsoft
	Internet Information Server version 4.0.
	
	MORE INFORMATION
	================
	
	On Internet Information Server 4.0, the status code for is 401 (Access Denied,
	Unauthorized). On Internet Information Server 3.0, the status code is 200 (OK).
	
	
	
	Additional query words: Security Logging produces access log entry
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis300
	Version           : IIS:3.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
