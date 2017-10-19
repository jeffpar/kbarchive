---
layout: page
title: "Q100457: PC WRmt: Priority Message Designation"
permalink: /kb/100/Q100457/
---

## Q100457: PC WRmt: Priority Message Designation

	Article: Q100457
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Remote for Windows, version 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a Microsoft Mail Remote for Windows user sends mail that is High or Low
	Priority and Return-Receipt, it is received. However, the High or Low symbol
	does not appear next to the envelope in the recipient's inbox.
	
	CAUSE
	=====
	
	This is by design. The Return-Receipt feature functions correctly. Mail sent
	with High or Low priority without the return receipt also functions correctly.
	
	MORE INFORMATION
	================
	
	The Microsoft PC Mail Shared File System (SFS) priority paradigm is as follows:
	
	- R (registered)
	
	- C (confirmation)
	
	- 1-5 (priority)
	
	These priorities are exclusive priorities.
	
	Registered priority takes precedence over high priority in the priority field and
	priority is lost.
	
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailRemote320
	Version           : WINDOWS:3.2
	
	=============================================================================
	
