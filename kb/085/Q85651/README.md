---
layout: page
title: "Q85651: PC MAPI: MAPI_SUPPRESS_ATTACH Incorrectly Defined"
permalink: /kb/085/Q85651/
---

## Q85651: PC MAPI: MAPI_SUPPRESS_ATTACH Incorrectly Defined

	Article: Q85651
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	On page 68 of the version 3.0 Microsoft Mail "Technical Reference,"
	MAPI_SUPPRESS_ATTACH is incorrectly defined as 0x00000100. The actual value as
	defined in the MAPI.H file is 0x00000800.
	
	Similarly, page 115 incorrectly states that the value of MAPI_SUPPRESS_ATTACH is
	128 (0x100 hex). The correct value is 1024 (0x800 hex).
	
	Additional query words: 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
