---
layout: page
title: "Q99689: Mac Adm: Lost Details of GWRecips in PAB"
permalink: /kb/099/Q99689/
---

## Q99689: Mac Adm: Lost Details of GWRecips in PAB

{% raw %}

	Article: Q99689
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): WINDOWS:3.1a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for AppleTalk Networks, version 3.1a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Either of the following messages may be displayed immediately after moving a
	user with the Move User feature of the Mail Network Administrator program with
	version 3.1a of Microsoft Mail for AppleTalk Networks:
	
	- When selecting a gateway recipient from the Personal Address Book and
	  clicking the Details button, the following error message appears:
	
	  Unable to retrieve details for that item
	
	- When mailing to a gateway recipient selected from the Personal Address Book,
	  the message is immediately returned undeliverable with the following
	  message:
	
	  Could not be delivered because the recipient(s) have been removed
	
	CAUSE
	=====
	
	These problems occur if you extract and import users with the 3.1a Mail Network
	Administrator program. More specifically, after extracting a user with the 3.1a
	Network Administrator, Mail will not be able to retrieve details for any gateway
	recipients added to the Personal Address Book of that user. The details are lost
	in the transfer.
	
	RESOLUTION
	==========
	
	Currently, there is no resolution to this problem other than having the user
	re-create the gateway recipient in the Personal Address Book.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in version 3.1a of Microsoft Mail
	for AppleTalk Networks. This problem was corrected in version 3.1c.
	
	MORE INFORMATION
	================
	
	This only affects users who have manually added gateway recipients; it will not
	affect gateway recipients created by the Network Manager.
	
	Additional query words: 3.10a
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailATN310a
	Version           : WINDOWS:3.1a
	
	=============================================================================
	

{% endraw %}
