---
layout: page
title: "Q250191: Cannot Access InetKit Library Using BackOffice with Windows 2000"
permalink: kb/250/Q250191/
---

## Q250191: Cannot Access InetKit Library Using BackOffice with Windows 2000

	Article: Q250191
	Product(s): Microsoft Windows NT
	Version(s): WINDOWS:2000; winnt:4.5
	Operating System(s): 
	Keyword(s): kberrmsg kbtool
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 2000 Server 
	- Microsoft BackOffice Server 4.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You can install BackOffice Server 4.5 on Windows 2000 Server using the
	BackOffice Server 4.5 Readiness Kit for Windows 2000 Server. After you install
	BackOffice Server 4.5 using Intranet Collaboration Scenario, you may experience
	problems gaining access to resources on the local intranet site.
	
	After you go to the http://<servername>/inetkit site and you click Library
	on the toolbar, you are prompted to type your logon credentials. After you type
	your user name and password, the same dialog box may appear again and you are
	unable to proceed. After you type your credentials three times, the following
	error message is displayed:
	
	  You are not authorized to view this page
	
	  You do not have permission to view this directory or page using the
	  credentials you supplied.
	
	CAUSE
	=====
	
	This behavior occurs because the selected user does not have Log on Locally
	permissions within the domain.
	
	RESOLUTION
	==========
	
	To resolve this problem, give the user Log on Locally permissions for the
	domain:
	
	1. Click Start, point to Programs, point to Administrative Tools, and then click
	  Domain Controller Security Policy.
	
	2. Expand Security Settings, expand Local Policies, and then click User Rights
	  Assignment.
	
	3. In the right window pane, double-click "Log on Locally".
	
	4. Add the appropriate user. Make sure the user logs off and logs back on before
	  attempting to gain access to the intranet site again.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem when running Microsoft BackOffice
	Server 4.5 on Microsoft Windows 2000 Server.
	
	
	Additional query words: navigate navigation
	
	======================================================================
	Keywords          : kberrmsg kbtool 
	Technology        : kbwin2000Serv kbwin2000ServSearch kbwin2000Search kbAudDeveloper kbBackOfficeSearch kbBackOfficeServ450
	Version           : WINDOWS:2000; winnt:4.5
	Issue type        : kbprb
	
	=============================================================================
	
