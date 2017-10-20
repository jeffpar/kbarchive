---
layout: page
title: "Q189474: Mngcli Traps When Opening a Subdomain &#92;&#92;XXX&#92;"
permalink: /kb/189/Q189474/
---

## Q189474: Mngcli Traps When Opening a Subdomain &#92;&#92;XXX&#92;

{% raw %}

	Article: Q189474
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0,4.0 SP1
	Operating System(s): 
	Keyword(s): kbbuglist
	Last Modified: 12-APR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 4.0, 4.0 SP1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Specifying a SNA Server subdomain or server name that contains a backslash (for
	example, \\server\1) in the Open Subdomain option in SNA Server Manager causes
	an application exception in MngCli.exe. The application exception causes an
	Drwtsn32.log to be generated if Drwtsn32.exe is configured as the default
	debugger on the SNA Server computer.
	
	CAUSE
	=====
	
	The Manage Client (Mngcli.exe) does not properly validate the subdomain or
	server name if it includes a backslash ( \ ).
	
	RESOLUTION
	==========
	
	Microsoft has confirmed this to be a problem in SNA Server versions 3.0, 3.0
	SP1, 3.0 SP2, 3.0 SP3, 4.0, and 4.0 SP1. We are researching this problem in SNA
	Server version 3.0 and will post more information here in the Knowledge Base as
	it becomes available.
	
	This problem was corrected in the latest SNA Server version 4.0 U.S. Service
	Pack. For information on obtaining this Service Pack, query on the following
	word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	WORKAROUND
	==========
	
	Do not use a backslash in the name after the initial backslashes ( \\ ).
	
	MORE INFORMATION
	================
	
	After you applying the Service Pack, the Manage Client validates the name, and
	if a backslash appears after the first two backslashes, it is replaced by a
	terminating NULL, and everything after the backslash is ignored.
	
	The Dr. Watson will look similar to the following:
	
	  Application exception occurred:
	       App: exe\mngcli.dbg (pid=242)
	       When: 5/25/1998 @ 13:9:36.502
	       Exception number: 80000003 (hardcoded breakpoint)
	
	  FramePtr ReturnAd Param#1  Param#2  Param#3  Param#4  Function Name
	  00c0ff58 77f1c690 00000007 00c0ffa0 00000000 ffffffff
	  ntdll!NtWaitForMultipleObjects
	  00c0ff74 6020475f 00000007 00c0ffa0 00000000 ffffffff
	  kernel32!WaitForMultipleObjects
	
	  State Dump for Thread Id 0xe2
	
	  eax=00000006 ebx=77f068ca ecx=00000006 edx=00000007 esi=77f01361
	  edi=77f0178e
	  eip=77f76148 esp=00c4fd48 ebp=6727a610 iopl=0
	  nv up ei pl nz na po nc
	  cs=001b  ss=0023  ds=0023  es=0023  fs=0038  gs=0000
	  efl=00000206
	
	  function: DbgBreakPoint
	  FAULT ->77f76148 cc               int     3
	       77f76149 c3               ret
	       77f7614a 8bc0             mov     eax,eax
	
	Additional query words:
	
	======================================================================
	Keywords          :  kbbuglist
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ300SP2
	Version           : WINDOWS:3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0,4.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
