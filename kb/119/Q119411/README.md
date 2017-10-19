---
layout: page
title: "Q119411: PC DOS: SCRCOMP.EXE -P Option Not Work"
permalink: /kb/119/Q119411/
---

## Q119411: PC DOS: SCRCOMP.EXE -P Option Not Work

	Article: Q119411
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, version 3.2, on platform(s):
	   - the operating system: MS-DOS 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The SCRCOMP.EXE script compiler program compiles an ASCII script file into an
	encrypted script file for use with EXTERNAL.EXE and Remote client programs. When
	you use the -Pscript option with SCRCOMP.EXE to test scripts as described on pg.
	382 of the Microsoft Mail 3.2 "Administrator's Guide," the program always plays
	the INITIALIZE script.
	
	CAUSE
	=====
	
	The SCRCOMP.EXE program always sets the -P option to INITIALIZE, regardless of
	the script specified.
	
	RESOLUTION
	==========
	
	It is possible to work around the problem by swapping the INITIALIZE label with
	the label of the script to be tested; CALL, ANSWER, RESET, or DISCONNECT, and
	execute the SCRCOMP.EXE program with the -P option.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in version 3.2 of Microsoft Mail
	for PC Networks, MS-DOS workstation. We are researching this problem. and will
	post new information here in the Microsoft Knowledge Base as it becomes
	available.
	
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3
	Version           : WINDOWS:3.2
	
	=============================================================================
	
