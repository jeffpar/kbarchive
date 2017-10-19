---
layout: page
title: "Q85675: DOCERR: Windows Help Macros Limited to 512 Characters"
permalink: /kb/085/Q85675/
---

## Q85675: DOCERR: Windows Help Macros Limited to 512 Characters

	Article: Q85675
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The documentation for the Microsoft Windows Help Compiler, version 3.1, states
	that the length of a macro is limited to 254 characters. This statement is
	incorrect; a macro can be up to 512 characters long.
	
	MORE INFORMATION
	================
	
	Help Compiler error messages are listed in Appendix B of the "Microsoft Windows
	Software Development Kit: Programming Tools" manual. When a macro exceeds the
	allowable length, the Help Compiler returns the following error, which is also
	listed on page 237:
	
	  Error 3511: Macro "macrostring" exceeds the limit of 254 characters
	
	This error message is incorrect. The actual limit is 512 characters.
	
	MACROHLP is one of the advanced sample applications provided with the Microsoft
	Windows Software Development Kit (SDK). One of the topics in the MACROHLP sample
	is titled "Rules for Help Macros." An item in the bulleted list in this topic
	incorrectly states that macros are limited to 254 characters.
	
	Additional query words: 3.10 docerr HC HCP.EXE HC31.EXE
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
