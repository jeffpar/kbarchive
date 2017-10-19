---
layout: page
title: "Q166558: XFOR: Inbound Internet Message May Cause Access Violation"
permalink: /kb/166/Q166558/
---

## Q166558: XFOR: Inbound Internet Message May Cause Access Violation

	Article: Q166558
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): kbusage exc5
	Last Modified: 23-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	An inbound message through the Internet Mail Service (IMS) may cause the
	Store.exe to display the following Dr. Watson error message:
	
	  An application error has occurred and an application log is being
	  generated. STORE.exe. Exception access violation (0xC0000005),
	  Address: 0x00000001"
	
	You may also notice in the Windows NT Event Viewer the following error messages:
	
	  Event ID: 2002
	  Source: MSExchangeIMC
	  Category: Message Transfer
	  Description: A message from <alias@company.com> in temporary file
	  D:\exchsrvr\imcdata\in\KPFYMCMQB was received from company.com with 1
	  local recipients.
	
	  Event ID: 4117
	  Source: MSExchangeIMC
	  Category: Internal Processing
	  Description: An error was returned from the messaging software the
	  Internet Mail Service uses to process messages on the  Microsoft
	  Exchange Server. As a result, the message in spool file KPFYCMQB failed
	  to be delivered. The message has been moved to the  IMCDATA\IN\ARCHIVE
	  directory.
	
	  Event ID: 3039
	  Source: MSExchangeIMC
	  Category: Internal Processing
	  Description: The error 0x80040115 was encountered while trying to
	  communicate with the message store. An attempt to refresh the connection
	  will be made. If not successful, the service will be shut down.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.0. This problem was corrected in the latest Microsoft Exchange Server
	5.0 U.S. Service Pack. For information on obtaining the service pack, query on
	the following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage exc5 
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : winnt:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
