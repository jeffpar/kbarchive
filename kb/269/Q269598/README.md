---
layout: page
title: "Q269598: Windows NT MA Running in Creator Mode Generates Error 1314"
permalink: kb/269/Q269598/
---

## Q269598: Windows NT MA Running in Creator Mode Generates Error 1314

	Article: Q269598
	Product(s): Microsoft Windows NT
	Version(s): 2.1
	Operating System(s): 
	Keyword(s): kberrmsg kbtool
	Last Modified: 01-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Metadirectory Services, version 2.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following error message is generated in the Zscript logs for Microsoft
	Windows NT Management Agent (MA) when you run MA in Creator mode:
	
	  Failed to logon to domain 'AGENTD', error 1314 (A required privilege is not
	  held by the client.)
	  This attempt failed because it requires the 'SeTcbPrivilege' privilege (Act as
	  part of the operating system).
	
	CAUSE
	=====
	
	The error message is generated when you set credentials in the properties of the
	connector space domain object.
	
	RESOLUTION
	==========
	
	To resolve this issue, clear both the Administrator Account box, and the
	Password box in the properties of the connector space domain object. To clear
	these credentials, follow these steps:
	
	1. Click Bookmarks from the action panel.
	
	2. Click Management Agents.
	
	3. Click the Windows NT MA that is producing the error message.
	
	4. Right-click the Windows NT MA, and then click Properties.
	
	5. In the NT Domain section of the properties sheet, click to clear both the
	  Administrator Account box, and the Password box.
	
	This issue no longer occurs in Microsoft Metadirectory Services, version 2.2.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words: Zoomit Via MA zscript genlogs
	
	======================================================================
	Keywords          : kberrmsg kbtool 
	Technology        : kbMMSSearch kbMMS210
	Version           : :2.1
	Issue type        : kbprb
	
	=============================================================================
	
