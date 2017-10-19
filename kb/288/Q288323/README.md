---
layout: page
title: "Q288323: Web Browsers Receive &quot;HTTP 401.5&quot;  Using NT Challenge/Response"
permalink: /kb/288/Q288323/
---

## Q288323: Web Browsers Receive &quot;HTTP 401.5&quot;  Using NT Challenge/Response

	Article: Q288323
	Product(s): Internet Information Server
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 27-JAN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install Microsoft Windows NT Server Service Pack 6a, Web Browsers, you
	can receive the following error message:
	
	  HTTP 401.5
	  Unauthorized: Authorization failed by ISAPI/CGI app.
	
	This error can occur when Internet Information Server (IIS) is set to require
	Windows NT Challenge/Response on a Web site or virtual directory.
	
	CAUSE
	=====
	
	HTTP Keep-Alives are required for Windows NT Challenge/Response to work
	properly. If the HTTP Keep-Alives Enabled check box has been cleared, the IIS
	metabase has not been updated with the correct setting, and therefore,
	Keep-Alives are still enabled. Windows NT Challenge/Response continues to work
	properly.
	
	After you install Windows NT Server Service Pack 6a, the metabase setting is
	corrected to match the HTTP Keep-Alives Enabled check box. Because Windows NT
	Challenge/Response requires HTTP Keep-Alives, the now disabled setting prevents
	Windows NT Challenge/Response from working correctly.
	
	RESOLUTION
	==========
	
	1. In the Internet Services Manager, right-click the Web site for which you want
	  to enable Windows NT Challenge/Response, and then click Properties.
	
	2. Click the Performance tab, and the click to select the HTTP Keep-Alives
	  Enabled check box.
	
	3. Click OK.
	
	MORE INFORMATION
	================
	
	For additional information on Windows NT Challenge/Response, click the article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q102716 User Authentication with Windows NT
	
	Additional query words: NTLM keep-alives sp6a AllowKeepAlive AllowKeepAlives
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400
	Version           : :4.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
