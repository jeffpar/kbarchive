---
layout: page
title: "Q149511: BUG: FOR3278 and FOR3852 !MS&#36;NOFREEFORM After Subroutine END"
permalink: /kb/149/Q149511/
---

## Q149511: BUG: FOR3278 and FOR3852 !MS&#36;NOFREEFORM After Subroutine END

	Article: Q149511
	Product(s): Microsoft Fortran Compiler
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbCompiler kbFL32 kbFortranPSkbbuglist
	Last Modified: 03-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Fortran PowerStation for Windows 95 and Windows NT, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Compiling a source file that contains the !msnofreeform or $nofreeform
	metacommand immediately following a subroutine END statement (on the previous
	line) causes the following compilation errors:
	
	  error FOR3728: 'name1' found when 'name2' expected in END SUBROUTINE
	  statement detected between SUBROUTINE and 'name1'
	
	  -and-
	
	  error FOR3852: syntax error detected between 'name1' and (
	
	RESOLUTION
	==========
	
	Do one of the following:
	
	- Change the subroutine's END statement to: end subroutine.
	
	-or-
	
	- Insert a blank line between the subroutine END statement and the
	  !ms$nofreeform or $nofreeform metacommand.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Sample Code to Illustrate Problem
	---------------------------------
	
	  ! Compile options needed: none
	
	        call test1
	        end
	
	        subroutine test1()
	  !ms$freeform
	  write(*,*) 'in test1'
	  call test2
	  ! uncomment the following line for first workaround
	  ! end subroutine
	  ! comment the following line for second workaround
	  end  ! insert a blank line after END statement for second workaround
	  !ms$nofreeform   ! or $nofreeform
	
	        subroutine test2()
	        write(*,*) 'in test2'
	        END
	
	Additional query words: 4.00
	
	======================================================================
	Keywords          : kbCompiler kbFL32 kbFortranPS kbbuglist
	Technology        : kbAudDeveloper kbPTProdChange kbFortranSearch kbFORTRANPower400NT
	Version           : :4.0
	
	=============================================================================
	
