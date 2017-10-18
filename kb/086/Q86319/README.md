---
layout: page
title: "Q86319: PC Win: Update Message when Closing Unfinished OLE Object"
permalink: kb/086/Q86319/
---

## Q86319: PC Win: Update Message when Closing Unfinished OLE Object

	Article: Q86319
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.0b,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, versions 3.0, 3.0b, 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In version 3.0, 3.0b, or 3.2 of Microsoft Mail for Windows, if you exit while
	composing a note containing an unfinished object linking and embedding (OLE)
	object (where Mail is the client document and the OLE server is open and no
	update has been done) you see the standard OLE "Do you want to update..."
	message even when the note being composed is not the current active window.
	
	CAUSE
	=====
	
	Applications such as Microsoft Word for Windows use only one type of active
	window, but Mail for Windows uses several types. With Mail, it is possible to
	have active Send Note windows, Message Finder windows, and the Message Center
	Viewer window. Normally, if you try to close an application with an unfinished
	OLE object in a window that is not active, the application switches to the
	window with the OLE object and prompts you to update. When you close Mail with
	an unfinished OLE object in a Send Note window, Mail prompts you to update the
	object regardless of which window is the current active window.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in versions 3.0, 3.0b, and 3.2 of
	Microsoft Mail for Windows. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	
	Additional query words: 3.00 3.00b 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail300 kbMail320 kbMail300b
	Version           : WINDOWS:3.0,3.0b,3.2
	
	=============================================================================
	
