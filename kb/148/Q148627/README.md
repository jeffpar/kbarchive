---
layout: page
title: "Q148627: BUG: NMAKE Fails If File Names Contain Special Characters"
permalink: /kb/148/Q148627/
---

## Q148627: BUG: NMAKE Fails If File Names Contain Special Characters

	Article: Q148627
	Product(s): Microsoft Programming Utilities
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbFortranPS kbLangFortrankbbuglist
	Last Modified: 02-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Program Maintenance Utility (NMAKE), used with:
	   - Microsoft Fortran PowerStation for Windows 95 and Windows NT, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you try to create a project file by using the NMAKE utility with a source
	file name containing certain special characters such as $, !, or #, one of the
	following errors occurs depending upon the character used:
	
	Source filename: hi$there.f90
	
	  NMAKE : fatal error U1073: don't know how to make '".\hihere.f90"'
	
	Source filename: hi!there.f90
	
	  NMAKE : fatal error U1017: unknown directive '!there.obj"'
	
	Source filename: hi#there.f90
	
	  NMAKE : fatal error U1038: internal error : lexer
	
	CAUSE
	=====
	
	NMAKE treats certain special characters as command-line arguments or macros, or
	it is unable to process them at all.
	
	RESOLUTION
	==========
	
	Avoid using special characters in source file names or use Developer Studio to
	create and manage your projects.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	REFERENCES
	==========
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q140356 BUG: NMAKE Fails If Paths & File Names Have Special Characters
	
	Additional query words: 4.00 1.50
	
	======================================================================
	Keywords          : kbFortranPS kbLangFortran kbbuglist
	Technology        : kbVCsearch kbAudDeveloper kbNMAKESearch
	Version           : :4.0
	
	=============================================================================
	
