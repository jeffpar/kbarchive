---
layout: page
title: "Q62702: PWB 1.0 Does Not Return from DOS Shell If TMP Contains &quot;;&quot;"
permalink: /kb/062/Q62702/
---

## Q62702: PWB 1.0 Does Not Return from DOS Shell If TMP Contains &quot;;&quot;

	Article: Q62702
	Product(s): Microsoft Programming Utilities
	Version(s): MS-DOS:1.0; OS/2:1.0
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 04-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Programmer's Workbench for MS-DOS, version 1.0 
	- Microsoft Programmer's Workbench for OS/2, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If there is a semicolon ";" in your TMP environment variable, you may not be
	able to return to the Programmer's WorkBench (PWB) version 1.0 by typing "exit"
	(without the quotation marks) after selecting "DOS Shell" from the File menu in
	PWB. This situation does not occur with PWB version 1.1.
	
	MORE INFORMATION
	================
	
	Since the TMP environment variable is used to specify a single directory rather
	than a path, the semicolon character should not be used.
	
	To re-create this situation, type the following at the command line:
	
	  " set TMP=C:\TMP;" (without the quotation marks)
	
	Then, invoke PWB 1.0 and select DOS Shell from the File menu. Typing "exit"
	(without the quotation marks) on the DOS command line will not bring you back
	into PWB. To correct the problem, remove the semicolon from the end of the TMP
	environment variable.
	
	Additional query words: kbinf 1.00 PWBIss
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbPWBSearch kbZNotKeyword3 kbPWB100DOS kbPWB100OS2
	Version           : MS-DOS:1.0; OS/2:1.0
	
	=============================================================================
	
