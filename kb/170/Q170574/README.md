---
layout: page
title: "Q170574: MDG: One Mail Message Floods Windows Mail Client"
permalink: kb/170/Q170574/
---

## Q170574: MDG: One Mail Message Floods Windows Mail Client

	Article: Q170574
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	One message is retrieved repeatedly with the Windows Mail client. The first copy
	is marked unread, but all other copies are marked read. The only way to stop the
	new message is to log out of Mail. After you log back on, the problem starts
	again.
	
	CAUSE
	=====
	
	The user's Hex.key file is either locked open or marked read-only.
	
	RESOLUTION
	==========
	
	Break the file lock or remove the read-only attribute. The key and mbg files
	will need to be reset by using a manual reset or the Mailq16 utility. The MMF
	could now be corrupted as well. Rename the current MMF and create a new MMF the
	next time you log on to Mail. Then import the old MMF into the new file.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail350
	Version           : WINDOWS:3.5
	Issue type        : kbprb
	
	=============================================================================
	
