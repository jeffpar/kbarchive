---
layout: page
title: "Q126451: Windows NT Client Loses Session To Server"
permalink: /kb/126/Q126451/
---

## Q126451: Windows NT Client Loses Session To Server

	Article: Q126451
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.1; winnt:3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- the operating system: Microsoft Windows NT 3.5 
	- Microsoft SNA Server, version 2.1, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you close an SNA Server 5250 (or APPC) session on a Windows NT 3.5
	computer, any other SNA applications with a connection to the server lose their
	session. As a result:
	
	- If SNA Admin is also running on the same machine, and the 5250 session is
	  disconnected. SNA Admin may also lose its connection to SNA Server, causing
	  an SNA Server Admin Error.
	
	  NOTE: 5250 emulators also use the SNA Server APPC interface.
	
	- The Windows NT system event log includes the following error (for each time
	  the user disconnected their 5250 session), if TCP/IP is being used:
	
	  Event: 2012
	  Source: Srv
	  Description: The server has encountered a network error.
	
	- Within an internal SNA Server client trace, the named pipe session fails with
	  rc=59 (An unexpected network error occurred).
	
	- Any other APPC applications with sessions against the same SNA Server receive
	  the following error:
	
	  primary return code = F003 = AP_COMM_SUBSYSTEM_ABENDED
	
	  This error returned by SNA Server when its client-server LAN session is lost.
	
	CAUSE
	=====
	
	If a Windows NT process has a pending write request on a named pipe and then
	calls ExitProcess() before the write completes, all other applications connected
	to the same server pipe fail with error 59 (unexpected pipe close).
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. This
	problem has been corrected in the latest U.S. Service Pack for Windows NT
	version 3.5. For information on obtaining the Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodnt prodsna 2.10 rdr.sys 2012 sna f003
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbOSWinSearch kbSNAServSearch kbOSWinNTSearch
	Version           : WINDOWS:2.1; winnt:3.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
