---
layout: page
title: "Q248074: Err Msg: Access Forbidden: Too Many Users Are Connected 403.9"
permalink: kb/248/Q248074/
---

## Q248074: Err Msg: Access Forbidden: Too Many Users Are Connected 403.9

	Article: Q248074
	Product(s): Internet Information Server
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbOSWin2000 kbiis500prod2web kbhttp4039 kbProd2Web
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you connect to an Internet Information Services (IIS) 5.0 Web site, the
	following error message may occur:
	
	  
	  Access Forbidden: Too many users are connected
	
	CAUSE
	=====
	
	This error is displayed when the number of users connected to the server exceeds
	the connection limit set by the administrator of the Web server.
	
	RESOLUTION
	==========
	
	To correct this problem, have the administrator change the connection limit
	settings for the Web site.
	
	1. Open Internet Services Manager.
	
	2. Right-click the Web site and choose Properties.
	
	3. On the Web Site property page, select Connections.
	
	4. Choose Unlimited or increase the Limited To: value.
	
	
	Additional query words: IIS 5
	
	======================================================================
	Keywords          : kbOSWin2000 kbiis500prod2web kbhttp4039 kbProd2Web 
	Technology        : kbiisSearch kbiis500
	Version           : :5.0
	Issue type        : kbprb
	
	=============================================================================
	
