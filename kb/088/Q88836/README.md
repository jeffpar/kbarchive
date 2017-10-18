---
layout: page
title: "Q88836: PC WSPlus: Invalid Password Prevents Changing to Online"
permalink: kb/088/Q88836/
---

## Q88836: PC WSPlus: Invalid Password Prevents Changing to Online

	Article: Q88836
	Product(s): Microsoft Schedule+ for Windows
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-SEP-1999
	
	1.00
	WINDOWS
	kbusage
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Schedule+ for Windows, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you set up Microsoft Schedule+ for Windows to start up off line, and you type
	an incorrect password on the first attempt, but then type the correct password,
	Schedule+ starts up normally. However, when you later attempt to switch to
	online operation, the following two dialog boxes appear:
	
	  The Mailbox name or password is incorrect
	
	  -and-
	
	  Cannot Access your Server
	
	CAUSE
	=====
	
	Schedule+ uses the first name and password you typed to try to sign into the
	postoffice.
	
	RESOLUTION
	==========
	
	To change to online operation, you must first quit from Schedule+, then start it
	again with the correct password.
	
	Additional query words: 1.00 schedule plus
	
	======================================================================
	Keywords          :  
	Technology        : kbScheduleSearch kbSchedule100
	Version           : WINDOWS:1.0
	
	=============================================================================
	
