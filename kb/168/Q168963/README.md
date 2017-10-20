---
layout: page
title: "Q168963: Snaservr.exe Access Violation in Function s1plgrsp"
permalink: /kb/168/Q168963/
---

## Q168963: Snaservr.exe Access Violation in Function s1plgrsp

{% raw %}

	Article: Q168963
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11,3.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.11, 3.0, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The SNA Server service (Snaservr.exe) may fail unexpectedly with an access
	violation, causing the following entry to be logged in the
	<Ntroot>\Drwtsn32.log file, indicating an access violation in function
	"s1plgrsp":
	
	  Application exception occurred:
	     App: snaservr.DBG (<process ID> )
	     When: <date> @ <time>
	     Exception number: c0000005 (access violation)
	
	  [ data omitted ]
	
	  State Dump for Thread Id 0xa8
	
	  eax=00cc806c ebx=00ce3b3c ecx=00040004 edx=012623e8 esi=00000000
	  edi=002bff40
	  eip=003c93d5 esp=002bff0c ebp=00106be8 iopl=0         nv up ei pl nz na
	  po nc
	  cs=001b  ss=0023  ds=0023  es=0023  fs=0038  gs=0000
	  efl=00000206
	
	  function: s1plgrsp
	  [ data omitted ]
	     003c93cb c6401600         mov     byte ptr [eax+0x16],0x0
	     003c93cf 8b07             mov     eax,[edi]
	     003c93d1 c6401701         mov     byte ptr [eax+0x17],0x1
	  FAULT ->003c93d5 0fbf4604         movsx   eax,word ptr [esi+0x4]
	     003c93d9 03c6             add     eax,esi
	
	  *----> Stack Back Trace <----*
	
	  FramePtr ReturnAd Param#1  Param#2  Param#3  Param#4  Function Name
	  00106be8 03830000 01030aea 00000000 01d70000 00050012 snaservr!s1plgrsp
	
	CAUSE
	=====
	
	A 3270 emulator was sending an invalid STATUS ACKNOWLEDGE (STATUS ACK) message
	to the SNA Server computer; the message contained no element data. A memory
	access violation occurred when SNA Server computer attempted to access this
	non-existent element data.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server 2.11 and 3.0
	
	A supported fix for SNA Server version 2.11 is now available, but has not been
	fully regression-testedand should be applied only to systems experiencing this
	specific problem.Unless you are severely impacted by this specific problem,
	Microsoftrecommends that you wait for the next Service Pack that contains
	thisfix. Contact Microsoft Product Support Services for more information.
	
	This problem was corrected in the latest SNA Server version 3.0 U.S. Service
	Pack. For information on obtaining this Service Pack, query on the following
	word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	An update to SNA Server 2.11 (post Service Pack 2) and SNA Server 3.0 (post
	Service Pack 1) is available to correct this problem. The updated modules are:
	
	  <snaroot>\system\SNASERVR.EXE
	  <snaroot>\system\SNAEVENT.DLL
	  <snaroot>\system\TRCSERVR.EXE
	
	When receiving an invalid "STATUS ACK" message from a 3270 emulator, SNA Server
	now checks for the presence of element data, and if not it is present, SNA
	Server drops the client session and logs the following new event:
	
	  Event ID: 62
	  Source: SNA Server
	  Description: Illegal STATUS ACKNOWLEDGE message received from a client.
	  Client Domain = <client domain>
	  Client User Name = <user name>
	  LU Name = <LU name.
	
	  EXPLANATION
	  An emulator has sent an invalidly formated STATUS ACKNOWLEDGE message.
	  The message has no element.
	
	  ACTION
	  Contact Microsoft Technical Support.
	
	If this event is logged, determine the emulator software and version running on
	the client computer and reported it to Microsoft Technical Support. This event
	indicates a software defect in the emulator software being used.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.11,3.0
	
	=============================================================================
	

{% endraw %}
