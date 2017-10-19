---
layout: page
title: "Q102753: PC Win: No Notification for IPC-Type Messages"
permalink: /kb/102/Q102753/
---

## Q102753: PC Win: No Notification for IPC-Type Messages

	Article: Q102753
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.0b,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, versions 3.0, 3.0b, 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The version 3.0, 3.0b, and 3.2 Microsoft Mail for Windows mail spooler
	suppresses the New Mail notification for messages whose message type begins with
	"IPC."
	
	CAUSE
	=====
	
	This is was by design. IPC messages do not appear in the Inbox; therefore, it
	would be undesirable to ring the bell and display the New Mail icon.
	
	This also implies that if you are a developer writing an application that uses
	IPC-type messages, you need to poll for new mail.
	
	Additional query words: 3.00 3.00b 3.20 Simple MAPI
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail300 kbMail320 kbMail300b
	Version           : WINDOWS:3.0,3.0b,3.2
	
	=============================================================================
	
