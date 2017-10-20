---
layout: page
title: "Q125256: PC Win: Saving Changes in Large Mail Message Truncates Message"
permalink: /kb/125/Q125256/
---

## Q125256: PC Win: Saving Changes in Large Mail Message Truncates Message

{% raw %}

	Article: Q125256
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.0b,3.2,3.2a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, versions 3.0, 3.0b, 3.2, 3.2a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In versions 3.0, 3.0b, 3.2, and 3.2a of Microsoft Mail for Windows, if you
	receive a message larger than 32K, the following message appears:
	
	  The message is too large to fit into memory
	  all at once. Some of it will not be displayed.
	
	When you close the message, you will be prompted to save changes. If you choose
	Yes, the message will be truncated. Also, if there are references to attachments
	in the message, they may be lost if they fall beyond the 32K boundary.
	
	CAUSE
	=====
	
	The Windows Mail client has a maximum display size of 32K. MS-DOS Mail clients
	and Mail gateways can send messages that exceed this limit.
	
	RESOLUTION
	==========
	
	To prevent truncation of the message, choose No when prompted to save changes.
	To read the entire message, choose Save As from the File menu to save the
	message to your hard disk drive. You can then open the saved message in a text
	editor and view its entire text.
	
	MORE INFORMATION
	================
	
	If you make any changes to a message, you are prompted to save your changes when
	you close the message:
	
	  Do you want to save changes to <message subject> in '<current
	  folder>'?
	
	Choosing Yes will truncate large messages. The next time you open the message,
	you won't see the warning message. You will no longer be able to print or save
	the entire message.
	
	
	Additional query words: 3.00 3.00b 3.20 3.20a
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail300 kbMail320 kbMail300b kbMail320a
	Version           : WINDOWS:3.0,3.0b,3.2,3.2a
	
	=============================================================================
	

{% endraw %}
