---
layout: page
title: "Q106467: Macros and Switches Not Defined in Visual C++ 32-bit Edition"
permalink: /kb/106/Q106467/
---

## Q106467: Macros and Switches Not Defined in Visual C++ 32-bit Edition

{% raw %}

	Article: Q106467
	Product(s): Microsoft C Compiler
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C/C++ Compiler (CL.EXE), included with:
	   - Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In the past, _MSDOS was defined by Microsoft C and C++ compilers. However,
	Visual C++, 32-bit Edition, does not target 16-bit MS-DOS or 16-bit Windows
	executables, and therefore some macros are no longer defined. Also, some
	compiler switches such as /G0 and /Gc are not used with Visual C++, 32-bit
	Edition.
	
	MORE INFORMATION
	================
	
	Macros not defined by Visual C++, 32-bit Edition are:
	
	  _FAST
	  _QC
	  M_I86, _M_I86
	  M_I8086, _M_I8086
	  M_I286, _M_I286
	  M_I86xM, _M_I86xM
	  MS_DOS, _MS_DOS
	  _WINDLL
	  _WINDOWS
	  _PCODE
	
	Compiler switches not recognized by Visual C++, 32-bit Edition are:
	
	  Switch               Description
	  -------------------------------------------------------------------
	
	  /A                   Memory models
	  /batch               Compile in batch mode
	  /Bm                  Increase compiler capacity
	  /Fs                  Create source file listing
	  /Fc                  Create combined source, assembly, machine code
	                       listing
	  /f                   Fast compile
	  /FPi                 Use floating-point emulation
	  /FPa                 Use alternate math
	  /FPc87               Use 80x87 calls
	  /FPc                 Use coprocessor calls
	  /FPi87               Use inline 80x87 instructions
	  /G0 /G1 /G2          Processor-specific code
	  /GA /GD              Prologue/epilogue code for protected mode Windows
	  /GE                  Customize Windows entry/exit code
	  /Gc                  Pascal/FORTRAN calling convention
	  /Gn                  Remove p-code native entry points
	  /Gp                  Specify entry tables
	  /Gq                  Simplified real mode Windows prologue/epilog code
	  /Gt                  Set data threshold
	  /GW /Gw              Generate real mode Windows prologue/epilogue code
	  /Gx /Gx-             Specify that data is far or near
	  /Ld /Lw              Control library selection
	  /Ln                  Link without C run-time startup code
	  /MA                  Specify Macro Assembler options
	  /Mq                  Compile for QuickWin support
	  /ND /NM /NQ /NT /NV  Name the data and code segments
	  /Oc /Oe /Of /Ol /On  Optimizations
	  /Oo /Oo- /Oq /Or
	  /OVn /Ov /Ov- /Oz
	  /Sl /Sp /Ss /St      Source-listing format options
	  /Ta                  Specify assembly source file
	  /Zr                  Check pointers
	
	For more information concerning which macros are predefined or about command-line
	options used by the compiler, select the Help menu option in the Visual
	Workbench and search on "Macros", or choose Build Tools from the Help menu. This
	information is also available in Chapter 2 of the "Build Tools User's Guide" and
	Chapter 1 of the "Preprocessor Reference."
	
	Additional query words: kbinf 1.00 2.00 4.00 8.00 9.00
	
	======================================================================
	Keywords          :  
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	
	=============================================================================
	

{% endraw %}
