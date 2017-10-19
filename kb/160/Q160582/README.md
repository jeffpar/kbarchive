---
layout: page
title: "Q160582: Too Many Connected Users Err. Msg. When Use SSL and IE 3.0"
permalink: /kb/160/Q160582/
---

## Q160582: Too Many Connected Users Err. Msg. When Use SSL and IE 3.0

	Article: Q160582
	Product(s): Internet Information Server
	Version(s): Winnt:1.0,2.0
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 07-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server versions 1.0, 2.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you open a link on a secured Internet Information Server (IIS) website, you
	will get the following error message:
	
	  Too many connected users.
	
	CAUSE
	=====
	
	Microsoft Internet Explorer version 3.01 does not close Secure Sockets Layer
	(SSL) connections to an HTTPS web server correctly. Therefore, it causes open
	connections to stay until the server times out the connections.
	
	Netscape Navigator version 3.x does not cause the above error.
	
	WORKAROUND
	==========
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	Turn off keep-alives on Internet Information Server by using regedit (or
	regedt32) and the following entry:
	
	NOTE: The following entry turns off keep-alives to on SSL connections. However,
	it breaks Windows NT Challenge/Response authentication.
	
	HKEY_LOCAL_MACHINE\ 
	          \System
	           \CurrentControlSet
	            \Services
	             \W3SVC
	              \Parameters
	               \SslNoKeepAlive:
	
	REG_DWORD: 1
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem with Microsoft Internet Explorer
	version 3.01. We are researching this problem and will post new information here
	in the Microsoft Knowledge Base as it becomes available.
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbiisSearch kbiis200 kbiis100
	Version           : Winnt:1.0,2.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	
	=============================================================================
	
