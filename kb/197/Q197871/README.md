---
layout: page
title: "Q197871: XFOR: Question Mark Characters in Message of the Day"
permalink: /kb/197/Q197871/
---

## Q197871: XFOR: Question Mark Characters in Message of the Day

	Article: Q197871
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	Customers report that when entering a chat forum, the message of the day may
	contain numerous question marks (?) where characters should exist. The message
	of the day was created using Visual Basic (VB).
	
	CAUSE
	=====
	
	This has been reported by customers using Visual Basic to create the message. VB
	will display the ? character for values beyond ASCII 255.
	
	RESOLUTION
	==========
	
	Use character values within the 255 ASCII character range. Modifications to code
	may also prove successful.
	
	STATUS
	======
	
	This issue has been reported to Microsoft.
	
	
	Additional query words: mcischat
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
