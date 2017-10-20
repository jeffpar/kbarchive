---
layout: page
title: "Q180602: RRAS Fails to Start with Event IDs 20103, 20133, or 7024"
permalink: /kb/180/Q180602/
---

## Q180602: RRAS Fails to Start with Event IDs 20103, 20133, or 7024

{% raw %}

	Article: Q180602
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kberrmsg kbinterop kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Routing and Remote Access Service Update for Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Your computer running both Windows NT Server and Routing and Remote Access
	Service (RRAS) may fail to start and one or more of the following events are
	logged in Event Viewer:
	
	  Event ID   : 20103
	  Source     : Router
	  Description: Unable to load C:\WINNT\system32\ipxrtmgr.dll.
	
	-or-
	
	  Event ID   : 20133
	  Source     : IPXRouterManager
	  Description: The description for Event ID (20133) in Source
	               (IPXRouterManager) could not be found.  It contains the
	               following insertion string(s):.
	
	
	-or-
	
	  Event ID   : 7024
	  Source     : Service Control Manager
	  Description: The Routing And Remote Access Service service terminated
	               with service-specific error 1003.
	
	CAUSE
	=====
	
	When RRAS is installed on a multihomed server (one that has two or more network
	interfaces) and Auto Frame Type Detection is enabled for the NWlink IPX/SPX
	Compatible Transport, the bindings may not be correctly enumerated for the
	IPXRouterManager in the registry.
	
	RESOLUTION
	==========
	
	To resolve this issue, use the following steps:
	
	1. Manually set the internal network number and specify Manual Frame Type
	  Detection for the properties of the NWLink IPX/SPX Compatible Transport.
	
	  For more information, see the following article in the Microsoft Knowledge
	  base:
	
	  ARTICLE-ID: Q150546
	  TITLE : NWLink IPX/SPX: Network Number vs. Internal Network Number
	
	2. Click Start, point to Settings, and click Control Panel.
	
	3. Double-click Network, click the Services tab, and click Routing and Remote
	  Access.
	
	4. Click Update and specify the location of the RRAS folder.
	
	  NOTE: By default, this folder is C:\Program Files\Routing.
	======================================================================
	Keywords          : kberrmsg kbinterop kbnetwork 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbAudDeveloper kbRRASNTSearch kbRRASNT400
	Version           : WinNT:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
