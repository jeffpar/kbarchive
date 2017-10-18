---
layout: page
title: "Q146732: XCLN: Message Header Information Misaligned"
permalink: kb/146/Q146732/
---

## Q146732: XCLN: Message Header Information Misaligned

	Article: Q146732
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 20-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 95/98 client, version 4.0 
	- Microsoft Exchange Windows 3.x client, version 4.0 
	- Microsoft Exchange Windows NT client, version 4.0 
	- Microsoft Exchange MS-DOS client, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a single message is replied to numerous times, the message header
	information located in the message body may become misaligned. For example:
	
	After the first reply:
	
	  From:User
	  Sent:Saturday, June 1, 1996, 1:00 PM
	  To:User
	  Subject:Test
	
	After the message has been replied to numerous times:
	
	  From:User
	  Sent:Saturday, June 1, 1996, 1:00 PM
	  To:User
	  Subject:        RE:Test
	
	MORE INFORMATION
	================
	
	Message body text tabs are set to 1/2 inch; the indent for the reply text is 1/4
	inch. The tabs are currently not offset in a relative manner when indenting the
	reply text.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in version 4.0 of the Microsoft
	Exchange clients listed at the beginning of this article. We are researching
	this problem and will post new information here in the Microsoft Knowledge Base
	as it becomes available.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400DOS kbExchange400NT kbExchange400Win95
	Version           : WINDOWS:4.0
	Issue type        : kbbug
	
	=============================================================================
	
