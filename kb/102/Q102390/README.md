---
layout: page
title: "Q102390: INFO: Keeping #include Files Out of VWB Dependency List"
permalink: kb/102/Q102390/
---

## Q102390: INFO: Keeping #include Files Out of VWB Dependency List

	Article: Q102390
	Product(s): Microsoft C Compiler
	Version(s): 1.0,1.5,1.52,2.0,2.1,4.0,4.1,4.2,5.0
	Operating System(s): 
	Keyword(s): kbide kbVC
	Last Modified: 29-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5, 1.52 
	- Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 2.1, 4.0, 4.1, 4.2, 5.0 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	By default, the Visual Workbench includes files in the dependency list even if
	they are included between an #ifdef, #endif pair. In some situations, this
	behavior may be undesirable. The following article describes several ways to
	keep the files out of the dependency scanning process.
	
	MORE INFORMATION
	================
	
	The Visual Workbench scans a file for header file dependencies by looking for
	lines in a source file that have the form
	
	     #include <filename.h>
	
	-or-
	
	     #include "filename.h"
	
	Because the dependency scanner does not have a preprocessor, it will include
	headers file in the dependency list even if they conditionally included using an
	#ifdef as shown below.
	
	For example, with the following code, the file "unixstuf.h" will be tagged as a
	dependency when the makefile is built:
	
	     #define _WIN32
	     #ifndef _WIN32
	     #include <sys/unixstuf.h>
	     #endif
	
	To get the desired behavior:
	
	Add the file name to the Visual C++ system header exclusion file, SYSINCL.DAT,
	found in the product BIN directory. The SYSINCL.DAT file is used by the Visual
	Workbench to prevent scanning specified files for dependencies. In its initial
	state, SYSINCL.DAT lists the system include files that are unlikely to change.
	You can edit this file to prevent the Visual Workbench from scanning other
	files, such as header files that you know will not change, or to scan system
	files that you alter. If you delete the SYSINCL.DAT file, Visual Workbench
	restores it to its default state the next time you start Visual Workbench.
	
	For Visual C++ 32-bit Edition, you have the option of creating MSVCINCL.DAT in
	the Windows NT directory. As the Visual C++ 4.0 Books Online state in the entry
	for "Updating Dependencies":
	
	  You can list in [MSVCINCL.DAT] additional files that you want to exclude,
	  such as headers for external class libraries or some of the include files in
	  a large project. You should use this file for additions because SYSINCL.DAT
	  may be overwritten if you reinstall Visual C++, if you modify your
	  installation with Setup, or if you update your installation. . . . These
	  lists should contain only files that are not likely to change often.
	
	Make any necessary changes to SYSINCL.DAT or MSVCINCL.DAT before you start the
	Visual Workbench.
	
	REFERENCES
	==========
	
	For more information about SYSINCL.DAT with Visual C++ for Windows or Visual C++
	32-bit Edition, versions 1.0 and 2.x, choose Visual Workbench from the Visual
	Workbench Help menu and choose Search. Type "SYSINCL.DAT" and choose OK. For
	more information about SYSINCL.DAT or MSVCINCL.DAT with Visual C++ 32-bit
	Edition, version 4.0, search the Books Online for "updating dependencies".
	
	NOTE: Each filename in these files must have a newline character sequence
	immediately following the last character of the filename. The newline character
	sequence is inserted by simply positioning the input cursor and pressing the
	<enter> key.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbide kbVC 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbvc150 kbvc100 kbVC410 kbVC420 kbVC500 kbVC200 kbVC210 kbVC32bitSearch kbVC16bitSearch kbVC152 kbVC500Search
	Version           : :1.0,1.5,1.52,2.0,2.1,4.0,4.1,4.2,5.0
	Issue type        : kbinfo
	
	=============================================================================
	
