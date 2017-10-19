---
layout: page
title: "Q152902: XADM: Continuous Attempts to Publish Free/Busy Information"
permalink: /kb/152/Q152902/
---

## Q152902: XADM: Continuous Attempts to Publish Free/Busy Information

	Article: Q152902
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 29-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Microsoft Exchange, a countdown is set whenever the server schedule receives
	an unknown or Free/Busy notification. When the countdown reaches zero, the
	Free/Busy information is published.
	
	If the publish fails, the countdown is reset to the same wait. However, if the
	Public Folder server is gone, the time-out to determine this exceeds the
	countdown and the idle engine calls back for Microsoft Exchange to retry nearly
	immediately.
	
	WORKAROUND
	==========
	
	Use a doubling retry time-out, maximum of 30 minutes. After each failure, the
	time to the next attempt doubles until the wait peaks at once every 30 minutes.
	Once the Free/Busy information is published, the time-out restores to 30
	seconds.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem was corrected in Microsoft Exchange Server 4.0 U.S.
	Service Pack 2. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	MORE INFORMATION
	================
	
	Free/Busy publish retry rate after failure tended to be too high; therefore,
	almost all of the Microsoft Exchange Server time was spent in Free/Busy publish
	attempts and not giving any time to the user.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	
	=============================================================================
	
