---
layout: page
title: "Q268446: XADM: Random Access Violation in Store.exe (JetMove)"
permalink: /kb/268/Q268446/
---

## Q268446: XADM: Random Access Violation in Store.exe (JetMove)

	Article: Q268446
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 23-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Exchange Server may randomly stop responding (crash) in Store.exe. This crash
	generates a Drwtsn32.log file entry that is similar to the following:
	
	  Application exception occurred:
	  App: exe\store.dbg (pid=301)
	  When: 6/26/2000 @ 1:0:52.767
	  Exception number: c0000005 (access violation)
	
	WORKAROUND
	==========
	
	To work around this issue, run the eseutil /g /{db} /V /X >dbchk.txt command.
	After Eseutil with the /g switch finishes, search for orphaned long values in
	the corresponding text files. If there are only orphaned long values, run the
	eseutil /d command.
	
	NOTE: For additional information about how to verify that your Exchange Server
	databases exhibit orphaned or corrupted long values, click the article numbers
	below to view the articles in the Microsoft Knowledge Base:
	
	  Q185271 XADM: Orphaned LV Errors Running ESEUTIL Consistency Checker
	
	  Q181824 XADM: Exchange Database Engine Doesn't Detect Removed Page in B-tree
	  Split Operation
	
	  Q195856 XADM: How to Detect and Remove Long Values in Exchange Server
	  Database
	
	
	MORE INFORMATION
	================
	
	The following is a stack dump from the Dr. Watson log:
	
	  
	
	  State Dump for Thread Id 0x150
	
	  eax=00000000 ebx=02b2fb7c ecx=ffff8003 edx=02b2fc38 esi=15d5c6d7 
	  edi=00000000
	  eip=6fe95506 esp=02b2fb3c ebp=00000000 iopl=0         nv up ei pl zr na po nc
	
	  cs=001b  ss=0023  ds=0023  es=0023  fs=0038  gs=0000 
	  efl=00000246
	
	  function: JetMove
	       6fe954eb 8bda             mov     ebx,edx
	       6fe954ed c744241401000000 mov   dword ptr [esp+0x14],0x1
	  ss:03b4e543=????????
	       6fe954f5 8bd1             mov     edx,ecx
	       6fe954f7 8b33             mov     esi,[ebx] 
	      ds:02b2fb7c=15d5c6d7
	       6fe954f9 8b02             mov     eax,[edx] 
	       ds:02b2fc38=00000000
	       6fe954fb 8b4b04           mov     ecx,[ebx+0x4]
	       ds:03b4e582=????????
	       6fe954fe 3bf0             cmp     esi,eax
	       6fe95500 7412             jz      JetMove+0x16fc (6fe95514)
	       6fe95502 8bf8             mov     edi,eax
	       6fe95504 33ed             xor     ebp,ebp
	
	  FAULT ->6fe95506 f3a6             rep     cmpsb         ds:15d5c6d7=7f
	  es:00000000=??
	
	       6fe95508 0f8578190400     jne     JetTerm+0x2a71 (6fed6e86)
	       6fe9550e 8bcd             mov     ecx,ebp
	       6fe95510 85c9             test    ecx,ecx
	       6fe95512 7553             jnz     JetMove+0x174f (6fe95567)
	       6fe95514 8b4b08           mov     ecx,[ebx+0x8]  
	       ds:03b4e582=????????
	       6fe95517 8b7304           mov     esi,[ebx+0x4] 
	       ds:03b4e582=????????
	       6fe9551a 8b6b0c           mov     ebp,[ebx+0xc]
	       ds:03b4e582=????????
	       6fe9551d 894c2410         mov     [esp+0x10],ecx 
	       ss:03b4e543=????????
	       6fe95521 8b4a04           mov     ecx,[edx+0x4]
	       ds:03b4e63e=????????
	       6fe95524 03c6             add     eax,esi
	       6fe95526 2bce             sub     ecx,esi
	
	
	  --------Stack Back Trace ---------
	
	  FramePtr ReturnAd Param#1  Param#2  Param#3  Param#4  Function Name
	  00000000 00000000 00000000 00000000 00000000 00000000 ESE!JetMove
	
	Additional query words: LV LVs
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbprb
	
	=============================================================================
	
