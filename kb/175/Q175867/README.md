---
layout: page
title: "Q175867: XADM: How to Send Outlook Contacts to an Internet User"
permalink: /kb/175/Q175867/
---

## Q175867: XADM: How to Send Outlook Contacts to an Internet User

{% raw %}

	Article: Q175867
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.0,5.5,8.0,8.01,8.02,8.03
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	- Microsoft Outlook 97, versions 8.0, 8.01, 8.02, 8.03 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Exchange Server with Microsoft Outlook as the client, if you send
	an SMTP mail message with an Outlook Contact attached to an Internet user who is
	also an Exchange Server user running Outlook as the client, the recipient will
	not receive the Outlook Contact. The recipient's mail may either have no
	attachment or have an attachment that appears as a blank embedded message.
	
	WORKAROUND
	==========
	
	To send Outlook Contacts over the Internet Mail Service, try one of the
	following two methods enabling Rich Text Format(RTF).
	
	1. From the Outlook Client, create Personal Address Book entries for those SMTP
	  (Internet) recipients you intend to send Outlook Contacts to. Make sure to
	  enable "Always send to this recipient in Microsoft Exchange rich text
	  format."
	
	  -or-
	
	2. From the computer running Exchange Server, change the Internet Mail Service
	  setting for "Send Microsoft Exchange rich text formatting" to Always. This is
	  set under the Internet Mail tab and Interoperability option. NOTE: This
	  solution is the less desirable option.
	
	To receive contacts you do not need to make any changes.
	
	MORE INFORMATION
	================
	
	If you are performing Directory Replication between two sites via the Internet
	Mail Service connector, then Contact attachments are delivered correctly.
	
	Additional query words: XCLN
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbOutlook97 kbZNotKeyword2 kbOutlook97Search kbZNotKeyword3 kbOutlook801 kbOutlook802 kbOutlook803
	Version           : :4.0,5.0,5.5,8.0,8.01,8.02,8.03
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
