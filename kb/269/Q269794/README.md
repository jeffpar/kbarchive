---
layout: page
title: "Q269794: PRB: MAPI: Advise() Call Returns 0x8007000E (E_OUTOFMEMORY)"
permalink: /kb/269/Q269794/
---

## Q269794: PRB: MAPI: Advise() Call Returns 0x8007000E (E_OUTOFMEMORY)

	Article: Q269794
	Product(s): Microsoft Exchange
	Version(s): 1.0,5.5
	Operating System(s): 
	Keyword(s): kbMAPI kbMsg kbDSupport exc55
	Last Modified: 13-APR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	- Microsoft Extended Messaging Application Programming Interface (MAPI), version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you call the Advise function about 7800 to 7900 times, the next Advise call
	may fail with the error 0x8007000E (E_OUTOFMEMORY).
	
	
	CAUSE
	=====
	
	Notifications, which are registered by calling Advise, use a shared memory
	space. By default the heap size is set as 0x100000. If the heap size is exceeded
	when registering a new notification, the E_OUTOFMEMORY error is returned.
	
	This limit is system-wide; in other words, if you are running two programs that
	call Advise, the combined maximum for both programs should be less than 7900.
	
	WORKAROUND
	==========
	
	You can configure the heap size to be as high as 0x800000 by setting the
	following registry keys:
	
	  "HKLM\SOFTWARE\Microsoft\Windows Messaging Subsystem\SharedMemMaxSize
	  HKLM\SOFTWARE\Microsoft\Windows Messaging
	  Subsystem\Applications\MyApp\SharedMemMaxSize" (without the quotation marks)
	
	NOTE: The application that first calls the MAPIInitialize function sets the
	global heap size. Therefore, if Mad.exe (the System Attendant) is the first to
	start, you must make sure that the registry key is set for Mad.exe as well.
	
	Additional query words: 0x8007000E E_OUTOFMEMORY
	
	======================================================================
	Keywords          : kbMAPI kbMsg kbDSupport exc55 
	Technology        : kbAudDeveloper kbMAPISearch kbExchangeSearch kbExchange550 kbZNotKeyword kbZNotKeyword2 kbMAPIExt
	Version           : :1.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
