---
layout: page
title: "Q99106: PC WRmt: Mail Controls Windows During Active Modem Session"
permalink: kb/099/Q99106/
---

## Q99106: PC WRmt: Mail Controls Windows During Active Modem Session

	Article: Q99106
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Remote for Windows, version 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you transmit or receive mail from your postoffice, version 3.2 of Microsoft
	Mail Remote for Windows takes exclusive control over Microsoft Windows.
	
	CAUSE
	=====
	
	This is by design; multitasking or task switching is not supported while the
	modem session is active.
	
	Mail Remote for Windows does not support any other tasks while the modem session
	is active (either sending or receiving mail).
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailRemote320
	Version           : WINDOWS:3.2
	
	=============================================================================
	
