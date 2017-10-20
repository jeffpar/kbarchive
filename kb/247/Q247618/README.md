---
layout: page
title: "Q247618: XCON: No Mail Flow from Exchange to MSMail, Events 2556 and 2369"
permalink: /kb/247/Q247618/
---

## Q247618: XCON: No Mail Flow from Exchange to MSMail, Events 2556 and 2369

{% raw %}

	Article: Q247618
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Microsoft Exchange Server 4.0 or 5.0, when you check the queue for messages
	that are to go out to Microsoft Mail for PC Networks, you may discover that the
	messages are not being delivered. Also, you cannot delete the oldest message.
	Event Viewer may register the following events in the application log:
	
	  Event ID 2556: The thread in MS Mail Connector that delivers to MS Mail has
	  detected an error in the MS Exchange MTA.
	
	  Event ID 2369: MS Mail Connector Interchange has failed to bind the Exchange
	  Message Transport. Check to see if Exchange Message Transport is running.
	
	CAUSE
	=====
	
	This behavior can occur when a corrupted message is preventing mail flow.
	
	RESOLUTION
	==========
	
	To resolve this behavior, find the oldest message, stop the MTA service, and
	then run the Mtacheck utility. Follow these steps:
	
	1. Find the oldest message in the queue, and note the date and time.
	
	2. Stop the Microsoft Exchange Message Transfer Agent (MTA) service.
	
	3. Make a backup copy of the Mtadata folder so you can restore it if the wrong
	  file is removed.
	
	4. In the Mtadata folder, find the .dat file that has the time and date stamp
	  closest to that of the oldest message in the queue, and then move it out of
	  the folder.
	
	5. Run the Mtacheck utility.
	
	6. Restart all Microsoft Exchange Server services that were running previously,
	  and then check the queue.
	
	7. Verify that the oldest message is not in the queue and that messages are
	  being transferred normally.
	
	MORE INFORMATION
	================
	
	For additional information about using Mtacheck, please see the following
	article in the Microsoft Knowledge Base:
	
	  Q148284 XCON: When and How to Use the Mtacheck Utility
	
	Additional query words: PO connector MTA backlog
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
