---
layout: page
title: "Q155462: MSD Fails With Application Error After Clicking Network"
permalink: /kb/155/Q155462/
---

## Q155462: MSD Fails With Application Error After Clicking Network

{% raw %}

	Article: Q155462
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.5,3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A computer running Windows NT Winmsd.exe may fail after you click the Network
	button. The following error message appears:
	
	  An application error has occurred
	  and an application log is being generated.
	  WINMSD.EXE
	  Exception: access violation (0xC0000005, Address 0x0216fa9)
	
	In addition, if Drwtsn32.exe is set up to create a Drwtsn32.log, the following
	text will appear in the header:
	
	  Application exception occurred:
	
	          App: winmsd.DBG (pid=119)
	          When: 1/1/2039 @ 12:56:43.961
	          Exception number: c0000005 (access violation)
	
	NOTE: The address and pid you have may differ from those in the example.
	
	CAUSE
	=====
	
	The installation date of the computer is out of range. Take note of when the
	application exception occurred. The ctime library function in the C language
	handles dates in the range January 1, 1970 to January 18, 2038 (inclusive).
	
	
	RESOLUTION
	==========
	
	Change the date to the correct month, day, and year and restart the computer.
	This change may have to be made using the computer's BIOS utility.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5x. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	The function name and the instruction with the FAULT will appear exactly as
	shown below in the Drwtsn32.log file, if the Windows NT Debug Symbols have been
	set up.
	
	State Dump for Thread Id 0x5c
	
	eax=00000000 ebx=00349318 ecx=0012f5bc edx=00340548 esi=00000000
	edi=00349ee8
	eip=021a6fa9 esp=0012f5b0 ebp=0012f85c iopl=0         nv up ei pl nz ac pe
	nc
	cs=001b  ss=0023  ds=0023  es=0023  fs=0038  gs=0000
	efl=00000212
	
	function: GetNetworkData
	021a6f87 51               push    ecx
	021a6f88 e8934c0000       call    NetStatisticsGet (021abc20)
	021a6f8d 8bf0             mov     esi,eax
	021a6f8f 85f6             test    esi,esi
	021a6f91 0f85d3010000     jne     GetNetworkData+0x1305 (021a716a)
	021a6f97 8b7df8           mov     edi,[ebp-0x8]
	021a6f9a 57               push    edi
	021a6f9b e8304c0000       call    ctime (021abbd0)
	021a6fa0 83c404           add     esp,0x4
	021a6fa3 8d8d60fdffff     lea     ecx,[ebp+0xfffffd60]
	FAULT ->021a6fa9 c6401800         mov     byte ptr [eax+0x18],0x0
	021a6fad 6a32             push    0x32
	021a6faf 51               push    ecx
	021a6fb0 6aff             push    0xff
	021a6fb2 50               push    eax
	021a6fb3 6a01             push    0x1
	021a6fb5 6a00             push    0x0
	021a6fb7 ff15b0111a02
	call dword ptr [_imp__MultiByteToWideChar (021a11b0)]
	021a6fbd 8d8d60fdffff     lea     ecx,[ebp+0xfffffd60]
	021a6fc3 51               push    ecx
	021a6fc4 689e040000       push    0x49e
	021a6fc9 e8b4460000       call    SetCLBNode (021ab682)
	
	*----> Stack Back Trace <----*
	
	FramePtr ReturnAd Param#1  Param#2  Param#3  Param#4  Function Name
	0012f85c 021a5a86 000100ba 021ad350 004d0370 004d03dc winmsd!GetNetworkData
	0012f978 77ea18cf 000100ba 00000110 000100bc 00000000 winmsd!NetworkDlgProc
	0012f990 77ea1702 000100ba 00000110 000100bc 00000000 user32!_GetWindowLong
	0012f990 77ea1702 000100ba 00000110 000100bc 00000000
	user32!HMValidateHandle
	
	*----> Raw Stack Dump <----*
	0012f5b0  05 00 00 00 ba 00 01 00 - dc d3 1a 02 53 00 61 00
	............S.a.
	0012f5c0  74 00 20 00 4a 00 61 00 - 6e 00 20 00 30 00 31 00  t. .J.a.n.
	.0.1.
	0012f5d0  20 00 31 00 32 00 3a 00 - 35 00 35 00 3a 00 30 00
	.1.2.:.5.5.:.0.
	0012f5e0  39 00 20 00 32 00 30 00 - 33 00 39 00 00 00 00 00  9.
	.2.0.3.9.....
	0012f5f0  9e 02 00 00 00 00 00 00 - 14 f6 12 00 9c 2c ea 77
	.............,.w
	0012f600  ba 00 01 00 11 01 00 00 - 40 28 00 03 c6 00 01 00
	........@(......
	0012f610  11 01 00 00 34 f6 12 00 - bd 70 ea 77 91 b4 eb 77
	....4....p.w...w
	
	Additional query words: prodnt 3.5 3.51
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : winnt:3.5,3.51
	
	=============================================================================
	

{% endraw %}
