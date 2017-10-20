---
layout: page
title: "Q132855: Mac Wkst: Err Msg: A Field Was Not Large Enough..."
permalink: /kb/132/Q132855/
---

## Q132855: Mac Wkst: Err Msg: A Field Was Not Large Enough...

{% raw %}

	Article: Q132855
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for AppleTalk Networks, version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you compose or open a note in Microsoft Mail for AppleTalk Networks, the
	following error message may occur:
	
	  A field was not large enough to display all of its contents.
	
	CAUSE
	=====
	
	The maximum amount of text in a note is 32,767 characters. If the message is
	being opened, it is larger than 32,767 characters. If the message is being
	composed, the error will occur when text is inserted past 32,767 characters.
	
	WORKAROUND
	==========
	
	To read the message that is larger than 32,767 characters, select it from your
	Mailbox then from the Mail menu, choose Save Messages. This will save the
	message to a text file, which can be opened by any text editor, such as
	SimpleText.
	
	If the outgoing message is too large, compose the message in a text editor, then
	attach the saved text file to a message to send it. Attachments can be of any
	size.
	
	Additional query words: 3.10 too big mac
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailATN310
	Version           : WINDOWS:3.1
	
	=============================================================================
	

{% endraw %}
