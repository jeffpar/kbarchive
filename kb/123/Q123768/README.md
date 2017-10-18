---
layout: page
title: "Q123768: PRB: Unresolved Externals for Inline Functions"
permalink: kb/123/Q123768/
---

## Q123768: PRB: Unresolved Externals for Inline Functions

	Article: Q123768
	Product(s): Microsoft C Compiler
	Version(s): 1.0,1.5,1.51,1.52,2.0,2.1,4.0,4.1,4.2,5.0,7.0
	Operating System(s): 
	Keyword(s): kberrmsg kbCompiler kbCPPonly kbVC
	Last Modified: 11-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft C/C++ for MS-DOS, version 7.0 
	- Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5, 1.51, 1.52 
	- Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 2.1, 4.0, 4.1, 4.2, 5.0 
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.2, 5.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 4.2, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Calling an inline function defined in a separate source file generates the
	following errors in Visual C++ 32-bit Edition, versions 2.x and 4.0:
	
	  
	
	  error LNK2001: unresolved external symbol "<function name>"
	  <filename.exe> : error LNK1120: 1 unresolved externals
	
	The 32-bit edition of Visual C++ version 1.0 generates these errors:
	
	  
	
	  warning LNK4016: unresolved external symbol
	                    "<Classname>::<Functionname>"
	  error LNK1120: 1 unresolved externals
	
	The 16-bit editions generate this error:
	
	  
	
	  error L2029: '<ClassName>::<FunctionName>' : unresolved external
	
	The function is declared in a header (.H) file, defined as an inline function in
	one source (.CPP) file, and called from a second source (.CPP) file.
	
	CAUSE
	=====
	
	Inline functions are not visible outside of the source file where they are
	defined. The Inline Specifier section in the C++ Language Reference states,
	"Functions that are declared as inline and that are not class member functions
	have internal linkage unless otherwise specified."
	
	The Inline Class Member Functions section in the C++ Language Reference states,
	"A class member function defaults to external linkage unless a definition for
	that function contains the inline specifier." Query on <inline function
	linkage> in the Books On-line for further information.
	
	RESOLUTION
	==========
	
	Here are five possible workarounds:
	
	- Declare the inline function with the extern keyword to force external
	  linkage. Note, however, that using extern with class member functions will
	  cause a warning with /Ze, and an error with /Za.
	
	-or-
	
	- Move the function definition to the header file so it's included in each
	  translation unit used.
	
	-or-
	
	- Remove the inline specification.
	
	-or-
	
	- Force a function version of the inline function to be created in the module
	  that it is defined in. You can do this by referencing the address of the
	  inline function, by assigning it to a function pointer, or by passing it to a
	  function.
	
	-or-
	
	- Remove the /Ob1 (Only Inline) or /Ob2 (Any suitable) option from the command
	  line and compile with /Ob0 (Disable). The /Ob0 option is the default if no
	  options are specified.
	
	  To change these options from within the Visual Workbench for Visual C++
	  version 4.0, follow these five steps:
	
	  1. Select the Settings... option from the Build menu.
	
	  2. Select the C/C+ Tab in the Project Settings dialog box.
	
	  3. Select the Optimizations item in the Category drop-down list box.
	
	  4. Select one of the following items from the In-line function expansion
	     drop-down list box:
	
	        - Disable *  (/Ob0)
	        - Only __inline  (/Ob1)
	        - Any Suitable  (/Ob2)
	
	  5. Press OK in the Project Settings dialog box.
	
	  To change these options from within the Visual Workbench for Visual C++
	  version 2.x, follow these five steps:
	
	  1. Select Project.
	
	  2. Choose Settings.
	
	  3. Change to the Settings for C/C++.
	
	  4. Select the Optimizing Category.
	
	  5. Choose the inline option from the Inline Function Expansion box.
	
	  To change these options from within previous versions of the Visual Workbench,
	  select Options and choose Project. Then choose Compiler. Change the Category
	  to Optimizations, and choose the inline option from the Inline Expansion of
	  Functions box.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Sample Code
	-----------
	
	     /* Compile options needed: /Ob1 or /Ob2
	     */ 
	
	     /* TEST.H */ 
	     class ClassA
	     {
	         private:
	             int  Var;
	         public:
	            ClassA ();
	            ~ClassA ();
	     };
	
	     /* TEST1.CPP */ 
	     #include "test.h"
	     void testfunc(void);
	     inline ClassA::ClassA() { Var = 6; };  // Inline function definition
	     ClassA::~ClassA() {}
	     void main(void) {
	         ClassA test1;
	         testfunc();
	     }
	
	     /* TEST2.CPP */ 
	     #include "test.h"
	     void testfunc(void)
	     {
	         ClassA test2;  // This generates an unresolved external error
	                        // on the default constructor when linked
	     }
	
	Additional query words: 8.00 8.00c 9.00
	
	======================================================================
	Keywords          : kberrmsg kbCompiler kbCPPonly kbVC 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbZNotKeyword8 kbvc150 kbvc100 kbZNotKeyword3 kbVC410 kbCVC700DOS kbVC420 kbVC500 kbVC151 kbVC200 kbVC210 kbVC32bitSearch kbVC16bitSearch kbVC152 kbVC500Search
	Version           : :1.0,1.5,1.51,1.52,2.0,2.1,4.0,4.1,4.2,5.0,7.0
	Issue type        : kbprb
	
	=============================================================================
	
