---
layout: page
title: "Q149746: BUG: Access Violation Calling Exported Subroutine in DLL"
permalink: kb/149/Q149746/
---

## Q149746: BUG: Access Violation Calling Exported Subroutine in DLL

	Article: Q149746
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
	
	When you use the !MS$ATTRIBUTES DLLEXPORT attribute to export a DLL's
	subroutine, and call that subroutine from another subroutine within the same DLL
	it causes the following Access Violation:
	
	  The instruction at "0x00000000" referenced memory at "0x00000000".
	  The memory could not be "written"
	
	RESOLUTION
	==========
	
	If you need to call an exported subroutine in a DLL, you should put this code
	into a non-exported helper subroutine and have the exported subroutine call the
	non-exported helper subroutine.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Build the DLL using the sub.for file listed below. At the MS-DOS command-line
	  prompt, type:
	
	  " fl32 /LD sub.for" (without the quotation marks)
	
	2. Build the MAIN program using the main.for file listed below, and link it to
	  the DLL static library file created in Step 1. At the same MS-DOS
	  command-line prompt, type:
	
	  " fl32 main.for sub.lib" (without the quotation marks)
	
	Sample Code to Illustrate Problem
	---------------------------------
	
	MAIN
	----
	
	  ! filename: main.for
	  ! Compile options needed: none
	        program fortapp
	          interface
	            subroutine thesub()
	              !ms$attributes dllimport, stdcall :: thesub
	            end subroutine
	          end interface
	     call thesub()
	        end program fortapp
	
	DLL
	---
	
	  ! filename: sub.for
	  ! Compile options needed: /LD
	        subroutine thesub()
	          !ms$attributes dllexport, stdcall :: thesub
	            interface
	              subroutine othersub()
	                !ms$attributes dllexport, stdcall :: othersub
	              end subroutine othersub
	       end interface
	          call othersub()
	        end subroutine
	        subroutine othersub()
	          !ms$attributes dllexport, stdcall :: othersub
	        end subroutine
	
	Additional query words: 4.00
	
	======================================================================
	Keywords          : kbFortranPS kbLangFortran kbbuglist
	Technology        : kbAudDeveloper kbPTProdChange kbFortranSearch kbFORTRANPower400NT
	Version           : :4.0
	
	=============================================================================
	
