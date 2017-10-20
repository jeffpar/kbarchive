---
layout: page
title: "Q245453: TN3270 Server Access Violation in Mngext!MngDeleteObject()"
permalink: /kb/245/Q245453/
---

## Q245453: TN3270 Server Access Violation in Mngext!MngDeleteObject()

{% raw %}

	Article: Q245453
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Operating System(s): 
	Keyword(s): kbDSupport kbSNA400sp4fix kbSNA400PreSP4fix
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The SNA Server TN3270 Server process (Tn3servr.exe) may fail unexpectedly with
	an access violation in routine mngext!MngDeleteObject. If Drwtsn32.exe is
	configured as the default debugger, a Drwtsn32.log file will be created and will
	include the following failure information:
	
	Application exception occurred:
	       App: exe\tn3servr.dbg (pid=process id)
	       When: (date and time)
	       Exception number: c0000005 (access violation)
	
	[...]
	
	State Dump for Thread Id (thread)
	
	eax=00000000 ebx=00000000 ecx=00000000 edx=0ca40440 esi=0c9fff98 edi=00243160
	eip=60a01dd7 esp=0c9fff78 ebp=77f67500 iopl=0         nv up ei pl zr na po nc
	cs=001b  ss=0023  ds=0023  es=0023  fs=0038  gs=0000             efl=00000246
	
	function: MngDeleteObject
	       60a01db8 59               pop     ecx
	       60a01db9 c20800           ret     0x8
	       60a01dbc 6a00             push    0x0
	       60a01dbe 8d44240c         lea     eax,[esp+0xc]
	       60a01dc2 6a00             push    0x0
	       60a01dc4 50               push    eax
	       60a01dc5 8bcf             mov     ecx,edi
	       60a01dc7 c70600000000     mov     dword ptr [esi],0x0
	       60a01dcd ff15d010a060 
	                  call    dword ptr [_imp_?GetNotify (60a010d0)]
	       60a01dd3 8b4c2408         mov     ecx,[esp+0x8]          
	FAULT ->60a01dd7 8b11             mov     edx,[ecx] 
	       60a01dd9 ff5220           call    dword ptr [edx+0x20]   
	       60a01ddc 5f               pop     edi
	       60a01ddd 5e               pop     esi
	       60a01dde 59               pop     ecx
	       60a01ddf c20800           ret     0x8
	
	*---- Stack Back Trace ----*
	
	FramePtr ReturnAd Param#1  Param#2  Param#3  Param#4  Function Name
	77f67500 8b000000 83042454 7500147a 42ff904f 8b197504 mngext!MngDeleteObject
	
	CAUSE
	=====
	
	The management status reporting interface running underneath the TN3270 server
	was attempting to delete an object after it had already been freed, causing an
	access violation.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for SNA Server 4.0. For
	additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q215838 How to Obtain the Latest SNA Server Version 4.0 Service Pack
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server 4.0 Service Pack 1,
	Service Pack 2, and Service Pack 3.
	
	This problem was first corrected in SNA Server 4.0 Service Pack 4.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDSupport kbSNA400sp4fix kbSNA400PreSP4fix 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3
	Version           : WINDOWS:4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
