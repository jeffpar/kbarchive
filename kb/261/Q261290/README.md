---
layout: page
title: "Q261290: 3270 Applet Causes Access Violation Error Message in Win3270.exe"
permalink: /kb/261/Q261290/
---

## Q261290: 3270 Applet Causes Access Violation Error Message in Win3270.exe

{% raw %}

	Article: Q261290
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Operating System(s): 
	Keyword(s): sna4 kbsna400sp1 kbsna400sp2 kbsna400sp3 kbSNA400sp4fix kbSNA400PreSP4fix
	Last Modified: 08-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start the 3270 applet (Win3270.exe), included with the SNA Server
	client for Windows NT, with the SnaBase service configured to run under a user
	account, an Access Violation error message may occur. If the Drwtsn32.exe file
	is configured as the default debugger on the system, a Drwtsn32.log file similar
	to the following is generated:
	
	  
	
	  Application exception occurred:
	       App: exe\win3270.dbg (pid=229)
	       When: 2/1/2000 @ 9:56:14.629
	       Exception number: c0000005 (access violation)
	
	  *----> Task List <----*
	 229 WIN3270.exe
	 (01000000 - 0101f000) C:\WINNT\Symbols\exe\win3270.dbg
	
	  function: RtlpWaitForCriticalSection
	       77f6cdc2 e920010000       jmp     RtlpWaitForCriticalSection+0x196 (77f6cee7) 77f6cdc7 803d8859fa7701
	       ds:77fa5988=01            cmp     byte ptr [fltused+0xca8 (77fa5988)],0x1
	       77f6cdce 1bc0             sbb     eax,eax
	       77f6cdd0 25d05afa77       and     eax,0x77fa5ad0
	       77f6cdd5 837e1000         cmp     dword ptr [esi+0x10],0x0 ds:682feb26=????????
	       77f6cdd9 8945fc           mov     [ebp-0x4],eax          ss:0337e6b6=????????
	       77f6cddc 7506             jnz     RtlpWaitForCriticalSection+0x93 (77f6cde4)
	       77f6cdde 56               push    esi
	       77f6cddf e8b6fdffff       call    RtlSetCriticalSectionSpinCount+0x70 (77f6cb9a)
	       77f6cde4 8b06             mov     eax,[esi]              ds:67270120=????????
	  FAULT ->77f6cde6 ff4010           inc     dword ptr [eax+0x10]   ds:0108ea06=????????
	       77f6cde9 8b06             mov     eax,[esi]              ds:67270120=????????
	       77f6cdeb ff75fc           push    dword ptr [ebp-0x4]    ss:0337e6b6=????????
	       77f6cdee 6a00             push    0x0
	       77f6cdf0 ff4014           inc     dword ptr [eax+0x14]   ds:0108ea06=????????
	       77f6cdf3 ff7610           push    dword ptr [esi+0x10]   ds:682feb26=????????
	       77f6cdf6 e855b4ffff       call    NtWaitForSingleObject (77f68250)
	       77f6cdfb 3d02010000       cmp     eax,0x102
	       77f6ce00 0f85b2000000     jne     RtlpWaitForCriticalSection+0x167 (77f6ceb8)
	       77f6ce06 57               push    edi
	       77f6ce07 68bcccf677       push    0x77f6ccbc
	       77f6ce0c e873940000       call    DbgPrint (77f76284)
	
	  *----> Stack Back Trace <----*
	
	  FramePtr ReturnAd Param#1  Param#2  Param#3  Param#4  Function Name
	  022efcb0 77f67506 67270120 67222d22 67270120 00000000 ntdll!RtlpWaitForCriticalSection 
	  00000000 00000000 00000000 00000000 00000000 00000000 ntdll!RtlEnterCriticalSection 
	
	CAUSE
	=====
	
	The SNA Server client dynamic address module (DMOD) is loaded by an emulator to
	retrieve a list of 3270 LUs that have been assigned to the user. Many 3270
	emulators, including the 3270 applet, unload the DMOD after the list of 3270 LUs
	has been obtained. A small timing window exists that allows the DMOD's
	event-logging thread to make an attempt at logging an event while the DMOD's
	main application thread is unloading the DMOD (after the list of 3270 LUs is
	retrieved). The Access Violation error message occurs when the logging thread
	tries to access a critical section that is no longer initialized because the
	DMOD is unloaded by the main thread.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for SNA Server 4.0. For
	additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q215838 How to Obtain the Latest SNA Server Version 4.0 Service Pack
	
	
	
	WORKAROUND
	==========
	
	To work around this problem, use the local system account, or install the SNA
	4.0 Windows 95 or Windows 98 client.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server 4.0.
	
	This problem was first corrected in SNA Server 4.0 Service Pack 4.
	
	MORE INFORMATION
	================
	
	This is a timing-related issue. If the local system account is used for the
	SNABASE service or if tracing has been enabled, the problem does not occur.
	
	NOTE: This problem can also occur with third-party emulators as well.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : sna4 kbsna400sp1 kbsna400sp2 kbsna400sp3 kbSNA400sp4fix kbSNA400PreSP4fix 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3
	Version           : WINDOWS:4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
