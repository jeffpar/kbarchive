---
layout: page
title: "Q272568: Event ID 2019/2020 or &quot;Insufficient System Resources&quot; on DC"
permalink: /kb/272/Q272568/
---

## Q272568: Event ID 2019/2020 or &quot;Insufficient System Resources&quot; on DC

	Article: Q272568
	Product(s): Microsoft Windows NT
	Version(s): 2000,4.0
	Operating System(s): 
	Keyword(s): kb3rdparty kberrmsg
	Last Modified: 09-AUG-2002
	
	Norton Antivirus 5.0
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	- Microsoft Windows 2000 Server 
	- Microsoft Windows 2000 Advanced Server 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may experience one or more of the following:
	
	- Your server may lose network connectivity with its clients and report the
	  following errors in the event log:
	
	  Event ID: 2020
	  Source: Srv
	  Description: The server was unable to allocate from the system paged pool
	  because the pool was empty.
	
	  -or-
	
	  Event ID: 2019
	  Source: Srv
	  Description: The server was unable to allocate from the system nonpaged pool
	  because the pool was empty.
	
	- Your server may stop accepting new user connections through Terminal
	  Services. When the user tries to log on to the server that is running
	  Terminal Services, the following error message appears:
	
	  User Environment
	  Windows cannot logon you because the profile cannot be loaded. Contact your
	  network administrator.
	  DETAIL - Insufficient system resources exist to complete the requested
	  service.
	
	  After this error message appears, the user is disconnected from the Terminal
	  Services server.
	
	- You receive the following error message when you log on locally to the
	  server:
	
	  User Environment
	  Windows cannot logon you because the profile cannot be loaded. Contact your
	  network administrator.
	  DETAIL - Insufficient system resources exist to complete the requested
	  service.
	
	  Note that you may be allowed to get to the Windows desktop but you cannot work
	  normally because the server is running out of memory.
	
	All of these symptoms are alleviated if you restart the server.
	
	CAUSE
	=====
	
	This behavior can occur if Microsoft Windows 2000 domain controllers run
	Symantec's Norton AntiVirus Corporate Edition software, versions 7.00, 7.01,
	7.02, or 7.03.
	
	RESOLUTION
	==========
	
	This issue has been addressed in release 10.3.1.13 of the SymEvent driver. The
	latest SymEvent driver can be obtained from:
	
	  http://www.symantec.com/techsupp/files/symevnt/symevnt.html
	
	The third-party products that are discussed in this article are manufactured by
	companies that are independent of Microsoft. Microsoft makes no warranty,
	implied or otherwise, regarding the performance or reliability of these
	products.
	
	
	Additional query words: Event 2020 2019 memory leak paged pool nonpaged NAV symantec norton antivirus
	
	======================================================================
	Keywords          : kb3rdparty kberrmsg 
	Technology        : kbWinNTsearch kbWinNT400search kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000Serv kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbwin2000ServSearch kbwin2000Search kbWinAdvServSearch
	Version           : :2000,4.0
	Issue type        : kbprb
	
	=============================================================================
	
