---
layout: page
title: "Q71422: Maintaining a Library with NMAKE"
permalink: /kb/071/Q71422/
---

## Q71422: Maintaining a Library with NMAKE

{% raw %}

	Article: Q71422
	Product(s): Microsoft Programming Utilities
	Version(s): 1.01,1.11,1.12,1.13,1.2,1.21,1.3,1.4
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 23-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft NMAKE Utility for MS-DOS, versions 1.01, 1.11, 1.12, 1.13, 1.2, 1.3, 1.4 
	- Microsoft NMAKE Utility for OS/2, versions 1.01, 1.11, 1.12, 1.13, 1.21 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	NMAKE provides several features that ease the process of maintaining a library
	by incrementally updating only the modules that change. With the $? special
	macro and macro substitutions, the process involves only one call to LIB (the
	library maintenance utility). The text below presents makefiles that illustrate
	this procedure.
	
	MORE INFORMATION
	================
	
	The sample makefiles below keep MYLIB.LIB up to date with respect to the four
	object files listed in the OBJS macro. These object files can be based on C or
	assembly language source files. You can extend the list of source-file types the
	makefile supports by adding the appropriate inference rules to the description
	file.
	
	Sample makefile 1 includes the following line to maintain the library:
	
	     LIB MYLIB.LIB -+$(?: =-+);
	
	The $? macro expands to the list of all dependents that are out-of- date with
	respect to the target file. The "$(?: =-+)" part of the command-line is a macro
	substitution to be performed on the $? macro. This substitution instructs NMAKE
	expand $? to the list of out-of-date dependents, but then replace all spaces in
	the expanded list with the two-character pair "-+".
	
	For example, assume that only MOD1.OBJ, MOD3.OBJ, and MOD4.OBJ are each
	out-of-date with respect to MYLIB.LIB. The $? macro expands to the following:
	
	     MOD1.OBJ MOD3.OBJ MOD4.OBJ
	
	Therefore, $(?: =-+) actually causes the macro to be expanded with substitution
	as follows:
	
	     MOD1.OBJ-+MOD3.OBJ-+MOD4.OBJ
	
	With the remainder of the command line included for reference, the NMAKE executes
	the following command line:
	
	     LIB MYLIB.LIB -+MOD1.OBJ-+MOD3.OBJ-+MOD4.OBJ;
	
	Note that the first time you add a module to the library with this command, LIB
	generates a "U4155: module not in library" warning to indicate that LIB is
	unable to replace a module because it is not found in the library. You can
	ignore the warning because LIB simply adds the module to the library.
	
	This method works correctly as long as the OBJS macro does not contain too many
	modules. If the macro expansion causes the command line to exceed the MS-DOS or
	OS/2 command-line length limit (128 or 255 characters, respectively), the LIB
	call fails. If your library contains enough modules such that this may occur,
	then you should use the NMAKE in-line file capability to generate a response
	file.
	
	Sample makefile 2 below demonstrates the response file method. The makefile
	creates a response file named MYLIB.LRF that contains the lines of the makefile
	between the double angle bracket (<<) tokens. The contents of the makefile
	reflect a macro substitution that is very similar to the method demonstrated
	above. The major difference is as follows: an input line in the response file is
	required for each LIB prompt. Therefore, the macro substitution must place
	newline characters into the file. The following command does this:
	
	  -+$(?: = &^
	  -+);
	
	This command instructs NMAKE to expand the macro for out-of-date dependents by
	replacing each space with a space, and ampersand (&), a newline and a "-+"
	character pair. The caret (^) instructs NMAKE to interpret the next character
	literally, to place the newline character that follows the caret into the macro.
	(Because you type ENTER to place a newline character into the file, the end of
	the macro substitution must appear on the following line.)
	
	Therefore, given the same scenario as above, if MOD1.OBJ, MOD3.OBJ, and MOD4.OBJ
	are out-of-date with respect to MYLIB.LIB, the $? macro expands to the
	following:
	
	     -+MOD1.OBJ &
	     -+MOD3.OBJ &
	     -+MOD4.OBJ;
	
	With this method, you can maintain any number of object files with one call to
	LIB.
	
	Note: NMAKE version 1.1 (provided with Microsoft C versions 6.0 and 6.0a) does
	not expand the $? macro correctly unless the target- dependency line uses the
	multiple dependency operator, a double colon (::). To work around this problem,
	modify the makefile to specify a double colon instead of a single colon for the
	dependency that involves the library.
	
	For more information on macro substitution or in-line files, please refer to the
	NMAKE documentation or online help provided with your compiler. For more
	information on response files, please refer to the LIB or LINK documentation or
	online help.
	
	Sample NMAKE Makefile 1
	-----------------------
	
	  # The OBJS macro lists the object files to keep in the library.
	
	  OBJS = MOD1.OBJ MOD2.OBJ MOD3.OBJ MOD4.OBJ
	
	  .c.obj:
	      cl /c $?
	
	  .asm.obj:
	      masm $?;
	
	  mylib.lib : $(OBJS)
	      LIB MYLIB.LIB -+$(?: =-+);
	
	Sample NMAKE Makefile 2
	-----------------------
	
	  # The OBJS macro lists the object files to keep in the library.
	
	  OBJS = MOD1.OBJ MOD2.OBJ MOD3.OBJ MOD4.OBJ
	
	  .c.obj:
	      cl /c $?
	
	  .asm.obj:
	      masm $?;
	
	  mylib.lib : $(OBJS)
	      LIB $*.LIB @<<MYLIB.LRF
	  -+$(?: = &^
	  -+);
	  <<KEEP
	
	  # Note: The word "KEEP" after the << token is optional; it prevents
	  # NMAKE from deleting the in-line file that it creates. This also
	  # allows you to view MYLIB.LRF (after you finish running NMAKE) if you
	  # want to verify what NMAKE writes into the response file. By default,
	  # NMAKE deletes all in-line files before it terminates.
	
	Additional query words: kbinf 1.10 1.20 1.30 1.40 no32bit
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbVCsearch kbAudDeveloper kbNMAKESearch kbNMAKE101DOS kbNMAKE111DOS kbNMAKE112DOS kbNMAKE113DOS kbNMAKE120DOS kbNMAKE130DOS kbNMAKE140DOS kbNMAKE101OS2 kbNMAKE111OS2 kbNMAKE112OS2 kbNMAKE113OS2 kbNMAKE121OS2
	Version           : :1.01,1.11,1.12,1.13,1.2,1.21,1.3,1.4
	
	=============================================================================
	

{% endraw %}
