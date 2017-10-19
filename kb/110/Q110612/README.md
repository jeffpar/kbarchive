---
layout: page
title: "Q110612: FFAPI: Slow PUT of Large Messages or Attachments"
permalink: /kb/110/Q110612/
---

## Q110612: FFAPI: Slow PUT of Large Messages or Attachments

	Article: Q110612
	Product(s): Microsoft Mail For PC Networks
	Version(s): 2.1c
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Software Development Kit (FFAPI), version 2.1c 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Version 2.1c and earlier of Microsoft Mail Software Development Kit (FFAPI),
	COURPUT.EXE may slowly deliver large mail messages or messages with large
	attachments.
	
	CAUSE
	=====
	
	COURPUT.EXE used a buffered I/O routine, but with a small buffer. The 3.0
	version increased that buffer and now the speed has greatly increased (basically
	like the MS-DOS client).
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in version 2.1c and earlier of
	Microsoft Mail Software Development Kit (FFAPI). This problem in corrected in
	version 3.0 of Microsoft Mail Software Development Kit (FFAPI).
	
	Additional query words: 2.10c
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbMailSearch kbSDKSearch
	Version           : :2.1c
	
	=============================================================================
	
