---
layout: page
title: "Q192546: XADM: Store Crashes When Message Is Downloaded via POP3"
permalink: /kb/192/Q192546/
---

## Q192546: XADM: Store Crashes When Message Is Downloaded via POP3

{% raw %}

	Article: Q192546
	Product(s): Microsoft Exchange
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	During normal operation, when a message is being downloaded via POP3, the
	Microsoft Exchange information store may terminate unexpectedly with an access
	violation. If the correct Windows NT and Exchange Server debug symbols are
	installed, the resulting Dr. Watson log may have a stack dump similar to the
	following:
	
	  FramePtr  RetAddr   Param1   Param2   Param3   Function Name
	  1438fcf4  00473eb6  00000000 0128cd6c 00000400 STORE!Cmnode::lpstrName
	  1438fd08  0047da5b  0128cd6c 0127b734 00000400
	   STORE!CmcvtrHdr::hrEmit+0x86
	  1438fd30  0047daed  01278f8c 00000400 1438fde0
	   STORE!CINETemtr::hrEmit+0xab
	  1438fd54  0047d950  01278f8c 00000400 1438fde0
	
	   STORE!CINETemtr::hrEmit+0x13d
	  1438fd94  0047d84c  14adc1d4 01278f8c 00000400
	   STORE!CConvertStream::Read+0xf0
	  1438fdb8  005dd576  00000400 01278f8c 1438fde0
	   STORE!EcReadStreamOp+0x7c
	  1438fe8c  005dd34e  00000001 67750000 ffffffff
	   STORE!POP3CON::EcRenderMessage+0x1c6({...})
	  1438feb4  005dac10  00000001 67750000 ffffffff
	   STORE!POP3CON::EcSendMessage+0x4e({...})
	  1438fed4  005dc00b  00000001 77f05ef9 0062d167
	   STORE!POP3CON::EcRetr+0xa0
	  1438fef4  005dc561  00000004 00000001 0127b18c
	   STORE!POP3CON::OnTransactionCmd+0xfb
	  1438ff1c  6d044f27  01274714 00000008 11ebaa24
	   STORE!POP3CON::CbCommand+0x171
	  1438ff48  6d045118  0127685c 11ebaa14 1438ffec
	   NETIF!IFCONN::ProcessReceiveBuffer+0x237
	  1438ff68  6d0457b7  00000000 11ebaa14 00000008
	   NETIF!IFCONN::OnReceiveComplete+0x178
	  1438ff88  6da02691  012753cc 00000008 00000000
	   NETIF!NetIfCompletionRoutine+0xb7
	  1438ffb8  77f04f2c  00000000 6d0440cc 0f6dfe60
	   ISATQ!AtqPoolThread+0x1c1
	  1438ffec  00000000  6da024d0 00000000 00000000
	   KERNEL32!BaseThreadStart+0x51
	
	CAUSE
	=====
	
	A message containing an "x-user-defined" MIME character set with a code page
	value of "50000" is being improperly handled by the information store. The code
	page value of 50000 is not recognized by the store and, as a result, causes an
	access violation.
	
	RESOLUTION
	==========
	
	A supported fix that corrects this problem is now available from Microsoft, but
	has not been fully regression-tested and should be applied only to systems
	experiencing this specific problem. If you are not severely affected by this
	specific problem, Microsoft recommends that you wait for the next Microsoft
	Exchange Server version 5.0 service pack that contains this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information on support costs, please go to the following
	address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Component: Information Store
	
	  File Name    Version
	  ------------------------
	  Store.exe    5.0.1461.61
	  Mdbmsg.dll   5.0.1461.61
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.0.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : :5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
