---
layout: page
title: "Q148183: BUG: FOR2206 Error Illegal Access of Module Member"
permalink: kb/148/Q148183/
---

## Q148183: BUG: FOR2206 Error Illegal Access of Module Member

	Article: Q148183
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
	
	The USE statement's ONLY option allows access to those module members specified
	in the only-list. Attempting to gain access to a module's member not specified
	in the USE statement's ONLY option only-list results in a compilation error
	similar to the following:
	
	  error FOR2206: inconsistent data type for FUNCTION <function-name> from
	  procedure <module-name> and procedure <procedure-name>
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	In the following sample code, both the SETWRITEMODE() function and the $GPSET
	constant are defined in the MSFLIB module although the $GPSET constant is the
	only module member specified as accessible to the program unit. When compiling,
	the sample code the compiler erroneously attempts to gain access to the
	definition of the SETWRITEMODE() function resulting in the FOR2206 compiler
	error.
	
	Sample Code
	-----------
	
	  C Compile options needed: none
	
	        use msflib, only: $GPSET
	        i = SETWRITEMODE( $GPSET )
	        end
	
	Additional query words: 4.00
	
	======================================================================
	Keywords          : kbFortranPS kbLangFortran kbbuglist
	Technology        : kbAudDeveloper kbPTProdChange kbFortranSearch kbFORTRANPower400NT
	Version           : :4.0
	
	=============================================================================
	
