---
layout: page
title: "Q93441: Microsoft TCP/IP 2.1a with Windows for Workgroups"
permalink: kb/093/Q93441/
---

## Q93441: Microsoft TCP/IP 2.1a with Windows for Workgroups

	Article: Q93441
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	On page E-5 of the Microsoft Windows for Workgroups "Resource Kit" version 3.1
	manual, the device driver name in the [ms$tcp] section of the PROTOCOL.INI file
	is incorrectly shown in lowercase letters:
	
	[ms$tcp]
	 ...
	 drivername=tcpip$
	
	The drivername should be uppercase, as follows:
	
	[ms$tcp]
	 ...
	 drivername=TCPIP$
	
	MORE INFORMATION
	================
	
	If you do not use uppercase letters for drivername, TCPDRV.DOS fails to
	initialize in CONFIG.SYS, with no explanation.
	
	LAN Manager 2.2 includes a protocol disk in Windows for Workgroups format, so you
	can ignore the NDIS transport protocol integration procedure described in the
	"Microsoft Windows for Workgroups Resource Kit."
	
	Reference(s):
	
	Microsoft Windows for Workgroups "Resource Kit," version 3.1, Appendix E
	
	Additional query words: wfw wfwg 2.10 doc err ntdocerr
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	
