---
layout: page
title: "Q157016: XCLN: Saving an Encrypted Message to the IS Can Delete Content"
permalink: /kb/157/Q157016/
---

## Q157016: XCLN: Saving an Encrypted Message to the IS Can Delete Content

{% raw %}

	Article: Q157016
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 15-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 3.x client, version 4.0 
	- Microsoft Exchange Windows NT client, version 4.0 
	- Microsoft Exchange Windows 95/98 client, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you save an encrypted message to the Microsoft Exchange Information Store
	(IS) twice, while the message is still open in the Microsoft Exchange client,
	the text in the body of the message might be deleted.
	
	CAUSE
	=====
	
	When you save an open, encrypted message to the IS, the body of the message is
	encrypted and then deleted. This change will not be reflected in the open
	message. If you perform another save while the message is still open, the now
	empty body of the message will be encrypted and re-written to the IS, causing
	the original message content to be deleted.
	
	WORKAROUND
	==========
	
	After you save an encrypted message, close the message window before saving it
	again.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft Exchange clients,
	version 4.0, listed at the beginning of this article. This problem was corrected
	in Microsoft Exchange Server 4.0 U.S. Service Pack 4. For information on
	obtaining the service pack, query on the following word in the Microsoft
	Knowledge Base:
	
	  " SERVPACK" (without the quotation marks)
	
	Additional query words: Outlook
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT kbExchange400Win95
	Version           : WINDOWS:4.0
	
	=============================================================================
	

{% endraw %}
