---
layout: page
title: "Q166952: WD97: Unable to Send to Fax Recipient from Word"
permalink: /kb/166/Q166952/
---

## Q166952: WD97: Unable to Send to Fax Recipient from Word

{% raw %}

	Article: Q166952
	Product(s): Word 97 for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbinterop kbusage word97
	Last Modified: 09-FEB-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you attempt to send a document from Word 97 to a Microsoft Fax recipient, the
	document may remain in the Microsoft Exchange Outbox and may not be faxed out.
	
	This problem occurs when you are using Microsoft Word 97, Microsoft Exchange, and
	Microsoft Fax.
	
	WORKAROUND
	==========
	
	To work around this problem, use any of the following methods.
	
	Method 1:
	
	Send another document from Word. If another document is sent, the previous
	document will be flushed from the Exchange Outbox and will be faxed.
	
	Method 2:
	
	Save the document and then Fax the document using the Microsoft Fax application
	rather than using the Send feature in Word.
	
	Method 3:
	
	Print the document using Microsoft Fax as the printer.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	MORE INFORMATION
	================
	
	The problem occurs when you use the Send To feature in Word. To use this
	feature, you would follow these steps:
	
	1. Create a document in Word.
	
	2. On the File menu, point to Send To, and click Mail Recipient or Fax
	  Recipient.
	
	Word will then attach the document to an Exchange e-mail message addressed to the
	fax recipient. The e-mail message goes to the Exchange outbox, where the
	Microsoft Fax application will pick it up and transmit it.
	
	The e-mail message gets "stuck" in the outbox and doesn't get transmitted until
	another e-mail messages is sent.
	
	REFERENCES
	==========
	
	For more information on troubleshooting faxing problems, please see the
	following articles in the Microsoft Knowledge Base:
	
	  Q137161 Isolating Fax Problems in Word
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbinterop kbusage word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : :
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
