---
layout: page
title: "Q86950: 3COM: Receiving Multiple Messages from the Gateway"
permalink: /kb/086/Q86950/
---

## Q86950: 3COM: Receiving Multiple Messages from the Gateway

{% raw %}

	Article: Q86950
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to 3Com 3+Mail, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When multiple copies of the same mail message are received from the Microsoft
	Mail Gateway to 3Com 3+Mail, there is probably a corrupt message stuck in the
	gateway queue.
	
	To clear out the queue, delete all files in the MFFPUT, MFFGET, and 3C-OUT
	directories. This deletes all messages being transferred between Microsoft Mail
	and 3+Mail. Once this is done, you can restart the gateway.
	
	
	Additional query words: 3.00 pcmail
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGate3COM3Plus300
	Version           : :3.0
	
	=============================================================================
	

{% endraw %}
