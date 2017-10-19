---
layout: page
title: "Q89585: PC OS2: Running CONVERT.EXE Under OS/2 1.3"
permalink: /kb/089/Q89585/
---

## Q89585: PC OS2: Running CONVERT.EXE Under OS/2 1.3

	Article: Q89585
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, version 3.0, on platform(s):
	   - the operating system: OS/2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	CONVERT.EXE, which is included with version 3.0 of Microsoft Mail for
	Presentation Manager, converts version 2.1 folders to the version 3.0 Mail
	message file (MMF) format.
	
	If you run CONVERT.EXE from an OS/2 prompt or by selecting it from a file list in
	the File Manager while Mail is running, the program causes a protection
	violation and terminates.
	
	CAUSE
	=====
	
	This problem is caused by a design limitation of the Windows Libraries for OS/2
	(WLO) dynamic-link libraries (DLLs). The shared DLL technology identifies tasks
	using the stack segment register. Under Microsoft Windows, this stack value is
	unique across all applications. With WLO applications, this is not guaranteed
	because the stack value is relative to each application. CONVERT.EXE has the
	same stack segment value as the Mail Spooler (MAILSPL.EXE), and this causes the
	protection violation.
	
	RESOLUTION
	==========
	
	Shut down Mail before you run the conversion utility.
	
	Additional query words: 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3
	Version           : WINDOWS:3.0
	
	=============================================================================
	
