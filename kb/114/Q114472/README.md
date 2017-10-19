---
layout: page
title: "Q114472: PRB: Viewer Errors 6181 and 6182"
permalink: /kb/114/Q114472/
---

## Q114472: PRB: Viewer Errors 6181 and 6182

	Article: Q114472
	Product(s): Miscellaneous Software Development Kits
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Multimedia Viewer Publishing Toolkit, version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When trying to compile an RTF file with the Microsoft Multimedia Viewer, the
	following errors occur:
	
	  error 6181 specified word breaker unable to break word
	
	  error 6182 failure on DLL breaking function
	
	CAUSE
	=====
	
	These errors can occur if the TEMP environment variable is not set to a valid
	drive and directory or if that drive does not have enough space.
	
	RESOLUTION
	==========
	
	At a command prompt, type
	
	  set
	
	in order to determine the settings of the environment variables. If this
	environment variable is not set or is not set correctly, do the following 2
	steps:
	
	1. create a directory (for example, C:\TEMP)
	
	2. set the environment variable at the command prompt (set TEMP=c:\temp)
	
	MORE INFORMATION
	================
	
	NOTE: If the TEMP environment variable is set to a remote drive, Viewer will
	ignore the TEMP setting and place temporary files in your Windows directory
	instead.
	
	It is not a good idea to set the TEMP environment variable to the root directory.
	Windows has a limit on the number of files which can be created in the root
	directory. Page 12-4 of the "Viewer Authoring Guide" states the following:
	
	  If the drive on which this directory resides is not large enough to hold the
	  files, the compiler will report error messages and eventually halt
	  compilation.
	
	The error messages that will be generated are these errors, 6181 and 6182.
	
	Additional query words: 2.00
	
	======================================================================
	Keywords          :  
	Technology        : kbHomeProdSearch kbHomeMMsearch kbMMViewer200
	Version           : :2.0
	
	=============================================================================
	
