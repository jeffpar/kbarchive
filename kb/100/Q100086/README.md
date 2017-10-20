---
layout: page
title: "Q100086: Using the LINK32 -LINK Command"
permalink: /kb/100/Q100086/
---

## Q100086: Using the LINK32 -LINK Command

{% raw %}

	Article: Q100086
	Product(s): Microsoft Fortran Compiler
	Version(s): 1.0,1.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FORTRAN PowerStation for MS-DOS, versions 1.0, 1.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The text below presents the LINK32 linker, its command line options, and how to
	use the utility.
	
	The information is similar for FORTRAN PowerStation 32. Please see the
	documentation for more details.
	
	MORE INFORMATION
	================
	
	LINK32.EXE performs several functions, specified by one of the following
	command-line options:
	
	  -LINK   Create an executable file (linking)
	  -LIB    Create or modify a library (librarian)
	  -DUMP   Display information about a library
	
	The -LINK option directs LINK32 to create an executable file. Specifying the
	-LINK option is not required; creating an executable file from object modules is
	the utility's default behavior.
	
	LINK32 supports wildcard characters to specify object modules. This behavior is
	different from that of previous versions of LINK.
	
	The LINK32 -LINK options are as follows:
	
	    -DEBUG:[mapped|notmapped,]{none|minimal|partial|full}
	     -DEBUG:NONE is the default. If the command line specifies
	     -DEBUG:NONE or omits the -DEBUG option, LINK32 does not write
	     any debugging information into the executable file. -DEBUG:FULL
	     provides the same information as the LINK /CODEVIEW option in
	     the 16-bit linker.
	
	  -DEFAULTLIB:library[,library]
	     Specifies the alternate method to specify libraries. If the
	     LINK32 command line includes the -DEFAULTLIB option, separate
	     the names of successive libraries on the command line with a
	     comma; otherwise, use a space.
	
	  -MAP[:filename]
	     Specifies map file creation. LINK32 generates map files that
	     contain brief summary information about the size of code and
	     data followed by considerable detail about the code modules used
	     to link the application. The LINK32 -DUMP option provides
	     similar information.
	
	  -OUT:filename
	     Specifies the name for the executable file.
	
	  -STACK:[reserve][,commit]
	     Specifies the stack size for the executable file.
	
	  -VERSION:minor[.major]
	     Specifies the version number for the executable file (the
	     default version is 0.0).
	
	When you create a LINK32 command line, modify only the options listed above.
	Specify any other option on the FL32 command line exactly as provided in the
	documentation.
	
	Do not use the following options: ALIGN, BASE, DEBUGTYPE, NODEFAULTLIB, DLL,
	ENTRY, FIXED, FORCE, NOPACK, GPSIZE, HEAP, INCLUDE, MACHINE, ORDER, ROM,
	SECTION, STUB, SUBSYSTEM, and VERBOSE.
	
	Note: The Build Tools Help file in the Visual Workbench version 1.0 provides
	additional information about LINK32. However, this file does not list all the
	available options and it contains errors in the description of the DEBUG option.
	This article provides the most current information about LINK32 -LINK.
	
	The syntax to specify a response file is the same as that used by Microsoft LINK
	for MS-DOS: LINK32 @<responsefilename>. To add an additional object
	module, specify it on the same line as the existing object modules (with a space
	character separating the names) or specify it on the line following the existing
	object modules.
	
	The minimum LINK32 command line requires only the list of object modules and
	libraries, as follows:
	
	  LINK32 test.obj libf.lib libc.lib kernel32.lib ntdll.lib
	
	If desired, you could specify the libraries in a response file, such as
	DEFAULT.LRF, that contains the following line:
	
	 libf.lib libc.lib kernel32.lib ntdll.lib
	
	To specify this response file on the LINK32 command line, use the following
	syntax:
	
	  LINK32 test.obj @default.lrf
	
	LINK32 uses the .OBJ filename extension to identify object modules and the .LIB
	filename extension to identify libraries.
	
	LINK32 automatically converts OMF (Intel object module format) object modules to
	COFF object modules during the linking process if and only if the OMF files
	contain 32-bit flat memory model object code. For example, Microsoft Macro
	Assembler (MASM) version 6.1 creates OMF object files. LINK32 can directly
	process a 32-bit flat memory model file from MASM 6.1; the CVTOMF.EXE utility is
	not required.
	
	When linking from the command line (separate from a compilation), you must
	manually run the bind utility from the command line:
	
	  BINDMSF filename.EXE
	
	FL32 spawns the bind utility as part of a compilation; LINK32 does not. FL32
	provides an easy method to link from the command line because it generates all
	required options and default library names. It also recognizes the .LIB and .OBJ
	filename extensions and acts appropriately. For example, the following FL32
	command line links the two object modules with the library and binds the
	result:
	
	  FL32 file1.obj file2.obj user.lib
	
	The LINK32 command line that FL32 generates typically contains the following
	options when the FL32 command line contains the -Zi option switch:
	
	  -out:test.exe            Name of the executable file
	  -debug:none              No debugging information (default)
	  -machine:i386            Intel processor family (386, 486, and so
	                           on) Does not apply only to 386.
	  -base:0x00010000         Base location (default)
	  -subsystem:console       Targets Windows NT console
	  -entry:mainCRTStartup    Entry point symbolic name (default)
	  -stack:32768,4096        32K stack reserved, 4K committed
	  -defaultlib:libf.lib,libc.lib,kernel32.lib,ntdll.lib
	                           Default libraries
	  -debug:full              Include full debugging information
	  -debugtype:cv4           CodeView-type symbolic information
	  a.obj
	
	Note that the command line specifies the -DEBUG option twice; the second
	specification is correct.
	
	Additional query words: kbinf 1.00 1.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbFortranSearch kbZNotKeyword3 kbFORTRANPower100DOS kbFORTRANPower100aDOS
	Version           : :1.0,1.0a
	
	=============================================================================
	

{% endraw %}
