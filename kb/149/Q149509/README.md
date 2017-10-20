---
layout: page
title: "Q149509: BUG: General Protection (GP) Fault Caused by Een0f90.dll File"
permalink: /kb/149/Q149509/
---

## Q149509: BUG: General Protection (GP) Fault Caused by Een0f90.dll File

{% raw %}

	Article: Q149509
	Product(s): Microsoft Fortran Compiler
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbFortranPS kbLangFortrankbbuglist
	Last Modified: 02-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Fortran PowerStation for Windows 95 and Windows NT, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run the Developer Studio (Msdev.exe) program, a general protection (GP)
	fault or unrecoverable application error occurs in the Een0f90.dll file.
	
	CAUSE
	=====
	
	The Een0f90.dll file is not version stamped. Consequently it may not have been
	installed correctly during the setup process.
	
	RESOLUTION
	==========
	
	Manually copy the Een0f90.dll file from the installation CD-ROM disc or
	diskettes to the \Msdev\Bin directory.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: 4.00 GPF
	
	======================================================================
	Keywords          : kbFortranPS kbLangFortran kbbuglist
	Technology        : kbAudDeveloper kbPTProdChange kbFortranSearch kbFORTRANPower400NT
	Version           : :4.0
	
	=============================================================================
	

{% endraw %}
