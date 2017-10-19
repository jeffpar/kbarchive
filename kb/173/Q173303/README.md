---
layout: page
title: "Q173303: XADM: 5.0 Administrator Program Stops 4.0 Directory Service"
permalink: /kb/173/Q173303/
---

## Q173303: XADM: 5.0 Administrator Program Stops 4.0 Directory Service

	Article: Q173303
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.0 SP1
	Operating System(s): 
	Keyword(s): kbusage exc4 exc5 exc5sp1
	Last Modified: 16-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.0 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you connect the Exchange 5.0 Administrator program against an Exchange Server
	4.0 computer and delete another Exchange Server 4.0 computer in the site, the
	connected Exchange Server 4.0 computer's directory service may fail.
	
	You may see the following events in the Windows NT Event Viewer Application log
	on the server where the Exchange directory service has failed:
	
	  Event ID: 1171
	  Source: MSExchangeDS
	  Type: Error
	  Category: Internal Processing
	  Description: Exception c0000005 has occurred with parameters 450e7c and
	  0 (Internal ID 10c009b). Please contact Microsoft Product Support
	  Services for assistance.
	
	Followed by a Dr. Watson error message:
	
	  Event ID: 4097
	  Source: DrWatson
	  Type: Information
	  Description: The application, dsamain.DBG, generated an application
	  error. The error occurred on 7/11/1997 @ 14:58: 4.750 The exception
	  generated was 000006d9 at address 77f63638 (..RtlDispatchException)
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article. This problem has been corrected in the
	latest U.S. Service Pack for Microsoft Exchange Server version 5.0. For
	information on obtaining the Service Pack, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage exc4 exc5 exc5sp1 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2 kbExchange500SP1
	Version           : winnt:4.0,5.0,5.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
