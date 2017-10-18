---
layout: page
title: "Q148608: BUG: Derived-Type with Pointer Expands Incorrectly in Debugger"
permalink: kb/148/Q148608/
---

## Q148608: BUG: Derived-Type with Pointer Expands Incorrectly in Debugger

	Article: Q148608
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
	
	When you debug a derived-type variable that contains a pointer to another
	derived-type object and you try to view the members of the pointed to object in
	a watch window, it fails. This causes the pointer to member structure to be
	incorrectly expanded out.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	Build the following sample code in Developer Studio with the /Zi compiler option,
	and then perform the following steps:
	
	1. Begin a debugging session; On the Developer Studio Debug menu, click Build,
	  and then click Step Into.
	
	2. Step through the main program beyond the allocate statement.
	
	3. In a watch window, type the variable name "root" (without the quotation
	  marks), and press the ENTER key.
	
	4. View the members of root. Click each of the (+) nesting symbols to expand
	  each level of the derived-type object root.
	
	Expanding root yields root%B%L%B%L%B%L instead of the correct pointer to member
	structure of root%B%l%i. Typing in the correct pointer to member structure in a
	watch window yields the following message in the corresponding value column:
	
	  Invalid structure member
	
	Sample Code
	-----------
	
	  C Compile options needed: /Zi
	
	        module types
	          type t_leaf
	            integer i
	          end type t_leaf
	
	          type t_branch
	            type (t_leaf), pointer :: l
	          end type
	
	          type t_root
	            type (t_branch) b
	          end type
	        end module types
	
	        program main
	          use types
	          implicit none
	
	          type (t_root) root
	          allocate( root%b%l )
	
	          root%b%l%i = 5
	        end program main
	
	Additional query words: 4.00
	
	======================================================================
	Keywords          : kbFortranPS kbLangFortran kbbuglist
	Technology        : kbAudDeveloper kbPTProdChange kbFortranSearch kbFORTRANPower400NT
	Version           : :4.0
	
	=============================================================================
	
