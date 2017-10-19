---
layout: page
title: "Q252298: Error Msg &quot;Browser Error: Your Browser Sent a Malformed Request"
permalink: /kb/252/Q252298/
---

## Q252298: Error Msg &quot;Browser Error: Your Browser Sent a Malformed Request

	Article: Q252298
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 1.0,1.0a,4.0
	Operating System(s): 
	Keyword(s): 3rdpartynet appscomp kb3rdPartyNetClient kbAppCompatibility
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Personal Web Server versions 1.0, 1.0a, 4.0 for Windows 95 
	- Microsoft Windows 98 
	- Microsoft Windows 98 Second Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to connect to the <localhost> or <computername> of
	a Windows 98- or Windows 95-based computer that has Personal Web Server (PWS)
	installed, you may receive the following error message:
	
	  Browser Error: Your browser sent a malformed request.
	
	This issue occurs even if you reinstall PWS. It also occurs regardless of whether
	you connect to the PWS server locally or remotely.
	
	CAUSE
	=====
	
	This issue can occur if you are using a version of Wingate Proxy that is earlier
	than version 3.0.
	
	RESOLUTION
	==========
	
	To resolve this issue, install the latest version of Wingate Proxy, or remove
	Wingate Proxy from the Windows 95- or Windows 98-based computer that has PWS
	installed.
	
	To remove Wingate Proxy, follow these steps:
	
	1. Start Control Panel, and then double-click the Add/Remove Programs icon.
	
	2. Click Wingate Proxy, click the Add/Remove button, and then click OK.
	
	3. Restart the computer.
	
	WORKAROUND
	==========
	
	To work around this issue, remove port 80 as the proxy port for Wingate Proxy.
	This action prevents PWS and Wingate from competing with port 80. For
	information about how to change the proxy port, consult the documentation for
	Wingate Proxy.
	
	MORE INFORMATION
	================
	
	This issue does not occur with Wingate 3.0 or later.
	
	The third-party products that are discussed in this article are manufactured by
	companies that are independent of Microsoft. Microsoft makes no warranty,
	implied or otherwise, regarding the performance or reliability of these
	products.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : 3rdpartynet appscomp kb3rdPartyNetClient kbAppCompatibility 
	Technology        : kbWin95search kbWin98search kbWin98SEsearch kbPersWebServSearch kbZNotKeyword3 kbWin98 kbWin98SE kbPersWebServ100Win95 kbPersWebServ100aWin95 kbPersWebServ400Win95
	Version           : :1.0,1.0a,4.0
	Issue type        : kbprb
	
	=============================================================================
	
