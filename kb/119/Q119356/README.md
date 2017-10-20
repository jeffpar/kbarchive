---
layout: page
title: "Q119356: Multi-Language Clients Append Extended Headers"
permalink: /kb/119/Q119356/
---

## Q119356: Multi-Language Clients Append Extended Headers

{% raw %}

	Article: Q119356
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-FEB-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, version 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In messages sent from the English version of the Microsoft Mail Windows client
	to another language version of the Windows client, the extended header
	information is added to the text of the message.
	
	If you send a message from a particular language version of Microsoft Mail for
	Windows to the same language version of Microsoft Mail for Windows through the
	Microsoft Mail Connector, and the language selected in the Primary Language For
	Clients box in the properties for the Microsoft Mail Connector does not match
	the version of Microsoft Mail for Windows receiving the message, the extended
	header information is added to the text of the message.
	
	CAUSE
	=====
	
	The English-language client uses language-specific characters to locate the
	header information fields. The English-language client reads the extended header
	information and appends it to the beginning of the message body when it is
	unable to recognize the foreign language-specific labels.
	
	RESOLUTION
	==========
	
	To resolve this problem, match the primary language in the Microsoft Mail
	Connector to the language of the client.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Mail for Windows
	version 3.2.
	
	MORE INFORMATION
	================
	
	Extended header information examples are listed below:
	
	English to Spanish:
	
	  TO: test                  DATE: 03-08-94
	  CC:                       TIME: 12:44 PM
	  SUBJECT: att
	  PRIORITY:
	  ATTACHMENTS: xls.xls
	
	Spanish to English:
	
	  Microsoft Mail v3.0 IPM.Microsoft Mail.Note
	  De:  test
	  Para: Administrator
	  Asunto:  spanish version to english version
	  Fecha: 1994-03-10 13:05
	  Prioridad: Ident.
	  del mensaje: DE0CFCA6Ident.
	  del Mensaje principal: B4A878C0
	  Ident. de la conversacion: B4A878C0
	
	German to English:
	
	  Microsoft Mail v3.0 IPM.Microsoft Mail.Note
	  Von: Administrator
	  An:  Postmaster
	  Betreff:  AW: Huge message header
	  Datum: 1994-08-08 09:03
	  Prioritat:
	  Nachrichten-ID: C7F3A747
	  Conversation ID: C7F3A747
	
	This behavior is also exhibited when you use Exchange Server's MSMI. For example,
	if you send a message from a Spanish client to an Exchange Server MSMI (with the
	Primary Language set to English) and then to another Spanish client, the English
	header information is displayed in the body of the message.
	
	If the MSMI has the "Primary Language" set to "English", the headers are also
	deposited into the body of the message. If the MSMI has the "Primary Language"
	set to "Spanish", the message is interpreted correctly by the client.
	
	Exchange Server rewrites the entire Federal Information Processing Standards
	(FIPS) file outbound, and uses the "Primary Language" setting to determine how
	to rewrite the headers.
	
	To change the "Primary Language" used by the MSMI, on the Microsoft Mail
	Connector property page, click the Interchange page, the setting is "Primary
	Language for Clients".
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail320
	Version           : WINDOWS:3.2
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
