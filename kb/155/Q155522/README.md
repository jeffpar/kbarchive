---
layout: page
title: "Q155522: XADM: SP2 or SP3 Server Upgrade Fails with 281 and 1171 Errors"
permalink: /kb/155/Q155522/
---

## Q155522: XADM: SP2 or SP3 Server Upgrade Fails with 281 and 1171 Errors

{% raw %}

	Article: Q155522
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt upgrade Microsoft Exchange Server version 4.0 with Microsoft
	Exchange Service Pack 2 (SP2) or 3 (SP3), the following errors might be
	displayed:
	
	  Error 281 Could not create object X509-Cert because the directory service
	  reported the following error: An internal processing error has occurred:
	  directory information tree error. Try restarting the application or the
	  Microsoft Exchange Server computer, or both.
	
	  Error 1171 Exception e0010004 has occurred with parameters -1603 and 0
	  (Internal ID 20602db). Please contact Microsoft Product Support Services for
	  assistance.
	
	CAUSE
	=====
	
	These errors will be reported when Event Logging on Directory Access is set to
	level 4 or above, this is Maximum logging.
	
	
	WORKAROUND
	==========
	
	To workaround these errors, turn event logging down and restart the upgrade. You
	can turn down the event logging by following these steps:
	
	1. Start the Microsoft Exchange Administrator program.
	
	2. Select the Microsoft Exchange Server that you are attempting to upgrade in
	  the left-hand pane by clicking the correct Site, Servers, and then the Server
	  name.
	
	3. Double-click the Directory Service in the right-hand pane.
	
	4. Click the Diagnostics Logging Tab.
	
	5. Click Directory Access.
	
	6. Set the Logging Level to Medium or below.
	
	7. Click OK.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem was corrected in the latest Microsoft Exchange Service
	Pack. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: SP2 SP3
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	
	=============================================================================
	

{% endraw %}
