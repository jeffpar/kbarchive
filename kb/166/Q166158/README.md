---
layout: page
title: "Q166158: Access Violation Occurs in SPOOLSS.EXE"
permalink: /kb/166/Q166158/
---

## Q166158: Access Violation Occurs in SPOOLSS.EXE

{% raw %}

	Article: Q166158
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbprintkbbuglist kbfixlist
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If Spoolss.exe is under stress, you may receive an Access Violation in the
	function RemoveIniPortFromIniJob. The following information may be found in the
	Drwtsn32.log file:
	
	State Dump for Thread Id 0xdd
	
	eax=00000001 ebx=00000000 ecx=01db57b0 edx=00b90548 esi=01de8ce0
	edi=01deb180
	eip=5009256e esp=06dbfd60 ebp=06dbfd70 iopl=0      nv up ei ng nz ac po nc
	cs=001b  ss=0023  ds=0023  es=0023  fs=003b  gs=0000          efl=00000296
	
	function: RemoveIniPortFromIniJob
	5009254f 56               push    esi
	50092550 ff7630           push    dword ptr [esi+0x30]ds:02cf76e6=????????
	50092553 e886460000       call    SetPrinterChange (50096bde)
	50092558 8b4610           mov     eax,[esi+0x10]      ds:02cf76e6=????????
	5009255b f6c408           test    ah,0x8
	5009255e 7408             jz      RemoveIniPortFromIniJob+0x5e (50092568)
	50092560 25fffbefff       and     eax,0xffeffbff
	50092565 894610           mov     [esi+0x10],eax      ds:02cf76e6=????????
	50092568 56               push    esi
	50092569 e8f58cffff       call    DeleteJobCheck (5008b263)
	5009256e 83bf8000000000   cmp   dword ptr [edi+0x80],0x0
	ds:01deb200=????????    Fault occurs here ^
	50092575 7511             jnz     RemoveIniPortFromIniJob+0x7e (50092588)
	50092577 8bbf84000000     mov     edi,[edi+0x84]      ds:01deb204=????????
	5009257d 85ff             test    edi,edi
	5009257f 7407             jz      RemoveIniPortFromIniJob+0x7e (50092588)
	50092581 57               push    edi
	50092582 ff1510120850                              ds:50081210=77f02f0f
	                         call    dword ptr [_imp__SetEvent (50081210)]
	50092588 5f               pop     edi
	50092589 5e               pop     esi
	5009258a c9               leave
	5009258b c20800           ret     0x8
	
	*----> Stack Back Trace <----*
	
	FramePtr ReturnAd Param#1  Param#2  Param#3  Param#4
	Function Name
	06dbfd70 500928a9 01de8ce0 00b942b8 00000000 00000000
	localspl!RemoveIniPortFromIniJob (FPO: Non-FPO [2,3,2])
	06dbffb8 77f04f3f 00000001 00000000 00000000 00b942b8 l
	ocalspl!PortThread (FPO: Non-FPO [1,140,3])
	06dbffec 00000000 00000000 00000000 00000000 00000000
	kernel32!BaseThreadStart (FPO: Non-FPO [2,8,3])
	00000000 00000000 00000000 00000000 00000000 00000000
	spoolss!<nosymbols>
	
	CAUSE
	=====
	
	This problem occurs because the reference count for the number of jobs in the
	spool is incorrect.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem was corrected in the latest Microsoft Windows NT 4.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt drwatson
	
	======================================================================
	Keywords          : kbprint kbbuglist kbfixlist
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Hardware          : x86
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
