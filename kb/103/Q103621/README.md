---
layout: page
title: "Q103621: Running Visual C++ for Windows with Windows NT"
permalink: /kb/103/Q103621/
---

## Q103621: Running Visual C++ for Windows with Windows NT

	Article: Q103621
	Product(s): Microsoft Windows NT
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): kbinterop
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	-------------------------------------------------------------------------------
	
	Microsoft Visual C++ for Windows 3.1 uses a VxD that is not compatible
	with Windows NT, but there is an unsupported fix located on CompuServe
	in the MSLANG32 forum in Library 1 called BETA2FIX. It will patch the
	command-line VC++ tools to work with the released version of Windows
	NT.
	
	This utility modifies the command-line tools from Microsoft Visual C++
	for Windows, version 1.0, so that they will run with the released
	versions of Windows NT. BETA2FIX also modifies the .EXE and .DLL files
	that were built for versions of Microsoft Windows NT before Beta 2 so
	that they can run with the released versions of Windows NT.
	
	The BETA2FIX utility includes the following:
	
	  B2FIX.EXE       - Self-extracting archive containing these files:
	
	  BETA2FIX.EXE    - Program to update files.
	  BETA2.DLL       - Support library required by files modified by
	                    BETA2FIX.EXE
	  BETA2FIX.TXT    - The following text file:
	
	Usage:
	
	To patch an executable file, enter BETA2FIX <filename> at the command
	prompt, where <filename> is the name of the file to patch. Wildcards
	are allowed in <filename>.
	
	NOTE: BETA2FIX will alter only executable files created before Beta 2;
	other files will not be touched.
	
	After modification, the command-line tools from Microsoft Visual C++
	for Windows, Version 1.0 will work with Windows NT but not with
	Microsoft MS-DOS or Microsoft Windows. To undo the modifications, type
	BETA2FIX /U <filename>.
	
	To run a program that has been patched, you must have a copy of
	BETA2.DLL in your path (the SYSTEM32 directory is recommended).
	
	Other options:
	
	 /V gives detailed information during patching
	 /N suppresses the Microsoft banner
	 /T displays all messages but does not modify files
	
	THIS TOOL IS NOT SUPPORTED BY MICROSOFT CORPORATION. IT IS PROVIDED
	"AS IS" BECAUSE WE BELIEVE IT MAY BE USEFUL TO CUSTOMERS. WE REGRET
	THAT MICROSOFT IS UNABLE TO SUPPORT OR ASSIST WITH THIS TOOL.
	
	Additional query words: prodnt MMD.386
	
	======================================================================
	Keywords          : kbinterop 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW310 kbWinNTSsearch kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.1
	
	=============================================================================
	
