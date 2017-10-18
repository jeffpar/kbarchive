---
layout: page
title: "Q104298: PC MAPI: MAPISaveMail Function Resets Originator to Caller"
permalink: kb/104/Q104298/
---

## Q104298: PC MAPI: MAPISaveMail Function Resets Originator to Caller

	Article: Q104298
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you save a message using the Microsoft Visual Basic for Windows
	MAPISaveMail function, the Originator parameter of the message is set to the
	Mail user who logged on.
	
	CAUSE
	=====
	
	The Microsoft Visual Basic MAPIMessage structure does not contain an Originator
	field like the C equivalent message structure does. Therefore, the actual
	originator cannot be saved--instead, the logon user information is saved in this
	field (when it is read by MAPIReadMail). The C MAPISaveMail function correctly
	preserves the originator field because it is in the C MAPIMessage structure.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in versions 3.0 and 3.0b of
	Microsoft Mail for Windows. This problem was corrected in version 3.2 of
	Microsoft Mail for Windows.
	
	Additional query words: 3.00 3.00b
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail300 kbMail300b
	Version           : WINDOWS:3.0,3.0b
	
	=============================================================================
	
