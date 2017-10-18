---
layout: page
title: "Q197969: XADM: Dr. Watson in Dsamain.exe"
permalink: kb/197/Q197969/
---

## Q197969: XADM: Dr. Watson in Dsamain.exe

	Article: Q197969
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 25-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Microsoft Exchange Server DSAMain (Directory Service) process may
	sporadically display a Dr. Watson error message during normal operation.
	Included in the stack dump of the Dr. Watson log will be the following
	information:
	
	FramePtr  RetAddr   Param1   Param2   Param3   Function Name
	06c8f1fc  6fe94ffa  06c8f20c 046e20e8 046e20e8
	ESE!IlineNDISeekGEQInternal+0x118({...}, {...})
	06c8f20c  6fe94ce0  00000000 046e20d0 06c8f290
	ESE!ErrNDISeekInternalPage+0x11({...})
	06c8f21c  6fe934c2  06c8f29c 06c8f290 046e20d0 ESE!ErrNDSeek+0x1f({...})
	06c8f25c  6fe942e7  000001c7 00000001 00000000 ESE!ErrBTDown+0x35d
	06c8f270  6fe973d0  00000001 77f1d1c3 06c8f320 ESE!ErrDIRDown+0x4f
	06c8f2c8  6fe978bb  00000001 00000001 77f1d1c3 ESE!ErrIsamSeek+0xd8
	00000001  00000000  00000000 00000000 00000000 ESE!JetSeek+0x6f
	<BR/><BR/>
	EAX=046e20d0  EBX=00000004  ECX=00000001  EDX=00000005  ESI=ffffffff
	EDI=00212ce9
	EIP=6fe95130  ESP=06c8f174  EBP=00000000  EFL=00010246
	CS=001b  DS=0023  ES=0023  SS=0023  FS=0038  GS=0000
	
	
	WORKAROUND
	==========
	
	To work around this problem, contact your hardware manufacturer to inquire about
	a possible BIOS upgrade that corrects this problem.
	
	MORE INFORMATION
	================
	
	For information about how to contact your hardware manufacturer, click the
	appropriate article number below to view the article in the Microsoft Knowledge
	Base:
	
	  Q65416 Hardware and Software Third-Party Vendor Contact List, A-K
	
	  Q60781 Hardware and Software Third-Party Vendor Contact List, L-P
	
	  Q60782 Hardware and Software Third-Party Vendor Contact List, Q-Z
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
