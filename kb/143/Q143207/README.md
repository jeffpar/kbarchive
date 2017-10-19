---
layout: page
title: "Q143207: PRB: Common Problems When Using STL with STD Namespace"
permalink: /kb/143/Q143207/
---

## Q143207: PRB: Common Problems When Using STL with STD Namespace

	Article: Q143207
	Product(s): Microsoft C Compiler
	Version(s): 4.00
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 03-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Case One
	--------
	
	When compiling a file that uses the Standard Template Library (STL), you may see
	the following warning and error when using the std namespace, which is required
	when using the STL with MFC:
	
	  {stl directory}\iterator.h(65) : warning C4114: same type qualifier
	  used more than once
	
	  {stl directory}\defalloc.h(124) : error C2661: 'new' : no overloaded
	  function takes 2 parameters
	
	Case Two
	--------
	
	In addition, you may get this different set of errors:
	
	  {include directory}\new.h(80) : error C2061: syntax error : identifier
	  'THIS_FILE'
	
	  {include directory}\new.h(80) : error C2091: function returns function
	
	  {include directory}\new.h(80) : error C2809: 'operator new' has no formal
	  parameters#endif
	
	  {include directory}\new.h(80) : error C2065: 'ptr' : undeclared identifier
	
	Case Three
	----------
	
	Once the previous two cases are resolved, you may get link errors. The errors you
	may receive take this form:
	
	  error LNK2001: unresolved external symbol "SymbolName"
	
	Here SymbolName is a C Run-Time (CRT) symbol prefaced by the std:: namespace
	name.
	
	RESOLUTION
	==========
	
	Warning C4114 is superfluous and can be ignored. You can disable the warning by
	using a '#pragma warning' directive. Error C2661 requires that you include New.h
	in your source file.
	
	The second set of errors occurs if you add the STL include directive after the
	following definitions and do not include New.h among your include directives:
	
	     #ifdef _DEBUG
	     #define new DEBUG_NEW
	     #undef THIS_FILE
	     static char THIS_FILE[] = __FILE__;
	     #endif
	
	Including New.h will work around this problem as well. Note that these
	definitions are no longer necessary in MFC code and can be deleted.
	
	The third set of errors from the linker can be resolved by including the
	appropriate header files from the CRT above the declaration for the std
	namspace. You can determine which header file must be included by looking at the
	symbol listed in the linker error. Remove the leading std:: from the symbol, and
	then search for the symbol in the CRT header files. This file was included by
	the STL headers. You need to include this header explicitly before the namespace
	declaration. In the Case Three Sample Code section in this article, you can see
	Iostream.h is the header that must be included at global scope.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Sample Code to Reproduces Behavior Described in Case One
	--------------------------------------------------------
	
	     /* Compile options needed: none
	     */ 
	
	     //#include <new.h>   // Required to avoid C2661 error.
	
	     namespace std {
	     #include <vector.h>
	     }
	
	     std::vector<char> test;
	
	Sample Code to Reproduces Behavior Described in Case Two
	--------------------------------------------------------
	
	     /* Compile options needed: /c /D_DEBUG /DNOMINMAX
	     */ 
	
	     #include <afxwin.h>  // or stdafx.h in a default AppWizard project.
	     //#include <new.h>   // Required to avoid this problem.
	
	     #ifdef _DEBUG
	     #define new DEBUG_NEW
	     #undef THIS_FILE
	     static char THIS_FILE[] = __FILE__;
	     #endif
	
	     namespace std {
	     #include <vector.h>
	     }
	
	Sample Code to Reproduces Behavior Described in Case three
	----------------------------------------------------------
	
	     /* Compile options needed: none
	     */ 
	
	     //#include <iostream.h>     // Required to avoid LNK2001 error
	     #include <new.h>
	
	     namespace std {
	     #include <vector.h>
	     }
	
	     std::vector<int> test(0,10);
	
	Additional query words: MFC
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper
	Version           : 4.00
	Issue type        : kbprb
	
	=============================================================================
	
