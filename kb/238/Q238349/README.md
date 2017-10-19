---
layout: page
title: "Q238349: Specially-Malformed Header Creates Denial of Service"
permalink: /kb/238/Q238349/
---

## Q238349: Specially-Malformed Header Creates Denial of Service

	Article: Q238349
	Product(s): Internet Information Server
	Version(s): winnt:2.0,2.5,3.0,4.0
	Operating System(s): 
	Keyword(s): kbWinNT4sp6fix
	Last Modified: 20-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	- Microsoft Internet Information Server version 4.0 
	- Microsoft Site Server version 3.0 
	- Microsoft Commercial Internet System versions 2.0, 2.5 
	- Microsoft Site Server version 3.0, Commerce Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A specially-malformed header in a GET request can create a Denial of Service in
	the W3 server and use all available memory on the Web server, causing Internet
	Information Server (IIS) to stop responding to any request.
	
	
	RESOLUTION
	==========
	
	Windows NT Server or Workstation 4.0 and Internet Information Server
	--------------------------------------------------------------------
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or the
	individual software update. For information on obtaining the latest service
	pack, please go to:
	
	- http://www.microsoft.com/Windows/ServicePacks/
	
	-or-
	
	- Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	For information on obtaining the individual software update, contact Microsoft
	Product Support Services. For a complete list of Microsoft Product Support
	Services phone numbers and information on support costs, please go to the
	following address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	
	Windows NT Server 4.0, Terminal Server Edition
	----------------------------------------------
	
	To resolve this problem, obtain the latest service pack for Windows NT Server
	4.0, Terminal Server Edition. For additional information, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Internet Information Server 4.0.
	This problem was first corrected in Windows NT Server version 4.0, Terminal
	Server Edition Service Pack 6.Microsoft has confirmed this to be a problem in
	Windows NT 4.0 and Windows NT Server 4.0, Terminal Server Edition.
	
	This problem was first corrected in Windows NT Server 4.0 Service Pack 6 and
	Windows NT Server 4.0, Terminal Server Edition Service Pack 6.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbWinNT4sp6fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch kbSiteServSearch kbiisSearch kbAudDeveloper kbiis400 kbMCISSearch kbMCIS200 kbMCIS250 kbSiteServ300 kbSiteServ300Search
	Version           : winnt:2.0,2.5,3.0,4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
