---
layout: page
title: "Q180710: Browser Returns Error 270 (0x0000010e)"
permalink: /kb/180/Q180710/
---

## Q180710: Browser Returns Error 270 (0x0000010e)

	Article: Q180710
	Product(s): Internet Information Server
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbSiteServer300sp2fix
	Last Modified: 09-JUN-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you make a request for a Web page from Microsoft Internet Information
	Server (IIS), the server reports the following error message to the browser:
	
	  Error 270 (0x0000010e)
	
	CAUSE
	=====
	
	This error occurs when an IIS application calls a COM object that changes the
	thread type and does not reset it before exiting. The next time IIS tries to use
	this thread, the thread type is checked and if it is incorrect, the error 270 is
	returned to the client.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT version
	4.0. For additional information, please see the following article(s) in the
	Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem was first corrected in Windows NT 4.0 Service Pack 4.
	
	
	Additional query words: iis 270 error hotfix bug
	
	======================================================================
	Keywords          : kbSiteServer300sp2fix 
	Technology        : kbiisSearch kbiis400
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
