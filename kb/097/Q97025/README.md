---
layout: page
title: "Q97025: PC WRmt: Subject-Line Length Limited to 40 Characters"
permalink: kb/097/Q97025/
---

## Q97025: PC WRmt: Subject-Line Length Limited to 40 Characters

	Article: Q97025
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Remote for Windows, version 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In version 3.2 of Microsoft Mail Remote for Windows, when you use the Get
	Headers command to retrieve mail message headers, Mail truncates the Subject
	line of each message to 40 characters. This behavior leaves the Subject
	description incomplete when the message contains a long Subject. This behavior
	does not depend on the size of the Subject column in the Headers dialog box.
	
	CAUSE
	=====
	
	This behavior is caused by a design limitation in EXTERNAL.EXE, which processes
	only 40 characters for the Subject of each message.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in EXTERNAL.EXE included with
	versions 3.0, 3.0a, and 3.2 of Mail for PC Networks. We are researching this
	problem and will post new information here in the Microsoft Knowledge Base as it
	becomes available.
	
	
	Additional query words: 3.20 field
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailRemote320
	Version           : WINDOWS:3.2
	
	=============================================================================
	
