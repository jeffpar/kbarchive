---
layout: page
title: "Q137864: PC NTMMTA: Err Msg: A Failure Occurred Attempting to Read..."
permalink: /kb/137/Q137864/
---

## Q137864: PC NTMMTA: Err Msg: A Failure Occurred Attempting to Read...

	Article: Q137864
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Multitasking MTA for Windows NT, version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run the Mail Multitasking MTA for Windows NT (NT MMTA), start a
	service, and try to monitor it, you may get the following error:
	
	  Error: A Failure Occurred Attempting to Read or Write to the Registry
	
	CAUSE
	=====
	
	You selected to monitor an instance that is local to the Microsoft Windows NT
	machine; however, the Service Location selected is set to Remote Server in the
	Microsoft Mail Service Manager.
	
	RESOLUTION
	==========
	
	In the Microsoft Mail Service Manager, verify Service Location is set to Local.
	
	
	Additional query words: 3.50 MTA
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword2 kbMailSearch kbZNotKeyword3 kbMailMMTA350NT
	Version           : :3.5
	
	=============================================================================
	
