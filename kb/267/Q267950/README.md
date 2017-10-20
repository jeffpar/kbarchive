---
layout: page
title: "Q267950: XADM: Storage Limit Warning Messages Not in the Client Language"
permalink: /kb/267/Q267950/
---

## Q267950: XADM: Storage Limit Warning Messages Not in the Client Language

{% raw %}

	Article: Q267950
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 22-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you connect to your Exchange mailbox, you may receive a warning message
	stating that you have exceeded your mailbox size limit. The following text is an
	excerpt from the warning message:
	
	  Your mailbox has exceeded one or more size limits set by your administrator.
	  Your mailbox size is XXX KB.
	
	Although the message text is localized, note that the text in the message is
	different than the text for the client when connecting to the mailbox.
	
	CAUSE
	=====
	
	The server creates store messages by using the language of the client that
	accessed the mailbox for the last time. If you log on to your mailbox by using
	an English-language version of the Outlook client, the store creates the next
	warning message in the English language; if you log on to the same mailbox from
	another client by using a German-language version of Outlook, the next store
	warning message is created in the German language.
	
	The language that is used to log on the mailbox for the first time after you
	create the mailbox only determines the language of the standard folders (the
	Inbox, Outbox, Tasks, and so on) and has no influence on the store messages.
	
	In most cases, this problems is caused by third-party anti-virus software that
	connect to single mailboxes by using a language version that is different than
	the language of the client.
	
	WORKAROUND
	==========
	
	To work around this problem, log off of your mailbox, and then log on again.
	
	MORE INFORMATION
	================
	
	You can determine the language of all connected clients by using the Exchange
	Administrator program. To do this, expand your server object, click the private
	information store, and then click Property. On the Logons tab, click Columns,
	click the "locale ID", and then click Add.
	
	You can see the locale IDs, for example:
	
	  1033 - English (UK)
	  1031 - German
	  1038 - Hungarian
	
	For additional information about locale IDs, click the article number below to
	view the article in the Microsoft Knowledge Base:
	
	  Q221435 WD2000: Supported Language ID reference numbers (LCID)
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
