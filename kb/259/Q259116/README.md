---
layout: page
title: "Q259116: SFU Telnet Server Connections Limited to License Server Limits"
permalink: /kb/259/Q259116/
---

## Q259116: SFU Telnet Server Connections Limited to License Server Limits

	Article: Q259116
	Product(s): Microsoft Windows NT
	Version(s): winnt:
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 30-JUL-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Services for UNIX, version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In Windows Services for UNIX (SFU) 2.0, Telnet server connections are limited to
	the number of connections defined in License Manager.
	
	MORE INFORMATION
	================
	
	When you are defining the number of sessions allowed by Telnet server, you
	cannot set a number larger than the number of licenses defined in Microsoft
	Windows 2000/Microsoft Windows NT License Manager. To define a Telnet server
	session limit, start Services for UNIX Administrator, and then double-click
	Telnet Server, Server Settings, and "Maximum number of simultaneous
	connections".
	
	The maximum number of sessions allowed is equal to the License value set in
	License Manager. If the License Manager value is higher than 63, the default
	value for the "Maximum number of simultaneous connections" setting is 63.
	
	
	Additional query words: SFU solar coaster solarcoaster
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbWinServiceUNIX200 kbWinServiceUNIXSearch
	Version           : winnt:
	Issue type        : kbinfo
	
	=============================================================================
	
