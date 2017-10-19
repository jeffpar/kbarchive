---
layout: page
title: "Q215465: Installing Service Packs from Terminal Server Client Sessions"
permalink: /kb/215/Q215465/
---

## Q215465: Installing Service Packs from Terminal Server Client Sessions

	Article: Q215465
	Product(s): Microsoft Windows NT
	Version(s): 2000,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	- Microsoft Windows 2000 Datacenter Server 
	- Microsoft Windows 2000 Advanced Server 
	- Microsoft Windows 2000 Server 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes Microsoft policy on the installation of Service Packs
	from within Terminal Server client sessions.
	
	MORE INFORMATION
	================
	
	Any application that is going to have a system-wide impact should be installed
	in the following manner:
	
	1. Install at the Terminal Server console (session 0).
	
	2. Install under the administrtive security context.
	
	3. Place server in install mode.
	
	Installation of Service Packs from within any session other than session 0 is not
	supported. Adverse effects may occur if Service Packs are not installed from the
	console session. A reinstallation of the operating system may be required to
	correct any problems.
	
	Additional query words: tse-sp4
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000DataServ kbwin2000DataServSearch kbwin2000Serv kbWinNTSsearch kbWinNTS400search kbwin2000ServSearch kbwin2000Search kbNTTermServ400 kbNTTermServSearch kbWinAdvServSearch kbWinDataServSearch
	Version           : :2000,4.0
	Issue type        : kbinfo
	
	=============================================================================
	
