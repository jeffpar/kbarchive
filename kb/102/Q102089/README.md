---
layout: page
title: "Q102089: PC WRmt: Mail Message Formatting Changes"
permalink: /kb/102/Q102089/
---

## Q102089: PC WRmt: Mail Message Formatting Changes

	Article: Q102089
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Remote for Windows, version 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	A message that is created with version 3.2 of Microsoft Mail Remote for Windows
	gets reformatted for transmission and storage. Normally, the message has an 80
	character column width. This is a normal feature for Microsoft Mail for
	Windows.
	
	NOTE: When viewed by the Microsoft Mail Remote for MS-DOS Remote client, it has
	the 70 column width formatting.
	
	MORE INFORMATION
	================
	
	When the messages is transferred from the Windows mail message file (MMF) to the
	temporary storage used by Mail Remote for Windows, it gets reformatted. The
	original message is set to an 80 character column width, but the message that is
	sent has a 70 character column width.
	
	When the message is transferred back into the MMF Outbox, it is correctly
	reformatted.
	
	This is simply a design feature of Mail for Windows.
	
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailRemote320
	Version           : WINDOWS:3.2
	
	=============================================================================
	
