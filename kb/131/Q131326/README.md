---
layout: page
title: "Q131326: XCLN: Err Msg: An Object Could Not Be Moved/Copied"
permalink: /kb/131/Q131326/
---

## Q131326: XCLN: Err Msg: An Object Could Not Be Moved/Copied

{% raw %}

	Article: Q131326
	Product(s): Microsoft Exchange
	Version(s): 4.0 5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 13-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange MS-DOS client, versions 4.0, 5.0 
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you try to move or copy a message to a public folder, you receive one of
	the following error messages:
	
	Windows Client Move
	-------------------
	
	  An item could not be moved. You do not have permission to create a message in
	  this folder.
	
	Windows Client Copy
	-------------------
	
	  An item could not be copied. You do not have permission to create a message
	  in this folder.
	
	MS-DOS Client Move
	------------------
	
	  One or more of the items you selected could not be moved.
	  You do not have permission to create a message in this folder.
	  Microsoft Exchange Server Information Store
	  ID No: 581D - 40680 - 000004FF - 07DF
	
	MS-DOS Client Copy
	------------------
	
	  One or more of the items you selected could not be copied.
	  You do not have permission to create a message in this folder.
	  Microsoft Exchange Server Information Store
	  ID No: 581E - 40680 - 000004FF - 07DF
	
	CAUSE
	=====
	
	These errors occur if you do not have adequate access privileges to the
	destination folder.
	
	When a public folder is created, the owner of the folder can define access
	permissions to that folder. If you have not been granted Create Items permission
	to that folder, the error above will be presented when you try to move or copy
	messages.
	
	Additional query words: faq
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400DOS kbExchange500DOS kbExchange400NT kbExchange500NT kbExchange400Win95 kbExchange500Win95
	Version           : 4.0 5.0
	
	=============================================================================
	

{% endraw %}
