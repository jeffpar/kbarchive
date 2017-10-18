---
layout: page
title: "Q86405: PC MAPI: MAPISendDocuments: Wrong Error If Full Path Not Spec."
permalink: kb/086/Q86405/
---

## Q86405: PC MAPI: MAPISendDocuments: Wrong Error If Full Path Not Spec.

	Article: Q86405
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.0b,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, versions 3.0, 3.0b, 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you do not specify the full path for a file that is to be sent with the
	MAPISendDocuments function, a MAPI_E_INSUFFICIENT_MEMORY error is returned
	instead of the expected value of MAPI_E_ATTACHMENT_NOT_FOUND.
	
	RESOLUTION
	==========
	
	You must include a full path for the FilePaths parameter for each file to be
	sent.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in versions 3.0, 3.0b, and 3.2 of
	Microsoft Mail for PC Networks. We are researching this problem and will post
	new information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: 3.00 3.00b 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail300 kbMail320 kbMail300b
	Version           : WINDOWS:3.0,3.0b,3.2
	
	=============================================================================
	
