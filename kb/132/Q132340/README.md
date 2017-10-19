---
layout: page
title: "Q132340: INFO: Common File Extensions Used by Visual C++"
permalink: /kb/132/Q132340/
---

## Q132340: INFO: Common File Extensions Used by Visual C++

	Article: Q132340
	Product(s): Microsoft C Compiler
	Version(s): 1.00 1.50 1.51 1.52 | 1.00 2.00
	Operating System(s): 
	Keyword(s): kbGenInfo kbide kbVC kbVC100 kbVC150 kbVC151 kbVC152 kbVC200 kbVC210 kbVC220 kbVC400 kb
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 1.0, 1.5, 1.51, 1.52 
	- Microsoft Visual C++, versions 2.0, 2.1, 2.2, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Visual C++ writes and uses a number of files during the build process. This
	article describes the file extensions commonly used in a Visual C++ project.
	
	MORE INFORMATION
	================
	
	Files Used by Visual C++
	------------------------
	
	.C -- C language source file:
	
	This file is compiled as a C file. If it contains C++ code, you must either
	rename the file to a .CPP or .CXX file or use the /Tp switch when compiling the
	file. Microsoft recommends that you rename the file to have the .CPP or .CXX
	extension if the source file contains C++ code.
	
	.CPP or .CXX -- C++ language source file:
	
	This file is compiled as a C++ file. To compile it as a C file instead (assuming
	there is no C++ code in the source file), you must either rename the file to a
	.C file (recommended) or use the /Tc switch when compiling the file.
	
	.H, .HPP, or .HXX -- Header file:
	
	A header file is often used for function prototypes, class definitions, or
	constant definitions. The .H, .HPP, or .HXX files can be included in multiple
	source files.
	
	.INL -- Inline function file:
	
	This file contains inline function definitions.
	
	.RC or .RC2 -- Resource file:
	
	This file holds the project's resource information such as the descriptions of a
	dialog box, a menu bar, or a string table. This file is compiled by the resource
	compiler (RC.EXE). When you use Visual C++'s AppWizard to generate an MFC
	(Microsoft Foundation Classes) application, you get an .RC file for the
	application. The .RC file can be modified or created by a resource editor, or
	the App Studio. Under some versions of Visual C++, you will see an .RC2 file
	that also contains resource information.
	
	.DEF -- Module definition file:
	
	Depending on your project type, this file may have two purposes. In programs
	based on Windows and Windows NT, this file may be used to specify a list of
	exported functions, to control the programs heap size, to specify the attributes
	of a particular segment, and for many other uses. For an MS-DOS-based MOVE
	overlay program (16-bit products only), this file is used to specify which
	segments or which functions are in which overlay.
	
	Files Created by Visual C++
	---------------------------
	
	.APS -- Binary version of the resource file:
	
	This is the binary version of the current resource file. App Studio or the
	resource editor uses it for quick loading.
	
	.BSC -- Browser database file:
	
	A single .BSC file is created for each project. To use the Browser, you need to
	open this file in the Visual C++ Workbench. It is created from the .SBR files
	when the BSCMAKE tool is run.
	
	.CLW -- Class Wizard status file:
	
	This file keeps information about where message-handling functions are kept in
	your code. The format of this text file is undocumented, but it can be
	regenerated. For more information on how to regenerate this file, please click
	Contents on the Help menu in App Studio; then click "Using Class Wizard" and
	"Update Class Wizard when Code Changes."
	
	.EXE or .DLL -- Executable or dynamic link library file:
	
	This file is the final linked output file for the project. It contains executable
	code.
	
	.ILK (versions 2.0 and later only) -- Incremental link information file:
	
	The linker creates this file to allow incremental linking when possible. If you
	delete it, you will force the linker to perform a full link.
	
	.OBJ -- Object module file:
	
	This is the final output file from the compiler. The linker combines these files
	to create the final .EXE, .DLL, or .LIB file. The .OBJ files may have different
	formats in different versions of Visual C++ or in different vendor's compilers.
	
	.PCH -- Precompiled header file:
	
	These files can significantly speed up compile time. They are created when using
	the /Yc, /Yu, or /YX compiler options.
	
	.PDB -- Program database file:
	
	This binary file contains type and symbolic debugging information gathered over
	the course of compiling and linking the project. The file is for use with the
	Visual C++ debugger. Object files contain references into the .PDB file for
	debugging information. This design makes object files smaller. See the online
	reference under the /Zi switch for more information. When you use the /Z7
	switch, this file is not created.
	
	.SBR -- Source browser file:
	
	This file is created for each source file compiled with either the /FR or /Fr
	switch. This file contains symbolic information used by the Microsoft Browser
	Database Maintenance Utility (BSCMAKE) to produce a browser database file (.BSC
	file).
	
	.WSP -- Workspace information file (16-bit versions only):
	
	This is a binary file containing information about the state of the WorkBench
	when it was closed. Such items as source files opened and their window positions
	are saved in this file.
	
	.VCP -- Workspace information file (Visual C++ 2.x and later only):
	
	This file is the Visual C++ version 2.x equivalent of the 16-bit versions' .WSP
	file.
	
	.VCW -- Visual WorkBench Status file (16-bit versions only):
	
	This file is created on a per-project basis. It works with the .MAK file to fully
	describe the project to the WorkBench.
	
	.EXP -- Export file:
	
	Export files contain information about exported functions and data items. When
	LIB creates an import library, it also creates an export file. You use the .EXP
	file when you link a program that both exports to and imports from another
	program, either directly or indirectly. If you link with an .EXP file, LINK does
	not produce an import library because it assumes that LIB already created one.
	
	.LIB -- Library file:
	
	These files could be standard library or import library files. Standard libraries
	contain objects and are created by the LIB tool. Import libraries contain
	information about exports in other programs and are created either by LINK when
	it builds a program that contains exports or by the LIB tool.
	
	.MAP -- Map file:
	
	A map file is a text file that contains information about the program being
	linked. The information includes the module name, the timestamp from the program
	file header (not from the file system), and a list of groups in the program with
	each group's starting address, length, group name, and class. It also contains a
	list of public symbols with each address, symbol name, flat address, and object
	file where the symbol is defined. A map file also includes the entry point of
	the program and a list of fixups.
	
	.RES -- Compiled resource file:
	
	The .RES file is created by the Resource Compiler (RC).
	
	.HPJ -- Context-sensitive help project file:
	
	This file appears when you use the Visual C++ AppWizard to create an MFC
	application that supports context-sensitive help. You need this file to create
	help files from the .RTF files and .BMP files generated by the AppWizard.
	
	NCB -- Parser information file:
	
	This file contains information generated by the parser used by the class view and
	component gallery. If the file is accidentally or deliberately deleted, it is
	automatically regenerated.
	
	MDP -- Microsoft Developer studio Project file:
	
	This file replaces Visual C++ version 2.x's .VCP file. The .MDP file contains
	more information about the project than does the .VCP file.
	
	RCT -- Resource template file:
	
	These files contain information on custom resources that can be used when you
	insert a resource. It can include menus, toolbars, bitmaps and any of the other
	resource types listed in the Insert Resource menu.
	
	Miscellaneous Files Created and Then Deleted During the Build Process
	---------------------------------------------------------------------
	
	There are two other files created by the Visual C++ IDE during the build process.
	They should be deleted under normal circumstances. The files are:
	
	.CRF -- linker response file:
	
	This file is created on the fly by the build process.
	
	MSVC.BND -- copy of project .CRF file:
	
	This file is created if the resources need to be bound to the executable. It is
	simply a copy of the project's .CRF file.
	
	
	There are some other files created depending on the features the project
	supports. For example, your project may also have one or more icon files with
	.ICO extensions, cursor files with .CUR extensions, or bitmap files with .BMP
	extensions. A project may also have a .REG file that has registry information
	for the project. Projects that support OLE may also have an .ODL file and .TLB
	files.
	
	REFERENCES
	==========
	
	For more information about the file types not listed in this article, please see
	refer to the following section in the product documentation: Visual C++ 2.x
	Books On-line, User's Guides, Visual C++ User's Guide, Appendices, Link Input
	Files and Link Output Files.
	
	Additional query words: kbinf 1.00 1.50 2.00 2.10 2.20 4.00
	
	======================================================================
	Keywords          : kbGenInfo kbide kbVC kbVC100 kbVC150 kbVC151 kbVC152 kbVC200 kbVC210 kbVC220 kbVC400 kbArtTypeINF 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbvc150 kbvc100 kbVC220 kbVC151 kbVC200 kbVC210 kbVC152
	Version           : 1.00 1.50 1.51 1.52 | 1.00 2.00
	
	=============================================================================
	
