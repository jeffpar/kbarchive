---
layout: page
title: "Q176185: XFOR: 1251 Character Sets Not Preserved on Incoming IMS Message"
permalink: /kb/176/Q176185/
---

## Q176185: XFOR: 1251 Character Sets Not Preserved on Incoming IMS Message

	Article: Q176185
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Messages sent with Russian Athena containing the Windows-1251 character set,
	when downloaded via POP, contain body corruption.
	
	CAUSE
	=====
	
	During inbound processing, the Internet codepage property (PR_INTERNET_CPID) is
	being set only if the Iso codepage of the incoming character set is not a
	Windows codepage. Windows 1251, KOI8-R, and ISO- 8859-5 all fall in the 1251
	character set group, so without the original codepage information, Exchange
	always maps it using the MIME database, which maps it to KOI8-R. Therefore,
	messages coming in using Windows-1251 and ISO-8859-5 are sent out as KOI8-R. Now
	the Internet codepage property ALWAYS is set on inbound, so Exchange knows which
	character set to use on outbound.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.0. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	Additional query words: Internet Mail Service
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : WinNT:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
