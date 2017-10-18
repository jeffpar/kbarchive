---
layout: page
title: "Q192761: BUG: Startup Program Fails with NOLOGO Switch"
permalink: kb/192/Q192761/
---

## Q192761: BUG: Startup Program Fails with NOLOGO Switch

	Article: Q192761
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Starting Visual FoxPro version 6.0 using the NOLOGO startup switch and
	specifying a program after the NOLOGO startup switch causes the following error
	message to occur:
	
	  File '.prg' does not exist.
	
	RESOLUTION
	==========
	
	Use the -T startup switch or place the NOLOGO startup switch after the program
	name.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	From the Start menu, click Run and type the following (with quotes) in the Run
	dialog box, editing the path to point to the Visual FoxPro executable:
	
	  "C:\Program Files\Microsoft Visual Studio\Vfp98\VFP6.EXE /NOLOGO
	      genmenu.prg"
	
	RESULTS: The error occurs.
	
	REFERENCES
	==========
	
	Visual FoxPro Help; search on: "startup options"
	(c) Microsoft Corporation 1998, All Rights Reserved.
	Contributions by Mike Stewart, Microsoft Corporation
	
	
	Additional query words: kbVFp600bug
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
