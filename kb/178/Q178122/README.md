---
layout: page
title: "Q178122: XFOR: Lsccmmex.exe Causes AV Processing Inbound cc:Mail"
permalink: /kb/178/Q178122/
---

## Q178122: XFOR: Lsccmmex.exe Causes AV Processing Inbound cc:Mail

	Article: Q178122
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:3.2; winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5
	Last Modified: 18-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 4.0, 5.0 
	- LinkAge Message Exchange, version 3.2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Lsccmmex.exe process causes an access violation when inbound mail from Lotus
	cc:Mail to Exchange Server is being processed. This can occur when the Lsccmmex
	process is processing a zero-length text item in the body of the message.
	
	CAUSE
	=====
	
	The connector misuses a LinkAge codepage translation API in cases where the
	transform works on a zero-length text item. The API assumes a null- terminated
	input string if a zero length is passed, resulting in a buffer overrun and an
	access violation.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Linkage Message Exchange version
	3.2.
	
	
	A supported fix is now available, but has not been fully regression-tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	
	MORE INFORMATION
	================
	
	If symbols are loaded correctly on this computer, the following information will
	be recorded in the Drwtsn32.log file:
	
	  State Dump for Thread Id 0x26a
	
	  eax=0062e260 ebx=00620000 ecx=00000062 edx=00000000 esi=0062e262
	  edi=0062afbb
	  eip=00281be0 esp=0012f7dc ebp=0062e262 iopl=0         nv up ei pl zr na
	  po nc
	  cs=001b  ss=0023  ds=0023  es=0023  fs=003b  gs=0000
	  efl=00000246
	
	  function: CSTranslate
	       00281bc4 83780400         cmp    dword ptr [eax+0x4],0x0
	  ds:01e2cc66=????????
	       00281bc8 884c2412         mov     [esp+0x12],cl
	  ss:0192e1e3=??
	       00281bcc 741b             jz      CSTranslate+0x99 (00281be9)
	       00281bce 83780800         cmp    dword ptr [eax+0x8],0x0
	  ds:01e2cc66=????????
	       00281bd2 7415             jz      CSTranslate+0x99 (00281be9)
	       00281bd4 8b38             mov     edi,[eax]
	  ds:0062e260=0062afbb
	       00281bd6 85ff             test    edi,edi
	       00281bd8 740f             jz      CSTranslate+0x99 (00281be9)
	       00281bda 33c9             xor     ecx,ecx
	       00281bdc 8a4c2412         mov     cl,[esp+0x12]
	  ss:0192e1e3=??
	  FAULT ->00281be0 8a0c39           mov     cl,[ecx+edi]
	       ds:0062afbb=00
	       00281be3 884c2413         mov     [esp+0x13],cl
	  ss:0192e1e3=??
	       00281be7 eb04             jmp     CSTranslate+0x9d (00281bed)
	       00281be9 66bb0a04         mov     bx,0x40a
	       00281bed 6685db           test    bx,bx
	       00281bf0 7510             jnz     CSTranslate+0xb2 (00281c02)
	       00281bf2 8a4c2413         mov     cl,[esp+0x13]
	  ss:0192e1e3=??
	       00281bf6 45               inc     ebp
	       00281bf7 46               inc     esi
	       00281bf8 884dff           mov     [ebp-0x1],cl
	  ss:01e2cc68=??
	       00281bfb 8bca             mov     ecx,edx
	       00281bfd 4a               dec     edx
	
	  *----> Stack Back Trace <----*
	
	  FramePtr ReturnAd Param#1  Param#2  Param#3  Param#4  Function Name
	  0012f7ec 00281b14 0062e260 0062e250 0062e250 00000000 LSCMS!CSTranslate
	  [omap]  (FPO: [EBP 0x0062e250] [4,1,4])
	  0012f80c 004026e8 0062e250 0040a470 0062e250 0040a468 LSCMS!CSTranslate
	  [omap]  (FPO: [5,1,2])
	  0012fbf4 004020e0 0061fc18 00629ba0 00000010 006265b0
	  LSCCMMEX!APPProcess  (FPO: [EBP 0x00000050] [2,240,4])
	  0012fee0 00401c85 00629e57 00000010 006294f0 2d454d4c
	  LSCCMMEX!APPProcess  (FPO: [1,181,3])
	  0012ff20 10006d12 006294f0 0012ffc0 006265b0 00b90000
	  LSCCMMEX!APPProcess  (FPO: [1,12,2])
	  0012ff44 00407c68 006294f0 77f860d9 00b90002 7ffdf000
	  LSCPS!EventManager::process  (FPO: [EBP 0x0012ffc0] [1,3,4])
	  0012ff60 0040713c 004085ac 00000005 00620d30 006201a0 LSCCMMEX!main
	  (FPO: [0,2,3])
	  0012ff64 004085ac 00000005 00620d30 006201a0 77f860d9 LSCCMMEX!main
	  (FPO: [2,0,0])
	  0012ffc0 77f1b304 77f860d9 00b90002 7ffdf000 c0000005
	  LSCCMMEX!mainCRTStartup
	  0012fff0 00000000 004084b0 00000000 00000000 77fa5aa0
	  kernel32!GetProcessPriorityBoost
	  00000000 00000000 00000000 00000000 00000000 00000000
	  LSCCMMEX!<nosymbols>
	
	
	Notes is manufactured by Lotus, a vendor independent of Microsoft; we make no
	warranty, implied or otherwise, regarding this product's performance or
	reliability.
	
	Additional query words: ccmail lsccmail cstranslate
	
	======================================================================
	Keywords          : exc4 exc5 
	Technology        : kbZNotKeyword6 kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2 kbLinkAgeSearch kbLinkAge320
	Version           : WINDOWS:3.2; winnt:4.0,5.0,5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
