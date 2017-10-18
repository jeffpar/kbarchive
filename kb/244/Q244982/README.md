---
layout: page
title: "Q244982: Radius Authentication Provider Name Limited to 14 Characters"
permalink: kb/244/Q244982/
---

## Q244982: Radius Authentication Provider Name Limited to 14 Characters

	Article: Q244982
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you configure a Remote Authentication Dial-In User Service (RADIUS)
	authentication provider in Microsoft Management Console (MMC), the Internet
	Authentication service (IAS) may not start and you may receive the following
	error message:
	
	  The service failed to start. Please use the NT Event Viewer to examine the
	  application event log for details.
	
	The System log in Event Viewer may contain the following entry:
	
	  The Radius Server / Proxy service terminated with the following error: The
	  parameter is incorrect", and application log is said "An error occurred while
	  processing column 47 of line 5 of file USERS: Address Expected.
	
	CAUSE
	=====
	
	This behavior can occur if the authentication provider name is longer than 14
	characters; the configuration utility cannot handle longer names.
	
	RESOLUTION
	==========
	
	To work around this issue, do not use the fully qualified domain name (FQDN) for
	the authentication provider. Use either the actual server name without including
	the domain name, or use the TCP/IP address of the authentication provider in the
	DNS Name box when you configure the RADIUS server in MMC.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	
