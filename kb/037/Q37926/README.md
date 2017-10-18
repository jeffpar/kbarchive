---
layout: page
title: "Q37926: Mac DOS: Using the MS-DOS PRINT Command with Mail"
permalink: kb/037/Q37926/
---

## Q37926: Mac DOS: Using the MS-DOS PRINT Command with Mail

	Article: Q37926
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): 3.0,3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for AppleTalk Networks, MS-DOS workstation, versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	To use the MS-DOS print spooler (the PRINT command) with Microsoft Mail (MS- DOS
	client), you must load the resident portion of the PRINT program before you run
	the Notifier.
	
	MORE INFORMATION
	================
	
	The PRINT command is a terminate-and-stay-resident (TSR) program that may affect
	the proper operation of the Notifier if it is loaded on top of the Notifier in
	memory. To load the resident portion of the PRINT command, type "print" (without
	the quotation marks) at the MS- DOS prompt. MS-DOS will display the following
	prompt:
	
	  Name of list device [PRN]:
	
	If you receive the message "Bad command or file name," change to the directory
	that contains the MS-DOS utilities, then retype "print" (without the quotation
	marks). Type in the communications port to which your printing device is
	attached (for example, LPT1:, LPT2:, COM1:) and press ENTER. MS-DOS will display
	the following prompt:
	
	  Resident part of PRINT installed
	  Print queue is empty
	
	You should now able to load the Notifier, run Mail, and, when necessary, use the
	PRINT command from the MS-DOS prompt.
	
	Additional query words: 3.00 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword2 kbMailSearch kbZNotKeyword3 kbMailATN300DOS kbMailATN310DOS
	Version           : :3.0,3.1
	
	=============================================================================
	
