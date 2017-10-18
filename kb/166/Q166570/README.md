---
layout: page
title: "Q166570: XFOR: IMS May Crash When Receiving Message from Pegasus Mail"
permalink: kb/166/Q166570/
---

## Q166570: XFOR: IMS May Crash When Receiving Message from Pegasus Mail

	Article: Q166570
	Product(s): Microsoft Exchange
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 01-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you send mail to a large distribution list (containing some invalid
	addresses) from a Pegasus Mail client to the Microsoft Exchange Server Internet
	Mail Service (IMS), the IMS may close. The IMS will log the following events:
	
	  9001:
	  An exception has occurred. Code: 0xc0000005 Flags: 0x00000000
	  Address: 0x77f7d2ef
	
	  4037:
	  An exception has occurred which was handled internally by the Internet
	  Mail Service.  This may have resulted in a message not being delivered.
	  Code: 0xc0000005 Flags: 0x00000000 Address: 0x77f7d2ef
	
	The Dr. Watson dialog box displays the following information as well:
	
	  An Application error has occurred and an application error log is being
	  generated.
	  MSECIMC.EXE
	  Exception: access violation (0xc0000005), Address: 0x77f64a55
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.0. This problem was corrected in the latest Microsoft Exchange Server
	5.0 U.S. Service Pack. For information on obtaining the service pack, query on
	the following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : 5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
