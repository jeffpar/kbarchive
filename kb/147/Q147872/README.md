---
layout: page
title: "Q147872: Unable to Lease IP Address from DHCP Server"
permalink: /kb/147/Q147872/
---

## Q147872: Unable to Lease IP Address from DHCP Server

	Article: Q147872
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): kberrmsg kbnetwork kbpolicy win95kbfixlist
	Last Modified: 25-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are using Windows 95 with a DHCP server to assign an IP address, you
	may receive the following error message if DHCP messages have not been disabled
	in Windows 95:
	
	  This DHCP client was unable to obtain an IP network address from a DHCP
	  server.
	
	If DHCP messages have been disabled, you may not see the error message even
	though an IP address was not obtained.
	
	This error can occur if the DHCP server does not respond to a DHCP request within
	two seconds.
	
	RESOLUTION
	==========
	
	
	STATUS
	======
	
	This problem no longer occurs in Windows 98. To resolve this problem, install
	the current version of Windows. For information about the current version of
	Windows, visit http://www.microsoft.com/windows.
	
	MORE INFORMATION
	================
	
	When requesting an IP address from a DHCP server, Windows 95 times out the
	requests at two-second intervals. After a timeout, the request is re- issued. If
	the timeout has expired before the server responds, the response is discarded
	and the client waits for a response to its latest request. This process
	continues through four retries, at which time the error message stated above is
	generated.
	
	This problem does not occur with MSTCP-32 for Windows for Workgroups because it
	uses a default timeout of four seconds.
	
	This problem is known to occur when you are using DHCP servers that implement
	address protection at the server. In particular, the problem occurs if it takes
	the server more than two seconds to verify whether an address that it is
	preparing to issue is already in use or not.
	
	Address protection is the process of determining whether an address is in use by
	another computer before a client uses it. Note that Microsoft DHCP clients
	implement address protection at the client.
	
	
	Additional query words: tcp/ip tcp protocol
	
	======================================================================
	Keywords          : kberrmsg kbnetwork kbpolicy win95 kbfixlist
	Technology        : kbWin95search kbZNotKeyword3
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
