---
layout: page
title: "Q256879: XADM: Mbclean Stops Unexpectedly Because of Memory Corruption"
permalink: /kb/256/Q256879/
---

## Q256879: XADM: Mbclean Stops Unexpectedly Because of Memory Corruption

{% raw %}

	Article: Q256879
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5 SP3
	Operating System(s): 
	Keyword(s): exc55sp3 kbExchange550preSP4fix kbExchange550sp4Fix
	Last Modified: 11-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 SP3 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	During normal operation the Microsoft Exchange Server Mailbox Manager service
	(Mbclean.exe) may stop unexpectedly with an access violation. If the correct
	Microsoft Windows NT and Exchange Server debug symbols are installed, the
	resulting Dr. Watson log may contain a stack dump similar to the following:
	
	  
	
	  FramePtr  RetAddr   Param1   Param2   Param3   Function Name
	  08c9ec3c  00401be2  02e30ffd 08c9ec60 0000003b MBCLEAN!ulGetName+0x2d
	  08c9ed60  004021b5  02e36ff0 77f04f32 08c9f750 MBCLEAN!CProcessed::IsAlreadyDone+0x42
	  08c9f640  00406824  02e3cd90 00414348 02e26ff0 MBCLEAN!hrWalkUsersInContainer+0x2f5
	  08c9f684  0040629d  00000000 00000000 02e26ff0 MBCLEAN!ProcessOneContainer+0x474
	  08c9f6f4  00405be6  02e38d90 08c9f750 02e26ff0 MBCLEAN!ProcessContainer+0xcd
	  08c9fc1c  004096bc  08c9fc54 7ffdf000 08c9fd74 MBCLEAN!StartMailboxCleanup+0x566(...)
	  08c9fc40  6722aa3b  08c9fdac 9e72b964 01bf7fa9 MBCLEAN!TimerAPCProc+0x25c
	  08c9fd1c  77f1ce85  00000002 08c9fd44 00000001 NTDLL!RtlpDebugPageHeapCreate+0x384
	  00000023  00000000  00000000 00000000 00000000 KERNEL32!WaitForMultipleObjectsEx+0x10b
	
	CAUSE
	=====
	
	This issue can occur because Mbclean records the names of all of the mailboxes
	that it processes (in a temporary file in the Mbxman folder called the
	ProcessedMailboxes.txt file) before all of the mailboxes have been processed.
	When data is read out of this file, it does not set a terminating NULL at the
	end of the character string in the memory buffer. Thus all later references to
	this character string may exceed the range of the string itself, which can cause
	an access violation if the next memory block is not accessible.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server 5.5.
	For additional information, click the following article number to view the
	article in the Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the latest Exchange Server 5.5 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in Microsoft Exchange Server
	version 5.5 Service Pack 3. This problem was first corrected in Exchange Server
	5.5 Service Pack 4.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55sp3 kbExchange550preSP4fix kbExchange550sp4Fix 
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange550SP3
	Version           : winnt:5.5 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
