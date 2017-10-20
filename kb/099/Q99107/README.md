---
layout: page
title: "Q99107: PC WRmt: Cannot Download Only Unread Messages"
permalink: /kb/099/Q99107/
---

## Q99107: PC WRmt: Cannot Download Only Unread Messages

{% raw %}

	Article: Q99107
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Remote for Windows, versions 3.0, 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you are using version 3.2 of Microsoft Mail Remote for Windows, there is no
	way to download only unread messages.
	
	CAUSE
	=====
	
	This problem is due to a limitation of EXTERNAL.EXE from versions 3.0 and 3.2 of
	Microsoft Mail for PC Networks.
	
	MORE INFORMATION
	================
	
	Suppose you are running Mail Remote for Windows at work. You want to retrieve
	all the messages from the postoffice and delete them from the mailbag ("Send All
	and Retrieve Unread Messages").
	
	Yet you are also running Mail Remote for Windows at home. From home, you want to
	use headers ("Send All and Retrieve Selected Messages") to see if there is any
	mail, read mail at home, and when you come into work the next day you would like
	that mail retrieved and stored in your message store file (MMF). However,
	messages you read at home are not retrieved to your office.
	
	To get them, you must change the setup at work, get headers, mark everything for
	retrieval, connect to Mail, and then change the setup back to receive all
	messages. However, there is no way to ask EXTERNAL.EXE for all unread messages.
	There also is no way to determine whether or not a read message already exists
	in the inbox, so downloading all messages would create duplicates.
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailRemote320
	Version           : WINDOWS:3.0,3.2
	
	=============================================================================
	

{% endraw %}
