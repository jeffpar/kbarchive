---
layout: page
title: "Q71554: BUG: Bad Results Displayed by CodeView for Huge COMMON Blocks"
permalink: /kb/071/Q71554/
---

## Q71554: BUG: Bad Results Displayed by CodeView for Huge COMMON Blocks

	Article: Q71554
	Product(s): Microsoft Programming Utilities
	Version(s): 2.3,3.0,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft CodeView for MS-DOS, versions 2.3, 3.0, 3.11 
	- Microsoft CodeView for OS/2, versions 2.3, 3.0, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Microsoft CodeView versions 2.30, 3.00, and 3.11 erroneously calculate the
	addresses of variables in FORTRAN COMMON blocks when these variables are
	preceded in the COMMON block by 65,535 or more bytes of data. The segment values
	of the addresses of these variables are calculated incorrectly, generating
	incorrect results for any CodeView function that uses symbolic names to display
	information. In particular, watch-expressions will show incorrect values for the
	contents of these variables.
	
	RESOLUTION
	==========
	
	If viewing a specific data item is necessary, it should be moved to the
	beginning of the COMMON block or placed in a separate COMMON block. If this is
	not possible, the LOCFAR intrinsic function can be used with FORTRAN versions
	4.0, 4.01, 4.1, and 5.0 to print out the correct memory address of the data
	item, which can then be used with a CodeView dump command, a watchpoint, or a
	breakpoint to view the required information.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in CodeView versions 2.3, 3.0, and 3.11
	for MS-DOS and OS/2.
	
	This is not an issue with FORTRAN PowerStation.
	
	MORE INFORMATION
	================
	
	The following program example illustrates the problem:
	
	Sample Code
	-----------
	
	        parameter(n=65535)               ! 64K less one byte
	
	        integer*1 arr1, arr2
	
	        common /test/ arr1(n), arr2(10)
	
	        arr1(1) = 1
	        arr2(1) = 2
	
	        write(*,'(a,z)') ' locfar(arr1) = ',locfar(arr1)
	        write(*,'(a,z)') ' locfar(arr2) = ',locfar(arr2)
	
	        end
	
	When running the above program under CodeView, the addresses displayed for arr1
	and arr2 are identical. This is because the offsets are correctly calculated as
	zero, but the segment of arr2 is incorrectly calculated as being the same as the
	segment of arr1. Consequently, watch-expressions for the two variables display
	identical values.
	
	Within CodeView, the offset of a variable preceded by 65,535 bytes in a COMMON
	block is always correctly determined, but the segment address is not. In the
	example above, if arr1 is increased in size, the memory locations of the two
	arrays are no longer mapped directly on top of each other by CodeView because
	the offsets will no longer be identical.
	
	CodeView does not appear to have a general problem with huge data items or items
	in COMMON blocks. The problem only occurs with data items in COMMON blocks when
	the starting address of the data item begins on or beyond the boundary of the
	second segment of the COMMON block. If a huge (greater than 64K bytes) data item
	has a starting address in the first segment of the COMMON block, all the
	elements of that data item are correctly displayed by CodeView.
	
	Additional query words: 2.30 3.00 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbCodeView kbZNotKeyword3 kbCodeView300DOS kbCodeView311DOS kbCodeView300OS2 kbCodeView311OS2
	Version           : :2.3,3.0,3.11
	
	=============================================================================
	
