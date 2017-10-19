---
layout: page
title: "Q250562: Error: Access Violation RemoveEntryList() Function TN3270 Server"
permalink: /kb/250/Q250562/
---

## Q250562: Error: Access Violation RemoveEntryList() Function TN3270 Server

	Article: Q250562
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:4.0,4.0 SP1,4.0 SP2
	Operating System(s): 
	Keyword(s): kbsna
	Last Modified: 16-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 4.0, 4.0 SP1, 4.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An access violation (AV) occurs in the TN3270 RemoveEntryList() function when a
	computer starts and the TN3270 Server Service is set to "On Server Startup" from
	the Services icon in Control Panel. A Dr.Watson log is generated when this
	access violation occurs similar to the following:
	
	Application exception occurred:
	       App: exe\tn3servr.dbg (<pid>)
	       When: <date, time>
	       Exception number: c0000005 (access violation)
	
	function: RemoveEntryList
	       672258e0 8b4c2404         mov     ecx,[esp+0x4]          ss:0e0ce29f=????????
	       672258e4 8b01             mov     eax,[ecx]              ds:0c8602e4=00000000
	       672258e6 8b4904           mov     ecx,[ecx+0x4]          ds:0e06ecea=????????
	       672258e9 8901             mov     [ecx],eax              ds:0c8602e4=00000000
	FAULT ->672258eb 894804           mov     [eax+0x4],ecx          ds:0180ea06=????????
	       672258ee c20400           ret     0x4
	
	CAUSE
	=====
	
	The DMOD (SNADMOD.exe) does not always cancel a pending delayed close timer when
	it reuses a connection.
	
	RESOLUTION
	==========
	
	To resolve this problem, upgrade to the latest service pack.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 4.0, 4.0 SP1,
	and 4.0 SP2. This problem was first corrected in Microsoft SNA Server 4.0 U.S.
	Service Pack 3.
	
	For information on obtaining the service pack, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsna
	
	======================================================================
	Keywords          : kbsna 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400 kbSNAServ400SP1 kbSNAServ400SP2
	Version           : WINDOWS:4.0,4.0 SP1,4.0 SP2
	
	=============================================================================
	
