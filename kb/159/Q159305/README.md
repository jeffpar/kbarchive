---
layout: page
title: "Q159305: XFOR: MSMI Terminates Unexpectedly with Event ID 2335 and 2560"
permalink: kb/159/Q159305/
---

## Q159305: XFOR: MSMI Terminates Unexpectedly with Event ID 2335 and 2560

	Article: Q159305
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 10-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The MS Mail Connector Interchange (MSMI) service terminates unexpectedly with an
	event similar to the following (as viewed in the Application Event Log), and all
	mail is backed up in the MS Mail Connector queue in the Message Transfer Agent:
	
	  Event Id: 2335
	  Source: MSExchangeMSMI
	  Type:Error
	  Category: Session Error
	  Description:
	  MS Mail Connector Interchange has failed in om_read(). Return code is 0x15.
	
	-and-
	
	  Event Id: 2560
	  Source: MSExchangeMSMI
	  Type:Error
	  Category: Session Error
	  Description:
	  The thread in the MS Mail Connector that delivers to MS Mail has failed
	  reading the Microsoft Exchange Server MTA object.
	
	There will also be warnings logged by the Microsoft Exchange Server MTA that are
	similar to the following:
	
	  Event Id: 2171
	  Source: MSExchangeMTA
	  Type:Warning
	  Category: Internal Processing
	  Description:
	  An MTA database server error was encountered while reading an attribute.
	  Called from XAPI Procedure: 314. Database error code: 2171. Object at fault:
	  0600004A. Attribute identifier: 11. Value number: 1. Referenced object:
	  06000045 (00000000 => N/A). Referenced object error: 2171. [DB Server
	  Gateway 30 26] (14).
	
	-and-
	
	  Event Id: 3128
	  Source: MSExchangeMTA
	  Type:Warning
	  Category: Internal Processing
	  Description:
	  An MTA database server error was encountered. [XAPI GATEWAY 30 314] (14)
	
	The Drwtsn32.log will show a call stack similar to the following:
	
	  Application exception occurred:
	  App: mt.DBG (pid=225)
	  Exception number: c0000005 (access violation)
	
	The following is the state dump for thread ID 0x179:
	
	eax=05665168 ebx=0541b6a0 ecx=00000001 edx=05417df4 esi=00000000
	edi=0541be54
	eip=0041b2a9 esp=054179d8 ebp=05417a28 iopl=0         nv up ei pl nz na pe
	nc
	cs=001b  ss=0023  ds=0023  es=0023  fs=003b  gs=0000
	efl=00000202
	
	function: vReset
	       0041b286 00c7             add     bh,al
	       0041b288 83140d0000010000
	ds:00000001=????????
	                                 adc     dword ptr [00010000+ecx],0x0
	       0041b290 0089b3c40700     add     [ecx+0x7c4b3],cl
	ds:0007c4b4=??
	       0041b296 008b8bc40700     add     [ebx+0x7c48b],cl
	ds:05497b2b=??
	       0041b29c 0039             add     [ecx],bh
	ds:00000001=??
	       0041b29e 0f74             ???
	       0041b2a0 6e               outsb
	       0041b2a1 8b83c8070000     mov     eax,[ebx+0x7c8]
	ds:0541be68=05665168
	       0041b2a7 41               inc     ecx
	       0041b2a8 56               push    esi
	FAULT ->0041b2a9 8b54c8fc         mov     edx,[eax+ecx*8-0x4]
	ds:0055e924=????????
	       0041b2ad 89542410         mov     [esp+0x10],edx
	ss:059762fb=????????
	       0041b2b1 898bc4070000     mov     [ebx+0x7c4],ecx
	ds:0541be64=00000000
	       0041b2b7 8b4c2410         mov     ecx,[esp+0x10]
	ss:059762fb=????????
	       0041b2bb 8932             mov     [edx],esi
	ds:05417df4=00000000
	       0041b2bd 83c11c           add     ecx,0x1c
	       0041b2c0 897204           mov     [edx+0x4],esi
	ds:05976716=????????
	       0041b2c3 897208           mov     [edx+0x8],esi
	ds:05976716=????????
	       0041b2c6 89720c           mov     [edx+0xc],esi
	ds:05976716=????????
	       0041b2c9 897210           mov     [edx+0x10],esi
	ds:05976716=????????
	       0041b2cc 897214           mov     [edx+0x14],esi
	ds:05976716=????????
	       0041b2cf 897218           mov     [edx+0x18],esi
	ds:05976716=????????
	
	*----> Stack Back Trace <----*
	
	FramePtr  RetAddr   Param1   Param2   Param3   Function Name
	054179e8  0040a0db  004600f8 0541fcdc 00000000 MT!CTNEF::vReset+0x49(...)
	054179f8  00404d3a  00460058 00000000 0541ff74
	MT!CMDBParse::vResetParser+0x19b(...)
	05417a28  0040192d  00000000 00ac7970 002d1f88
	MT!EMSMessage::vResetMessage+0x1da(0x00000000)
	0541ff84  10204bdc  00000000 00ac7970 77e2197c MT!dwToSFS+0x8ad(0x00000000)
	0541ffb8  77f46c2e  002d1f88 00ac7970 77e2197c 0x10204bdc
	0541ffec  00000000  10204b79 002d1f88 00000000
	KERNEL32!BaseThreadStart+0x61
	
	
	CAUSE
	=====
	
	The MS Mail Connector Interchange encountered a corrupt message, causing it to
	terminate.
	
	
	WORKAROUND
	==========
	
	While the MS Mail Connector Interchange service is stopped, delete the first
	message in the MS Mail Connector queue. Doing this allows the MS Mail Connector
	Interchange service to start, and process the mail backed up in the queue.
	
	In addition, the MS Mail Connector Interchange was fixed to properly handle a
	corrupt message in the queue without terminating. The fix logs an event (ID
	2450) in the application log that describes the corrupt message and how to
	remove it from the queue. The fix also allows all other mail to be processed
	around this corrupt message until the MSMI can be shut down for the offending
	message to be removed.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem was corrected in the latest Microsoft Exchange 4.0
	U.S. Service Pack. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
