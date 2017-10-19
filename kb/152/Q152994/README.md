---
layout: page
title: "Q152994: ADT2: Err Msg: Unable to Create Item in Program Manager Group"
permalink: /kb/152/Q152994/
---

## Q152994: ADT2: Err Msg: Unable to Create Item in Program Manager Group

	Article: Q152994
	Product(s): Microsoft Access Distribution Kit
	Version(s): WINDOWS:2.0
	Operating System(s): 
	Keyword(s): kberrmsg kbusage
	Last Modified: 25-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Access Developer's Toolkit, version 2.0 
	-------------------------------------------------------------------------------
	
	Novice: Requires knowledge of the user interface on single-user computers.
	
	SYMPTOMS
	========
	
	When you run setup disks created with the Microsoft Access Developer's Toolkit
	version 2.0, you may receive the following error message:
	
	  Unable to create item in program manager group.
	
	This error message appear when the icon's description text includes special
	characters, such as [] (brackets), () (braces), ! (exclamation point), .
	(period), , (comma) or ' (apostrophe).
	
	RESOLUTION
	==========
	
	Do not use special characters in the application title or icon descriptions.
	
	MORE INFORMATION
	================
	
	On page 29 of the "Advanced Topics" book for the Microsoft Access Developer's
	Toolkit version 2.0, it mentions special characters that should not be used for
	the application title. These restrictions apply also to the icon's description
	text.
	
	Additional query words: ADT program manager
	
	======================================================================
	Keywords          : kberrmsg kbusage 
	Technology        : kbAudDeveloper kbAccessSearch kbAccessDevTK200 kbZNotKeyword3
	Version           : WINDOWS:2.0
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
