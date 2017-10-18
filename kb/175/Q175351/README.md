---
layout: page
title: "Q175351: XWEB: OWA Send Does Not Work After Canceling Security Dialog"
permalink: kb/175/Q175351/
---

## Q175351: XWEB: OWA Send Does Not Work After Canceling Security Dialog

	Article: Q175351
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
	
	When you attempt to send a message using the Outlook Web Access client on a
	Windows 3.x system, the Send button does not work.
	
	CAUSE
	=====
	
	If you use Microsoft Internet Explorer, this problem occurs after you click the
	Send button. The browser security dialog then displays the following message:
	
	  You are about to send information over the Internet. It might be
	  possible for other people to see what you are sending. Do you want to
	  continue?
	
	If you click "No" before sending, the Send button no longer functions.
	
	If you use Netscape Navigator, a security dialog similar to the following is
	displayed:
	
	  Any information you submit is insecure and could be observed by a third
	  party while in transit. If you are submitting passwords, credit card
	  numbers, or other information you would be safer to cancel this
	  submission.
	
	If you cancel the transmission, the Send button no longer functions.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Outlook Web Access
	version 5.5. We are researching this problem and will post new information here
	in the Microsoft Knowledge Base as it becomes available.
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbOWASearch kbOWA550
	Version           : WINDOWS:5.5
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
