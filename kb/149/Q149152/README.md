---
layout: page
title: "Q149152: BUG: !MS&#36;ATTRIBUTES in Interface Fails with Free-Form Source"
permalink: /kb/149/Q149152/
---

## Q149152: BUG: !MS&#36;ATTRIBUTES in Interface Fails with Free-Form Source

{% raw %}

	Article: Q149152
	Product(s): Microsoft Fortran Compiler
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbFortranPS kbLangFortrankbbuglist
	Last Modified: 03-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Fortran PowerStation for Windows 95 and Windows NT, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you assign an attribute to multiple variables with the same !ms$attributes
	metacommand in an interface block of a free-form source code file, only the
	first variable is given the attribute.
	
	RESOLUTION
	==========
	
	Do one of the following to work around the problem:
	
	- Specify the !ms$nofreeform metacommand for the interface block.
	
	-or-
	
	- Use one !ms$attribute metacommand for each variable.
	
	-or-
	
	- Use a fixed-form source code file.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	In the following sample code, when the compiler parses the line containing the
	!ms$attributes metacommand in the interface block, only the variable "i" is
	correctly assigned the value attribute. The variable "j" is not processed and
	therefore retains the default Fortran reference attribute.
	
	Sample Code to Demonstrate Problem and Workarounds
	--------------------------------------------------
	
	  ! Compile options needed: none
	  ! required extension: .F90
	        program test
	
	  ! uncomment the following line for the first workaround:
	  !!ms$nofreeform
	            interface
	                subroutine thesub(i, j)
	                    integer i, j
	  ! comment the following line for the second workaround:
	                     !ms$attributes value :: i, j
	  ! uncomment the following two lines for the second workaround:
	  !                   !ms$attributes value :: i
	  !                   !ms$attributes value :: j
	                end subroutine
	            end interface
	  ! uncomment the following line for the first workaround:
	  !!ms$freeform
	
	            integer i, j
	            i = 1
	            j = 2
	            call thesub(i, j)
	        end
	
	        subroutine thesub(i, j)
	            integer i, j
	            !ms$attributes value :: i, j
	            print *, i, j         ! should print "1 2"
	        end subroutine
	
	Additional query words: 4.00
	
	======================================================================
	Keywords          : kbFortranPS kbLangFortran kbbuglist
	Technology        : kbAudDeveloper kbPTProdChange kbFortranSearch kbFORTRANPower400NT
	Version           : :4.0
	
	=============================================================================
	

{% endraw %}
