---
layout: page
title: "Q134650: HOWTO: Get Info for Troubleshooting Compiler &amp; Linker Problems"
permalink: kb/134/Q134650/
---

## Q134650: HOWTO: Get Info for Troubleshooting Compiler &amp; Linker Problems

	Article: Q134650
	Product(s): Microsoft C Compiler
	Version(s): WINNT:1.0,2.0,2.1,2.2,4.0,4.1,5.0;
	Operating System(s): 
	Keyword(s): kbCompiler kbCPPonly kbGenInfo kbVC kbVC100 kbVC200 kbVC210 kbVC220 kbVC400 kbVC410 kbV
	Last Modified: 03-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 1.0, 2.0, 2.1, 2.2, 4.0, 4.1 
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you investigate a possible problem with the Microsoft Visual C++ compiler
	or linker, it is important to obtain as much information as possible about the
	build process and the options being used. This article discusses some
	trouble-shooting tips to help you resolve your build problem.
	
	MORE INFORMATION
	================
	
	Compiler Problems
	-----------------
	
	For compiler problems, such as internal compiler errors (for example, C1001),
	hangs, or crashes, use the /P switch to obtain additional compiler information.
	
	
	The /P compiler switch directs CL.EXE to send preprocessor output to a file. The
	preprocessor output file (with an extension of .i) has the same name as the file
	being compiled and is created in the same directory. Note that the build will
	not continue past the preprocessor phase when using this switch.
	
	You can compile the preprocessor output file by itself outside of the context of
	a project. The file contains all of the header file code, macro replacement, and
	preprocessed compiler directive information needed for the compilation of that
	particular .C or .CPP source file. The resulting file will often be long and
	contain a large amount of white space.
	
	Alternatively, you can use the /EP and /E compiler switches, which direct CL.EXE
	to send preprocessor output to the standard output device.
	
	
	Link Problems
	-------------
	
	For linker problems (LNKxxxx type errors), you can use the LINK_REPRO environment
	variable to reproduce the problem:
	
	1. Open up an MS-DOS session.
	
	2. Set LINK_REPRO to point to an existing and empty directory, for example:
	
	  SET LINK_REPRO=C:\TESTPROB
	
	3. Run the linker in the same MS-DOS session where the variable was set.
	
	4. Run the VCVARS32.BAT file from the Visual C++ BIN directory to set the
	  compiler environment variables.
	
	5. Change to your project directory, and run NMAKE to rebuild your project,
	  using this command:
	
	  NMAKE /a /f yourproj.mak
	
	The /a option directs NMAKE to perform a complete rebuild of the project.
	
	When LINK.EXE is invoked, it will copy everything it needs to link your project
	into the directory specified by the LINK_REPRO environment variable. Among the
	files copied will be your object files (*.OBJ), required library files (*.LIB),
	including Microsoft libraries, and a linker response file (LINK.RSP), so that
	LINK is no longer dependent on your project makefile.
	
	This feature is also available from the IDE if it has been run from an
	environment where the LINK_REPRO variable has been set.
	
	To confirm that you have all the necessary files to reproduce the link problem,
	you can run LINK in the directory specified by the LINK_REPRO environment
	variable, using the linker response file:
	
	  LINK @link.rsp
	
	Use the following command to switch off this feature:
	
	  SET LINK_REPRO=
	
	You can also use the LINK_REPRO environment variable to verify the files involved
	in creating a library, when using LIB.EXE or LINK /LIB.
	
	Additional query words: 9.0 9.00 9.1 9.10 9.2 9.20 2.55
	
	======================================================================
	Keywords          : kbCompiler kbCPPonly kbGenInfo kbVC kbVC100 kbVC200 kbVC210 kbVC220 kbVC400 kbVC410 kbVC500 kbVC600 kbArtTypeINF 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbvc100 kbVC220 kbVC410 kbVC500 kbVC600 kbVC200 kbVC210 kbVC32bitSearch kbVC500Search
	Version           : WINNT:1.0,2.0,2.1,2.2,4.0,4.1,5.0;
	Issue type        : kbhowto
	
	=============================================================================
	
