---
layout: page
title: "Q163774: Err Msg: HTTP/1.0 406 No Acceptable Objects Were Found"
permalink: kb/163/Q163774/
---

## Q163774: Err Msg: HTTP/1.0 406 No Acceptable Objects Were Found

	Article: Q163774
	Product(s): Internet Information Server
	Version(s): winnt:2.0,4.0
	Operating System(s): 
	Keyword(s): kbenv kberrmsgkbbuglist kbfixlist
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 2.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use an Internet proxy server that gets GIF, JPEG, and PDF files from
	the Intranet or Internet, it will fail when it hits an Internet Information
	Server (IIS) with the following error message:
	
	  HTTP/1.0 406 No acceptable objects were found.
	
	CAUSE
	=====
	
	No proper Accept header exists in the HTTP Request From the proxy server.
	
	
	RESOLUTION
	==========
	
	Use the updated W3svc.dll.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Internet Information Server
	version 2.0.
	
	
	A supported fix is now available, but has not been fully regression-tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbenv kberrmsg kbbuglist kbfixlist
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbiisSearch kbiis200
	Version           : winnt:2.0,4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
