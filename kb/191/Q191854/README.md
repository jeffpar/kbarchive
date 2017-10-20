---
layout: page
title: "Q191854: RAS Authentication Does Not Work Connecting to RRAS Server"
permalink: /kb/191/Q191854/
---

## Q191854: RAS Authentication Does Not Work Connecting to RRAS Server

{% raw %}

	Article: Q191854
	Product(s): Microsoft Windows NT
	Version(s): 2000,4.0
	Operating System(s): 
	Keyword(s): kbenv kberrmsg
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Routing and Remote Access Service Update for Windows NT Server version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows 2000 Server 
	- Microsoft Windows 2000 Professional 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to connect your Windows 2000-based computer by using Remote
	Access Server (RAS) to a Windows NT Server 4.0-based computer that uses Routing
	and Remote Access Service Update (RRAS), you may receive error messages.
	
	The Windows 2000-based computer displays the following error message when it
	cannot establish a connection:
	
	  Retrying authentication...
	
	  Error 691: Access denied because username and/or password is invalid on the
	  domain.
	
	The Windows NT Server 4.0-based computer logs the following error messages in the
	system log:
	
	  Event ID: 20014
	  Source: Router
	  Type: Warning
	  Description: The user %Name% has connected and failed to authenticate on port
	  %Name%. The line has been disconnected.
	
	  Event ID: 20049
	  Source: Router
	  Type: Warning
	  Description: The user connected to port %Name% has been disconnected due to an
	  authentication timeout.
	
	RESOLUTION
	==========
	
	To resolve this issue, obtain the latest service pack for Windows NT version
	4.0. For additional information, please see the following article(s) in the
	Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem was first corrected in Windows NT 4.0 Service Pack 4.
	
	MORE INFORMATION
	================
	
	For additional information about the RRAS and PPTP upgrades, please see the
	following article(s) in the Microsoft Knowledge Base:
	
	  Q189594 RRAS Upgrade for WinNT Server 4.0 Hotfix Pack 3.0 Release Notes
	
	  Q189595 PPTP Performance & Security Upgrade for WinNT 4.0 Release Notes
	
	Additional query words: 5.00 R&RAS
	
	======================================================================
	Keywords          : kbenv kberrmsg 
	Technology        : kbWinNTsearch kbWinNT400search kbwin2000Serv kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbwin2000ServSearch kbwin2000Search kbwin2000ProSearch kbwin2000Pro kbAudDeveloper kbRRASNTSearch kbRRASNT400
	Version           : :2000,4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
