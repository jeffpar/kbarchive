---
layout: page
title: "Q172802: SNA Server Access Violation in s1pcrefm()"
permalink: /kb/172/Q172802/
---

## Q172802: SNA Server Access Violation in s1pcrefm()

{% raw %}

	Article: Q172802
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11,2.11 SP1,2.11 SP2,3.0,3.0 SP1
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 02-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.11, 2.11 SP1, 2.11 SP2, 3.0, 3.0 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The SNA Server service (Snaservr.exe) fails unexpectedly with an access
	violation; the following appears in the event log:
	
	  
	
	  Event ID: 624
	  Source:   SNA Server
	  Description: Creating dump file C:\SNA\Traces\Snadump.log for
	  Snaservr.exe
	
	  <Ntroot>\Drwtsn32.log will include the following failure information:
	
	  Application exception occurred:
	     Application: exe\snaservr.DBG <process ID>
	     When: <date and time>
	     Exception number: c0000005 (access violation)
	
	  [data omitted]
	
	  State Dump for Thread Id <thread>
	
	  EAX=00000000  EBX=00000000  ECX=00cc6360  EDX=000c0001  ESI=000d0019
	  EDI=00cc6360  EIP=003a5200  ESP=002bfec8  EBP=000000ff  EFL=00000297
	  CS=001b  DS=0023  ES=0023  SS=0023  FS=0038  GS=0000
	
	  function: s1pcrefm
	
	  fault -> 0x003a5200  0fbf4806         movsx    ecx,word ptr [eax+06]
	
	  Stack back trace:
	
	  FramePtr  RetAddr   Param1   Param2   Param3   Function Name
	  002bfed4  003b1323  00cc6360 00000019 0000000d SNASERVR!s1pcrefm+0x10
	  002bff18  003b1087  00420002 00000004 0042f7d4 SNASERVR!s1puclos+0x293
	
	CAUSE
	=====
	
	A 3270 emulator is failing to send element data in an OPEN PLU response to the
	SNA Server. SNA Server is not expecting such an invalid message, which leads to
	an access violation.
	
	NOTE: This problem is a symptom of a 3270 emulator logic error. It was not
	determined which 3270 emulator causes this problem, because this was only
	observed once at one customer site.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 2.11, 2.11
	SP1, and 2.11 SP2.
	
	
	A supported fix is now available, but has not been fully regression-tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	Microsoft has confirmed this to be a problem in SNA Server versions 3.0, and 3.0
	SP1. This problem was corrected in the latest SNA Server version 3.0 U.S.
	Service Pack. For information on obtaining this Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	With the fix applied, if the SNA Server receives an invalid OPEN PLU response
	(containing no element data), the message is ignored and the following error is
	logged to the Windows NT application event log:
	
	  
	
	  Event ID: 9
	  Source:  SNA Server
	  Description: (1117) Internal Message Sequence Error
	
	  EXPLANATION:
	  Invalid or unexpected message received by the SNA Server (node) from
	  another SNA Server component (for example, the emulator or link service)
	
	  SUBCODE
	  X'1117'   Received an invalid message from a 3270 emulator
	
	NOTE: There are various causes of the Event 9 error. To determine the cause of
	the error, capture an SNA Server DLC and 3270 message trace on the server.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ211 kbSNAServ211SP1 kbSNAServ211SP2 kbSNAServ300SP1
	Version           : WINDOWS:2.11,2.11 SP1,2.11 SP2,3.0,3.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
