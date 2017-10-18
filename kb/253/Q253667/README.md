---
layout: page
title: "Q253667: Err Msg: HTTP 401.2 - Unauthorized: Logon Failed Due to..."
permalink: kb/253/Q253667/
---

## Q253667: Err Msg: HTTP 401.2 - Unauthorized: Logon Failed Due to...

	Article: Q253667
	Product(s): Internet Information Server
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): kbOSWin2000 kbDSupport kbiis500 kbiis500prod2web kbhttp4012 kbProd2Web
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are attempting to browse a Web page, the following error is displayed:
	
	  You are not authorized to view this page
	  You do not have permission to view this directory or page using the
	  credentials you supplied.
	
	  HTTP 401.2 - Unauthorized: Logon failed due to server configuration
	  Internet Information Services
	
	CAUSE
	=====
	
	The authentication methods that were tried are either disabled, or you are
	attempting to use NTLM through a proxy server.
	
	RESOLUTION
	==========
	
	To resolve this problem, turn at least one authentication method on. To do this,
	perform the following:
	
	1. From the Start menu, point to Programs, point to Administrative Tools, and
	  then click Internet Services Manager.
	
	2. Under the Tree pane, browse to the desired Web site.
	
	3. Right-click the Web site, and then click Properties.
	
	4. On the Directory Security tab, under Anonymous access and authentication
	  control, click Edit.
	
	5. Select (and implement) at least one type of authentication method.
	
	MORE INFORMATION
	================
	
	For more information about using authentication, refer to the following
	(assuming that the IIS product documentation is installed on your computer):
	
	  http://localhost/iishelp/iis/misc/default.asp?jumpurl=../htm/core/iiabasc.htm
	
	(c) Microsoft Corporation 2000, All Rights Reserved. Contributions by Kevin
	Zollman, Microsoft Corporation.
	
	
	Additional query words: IIS 5 401-2 akz
	
	======================================================================
	Keywords          : kbOSWin2000 kbDSupport kbiis500 kbiis500prod2web kbhttp4012 kbProd2Web 
	Technology        : kbiisSearch kbiis500
	Version           : winnt:5.0
	Issue type        : kbprb
	
	=============================================================================
	
