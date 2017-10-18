---
layout: page
title: "Q86091: PC Win: OLE Apps Have Unexpected Window Stacking Order"
permalink: kb/086/Q86091/
---

## Q86091: PC Win: OLE Apps Have Unexpected Window Stacking Order

	Article: Q86091
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.0b,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, versions 3.0, 3.0b, 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In version 3.0, 3.0b, or 3.2 of Microsoft Mail for Windows, using the ALT+TAB
	function to toggle between applications and close the object linking and
	embedding (OLE) Server application, sometimes causes an unexpected window
	stacking order.
	
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
	
	2. From the Edit menu, choose Insert Object and select any class OLE object.
	
	3. ALT+TAB to the Program Manager.
	
	4. ALT+TAB to the OLE Server application.
	
	5. From the File menu, choose Exit.
	
	Program Manager is now on top of the window stacking order, although according to
	OLE guidelines the OLE client application should be on top. Most OLE clients
	exhibit this unexpected behavior.
	
	Additional query words: 3.00 3.00b 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail300 kbMail320 kbMail300b
	Version           : WINDOWS:3.0,3.0b,3.2
	
	=============================================================================
	
