---
layout: page
title: "Q242460: Performance Issues with FPNW Installed on Terminal Server as PDC"
permalink: /kb/242/Q242460/
---

## Q242460: Performance Issues with FPNW Installed on Terminal Server as PDC

	Article: Q242460
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0 SP4
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 SP4, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you install File and Print Services for NetWare (FPNW) in Windows NT Server
	4.0, Terminal Server Edition, Service Pack 4 (SP4) as a primary domain
	controller (PDC), there may be performance issues in Terminal Server. The
	performance issues do not occur if you install FPNW on Terminal Server as a
	member server.
	
	WORKAROUND
	==========
	
	To work around this behavior, install FPNW in Terminal Server as a member
	server.
	
	MORE INFORMATION
	================
	
	If you install FPNW in Terminal Server SP4 as a PDC, it may take a long time
	after you press CTRL+ALT+DELETE for the dialog box to appear. After that,
	everything seems to take longer than if Terminal Server is installed as a member
	server.
	
	Additional query words: wts tse slow slower
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400sp4 kbNTTermServSearch
	Version           : winnt:4.0 SP4
	Issue type        : kbprb
	
	=============================================================================
	
