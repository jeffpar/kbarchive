---
layout: page
title: "Q85650: PC MAPI: MAPI_GUARANTEE_FIFO Incorrectly Defined"
permalink: /kb/085/Q85650/
---

## Q85650: PC MAPI: MAPI_GUARANTEE_FIFO Incorrectly Defined

	Article: Q85650
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	On page 60 of the version 3.0 Microsoft Mail "Technical Reference,"
	MAPI_GUARANTEE_FIFO is incorrectly defined as 0x00000200. The actual value as
	defined in the MAPI.H file is 0x00000100.
	
	Similarly, page 108 incorrectly states that the value of MAPI_GUARANTEE_FIFO is
	256 (0x200 hex). The correct value is 128 (0x100 hex).
	
	
	Additional query words: 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
