---
layout: page
title: "Q166721: FIX: Compiler Error C2784 o"
permalink: kb/166/Q166721/
---

## Q166721: FIX: Compiler Error C2784 o

	Article: Q166721
	Product(s): Microsoft C Compiler
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbcode kbtool kbCompiler kbCPPonly kbLangCPP kbVC kbVC500bug kbVS97sp1fix
	Last Modified: 04-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C/C++ Compiler (CL.EXE), included with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to instantiate an STL container such as vector or list, you
	receive compiler error C2784 if the class type of the objects contained do not
	have operator < and operator == defined to take the class type as both
	arguments:
	
	  xutility(45) : error C2784: 'bool __cdecl std::operator<(const class
	  std::reverse_iterator<`template-parameter-1',`template-parameter-2
	  ',`template-parameter-3',`template-parameter-4',`template-parameter-5'>
	  &,const class std::reverse_iterator<`template-parameter-1', `template-
	  parameter-2',`template-parameter-3',`template-parameter-4',
	  `template-parameter-5'> &)' : could not deduce template argument for
	  'const class std::reverse_iterator<`template-parameter-1',
	  `template-parameter-2',`template-parameter-3',`template-parameter-4',
	  `template-parameter-5'> &' from 'const struct P'
	
	  xutility(45) : error C2676: binary '<' : 'const struct MyClass' does not
	  define this operator or a conversion to a type acceptable to the
	  predefined operator
	
	CAUSE
	=====
	
	The Visual C++ 5.0 compiler forces the instantiation of inline template member
	functions regardless of whether they are referenced. The member function
	generated is later discarded if it is not referenced.
	
	RESOLUTION
	==========
	
	Declare a global operator < and a global operator == that take the given
	class type in both arguments. Note that the operators don't need to have bodies
	because they aren't actually used and will be discarded by the linker anyway.
	
	     #if (_MSC_VER == 1100)
	     #define GLOBAL_OPS(Type) \ 
	       bool operator < (const Type& lhs, const Type& rhs);
	       bool operator == (const Type& lhs, const Type& rhs);
	
	     GLOBAL_OPS(MyClass)
	     GLOBAL_OPS(MyOtherClass)
	     #endif
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been corrected in Visual Studio 97
	Service Pack 1.
	
	For additional information about the Visual Studio 97 Service Pack 1, please see
	the following article in the Microsoft Knowledge Base:
	
	  Q170365 INFO: Visual Studio 97 Service Packs - What, Where, and Why
	
	MORE INFORMATION
	================
	
	Note that if you use functions such as find() or sort() or compare containers
	(using one of the logical operators), you must define less than and equality
	operators for the class type being contained in the STL container.
	
	Steps to Reproduce Behavior
	---------------------------
	
	      /*
	      Compile options needed to reproduce:   -GX
	      Compile options needed for workaround: -GX -D"WORKAROUND"
	      */ 
	
	      #include <vector>
	      using namespace std;
	
	      struct MyClass {
	              // members here
	      };
	      struct MyOtherClass {
	              // members here
	      };
	
	      #ifdef WORKAROUND
	      #if (_MSC_VER == 1100)
	      #define GLOBAL_OPS(Type) \ 
	        bool operator < (const Type& lhs, const Type& rhs) {return true;} \ 
	        bool operator == (const Type& lhs, const Type& rhs) {return true;}
	
	      GLOBAL_OPS(MyClass)
	      GLOBAL_OPS(MyOtherClass)
	      #endif //_MSC_VER
	      #endif //WORKAROUND
	
	      void main () {
	              vector<MyClass> a;
	      }
	
	======================================================================
	Keywords          : kbcode kbtool kbCompiler kbCPPonly kbLangCPP kbVC kbVC500bug kbVS97sp1fix 
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : 5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
