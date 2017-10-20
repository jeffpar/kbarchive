---
layout: page
title: "Q119466: Microsoft TCP/IP-32 and Sockets Support"
permalink: /kb/119/Q119466/
---

## Q119466: Microsoft TCP/IP-32 and Sockets Support

{% raw %}

	Article: Q119466
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft TCP/IP-32 for Windows for Workgroups, version 3.11 
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	The only supported interface for Microsoft TCP/IP-32 for Windows for Workgroups
	version 3.11 is Windows Sockets version 1.1. Support for previous versions of
	the Sockets specification is not provided. In addition, there is no support
	provided for Raw Sockets (SOCK_RAW), DOS Sockets, or vendor-specific socket
	implementations.
	
	MORE INFORMATION
	================
	
	The Windows Sockets application programming interface (API) was developed to
	provide a standard application interface to different vendors protocol
	implementations. The official name for the dynamic-link library (DLL) used for
	Windows Sockets 1.1 support is WINSOCK.DLL. Previous DLL versions that were
	distributed with Microsoft LAN Manager (for example, WIN_SOCK.DLL and
	WSOCKETS.DLL) are not supported by Microsoft TCP/IP-32. In order for a Windows
	Sockets application to function with Microsoft TCP/IP-32, the application must
	support Windows Sockets version 1.1 (WINSOCK.DLL).
	
	Additional query words: wfw wfwg prodtcp32 1.00
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbTCPIPSearch kbWFWSearch kbZNotKeyword3 kbWFW311 kbTCPIP311
	Version           : WINDOWS:3.11
	
	=============================================================================
	

{% endraw %}
