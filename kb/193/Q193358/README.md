---
layout: page
title: "Q193358: PRB: Books Online Causes an IPF at 00DE:00000003"
permalink: /kb/193/Q193358/
---

## Q193358: PRB: Books Online Causes an IPF at 00DE:00000003

	Article: Q193358
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Visual Basic Books Online causes an Invalid Page Fault (IPF) in module
	unknown at the address 00DE:00000003. This occurs after installing the Microsoft
	Certified Professional (MCP) Pre-Test software for the following book by Sybex:
	
	  MCSD: SQL Server - 6.5 Database Design Study Guide
	  By Kevin Hough
	  ISBN: 0-7821-2269-8
	
	Installing and attempting to use any of the addins in the following book may also
	cause the error to occur:
	
	  MCSD: Visual Basic 5 Study Guide 
	  By Michael McKelvy
	
	CAUSE
	=====
	
	The Sybex software contains a non-released beta version of the Visual Basic
	run-time DLL, Msvbvm50.dll (version 6.00.73.22), which replaced any previous
	versions during setup.
	
	RESOLUTION
	==========
	
	To correct the problem, you should remove the Msvbvm50.dll file from your
	Windows system directory and re-install the correct run-time file. You can
	download the latest version of this file from Microsoft. Please see the
	following Knowledge Base article for details:
	
	  Q180071 FILE: Msvbvm50.exe Installs Visual Basic 5.0 Run-Time Files
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words: kbDSupport kbDSD kb3rdparty kbVBp kbVBp500
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500 kbVB500
	Version           : WINDOWS:5.0
	Issue type        : kbprb
	
	=============================================================================
	
