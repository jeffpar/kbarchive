---
layout: page
title: "Q142158: PRB: QuickWin App Causes Access Violation Under Windows 95"
permalink: /kb/142/Q142158/
---

## Q142158: PRB: QuickWin App Causes Access Violation Under Windows 95

{% raw %}

	Article: Q142158
	Product(s): Microsoft Fortran Compiler
	Version(s): 5.1
	Operating System(s): 
	Keyword(s): kbFortranPS kbLangFortran
	Last Modified: 03-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FORTRAN Compiler for MS-DOS, version 5.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A QuickWin application created with FORTRAN version 5.1 causes an access
	violation when run under Windows 95.
	
	CAUSE
	=====
	
	The Fl.def file makes reference to a program loader that is now obsolete under
	Windows 95.
	
	RESOLUTION
	==========
	
	Remove the following line from the Fl.def file located in the \Fortran\Bin
	directory:
	
	  APPLOADER   '_MSLANGLOAD'
	
	REFERENCES
	==========
	
	For additional information about similar issues, please see following articles
	in the Microsoft Knowledge Base:
	
	  Q83406 FIX: APPLOADER in Standard-Mode Windows 3.1 Causes GP Fault
	
	  Q79287 PRB: Syntax Error in FL.DEF Caused by Wrong LINK.EXE
	
	Also see the Programs.txt file that comes with Windows 95.
	
	Additional query words: 5.10 win95
	
	======================================================================
	Keywords          : kbFortranPS kbLangFortran 
	Technology        : kbAudDeveloper kbFortranSearch kbZNotKeyword3 kbFORTRAN510DOS
	Version           : :5.1
	
	=============================================================================
	

{% endraw %}
