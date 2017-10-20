---
layout: page
title: "Q133105: FORTRAN PowerStation 32 README.TXT: Miscellaneous"
permalink: /kb/133/Q133105/
---

## Q133105: FORTRAN PowerStation 32 README.TXT: Miscellaneous

{% raw %}

	Article: Q133105
	Product(s): Microsoft Fortran Compiler
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Fortran Powerstation 32 for Windows NT, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following information is from the Microsoft FORTRAN PowerStation 32
	README.TXT file located in the \FPSNT\README directory.
	
	This file has four parts:
	
	    Part     Contents
	    ----     --------
	     1       Installation
	     2       Debugging
	     3       Building and Running Programs
	     4       Miscellaneous
	
	MORE INFORMATION
	================
	
	=======================< Part 4: Miscellaneous >========================
	
	Floating-Point Precision: FP10.OBJ
	----------------------------------
	The run-time libraries set the default internal precision of the chip
	(or emulator) to 64 bits. Note that this does not apply to the size of
	arguments, return values, or variables; it only applies to the internal
	precision at which all intermediate calculations are performed. You can
	override this default and set the chip (or emulator) back to full
	80-bit, 10-byte precision by linking in the FP10.OBJ file, installed by
	Setup in your Fortran PowerStation LIB directory. If you are building
	your application in the Visual Workbench, do the following:
	
	1. From the Options menu, choose Project. The Project Options dialog
	  box appears.
	
	2. Choose Linker. The Linker Options dialog box appears.
	
	3. In the Category box, select Input.
	
	4. Type FP10.OBJ in the Object/Library Modules box.
	
	5. Choose OK. The Project Options dialog box reappears.
	
	6. Choose OK.
	
	If you are running the linker from the command line, FP10.OBJ must
	appear on the linker command line before any library files (.LIB).
	
	Notes on Using NAMELIST Statement
	---------------------------------
	A value-assignment pair consists of a variable name, array element, or
	substring followed by an equal sign and one or more values or value
	separators. The equal sign can be preceded or followed by any number
	of blanks, or by no blanks at all. A value separator is a single comma
	or one or more blanks. Tabs are valid as white-space separators.
	
	Using Assumed-Size Arrays of Structures
	---------------------------------------
	Writing an assumed-size array without specifying element indexes should
	produce an error, but does not if the array is an array of structures.
	
	    subroutine sub(s)
	    structure /struc/ 
	      real r
	    end structure
	    record /struc/ s(*)
	
	C  The following line is incorrect, but will not produce an error:
	    write(*,*) s(i).r
	
	C  Instead, a write statement such as the following should be used:
	    write(*,*) (s(i).r, i=1,10)
	
	Reading Index before Structure Array Element
	--------------------------------------------
	The FORTRAN standard (p12-15) states that READ statements of the form
	
	     READ (unit) N, A(N)
	
	are valid, and that the value READ for N is transferred to N before
	A(N) is read. This works fine for a standard array, but not when the
	array is a structure element, as the following example illustrates:
	
	     STRUCTURE /struc/ 
	       INTEGER*2 arr(5)
	     END STRUCTURE
	     RECORD /struc/ st
	     INTEGER*2 arr(5)
	
	     OPEN(1,FILE='test.dat')
	     DO WHILE (.not.eof(1))
	        READ(1,*) j,arr(j)  ! The value of 'j' does transfer to
	                            ! 'arr' correctly.
	     ENDDO
	
	     WRITE(*,*) 'Non-structure array'
	     DO j=1,5
	        WRITE(*,*) j,arr(j)
	     ENDDO
	
	     REWIND(1)
	     DO WHILE (.not.eof(1))
	        READ(1,*) j,st.arr(j)  ! The value of 'j' does not transfer
	                               ! to 'st.arr' correctly.
	     ENDDO
	
	     WRITE(*,'(/1x,a)') 'Structure array'
	
	     DO j=1,5
	       WRITE(*,*) j,st.arr(j)
	     ENDDO
	     END
	
	The output from this program is:
	
	Non-structure array
	         1           1
	         2           2
	         3           3
	         4           4
	         5           5
	
	Structure array
	         1           2
	         2           3
	         3           4
	         4           5
	         5           0
	
	Command Line Access to Help Files
	---------------------------------
	You can open and search the FORTRAN Visual Workbench help files from the
	console command line by using the "fhelp" command:
	
	Usage: fhelp [Error | Language | Compile | LInk] <search-string>
	
	Note that you can abbreviate categories by specifying at least the
	capital letters shown.
	
	Examples:
	     "fhelp error lnk1104" provides information on LINK error 1104
	
	     "fhelp lang record" provides information on the RECORD statement
	
	     "fhelp comp /Ox" provides information on the /Ox compiler switch
	
	The fhelp command runs WinHelp to display the requested information
	from the appropriate help file. If the search-string is not found, a
	selection box is presented to further narrow the search. Note that the
	search-string is optional; if it is not present, fhelp will provide a
	table of contents for the selected help file.
	
	Using Extended Characters in Console Applications
	-------------------------------------------------
	Because FORTRAN Visual Workbench runs in Microsoft Windows NT and
	produces console applications that run in an emulation of MS-DOS, two
	distinct character sets are used: ANSI and OEM. The ANSI set is normally
	used in Windows; the OEM set is used in MS-DOS. Both character sets
	contain extended characters (such as accented letters and line-drawing
	symbols), but the numerical representation of these characters is
	different. Windows NT provides a special font called TERNIMAL that uses
	the OEM character set. If you use extended characters in your files, you
	need to know about both character sets.
	
	FORTRAN Visual Workbench is an ANSI editor; it does not convert
	characters to the OEM character set.  If you want to see the true
	OEM characters, use the TERMINAL font.  If you want to enter OEM
	characters, add a zero to the beginning of the character code.
	(For example, 'ALT + 0130' will produce an accented 'e'; typing
	'ALT + 130' will produce the ANSI character.) No translation is
	performed when files are loaded or saved. The editor displays the
	character representation of what was in the file. When a character
	is entered, it is translated to ANSI and saved as that value. This
	applies for all characters on the keyboard, including an e-accent
	on an international keyboard and an ALT+number entered from the
	numeric key pad. The only time a translation is not done is when an
	ALT+0+number is entered. When looking at a file from the command
	console, you will get the OEM representation of the characters.
	
	We recommend that you do not use extended characters in filenames.
	
	Wrong Example Code in Reference Manual for CYCLE
	------------------------------------------------
	The CYCLE statement's example in the Reference Manual is incorrect.
	Help contains the correct program as CYCLE.FOR.
	
	Additional query words: 1.00
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbFortranSearch kbZNotKeyword2 kbFORTRANPower32100NT
	Version           : :1.0
	
	=============================================================================
	

{% endraw %}
