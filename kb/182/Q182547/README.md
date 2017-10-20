---
layout: page
title: "Q182547: XCON: Emsmta.exe Causes Access Violation In EMSMTA!HeapCheckFree"
permalink: /kb/182/Q182547/
---

## Q182547: XCON: Emsmta.exe Causes Access Violation In EMSMTA!HeapCheckFree

{% raw %}

	Article: Q182547
	Product(s): Microsoft Exchange
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	- Microsoft Exchange, version 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Microsoft Exchange Server message transfer agent (MTA) stops with the
	following error:
	
	  Event ID: 9405
	  Source: MSExchangeMTA  Field Engineering
	  Description: An unexpected error has occurred which may cause the MTA to
	  terminate.  Error: Memory corruption at address 167123e. [BASE
	  DISP:ROUTER 11] (16)
	
	  Event ID: 9405
	  Source: MSExchangeMTA  Field Engineering
	  An unexpected error has occurred which may cause the MTA to terminate.
	  Error: Exception 0xe0020002 occurred at Address 0x77f1cd91. [BASE
	  DISP:ROUTER 11] (16)
	
	When the above error occurs, the MTA causes an access violation. If the Windows
	NT Server and Exchange Server symbols are loaded correctly, then the callstack
	will look like the following:
	
	  kb
	  FramePtr  RetAddr   Param1   Param2   Param3   Function Name
	  04b6be7c  0041df22  e0020002 00000000 00000000
	  KERNEL32!RaiseException+0x6a
	  04b6bea4  00433f09  01670000 00000000 01679a64 EMSMTA!HeapCheckFree+0x72
	  04b6bed8  0056c4aa  0459000d 027cd6aa 00000002 EMSMTA!orpxread+0x1e9
	  04b6c050  0056b5b3  0000000d 027cd6aa 04b6c08c
	  EMSMTA!DispReadDLMembers+0x5a
	  04b6c0a4  0044b277  0140000d 04b6ca90 04b6c0cc EMSMTA!otpadlsp+0x183
	  04b6d5a8  00563467  0140000d 04b6db4c 0263f9d0 EMSMTA!otpaccss+0x3d7
	  04b6d5c0  00476323  b6fc6c0d 000009b3 01400000
	  EMSMTA!RoutingRestricted+0x67
	  04b6dccc  0047579d  b6fc6c0d 027c6d14 0266c0b7 EMSMTA!otpmrdsl+0x813
	  04b6df40  00431f3e  0266f65c 0266c0b7 04b6fc63 EMSMTA!otpmrgwy+0x58d
	  04b6fc6c  00432454  0266c0b1 0266bed4 0000007b EMSMTA!orprmtsr+0xede
	  04b6fc90  00432933  b6ffb80d 0266c0b1 02660000 EMSMTA!otpmrout+0xc4
	  04b6fef4  0045872a  b6ffb80d 00000000 005b0010 EMSMTA!otpmrd+0x2f3
	  04b6ff54  004bab0b  b6ffb80d 00020047 00000208 EMSMTA!otpmrcd+0x71a
	  04b6ff8c  00486eec  00020047 011ff7a4 0000000d EMSMTA!otpmmain+0x37b
	  04b6ffb8  77f04f2c  0000000d 00020047 011ff7a4 EMSMTA!sbpiwbep+0x5c
	  04b6ffec  00000000  00486e90 0000000d 00000000
	  KERNEL32!BaseThreadStart+0x51
	
	CAUSE
	=====
	
	This problem occurs when the distribution list is used to determine the access
	for users to the Internet. The distribution list used is a nested distribution
	list. In the DispReadDLMembers routine there is a chaining error, which causes
	the problem.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Exchange Server 5.0 and 5.0 SP1.
	A supported fix is now available, but has not been fully regression- tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	
	Additional query words: emsmta heapcheck free
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword6 kbExchangeSearch kbExchange500 kbExchangeClientSearch kbZNotKeyword2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
