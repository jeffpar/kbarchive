---
layout: page
title: "Q312819: SNA Server Fails Unexpectedly With Access Violation in S1PUC62"
permalink: /kb/312/Q312819/
---

## Q312819: SNA Server Fails Unexpectedly With Access Violation in S1PUC62

	Article: Q312819
	Product(s): Microsoft SNA Server
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbDSupport sna4 kbsna400sp1 kbsna400sp2 kbsna400sp3 kbsna400sp4
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The SNA Server service (Anaservr.exe) may fail unexpectedly with an access
	violation, causing all users to lose their SNA sessions. SNA Servers configured
	to support LU 6.2 sessions to a host system may experience this problem.
	
	If Drwtsn32.exe is configured as the system's default debugger, the Drwtsn32.log
	file will indicate an access violation fault in routine s1puc62(). The log entry
	will be similar to the following:
	
	  Application exception occurred:
	          App: exe\snaservr.dbg (pid=198)
	          When: 11/2/2001 @ 19:9:1.272
	          Exception number: c0000005 (access violation)
	
	  [data omitted]
	
	  function: s1puc62
	          0101625f 0fbf4610         movsx   eax,word ptr [esi+0x10]    ds:02345a67=????
	          01016263 c644241301       mov     byte ptr [esp+0x13],0x1      ss:01bde913=??
	          01016268 8b0c85e04a0f01                                  ds:00000000=????????
	                                    mov     ecx,[s1scb+0x4e20 (010f4ae0)+eax*4]
	          0101626f 885916           mov     [ecx+0x16],bl                ds:02345a08=??
	          01016272 e9ab010000       jmp     s1puc62+0x3c2 (01016422)
	          01016277 807e13ff         cmp     byte ptr [esi+0x13],0xff     ds:02345a66=??
	          0101627b 0f85e7000000     jne     s1puc62+0x308 (01016368)
	          01016281 668b6f0a         mov     bp,[edi+0xa]               ds:021b60ff=????
	          01016285 0fbfd5           movsx   edx,bp
	          01016288 8b0495e04a0f01                                  ds:ffffb2c4=????????
	                                    mov     eax,[s1scb+0x4e20 (010f4ae0)+edx*4]
	  FAULT ->0101628f 8a4815           mov     cl,[eax+0x15]                ds:0102ea06=00
	          01016292 3acb             cmp     cl,bl
	          01016294 0f84b5000000     je      s1puc62+0x2ef (0101634f)
	          0101629a 668b500c         mov     dx,[eax+0xc]               ds:0102ea07=9090
	          0101629e 663bd3           cmp     dx,bx
	          010162a1 742d             jz      s1puc62+0x270 (010162d0)
	          010162a3 0fbfd2           movsx   edx,dx
	          010162a6 8b1495bcf40e01                                  ds:ffffb2c4=????????
	                                    mov     edx,[s1rcb+0xe25c (010ef4bc)+edx*4]
	          010162ad 0fbf5210         movsx   edx,word ptr [edx+0x10]    ds:01029ccb=8d55
	          010162b1 8b1495dc520b01                                  ds:ffffb2c4=????????
	                                    mov     edx,[G_comp_flat2+0x59fc (010b52dc)+edx*4]
	          010162b8 385a08           cmp     [edx+0x8],bl                 ds:01029cca=53
	          010162bb 7413             jz      s1puc62+0x270 (010162d0)
	
	  *----> Stack Back Trace <----*
	
	  FramePtr ReturnAd Param#1  Param#2  Param#3  Param#4  Function Name
	  0000b2c4 00000000 00000000 00000000 00000000 00000000 snaservr!s1puc62  (FPO: [EBP 0x00000000] [0,3,4])
	  0000b2cc 00000000 00000000 00000000 00000000 00000000 snaservr!<nosymbols> 
	
	  State Dump for Thread Id 0xcb
	
	  eax=000000ac ebx=00beff24 ecx=00000090 edx=00000000 esi=7ffdf000 edi=00000000
	  eip=77f682cb esp=00beff00 ebp=00beff54 iopl=0         nv up ei pl nz ac pe cy
	  cs=001b  ss=0023  ds=0023  es=0023  fs=0038  gs=0000             efl=00000213
	
	In addition, an event similar to the following will be logged in the Windows NT
	or Windows 2000 Application Event Log:
	
	  Event ID: 624
	  Source: SNA Server
	  Description: Creating dump file C:\SNA\traces\snadump.log for SNASERVR.EXE
	
	CAUSE
	=====
	
	A message received by the SNA Server service contained an index to an invalid
	conversation control block. The access violation occurs when the SNA Server
	service attempts to access the invalid conversation control block.
	
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next Microsoft SNA Server version 4.0 service pack that contains this
	fix.
	
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
	
	+----------------------------------+
	| File name    | Date       | Time | 
	+----------------------------------+
	| Snaservr.exe | 11/08/2001 | 6:46 | 
	+----------------------------------+
	
	NOTE: Because of file dependencies, the most recent fix that contains the above
	files may also contain additional files.
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server version
	4.0.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDSupport sna4 kbsna400sp1 kbsna400sp2 kbsna400sp3 kbsna400sp4 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400
	Version           : :4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
