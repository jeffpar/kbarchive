---
layout: page
title: "Q101671: PC WRmt: Inbox Shadowing Not Recommended"
permalink: /kb/101/Q101671/
---

## Q101671: PC WRmt: Inbox Shadowing Not Recommended

{% raw %}

	Article: Q101671
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Remote for Windows, version 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Inbox Shadowing is not recommended when using version 3.2 of Microsoft Mail
	Remote for Windows because of possible problems accessing the same mailbox as
	the one being used by Microsoft Mail for Windows.
	
	NOTE: For more information on Inbox Shadowing, please see the following article
	in the Microsoft Knowledge Base:
	
	  Q96718 PC Win: Description and Use of Inbox Shadowing
	
	CAUSE
	=====
	
	The Windows client is the controlling client. Therefore, if you delete messages
	with another client such as Mail Remote for Windows or Microsoft Mail for PC
	Networks, MS-DOS workstation, the Windows client does not reflect the
	deletions.
	
	For example, after you delete a message with Mail Remote for Windows or the
	MS-DOS client, the inbox shows 85 headers or messages.
	
	However, when you run the Windows client, it tells you that there are 127
	messages in the Inbox.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in version 3.2 of Microsoft Mail
	for PC Networks. We are researching this problem and will post new information
	here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailRemote320
	Version           : WINDOWS:3.2
	
	=============================================================================
	

{% endraw %}
