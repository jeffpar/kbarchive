---
layout: page
title: "Q101264: Assembling Code Developed for MASM 5.x with MASM 6.x"
permalink: /kb/101/Q101264/
---

## Q101264: Assembling Code Developed for MASM 5.x with MASM 6.x

	Article: Q101264
	Product(s): Microsoft Macro Assembler
	Version(s): 6.0,6.0a,6.0b,6.1,6.11,6.1a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), versions 6.0, 6.0a, 6.0b, 6.1, 6.1a, 6.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Later versions of the Microsoft Macro Assembler (MASM) provide many advanced
	features that previous MASM versions do not provide. They incorporate many
	features previously found only in high-level languages, significantly increasing
	your programming productivity, which also offering performance improvements.
	Some of these new features require changes that make source code developed with
	MASM version 5.1 incompatible with the default behavior of MASM versions 6.0 and
	later.
	
	MORE INFORMATION
	================
	
	To provide these major functionality enhancements while continuing to offer
	backward compatibility with previous versions, MASM 6.0 and later provide a
	special compatibility mode of assembly. You can access this mode in any of three
	ways:
	
	- Use the MASM.EXE conversion driver. This method converts your existing
	  command-line options to the new syntax, adds a compatibility option (/Zm),
	  and invokes the new ML.EXE assembler. This method also preserves your
	  existing makefiles and batch files.
	
	- Use the new ML.EXE assembler with the /Zm option. This method eliminates the
	  requirement to run the conversion driver but it requires you to convert your
	  command-line options to the new MASM 6.0 and later syntax.
	
	- Edit each source code file to start with the OPTION M510 statement. This
	  method is equivalent to adding the /Zm option to the command line. It allows
	  you to assemble both old and new modules in ML.EXE using one command line.
	
	Any of these three methods will, in most cases, support assembling existing code
	with MASM 6.0 and later, gaining access to some of its new capabilities. If you
	code assembles in MASM 5.1 or earlier, but does not assemble in the
	compatibility mode, please refer to Appendix A of the "Programmer's Guide."
	
	In most cases, using the /Zm option or OPTION M510 to assemble your existing code
	is the best solution. This method requires the minimum changes to the code and
	you can add some of the new assembler features as you modify or add to your
	code. If you prefer to modify your code to support assembling it without the /Zm
	or OPTION M510 options, perform the following four steps:
	
	1. Convert the command line to the equivalent ML.EXE form and assemble your
	  code. Verify that your code assembles with the /Zm option. You must convert
	  the command line manually because the MASM.EXE conversion driver
	  automatically adds the /Zm option to the command line.
	
	2. Add the appropriate OPTION directives to your code.
	
	   - Always add the following
	
	           OPTION OLDSTRUCTS ; Supports old-style structures
	           OPTION OLDMACROS  ; Supports old-style macros
	           OPTION DOTNAME    ; Supports naming identifiers with
	                             ; a leading dot [.]
	
	   - If your code does not specify the .386 or .386P directive, add the
	     following:
	
	           OPTION EXPR16     ; Use 16-bit precision in expressions
	
	   - If your code does not contain a .MODEL directive, add the following:
	
	           OPTION OFFSET:SEGMENT ; Specifies that the OFFSET operator
	                                 ; defaults to segment-relative rather
	                                 ; than group-relative
	
	   - If your code does not contain a .MODEL directive or if the .MODEL
	     directive does not specify a language, add the following:
	
	           OPTION NOSCOPED       ; Makes code labels global rather than
	                                 ; local to the procedure in which they
	                                 ; appear
	           OPTION PROC:PRIVATE   ; Makes code labels defined with PROC
	                                 ; local unless specified otherwise
	
	3. Remove the /Zm option from the command line and assemble your code. Because
	  the OPTION statements replicate most of the effects of the /Zm option, the
	  code should assemble without problems. However, because certain effects of
	  the /Zm option do not have corresponding OPTION statements, some applications
	  may not assemble.
	
	  The most common cause for an application to fail to assemble in this situation
	  involves using processor or coprocessor instruction names as label names. If
	  this is the case in your code, use the OPTION KEYWORD directive to remove
	  these label names from the reserved word list. The syntax for the OPTION
	  KEYWORD directive is as follows:
	
	  OPTION NOKEYWORD:<keyword>
	
	  If you have other assembly problems, please refer to Appendix A of the
	  "Programmer's Guide" for information about these effects and suggested
	  methods to work around them.
	
	4. Remove each OPTION directive, one at a time, and assemble the code after you
	  remove each one.
	
	  Usually, it is best to remove the OPTION directives in the opposite order in
	  which you added them. In some cases, you may decide that you prefer the MASM
	  5.x compatibility behavior instead of the new MASM 6.x behavior. When this is
	  true, do not remove the corresponding OPTION statement from your code. Please
	  refer to Appendix A of the "Programmer's Guide" for more information on
	  resolving any problems that appear.
	
	Additional query words: kbinf 6.00 6.00a 6.00b 6.10 6.10a
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM600 kbMASM610 kbMASM611 kbMASM610a kbMASM600a kbMASM600b
	Version           : :6.0,6.0a,6.0b,6.1,6.11,6.1a
	
	=============================================================================
	
