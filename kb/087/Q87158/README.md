---
layout: page
title: "Q87158: Mac Wkst: Special Folders"
permalink: /kb/087/Q87158/
---

## Q87158: Mac Wkst: Special Folders

{% raw %}

	Article: Q87158
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for AppleTalk Networks, version 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	There are folders that may be required by version 3.1 of Microsoft Mail for the
	Macintosh that are more than just mail storage areas:
	
	Outbox
	------
	
	This folder is created locally. Mail is placed in the Outbox during offline
	operation. The Outbox remains visible when empty and can be deleted by the user.
	The labels in the Outbox read TO rather than FROM and LAST MODIFIED rather than
	RECEIVED.
	
	When a connection to a mail server is made, the Outbox is checked to determine if
	there is any outgoing mail queued for the server. If it does, the user is
	notified by a dialog box and asked if the outgoing mail should be sent.
	
	Sent Mail
	---------
	
	The user can set a preference to store any sent mail on the server or locally.
	The initial location of a user's sent mail is determined by the user's folder
	parameter in Server Settings. If only Local or only Server folder creation is
	enabled, then the Sent Mail folder will be created in the appropriate location.
	If both types are enabled, the sent mail will be created on the server by
	default. Sent Mail folders remain visible when empty, and can be deleted.
	
	Wastebasket
	-----------
	
	The Wastebasket folder contains any mail deleted from any other folder during a
	mail session. The Wastebasket will be emptied upon logout. The Wastebasket
	cannot be deleted.
	
	Additional query words: 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailATN310
	Version           : WINDOWS:3.1
	
	=============================================================================
	

{% endraw %}
