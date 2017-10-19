---
layout: page
title: "Q156720: XCLN: Date/Time Field Corruption in Macintosh Client"
permalink: /kb/156/Q156720/
---

## Q156720: XCLN: Date/Time Field Corruption in Macintosh Client

	Article: Q156720
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 05-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Macintosh client, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Periodically, the Received Date/Time fields get corrupted on version 4.0 of the
	Microsoft Exchange Macintosh client. This corruption occurs in both the viewer
	and the message.
	
	CAUSE
	=====
	
	The data and time resource can be flushed in low memory situations.
	
	A confirmed instance of this problem occurs when running zMail version 3.3.0 and
	the Microsoft Exchange Macintosh client simultaneously on a Macintosh with 8
	megabytes of RAM.
	
	WORKAROUND
	==========
	
	Do not run zMail version 3.3.0 and the Microsoft Exchange Macintosh client
	simultaneously.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft Exchange clients,
	version 4.0, listed at the beginning of this article. This problem was corrected
	in Microsoft Exchange Server 4.0 U.S. Service Pack 4. For information on
	obtaining the service pack, query on the following word in the Microsoft
	Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbHWMAC kbOSMAC kbExchangeSearch kbExchangeClientSearch kbExchange400Mac
	Version           : WINDOWS:4.0
	
	=============================================================================
	
