---
layout: page
title: "Q281145: CSNW/GSNW Issues Repeated Name Queries to NetWare Servers"
permalink: /kb/281/Q281145/
---

## Q281145: CSNW/GSNW Issues Repeated Name Queries to NetWare Servers

	Article: Q281145
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbenv kbnetwork kbtool kbWinNT400PreSP7Fix kbWin2000sp3fix kbDirServices
	Last Modified: 15-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Windows 2000-based client computers may experience slow access times to servers
	that are running Novell NetWare 4.x or later, or your NetWare server may abend.
	
	CAUSE
	=====
	
	This problem can occur if the Windows 2000 NetWare client is issuing excessive
	name queries to the NetWare directory servers.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows 2000. For
	additional information, click the following article number to view the article
	in the Microsoft Knowledge Base:
	
	  Q260910 How to Obtain the Latest Windows 2000 Service Pack
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date       Time                 Size     File name     Platform
	  ---------------------------------------------------------------
	 01/08/2001  09:06p               154,544  Nwrdr.sys     Intel
	 01/08/2001  09:04p               277,040  Nwrdr.sys     Alpha
	
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article. This problem was first corrected in
	Windows 2000 Service Pack 3.
	
	
	The third-party products that are discussed in this article are manufactured by
	companies that are independent of Microsoft. Microsoft makes no warranty,
	implied or otherwise, regarding the performance or reliability of these
	products.
	
	Additional query words: kbDirServices
	
	======================================================================
	Keywords          : kbenv kbnetwork kbtool kbWinNT400PreSP7Fix kbWin2000sp3fix kbDirServices 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
