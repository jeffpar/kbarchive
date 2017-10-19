---
layout: page
title: "Q175141: Cluster Service Ignores Network Cards"
permalink: /kb/175/Q175141/
---

## Q175141: Cluster Service Ignores Network Cards

	Article: Q175141
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Cluster Server 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you install the Remote Access Service (RAS) with Microsoft Cluster Server
	(MSCS), network adapters may be ignored by the cluster software.
	
	
	RESOLUTION
	==========
	
	NOTE: For additional information before you begin this workaround, please see
	the following article in the Microsoft Knowledge Base:
	
	ARTICLE-ID: Q162205
	TITLE : "Stop 0x1E" Message Reinstalling Windows NT with SP3 and RAS
	
	To work around this problem, uninstall RAS and the network card(s) that are not
	being detected. Then reinstall the network card(s), followed by RAS.
	
	After you reinstall RAS, it is possible you may encounter one or both of the
	following errors:
	
	- Your computer restarts repeatedly.
	
	- You receive the following error message:
	
	  STOP: 0x0000001E (0xC0000005, 0xFF1BBD79, 0x00000000, 0x00000038)
	  KMODE_EXCEPTION_NOT_HANDLED Address ff1bbd79 has base at ff1ae000 - tcpip.sys
	
	If you receive either or both of these errors, refer back to the Knowledge Base
	article mentioned above.
	
	Additional query words: ignore NIC MSCS
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbAudDeveloper kbClustServSearch
	Version           : WinNT:4.0
	
	=============================================================================
	
