---
layout: page
title: "Q146836: XCLN: Unread Message Count Not Updated Correctly"
permalink: /kb/146/Q146836/
---

## Q146836: XCLN: Unread Message Count Not Updated Correctly

	Article: Q146836
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 3.x client, version 4.0 
	- Microsoft Exchange Windows NT client, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you create a second instance of the same Personal Folder (PST) in one profile
	and copy a message to one of them, the unread message count will only be updated
	correctly in one of the Personal Folders.
	
	
	MORE INFORMATION
	================
	
	Basically, what you are doing is creating two Personal Folders that point to the
	same file. Exiting the Microsoft Exchange client and logging back in will update
	the unread message counts correctly, but you will have to do this every time a
	change is made to the folder.
	
	STATUS
	======
	
	Microsoft Exchange does not support having multiple stores in one profile point
	to the same file. This is by design.
	
	
	Additional query words: 4.00
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange400 kbExchangeClientSearch kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT
	Version           : WINDOWS:4.0
	
	=============================================================================
	
