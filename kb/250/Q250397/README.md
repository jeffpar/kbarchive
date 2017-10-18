---
layout: page
title: "Q250397: Content is Lost at SF_NOTIFY_AUTH_COMPLETE"
permalink: kb/250/Q250397/
---

## Q250397: Content is Lost at SF_NOTIFY_AUTH_COMPLETE

	Article: Q250397
	Product(s): Internet Information Server
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): kbWin2000PreSP1Fix kbWin2000sp1Fix
	Last Modified: 17-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a POST request is redirected from an Internet Server Application Programming
	Interface (ISAPI) filter in the SF_NOTIFY_AUTH_COMPLETE handler, the content
	data submitted is not available to the script where the request is redirected.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows 2000. For
	additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q260910 How to Obtain the Latest Windows 2000 Service Pack
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article. This problem was first corrected in
	Windows 2000 Service Pack 1.Microsoft has confirmed this to be a problem in
	Internet Information Services 5.0.
	
	MORE INFORMATION
	================
	
	If a POST request is redirected from an ISAPI filter in the
	SF_NOTIFY_AUTH_COMPLETE handler, the content data submitted is not available to
	the script where the request is redirected. If the redirection target is a CGI
	script, the following error message occurs:
	
	  502 error: cgi time out
	
	This occurs even though the CONTENT_LENGTH environment variable is set to the
	correct value. The posted data is not available through STDIN.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbWin2000PreSP1Fix kbWin2000sp1Fix 
	Technology        : kbiisSearch kbiis500
	Version           : winnt:5.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
