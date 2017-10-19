---
layout: page
title: "Q175475: XFOR: Information Store May Incorrectly Stamp Time Zone Info"
permalink: /kb/175/Q175475/
---

## Q175475: XFOR: Information Store May Incorrectly Stamp Time Zone Info

	Article: Q175475
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Under certain circumstances, messages sent to an external SMTP address from a
	computer running Microsoft Exchange Server Internet Mail Service appear to have
	been sent 13 hours in the future.
	
	This problem occurs when all of the following three conditions are met:
	
	- The time zone setting on the server is set to (GMT+1200) Wellington,
	  Auckland.
	
	- The "Automatically Adjust Clock for Daylight Saving Changes" check box is
	  selected.
	
	- It is daylight saving time in the country where the computer running the
	  Internet Mail Service is located.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server,
	version 5.0.
	
	This problem has been corrected in the latest U.S. Service Pack for Microsoft
	Exchange Server version 5.0. For information on obtaining the Service Pack,
	query on the following word in the Microsoft Knowledge Base:
	
	  SERVPACK
	
	
	Additional query words: IMS IMC +1300
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : winnt:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
