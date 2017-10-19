---
layout: page
title: "Q154776: XCON: MTA Crashes in Otpmmain Due to Null Pointer"
permalink: /kb/154/Q154776/
---

## Q154776: XCON: MTA Crashes in Otpmmain Due to Null Pointer

	Article: Q154776
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 22-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- the operating system: Microsoft Windows NT 4.0 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The message transfer agent (MTA) may have an access violation when a null
	pointer is passed to otpmmain. If the Microsoft Windows NT and Microsoft
	Exchange symbols are properly installed on the system, a stack trace similar to
	the following will be generated in the Dr. Watson log:
	
	State Dump for Thread Id 0x161
	
	eax=01000005 ebx=026911fc ecx=00000000 edx=00e9a090 esi=01000000
	edi=021ab4bc
	eip=02054b0f esp=04fbff60 ebp=04fbff8c iopl=0         nv up ei pl zr na po
	nc
	cs=001b  ss=0023  ds=0023  es=0023  fs=0038  gs=0000
	efl=00000246
	
	function: otpmmain
	       02054af3 663de803         cmp     ax,0x3e8
	       02054af7 7f0a             jg      otpmmain+0x213 (02054b03)
	       02054af9 50               push    eax
	       02054afa 8b45ff           mov     eax,[ebp-0x1]
	ss:05dce992=????????
	       02054afd 50               push    eax
	       02054afe e88b450100       call    otpueadd (0206908e)
	       02054b03 6633f6           xor     si,si
	       02054b06 8b45e4           mov     eax,[ebp-0x1c]
	ss:05dce992=????????
	       02054b09 8b4804           mov     ecx,[eax+0x4]
	ds:01e0ea0b=00000000
	       02054b0c 8d4605           lea     eax,[esi+0x5]
	ds:01e0ea06=00000000
	FAULT ->02054b0f 668b7904         mov     di,[ecx+0x4]
	ds:00e0ea07=????
	       02054b13 668b5106         mov     dx,[ecx+0x6]
	ds:00e0ea07=????
	       02054b17 662bd7           sub     dx,di
	       02054b1a 6642             inc     dx
	       02054b1c 663bd0           cmp     dx,ax
	       02054b1f 7d12             jge     otpmmain+0x243 (02054b33)
	       02054b21 50               push    eax
	       02054b22 51               push    ecx
	       02054b23 e8c59afbff       call    _snpugetc (0200e5ed)
	       02054b28 8b4df4           mov     ecx,[ebp-0xc]
	ss:05dce992=????????
	       02054b2b 0fbffe           movsx   edi,si
	       02054b2e 88040f           mov     [edi+ecx],al
	ds:00000000=??
	
	*----> Stack Back Trace <----*
	
	FramePtr ReturnAd Param#1  Param#2  Param#3  Param#4  Function Name
	04fbff8c 020163ad 00000000 00000000 00000015 04fbff94 emsmta!otpmmain
	[omap]
	04fbffb8 77f04f4a 00000015 00000000 00000000 00000015 emsmta!sbpiwbep
	[omap]
	04fbffec 00000000 00000000 00000000 00000000 00000000
	kernel32!BaseThreadStart (FPO: Non-FPO [2,8,3])
	00000000 00000000 00000000 00000000 00000000 00000000 emsmta!t_readln
	
	CAUSE
	=====
	
	This error occurs because a null pointer was passed to otpmmain.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange version 4.0.
	This problem was corrected in the latest Microsoft Exchange 4.0 U.S. Service
	Pack. For information on obtaining the service pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbOSWinSearch kbOSWinNT400 kbOSWinNTSearch
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
