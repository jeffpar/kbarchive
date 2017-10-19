---
layout: page
title: "Q112010: FIX: Access Violation on READ of Exported COMMON Array"
permalink: /kb/112/Q112010/
---

## Q112010: FIX: Access Violation on READ of Exported COMMON Array

	Article: Q112010
	Product(s): Microsoft Fortran Compiler
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Fortran Powerstation 32 for Windows NT, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Attempting to READ an array element that is exported from a COMMON block in a
	dynamic-link library (DLL) may generate an access violation message box under
	Windows NT.
	
	CAUSE
	=====
	
	This run-time error occurs when the data is read from an external file. This
	error does not occur with WRITE statements or when reading COMMON variables.
	
	RESOLUTION
	==========
	
	READ exported COMMON data into local allocatable arrays, and then assign these
	arrays to the arrays in the exported COMMON block.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in FORTRAN PowerStation for Windows
	NT, version 1.0. Microsoft is researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	The sample below illustrates the problem:
	
	Sample Code
	-----------
	
	  c MAIN Source Code
	  c Compile options required: none
	  c Linker options required: include the import library for the DLL.
	  c
	
	        interface to subroutine bar[dllimport]()
	        end
	        common /bridge[dllimport]/ i
	        integer*4 i(4)
	        open(3,file='main.inp')
	        read(3,*) i(1)
	        close(3)
	        call bar
	        end
	  c DLL Source Code
	  c Compile options required: /LD
	  c
	
	        subroutine bar[dllexport]()
	        common /bridge[dllexport]/ i
	        integer*4 i(4)
	        write(*,*) 'In DLL:'
	        return
	        end
	  Contents of main.inp:
	  1
	
	Additional query words: 1.00 Dr. Watson imported buglist1.00
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbFortranSearch kbZNotKeyword2 kbFORTRANPower32100NT
	Version           : :1.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
