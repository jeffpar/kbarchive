---
layout: page
title: "Q190009: Client Cert. Mapping Only Works w/First Page on Proxy Connection"
permalink: kb/190/Q190009/
---

## Q190009: Client Cert. Mapping Only Works w/First Page on Proxy Connection

	Article: Q190009
	Product(s): Internet Information Server
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 01-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Over a proxy, after the initial certificate mapping has occurred, subsequent
	attempts to map the certificate during the same connection cause an error
	message of type 401.
	
	CAUSE
	=====
	
	When going through a proxy, although Internet Information Server (IIS) does
	reset the authentication after each request, it does not also retry Mapping the
	next request.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Internet Information Server
	version 4.0. This problem was first corrected in Windows NT 4.0 Service Pack 4.0
	and Windows NT Server 4.0, Terminal Server Edition Service Pack 4.
	
	Additional query words: ssl proxie first following succeding ensuing successive consecutive multiple attempts akz
	
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch kbiisSearch kbiis400
	Version           : :4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
