---
layout: page
title: "Q268565: XWEB: Contact Created in OWA Can't Be Added As Recipient in OL"
permalink: /kb/268/Q268565/
---

## Q268565: XWEB: Contact Created in OWA Can't Be Added As Recipient in OL

	Article: Q268565
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook Web Access, version 5.5 Service Pack 3 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you create a personal contact in your Microsoft Outlook Web Access (OWA)
	mailbox, and then you log off of OWA and on to your Microsoft Outlook Messaging
	Application Programming Interface (MAPI) client, you are unable to add the
	newly-created contact as a recipient to an e-mail message by clicking the To:
	button and choosing the contact from the contact address list.
	
	CAUSE
	=====
	
	The automatic Check Name function in the Outlook MAPI client is not available in
	OWA. Therefore, when you save a new contact in OWA, the e-mail address does not
	resolve and the behavior in the "Symptoms" section of this article occurs.
	
	WORKAROUND
	==========
	
	To work around this behavior, you can use either of the following methods:
	
	Method 1:
	
	Create contacts in the Outlook client instead of in OWA.
	
	Method 2:
	
	To resolve this behavior on a per-contact basis, open the contact created in OWA
	by opening the contacts folder, selecting the contact, and then making and
	saving any changes.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words: OWA
	
	======================================================================
	Keywords          :  
	Component         : WebClient
	Technology        : kbOutlookSearch kbOWASearch kbOWA550SP3
	Version           : WINDOWS:5.5
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
