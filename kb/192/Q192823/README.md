---
layout: page
title: "Q192823: Printer Disappears If Ports Entry Contains &gt; 255 Characters"
permalink: kb/192/Q192823/
---

## Q192823: Printer Disappears If Ports Entry Contains &gt; 255 Characters

	Article: Q192823
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0,4.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft BackOffice Small Business Server versions 4.0, 4.0a 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A printer that has a port entry in the registry with more than 255 characters
	disappears when the spooler service is restarted. It is possible to have an
	entry of this length if printer pooling is used.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0.
	
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch kbAudDeveloper kbSBServSearch kbSBServ400 kbSBServ400a
	Version           : WinNT:4.0,4.0a
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
