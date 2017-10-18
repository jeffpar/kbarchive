---
layout: page
title: "Q198581: XADM: Information Store Fails in EcCodePageConvertXRaw"
permalink: kb/198/Q198581/
---

## Q198581: XADM: Information Store Fails in EcCodePageConvertXRaw

	Article: Q198581
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0,5.5
	Operating System(s): 
	Keyword(s): exc5 exc55 EXC55SP3Fix kbExchange500preSP3fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The information store fails (crashes) during a non-delivery report (NDR) to an
	address that has invalid attributes.
	
	CAUSE
	=====
	
	This crash is caused by an NDR that is normally not seen. The reason for the NDR
	is that invalid attributes of the Address are passed into the information store
	for conversion to Unicode, Multibyte, or ASCII. The actual return address was
	NULL.
	
	Below is the stack trace of the crash.
	
	  FramePtr  RetAddr   Param1   Param2   Param3   Function Name
	  03ecf7b0  00414111  00000001 6fff1921 0040feb2
	   STORE!EcCodePageConvertXRaw+0x104
	  03ecf7dc  004e9286  03ecf830 000004e4 00000000
	   STORE!EcCodePageConvert+0x37
	  03ecf850  005ec646  000004e4 00000000 000004e4
	   STORE!EcORNameFromAddr+0x4c4
	  03ecf8c4  005f1c8d  000004b0 0146f6f0 000004b0 STORE!FEqAddr+0x277
	  03ecfb14  005f0e30  00000000 0146ba60 01469e28 STORE!EcDeliverNDR+0x984
	  03ecfc7c  00499aa2  01461298 010bcadc 03ecfdfc
	   STORE!EcDeliverReport+0x138c
	  03ecfdbc  004f1fba  10567b50 01461298 010bcadc
	   STORE!EcDeliverMessage+0x598
	  03ecffa0  004fb173  0134f598 77e1f632 03ecffec
	   STORE!FStartReceive+0x82a
	  03ecffb8  77f04f2c  00000000 0134f598 77e1f632
	   STORE!EcProcessTask+0x11d
	  0134f5a8  74ff516f  0fa70000 00000000 0000007c
	   KERNEL32!BaseThreadStart+0x51
	
	
	RESOLUTION
	==========
	
	Exchange Server Version 5.0
	---------------------------
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next Exchange Server version 5.0 service pack that contains this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information about support costs, please go to the following
	address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	Component: Information Store
	
	+-------------------------+
	| File name  | Version    | 
	+-------------------------+
	| Store.exe  | 5.0.1462.3 | 
	+-------------------------+
	| Mdbmsg.dll | 5.0.1462.3 | 
	+-------------------------+
	
	
	
	Exchange Server Version 5.5
	---------------------------
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	The English version of this fix should have the following file attributes or
	later:
	
	Component: Information Store
	
	+-------------------------+
	| File name  | Version    | 
	+-------------------------+
	| Gapi32.dll | 5.5.2527.0 | 
	+-------------------------+
	| Mdbmsg.dll | 5.5.2527.0 | 
	+-------------------------+
	| Store.exe  | 5.5.2527.0 | 
	+-------------------------+
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	versions 5.0 and 5.5. This problem was first corrected in Exchange Server 5.5
	Service Pack 3.
	
	MORE INFORMATION
	================
	
	The Drwtsn32.log may look like this:
	
	State Dump for Thread Id 0x14a
	
	eax=00000000 ebx=000004b0 ecx=ffffffff edx=015df808 esi=00000000 edi=00000000
	eip=004046a8 esp=015df6c8 ebp=ffffffff iopl=0         nv up ei pl zr na po nc
	cs=001b  ss=0023  ds=0023  es=0023  fs=0038  gs=0000             efl=00000246
	
	function: <nosymbols>
	       0040467a 1400             adc     al,0x0
	       0040467c 81bc2400010000b0040000                          ss:015df7c8=000004e4
	                                 cmp     dword ptr [esp+0x100],0x4b0
	       00404687 7513             jnz     0040469c
	       00404689 8b8c2404010000   mov     ecx,[esp+0x104]        ss:015df7cc=00000000
	       00404690 e817f7ffff       call    00403dac
	       00404695 8be8             mov     ebp,eax
	       00404697 e9cefeffff       jmp     0040456a
	       0040469c 8bbc2404010000   mov     edi,[esp+0x104]        ss:015df7cc=00000000
	       004046a3 83c9ff           or      ecx,0xff
	       004046a6 33c0             xor     eax,eax
	FAULT ->004046a8 f2ae             repne   scasb                        es:00000000=??
	       004046aa 8b7c2424         mov     edi,[esp+0x24]         ss:0274e0cf=????????
	       004046ae f7d1             not     ecx
	       004046b0 49               dec     ecx
	       004046b1 8be9             mov     ebp,ecx
	       004046b3 45               inc     ebp
	       004046b4 e9b1feffff       jmp     0040456a
	       004046b9 8b8c2404010000   mov     ecx,[esp+0x104]        ss:015df7cc=00000000
	       004046c0 8d44241c         lea     eax,[esp+0x1c]         ss:0274e0cf=????????
	       004046c4 50               push    eax
	       004046c5 55               push    ebp
	       004046c6 8d54241c         lea     edx,[esp+0x1c]         ss:0274e0cf=????????
	
	*----> Stack Back Trace <----*
	
	FramePtr ReturnAd Param#1  Param#2  Param#3  Param#4  Function Name
	ffffffff 00000000 00000000 00000000 00000000 00000000 store!<nosymbols> 
	
	*----> Raw Stack Dump <----*
	015df6c8  b0 04 00 00 08 f8 5d 01 - 00 00 00 00 e4 04 00 00  ......].........
	015df6d8  00 00 00 00 00 00 00 00 - 00 00 00 00 03 00 00 00  ................
	015df6e8  00 00 00 00 08 f8 5d 01 - 07 00 00 00 2d 37 80 11  ......].....-7..
	015df6f8  01 00 00 00 21 19 ff 6f - 78 39 14 00 60 28 07 01  ....!..ox9..`(..
	015df708  60 28 07 01 01 00 00 00 - 40 f7 5d 01 cb 51 f3 77  `(......@.]..Q.w
	015df718  78 39 14 00 60 28 07 01 - 40 7d 07 01 1c f8 5d 01  x9..`(..@}....].
	015df728  00 00 00 00 00 00 00 00 - 20 f7 5d 01 60 28 07 01  ........ .].`(..
	015df738  01 00 00 00 74 b8 f3 77 - 78 cd f3 77 ff ff ff ff  ....t..wx..w....
	015df748  07 00 00 00 5e d9 40 00 - e4 04 00 00 08 f8 5d 01  ....^.@.......].
	015df758  07 00 00 00 01 00 00 00 - 21 19 ff 6f 65 19 7e 7e  ........!..oe.~~
	015df768  07 01 00 00 1c 00 fb 7f - e4 04 00 00 07 00 00 00  ................
	015df778  8f 28 07 01 00 00 00 00 - 3b ff 40 00 e4 04 00 00  .(......;.@.....
	015df788  00 00 00 00 88 28 07 01 - 07 00 00 00 01 00 00 00  .....(..........
	015df798  07 00 00 00 b0 04 00 00 - 08 f8 5d 01 07 00 00 00  ..........].....
	015df7a8  e4 04 00 00 20 00 00 00 - 04 00 00 00 34 00 41 00  .... .......4.A.
	015df7b8  01 00 00 00 21 19 ff 6f - 23 45 40 00 30 f8 5d 01  ....!..o#E@.0.].
	015df7c8  e4 04 00 00 00 00 00 00 - ff ff ff ff 00 00 00 00  ................
	015df7d8  e0 7e 07 01 c0 77 07 01 - 2b b8 52 00 30 f8 5d 01  .~...w..+.R.0.].
	015df7e8  e4 04 00 00 00 00 00 00 - ff ff ff ff 00 00 00 00  ................
	015df7f8  48 00 7f 11 00 00 00 00 - 00 00 00 00 7f 00 00 00  H...............
	
	Additional query words: IS AV Drwatson
	
	======================================================================
	Keywords          : exc5 exc55 EXC55SP3Fix kbExchange500preSP3fix 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : winnt:5.0,5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
