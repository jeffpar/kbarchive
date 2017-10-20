---
layout: page
title: "Q132436: SNA Server Handling of 3270 LU Session Cleanup"
permalink: /kb/132/Q132436/
---

## Q132436: SNA Server Handling of 3270 LU Session Cleanup

{% raw %}

	Article: Q132436
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11,2.11 SP1,2.11 SP2,3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0,4.0 SP1,4.0 SP2
	Operating System(s): 
	Keyword(s): kbenv kbnetwork kbsna211sp1 kbsna211sp2 kbsna300sp1 kbsna300sp2 kbsna300sp3 sna4 kbsna4
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, 2.11 SP1, 2.11 SP2, 3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 4.0, 4.0 SP1, 4.0 SP2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When using pooled 3270 LUs with SNA Server, a 3270 user may access the previous
	user's host application session. This occurs when the host did not clean up the
	3270 application after receiving a TERM-SELF message from SNA Server on the
	session. If this occurs, the NOTERMSELF:REG_SZ:YES registry setting should be
	used to force SNA Server to send an UNBIND(Cleanup) when the user ends their
	3270 session, or when the user's client-server LAN session is lost.
	
	The NOTERMSELF registry setting is described below, and in the SNA Server 2.1 or
	3.0 "Reference Guide".
	
	MORE INFORMATION
	================
	
	When a 3270 user closes their emulation session, or if the SNA Server client
	loses its LAN connection to the SNA Server, SNA Server sends a TERM-SELF on the
	SSCP-LU session to request that the host unbind the PLU-SLU session. On some
	host systems, this TERM-SELF message does not cause the 3270 application session
	to be cleaned up.
	
	To force SNA Server to send an UNBIND(Cleanup) to the host:
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	1. Run Registry Editor (REGEDT32.EXE).
	
	2. From the HKEY_LOCAL_MACHINE subtree, go to the following key:
	
	  \SYSTEM\CurrentControlSet\Services\SnaServr\Parameters
	
	3. From the Edit menu, choose Add Value.
	
	4. Add the following:
	
	  "Value Name: NOTERMSELF
	  Data Type: REG_SZ
	  String: YES" (without the quotation marks)
	
	5. Choose OK.
	
	When this variable is set to YES, 3270 sessions are terminated directly by
	sending UNBIND(cleanup). Otherwise, a TERM-SELF is sent to solicit UNBIND from
	the host. Setting this variable to YES is a workaround for host-based session
	monitors that mark the LU as inactive after the TERM-SELF sequence, or do not
	properly unbind the application session.
	
	If CICS is being used and the CICS "dedicated LU" feature is enabled at the host,
	or if certain host session monitors are being used (such as "TPX"), the host
	3270 application session may not be cleaned up even if SNA Server is configured
	to send Unbind(cleanup).
	
	When using dedicated LUs, CICS preserves the user's host application session even
	when the user were to turn off their 3270 terminal. So, this host feature
	assumes that a given LU will always be accessed by a specific user. If you want
	to use the dedicated LU feature, consider assigning specific 3270 LUs to
	specific users using SNA Server Admin, and do not use pooled 3270 LUs.
	Otherwise, if a user disconnects from their emulation session, the next user who
	acquires the same 3270 LU (through the use of a 3270 pool) reconnects to the
	same host application state of the previous user.
	
	Additional query words: prodsna notermself unbind
	
	======================================================================
	Keywords          : kbenv kbnetwork kbsna211sp1 kbsna211sp2 kbsna300sp1 kbsna300sp2 kbsna300sp3 sna4 kbsna400sp1 kbsna400sp2 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ200 kbSNAServ211 kbSNAServ400 kbSNAServ210 kbSNAServ211SP1 kbSNAServ211SP2 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ300SP2
	Version           : WINDOWS:2.0,2.1,2.11,2.11 SP1,2.11 SP2,3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0,4.0 SP1,4.0 SP2
	
	=============================================================================
	

{% endraw %}
