---
layout: page
title: "Q191415: NCSA Log Format May Cause Access Violation in IIS 4.0"
permalink: kb/191/Q191415/
---

## Q191415: NCSA Log Format May Cause Access Violation in IIS 4.0

	Article: Q191415
	Product(s): Internet Information Server
	Version(s): WINNT:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An access violation occurs in Internet Information Server (IIS) 4.0
	(Inetinfo.exe), which generates a Dr. Watson log similar to the following:
	
	------------------------------------------------------------------------------------------------
	State Dump for Thread Id 0x13b
	
	eax=49433ee1 ebx=0325f39c ecx=0000018f edx=6c724f3d esi=01acf35d
	edi=0325f56c
	eip=68414f8d esp=0325f1d4 ebp=0325f310 iopl=0         nv up ei pl nz ac po
	nc
	cs=001b  ss=0023  ds=0023  es=0023  fs=0038  gs=0000
	efl=00000216
	
	function: STR::AppendCRLF
	       68414f6b 8d85d0feffff     lea     eax,[ebp+0xfffffed0]
	ss:0325f1e0=504f5420
	       68414f71 6810164168       push    0x68411610
	       68414f76 50               push    eax
	       68414f77 ff1554114168     call    dword ptr [68411154]
	ds:68411154=77e7ca56
	       68414f7d 8b5510           mov     edx,[ebp+0x10]
	ss:0428dd16=00000000
	       68414f80 8bc8             mov     ecx,eax
	       68414f82 8b45fc           mov     eax,[ebp-0x4]
	ss:0428dd16=00000000
	       68414f85 83c414           add     esp,0x14
	       68414f88 03c1             add     eax,ecx
	       68414f8a 894d14           mov     [ebp+0x14],ecx
	ss:0428dd16=00000000
	FAULT ->68414f8d 3b02             cmp     eax,[edx]
	ds:6c724f3d=????????
	       68414f8f 771a             ja      STR::AppendCRLF+0x2b0b
	(68414fab)
	       68414f91 8bfb             mov     edi,ebx
	       68414f93 8bd9             mov     ebx,ecx
	       68414f95 8db5d0feffff     lea     esi,[ebp+0xfffffed0]
	ss:0325f1e0=504f5420
	       68414f9b c1e902           shr     ecx,0x2
	       68414f9e f3a5            rep  movsd ds:01acf35d=4e504f54
	es:0325f56c=686512a0
	       68414fa0 8bcb             mov     ecx,ebx
	       68414fa2 83e103           and     ecx,0x3
	       68414fa5 f3a4             rep     movsb         ds:01acf35d=54
	es:0325f56c=a0
	       68414fa7 3b02             cmp     eax,[edx]
	ds:6c724f3d=????????
	       68414fa9 760e             jbe     STR::AppendCRLF+0x2b19
	(68414fb9)
	
	*----> Stack Back Trace <----*
	
	FramePtr ReturnAd Param#1 Param#2 Param#3 Param#4 Function Name
	0325f310 263d3046 59544943 31463525 6c724f3d 0000018f
	iislog!STR::AppendCRLF (FPO: Non-FPO
	[4,77,3])
	
	This happens when the NCSA log format is used by selecting "Enable Logging" on
	the Web Site property page, and the Active Log Format is set to "NCSA Common Log
	File Format".
	
	CAUSE
	=====
	
	This problem is caused by a problem in Iislog.dll, which tries to access an
	invalid memory address that results in the above access violation.
	
	This problem can be seen when an invalid client request is sent to the IIS
	server. The IIS server responds with an error 400 (invalid parameter error) to
	such requests.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	WORKAROUND
	==========
	
	To work around this problem, do the following:
	
	1. Disable logging for the Web site that has the problem.
	
	2. Use W3C Extended Log Format for IIS logging.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Internet Information Server
	version 4.0. This problem was first corrected in Windows NT 4.0 Service Pack 4.0
	and Windows NT Server 4.0, Terminal Server Edition Service Pack 4.
	
	
	Additional query words: sp hot fix qfe script
	
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch kbiisSearch kbiis400
	Version           : WINNT:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
