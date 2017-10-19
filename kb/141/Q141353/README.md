---
layout: page
title: "Q141353: PRB: Check-in That Uses Drag and Drop Causes Application Error"
permalink: /kb/141/Q141353/
---

## Q141353: PRB: Check-in That Uses Drag and Drop Causes Application Error

	Article: Q141353
	Product(s): Microsoft SourceSafe
	Version(s): 
	Operating System(s): 
	Keyword(s): kberrmsg kbusage kbSSafe400
	Last Modified: 07-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to Check in a file by dragging it to your SourceSafe database,
	you may receive an error message, after which SourceSafe will close. If you are
	running Windows 95 the message will read:
	
	  "This program has performed an illegal operation and will be shut down"
	
	If you are running Windows 3.x, the message will read:
	
	  "SSEXP. An error has occurred in your application. If you choose Ignore you
	  should save your work in a new file. If you choose close, your application
	  will terminate"
	
	CAUSE
	=====
	
	This error occurs when you attempt to check in or update a file when one or more
	of the following conditions exist:
	
	- The file is currently checked out to another user.
	
	- You are attempting the Check-in by using drag-and-drop from the Windows 95
	  Explorer or Windows 3.x File Manager into the Visual SourceSafe Explorer.
	
	- The file you are attempting to check in is a sub-project.
	
	- The parent project of the file's project is the active project in the Visual
	  SourceSafe Explorer.
	
	WORKAROUND
	==========
	
	Do not make the parent project the active project prior to attempting the
	check-in.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Open or switch to Microsoft Visual SourceSafe 4.0.
	
	2. Create two new projects using the following hierarchy:
	
	  $/Project1/Project2
	
	3. Add a new file to Project2 and check it out to any directory (this example
	  assumes that you have checked it out to C:/Mydir).
	
	4. Close Visual SourceSafe, and then restart it, logging on as a different user
	  than that used in steps 1 - 3.
	
	5. Open or switch to the Windows 95 Explorer or the Windows 3.x File Manager.
	  Position this window and the Visual SourceSafe Explorer so that you can drag
	  and drop files between them.
	
	6. In the Visual SourceSafe Explorer, make $/Project1 the active project, and
	  then attempt to drag and drop the checked-out file from C:/Mydir into
	  $/Project1/Project2. The error will now occur.
	
	Additional query words: GPF General Protection Fault
	
	======================================================================
	Keywords          : kberrmsg kbusage kbSSafe400 
	Issue type        : kbprb
	
	=============================================================================
	
