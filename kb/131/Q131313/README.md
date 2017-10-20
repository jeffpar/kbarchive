---
layout: page
title: "Q131313: HOWTO: Create 32-bit Import Libraries Without .OBJs or Source"
permalink: /kb/131/Q131313/
---

## Q131313: HOWTO: Create 32-bit Import Libraries Without .OBJs or Source

{% raw %}

	Article: Q131313
	Product(s): Microsoft C Compiler
	Version(s): 2.0,2.1,4.0,5.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbcode kbVC200 kbVC210 kbVC400 kbVC500 kbVC600
	Last Modified: 26-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Library Manager (LIB.EXE), used with:
	   - Microsoft Visual C++, 32-bit Editions, versions 2.0, 2.1, 4.0, 5.0, used with:
	      - the hardware: Intel x86 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article explains how to create an import library given a .DLL for which you
	have no source code or object modules. There is no 32-bit utility that can
	create an import library from a .DLL, as there was with 16-bit versions of
	Visual C++.
	
	NOTE: This method may not work with DLLs generated with non-Microsoft development
	tools.
	
	MORE INFORMATION
	================
	
	Normally, when building a .DLL or any target that exports functions or data
	items, an import library (and exports file) is generated as part of the linking
	process. But in the case of a third-party .DLL that does not ship with an import
	library, you may need to generate an import library in order to use the .DLL
	successfully using load-time dynamic linking. An import library is not needed
	for run-time dynamic linking.
	
	There are two ways to create an import library given a .DLL:
	
	- Create a .DEF file for use with the LIB /DEF: command.
	
	- Stub out functions, and use the .OBJ files created to mimic the import/export
	  relationships. Then use the LIB /DEF: command to create the import library.
	
	Creating a .DEF file
	--------------------
	
	The only time you can use a .DEF file to create an import library from a .DLL for
	which you do not have the source code or object modules is if the .DLL exports
	functions via a C interface. Specifically, the functions need to have been
	declared to use the C calling convention. This is specified by the _cdecl
	attribute, normally used in the prototype for the function. Note that if no
	attribute is specified, _cdecl is the default when /Gz (_stdcall is the default)
	or /Gr (_fastcall is the default) is not specified on the CL command line. The
	reason for this limitation is based on an assumption made by the LIB utility
	that all names are automatically exported without a leading underscore. This is
	only true for _cdecl function names.
	
	Given a .DLL with functions exported via a C interface, you can create an import
	library by following these steps:
	
	1. Use DUMPBIN /EXPORTS <.DLL file name> to obtain the list of exported
	  symbols for the .DLL in question. The symbols appear in the "name" column of
	  the table whose headings are "ordinal hint name."
	
	2. Create a .DEF file that contains an EXPORTS section with the names of the
	  functions listed in the "name" column of the DUMPBIN output.
	
	3. For _cdecl functions, the symbol appears just as it would when used in the
	  calling program. Just place this symbol in the EXPORTS section of the .DEF
	  file.
	
	4. Use LIB /DEF:<.DEF file name> to generate the import library and
	  exports file. The base name of the import library will be the base name of
	  the .DEF file. Use /OUT: to control the output library name.
	
	Stubbing Out Functions
	----------------------
	
	For exported functions that use calling conventions other than C, the situation
	is a little more complex. This is especially true when you consider C++
	functions and the more complex name decoration schemes involved. To use this
	method, you must at least have the header file that describes the .DLL's
	interface.
	
	To create stubbed functions from prototypes in a header file:
	
	1. When "__declspec(dllimport)" is used in a prototype or declaration, change it
	  to "__declspec(dllexport)."
	
	2. For functions that do not return a value, for C functions in C source, and
	  for C functions in C++ source code (used with the 'extern "C"' construct),
	  replace the semicolon that terminates the function prototype with a matched
	  pair of curly braces ("{}").
	
	3. For C++ functions (global or member) that return a value, you must create a
	  dummy body for the function, and return a dummy value of the proper type.
	  (Not having a return statement in the function is illegal.) This goes for
	  class member functions, as well. Keep in mind that the purpose of this
	  procedure is to trick the LIB utility into generating the correct import
	  library, so these dummy bodies have no effect.
	
	4. For C++ classes, you can stub out the member functions by using the
	  prototypes in the class declaration, as long as you disable function inlining
	  when you compile.
	
	5. Function arguments are usually just specified by type in a header file. For
	  example, Geta(int). A dummy argument identifier must be specified when adding
	  the dummy function body Geta(int x). Otherwise the error C2055 is generated.
	
	Example
	-------
	
	If the header file that describes MYDLL.DLL looks like:
	
	  // mydll.H
	
	  extern "C" __declspec(dllimport) void _stdcall Function(void);
	
	  class __declspec(dllimport) CMyClass {
	       int a;
	       long b;
	  public:
	       int Geta(int);
	       long Getb();
	       CMyClass();
	  };
	
	The dummy source file you use to build the import library should look like:
	
	   // mydll.CPP
	
	   extern "C" __declspec(dllexport) void _stdcall Function(void) {}
	
	   class __declspec(dllexport) CMyClass {
	        int a;
	        long b;
	   public:
	        int Geta(int x) {return 111;}
	        long Getb() {return 111;}
	        CMyClass() {}
	   };
	
	Once the functions are stubbed out, all you need to do is compile the source file
	into an .OBJ file:
	
	  CL /c /Ob0 mydll.CPP
	
	NOTE: Disabling function inlining is required to force generation of symbols for
	the functions defined in CMyClass. If function inlining were enabled, the
	compiler would notice that there are no references to the member functions in
	the translation unit, so it would discard the function bodies. See the
	discussion on inline function expansion under Optimizations in the Visual C++ CL
	Command line reference.
	
	Once you have .OBJ files, you can use LIB /DEF: to create the import library
	(.LIB) and exports file (.EXP):
	
	  LIB /DEF: mydll.OBJ
	
	For more information on the LIB command, consult the "LIB Reference" in the
	Visual C++ Books Online.
	
	Also, see the following article in the Microsoft Knowledge Base:
	
	  Q140485 Exporting PASCAL-Like Symbols in 32-bit DLLs
	
	Additional query words: 2.50 2.55 LINK /LIB
	
	======================================================================
	Keywords          : kb3rdparty kbcode kbVC200 kbVC210 kbVC400 kbVC500 kbVC600 
	Technology        : kbVCsearch kbAudDeveloper kbLibSearch
	Version           : :2.0,2.1,4.0,5.0
	Hardware          : x86
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
