---
layout: page
title: "Q174931: Printer Share Lost after Renaming Printer"
permalink: /kb/174/Q174931/
---

## Q174931: Printer Share Lost after Renaming Printer

	Article: Q174931
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbprint
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 SP3 
	- Microsoft Windows NT Server version 4.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you rename a printer and restart a computer running Windows NT Server or
	Workstation, the printer share may no longer be seen by Windows 95 and other
	non-Windows NT clients. The printer share is also missing when you use the NET
	VIEW command. The following error may occur when you connect to the printer
	share with a NET USE command:
	
	  System error 67 has occurred.
	  The network name cannot be found.
	
	In the Printers folder, the printer continues to display the sharing symbol,
	indicating it is shared.
	
	RESOLUTION
	==========
	
	To resolve this problem, perform the following steps:
	
	1. Click the Start button, point to Settings, and then click Printers.
	
	2. Right-click the printer, and then click Sharing.
	
	3. Click Not Shared, and then click OK.
	
	4. Right-click the printer again, and then click Sharing.
	
	5. Click Shared, and then click OK.
	
	The printer share will now be available to remote users and the NET VIEW and NET
	USE commands will work properly.
	
	MORE INFORMATION
	================
	
	There are other possible causes for missing printers. For more information,
	please see the following Microsoft Knowledge Base article:
	
	ARTICLE-ID: Q174871
	TITLE : Printer Shares Lost After Changing Server Name
	
	Additional query words: missing lost gone share print share Printshare
	
	======================================================================
	Keywords          : kbprint 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400search kbWinNT400search kbWinNTW400sp3 kbWinNTSsearch kbWinNTS400sp3 kbWinNTS400search
	Version           : WinNT:4.0
	Issue type        : kbprb
	
	=============================================================================
	
