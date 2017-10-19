---
layout: page
title: "Q195998: SNA Server Fails With Access Violation in Routine s1pxsnd()"
permalink: /kb/195/Q195998/
---

## Q195998: SNA Server Fails With Access Violation in Routine s1pxsnd()

	Article: Q195998
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0SP1,3.0SP2,3.0SP3,4.0,4.0SP1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 4.0, 4.0 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The SNA Server service may fail with an access violation after receiving a badly
	formatted message from the SNA client APPC DLL (Wappc32.dll). This may occur if
	the client application issues both [MC_]ALLOCATE and RECEIVE_ALLOCATE from the
	same process.
	
	If Drwtsn32.exe is configured as the default debugger on the SNA Server system,
	the Drwtsn32.log file may contain an entry similar to the following when this
	access violation occurs:
	
	     Application exception occurred:
	     App: <path>snaservr.exe (pid=<process ID #>)
	     When: <date> @ <time>
	     Exception number: c0000005 (access violation)
	
	     [...]
	
	     State Dump for Thread Id 0xd3
	
	     eax=012d007e ebx=012d036e ecx=012d5405 edx=017d88b8 esi=017d1451
	       edi=017d89bd
	     eip=003edcf6 esp=0118ff3c ebp=00000000 iopl=0
	     nv up ei pl nz na   po cy
	     cs=001b  ss=0023  ds=0023  es=0023  fs=0038  gs=0000 efl=00000207
	
	     function: s1pxsnd
	          003edcd9 b101             mov     cl,0x1
	          003edcdb 8b5004           mov     edx,[eax+0x4]
	          003edcde 668b5a06         mov     bx,[edx+0x6]
	          003edce2 8bea             mov     ebp,edx
	          003edce4 662b5d04         sub     bx,[ebp+0x4]
	          003edce8 6643             inc     bx
	          003edcea 663b5c2412       cmp     bx,[esp+0x12]
	          003edcef 7d19             jge     s1pxsnd+0xa8a
	          003edcf1 8b6d00           mov     ebp,[ebp]
	          003edcf4 fec1             inc     cl
	  FAULT ->003edcf6 668b4506         mov     ax,[ebp+0x6]
	          003edcfa 662b4504         sub     ax,[ebp+0x4]
	
	  *----> Stack Back Trace <----*
	
	  FramePtr ReturnAd Param#1  Param#2  Param#3  Param#4  Function Name
	  00000000 00000000 00000000 00000000 00000000 00000000 snaservr!s1pxsnd
	
	In addition, the Windows NT Application Event Log may contain the following event
	which coincides with the same failure time as indicated in the drwtsn32.log
	entry.
	
	  Event ID: 624
	  Source: SNA Server
	  Description: Creating dump file <snaroot>\snadump.log for Snaservr.exe
	
	CAUSE
	=====
	
	In a rare condition, the SNA Windows NT or Windows 95/98 client APPC DLL
	(Wappc32.dll) may send a badly formatted message to the SNA Server if the client
	application issues both [MC_]ALLOCATE and RECEIVE_ALLOCATE from the same
	process. The SNA Server fails with an access violation when receiving this badly
	formatted message.
	
	RESOLUTION
	==========
	
	SNA Server 3.0
	--------------
	
	A supported fix that corrects this problem is now available from Microsoft, but
	has not been fully regression-tested and should be applied only to systems
	experiencing this specific problem. If you are not severely affected by this
	specific problem, Microsoft recommends that you wait for the next Microsoft SNA
	Server version 3.0 service pack that contains this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. The updated Wappc32.dll must be applied to all SNA Server
	client computers that access the SNA Server.
	
	For a complete list of Microsoft Product Support Services phone numbers and
	information on support costs, please go to the following address on the World
	Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	The English version of this fix should have the following file attributes or
	later:
	
	     File Name        Date       Time
	     ----------------------------------
	     Wappc32.dll
	
	NOTE: The Date and Time information for the above file will be provided in this
	article as soon as it becomes available.
	
	NOTE: Due to file dependencies, the most recent fix that contains the above files
	may also contain additional files.
	
	
	SNA Server 4.0
	--------------
	
	This problem was corrected in the latest SNA Server version 4.0 U.S. Service
	Pack. For information on obtaining this Service Pack, query on the following
	word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 3.0, 3.0
	Service Pack 1, 3.0 Service Pack 2, 3.0 Service Pack 3, 4.0, and 4.0 Service
	Pack 1.
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ300SP2
	Version           : WINDOWS:3.0,3.0SP1,3.0SP2,3.0SP3,4.0,4.0SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
