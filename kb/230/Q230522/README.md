---
layout: page
title: "Q230522: XCLN: X.400 Address Not Displayed in Message Body"
permalink: /kb/230/Q230522/
---

## Q230522: XCLN: X.400 Address Not Displayed in Message Body

{% raw %}

	Article: Q230522
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:2000,97,98
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook 2000 
	- Microsoft Outlook 97 
	- Microsoft Outlook 98 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	In Microsoft Outlook, only the sender's Display Name of the original message is
	added to the body when a message is forwarded or replied to. If the recipient
	wants to send mail to the original sender, only the Display Name is available.
	In a Microsoft Exchange Server organization, it is possible to look up the
	address in the global address list; however, if the original sender is outside
	of the Exchange Server organization and has no custom recipient entry, it may be
	impossible to find the e-mail address of the original sender.
	
	MORE INFORMATION
	================
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	Outlook uses the following registry key to allow the user to choose which address
	types are included with full address information in the message body:
	
	  HKEY_LOCAL_MACHINE/Software/Microsoft/Exchange/Client/Options/FullAddressInText
	
	SMTP, FAX, and COMPUSERVE are the default entries. To add the X.400 address type,
	change the value from:
	
	  SMTP COMPUSERVE FAX
	
	to
	
	  SMTP COMPUSERVE FAX X400
	
	NOTE: Exchange Server X.500 addresses may be included by using the EX address
	type.
	
	This change takes effect immediately, with no need to restart the client. When
	you reply or forward messages, they will contain the X.400 address of the sender
	if the sender is a native X.400 user.
	
	Additional query words: X400 X500
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbExchangeSearch kbExchange550 kbZNotKeyword2 kbOutlook2000Search kbOutlook97Search kbOutlook98Search kbZNotKeyword3
	Version           : WINDOWS:2000,97,98
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
