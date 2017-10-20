---
layout: page
title: "Q214640: XFOR: Internet Mail Service Access Violation with SSL"
permalink: /kb/214/Q214640/
---

## Q214640: XFOR: Internet Mail Service Access Violation with SSL

{% raw %}

	Article: Q214640
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55 EXC55SP3Fix
	Last Modified: 30-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Internet Mail Service may access violate when sending mail with a large
	number of recipients over a Secure Socket Layer (SSL) session to a remote
	system. A Dr. Watson log may be generated with a failing call stack similar to
	the following:
	
	  FramePtr RetAddr Param1 Param2 Param3 Function Name
	  0598f5e4 6fff1245 00ad0000 00000000 00afa238 NTDLL!RtlFreeHeap+0xec
	  0598f5f4 0043d5b7 00ad0000 00000000 00afa238 EXCHMEM!ExchHeapFree+0x15
	  0598fd8c 00402531 00000008 0598ff08 0598fefc
	  MSEXCIMC!CDeliveryBatch::Dispatch+0x27167
	  0598ff34 00420537 0000001d 00000001 00b5f5c8
	  MSEXCIMC!CAsyncIO::IoCompleted+0xb5
	  0598ffb8 77f04f2c 00aee500 00000001 00b5f5c8 MSEXCIMC!SMTPWorkerThread+0xfc
	  0598ffec 00000000 00000000 00000000 00000000 KERNEL32!BaseThreadStart+0x51
	
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the latest Exchange Server 5.5 Service Pack
	
	The English version of this fix should have the following file attributes or
	later:
	
	Component: Internet Mail Service
	
	+-------------------------+
	| File name    | Version  | 
	+-------------------------+
	| Imcmsg.dll   | 5.5.2516 | 
	+-------------------------+
	| Msexcimc.exe | 5.5.2516 | 
	+-------------------------+
	
	This hotfix has been posted to the following Internet location as Psp2imca.zip
	and Psp2imci.zip:
	
	  ftp://ftp.microsoft.com/bussys/exchange/exchange-public/fixes/Eng/Exchg5.5/PostSP2/imc-fix
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 3.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 EXC55SP3Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
