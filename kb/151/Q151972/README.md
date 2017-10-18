---
layout: page
title: "Q151972: XADM: Message Limits Incorrectly Calculated After 5.0 Upgrade"
permalink: kb/151/Q151972/
---

## Q151972: XADM: Message Limits Incorrectly Calculated After 5.0 Upgrade

	Article: Q151972
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 27-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After a Microsoft Exchange Server computer running Service Pack 3 or 4 has been
	upgraded to Microsoft Exchange Server 5.0, if you had incoming and/or outgoing
	message size limits on your mailbox, you may receive non-delivery reports (NDRs)
	when you try to send mail. This will occur although the message being sent is
	well under the specified limit on the mailbox. The NDR will look similar to the
	following:
	
	  Your message did not reach some of the intended recipients.... Either the
	  message size exceeds the maximum allowed for the recipient or the transport,
	  or you have exceeded the storage limit on your mailbox.
	
	CAUSE
	=====
	
	The information store is incorrectly calculating the message limits, this error
	causes the limit to be a negative number, resulting in the failure and NDR.
	
	
	WORKAROUND
	==========
	
	Turn off message limits on the mailbox.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.0. This problem was corrected in the latest Microsoft Exchange 5.0
	Server U.S. Service Pack. For information on obtaining the service pack, query
	on the following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	
	Additional query words: storage quota
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : winnt:5.0
	Issue type        : kbbug
	
	=============================================================================
	
