---
layout: page
title: "Q186390: XCLN: Macintosh Client Adds Characters to Paste in 4D Database"
permalink: /kb/186/Q186390/
---

## Q186390: XCLN: Macintosh Client Adds Characters to Paste in 4D Database

{% raw %}

	Article: Q186390
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Macintosh client, version 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you are using a 4D Macintosh database for tracking data, and you receive
	strings of alphanumeric characters in a message body in Exchange and then copy
	this information from the message and paste it into the 4D Macintosh database,
	you may have trouble querying on the information pasted into the database.
	
	This procedure works fine with the Exchange Macintosh client version 4.0 Service
	Pack 2, but fails with all clients thereafter, including the Microsoft Outlook
	Macintosh client.
	
	CAUSE
	=====
	
	The Exchange client erroneously adds characters to the end of the string.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Exchange Macintosh client,
	version 5.0.
	
	
	A supported fix is now available, but has not been fully regression-tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbExchangeSearch kbExchangeClientSearch kbExchange500Mac
	Version           : 5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
