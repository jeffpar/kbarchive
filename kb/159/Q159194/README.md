---
layout: page
title: "Q159194: XCON: MTA Terminates Unexpectedly with Event ID 9405"
permalink: /kb/159/Q159194/
---

## Q159194: XCON: MTA Terminates Unexpectedly with Event ID 9405

{% raw %}

	Article: Q159194
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Microsoft Exchange message transfer agent (MTA) terminates unexpectedly with
	an event similar to the following (as viewed in the Application Event Log):
	
	  Event Id: 9405
	  Source: MSExchangeMTA
	  Type:Error
	  Category: Field Engineering
	  Description:
	  An unexpected error has occurred which may cause the MTA to terminate. Error:
	  Exception c0000005 occurred at Address 0x02066c32. (16)
	
	
	CAUSE
	=====
	
	An attempt was made to delete an object within the MTA that still had an
	association. The attemped delete fails and occurs again causing the association
	to be closed. This can lead to the MTA failure observed.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem was corrected in the latest Microsoft Exchange 4.0
	U.S. Service Pack. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	The Drwtsn32.log file may show a failure such as this (pay particular attention
	to the function names listed on the stack back trace).
	
	Application exception occurred:
	App: emsmta.DBG (pid=146)
	Exception number: c0000005 (access violation)
	
	State Dump for Thread Id 0xb4
	
	eax=00000000 ebx=024b947c ecx=00000000 edx=0060e5fc esi=025189fc
	edi=022f5ef2
	eip=02066c32 esp=0542fc1c ebp=0542fda0 iopl=0         nv up ei pl nz ac pe
	cy
	cs=001b  ss=0023  ds=0023  es=0023  fs=003b  gs=0000
	efl=00000213
	
	function: otpuprse
	       02066c2d 55               push    ebp
	       02066c2e 8b4c2408         mov     ecx,[esp+0x8]
	ss:0594e53f=????????
	FAULT ->02066c32 660fb601         movzx   ax,byte ptr [ecx]
	ds:00000000=??
	       02066c36 8bec             mov     ebp,esp
	       02066c38 83ec10           sub     esp,0x10
	       02066c3b 660fb65111       movzx   dx,byte ptr [ecx+0x11]
	ds:0051e924=??
	
	*----> Stack Back Trace <----*
	
	FramePtr ReturnAd Param#1  Param#2  Param#3  Param#4  Function Name
	0542fda0 020748fa 005d0017 02280122 005d85f4 005d0000 EMSMTA!otpuprse
	[omap]
	0542fdc0 02070862 02286624 00000017 000b0122 005d85f4 EMSMTA!osppput [omap]
	0542fe10 0207127c 00000017 025189fc 024ac95c 00743b2c EMSMTA!osppe4 [omap]
	0542fe2c 0203d909 00000024 00000017 00000020 03000001 EMSMTA!osppenco
	[omap]
	0542fe8c 02036699 00000017 025189fc 024ac975 00000017 EMSMTA!otpast1 [omap]
	0542fee0 0203e562 00000017 0000003f 022f5ef2 00000032 EMSMTA!otpaasb [omap]
	0542ff00 0203b87f 42ffb817 003994a0 0039948c 0251aa23 EMSMTA!otpatime
	[omap]
	0542ff3c 0205c8a2 42ffb817 024906ae 00000398 00000017 EMSMTA!otpamain
	[omap]
	0542ff8c 020163bb 024906ae 024906ae 00000017 0542ff94 EMSMTA!otpomain
	[omap]
	0542ffb8 77f26c2a 00000017 024906ae 024906ae 00000017 EMSMTA!sbpiwbep
	[omap]
	0542ffec 00000000 00000000 00000000 00000000 00000000
	KERNEL32!BaseThreadStart+0x61
	
	
	Additional query words: failure crash deletion spurious
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
