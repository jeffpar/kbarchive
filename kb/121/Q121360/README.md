---
layout: page
title: "Q121360: Setting Remote Logging in SNA Server Causes RPC Busy Error"
permalink: /kb/121/Q121360/
---

## Q121360: Setting Remote Logging in SNA Server Causes RPC Busy Error

	Article: Q121360
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you set one SNA Server in a domain to log events to a remote SNA Server in
	that domain, the remote system becomes unstable. After any remote logging is
	done, the following error message appears on the remote SNA Server when any
	RPC-aware process runs:
	
	  The RPC service is too busy to service this request.
	
	This problem may occur when SNA Server runs under Windows NT or Windows NT
	Advanced Server version 3.1 with U.S. Service Pack 2 for Windows NT and Windows
	NT Advanced Server installed.
	
	CAUSE
	=====
	
	
	RESOLUTION
	==========
	
	To avoid this problem, upgrade the local SNA Server computer to Windows NT
	Server or Windows NT Workstation version 3.5.
	
	WORKAROUND
	==========
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT and Windows NT
	Advanced Server version 3.1. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodsna 2.10 3.10 rpc busy
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.0,2.1
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
