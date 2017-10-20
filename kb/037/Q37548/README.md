---
layout: page
title: "Q37548: Using CodeView to Examine FORTRAN Arrays"
permalink: /kb/037/Q37548/
---

## Q37548: Using CodeView to Examine FORTRAN Arrays

{% raw %}

	Article: Q37548
	Product(s): Microsoft Programming Utilities
	Version(s): 3.0,3.05,3.06,3.07,3.11,3.12,3.14,3.5,4.0,4.01,4.05,4.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft CodeView for MS-DOS, versions 3.0, 3.11, 3.14, 4.0, 4.01, 4.05, 4.1 
	- Microsoft CodeView for OS/2, versions 3.0, 3.11, 3.12, 3.5 
	- Microsoft CodeView for Windows, versions 3.0, 3.05, 3.06, 3.07, 4.0, 4.01, 4.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You can use CodeView to display a single element of a Fortran array using
	?arrayname(x,x,x), where "arrayname" consists of the first six characters of the
	array name and "(x,x,x)" must be a valid cell in the array.
	
	There is no way to display more than one cell of the array using this command. To
	display many cells, you must do a memory dump of the addresses where the array
	is stored or use the memory window in CodeView versions 3.0 and later.
	
	MORE INFORMATION
	================
	
	FORTRAN stores array elements in column-major order. Use the following formula
	to determine the address where any cell (i,j,k) is stored, where Max_Row is the
	maximum i possible and Max_Col is the maximum j possible:
	
	      MemAddr = start_addr+(size of elements)*
	                       (Max_Row((k-1)(Max_Col)+(j-1))+(i-1))
	
	"Size of elements" is the number of bytes of each element in the array.
	
	CodeView 4.0, 4.01, 4.05, and 4.1 do not have a FORTRAN expression evaluator and
	incorrectly display the array in the locals window.
	
	Additional query words: nofps kbinf 3.00 3.50 4.00 4.10
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbCodeView kbZNotKeyword3 kbCodeView300DOS kbCodeView311DOS kbCodeView314DOS kbCodeView400DOS kbCodeView401DOS kbCodeView405DOS kbCodeView410DOS kbCodeView300OS2 kbCodeView311OS2 kbCodeView312OS2 kbCodeView350OS2 kbCodeView300 kbCodeView305 kbCodeView306 kbCodeView307 kbCodeView400 kbCodeView401 kbCodeView410
	Version           : :3.0,3.05,3.06,3.07,3.11,3.12,3.14,3.5,4.0,4.01,4.05,4.1
	
	=============================================================================
	

{% endraw %}
