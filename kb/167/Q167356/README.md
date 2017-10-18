---
layout: page
title: "Q167356: FIX: Same Name for Function and Class Causes C2079"
permalink: kb/167/Q167356/
---

## Q167356: FIX: Same Name for Function and Class Causes C2079

	Article: Q167356
	Product(s): Microsoft C Compiler
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): kbtool kbVC500bug kbVC600fixkbbuglist
	Last Modified: 13-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a single name refers to both a class name and a function name, errors similar
	to the following may be incorrectly generated:
	
	  error C2079: 'g1' uses undefined struct 'g' error C2875: using-declaration
	  causes a multiple declaration of 'A::x' error C2513: 'struct B::x' :
	  decl-specifier is missing a declarator before '='
	
	RESOLUTION
	==========
	
	Replace the using declaration with a using directive. For example, in the
	following code replace the using declarations:
	
	     using B::f
	     using B::g
	     using B::x
	
	with one:
	
	  using namespace B;
	
	Please see the MORE INFORMATION section for a sample that demonstrates the
	workaround.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.This problem was corrected in Microsoft
	Visual C++ version 6.0.
	
	MORE INFORMATION
	================
	
	Section 7.3.3, paragraphs 4 thru 15 of the C++ Final Draft International
	Specification discuss this language behaviour in detail:
	
	  If the set of declarations and using-declarations for a single name are given
	  in a declarative region, --they shall all refer to the same, or all refer to
	  functions; or --exactly one declaration shall declare a class name or
	  enumeration name and the other declarations shall all refer to the same
	  entity or all refer to functions; in this case the class name or enumeration
	  name is hidden.
	
	Sample Code
	-----------
	
	      namespace A {
	         int x;
	      }
	      namespace B {
	         int i;
	         struct g { };
	         struct x { };
	         void f(int);
	         void f(double);
	         void g(char);
	      }
	      void func()  {
	         int i;
	         void f(char);
	         using B::f;
	         f(3.5f);
	         using B::g;
	         g('a');
	         struct g g1;     // error C2079
	         using B::x;
	         using A::x;     // error C2875
	         x = 99;         // error C2513:
	         struct x x1;
	      }
	
	      //Workaround
	      namespace A {
	         int x;
	      }
	      namespace B {
	         int i;
	         struct g { };
	         struct x { };
	         void f(int);
	         void f(double);
	         void g(char);
	      }
	
	      void func()  {
	         using namespace B ;
	         int i;
	         void f(char);
	         f(3.5f);
	         g('a');
	         struct g g1;
	         using A::x;
	         x = 99;
	         struct x x1;
	      }
	
	Additional query words:
	
	======================================================================
	Keywords          : kbtool kbVC500bug kbVC600fix kbbuglist
	Technology        : kbVCsearch kbAudDeveloper kbVC500 kbVC32bitSearch kbVC500Search
	Version           : winnt:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
