---
layout: page
title: "Q102299: X400: File Handles, RAM, and Disk Space Requirements"
permalink: kb/102/Q102299/
---

## Q102299: X400: File Handles, RAM, and Disk Space Requirements

	Article: Q102299
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:2.1,3.0,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to X.400, versions 2.1, 3.0, 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Here is a list of the system requirements for versions 2.1, 3.0, and 3.2 of
	Microsoft Mail Gateway to X.400:
	
	- The number of file handles must be set to a minimum of 30. (In the CONFIG.SYS
	  file, set files=30.)
	
	- You must have 430K of available conventional RAM.
	
	- You must have at least 5 MB of free disk space. When the Microsoft Mail
	  Gateway to X.400 sends an X.400 message, it makes a temporary copy of that
	  message on the computer that is running the Gateway (or wherever the TEMP
	  environment variable points to).
	
	  The mail/gateway administrator should try to anticipate a user's largest
	  message and make sure slightly more free disk space is available.
	
	Additional query words: 2.10 3.00 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGatex400300 kbMailGatex400320 kbMailGatex400210
	Version           : MS-DOS:2.1,3.0,3.2
	
	=============================================================================
	
