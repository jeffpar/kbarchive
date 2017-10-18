---
layout: page
title: "Q104900: DOCERR: Q Edit Descriptor and % Intrinsics Not Supported"
permalink: kb/104/Q104900/
---

## Q104900: DOCERR: Q Edit Descriptor and % Intrinsics Not Supported

	Article: Q104900
	Product(s): Microsoft Fortran Compiler
	Version(s): 1.0,1.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FORTRAN PowerStation for MS-DOS, versions 1.0, 1.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Page 522 of the "Language Guide" lists the following as DEC VAX FORTRAN
	Extensions supported by PowerStation:
	
	- The Q edit descriptor returns the length of the input line
	
	- Inline variable length formatting (i.e., I<ln>, where "ln" is an
	  integer variable).
	
	- The call intrinsics %val, %descr, %ref, and %loc, which specify the method
	  used to pass arguments to routines.
	
	- Specifying the filename for a unit in an environment variable.
	
	This information is incorrect, and the above features are not supported by
	Microsoft FORTRAN PowerStation for MS-DOS.
	
	The Online documentation for FORTRAN PowerStation 32 contains the correct
	information.
	
	RESOLUTION
	==========
	
	Strike the following lines from page 522 of the "Language Guide" shipped with
	Microsoft FORTRAN PowerStation for MS-DOS, versions 1.0 and 1.0a:
	
	- Q Edit descriptor for FORMAT statement.
	
	- Inline variable-length formatting (for example, FORMAT ('I<test>'),
	  where test = 5).
	
	- Call intrinsics (%val, %descr, %ref, %loc).
	
	- Unnamed file opens getting their name from an environment variable, rather
	  than by query on the terminal.
	
	Additional query words: FORTRAN-77 nofps ANSI
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbFortranSearch kbZNotKeyword3 kbFORTRANPower100DOS kbFORTRANPower100aDOS
	Version           : :1.0,1.0a
	
	=============================================================================
	
