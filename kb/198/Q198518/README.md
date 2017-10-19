---
layout: page
title: "Q198518: RRAS Requires Non-Zero Internal Network Number for IPX"
permalink: /kb/198/Q198518/
---

## Q198518: RRAS Requires Non-Zero Internal Network Number for IPX

	Article: Q198518
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Routing and Remote Access Service Update for Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	On your computer running both Windows NT Server 4.0 and the Routing and Remote
	Access Service (RRAS), the following event is logged in the System Log within
	Event Viewer:
	
	  Event ID: 20115
	  Source: IPXRouterManager
	  Type: Error
	  Description: IPX Routing requires internal network number for correct
	  operation. Please set it in IPX transport properties of protocols section in
	  the Network Control Panel.
	
	
	This event does not cause the RRAS service to fail to start.
	
	CAUSE
	=====
	
	The Internal Network Number for the NWLink IPX/SPX protocol installed on your
	computer is set to 00000000.
	
	RESOLUTION
	==========
	
	To resolve this issue, use the following steps:
	
	1. Click Start, point to Settings, and click Control Panel.
	
	2. Double-click Network, click the Protocols tab, click NWLink IPX/SPX
	  Compatible Transport, and click Properties.
	
	3. Set the Internal Network Number to a non-zero number and click OK.
	
	4. Restart your computer.
	
	MORE INFORMATION
	================
	
	For additional information, please see the following article(s) in the Microsoft
	Knowledge Base:
	
	  Q150546 NWLink IPX/SPX: Network Number vs. Internal Network Number
	
	  Q180602 RRAS Fails to Start with Event IDs 20103, 20133, or 7024
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbAudDeveloper kbRRASNTSearch kbRRASNT400
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbprb
	
	=============================================================================
	
