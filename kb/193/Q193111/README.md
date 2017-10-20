---
layout: page
title: "Q193111: XCLN: Encrypted Mail Unreadable by Exchange Client"
permalink: /kb/193/Q193111/
---

## Q193111: XCLN: Encrypted Mail Unreadable by Exchange Client

{% raw %}

	Article: Q193111
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0,8.0; :8.0,8.01,8.02,8.03
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	- Microsoft Outlook, Exchange Server Edition, version 8.0, used with:
	   - the operating system: Microsoft Windows versions 3.1, 3.11 
	- Microsoft Outlook 97, versions 8.0, 8.01, 8.02, 8.03 
	- Microsoft Outlook 98 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are using an Exchange or Outlook client, and you receive an encrypted
	message sent from an Outlook 98 client, the message may be unreadable. Other
	messages received with Key Management Server encryption are readable.
	
	CAUSE
	=====
	
	Outlook 98 supports S/MIME encryption; Exchange and Outlook client versions
	earlier than Outlook 98 do not.
	
	WORKAROUND
	==========
	
	Messages sent from an Outlook 98 client to an Exchange or pre-98 Outlook client
	should not be encrypted.
	
	Additional query words: 8.5
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbExchangeSearch kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3
	Version           : WINDOWS:4.0,5.0,8.0; :8.0,8.01,8.02,8.03
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
