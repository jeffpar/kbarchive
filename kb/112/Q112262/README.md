---
layout: page
title: "Q112262: PC MAPI: MAPI_SENT Set Improperly on Shared Folder Messages"
permalink: /kb/112/Q112262/
---

## Q112262: PC MAPI: MAPI_SENT Set Improperly on Shared Folder Messages

	Article: Q112262
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, versions 3.0, 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When reading a custom message from a shared folder using Simple Mail Application
	Programming Interface (MAPI), it is possible that the message will be displayed
	in the Compose form rather than the Read form. This can occur with any custom
	message class, including those created using version 1.0 of Microsoft Electronic
	Forms Designer.
	
	CAUSE
	=====
	
	When Simple MAPI reads a message from a shared folder, it creates a temporary
	copy of the message locally. This temporary message does not have its MAPI_SENT
	bit set properly. When the custom message is read, it appears to MAPI as though
	it has not been sent and displays it in the Compose form.
	
	RESOLUTION
	==========
	
	This issue was addressed in the version of MAPI.DLL which is included with
	version 1.0 of Microsoft Electronic Forms Designer.
	
	
	Additional query words: 3.00 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail300 kbMail320
	Version           : WINDOWS:3.0,3.2
	
	=============================================================================
	
