---
layout: page
title: "Q176037: XWEB: Blank To: Line When Deleting Recurring Appointment"
permalink: /kb/176/Q176037/
---

## Q176037: XWEB: Blank To: Line When Deleting Recurring Appointment

{% raw %}

	Article: Q176037
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook Web Access, version 5.5 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	In the Microsoft Outlook Web Access (OWA) client, a recurring meeting request is
	created and saved, but not sent. The meeting request is later opened and the
	user enters one or more names on the To: line and sends the meeting request. If
	the user now opens the meeting request and selects the Delete Series button, the
	following message is displayed:
	
	  The attendees have not been notified that this meeting has been
	  canceled. Press 'OK' to notify the attendees or 'Cancel' to
	  delete the meeting without notification.
	
	If the user selects OK, then the resulting cancellation message will have a blank
	To: line, rather than containing the attendees.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.5. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbOWASearch kbOWA550
	Version           : WINDOWS:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
