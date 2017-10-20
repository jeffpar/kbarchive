---
layout: page
title: "Q275504: XCON: Extra Space Is Inserted in Long Subject Lines"
permalink: /kb/275/Q275504/
---

## Q275504: XCON: Extra Space Is Inserted in Long Subject Lines

{% raw %}

	Article: Q275504
	Product(s): Microsoft Exchange
	Version(s): 5.0,5.5
	Operating System(s): 
	Keyword(s): BoS2000
	Last Modified: 28-JAN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	- Microsoft Outlook 2000 
	- Microsoft Outlook 98 
	- Microsoft Outlook 97 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a message is sent from an Exchange Server client that uses the Exchange
	Transport as its primary method of delivery, and that message contains a subject
	field that is longer than 65 characters and contains least one space in those 65
	characters, when the message is processed by the Internet Mail Service, a space
	may be added to the message in the 65th character, and another space is inserted
	every 73 characters after that space. Because of this, the subject field may
	contain words that are broken. For example, if you send a message with the
	following subject:
	
	  Thank you for using our product. We sincerely hope that our product exceeds
	  all of your expectations.
	
	The message is received at the destination with the following subject line:
	
	  Thank you for using our product. We sincerely hope that our prod uct exceeds
	  all of your expectations.
	
	A space is added between the letter "d" and the letter "u" in the word "product."
	If this message is replied to repeatedly, the breaks become more numerous and
	more apparent because a reply is generally preceded by "Re:", which changes the
	location of the 65th character.
	
	CAUSE
	=====
	
	This issue occurs only when an e-mail message passes from the message transfer
	agent (MTA) to the Internet Mail Service for submittal to a remote Internet
	host. If the message is sent within a site, the MTA handles the message without
	any breaks in the subject field. If the message is sent directly through Simple
	Mail Transfer Protocol (SMTP) to the Internet Mail Service, the message also
	arrives without any breaks.
	
	This issue occurs when the MTA passes the message to the Internet Mail Service.
	The MTA creates a file in the Exchsrvr\Imcdata\Out folder. The file is a text
	file that contains the e-mail message. Because of the way that the MTA creates
	this file (for the use of the Internet Mail Service), the subject field is
	automatically wrapped to a new line after the first 65 characters, and then
	wrapped again every 73 characters after that.
	
	MORE INFORMATION
	================
	
	This issue does not occur if the Outlook client is running in Internet Mail Only
	(IMO) mode. For information about changing the mail services mode of your
	Outlook client, see the "About changing e-mail configurations" Outlook Help
	topic.
	
	Additional query words: long insert characters fragmented sbs IMS
	
	======================================================================
	Keywords          : BoS2000 
	Technology        : kbOutlookSearch kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2 kbOutlook2000Search kbOutlook97Search kbOutlook98Search kbZNotKeyword3
	Version           : :5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
