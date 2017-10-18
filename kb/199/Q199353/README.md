---
layout: page
title: "Q199353: XFOR: Behavior of an Updated Invitation to Notes from Outlook"
permalink: kb/199/Q199353/
---

## Q199353: XFOR: Behavior of an Updated Invitation to Notes from Outlook

	Article: Q199353
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	An update received on a previously accepted meeting invitation from Outlook is
	registered by the Lotus Notes invitee as a new meeting request.
	
	While it is expected that a resending of an original meeting invitation would be
	registered as an update, this is not true for invitations received by a Notes
	attendee from Outlook. Consequently, the new invitation will not act as an
	update, and will therefore not delete the old meeting or provide any options to
	update the original invitation.
	
	MORE INFORMATION
	================
	
	Consider the following example:
	
	1. Using Outlook, you send a meeting invitation to a Notes user.
	
	2. The invitee accepts the invitation in Notes, and sends an Acceptance message.
	  (To confirm the acceptance in Notes, open and check the Acceptance message.)
	
	3. In Outlook, open the original invitation, and invite other invitees.
	
	When the Notes invitee who accepted the meeting earlier opens the new invitation,
	it will be treated as a separate invitation.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbinfo
	
	=============================================================================
	
