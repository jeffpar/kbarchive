---
layout: page
title: "Q198810: XWEB: Mail Doesn't Get Sent to Contacts w/SMTP in E-mail Address"
permalink: kb/198/Q198810/
---

## Q198810: XWEB: Mail Doesn't Get Sent to Contacts w/SMTP in E-mail Address

	Article: Q198810
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook Web Access, version 5.5 
	- Microsoft Outlook Web Access, version 5.5 Service Packs 1, 2, 3 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you attempt to send a new mail message to a Contact through Outlook Web
	Access (OWA) and the Contact has "SMTP" as part of the e-mail address, a
	non-delivery report (NDR) is returned and looks similar to the following:
	
	  Your message did not reach some or all of the intended recipients.
	
	  To: 'smtp\:testuser@microsoft.com' Subject: test Sent: 1/4/99 7:28:04 AM
	
	  The following recipient(s) could not be reached:
	
	  'smtp\:testuser@microsoft.com' on 1/4/99 7:28 AM
	
	  The recipient name is not recognized
	  MSEXCH:IMS:microsoft:northamerica:RED-IMC-02 0 (000C05A6) Unknown Recipient
	
	CAUSE
	=====
	
	When CDO/MAPI resolves the name or address, CDO/MAPI actually reads the address
	type as SMTP:SMTP. The address cannot be parsed in OWA as a valid SMTP address,
	and returns an NDR.
	
	WORKAROUND
	==========
	
	To work around this problem, do not type "SMTP" as a part of the e-mail address
	for a Contact in OWA.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	MORE INFORMATION
	================
	
	The Outlook client does not behave the same way because it will not allow you to
	type a colon into the e-mail Address Type.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbOWASearch kbOWA550 kbOWA550SP1 kbOWA550SP2 kbOWA550SP3
	Version           : WINDOWS:5.5
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
