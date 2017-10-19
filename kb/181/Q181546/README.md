---
layout: page
title: "Q181546: RAS Error 718 When Using Motorola ISDN BitSURFR Pro EZ"
permalink: /kb/181/Q181546/
---

## Q181546: RAS Error 718 When Using Motorola ISDN BitSURFR Pro EZ

	Article: Q181546
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kb3rdparty kberrmsg kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you dial from a computer running Windows NT and using the Motorola ISDN
	BitSURFR Pro EZ in a Windows NT Remote Access Service (RAS) server, you may
	receive the following error message:
	
	  Error 718 - Timeout while waiting for valid response from remote peer
	
	RESOLUTION
	==========
	
	To resolve this issue, you will need to modify the initialization string being
	sent to the BitSURFR Pro EZ. Use the following steps:
	
	1. Click Start, point to Settings, and click Control Panel.
	
	2. Double-click Modems, select BitSURFR Pro EZ ISDN, and click Properties.
	
	3. Click the Connection tab and click Advanced.
	
	4. In the Extra settings field, type the following:
	
	  AT%A2=95@M2=M
	
	5. In the Advanced Connection Settings dialog box, click OK.
	
	6. In the BitSURFR Pro EZ ISDN Properties dialog box, click OK.
	
	7. In the Modems Properties dialog box, click Close.
	
	
	The Motorola ISDN BitSURFR Pro EZ modem is manufactured by Motorola, a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	For information about how to contact Motorola, query in the Knowledge Base for
	one of the following articles:
	
	  ARTICLE-ID: Q65416
	  TITLE : Hardware and Software Third-Party Vendor Contact List, A-K
	
	  ARTICLE-ID: Q60781
	  TITLE : Hardware and Software Third-Party Vendor Contact List, L-P
	
	  ARTICLE-ID: Q60782
	  TITLE : Hardware and Software Third-Party Vendor Contact List, Q-Z
	
	======================================================================
	Keywords          : kb3rdparty kberrmsg kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbprb
	
	=============================================================================
	
