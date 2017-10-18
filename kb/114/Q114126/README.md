---
layout: page
title: "Q114126: PC DOS: Mail Does Not Release Memory After Notice 0"
permalink: kb/114/Q114126/
---

## Q114126: PC DOS: Mail Does Not Release Memory After Notice 0

	Article: Q114126
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:2.1c,3.0,3.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 2.1c, 3.0, 3.0b, on platform(s):
	   - the operating system: MS-DOS 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	With versions 2.1c through 3.0b of the Microsoft Mail for PC Networks MS-DOS
	client, you may have difficulties reading mail under low-memory conditions. You
	will receive Notice 0 (out of memory) and Notice 16 (error reading mail)
	messages every time you try to read mail.
	
	CAUSE
	=====
	
	When Mail reads a message, it attempts to load the entire text of the message
	into memory. If the message text is too large to fit in available conventional
	memory, Mail notifies you of the problem. However, it does not then release the
	memory it allocated. Until Mail is restarted, no messages can be read.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in versions 2.1c, 3.0, and 3.0b of
	Microsoft Mail for PC Networks, MS-DOS workstation. We are researching this
	problem and will post new information here in the Microsoft Knowledge Base as it
	becomes available.
	
	
	Additional query words: 2.10c 3.00 3.00b
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3
	Version           : WINDOWS:2.1c,3.0,3.0b
	
	=============================================================================
	
