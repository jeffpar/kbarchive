---
layout: page
title: "Q190016: Store.exe Causes Stack Fault When Starting IMC"
permalink: /kb/190/Q190016/
---

## Q190016: Store.exe Causes Stack Fault When Starting IMC

	Article: Q190016
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you start the Internet Mail Connector (IMC), the Store.exe may cause a
	stack fault and halt the store-related activities.
	
	The DrWtsn32.log may look similar to the following:
	
	  Microsoft (R) Windows NT (TM) Version 3.51 DrWtsn32
	  Copyright (C) 1985-1995 Microsoft Corp. All rights reserved.
	
	  Application exception occurred:
	
	       App: Store.DBG (pid=159)
	       When: 1/2/1997 @ 7:30:30.452
	       Exception number: c00000fd (stack overflow)
	
	The thread where the stack overflow occurred may look similar to The following:
	
	  State Dump for Thread Id 0xd0
	
	  eax=0000000c ebx=00dab1cc ecx=00da2f04 edx=000004b0 esi=0052d58c
	  edi=0213b061 eip=02061abc esp=00daaefc ebp=00daaf04 iopl=0  nv up
	  ei pl nz na po nc cs=001b  ss=0023  ds=0023  es=0023  fs=0038
	  gs=0000 efl=00000206
	
	  function: _alloca_probe
	       02061aa5 51               push    ecx
	       02061aa6 3d00100000       cmp     eax,0x1000
	       02061aab 8d4c2408         lea     ecx,[esp+0x8]
	  ss:012c981f=????????
	       02061aaf 7214             jb      _alloca_probe+0x20
	  (02061ac5)
	       02061ab1 81e900100000     sub     ecx,0x1000
	       02061ab7 2d00100000       sub     eax,0x1000
	  FAULT ->02061abc 8501             test    [ecx],eax
	  ds:00da2f04=00000000
	       02061abe 3d00100000       cmp     eax,0x1000
	       02061ac3 73ec             jnb     _alloca_probe+0xc
	  (02061ab1)
	       02061ac5 2bc8             sub     ecx,eax
	       02061ac7 8bc4             mov     eax,esp
	       02061ac9 8501             test    [ecx],eax
	  ds:00da2f04=00000000
	       02061acb 8be1             mov     esp,ecx
	       02061acd 8b08             mov     ecx,[eax]
	  ds:0000000c=????????
	       02061acf 8b4004           mov     eax,[eax+0x4]
	  ds:0051e92e=????????
	       02061ad2 50               push    eax
	       02061ad3 c3               ret
	
	  *----> Stack Back Trace <----*
	
	  FramePtr ReturnAd Param#1  Param#2  Param#3  Param#4  Function
	  Name
	  00daaf04 02004c8b 00dab178 000004b0 000004b0 00000000
	  store!_alloca_probe
	  [omap]
	  00daaf60 6cdc268b 6cde2da3 00daaf80 00dab08c 0000001c
	  store!JTAB_BASE::EcGetPropByPtagid [omap]  (FPO: [0,0,3])
	  00dab4b8 77f9a719 088b5f8c 088b4e94 30070040 00520028
	  edb!ErrUTILCheckName
	  [omap]  (FPO: [EBP 0x00520000] [4,328,4])
	  00520000 00000100 eeffeeff 00001002 00000000 0000fe00
	  ntdll!RtlReAllocateHeap
	
	  *----> Raw Stack Dump <----*
	  00daaefc  8c d5 52 00 45 5b 00 02 - 58 b1 da 00 8b 4c 00 02
	  ..R.E[..X....L..
	  00daaf0c  78 b1 da 00 b0 04 00 00 - b0 04 00 00 00 00 00 00
	  x...............
	  00daaf1c  00 00 00 00 cc b1 da 00 - 00 00 00 00 01 00 00 00
	  ................
	  00daaf2c  61 b0 13 02 e9 6f 8b 08 - b4 6f 8b 08 b4 00 00 00
	  a....o...o......
	  00daaf3c  80 df 9b 03 60 9e 79 03 - 80 d5 9b 03 a4 9e 79 03
	  ....`.y.......y.
	  00daaf4c  8c b0 da 00 20 3e 79 03 - 80 af da 00 38 3d e3 6c  ....
	  >y.....8=.l
	  00daaf5c  00 00 00 00 80 af da 00 - 8b 26 dc 6c a3 2d de 6c
	  .........&.l.-
	  .l
	  00daaf6c  80 af da 00 8c b0 da 00 - 1c 00 00 00 00 07 8f 03
	  ................
	  00daaf7c  20 5d f8 77 48 05 52 00 - 21 5d f8 77 00 04 00 00
	  ].wH.R.!].w....
	  00daaf8c  00 00 52 00 00 04 00 00 - 00 02 00 00 fd c0 78 04
	  ..R...........x.
	  00daaf9c  00 00 50 00 1c 61 df 6c - 80 70 f2 77 01 00 00 00
	  ..P..a.l.p.w....
	  00daafac  20 3e 79 03 00 00 00 00 - 26 b0 da 00 20 3e 79 03
	  >y.....&...
	  >y.
	  00daafbc  20 5d f8 77 48 05 52 00 - 21 5d f8 77 94 72 8b 08
	  ].wH.R.!].w.r..
	  00daafcc  00 00 52 00 00 00 00 00 - 00 00 00 00 20 5d f8 77
	  ..R.........
	  ].w
	  00daafdc  48 05 52 00 21 5d f8 77 - 24 72 8b 08 00 00 52 00
	  H.R.!].w$r....R.
	  00daafec  b4 6f 8b 08 8c b0 da 00 - e1 13 dc 6c a8 b9 15 00
	  .o.........l....
	  00daaffc  8c d5 52 00 8c d5 52 00 - d1 6a 00 02 00 07 8f 03
	  ..R...R..j......
	  00dab00c  86 1f 00 00 28 b0 da 00 - 8c b0 da 00 1c 00 00 00
	  ....(...........
	  00dab01c  00 00 00 00 f8 b0 da 00 - 02 00 a9 67 49 36 37 61
	  ...........gI67a
	  00dab02c  39 00 00 00 00 00 00 00 - 01 00 00 00 20 3e 79 03
	  9...........
	  >y.
	
	
	CAUSE
	=====
	
	The stack overflow is caused by multiple cascading embedded messages processed
	through a recursion routine that was not limiting the number of recursions.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0.
	
	
	Additional query words: Stack Fault Overflow
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : WINDOWS:4.0
	
	=============================================================================
	
