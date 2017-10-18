---
layout: page
title: "Q187856: Limit SSL Message Size to 16 KB for Netscape"
permalink: kb/187/Q187856/
---

## Q187856: Limit SSL Message Size to 16 KB for Netscape

	Article: Q187856
	Product(s): Internet Information Server
	Version(s): winnt:3.0,4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 3.0 
	- Microsoft BackOffice Server 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to make a secure connection to ASP files that are over 32 KB with
	Netscape, the following error message occurs:
	
	  An I/O Error occurred during security authorization. Please try connection
	  again.
	
	CAUSE
	=====
	
	The SSL limit, as defined in the SSL specifications, is a maximum of 16 KB of
	data in one block.
	
	The problem occurs when the IIS 3.0 computer sends the Netscape client more than
	16 KB at one time (in one block of data).
	
	Internet Explorer accepts up to a 32 KB block of data at one time.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 4.
	
	Additional query words: Secure Sockets Layer https web page
	
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch kbiisSearch kbAudDeveloper kbBackOfficeSearch kbiis300 kbBackOfficeServ400
	Version           : winnt:3.0,4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
