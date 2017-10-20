---
layout: page
title: "Q126845: INFO: C++ Name Decoration--Why Used, Getting Decorated Names"
permalink: /kb/126/Q126845/
---

## Q126845: INFO: C++ Name Decoration--Why Used, Getting Decorated Names

{% raw %}

	Article: Q126845
	Product(s): Microsoft C Compiler
	Version(s): Windows: 1.5,1.51,1.52;Winnt:2.0,2.1,4.0,4.1,5.0
	Operating System(s): 
	Keyword(s): kbcode kbCompiler kbCPPonly kbVC kbVC150 kbVC151 kbVC152 kbVC200 kbVC210 kbVC400 kbVC41
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 1.5, 1.51, 1.52, 2.0, 2.1, 4.0, 4.1 
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft C++ compilers encode the names of symbols in C++ programs to
	include type information in the name. This is called "name decoration," or "name
	mangling." The purpose of this is to ensure type-safe linking. The C++ language
	allows function overloading where functions with the same name are only
	distinguished from one another by the data types of the arguments to the
	functions. Name decoration enables the linker to distinguish between different
	versions of overloaded functions because the names of the functions are encoded
	or decorated differently.
	
	MORE INFORMATION
	================
	
	Different compiler vendors have their own methods or algorithms for decorating
	names. Microsoft does not publish the algorithm its compilers use for name
	decoration because it may change in the future. However, it is sometimes
	necessary to get the decorated version of a function name. For example, you may
	need to export a C++ function from a Windows DLL by listing it in the EXPORTS
	section of a .DEF file used to build the DLL. (Although declaring the function
	with __declspec( dllexport ) is the preferred method to export a C++ function
	using Visual C++, 32-bit Edition, it is still valid to use a .DEF file with
	these products.) To export the function successfully, you need to list its
	decorated name, not the name in the source code.
	
	For all of the products listed above, Microsoft makes browser toolkits available.
	These toolkits provide functions that can interpret decorated names.
	
	For information about __declspec( dllexport )or browser toolkits, please see the
	respective articles in the Microsoft Knowledge Base:
	
	  Q132044 How to Use _declspec(dllimport) & _declspec(dllexport) and Why
	
	  Q153393 Browser Toolkit for Microsoft Visual C++
	
	The following sample code uses the FormatDName function in the browser library,
	part of the browser toolkei. The function returns the undecorated form of the
	name passed to it.
	
	Sample Code
	-----------
	
	     /* Compile options needed: cl /AL getname.cpp bthunkl.obj /link bsc.lib
	            (for 16-bit, where getname.cpp is the source file name)
	                                cl getname.cpp /link bsc.lib
	            (for 32-bit version 4.x and earlier, where getname.cpp is the source
	             file name)
	     */ 
	
	     #include <iostream.h>
	     #include <strstrea.h>
	
	     extern "C"
	     {
	     #include "hungary.h"
	     #include "bsc.h"
	     #include "bscsup.h"
	     }
	
	     void main( int argc, char *argv[] )
	     {
	         if ( argc < 2 )
	         {
	             cout << "Usage: GETNAME decorated-name" << endl;
	             return;
	         }
	
	         strstream name;
	
	         // Call browser library function to get undecorated name
	         name << FormatDname ( argv[1] ) << '\0';
	
	         cout << "Undecorated name: " << name.str() << endl;
	         name.rdbuf()->freeze( 0 );
	     }
	
	The following example works with the newer browser toolkit 5.0 and Visual C++
	version 5.0.
	
	     /* Compile options needed: cl /GX getname.cpp /link msbsc50.lib
	            (where getname.cpp is the source file name)
	     */ 
	
	     #include <iostream>
	     #include <strstream>
	     #include <windows.h>
	     #include "bsc.h"
	
	     using namespace std;
	
	     int main( int argc, char *argv[] )
	     {
	         Bsc* pbsc;
	
	         if ( argc < 3 )
	         {
	             cout << "Usage: GETNAME bscfile-name decorated-name" << endl;
	             return 1;
	         }
	
	         strstream name;
	
	         // Open the browser file
	         Bsc::open( argv[1], &pbsc );
	
	         // Call browser library function to get undecorated name
	         name << pbsc->formatDname( argv[2] ) << '\0';
	
	         cout << "Undecorated name: " << name.str() << endl;
	         name.rdbuf()->freeze( 0 );
	
	         pbsc->close();
	         return 0;
	     }
	
	======================================================================
	Keywords          : kbcode kbCompiler kbCPPonly kbVC kbVC150 kbVC151 kbVC152 kbVC200 kbVC210 kbVC400 kbVC410 kbVC500 kbVC600 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbvc150 kbVC410 kbVC500 kbVC600 kbVC151 kbVC200 kbVC210 kbVC32bitSearch kbVC152 kbVC500Search
	Version           : Windows: 1.5,1.51,1.52;Winnt:2.0,2.1,4.0,4.1,5.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
