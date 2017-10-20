---
layout: page
title: "Q279800: XFOR: Comments Do Not Appear in Updated Lotus Notes Meeting"
permalink: /kb/279/Q279800/
---

## Q279800: XFOR: Comments Do Not Appear in Updated Lotus Notes Meeting

{% raw %}

	Article: Q279800
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 21-FEB-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you cancel, reschedule, or update a meeting in Lotus Notes Release 5 (R5)
	and you include comments in the cancellation notification or updated meeting
	invitation, Exchange Server attendees may receive the message, but the comments
	do not appear.
	
	CAUSE
	=====
	
	This problem can occur if the updated meeting contains text in the body of the
	meeting in addition to the comments that you included. In this scenario, the
	comments may be lost when Exchange Server converts the message from Notes to
	Exchange Server format.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
