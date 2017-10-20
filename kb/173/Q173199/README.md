---
layout: page
title: "Q173199: Multiple Credentials in a Single Windows NT Session"
permalink: /kb/173/Q173199/
---

## Q173199: Multiple Credentials in a Single Windows NT Session

{% raw %}

	Article: Q173199
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Windows NT allows users to connect to multiple resources using multiple user
	credentials but only allows a single user to use a connection.
	
	If you attempt to connect to the same resource with different credentials, you
	will get an error message stating that the credentials supplied conflict with an
	existing set of credentials. If you attempt this operation from an MS-DOS
	command line, you receive the following error:
	
	  System error 1219 has occurred.
	
	CAUSE
	=====
	
	Windows NT will attempt to use the same virtual circuit even if a different set
	of credentials is supplied because the resource name is identical.
	
	RESOLUTION
	==========
	
	Provide the TCP/IP address of the computer instead of the computer name.
	
	MORE INFORMATION
	================
	
	It is possible to use multiple user credentials to connect to the same resource
	on Windows NT when TCP/IP is used as the protocol to establish the connection.
	
	If you connect to the same resource but use the TCP/IP address of the host
	instead of the computer name, you will be able to connect to the same resource
	with a different set of credentials.
	
	Example:
	
	C:\>net use * \\dabears\utils /U:raydev
	C:\>net use * \\10.100.57.1\utils /U:administrator
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Hardware          : ALPHA PPC x86
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
