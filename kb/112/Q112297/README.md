---
layout: page
title: "Q112297: INFO: User-Defined CRT Function Generates Warning or Errors"
permalink: kb/112/Q112297/
---

## Q112297: INFO: User-Defined CRT Function Generates Warning or Errors

	Article: Q112297
	Product(s): Microsoft C Compiler
	Version(s): winnt:1.0,2.0,2.1,4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbCRT kbVC100 kbVC200 kbVC210 kbVC400 kbVC500 kbVC600
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C Run-Time (CRT), included with:
	   - Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 2.1, 4.0, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	An attempt to replace a C run-time (CRT) function with a user-defined version
	may cause the linker to issue a warning or error message when linking with the
	CRT dynamic-link library (DLL) MSVCRTx0.DLL. With Visual C++ version 4.0 and
	MSVCRT40.DLL, the following errors are generated. For versions 4.2,5.0 and 6.0,
	you will see MSVCRT.DLL instead of MSVCRT40.DLL:
	
	  MSVCRT.LIB(MSVCRT40.dll) : error LNK2005: <function_name> already
	  defined in <file.obj>
	
	  <target_name> : fatal error LNK1169: one or more multiply defined
	  symbols found
	
	where <function_name> is the name of the function being replaced and
	<file.obj> is the name of the object module containing the user-defined
	version of that function. At this point, the linker halts, failing to build
	<target_name>.
	
	With Visual C++ version 2.x and MSVCRT20.DLL, the following error is generated:
	
	  MSVCRT.LIB(MSVCRT20.dll) : error LNK2001: unresolved external symbol
	  "<symbol>"
	
	After displaying this error message, the linker will build the target using the
	CRT version of the function instead of the user-defined version.
	
	With Visual C++ version 1.0 and MSVCRT10.DLL, the following warning is
	generated:
	
	  msvcrt.lib(msvcrt10.def) : warning LNK4006: <function_name> already
	  defined in <file.obj>; second definition ignored
	
	MORE INFORMATION
	================
	
	The /MD compiler switch is used when creating applications that use the DLL
	version of the CRT. The /MD switch causes the compiler driver to define the _MT
	and _DLL symbols so that both the multithreaded and DLL versions of the run-time
	routines are selected from the standard header files. /MD also causes the
	compiler to place the library name MSVCRT.LIB in the object file. MSVCRT.LIB is
	the import library for the CRT DLL that is named MSVCRTx0.DLL. (In the name of
	the DLL, "x" is a digit referring to the DLL's version. This number is the same
	as the major version number of the corresponding Visual C++ with which it was
	distributed. For Visual C++ version 1.0, the name is MSVCRT10.DLL. For Visual
	C++ versions 2.x and 4.0, the names are MSVCRT20.DLL and MSVCRT40.DLL,
	respectively.)
	
	Most function prototypes in the standard CRT header files are prefaced with the
	_CRTIMP symbol. When code is compiled without the /MD switch and the _DLL symbol
	is not defined, _CRTIMP is therefore defined to be nothing. However, when code
	is compiled with the /MD switch and _DLL is defined, _CRTIMP is defined to be
	__declspec(dllimport). The __declspec(dllimport) tells the compiler that this
	routine actually resides in a DLL. For example, the following is the prototype
	in IO.H for the _commit CRT function:
	
	  _CRTIMP int __cdecl _commit(int);
	
	When the compiler sees a function declared as __declspec(dllimport), it generates
	references to the function via a decorated name. The name decoration used
	follows the pattern __imp__<function_name>. For example, the _commit
	function is referenced as __imp___commit.
	
	If a user-defined version of a CRT function is compiled so that it can be
	statically linked into applications, the linker errors or warning listed above
	will be generated when that function is linked into an application that was
	compiled with /MD. The linker generates the error because it has encountered two
	definitions of the CRT function. With Visual C++ versions 1.0 and 2.x, the
	user-defined version of the function is not called because the linker
	preferentially looks for the version of the function that is decorated as an
	imported DLL entry point. With Visual C++ version 4.0, the linker terminates,
	forcing the user to implement one of the resolutions presented below or to
	specifiy /FORCE:MULTIPLE on the link command line. This option tells the linker
	to create a valid .EXE or .DLL file whether or not it finds more than one
	definition for a symbol. But, be warned, doing so will generate the following
	link warning:
	
	  MSVCRT.LIB(MSVCRT40.dll) : warning LNK4006: <function_name> already
	  defined in <file.obj>; second definition ignored
	
	  <target_name> : warning LNK4088: image being generated due to /FORCE
	  option; image may not run
	
	There are two ways to allow the user-defined version of the function to be used.
	The first method involves providing a prototype for the CRT function that does
	not use __declspec(dllimport). The code shown in Sample Code 1 below illustrates
	this method. MAIN.C simply opens a stream, writes to it, and then calls _commit
	to force the data to be written to the file. COMMIT.C provides code for a
	user-defined version of the _commit CRT function. In this case, the function
	simply displays a message and returns 0 (zero). The code in MAIN.C does not
	include IO.H, the standard header file that prototypes the _commit function.
	Instead, MAIN.C provides its own prototype for the _commit function, which does
	not use __declspec(dllimport). To build Sample Code 1, use the following compile
	and link commands:
	
	  cl /c /MD MAIN.C
	  cl /c COMMIT.C
	  link MAIN.OBJ COMMIT.obj /NOD MSVCRT.LIB KERNEL32.LIB
	
	A second method is to place the user-defined function into a DLL. Exporting the
	user-defined version of the function from a DLL causes the symbol to be exported
	with the name the compiler is referencing based upon the prototype in the
	standard header file.
	
	The code shown in Sample Code 2 below illustrates this method. To build this
	sample, use the following compile and link commands:
	
	  cl /c /MD MAIN.C
	  cl /MD /LD COMMIT.C
	  link MAIN.OBJ COMMIT.LIB
	
	Sample Code 1
	-------------
	
	  ////////// 
	  // MAIN.C
	  // 
	  // Compile options needed:    /c /MD
	
	  #include <stdio.h>
	  #include <process.h>
	
	  // Provide a non-__declspec(dllimport) prototype.
	  int __cdecl _commit(int filedes );
	
	  FILE *stream;
	
	  void main( void )
	  {
	      // Open a stream for writing.
	      if( (stream = fopen( "data.txt", "w+" )) == NULL )
	      {
	          printf( "The file 'data.txt' was not opened\n" );
	          exit( 1 );
	      }
	      else
	          printf( "The file 'data.txt' was opened\n" );
	
	      // Write to the file stream.
	      fprintf( stream, "This is some text" );
	
	      // Flush the CRT buffer.
	         fflush( stream );
	
	      // Tell the operating system to commit the data to the file.
	      if(_commit( _fileno( stream ) ))
	          printf( "There was a problem committing to disk\n" );
	      else
	          printf( "The data was successfully committed to disk\n" );
	
	      // Close the stream.
	      if( fclose( stream ) )
	          printf( "The file 'data.txt' was not closed\n" );
	  }
	
	  //////////// 
	  // COMMIT.C
	  // 
	  // Compile options needed:    /c
	  // 
	  // This code replaces the version of _commit() provided by the C
	  // run-time library.
	
	  #include <stdio.h>
	
	  int __cdecl _commit(int filedes )
	  {
	      printf( "This is from the user-defined _commit()\n" );
	      return 0;
	  }
	
	Sample Code 2
	-------------
	
	  ////////// 
	  // MAIN.C
	  // 
	  // Compile options needed:    /c /MD
	
	  #include <stdio.h>
	  #include <process.h>
	  #include <io.h>
	
	  FILE *stream;
	
	  void main( void )
	  {
	      // Open a stream for writing.
	      if( (stream = fopen( "data.txt", "w+" )) == NULL )
	      {
	          printf( "The file 'data.txt' was not opened\n" );
	          exit( 1 );
	      }
	      else
	          printf( "The file 'data.txt' was opened\n" );
	
	      // Write to the file stream.
	      fprintf( stream, "This is some text" );
	
	      // Flush the CRT buffer.
	         fflush( stream );
	
	      // Tell the operating system to commit the data to the file.
	      if(_commit( _fileno( stream ) ))
	          printf( "There was a problem committing to disk\n" );
	      else
	          printf( "The data was successfully committed to disk\n" );
	
	      // Close the stream.
	      if( fclose( stream ) )
	          printf( "The file 'data.txt' was not closed\n" );
	  }
	
	  //////////// 
	  // COMMIT.C
	  // 
	  // Compile options needed:    /c /MD /LD
	  // 
	  // This code replaces the version of _commit() provided by the C
	  // run-time library.
	
	  #include <stdio.h>
	
	  __declspec(dllexport) int __cdecl _commit(int filedes );
	
	  int __cdecl _commit(int filedes )
	  {
	      printf( "This is from the user-defined _commit()\n" );
	      return 0;
	  }
	
	======================================================================
	Keywords          : kbCRT kbVC100 kbVC200 kbVC210 kbVC400 kbVC500 kbVC600 
	Technology        : kbVCsearch kbAudDeveloper kbCRT
	Version           : winnt:1.0,2.0,2.1,4.0,5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	
