---
layout: page
title: "Q104985: PC Win: ServerPath= Statement in MSMAIL.INI Ignored"
permalink: /kb/104/Q104985/
---

## Q104985: PC Win: ServerPath= Statement in MSMAIL.INI Ignored

	Article: Q104985
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.0b,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, versions 3.0, 3.0b, 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the ServerPath= statement in the MSMAIL.INI file in version 3.0,
	3.0b, or 3.2 of Microsoft Mail for Windows, you may receive the following error
	message:
	
	  Mail could not connect to your Mail server. The Mail server path in your
	  MSMAIL.INI file is missing or invalid
	
	CAUSE
	=====
	
	The Mail database resides in a subdirectory on the drive letter you specify on
	the ServerPath= statement.
	
	RESOLUTION
	==========
	
	Change the ServerPath= statement to include the path to the root of the Mail
	database.
	
	Additional query words: 3.00 3.00b 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail300 kbMail320 kbMail300b
	Version           : WINDOWS:3.0,3.0b,3.2
	
	=============================================================================
	
