---
layout: page
title: "Q249019: XCLN: Opening Attach. in Public Folders in Exchange Client 5.0"
permalink: /kb/249/Q249019/
---

## Q249019: XCLN: Opening Attach. in Public Folders in Exchange Client 5.0

{% raw %}

	Article: Q249019
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 95/98 client, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Exchange Client 5.0 with Microsoft Word Mail set as your default
	e-mail editor, if messages in a public folder have been copied or dragged from
	another folder and you only have Author permission (read-only) on the folder in
	which the messages are located, you may not be able to open attachments in those
	messages.
	
	CAUSE
	=====
	
	This issue can occur because when you have only Author permission on a public
	folder, all messages in that folder, including attachments, are regarded as
	read-only. When Word Mail is set as your default e-mail editor and you attempt
	to open a message in a public folder where you only have Author access, the
	Exchange Client passes a flag to Word that signals that the file should be
	opened in protected mode. When Word opens files in protected mode, in-line
	objects cannot be edited. This behavior is by design.
	
	WORKAROUND
	==========
	
	To work around this issue, use one of the following five methods:
	
	- Use floating objects for the attachments instead of in-line attachments.
	
	- Use Outlook; Outlook ignores the instructions to open the document in protect
	  mode and assigns read-only permission based on the file system.
	
	- Select the attachment, copy it, and then paste it to a folder on the local
	  hard disk.
	
	- On the File menu, click Save As to save a copy of the attachment locally.
	
	- Post the message to the folder, rather than dragging the message from another
	  folder.
	
	Additional query words: wordmail
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange500Win95
	Version           : WINDOWS:5.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
