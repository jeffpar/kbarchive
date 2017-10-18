---
layout: page
title: "Q82549: GP Faults with Microsoft FORTRAN 5.1 Programs"
permalink: kb/082/Q82549/
---

## Q82549: GP Faults with Microsoft FORTRAN 5.1 Programs

	Article: Q82549
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Using the Microsoft FORTRAN version 5.1 dynamic-link libraries (DLLs) for
	Windows causes a general protection (GP) fault when the read or write statement
	is called in binary mode while running FORTRAN under Windows version 3.1.
	
	
	You may also receive GP faults when running programs written using the FORTRAN
	5.1 compiler, if the following line is in the FORTRAN definitions file:
	"APPLOADER __MSLANGLOAD". This line is for a special loading module designed for
	programs that have static data items larger than 64K running in Windows 3.0.
	Removing or remarking out this line solves the GP faults in Windows 3.1.
	
	Note: If this is done on a Windows 3.0 system, the program no longer runs
	correctly.
	
	If the problem still continues, contact Microsoft PSS Language Support at (425)
	635-7015.
	
	Additional query words: 3.10 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
