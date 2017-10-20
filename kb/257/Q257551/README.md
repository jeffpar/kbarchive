---
layout: page
title: "Q257551: GSNW/CSNW NetWare Banner Page missing Username"
permalink: /kb/257/Q257551/
---

## Q257551: GSNW/CSNW NetWare Banner Page missing Username

{% raw %}

	Article: Q257551
	Product(s): Microsoft Windows NT
	Version(s): WINDOWS:2000; winnt:4.0
	Operating System(s): 
	Keyword(s): kbprint kbWin2000SP2Fix
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	- Microsoft Windows 2000 Advanced Server 
	- Microsoft Windows 2000 Professional 
	- Microsoft Windows 2000 Server 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When printing to a Gateway Services NetWare (GSNW) print server through an NDS
	connection with the option to print a banner page selected, the printed banner
	page is missing the username of the user that submitted the job.
	
	This behavior is seen on Microsoft Windows NT Server version 4.0 and Terminal
	Server Edition when print jobs are submitted through a Terminal Server session.
	
	This behavior is seen on Windows 2000 for any print job.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows 2000. For
	additional information, click the following article number to view the article
	in the Microsoft Knowledge Base:
	
	  Q260910 How to Obtain the Latest Windows 2000 Service Pack
	
	Windows NT Server 4.0, Terminal Server Edition
	----------------------------------------------
	
	The English version of this fix should have the following file attributes or
	later:
	
	Date       Time     Version         Size      File name
	--------------------------------------------------------------------
	6/20/2000  03:36p   4.0.1381.33369  157,552   Nwrdr.sys
	
	Windows 2000
	------------
	
	The English version of this fix should have the following file attributes or
	later:
	
	Date        Time      Version        Size      File name
	----------------------------------------------------------------------
	6/22/2000   10:27p    5.0.2195.2096  158,640   Nwrdr.sys
	
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article. This problem was first corrected in
	Windows 2000 Service Pack 2.
	
	MORE INFORMATION
	================
	
	For additional information about how to install Windows 2000 and Windows 2000
	hotfixes at the same time, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q249149 Installing Microsoft Windows 2000 and Windows 2000 Hotfixes
	
	Additional query words: csnw gsnw NDS banner username
	
	======================================================================
	Keywords          : kbprint kbWin2000SP2Fix 
	Technology        : kbWinNTsearch kbWinNT400search kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000Serv kbWinNTSsearch kbWinNTS400search kbwin2000ServSearch kbwin2000Search kbwin2000ProSearch kbwin2000Pro kbNTTermServ400 kbNTTermServSearch kbWinAdvServSearch
	Version           : WINDOWS:2000; winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
