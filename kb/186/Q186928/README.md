---
layout: page
title: "Q186928: XWEB: Application Error When Using User-defined View with DBCS"
permalink: kb/186/Q186928/
---

## Q186928: XWEB: Application Error When Using User-defined View with DBCS

	Article: Q186928
	Product(s): Microsoft Exchange
	Version(s): 8.00, 8.01, 8.02, 8.03, 8.50
	Operating System(s): 
	Keyword(s): 
	Last Modified: 27-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook 97, versions 8.00, 8.01, 8.02, 8.03, used with:
	   - the operating system: Microsoft Windows 98 
	   - the operating system: Microsoft Windows 95 
	   - the operating system: Microsoft Windows NT 
	- Microsoft Outlook 98, version 8.5, used with:
	   - the operating system: Microsoft Windows 98 
	   - the operating system: Microsoft Windows 95 
	   - the operating system: Microsoft Windows NT 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you create a form with double-byte character set (DBCS) fields, publish it
	in a public folder, and create a user-defined view with DBCS fields on the
	public folder, an application error may occur.
	
	CAUSE
	=====
	
	---------1---------2---------3---------4---------5---------6---------7-----
	----8
	
	An invalid value is set in a field value of a form due to mishandling DBCS. This
	value points to an unallocated location in memory.
	
	
	WORKAROUND
	==========
	
	To work around this problem, remove the public folder that contains the form
	with DBCS fields, and then recreate and re-publish a form with single- byte
	character set (SBCS) fields instead of DBCS.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the products listed above.
	
	
	A supported fix is now available, but has not been fully regression-tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	
	MORE INFORMATION
	================
	
	The Drwtsn32.log file may show a failure similar to the following. (Note
	especially the function names listed on the stack back trace.)
	
	  Application exception occurred:
	  App: outlook.dbg (pid=101)
	  When: 5/22/1998 @ 19:17:39.137
	  Exception number: c0000005 (access violation)
	
	  State Dump for Thread Id 0x71
	
	eax=00000000 ebx=0012ee44 ecx=00000000 edx=0012ee44 esi=00317cb4
	edi=0012ee64
	eip=30708ec5 esp=0012eda0 ebp=0012eda0 iopl=0         nv up ei pl zr na po
	nc
	cs=001b  ss=0023  ds=0023  es=0023  fs=003b  gs=0000
	efl=00000246
	
	function: MsoCchWzLen
	       30708eb8 55               push    ebp
	       30708eb9 8bec             mov     ebp,esp
	       30708ebb 8b4508           mov     eax,[ebp+0x8]
	ss:0103d7a6=????????
	       30708ebe a903000000       test    eax,0x3
	       30708ec3 753e             jnz     MsoCchWzLen+0x4b (30708f03)
	FAULT ->30708ec5 8b10             mov     edx,[eax]
	ds:00000000=????????
	       30708ec7 8d4004           lea     eax,[eax+0x4]
	ds:00f0ea06=????????
	       30708eca 8bca             mov     ecx,edx
	       30708ecc 81ea01000100     sub     edx,0x10001
	       30708ed2 33d1             xor     edx,ecx
	       30708ed4 81e200800080     and     edx,0x80008000
	       30708eda 74e9             jz      MsoCchWzLen+0xd (30708ec5)
	       30708edc 2b4508           sub     eax,[ebp+0x8]
	ss:0103d7a6=????????
	       30708edf c1e801           shr     eax,0x1
	       30708ee2 6685c9           test    cx,cx
	       30708ee5 8d40fe           lea     eax,[eax-0x2]
	ds:00f0ea06=????????
	       30708ee8 740f             jz      MsoCchWzLen+0x41 (30708ef9)
	
	*----> Stack Back Trace <----*
	
	FramePtr ReturnAd Param#1  Param#2  Param#3  Param#4  Function Name
	0012eda0 6e204066 00000000 0012edc8 6e205b94 00000000 mso97!MsoCchWzLen
	0012edac 6e205b94 00000000 0012f130 00ba1ae4 00000000
	outllib!DllGetClassObject
	0012edc8 6e2e39ba 0012ee44 00317c94 00000001 0012eea4
	outllib!DllGetClassObject
	0012eddc 6e2e3520 00317c5c 0012ee44 0012f130 00000008
	outllib!RenExitInstance
	0012eea4 6e2e346f 0012f130 0012eed0 6e1d46f4 0012f130
	outllib!RenExitInstance
	0012eeb0 6e1d46f4 0012f130 00ba1ae4 00000000 0012f130
	outllib!RenExitInstance
	0012eed0 6e1d4691 00000009 00306cc8 00000000 6e2e3461
	outllib!DllGetClassObject
	0012ef38 6e2e345d 0012f130 00306cc8 00000000 6e2e3461
	outllib!DllGetClassObject
	0012ef50 6e23ffcb 0012f130 00306cc8 00306cb8 0012eff0
	outllib!RenExitInstance
	0012ef64 6e2e3330 6e2e3408 0012f130 00306cb8 0012f130
	outllib!DllCanUnloadNow
	0012eff0 6e2e32f5 0012f130 00306b70 0012f018 6e2e32c0
	outllib!RenExitInstance
	0012f000 6e2e32c0 0012f130 00306cb8 0012f130 00305020
	outllib!RenExitInstance
	0012f018 6e2e3159 0012f130 00000000 80004005 0012f150
	outllib!RenExitInstance
	0012f02c 6e1fedef 0012f130 00000000 00301910 00301250
	outllib!RenExitInstance
	0012f150 6e1e9245 003053dc 00316954 00000000 00303abc
	outllib!DllGetClassObject
	0012f1c0 6e1ecffc 00000000 00316954 00000000 00000000
	outllib!DllGetClassObject
	0012f238 6e1ecae4 0006f017 00000000 000000c0 46000000
	outllib!DllGetClassObject
	0012f2b8 6e24c2e3 0006f017 00000000 000000c0 46000000
	outllib!DllGetClassObject
	0012f30c 6e24c20c 00000002 6e213e60 0015d910 0012fa18
	outllib!DllCanUnloadNow
	0012f320 6e200111 00301608 00000002 6e213e60 0015d910
	outllib!DllCanUnloadNow
	0012fa18 6e1cfbcc 00000064 0012fc0c 0012fa68 00301af0
	outllib!DllGetClassObject
	0012fa60 6e1cfab4 00000000 00000064 0012fc0c 0000004e
	outllib!DllGetClassObject
	0012fb04 6e1d1009 00301af0 003600fe 0000004e 00000064
	outllib!DllGetClassObject
	0012fb20 77e71e3b 003600fe 0000004e 00000064 0012fc0c
	outllib!DllGetClassObject
	0012fb4c 77e73097 00867918 0000004e 00000064 0012fc0c user32!BeginPaint
	0012fb6c 70ff163f 003600fe 0000004e 00000064 0012fc0c user32!SendMessageW
	0012fbf0 71008a38 00154a78 fffffe3d 0012fc0c 0015db10 COMCTL32!Ordinal271
	0012fc74 71007f4a 00154a78 fffffe3d 00151588 0015db10
	COMCTL32!ImageList_GetIcon
	0012fca0 7101fe4d 00154a78 00000009 0015db10 00000001
	COMCTL32!ImageList_GetIcon
	0012fccc 710187d7 00000004 00000000 00000000 00000051 COMCTL32!Ordinal233
	0012fd20 77e7288d 004d00fc 00000201 00000001 01090051 COMCTL32!
	                                                     CreateMappedBitmap
	0012fd3c 77e72918 ffff00ee 004d00fc 00000201 00000001
	  user32!ClientToScreen
	0012fd5c 6e1cfed1 ffff00ee 004d00fc 00000201 00000001
	user32!CallWindowProcA
	0012fd7c 6e1d10e6 00000201 00000001 01090051 00301b78
	outllib!DllGetClassObject
	0012fd9c 6e1cfd6b 00000001 00000051 00000109 00301b78
	outllib!DllGetClassObject
	0012fde4 6e1cfab4 00000201 00000001 6e2475b0 008679d0
	outllib!DllGetClassObject
	0012fe88 6e1d1009 00301b78 004d00fc 00000201 00000001
	outllib!DllGetClassObject
	0012fea4 77e71250 004d00fc 00000201 00000001 01090051
	outllib!DllGetClassObject
	
	
	
	Additional query words: GPF
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbOutlook97Search kbZNotKeyword3
	Version           : 8.00, 8.01, 8.02, 8.03, 8.50
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
