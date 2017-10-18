---
layout: page
title: "Q124197: PC OS/2:Err Msg:SYS1804: Setup Is Unable to Find File KEYBOARD"
permalink: kb/124/Q124197/
---

## Q124197: PC OS/2:Err Msg:SYS1804: Setup Is Unable to Find File KEYBOARD

	Article: Q124197
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2,3.2a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.2, 3.2a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you install Microsoft Mail for PC Networks on an OS/2 workstation, the
	following error message may appear:
	
	  SYS1804: Setup is unable to find file KEYBOARD.
	
	To avoid this problem, run Setup within a WINOS/2 session.
	
	Depending upon the version OS/2 being used, mail is installed on the OS/2 client
	machine with either PMSETUP.EXE or SETUP.EXE. PMSETUP.EXE was specifically
	designed to be used with Presentation Manager version 1.x. On any version of
	OS/2 later than 1.x, you must use the Windows SETUP.EXE program.
	
	The problem generally arises when the customer is attempting to use SETUP.EXE
	within an OS/2 session. In order for SETUP.EXE to perform correctly, the user
	must run setup within a WINOS/2 session.
	
	
	Additional query words: 3.20 3.20a OS/2 Setup client error
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN320a
	Version           : WINDOWS:3.2,3.2a
	
	=============================================================================
	
