---
layout: page
title: "Q147091: XCLN: Message Gets Deleted From Wrong Folder"
permalink: kb/147/Q147091/
---

## Q147091: XCLN: Message Gets Deleted From Wrong Folder

	Article: Q147091
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 95/98 client, version 4.0 
	- Microsoft Exchange Windows 3.x client, version 4.0 
	- Microsoft Exchange Windows NT client, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If two Microsoft Exchange Inbox Assistant rules move a single message to two
	different folders, the incorrect message may get deleted. This happens when only
	one of the rules has an Alert action chosen to notify the user.
	
	MORE INFORMATION
	================
	
	This happens when two rules exist that move a message to different folders and
	the first rule includes an alert action. If you read and delete the message from
	within the alert box, the message will be deleted from the folder that the
	second rule copied it to.
	
	To avoid this, change the order of the rules so the rule that includes the alert
	action is at the end of the list.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft Exchange clients
	for Windows, version 4.0. This problem was corrected in the latest Microsoft
	Exchange Service Pack. For information on obtaining the Service Pack, query on
	the following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	
	Additional query words: 4.00 rule delete wrong folder
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT kbExchange400Win95
	Version           : WINDOWS:4.0
	
	=============================================================================
	
