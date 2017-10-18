---
layout: page
title: "Q270018: XCON: Subject Line in OOF Messages Is Not in English"
permalink: kb/270/Q270018/
---

## Q270018: XCON: Subject Line in OOF Messages Is Not in English

	Article: Q270018
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): exc55kbfaq
	Last Modified: 16-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you enable out-of-office (OOF) messages to the Internet on the Internet
	Mail Service, if the message is sent through the Microsoft Exchange Internet
	Mail Service, the text in the subject line of the OOF message may not be in
	English.
	
	NOTE: Within the Exchange Server organization, the OOF messages are in English.
	
	CAUSE
	=====
	
	This behavior can occur if the system default locale setting in the Regional
	Settings tool in Control Panel is not set to English.
	
	RESOLUTION
	==========
	
	To resolve this issue on a computer that is running Exchange Server:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Regional Settings, and then in the Locale box, click "English
	  (United States)".
	
	3. Click to select the "Set as system default locales" check box, and then click
	  Apply.
	
	4. Restart the computer.
	
	To resolve this issue on a computer that is running Microsoft Windows 2000:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Regional Options, and then on the General tab, click "English
	  (United States)" in the Your Locale box.
	
	3. Click the Set default button, and then click OK.
	
	4. Restart the computer.
	
	NOTE: In Windows 2000, if you change the system locale, you may need to install
	the necessary bitmap font files to support programs in the language you have
	selected. To do this, insert the Microsoft Windows NT Server or Windows 2000
	Server CD-ROM when you are prompted for it.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	To verify that the OOF messages are in English, follow these steps:
	
	1. Enable the OOF messages for one mailbox. If that mailbox is already able to
	  send OOF messages, disable the option, and then enable it again.
	
	2. Send a message to the mailbox to verify that the OOF message is in English.
	  Make sure that you send the test message from an external Internet domain.
	
	
	Additional query words: IMC out of facility IMS
	
	======================================================================
	Keywords          : exc55 kbfaq
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Hardware          : ALPHA x86
	Issue type        : kbprb
	Solution Type     : kbfix
	
	=============================================================================
	
