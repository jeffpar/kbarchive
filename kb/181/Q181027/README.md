---
layout: page
title: "Q181027: Closing Subdomain Causes Dr. Watson in CSnaItem::Terminate"
permalink: kb/181/Q181027/
---

## Q181027: Closing Subdomain Causes Dr. Watson in CSnaItem::Terminate

	Article: Q181027
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1,3.0 SP2,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 02-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you close an SNA Server Subdomain from within SNA Server Manager, a
	Dr.Watson error may occur in function "CSnaItem::Terminate." When this happens,
	SNA Manager (Snaexp.exe) shuts down and an Event 4097 is recorded in the Windows
	NT application event viewer.
	
	The following entry is logged in the <Ntroot>\Drwtsn32.log file, indicating
	an access violation in function: CSnaItem::Terminate.
	
	  Application exception occurred:
	  App: exe\snaexp.dbg (<process ID>)
	  Exception number: c0000005 (access violation)
	
	  *----> Task List <----*
	  <process ID> SNAEXP.exe
	  ..
	  ..
	  State Dump for Thread Id 0x118
	
	  eax=00000000 ebx=000d0008 ecx=00000000 edx=00268374 esi=00268370
	  edi=00000030 eip=67708de2 esp=0006f698 ebp=000da11c iopl=0 nv up ei pl
	  na pe nc cs=001b  ss=0023  ds=0023  es=0023  fs=0038  gs=0000
	  efl=00000202
	  ..
	  ..
	  function: CSnaItem::Terminate
	  ..
	  ..
	  FAULT ->67708de2 8b09 mov ecx,[ecx]ds:00000000=????????
	
	CAUSE
	=====
	
	There is a problem in the way that SNA Server Manager handles the closures of
	subdomains.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 3.0, 3.0
	SP1, 3.0 SP2 and 4.0.
	
	This problem was corrected in the latest SNA Server versions 3.0 and 4.0 U.S.
	Service Packs. For information on obtaining these Service Packs, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	
	Additional query words: Trap GPF
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400 kbSNAServ300SP1 kbSNAServ300SP2
	Version           : WINDOWS:3.0,3.0 SP1,3.0 SP2,4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
