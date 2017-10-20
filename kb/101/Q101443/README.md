---
layout: page
title: "Q101443: Mac Srv: Forwarded Message Points to Old Enclosure"
permalink: /kb/101/Q101443/
---

## Q101443: Mac Srv: Forwarded Message Points to Old Enclosure

{% raw %}

	Article: Q101443
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for AppleTalk Networks, versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Versions 3.0 and 3.1 of Microsoft Mail for AppleTalk Networks uses a single copy
	store architecture. This means that for a message/enclosure sent to many users
	on a Mail server, only one copy of the message/enclosure is created that each
	recipient accesses. The message/enclosure is not deleted until the last
	recipient deletes the message.
	
	When forwarding a message, a new message is created. However, if you are also
	forwarding an enclosure, this new message references the old enclosure. The
	enclosure is NOT duplicated.
	
	Additional query words: 3.00 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailATN300 kbMailATN310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	

{% endraw %}
