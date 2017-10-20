---
layout: page
title: "Q182276: XFOR: Incorrect Envelope Information When Meeting Request Is For"
permalink: /kb/182/Q182276/
---

## Q182276: XFOR: Incorrect Envelope Information When Meeting Request Is For

{% raw %}

	Article: Q182276
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	- LinkAge Message Exchange, version 3.2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When a meeting request is forwarded from an OV/VM User to an Exchange Server
	user, it has incorrect envelope information.
	
	This problem only occurs when the meeting request is forwarded. If regular e-mail
	is used instead, then everything works fine.
	
	CAUSE
	=====
	
	Currently there is no cross-platform calendaring between Exchange Server users
	and OV\VM Users. However, it is not unusual to use the above method to manually
	perform cross-platform calendaring. When an OV/VM meeting request is forwarded
	to an Exchange Server user, the item arrives in the mail box as an e-mail
	message; it is not a calendar item that the user can accept or reject. If the
	user wants to add it to their calendar, then they must manually add it to the
	calendar.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Linkage Message Exchange version
	3.2.and Exchange Server version 5.5.
	
	
	A supported fix is now available, but has not been fully regression-tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	
	
	
	
	
	Additional query words: meeting request forward OV\VM
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword6 kbExchangeSearch kbExchange550 kbZNotKeyword2 kbLinkAgeSearch kbLinkAge320
	Version           : WINDOWS:4.0,5.0,5.5
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
