---
layout: page
title: "Q159174: XADM: MTA Terminates Unexpectedly with Events 251 and 9405"
permalink: /kb/159/Q159174/
---

## Q159174: XADM: MTA Terminates Unexpectedly with Events 251 and 9405

	Article: Q159174
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Microsoft Exchange Message Transfer Agent (MTA) version 4.0 may terminate
	unexpectedly with the following events:
	
	  Event Id: 9405
	  Source: MSExchangeMTA
	  Type: Error
	  Category: Field Engineering
	  Description:
	  An unexpected error has occurred which may cause the MTA to terminate. Error:
	  Exception e0020004 occurred at Address 77f3cbcd. [BASE DISP:ROUTER 11] (16)
	
	  Event Id: 9405
	  Source: MSExchangeMTA
	  Type: Error
	  Category: Field Engineering
	  Description:
	  An unexpected error has occurred which may cause the MTA to terminate. Error:
	  Double acquire of semaphore 2810 [BASE DISP:ROUTER 11] (16)
	
	  Event Id: 251
	  Source: MSExchangeMTA
	  Type: Warning
	  Category: Configuration
	  Description:
	  A fatal internal MTA error occurred. Entity control block reassigned because
	  of a configuration error. Statistics for entity
	  /O=BANDS/OU=EMERALD/CN=CONFIGURATION /CN=CONNECTIONS/CN=SITE CONNECTOR
	  (MARIAH) have been lost. [MTA DISP:ROUTER 11 445] (16)
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem was corrected in the latest Microsoft Exchange 4.0
	U.S. Service Pack. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	The Dr. Watson Log may contain information similar to the following for the
	faulting thread:
	
	FramePtr ReturnAd Param#1  Param#2  Param#3  Param#4  Function Name
	04e9d720 020d3da1 e0020004 00000000 00000000 KERNEL32!RaiseException
	04e9d744 02068bb8 00000afa 022a0044 024a6c00 EMSMTA!sbpiwacs
	04e9d758 021062e8 022a0044 00000000 024a6cec EMSMTA!otpuedec
	04e9d784 02063775 0281f70b 00e90002 04e9db69 EMSMTA!otpuefre
	04e9d8cc 020effc2 e9fc740b 04e9db0c 00000000 EMSMTA!otpuechk
	04e9dd04 020eec65 e9fc740b 0281f794 025a6be3 EMSMTA!otpmrdsl
	04e9df70 0208eaf7 025aa1c8 025a6be3 04e9fc69 EMSMTA!otpmrgwy
	04e9fc74 02058328 025a6bdd 025a6a26 025a6a04 EMSMTA!orprmtsr
	04e9fc98 02057106 e9ffb80b 025a6bdd 00000000 EMSMTA!otpmrout
	04e9fef8 02055d48 e9ffb80b 00000000 021a0010 EMSMTA!otpmrd
	04e9ff54 0205536b e9ffb80b 02481a86 000001b8 EMSMTA!otpmrcd
	04e9ff8c 020163e8 02481a86 02481a86 0000000b EMSMTA!otpmmain
	04e9ffb8 77f26c2a 0000000b 02481a86 02481a86 EMSMTA!sbpiwbep
	04e9ffec 00000000 00000000 00000000 00000000 KERNEL32!BaseThreadStart
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
