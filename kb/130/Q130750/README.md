---
layout: page
title: "Q130750: PC WRmt: Locked KEY File May Result in Lost Mail"
permalink: /kb/130/Q130750/
---

## Q130750: PC WRmt: Locked KEY File May Result in Lost Mail

	Article: Q130750
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Remote for Windows, version 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If Inbox shadowing is enabled but the .key file becomes locked before the mail
	message is completely downloaded, you will not get the message, and you will not
	get an error message.
	
	CAUSE
	=====
	
	The .key file is locked.
	
	MORE INFORMATION
	================
	
	Any messages waiting to be downloaded behind the current message will also not
	be delivered. As a result, you will not know if one or many messages are waiting
	to be delivered until the .key file becomes unlocked, and you download mail
	again.
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailRemote320
	Version           : WINDOWS:3.2
	
	=============================================================================
	
