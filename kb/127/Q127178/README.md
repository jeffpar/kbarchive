---
layout: page
title: "Q127178: Cannot Open Chat History File While in Chat Session"
permalink: /kb/127/Q127178/
---

## Q127178: Cannot Open Chat History File While in Chat Session

	Article: Q127178
	Product(s): The Microsoft Network
	Version(s): WINDOWS:1.0,1.05,1.2,1.3,2.0,2.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Network versions 1.0, 1.05, 1.2, 1.3, 2.0, 2.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you save the chat history while you are in a chat session, and then
	double-click the saved chat history file to open it while you are still in the
	chat session, one of the following events may occur:
	
	- Microsoft WordPad opens and you receive the message "The document
	  '<name>' is in use by another application and cannot be accessed."
	
	- Microsoft Word opens and you are prompted to open a copy of the document.
	
	CAUSE
	=====
	
	The chat history file remains open while you are in a chat session. WordPad
	cannot open an open document, but Word can copy an open document and then open
	the copied document.
	
	RESOLUTION
	==========
	
	To open the chat history file in WordPad, first exit the chat session.
	
	Additional query words: msn
	
	======================================================================
	Keywords          :  
	Technology        : kbMSNSearch kbMSN200 kbMSN130 kbMSN105 kbMSN250 kbMSN120
	Version           : WINDOWS:1.0,1.05,1.2,1.3,2.0,2.5
	
	=============================================================================
	
