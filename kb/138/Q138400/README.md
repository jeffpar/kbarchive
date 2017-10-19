---
layout: page
title: "Q138400: Troubleshooting LNK2001 or L2029 Unresolved External Errors"
permalink: /kb/138/Q138400/
---

## Q138400: Troubleshooting LNK2001 or L2029 Unresolved External Errors

	Article: Q138400
	Product(s): Microsoft C Compiler
	Version(s): 1.0,1.5,1.51,1.52,7.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft C/C++, version 7.0 
	- Microsoft Visual C++, versions 1.0, 1.5, 1.51, 1.52 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The linker issues an Unresolved External message if it cannot resolve the
	address of a function while building a project.
	
	With the 16-bit version of Visual C++, this message is:
	
	  L2029: '__symbol': unresolved external
	
	With the 32-bit version of Visual C++ version 1.0, this message is:
	
	  LNK4016: unresolved external symbol '__symbol'
	
	With the 32-bit version of Visual C++ version 2.0 and later, this message is:
	
	  LNK2001: unresolved external symbol '__symbol'
	
	The '__symbol' might be a label, a variable, or a function name.
	
	This article discusses some of the most common causes of this error to help you
	troubleshoot it.
	
	MORE INFORMATION
	================
	
	The following explanation of linker behavior explains why this error occurs.
	This is a simplified model, and the internal implementation may vary slightly
	between compiler versions; however, the information is sufficient for trying to
	find the cause of this error message.
	
	During the compilation of a source file, name tables are built for each object
	module to allow the referencing of symbols between object modules. A public
	symbols table (PST) is created, which contains all of the public symbols for a
	given object module. Public symbols are symbols that other object modules can
	refer to -- such as global functions and variables. Each object module also has
	an unresolved symbol table (UST), which contains a list of symbols that need to
	be resolved for that module.
	
	If no link errors occur, the linker can create a .map file that lists all the
	public symbols (a combined PST table) contained in the object modules that were
	linked together.
	
	To generate a .map file with 16-bit Visual C++, use the /MAP:FULL linker option.
	In the Visual Workbench, on the Options menu, click Project, and then click
	Linker. Set the category to Miscellaneous, and place /MAP:FULL in the Other
	Options edit box. For 32-bit Visual C++, use the /MAP:<filename> option.
	With version 4.0, on the Build menu, click Settings, and then switch to the
	Linker tab. Change the Category to General, and select the Generate Map File
	check box.
	
	Figure 1
	--------
	
	                             Public Symbols for OBJ 1
	Module 1                      _____________________
	_____________________________|    _var1----------|------------------
	|                             |    _func1         |                 |
	| var1                        |___________________|                 |
	| .                              |  PST for OBJ 1                   |
	| .                              |                                  |
	| .                              |                                  |
	| func1 {                        |Required Symbols for OBJ 1        |
	|            func2( );         __|__________________                |
	|            var1 = 2;        |    _func2           |<<________     |
	|            var2 = 4;        |    _var2            |<<______ |     |
	|            }                |_____________________|       | |     |
	|                                |  UST for OBJ 1           | |     |
	|________________________________|                          | |     |
	                                                           | |     |
	                                                           | |     |
	                                                           | |     |
	                             Public Symbols for OBJ 2      | |     |
	Module 2                      _____________________         | |     |
	_____________________________|    _var2----------|---------| |     |
	|                             |    _func2---------|-----------|     |
	| var2                        |___________________|                 |
	| .                              |  PST for OBJ 2                   |
	| .                              |                                  |
	| .                              |                                  |
	| func2 {                        |Required Symbols for OBJ 2        |
	|            func3( );         __|__________________                |
	|            var1 = 3;        |    _var1            |_______________|
	|            var2 = 5;        |    _func3           |_______________
	|            }                |_____________________|               |
	|                                |  UST for OBJ 2                   |
	|________________________________|                                  |
	                                                                   |
	                                                                   |
	                                   Unresolved External Error is issued
	                                   for _func3() because there is no
	                                   definition found for func3() in
	                                   the PST for either OBJ module.
	
	The linker uses the PST and UST of a project's object and library files to match
	symbol names. If the linker finds a symbol in a UST table and cannot find a
	matching entry in one of the many PST tables, it issues an "Unresolved External"
	error message. For example, in Figure 1, the linker cannot resolve the address
	for the function func3() and therefore issues an "Unresolved External" error.
	
	Frequent Causes of the "Unresolved External" Error Message
	----------------------------------------------------------
	
	The remainder of this article discusses in detail each of the following possible
	causes of "Unresolved External" errors:
	
	- Missing Object Files or Libraries
	
	- Missing Function Body or Variable
	
	- Symbol Can't be Found in the Libraries or Object Modules
	
	- Case Sensitivity
	
	- Name Decoration
	
	- A Symbol Is Not Public
	
	- Scoping Problems and Pure Virtual Functions
	
	- Function Inlining
	
	- Wrong Compiler Options or Mixing Incompatible Libraries
	
	Missing Object Files or Libraries
	---------------------------------
	
	If a needed object module or library is not included on the link command line,
	the linker may not be able to find addresses for one or more symbols, so it
	issues an unresolved external error message. You need to place the necessary
	library or object file in the project.
	
	The names of the C Run-Time libraries needed at link time are included in the
	object module by the compiler. For 32-bit versions of Visual C++, the MFC
	libraries are also included. If you use the /NOD (/NODEFAULTLIB) linker switch,
	these libraries will not be linked into the project unless you have explicitly
	included them. The same problem occurs if you use the /NOD:<libraryname>
	switch to prevent specific libraries from being linked in.
	
	If the unresolved external is a C Run-Time library function, then you need to
	specify the Run-Time library to the linker. Starting with Visual C++ version
	4.0, the libraries containing the C Run-Time function are listed in the online
	help for the function.
	
	With Visual C++ version 4.0, the library containing each Windows API function is
	listed under the QuickInfo link in the online help for each function. For 32-bit
	versions of Visual C++, a list of the libraries containing each Windows API
	function is in the Win32api.csv file located in the \Lib subdirectory. This is a
	comma-separated variable file that can be loaded into a spreadsheet for easy
	viewing. It can also be viewed with a text editor. Note that there is no similar
	file for the 16-bit Windows API functions.
	
	A DLL should provide a .lib or .def file that allows the linker to resolve
	references to the DLL functions unless you are using explicit LoadLibrary()and
	GetProcAddress() calls in your code.
	
	With the 16-bit linker, using over 32 libraries will cause problems as the 33rd
	library will be ignored. For more information, please see the following article
	in the Microsoft Knowledge Base:
	
	  Q31986 Maximum Number of Libraries LINK Supports
	
	Missing Function Body or Variable
	---------------------------------
	
	If just a function prototype is provided, the linker will not be able to resolve
	any function calls because there is no function definition. As a result, the
	function is not listed in the combined PST table. Similarly, if an external
	variable is declared but not defined, the same problem occurs.
	
	For example:
	
	     /* test.cpp  */ 
	    
	     void DoSomething(void);
	
	     void main(void){
	     DoSomething( );   // This line causes an unresolved external error
	                       // because the prototype for DoSomething() allows the
	                       // compiler to think the function exists. However,
	                       // the linker finds that it doesn't.
	     }
	
	When using C++, make sure you provide a function definition for each function in
	a class and not just a prototype in the class definition. If you are defining
	the function outside of the class definition, be sure to include the class name
	before the function in the Classname::MemberFunction style. See the "Scoping
	Problems and Pure Virtual Functions" section for an example.
	
	Symbol Can't Be Found in the Libraries or Object Modules
	--------------------------------------------------------
	
	Use Dumpbin.exe or Lib.exe to find out if the symbol is in the object module or
	library.
	
	With 32-bit COFF object modules and libraries, you can verify whether a symbol is
	in the file with Dumpbin.exe. For object modules, use this command:
	
	     DUMPBIN /SYMBOLS <filename.obj>
	
	For libraries, use this command:
	
	      DUMPBIN /LINKERMEMBER[:{1|2}] <libraryname.lib>
	
	For 16-bit libraries, use Lib.exe to view the symbols defined in the library. To
	create a listing use this command:
	
	     LIB <filename.lib>, <filename.lst>
	
	If you want to determine what symbols are contained in an object module, create a
	dummy library and listing file from the object module with Lib.exe. For
	example:
	
	     LIB <dummy.lib> +<filename.obj>, <filename.lst>
	
	On Windows 95, you can use the QuickViewer to see some of this same information
	for .exe and .dll files.
	
	Some functions can only be used in certain environments so they are not in every
	library. To determine what environment a Run-Time function can be used in, check
	the compatibility in the online documentation.
	
	Not every compiler vendor offers the same libraries of functions. Microsoft
	offers all the ANSI standard functions for C plus many others. Microsoft may
	offer functions other companies do not, and vice-versa. Similarly, mixing
	versions of Microsoft libraries and compiler products can be problematic. Each
	released product is tested only with components included in that release, unless
	otherwise stated in the documentation or release notes. A new compiler version's
	libraries may contain new symbols that cannot be found in the libraries included
	with previous versions.
	
	Case Sensitivity
	----------------
	
	Case is important when linking function references in each object module's UST to
	the references in the PSTs. The only exception is if you are doing all three of
	the following:
	
	- Compiling C code only.
	
	  -and-
	
	- Using the 16-bit linker.
	
	  -and-
	
	- Not using the /NOI switch. Note that using this switch specifies that the
	  16-bit linker should take case into account when linking.
	
	The best solution is to exactly match the case of the symbol in all references
	and in all instances. For example, if you name a variable "var1" in one source
	file and try to access it as "VAR1" in another, you would receive an unresolved
	external error. Again, only in the one exception named above would the 16-bit
	linker link references to var1, VaR1, VAR1, vAR1 all to the same address.
	
	Name Decoration
	---------------
	
	Usually "name decoration" refers to C++ naming conventions, but it applies to a
	number of non-C++ cases as well. The compiler may use the name of a function,
	its parameters, and its return type when calculating a name for a function. For
	example, with Visual C++ 2.0, the function name for
	
	     void CALLTYPE test(void)
	
	might come to anything in the following table depending on what the CALLTYPE is
	and whether it is a C or a C++ file.
	
	  Calling convention         extern "C"     .CPP, .CXX, or .C file
	  
	  C naming convention
	  (__cdecl)                  _test          ?test@@YAXXZ
	  
	  Fastcall naming
	  convention (__fastcall)    @test@0        ?test@@YIXXZ
	  
	  Standard Call naming
	  convention (__stdcall)     _test@0        ?test@@YGXXZ
	
	CALLTYPEs such as _cdecl, _fastcall, and _stdcall change the naming conventions
	for a function or variable. The 32-bit specific __declspec(<attribute>)
	modifier can also affect the name of the function.
	
	If using C++, be sure to use extern "C" if you are calling a C function from a
	C++ program or if you are calling a function in a C++ from a C program. Extern
	"C" forces use of the C naming convention for global C++ functions; this enables
	them to be called from a C program. Be aware of compiler switches like /Tp or
	/Tc that force a file to be compiled as a C (/Tc) or C++ (/Tp) file regardless
	of the filename extension, or you may get different function names than you
	expected.
	
	Function prototypes with mismatched parameters can also cause unresolved external
	errors. Many name-decoration schemes incorporate the parameters of a function
	into the final decorated function name. Calling a function with parameter types
	that do not match those in the function definition may also cause this error.
	This can be a problem in other languages, like FORTRAN, which may also add name
	decoration to a function. In the following example, the header file with the
	function prototype does not match the function definition; this causes the
	problem.
	
	Example:
	
	     // Test1.h
	     void _stdcall func( char, float );
	     
	     // Test1.cpp
	     void _stdcall func( char a ){
	          a = 'a';
	     }
	     
	     // Test.cpp
	     #include "test1.h"
	     void main(void) {
	         char var1;
	         float var2 = 5;
	         func ( var1, var2 ); // Unresolved external error occurs here
	     }
	
	There is no set standard for naming conventions between compiler vendors or even
	between different versions of a compiler. Therefore cross-linking object files
	compiled with other compilers or compiler versions may cause unresolved
	externals.
	
	A Symbol Is Not Public
	----------------------
	
	Only global functions and variables are placed in the object file's PST table.
	Trying to access variables of the types below may cause Unresolved Externals.
	
	Static functions/variables:
	
	"Static" functions and variables have file scope. Trying to access static symbols
	from outside of the file they are defined in will cause an unresolved external.
	For example:
	
	     /* main.cpp */ 
	        extern void func1(void);
	        void main(void) {
	        func1();          // Unresolved external occurs because func1() is a
	                          // static function in the file test.cpp.
	      }
	     
	     /* test.cpp */ 
	        static void func1(void) {
	        //Do something
	       }
	
	Automatic (function scope) variables:
	
	A variable declared within a function can only be used within the scope of that
	function. For example:
	
	     /* main.cpp */ 
	      void test(void);
	     
	      static int lnktest3 = 3;
	      int lnktest4 = 4;
	     
	      void main()  {
	         static int lnktest1 = 1;
	         int lnktest2 = 2;
	         test();
	      }
	     
	     /*  test.cpp */ 
	      extern int lnktest1;
	      extern int lnktest2;
	      extern int lnktest3;
	      extern int lnktest4;
	     
	      void test(void)
	      {
	        int i =0;
	         i = lnktest1;   //causes unresolved external, reason 6-2
	         i = lnktest2;   //causes unresolved external, reason 6-2
	         i = lnktest3;   //causes unresolved external, reason 6-1
	         i = lnktest4;   // OK
	      }
	
	Global Constants in C++:
	
	C++ global constants have static linkage. This is different from C. If you try to
	use a global constant in C++ in multiple files, you get an unresolved external
	error. The following code illustrates this error:
	
	     /* main.cpp */ 
	      void test(void);
	      const int lnktest1 = 0;
	      void main(void) {
	      test( );
	      }
	     
	     /* test.cpp */ 
	       extern int lnktest1;
	       void test(void)  {
	        int i = lnktest1;   // Causes unresolved external, reason 6-3
	      }
	
	One alternative is to include the const initializations in a header file, and
	include that header in your C++ files when necessary, just as if it was a
	function prototype. Another possibility is to make the variable non- constant
	and use a const reference when accessing it.
	
	Global Inline Functions in C++:
	
	Global inline functions have static or internal linkage. They cannot be called
	from functions in other modules. See the "Function Inlining" section for further
	information on function inlining.
	
	Scoping Problems and Pure Virtual Functions
	-------------------------------------------
	
	A common cause of scoping problems is incorrectly included prototypes that cause
	the compiler to expect a function body that is not provided.
	
	A::F() or F():
	
	Sometimes a call to a function F() may map to a class implementation, class
	A::F(), instead of a global implementation of F() because C++ implicitly links
	with class implementations when resolving function calls inside other class
	function bodies. Alternatively, if you defined the C++ implementation of a class
	member function A::F() outside of the class declaration itself, you must
	explicitly include the class name in the function definition. Both of these
	cases can cause confusion if you have both a class and a global implementation
	of a function F(). For example:
	
	     /* test.cpp */ 
	     
	     class A {
	      public:
	        F(void);      // No implementation here.
	        void PublicStatMemFunc1(void) {
	            F( );     // This implicitly calls A::F because it's
	        }             // inside a class member function declaration.
	                      // May have forgotten to implement A::F() or meant
	                      // to call ::F( )
	     
	     };
	     
	     void F(void) {  //Maybe meant to be the implementation of A::F( ) ?
	     }
	     
	     void main(void) {
	        A testclsObject;
	        testclsObject.PublicStatMemFunc1( ); //This code needed for compiler
	                                             // to add entry to UST and
	                                             // generate unresolved external.
	     }
	
	This case could be wrong in one of two ways. The function call in
	PublicStatMemFunc1() should have the scope resolution operator (::) added to
	make a call to ::F(). The compiler will then know that the user meant to call a
	global function. Alternatively, if the user meant F() to be the class
	implementation of F(), the definition needs to be changed to A::F().
	
	Abstract Base classes:
	
	Attempting to call a pure virtual C++ function from the constructor or destructor
	of an abstract base class also causes this problem. This is because by
	definition, a pure virtual function should have no base class implementation.
	The following example illustrates this situation:
	
	     /* test.cpp */ 
	     
	     class testcls {
	     public:
	      virtual void DoSomething(void)=0;  // Makes this a virtual base class
	      testcls::testcls( )  {
	        DoSomething( );
	      }
	     };
	     
	     class testcls2: public testcls {
	     public:
	       virtual void DoSomething(void) {} ;
	     };
	     
	     void main(void) {
	       testcls2 testclsObject;  // Needs to be here for error to occur
	                                // since it forces the compiler to call
	                                // the constructor for testcls.
	     }
	
	Function Inlining
	-----------------
	
	Mixing inline and non-inline compile options on different modules can cause
	problems. Consider the following example that has:
	
	- A library Test.lib with inline functions.
	
	- A header file containing the function prototypes for the library (Test.h).
	
	- An application App.exe, which is linking with Test.lib using the Test.h
	  header file.
	
	If Test.lib is created with function inlining turned on (/Ob1 or /Ob2), you will
	get an unresolved external error on any inline functions from Test.lib that are
	used in App.exe. The function's address is not in the PST for Test.lib because
	the functions were inlined inside the library. You need to either disable
	inlining (/Ob0) when building the library or place the inline function code in
	the header file (Test.h).
	
	Similarly, a project that uses function inlining yet defines the functions in a
	source file rather than in the header file will also get this error. The header
	file is included everywhere deemed appropriate, but the functions are only
	inlined in the source file where they are defined. Therefore, the linker sees
	the functions as unresolved externals when used in other modules. For example:
	
	     /* Compile Options Needed: /Ob1 or /Ob2  */ 
	     
	     /* testcls.h */ 
	     class testcls {
	      public:
	       void PublicFunc(void);
	     };
	     
	     /* clasfunc.cpp */ 
	     #include "testcls.h"
	     inline void testcls::PublicFunc(void) {}
	     void DummyFunc(void) {
	       testcls TestClass;
	       TestClass.PublicFunc();
	     }
	     
	     /* test2.cpp */ 
	     #include "testcls.h"
	     void main(void) {
	      testcls testclsObject;
	      testclsObject.PublicFunc( );
	                         // This adds the entry to UST and causes an
	                         // unresolved external because this module can not
	      }                  // see the implementation of PublicFunc( );
	
	For more information on inline functions and unresolved externals, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q123768 Unresolved Externals for Inline Functions
	
	When inlining, if you are using the #pragma inline_depth compiler directive, make
	sure you have set a value of one or greater. A value of zero will turn off
	inlining. Also use the /Ob1 or /Ob2 compiler switches. These switches allow the
	compiler to inline functions. To set these options in 32-bit Visual C++ version
	4.0, on the Build menu, click Settings, and then switch to the C/C++ tab, and
	choose Optimizations. For 16-bit Visual C++, on the Options menu, click Project,
	and then click Compiler, and change the Category to Optimizations.
	
	NOTE: You can't force the compiler to inline anything. You can only suggest
	functions that would be suitable for inlining with the options mentioned above.
	
	Wrong Compiler Options or Mixing Incompatible Libraries
	-------------------------------------------------------
	
	Certain compiler options have implications with respect to the library that
	should be used at link time. The following table shows the relationship for
	Visual C++ version 2.x. The compiler will include the name of the library you
	should link to in the object file. Using the /NODEFAULTLIB switch will cause the
	compiler to ignore these references, so you need to make sure that you link with
	the correct libraries.
	
	Compile option   Run-time usage            Link with
	--------------------------------------------------------
	/ML (default)    Single threaded static
	                run-time library          Libc.lib
	
	/MT              Multithread run-time
	                library                   Libcmt.lib
	
	/MD              Multithread using DLL     Msvcrt.lib
	
	/LD              Changes the default run-time library support
	                to /MT if you have not explicitly specified
	                /MD, /ML, or /MT.
	
	For more information on these options, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q128641 The /Mx Compiler Options and the LIBC, LIBCMT, MSVCRT Libs
	
	Msvcrt.lib will link with a different version of the run time depending on the
	version of Visual C++ that you are using. For version 2.x, the DLL is
	Msvcrt20.dll. Also, note that with Visual C++ version 2.x, there are two
	versions of Msvcrt20.dll -- one that targets Windows NT and Windows 95 and one
	that targets Win32s. For more information on these DLLs, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q125476 PRB Error "...MSVCRT20.DLL is not compatible with Win32s"
	
	Libc.lib, Libcmt.lib, and Msvcrt.lib and their corresponding compile options are
	mutually exclusive for one project. Only one switch and its corresponding
	library should be used for compiling and linking all of the modules in a
	project.
	
	The following are some cases where these options can cause unresolved externals:
	
	- Linking code compiled with an explicit or implicit /ML to the Libcmt.lib or
	  Msvcrt.lib library causes various unresolved externals. A fairly common
	  unresolved symbol is _errno.
	
	- Linking code compiled with /MT with Libc.lib may cause unresolved externals
	  on _beginthread, _beginthreadex, _endthread, and _endthreadex. LIBC is not
	  multithreaded, so it does not contain these run-time functions. This case
	  occurs with Visual C++ version 2.0. The version of MFC that shipped with 2.0
	  is multithread-aware.
	
	- Compiling with /MD and then linking with the LIBC or LIBCMT libraries may
	  result in unresolved externals. When using /MD a call to a run-time function
	  in your source code becomes a reference "__imp__function" in the object
	  because the C Run-Time Library functions will be imported from Msvcrtxx.dll
	  rather than be statically linked. For example:
	
	     /* Test.c                                    */ 
	     /* Compile Options: /MD /c                   */ 
	     /* Link Options: /NOD:msvcrt.lib libcmt.lib  */ 
	
	     #include <stdio.h>
	     void main(void) {
	        printf("hello"); // Generates unresolved external on __imp__printf
	     }
	
	- With Visual C++ version 4.0, if you compile with the /MLd, /MTd, or /MDd
	  options or define _DEBUG and there are calls to any of the Debug Routines,
	  then linking with the non-debug libraries will cause unresolved externals on
	  the debug routines.
	
	REFERENCES
	==========
	
	
	Search in the Microsoft Knowledge Base using L2029 for a list of articles that
	describe the problems you may encounter with the 16-bit version of Visual C++.
	For the 32-bit versions, search using LNK2001 or LNK4016.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbVCsearch kbAudDeveloper kbvc150 kbvc100 kbZNotKeyword3 kbCVC700 kbVC151 kbVC152
	Version           : :1.0,1.5,1.51,1.52,7.0
	Issue type        : kbprb
	
	=============================================================================
	
