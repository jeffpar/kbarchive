---
layout: page
title: "Q255890: PRB: DCOM Client Hangs When You Pass Callback Interface Pointer"
permalink: /kb/255/Q255890/
---

## Q255890: PRB: DCOM Client Hangs When You Pass Callback Interface Pointer

{% raw %}

	Article: Q255890
	Product(s): Microsoft Windows NT
	Version(s): 4.0; winnt:4.0
	Operating System(s): 
	Keyword(s): kbDCOM kbGrpDSCom kbDSupport
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Advanced Server, version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a Distributed Component Object Model (DCOM) client makes a remote method
	call to pass a callback interface pointer to the server, and the SYSTEM account
	does not have access permissions on the client computer, a problem may occur. If
	the User Datagram Protocol (UDP) is used, the client may stop responding (hang).
	If the Transmission Control Protocol/Internet Protocol (TCP/IP) is used, the
	application may return the E_OUTOFMEMORY error.
	
	CAUSE
	=====
	
	By default, the SYSTEM account does not have access permissions on the client
	computer; as a result, DCOM cannot marshall the callback interface pointer.
	
	RESOLUTION
	==========
	
	To resolve this problem, give access permissions to the SYSTEM account. For DCOM
	to work, you must assign access permissions to the SYSTEM account.
	
	MORE INFORMATION
	================
	
	To check the default access permissions, perform the following steps:
	
	1. Start Dcomcnfg.exe.
	
	2. Click the Default Security tab, and then click Edit Default for default
	  access permissions. The list must include SYSTEM: allow access. If the list
	  is empty, then the launching user and the SYSTEM account have access
	  permissions.
	
	REFERENCES
	==========
	
	For more information on COM security, see the following MSDN Online Library help
	topic:
	
	  http://msdn.microsoft.com/library/psdk/com/security_0icz.htm
	
	Additional query words: SYSTEM hang
	
	======================================================================
	Keywords          : kbDCOM kbGrpDSCom kbDSupport 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbWinNTAdvSerSearch kbWinNTAdvServ400 kbNTTermServ400 kbNTTermServSearch
	Version           : :4.0; winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
