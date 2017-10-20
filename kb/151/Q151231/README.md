---
layout: page
title: "Q151231: XFOR: MSExchangeMSMI Session Error EventID 2376"
permalink: /kb/151/Q151231/
---

## Q151231: XFOR: MSExchangeMSMI Session Error EventID 2376

{% raw %}

	Article: Q151231
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 26-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The MS Mail Connector Interchange (MSMI) logs a configuration problem in the NT
	event log when it tries to deliver a Non-Delivery Report (NDR) to a MS Mail
	user. The NDR is coming back from an adjacent 1984 X.400 Message Transfter Ageng
	(MTA). Microsoft Exchange Server acts as a messaging switch between MS Mail and
	any 1984 X.400 system. The Microsoft Exchange MTA hands the NDR to MSMI without
	passing a distinguished name (DN) for the recipeint of the NDR. Since the
	recipient's address is still an X.400 address, MSMI complains correctly that the
	proper MS Mail gateway component is not set up at the MS Mail Connector
	Postoffice.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in version 4.0 of Microsoft
	Exchange Server. This issue is corrected in Microsoft Exchange Service Pack1.
	
	MORE INFORMATION
	================
	
	The Microsoft Exchange MTA passes the DN to MSMI for further delivery of the NDR
	to the MS Mail based recipient.
	
	
	Additional query words: MSMIExchange NDR EventID 2568
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	
	=============================================================================
	

{% endraw %}
