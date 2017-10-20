---
layout: page
title: "Q72886: DOCERR: MASM 6.0 Programmer's Guide Errors: Chapters 1-6"
permalink: /kb/072/Q72886/
---

## Q72886: DOCERR: MASM 6.0 Programmer's Guide Errors: Chapters 1-6

{% raw %}

	Article: Q72886
	Product(s): Microsoft Macro Assembler
	Version(s): MS-DOS:6.0,6.0a,6.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), versions 6.0, 6.0a, 6.0b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following is a list of documentation additions and corrections for Chapters
	1 through 6 of the "Microsoft Macro Assembler Programmer's Guide" for version
	6.0. The section and page numbers are listed first, followed by a description of
	the addition or correction.
	
	Section 1.2.1, Page 12
	----------------------
	
	The following paragraph comes from the README.DOC file included with the MASM 6.0
	package. Add the paragraph to the description of reserved words in Section
	1.2.1:
	
	  With the /Zm command-line option or OPTION M510, keywords and instructions
	  that are not available in the current CPU mode (such as ENTER under .8086)
	  are not treated as keywords. The USE32, FLAT, FAR32, and NEAR32 segment types
	  and the 80386/486 registers are not keywords with processor selection
	  directives less than .386.
	
	Section 3.3.1, Page 75
	----------------------
	
	In the sample code at the top of the page, STRUCT PERSON should be PERSON
	STRUCT.
	
	Section 3.2.4.1, Page 70
	------------------------
	
	Add an additional instruction in the program example shown in the paragraph
	titled "Accessing Structure Elements." The example should read:
	
	      .
	      .
	      .
	      mov     bx, OFFSET students
	      mov     ax, 4
	      mov     di, SIZE STUDENT
	      mul     di
	      mov     di,ax               ; This line is added. It places the
	                                  ; result of the multiply into DI
	
	      mov     al,(STUDENT PTR[bx+di]).year
	
	Section 3.2.4.3, Page 73
	------------------------
	
	The example line at the top of page 73 states:
	
	     mov     eax,[ebp*2]     ; EBP base (only - seg SS)
	
	This should read as follows:
	
	     mov     eax,[ebp*2]     ; EBP base (only - seg DS)
	
	The EBP register is treated as an index register because it is scaled, and
	therefore the DS register is assumed not SS.
	
	Section 4.1.1, Page 87
	----------------------
	
	The table at the top of page 87 incorrectly states that the size of a variable
	defined with the DWORD or SDWORD initializer is 3 bytes. This should show that a
	variable of size DWORD or SDWORD is 4 bytes, not 3.
	
	Section 4.2.2.1, Page 95
	------------------------
	
	The last paragraph on page 95 states:
	
	  If you use these stack values often in your program, you may want to give
	  them labels. For example, you can use TEXTEQU to create a label such as count
	  TEXTEQU <bp-6>.
	
	This should read:
	
	  If you use these stack values often in your program, you may want to give
	  them labels. For example, you can use TEXTEQU to create a label, such as
	  "count TEXTEQU <[bp-6]>".
	
	Section 5.2, Page 124
	---------------------
	
	The following paragraph should be added to Section 5.2. This addition comes from
	the README.DOC file.
	
	  The ALIGN, EVEN, and ORG directives can be used during structure definition
	  to modify how offsets of elements are defined. The EVEN and ALIGN directives
	  will round the current field offset up to the specified align value by
	  inserting padding bytes into the skipped space. The ORG directive may be used
	  to change the current field offset to a new value, either positive or
	  negative. If the ORG directive is used in a structure definition, you cannot
	  create an instance of the structure.
	
	Section 5.2.2, Page 127
	-----------------------
	
	Change this line in the first example of Section 5.2.2 "Defining Structure and
	Union Variables:"
	
	     ITYPE     UNION
	
	This should be:
	
	     UNION     ITYPE
	
	Section 5.2.2, Page 129
	-----------------------
	
	On page 129, the comments in the program example, as well as the last paragraph,
	incorrectly state that a literal string cannot initialize a structure field that
	is defined with DUP. This statement is incorrect because it can be done.
	
	Additional query words: 6.00 6.00a 6.00b
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM600 kbMASM600a kbMASM600b
	Version           : MS-DOS:6.0,6.0a,6.0b
	
	=============================================================================
	

{% endraw %}
