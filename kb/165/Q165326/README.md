---
layout: page
title: "Q165326: Application Exception in Snaprint.exe When Stopping Printer"
permalink: kb/165/Q165326/
---

## Q165326: Application Exception in Snaprint.exe When Stopping Printer

	Article: Q165326
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 3.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When attempting to stop a printer defined in SNA Server 3.0 Print Service, a
	General Protection Fault (GPF) in Snaprint.exe may occur.
	
	The following is a Dr. Watson log excerpt of the fault:
	
	function: RtlpWaitForCriticalSection
	       77f6cbda e920010000       jmp     RtlpWaitForCriticalSection+0x196
	(77f6ccff)
	       77f6cbdf 803d7859fa7701
	ds:77fa5978=01
	                                 cmp     byte ptr [fltused+0xca8
	(77fa5978)],0x1
	       77f6cbe6 1bc0             sbb     eax,eax
	       77f6cbe8 25c05afa77       and     eax,0x77fa5ac0
	       77f6cbed 837e1000         cmp   dword ptr [esi+0x10],0x0
	ds:62182e82=????????
	       77f6cbf1 8945fc           mov     [ebp-0x4],eax
	ss:02f3e90e=????????
	       77f6cbf4 7506             jnz     RtlpWaitForCriticalSection+0x93
	(77f6cbfc)
	       77f6cbf6 56               push    esi
	       77f6cbf7 e804feffff       call    RtlDumpResource+0x8f (77f6ca00)
	       77f6cbfc 8b06             mov     eax,[esi]
	ds:60da447c=00000000
	FAULT ->77f6cbfe ff4010           inc     dword ptr [eax+0x10]
	ds:013dea06=????????
	       77f6cc01 8b06             mov     eax,[esi]
	ds:60da447c=00000000
	       77f6cc03 ff75fc           push    dword ptr [ebp-0x4]
	ss:02f3e90e=????????
	       77f6cc06 6a00             push    0x0
	       77f6cc08 ff4014           inc     dword ptr [eax+0x14]
	ds:013dea06=????????
	       77f6cc0b ff7610           push    dword ptr [esi+0x10]
	ds:62182e82=????????
	       77f6cc0e e81db6ffff       call    ZwWaitForSingleObject (77f68230)
	       77f6cc13 3d02010000       cmp     eax,0x102
	       77f6cc18 0f85b2000000     jne     RtlpWaitForCriticalSection+0x167
	(77f6ccd0)
	       77f6cc1e 57               push    edi
	       77f6cc1f 68d4caf677       push    0x77f6cad4
	       77f6cc24 e8cb940000       call    DbgPrint (77f760f4)
	
	CAUSE
	=====
	
	The application exception was caused by SNA Print closing the printer, and then
	trying to access it again on a timer to recover from an error. The error was
	that the logical LAN printer was not available.
	
	RESOLUTION
	==========
	
	SNA Print doesn't close and reopen the virtual printer without reinitializing
	it.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 3.0. This
	problem was corrected in the latest Microsoft SNA Server 3.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300
	Version           : WINDOWS:3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
