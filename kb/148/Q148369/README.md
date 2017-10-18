---
layout: page
title: "Q148369: PC MAPI: Loss of Memory with MapiSendMail and Visual Basic"
permalink: kb/148/Q148369/
---

## Q148369: PC MAPI: Loss of Memory with MapiSendMail and Visual Basic

	Article: Q148369
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the MAPI function MAPISendMail is used in an application developed with
	Microsoft Visual Basic versions 2.0 and 3.0 for Windows, the memory is not
	released properly from the global heap. When you exit the MAPI application, it
	will release the memory.
	
	If the application sends large numbers of messages or several messages with
	multiple recipients the heap memory could be exhausted and result in subsequent
	failures of applications running in the Microsoft Windows environment.
	
	When the MAPI application is stopped, the memory that was not released during
	operation will be released and become available to other applications.
	
	The amount of memory lost during the MAPISendMail function call will be on the
	order of 32 bytes for each recipient and 32 bytes for each attached file. If the
	Windows system has a few megabytes of available memory, it will take thousands
	of messages to exhaust the heap. This is a problem only for a program designed
	to run for long continuous periods.
	
	CAUSE
	=====
	
	The loss of heap memory is a result of an error in MAPI.DLL and the way it frees
	allocated memory. The memory fails to be released for each recipient and for
	each attached file in the message. This loss only occurs when the Visual Basic
	MAPI interface is used. It does not occur if the application uses the MAPI
	interface for Microsoft C.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in version 3.5 of Microsoft Mail
	for Windows. A fix for this problem is in development, but has not been
	regression-tested and may be destabilizing in production environments.
	
	Contact Microsoft Product Support Services for more information on the
	availability of this fix.
	
	Additional query words: 3.00 3.20 3.20a 3.50
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail350
	Version           : WINDOWS:3.5
	
	=============================================================================
	
