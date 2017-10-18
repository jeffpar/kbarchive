---
layout: page
title: "Q71286: Macro Cannot Substitute String in Another Macro"
permalink: kb/071/Q71286/
---

## Q71286: Macro Cannot Substitute String in Another Macro

	Article: Q71286
	Product(s): Microsoft Programming Utilities
	Version(s): MS-DOS:1.01,1.11,1.12,1.13,1.2,1.3,1.4; NT:1.4,1.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft NMAKE Utility for MS-DOS, versions 1.01, 1.11, 1.12, 1.13, 1.2, 1.3, 1.4 
	- Microsoft NMAKE Utility for Windows NT, versions 1.4, 1.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	NMAKE supports macro substitution that allows you to replace the occurrences of
	one string in a macro with a substitute string. However, NMAKE does not support
	nesting macros; NMAKE does not evaluate a macro in another macro's replacement
	text.
	
	MORE INFORMATION
	================
	
	Consider a makefile that contains the following lines:
	
	     SAMPLE=sit sat set
	     NEW=m
	
	     all:
	        echo $(SAMPLE:s=b)
	
	The echo command displays the contents of the SAMPLE macro after all occurrences
	of the letter "s" in the macro have been replaced by the letter "b" (the
	resulting output is "bit bat bet"). However, the following macro substitution
	does not function as intended:
	
	  echo $(SAMPLE:s=$(NEW))
	
	This macro is designed to provide the output "mit mat met." However, in an NMAKE
	macro substitution, any characters between the equal sign and the right
	parenthesis are taken literally and NMAKE does not evaluate the embedded macro.
	In this case, the NMAKE produces the following output: "$(NEWit $(NEWat
	$(NEWet)".
	
	Additional query words: 1.10 1.20 1.30 1.40 1.50 kbinf
	
	======================================================================
	Keywords          :  
	Technology        : kbVCsearch kbAudDeveloper kbNMAKESearch kbNMAKE101DOS kbNMAKE111DOS kbNMAKE112DOS kbNMAKE113DOS kbNMAKE120DOS kbNMAKE130DOS kbNMAKE140DOS kbNMAKE140NT kbNMAKE150NT
	Version           : MS-DOS:1.01,1.11,1.12,1.13,1.2,1.3,1.4; NT:1.4,1.5
	
	=============================================================================
	
