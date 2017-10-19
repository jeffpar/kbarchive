---
layout: page
title: "Q143484: IIS Services Stop with Large Client Requests"
permalink: /kb/143/Q143484/
---

## Q143484: IIS Services Stop with Large Client Requests

	Article: Q143484
	Product(s): Internet Information Server
	Version(s): winnt:2.0,3.0,4.0
	Operating System(s): 
	Keyword(s): kbfile kbWinNT400sp4fix
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server versions 2.0, 3.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Microsoft Internet Information Server services are stopped and a Dr. Watson
	error, which references the Inetinfo.exe process, is generated.
	
	CAUSE
	=====
	
	The Internet Information Server service stops when it receives a client request
	(such as URLs and headers) that contains between 4 and 8 kilobytes of data from
	a browser.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	For your convenience, the English version of this post-SP3 hotfix has been posted
	to the following Internet location. However, Microsoft recommends that you
	install Windows NT 4.0 Service Pack 4 to correct this problem.
	
	  ftp://ftp.microsoft.com/bussys/winnt/winnt-public/fixes/usa/nt40/hotfixes-postSP3/iis-fix
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Internet Information Server
	versions 2.0 and 3.0. This problem was first corrected in Windows NT 4.0 Service
	Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition Service Pack 4.
	
	Additional query words: 4.00 3.00 2.00 access violation denial of service attack
	
	======================================================================
	Keywords          : kbfile kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch kbiisSearch kbiis300 kbiis200
	Version           : winnt:2.0,3.0,4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
