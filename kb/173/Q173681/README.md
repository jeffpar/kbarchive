---
layout: page
title: "Q173681: XADM: Renaming the Inbox Produces Unexpected Results"
permalink: /kb/173/Q173681/
---

## Q173681: XADM: Renaming the Inbox Produces Unexpected Results

{% raw %}

	Article: Q173681
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you are using Microsoft Exchange Client, you may notice unexpected results
	if you rename your Inbox while an IMAP client is also connected to the same
	mailbox.
	
	CAUSE
	=====
	
	Specific components within Exchange Server were not designed to catch the name
	change while an IMAP and Exchange Client were connected to the Inbox
	concurrently.
	
	STATUS
	======
	
	At the present time, this is not considered destabilizing so no changes to
	Exchange Server will be made. Additional information will be posted here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	To reproduce this behavior, follow these steps:
	
	1. Log on to your mailbox with an Exchange Client and an IMAP client at the same
	  time.
	
	2. Using Exchange Client, create a subfolder under the Inbox called "test."
	  Observe the result in the IMAP client; "Inbox/test" should appear.
	
	3. Using Exchange Client, rename "Inbox" to "newinbox.". Observe the result
	  again in the IMAP client; "newinbox/test" will now appear instead of
	  "Inbox/test".
	
	4. Close your IMAP client and then reopen it. "Inbox/test" now appears instead
	  of "newinbox/test".
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbinfo
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
