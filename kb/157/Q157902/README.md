---
layout: page
title: "Q157902: XCON: Can't Communicate w/ MTA via French X.25 Network"
permalink: /kb/157/Q157902/
---

## Q157902: XCON: Can't Communicate w/ MTA via French X.25 Network

{% raw %}

	Article: Q157902
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbother
	Last Modified: 09-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If Microsoft Exchange is configured to use a sub address, it cannot communicate
	with another Microsoft Exchange MTA or any other MTA through the French X.25
	network (Transpac). When Exchange accepts an X.25 call, it sends back a Call
	Accept packet with its own X.121 address.
	
	CAUSE
	=====
	
	The CCITT X.25 1988 recommendations state that there are two formats for this
	packet: Basic and Extended. If the Extended format is used, an Address block is
	optional and Microsoft Exchange operates successfully. However, the French X.25
	network uses the basic format. The problem occurs because the French X.25
	network automatically adds the local DTE address. The only time that this
	problem occurs is when you use a sub address.
	
	Microsoft Exchange fails to communicate over X.25 in France. The Extended format
	is only used if a specific complementary service is required. The Address block
	is only used if Call Forwarding is active. Because this service is not requested
	and the Address block is non-zero, the X.25 network clears the communication
	with an error code of 4A, which translates into Longer of Address non zero.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Exchange Server version 4.0.
	
	A supported fix is now available, but has not been fully regression-tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft Product
	Support Services for more information.
	
	
	MORE INFORMATION
	================
	
	The following components have been modified to handle special case for non-
	standard French X.25 network.
	
	EMSMTA.EXE
	MTACHECK.EXE
	MMIEXT.DLL
	SAALOG.DLL\**
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbother 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	
	=============================================================================
	

{% endraw %}
