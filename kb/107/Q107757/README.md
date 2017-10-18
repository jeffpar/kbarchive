---
layout: page
title: "Q107757: PC MAPI: MapiSaveMail Is Inconsistent When Passed NULL"
permalink: kb/107/Q107757/
---

## Q107757: PC MAPI: MapiSaveMail Is Inconsistent When Passed NULL

	Article: Q107757
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.0b,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, versions 3.0, 3.0b, 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Messaging Application Program Interface (MAPI) from versions 3.0, 3.0b and
	3.2 of Microsoft Mail for PC Networks, the MapiSaveMail function is not
	consistent when passed the NULL value.
	
	If a message in the inbox contains subject and text, you can use MapiFindNext to
	retrieve the message ID value. You can use MapiSaveMail to change the subject
	and text, but if you change both to NULL, only the text actually changes; the
	subject does not.
	
	  MapiMessage[0].pszSubject=/NULL
	  MapiMessage[0].pszNoteText=/NULL
	
	The date also does not change when passed the NULL value.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in MAPI from versions 3.0, 3.0b,
	and 3.2 of Microsoft Mail for PC Networks. We are researching this problem and
	will post new information here in the Microsoft Knowledge Base as it becomes
	available.
	
	Additional query words: 3.00 3.00b 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail300 kbMail320 kbMail300b
	Version           : WINDOWS:3.0,3.0b,3.2
	
	=============================================================================
	
