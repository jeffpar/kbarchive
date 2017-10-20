---
layout: page
title: "Q163816: XCLN: How to Suppress the Mail Header when Printing Message"
permalink: /kb/163/Q163816/
---

## Q163816: XCLN: How to Suppress the Mail Header when Printing Message

{% raw %}

	Article: Q163816
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0; Win95:4.0,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	- Microsoft Exchange Client for Windows 95, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you print a message from a Microsoft Exchange Windows Client, there is no
	built in feature that will allow you to suppress the mail header. This is by
	product design. This article gives a workaround that you may use to suppress the
	message header if you have WordMail installed and use it as the default email
	editor.
	
	MORE INFORMATION
	================
	
	Some people would like to only print the message body and not the entire message
	header that includes the mailbox user's name. The reason for this may vary, but
	the most common reason is a delegate opening an owner's mailbox, printing mail
	for the owner, and the owner does not want their name on the message when it is
	printed.
	
	WORKAROUND
	==========
	
	To suppress the message header, follow these steps:
	
	1. Enable Word as the default editor. To do this, select WordMail Options on the
	  Compose menu and select Enable Word as Email Editor.
	
	2. Open the message and highlight the message body.
	
	3. Select Print on the File menu, click the Current Selection button, and then
	  click OK.
	
	This will print only the message body of the message.
	
	If you are willing to use WordMail as your default editor, you can record the
	steps one time, turn them into a macro, and assign it to a button on the Word
	toolbar. From now on, you just have to open the message and hit the button
	created for the macro to print the message without the message header.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbExchangeClientSearch kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT kbExchange500NT
	Version           : WINDOWS:4.0,5.0; Win95:4.0,5.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
