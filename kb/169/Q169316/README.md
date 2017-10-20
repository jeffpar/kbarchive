---
layout: page
title: "Q169316: How to Install WAN Services for X.25 Exchange Installations"
permalink: /kb/169/Q169316/
---

## Q169316: How to Install WAN Services for X.25 Exchange Installations

{% raw %}

	Article: Q169316
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): WinNT:3.51,4.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbsetup
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	This article tells you how to install WAN services for Eicon on Windows NT
	Server.
	
	MORE INFORMATION
	================
	
	To Install WAN Services for Eicon on Windows NT Server 3.51:
	
	1. Get the WAN Services for Eicon from the Eicon CD.
	
	2. Make sure to apply the appropriate service packs after adding the software.
	  Refer to Eicon documentation on how to install the WAN Services. The WAN
	  Services for Eicon must be V3R4b.
	
	To install WAN Services for Eicon on Windows NT 4.0:
	
	1. Install the EICON WAN Services for Windows NT from the Windows NT 4.0 CD. The
	  WAN Services for Eicon must be V3R4b.
	
	2. Exchange Server also requires the X.25 NLD Toolkit for Windows NT 1.3b Build
	  105 (X25ntm9.dll). This file is installed by Exchange Server Setup under
	  Exchsrvr\Bin and Exchsrvr\Connect\Msmcon\Bin.
	
	In order for Exchange Server to perform correctly you must be running the correct
	version of WAN Services for NT. If the EICON X.25 service fails to start this is
	probably a driver version issue. If the EICON service starts but no messages are
	received it could be an EICON/Exchange configuration issue.
	
	The third-party products discussed in this article are manufactured by a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words:
	
	======================================================================
	Keywords          : kb3rdparty kbsetup 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2
	Version           : WinNT:3.51,4.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
