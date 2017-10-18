---
layout: page
title: "Q22343: PRB: Does Not Support Logical Operations on FORTRAN Strings"
permalink: kb/022/Q22343/
---

## Q22343: PRB: Does Not Support Logical Operations on FORTRAN Strings

	Article: Q22343
	Product(s): Microsoft Programming Utilities
	Version(s): 2.2,3.0,3.11,3.12,3.14,3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft CodeView for MS-DOS, versions 2.2, 3.0, 3.11, 3.14 
	- Microsoft CodeView for OS/2, versions 2.2, 3.0, 3.11, 3.12, 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Set a watchpoint on a string in a FORTRAN program by using the following line:
	
	     fred.eq.'test'
	
	CodeView always returns the message "Operand types invalid for this operation."
	
	CAUSE
	=====
	
	CodeView does not support logical operations on Fortran strings (however, it
	does with C strings). Therefore, you cannot use the logical operator "eq" on the
	string for setting up the watchpoint.
	
	Additional query words: 2.20 3.00 3.50
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbCodeView kbZNotKeyword3 kbCodeView220DOS kbCodeView300DOS kbCodeView311DOS kbCodeView314DOS kbCodeView220OS2 kbCodeView300OS2 kbCodeView311OS2 kbCodeView312OS2 kbCodeView350OS2
	Version           : :2.2,3.0,3.11,3.12,3.14,3.5
	
	=============================================================================
	
