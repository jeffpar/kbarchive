---
layout: page
title: "Q169701: XCON: MTA Terminates Unexpectedly with Event ID 2143"
permalink: kb/169/Q169701/
---

## Q169701: XCON: MTA Terminates Unexpectedly with Event ID 2143

	Article: Q169701
	Product(s): Microsoft Exchange
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 06-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Exchange Server Message Transfer Agent (MTA) may terminate unexpectedly with
	events similar to the following:
	
	  Event ID:9405
	  Source:MSExchangeMTA
	  Type:Error
	  Category:Field Engineering
	  Description:
	  An unexpected error has occurred which may cause the MTA to terminate.
	  Error: Exception e005085f occurred at Address 77f1ccc7. [BASE XFER-IN
	  18] (16)
	
	  Event ID:2143
	  Source:MSExchangeMTA
	  Type:Error
	  Category:Internal Processing
	  Description:
	  A fatal MTA database server error was encountered. Call Microsoft
	  Product Support. Unrecoverable error: ODXOINIU - Object does not exist.
	  About to terminate. Called from MTA. Procedure 205. Object ID: 060000BF.
	  Attribute ID: 55. Attribute value number: 1. Referenced object: 00000000
	  (00000000 => N/ 
	  ). Referenced object error 0. [1 DB Server XFER-IN 18 101] (16)
	
	  Event ID:9405
	  Source:MSExchangeMTA
	  Type:Error
	  Category:Field Engineering
	  Description:
	  An unexpected error has occurred which may cause the MTA to terminate.
	  Error: Error writing AAT: obj 11ea. [BASE XFER-IN 18] (16)
	
	  Event ID:2028
	  Source:MSExchangeMTA
	  Type:Error
	  Category:Internal Processing
	  Description:
	  A fatal internal MTA error occurred. Contact Microsoft Product Support
	  Services. Unable to encode the message tracking event. Event node =
	  Vvt07, Error code = Mandatory node cannot be omitted [BASE XFER-IN 18
	  88] (16)
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 4.0. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	The faulting thread may appear similar to the following in the Drwtsn32.log
	file:
	
	  State Dump for Thread Id 0x169
	
	  eax=0540fbb0 ebx=00000012 ecx=0102802c edx=00000000
	  esi=02729b49 edi=02729b71 eip=77f1ccc7 esp=0540fbac
	  ebp=0540fc00 iopl=0       nv up ei pl zr na po nc
	  cs=001b  ss=0023  ds=0023  es=0023  fs=0038  gs=0000
	  efl=00000246
	
	  function: UnhandledExceptionFilter
	       77f1ccaa 83c604         add     esi,0x4
	       77f1ccad 8bc1           mov     eax,ecx
	       77f1ccaf 49             dec     ecx
	       77f1ccb0 85c0           test    eax,eax
	       77f1ccb2 75ef           jnz     UnhandledExceptionFilter
	       77f1ccb4 eb07           jmp     UnhandledExceptionFilter
	       77f1ccb6 c745c000000000 mov     dword ptr [ebp-0x40],0x0
	       77f1ccbd 8d45b0         lea     eax,[ebp-0x50]
	       77f1ccc0 50             push    eax
	       77f1ccc1 ff15a4b3f377
	                               call    dword ptr [_imp__RtlAreBitsSet
	  (77f3b3a4)]
	  FAULT ->77f1ccc7 5e             pop     esi
	       77f1ccc8 8be5           mov     esp,ebp
	       77f1ccca 5d             pop     ebp
	       77f1cccb c21000         ret     0x10
	       77f1ccce a10844f477
	                               mov     eax,[BasepCurrentTopLevelFilter
	  (77f44408)]
	       77f1ccd3 8b4c2404       mov     ecx,[esp+0x4]
	       77f1ccd7 890d0844f477
	                               mov     [BasepCurrentTopLevelFilter
	  (77f44408)],ecx
	       77f1ccdd c20400         ret     0x4
	       77f1cce0 64a100000000   mov     eax,fs:[00000000]
	       77f1cce6 55             push    ebp
	       77f1cce7 8bec           mov     ebp,esp
	       77f1cce9 6aff           push    0xff
	
	  *----> Stack Back Trace <----*
	
	   FramePtr ReturnAd Param#1  Param#2  Param#3  Function Name
	  0540fc00 0200f026 e005085f 00000000 00000000
	  kernel32!UnhandledExceptionFilter
	  0540fcc4 020130c4 00000010 00000026 0000085f EMSMTA!sgplinfo
	  0540fdf4 0215566d 00000026 0000085f 00000000 EMSMTA!sgpminfo
	  0540fe28 0216f24c 0277c306 02729b71 02729b49 EMSMTA!odpbdsta
	  0540fe4c 0212a84e 0277c306 02729b71 02729b49 EMSMTA!_odpdqlok
	  0540febc 020e465d 00000012 00000000 0540010f EMSMTA!otpuqrem
	  0540ff04 020de672 00000012 02729b71 02729b49 EMSMTA!otpirtcf
	  0540ff28 020de4e6 00000012 02729b71 02729b49 EMSMTA!otpixfok
	  0540ff8c 020577a1 02729b71 02729b49 00000012 EMSMTA!otpimain
	  0540ffb8 77f04f32 00000012 02729b71 02729b49 EMSMTA!sbpiwbep
	  0540ffec 00000000 00000000 00000000 00000000 kernel32!BaseThreadStart
	  00000000 00000000 00000000 00000000 00000000 EMSMTA!<nosymbols>
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : WinNT:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
