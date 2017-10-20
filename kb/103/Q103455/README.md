---
layout: page
title: "Q103455: PC Win: Err Msg: Message Too Large to Fit Into Mem. All At Once"
permalink: /kb/103/Q103455/
---

## Q103455: PC Win: Err Msg: Message Too Large to Fit Into Mem. All At Once

{% raw %}

	Article: Q103455
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.0b,3.1,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, versions 3.0, 3.0b, 3.1, 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In versions 3.0, 3.0b, 3.1, and 3.2 of Microsoft Mail for Windows, and version
	3.1 of Microsoft Mail for Windows for Workgroups, when you try to read a message
	that is the maximum size possible, the following warning appears and the last
	two characters of the message are truncated:
	
	  The message is too large to fit into memory all at once.
	  Some of it will not be displayed.
	
	A related problem occurs if the message contains an attachment as the last
	character. When the message is saved or sent, and then read again by the sender,
	Mail experiences a general protection (GP) fault.
	
	RESOLUTION
	==========
	
	Although too large to display in the Windows client, the message can be saved as
	a text file or printed in order to read the entire text.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in versions 3.0, 3.0b, 3.1, and 3.2
	of Microsoft Mail for Windows. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	To save the message as a text file:
	
	1. From the File menu, choose Save As...
	
	2. Name the file and choose the directory. The file can now be opened in a word
	  processor or text editor.
	
	To print the entire message:
	
	1. Select the message in the Inbox.
	
	2. From the File menu, choose Print...
	
	Additional query words: 3.00 3.00b 3.10 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail310 kbMail300 kbMail320 kbMail300b
	Version           : WINDOWS:3.0,3.0b,3.1,3.2
	
	=============================================================================
	

{% endraw %}
