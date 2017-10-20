---
layout: page
title: "Q259065: XFOR: Lotus Notes SMTP Users Receive .unk Files"
permalink: /kb/259/Q259065/
---

## Q259065: XFOR: Lotus Notes SMTP Users Receive .unk Files

{% raw %}

	Article: Q259065
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you send an e-mail message to a Lotus Notes domain by using the Internet
	Mail Service (not the Microsoft Exchange Connector for Lotus Notes) the Lotus
	Notes recipient may receive a message that contains an attachment named either
	Att1.unk or C.dtf.
	
	CAUSE
	=====
	
	This issue can occur if you sent the message as Microsoft Rich Text. The Lotus
	Notes message transfer agent (MTA) may not correctly read the format of the
	message or attachment.
	
	RESOLUTION
	==========
	
	To resolve this issue:
	
	- On the Internet Mail tab in the properties of the Internet Mail Service,
	  click Advanced Options, and then change the Rich Text option to User.
	
	-or-
	
	- On the Internet Mail tab in the properties of the Internet Mail Service,
	  click Email Domains, create an entry for the Notes domain (SMTP domain), and
	  then select the option to never send Microsoft Rich Text to that domain.
	
	MORE INFORMATION
	================
	
	More information about which versions of the Lotus Notes SMTP MTA experience
	this issue can be found in a Lotus Customer Support Technote, number 145368,
	titled Text Attachments Appear as .UNK Files after Passing Through the SMTP MTA.
	This Technote is available from the following Lotus Web site:
	
	  http://www.lotus.com
	
	
	Microsoft provides third-party contact information to help you find technical
	support. This contact information may change without notice. Microsoft does not
	guarantee the accuracy of this third-party contact information.
	
	The third-party products that are discussed in this article are manufactured by
	companies that are independent of Microsoft. Microsoft makes no warranty,
	implied or otherwise, regarding the performance or reliability of these
	products.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
