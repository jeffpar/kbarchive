---
layout: page
title: "Q161039: Snaservr.exe Application Exception in SAPUGETI Function"
permalink: /kb/161/Q161039/
---

## Q161039: Snaservr.exe Application Exception in SAPUGETI Function

{% raw %}

	Article: Q161039
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11,2.11 SP1
	Operating System(s): 
	Keyword(s): kbbuglist
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, 2.11 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	You may see an application exception with SNA Server after an update to 3270 (or
	LUA) LUs on an active server. This application exception occurs when one or more
	of the updates cannot be immediately enacted (the SNA Server will appear
	"out-of-date" in the SNA Server Administrator program) and you then attempt to
	activate/deactivate a connection on the computer running SNA Server.
	
	When this problem occurs, SNA Server generates a Dr. Watson error. The
	Drwtsn32.log file indicates that an application exception has occurred in
	Snaservr.exe, in the sapugeti function. In addition, SNA Server may log an Event
	624 in the Windows NT Application Event log when the Snaservr.exe application
	exception occurs.
	
	RESOLUTION
	==========
	
	A fix is available to correct this problem.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 2.0, 2.1,
	2.11, and 2.11 SP1.
	This problem was corrected in the latest Microsoft SNA Server 2.11 U.S. Service
	Pack. For information on obtaining the service pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	Event 624 in the Windows NT Application Event log has a description similar to
	the following:
	
	  Creating dump file C:\SNA\traces\snadump.log for SNASERVR.EXE
	
	  EXPLANATION
	  A process (SNASERVR.EXE) ended abnormally due to a protection violation or
	  similar condition and a dump file SNADUMP.LOG has been created that contains
	  information about the state of the process at the time of the exception.
	  Register information is contained in your Windows NT root directory in the
	  file DRWTSN32.LOG.
	
	The Drwtsn32.log will contain information similar to the following excerpt:
	
	  Application exception occurred:
	       App: snaservr.exe (pid=221)
	       When: 12/12/1996 @ 14:23:51.8
	       Exception number: c0000005 (access violation)
	
	  function: sapugeti
	    003ff6f5 99               cdq
	    003ff6f6 f7fe             idiv    esi
	    003ff6f8 0fbfc1           movsx   eax,cx
	    003ff6fb 6642             inc     dx
	    003ff6fd 8d1c40           lea     ebx,[eax+eax*2]
	ds:00748e6b=????????
	    003ff700 0fbfc2           movsx   eax,dx
	    003ff703 8d0cdd00000000   lea     ecx,[00000000+ebx*8]
	ds:ffffd1cb=????????
	    003ff70a 0305f8634300     add     eax,[sct (004363f8)]
	ds:004363f8=00760000
	    003ff710 03c1             add     eax,ecx
	    003ff712 663bd6           cmp     dx,si
	FAULT ->003ff715 8a58eb       mov     bl,[eax-0x15]        ds:0135778d=??
	    003ff718 885c240f         mov     [esp+0xf],bl         ss:00ede79f=??
	    003ff71c 750b             jnz     sapugeti+0x59 (003ff729)
	    003ff71e a1f8634300       mov     eax,[sct (004363f8)]
	ds:004363f8=00760000
	    003ff723 8a440804         mov     al,[eax+ecx+0x4]     ds:00bf777b=??
	    003ff727 eb03             jmp     sapugeti+0x5c (003ff72c)
	    003ff729 8a40ec           mov     al,[eax-0x14]        ds:0135778d=??
	    003ff72c 8844240e         mov     [esp+0xe],al         ss:00ede79f=??
	    003ff730 668b44240e       mov     ax,[esp+0xe]
	ss:00ede7a0=????
	    003ff735 5f               pop     edi
	    003ff736 5e               pop     esi
	    003ff737 5b               pop     ebx
	
	 *----> Stack Back Trace <----*
	
	 FramePtr ReturnAd Param#1  Param#2  Param#3  Param#4  Function Name
	 002cfe88 003eab9a 0006f098 00000027 00000001 00000001 snaservr!sapugeti
	 002cfee0 003eed63 011bcb60 00000000 00000000 00069ff0 snaservr!s1pnsfol
	
	
	
	Additional query words: trap 2.00 2.10 2.11 prodsna kbbug2.00
	
	======================================================================
	Keywords          :  kbbuglist
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ200 kbSNAServ211 kbSNAServ210 kbSNAServ211SP1
	Version           : WINDOWS:2.0,2.1,2.11,2.11 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
