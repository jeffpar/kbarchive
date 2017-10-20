---
layout: page
title: "Q186579: XCLN: Message Attachment May Be Hidden in English WinNT Client"
permalink: /kb/186/Q186579/
---

## Q186579: XCLN: Message Attachment May Be Hidden in English WinNT Client

{% raw %}

	Article: Q186579
	Product(s): Microsoft Exchange
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows NT client, version 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When the English Microsoft Exchange client version 5.0 for Windows NT is used to
	view a message containing an attachment, the Exchange client may fail to display
	the attachment. The attachment is still included in the message and can be
	selected if the user double-clicks in the appropriate location.
	
	WORKAROUND
	==========
	
	There are several ways to work around this problem.
	
	- Select the entire message body and change the font. The attachment will then
	  become visible.
	
	- Set WordMail to be the default e-mail editor. WordMail can be configured as
	  follows:
	
	  1. Install the Exchange client.
	
	  2. Install Microsoft Word with the WordMail option selected.
	
	  3. Start the Exchange client and select WordMail Options from the Compose
	     menu.
	
	  4. Make sure to select the "Enable Word as e-mail editor" option.
	
	- Install and use the English Outlook client on computers running Windows NT
	  Workstation.
	
	- Install and use the Exchange Windows 95 client on a computer running Windows
	  95.
	
	- Install and use a non-English double-byte character set (DBCS) Exchange
	  Windows NT client (such as Kanji) on a localized version of Windows NT.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the English version of the
	Microsoft Exchange Windows NT client, version 5.0.
	
	
	A supported fix is now available, but has not been fully regression-tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	
	MORE INFORMATION
	================
	
	This problem does not occur if the same message is viewed using the English
	Exchange Windows 95 client version 5.0, the Kanji Exchange Windows NT client
	version 5.0, or Microsoft Outlook. The English Outlook client does not exhibit
	this problem because Outlook uses Riched20.dll instead of Riched32.dll, which
	the Exchange client uses.
	
	The English Exchange Windows NT client is not the only application that displays
	this problem. If the message is saved as an RTF file and viewed within WordPad,
	the attachment's icon remains hidden.
	
	This problem occurs most often when a message is composed with unusual fonts on a
	double-byte character set (DBCS) workstation and is sent to recipients using
	non-DBCS workstations.
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchangeClientSearch kbZNotKeyword2 kbZNotKeyword3 kbExchange500NT
	Version           : 5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
