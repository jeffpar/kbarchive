---
layout: page
title: "Q180638: Radius Server Not Logging When Users Connect from RRAS"
permalink: kb/180/Q180638/
---

## Q180638: Radius Server Not Logging When Users Connect from RRAS

	Article: Q180638
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbnetwork
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Routing and Remote Access Service Update for Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Your Remote Authentication Dial-In User Service (RADIUS) server does not respond
	to log accounting or authentication information when users are authenticated by
	a Routing and Remote Access Server (RRAS).
	
	CAUSE
	=====
	
	RRAS is using different ports for Radius accounting and authentication than your
	RADIUS server.
	
	RESOLUTION
	==========
	
	To resolve this problem, change the ports on your RRAS server to match the ports
	that are being used by your RADIUS server by using the following steps:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Network, click the Services tab, click "Routing and Remote
	  Access", and then click Properties.
	
	3. Click Network, and then click Configure under the Authentication Provider
	  section.
	
	4. Click the RADIUS server on which you want to edit the port number, and then
	  click Edit.
	
	5. Change the port number to the same port number that your RADIUS server is
	  using.
	
	6. Click OK in the RADIUS Server dialog box.
	
	7. Click OK in the RADIUS Configuration dialog box.
	
	8. Click OK in the Network Configuration dialog box, click Continue, click
	  Close, and then restart your computer when prompted.
	
	MORE INFORMATION
	================
	
	For more information, refer to RFC 2138 and RFC 2139.
	
	For additional information about how to obtain an RFC document, click the article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q185262 How to Obtain Request for Comments Documents from the Internet
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kb3rdparty kbnetwork 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbAudDeveloper kbRRASNTSearch kbRRASNT400
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	
