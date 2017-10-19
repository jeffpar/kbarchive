---
layout: page
title: "Q86090: PC Win: OLE Object Redraws Slowly in Message"
permalink: /kb/086/Q86090/
---

## Q86090: PC Win: OLE Object Redraws Slowly in Message

	Article: Q86090
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
	
	When you compose a message in version 3.0, 3.0b, or 3.2 of Microsoft Mail for
	Windows that contains an object linking and embedding (OLE) object with text
	above and below it, the screen redraws of the OLE object may be very slow.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in versions 3.0, 3.0b, and 3.2 of
	Microsoft Mail for Windows. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Compose a message.
	
	2. Enter about half a page of text.
	
	3. From the Edit menu, choose Insert Object and select Paintbrush Picture.
	
	4. From Paintbrush, create a new picture.
	
	5. Close Paintbrush and when prompted to Update, choose Yes.
	
	6. Continue to enter text until the inserted object has scrolled off the top of
	  the page.
	
	7. Using the mouse, grab the scroll bar thumb and drag it up slowly.
	
	When the Paintbrush object appears on the screen, it redraws each time the
	message is scrolled one line, which makes scrolling very slow.
	
	
	Additional query words: 3.00 3.00b 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail300 kbMail320 kbMail300b
	Version           : WINDOWS:3.0,3.0b,3.2
	
	=============================================================================
	
