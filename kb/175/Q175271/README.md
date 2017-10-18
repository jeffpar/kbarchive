---
layout: page
title: "Q175271: SNA 3.0 SP2 Hang or Access Violation in SNA Server or SnaBase"
permalink: kb/175/Q175271/
---

## Q175271: SNA 3.0 SP2 Hang or Access Violation in SNA Server or SnaBase

	Article: Q175271
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0 SP2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 3.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you upgrade to Microsoft SNA Server 3.0 Service Pack 2, one of the
	following symptoms may occur while the server is running:
	
	- Users who have active sessions may find their computer suddenly hangs or
	  stops responding (3270 users may receive perpetual XCLOCK), and new user
	  connection attempts to either the SnaBase or SNA Server service may fail.
	
	- The SnaBase or SNA Server service may terminate unexpectedly with the
	  following error messages:
	
	  Windows NT application event log error:
	
	  Event: 624
	  Source: SNA Server (or SnaBase)
	  Description: Creating dump file C:\SNA\traces\snadump.log for
	  Snaservr.exe [or snabase.exe]
	
	  Also, an <Ntroot>\Drwtsn32.log entry may be created, indicating the
	  following failure:
	
	  Application exception occurred:
	  App: snaservr.DBG (pid=<process ID>)
	  When: <date and time>
	  Exception number: c0000005 (access violation)
	
	  The fault entry indicated in routine ntdll!RtlAllocateHeap, or
	  ntdll!RtlDestroyHeap.
	
	CAUSE
	=====
	
	In SNA Server 3.0 Service Pack 2, client logon requests are now handled from
	multiple threads within the SnaBase or SNA Server service. If two concurrent
	client logon requests occur that both use the LSA authentication method (that
	is, Windows 3.x clients, or Windows NT services that run under the local system
	account), the SnaBase or SNA Server memory heap may become corrupted. This
	occurs because LSA logon is not thread-safe, so two concurrent LSA logon
	requests from the same process can result in memory corruption.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 3.0 Service
	Pack 2.
	
	This problem was corrected in the latest SNA Server version 3.0 U.S. Service
	Pack. For information on obtaining this Service Pack, query on the following
	word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300SP2
	Version           : WINDOWS:3.0 SP2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
