---
layout: page
title: "Q259018: GetNextTimedEvent Halts and Does Not Allow Background Tasks to R"
permalink: /kb/259/Q259018/
---

## Q259018: GetNextTimedEvent Halts and Does Not Allow Background Tasks to R

{% raw %}

	Article: Q259018
	Product(s): Microsoft Exchange
	Version(s): 5.5,5.5 SP1,5.5 SP2,5.5 SP3
	Operating System(s): 
	Keyword(s): exc55 exc55sp1 exc55sp2 exc55sp3
	Last Modified: 08-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 5.5 SP1, 5.5 SP2, 5.5 SP3 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When the information store process starts, an Event ID 7200 similar to the
	following may be logged:
	
	  Event ID: 7200
	  Source: MSExchangeIS Public
	  Type: Error
	  Category: General
	
	  Background thread FBackgroundTimedEvent halted due to error code 0x80004005.
	
	NOTE: The error code that is returned is not relevant and may vary.
	
	Background tasks do not run and the database may grow to a very large size.
	Online and offline defragmentation cannot perform maintenance, so old messages
	are not cleaned up and removed.
	
	CAUSE
	=====
	
	This problem can occur if there is invalid data in the TimedEvents table. This
	data can be an INVALID FILETIME variable or a date that was out of range (for
	example, 7/3/03). This results in an error when calling the EcSubtractFileTimes
	function.
	
	RESOLUTION
	==========
	
	To resolve this problem, contact Microsoft Product Support Services to help you
	repair the TimedEvents table.
	
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	Invalid data may enter the TimedEvents table when you try to synchronize the
	time of the server to an external time source.
	
	
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 exc55sp1 exc55sp2 exc55sp3 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2 kbExchange550SP1 kbExchange550SP2 kbExchange550SP3
	Version           : :5.5,5.5 SP1,5.5 SP2,5.5 SP3
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
