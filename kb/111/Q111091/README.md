---
layout: page
title: "Q111091: FIX: Compiler Displays Incorrect Line-Number Information"
permalink: /kb/111/Q111091/
---

## Q111091: FIX: Compiler Displays Incorrect Line-Number Information

{% raw %}

	Article: Q111091
	Product(s): Microsoft Fortran Compiler
	Version(s): 1.0,1.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FORTRAN PowerStation for MS-DOS, versions 1.0, 1.0a 
	- Microsoft Fortran Powerstation 32 for Windows NT, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An attempt to compile a file that contains more than 32767 source lines may
	produce incorrect line-number information for compile-time error and warning
	messages appearing after the 32767th line in a file. The line numbers displayed
	are either negative or fall in the 0 (zero) to 32767 range.
	
	When compiling from within the Visual Workbench, you cannot automatically jump to
	lines containing these invalid line numbers.
	
	CAUSE
	=====
	
	The line-number information is displayed as an INTEGER*2 value.
	
	RESOLUTION
	==========
	
	If a subprogram is less than 32K in size, place the subprogram in a separate
	file when compiling. Once debugged, the source file can be added to the end of
	the original file if desired.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in FORTRAN PowerStation 32 for
	Windows NT and MS-DOS, version 1.0 and 1.0A. This problem was fixed in FORTRAN
	PowerStation, version 4.0.
	
	MORE INFORMATION
	================
	
	The following code can be compiled and run to create a sample that demonstrates
	the problem:
	
	Sample Code
	-----------
	
	  c Compile options needed: none
	  c
	        open(1,file='b.for',status='new')  ! Creates B.FOR
	        write(1,*)   '     x = 0'
	        do i=1,32*1024 - 1
	          write(1,*) '     x = x + 1'
	        end do
	        write(1,*)   '     x == x + 1'
	        write(1,*)   '     print*, x'
	        write(1,*)   '     end'
	        end
	
	Additional query words: buglist1.00 1.00A
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbFortranSearch kbZNotKeyword2 kbZNotKeyword3 kbFORTRANPower32100NT kbFORTRANPower100DOS kbFORTRANPower100aDOS
	Version           : :1.0,1.0a
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
