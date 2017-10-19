---
layout: page
title: "Q149129: PRB: LOCKING Replaced with SHARE= in OPEN Statement"
permalink: /kb/149/Q149129/
---

## Q149129: PRB: LOCKING Replaced with SHARE= in OPEN Statement

	Article: Q149129
	Product(s): Microsoft Fortran Compiler
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbFortranPS kbLangFortran
	Last Modified: 02-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Fortran PowerStation for Windows 95 and Windows NT, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The compiler (Fl32.exe) included with Microsoft Fortan PowerStation version 4.0
	for Windows 95 and Windows NT does not support the LOCKING statement used in
	previous versions of the Microsoft Fortran compiler.
	
	RESOLUTION
	==========
	
	The OPEN statement's SHARE= option replaces the LOCKING feature.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	The SHARE= option does not have the same functionality that the LOCKING
	statement had. The SHARE= option does not support the locking of individual or
	groups of records. The SHARE= option can only be used to lock or restrict access
	to an entire file's contents.
	
	Additional query words: 4.00
	
	======================================================================
	Keywords          : kbFortranPS kbLangFortran 
	Technology        : kbAudDeveloper kbPTProdChange kbFortranSearch kbFORTRANPower400NT
	Version           : :4.0
	
	=============================================================================
	
