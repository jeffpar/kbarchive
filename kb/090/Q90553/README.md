---
layout: page
title: "Q90553: Unreferenced Packaged Functions Included With /Zi and /CO"
permalink: kb/090/Q90553/
---

## Q90553: Unreferenced Packaged Functions Included With /Zi and /CO

	Article: Q90553
	Product(s): Microsoft Programming Utilities
	Version(s): 
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 08-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft LINK for MS-DOS 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft C/C++ generates packaged functions when the compiler command line for
	a module specifies the /Gy option switch. The /PACKF option instructs Microsoft
	LINK to exclude unreferenced packaged functions from the executable image.
	
	However, if the compiler command line specifies both the /Gy and /Zi options and
	the LINK command line specifies the /CODEVIEW option, LINK includes the
	unreferenced packaged functions in the executable image.
	
	MORE INFORMATION
	================
	
	When an application refers to a function, the compiler generates a CEXTDEF
	record that contains the name of the function. If the object module does not
	contain a CEXTDEF record for a packaged function and the /PACKF linker switch is
	specified (the default behavior), the COMDAT record for the packaged function is
	not linked into the executable image. However, when the /Zi compiler option is
	specified when an application is compiled, the compiler generates a CEXTDEF
	record for each COMDAT record. Because these records indicate that the
	application refers to each function, the LINK includes the functions in the
	executable image. Visual C++ version 1.0 documents this behavior in its
	description of the /PACKF option as follows: "Packaged functions compiled with
	/Zi (to add debugging information) are referenced by the compiler. These
	functions are not removed by /PACKF."
	
	Additional query words: kbinf 5.30 5.31.009 5.50 5.60
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbZNotKeyword3 kbLINKSearch
	Version           : :
	
	=============================================================================
	
