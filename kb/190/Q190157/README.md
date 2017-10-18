---
layout: page
title: "Q190157: Support for Windows NT 4.0 Option Pack on Terminal Server"
permalink: kb/190/Q190157/
---

## Q190157: Support for Windows NT 4.0 Option Pack on Terminal Server

	Article: Q190157
	Product(s): Microsoft Windows NT
	Version(s): winnt:2.0,3.0,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	- Microsoft Windows NT version 4.0 Option Pack 
	- Microsoft Site Server versions 2.0, 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Windows NT 4.0 Option Pack is not supported on Windows NT Server 4.0, Terminal
	Server Edition. Windows NT 4.0 Option Pack is not supported because both
	Internet Information Server 4.0 and Microsoft Transaction Server do not function
	correctly when installed on Terminal Server. Customer applications which require
	these Option Pack technologies may not function properly when installed on
	Terminal Server.
	
	Microsoft recommends that customers use Internet Information Server 3.0, which
	ships with Windows NT Server 4.0, Terminal Server Edition, for Web Server
	functionality on the Terminal Server.
	
	Also, Site Server is not supported on Windows NT 4.0, Terminal Server Edition.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch kbSiteServSearch kbAudDeveloper kbWinNT400OptionPack kbSiteServ300 kbSiteServ200
	Version           : winnt:2.0,3.0,4.0
	Issue type        : kbinfo
	
	=============================================================================
	
