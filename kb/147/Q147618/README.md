---
layout: page
title: "Q147618: XGEN: Cannot Get Free/Busy for Server Group on Another PO"
permalink: /kb/147/Q147618/
---

## Q147618: XGEN: Cannot Get Free/Busy for Server Group on Another PO

	Article: Q147618
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:7.0
	Operating System(s): 
	Keyword(s): kbinterop
	Last Modified: 22-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Schedule+ for Windows, version 7.0 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you view free and busy times in Microsoft Schedule+ version 7.0, a version
	3.2 of Microsoft Mail for PC Networks group will have a question mark next to
	the group name.
	
	CAUSE
	=====
	
	This is a Microsoft Mail 3.2 limitation. You will not be able to get details on
	the group from the Address Book of the other postoffice (PO). Group members are
	not available across POs.
	
	Notes:
	
	- If you invite the group from its own PO, it works.
	
	- If you use Admin.exe to import the users into the second PO, and create a
	  group of those users, the group works.
	
	- If you send a meeting request to the original group, the members receive the
	  request.
	
	
	Additional query words: faq schedule plus
	
	======================================================================
	Keywords          : kbinterop 
	Technology        : kbScheduleSearch kbSchedule700
	Version           : WINDOWS:7.0
	
	=============================================================================
	
