---
layout: page
title: "Q135680: RAS Err Msg: Unable to Connect. No More Connections can be..."
permalink: /kb/135/Q135680/
---

## Q135680: RAS Err Msg: Unable to Connect. No More Connections can be...

	Article: Q135680
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.51,4.0
	Operating System(s): 
	Keyword(s): kberrmsg kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Windows NT Remote Access Service (RAS) client to connect to a
	Windows NT 3.51 or 4.0 RAS server, the following error appears:
	
	  RAS: Unable to connect. No more connections can be made to this remote
	  computer because the computer has exceeded its client license limit.
	
	The following error appears in the event log on the RAS server:
	
	  Error: 20101
	  Source: Remote Access
	  Description: Unable to connect to com5. No more connections can be made to
	  this remote computer because the computer has exceeded its client license
	  limit.
	
	When you use a Windows 3.x RAS client, the connection drops without error
	notification. LAN clients can still access the server.
	
	CAUSE
	=====
	
	The licensing service is not releasing the licenses for RAS users after they
	hang up. Over time, depending on the number of licenses you have defined on the
	server, all of the licenses will be taken.
	
	RESOLUTION
	==========
	
	To correct this problem, change the licensing from "Per Server" to "Per Seat."
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 3.51. We are
	researching this problem and will post new information here as it becomes
	available.
	
	Additional query words: 3.51 prodnt license service dropped connection lost wfw wfwg win95
	======================================================================
	Keywords          : kberrmsg kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : WinNT:3.51,4.0
	Issue type        : kbbug
	
	=============================================================================
	
