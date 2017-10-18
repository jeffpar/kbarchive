---
layout: page
title: "Q183636: Errors using Personal Web Manager"
permalink: kb/183/Q183636/
---

## Q183636: Errors using Personal Web Manager

	Article: Q183636
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:4.0,4.01,95
	Operating System(s): 
	Keyword(s): kbenv win95 msiew95 win98
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows 95 OEM Service Release, versions 1.0, 2.0, 2.1, 2.5 
	- Microsoft Windows 98 
	- Microsoft Personal Web Server version 4.0 for Windows 95 
	- Microsoft Internet Explorer versions 4.0, 4.01 for Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using the Personal Web Manager to create a Web Site or add pages to a Web
	Site, you may receive the following error message:
	
	  Internet Explorer cannot open the Internet site
	  http://localhost/iisadmin/publish/welcome.asp
	
	  The server returned an invalid or unrecognized response
	
	CAUSE
	=====
	
	This behavior can occur if your computer accesses the Internet through a proxy
	server, and Internet Explorer is not configured to bypass the proxy server for
	local (Intranet) addresses.
	
	RESOLUTION
	==========
	
	To resolve this issue, configure Internet Explorer to bypass the proxy server
	for local (Intranet) addresses. To do so, use the following steps:
	
	1. In Internet Explorer, click View, Internet Options, and then click the
	  Connection tab.
	
	2. Click the "Bypass proxy server for local (Intranet) addresses" check box to
	  select it.
	
	3. Click OK.
	
	Additional query words: 98 4.00
	
	======================================================================
	Keywords          : kbenv win95 msiew95 win98 
	Technology        : kbIEsearch kbWin95search kbWin98search kbIE95Search kbOPKSearch kbPersWebServSearch kbZNotKeyword3 kbWin95 kbWin98 kbIE400Win95 kbIE401Win95 kbWin95OPKOSR25 kbWin95OPKOSR210 kbPersWebServ400Win95
	Version           : WINDOWS:4.0,4.01,95
	Issue type        : kbprb
	
	=============================================================================
	
