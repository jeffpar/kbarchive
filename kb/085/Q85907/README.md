---
layout: page
title: "Q85907: PC Win: Reply Does Not Copy Attachments"
permalink: kb/085/Q85907/
---

## Q85907: PC Win: Reply Does Not Copy Attachments

	Article: Q85907
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you reply to a version 3.0 Microsoft Mail for Windows message that contains
	an Object Linking and Embedding (OLE) object, the OLE object is translated into
	<<OLE Object:Object Name>> and then the object is no longer visible.
	
	CAUSE
	=====
	
	This is by design. All Microsoft Mail 3.0 clients do not copy attachments into
	Reply notes (OLE objects are handled the same way as attachments). This limits
	the size of the reply.
	
	RESOLUTION
	==========
	
	If the OLE object is critical to the reply, do one of the following:
	
	- Use the Copy and Paste functions to include the items from the original
	  message.
	
	-or-
	
	- Use Forward instead of Reply. Forward will include the OLE objects.
	
	
	Additional query words: 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
