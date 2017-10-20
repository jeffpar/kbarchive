---
layout: page
title: "Q123603: DOC: Smart Pointers Example Is Incorrect"
permalink: /kb/123/Q123603/
---

## Q123603: DOC: Smart Pointers Example Is Incorrect

{% raw %}

	Article: Q123603
	Product(s): Microsoft C Compiler
	Version(s): 2.0,2.1,4.0,4.1,5.0
	Operating System(s): 
	Keyword(s): kbdocerr kbVC200 kbVC210 kbVC400 kbVC410 kbVC500
	Last Modified: 11-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 2.0, 2.1, 4.0, 4.1 
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Smart Pointers sample code uses C++ templates to create generic wrappers to
	encapsulate pointers of almost any type. The sample encapsulates pointers and
	overrides pointer operators to add new functionality to pointer operations.
	However, the Smart Pointers sample code in the documentation contains the
	following errors:
	
	- stdio.h is not included and TRACE is not defined.
	
	- Operator Ptr& operator=(Ptr<T> &p_) is missing.
	
	- Implementation for operator Ptr& operator=(T* p_) is incorrect.
	
	The Smart Pointers sample code may be found in "Templates" chapter of
	"Programming Techniques" included in the Visual C++ Books Online. Searching for
	"Smart Pointers" in search plus of the Books Online also brings you to the
	sample.
	
	
	MORE INFORMATION
	================
	
	The following version of the Smart Pointers sample has been corrected and
	enhanced to better demonstrate the concept of Smart Pointers:
	
	     #include <stdio.h>
	     #define TRACE printf
	     class RefCount {
	         int crefs;
	     public:
	         RefCount(void) { crefs = 0; }
	         ~RefCount() { TRACE("goodbye(%d)\n", crefs); }
	         void upcount(void) { ++crefs; TRACE("up to %d\n", crefs);}
	         void downcount(void)
	          {
	          if (--crefs == 0)
	           {
	           delete this;
	           }
	          else
	           TRACE("downto %d\n", crefs);
	          }
	     };
	     class Sample : public RefCount {
	     public:
	         void doSomething(void) { TRACE("Did something\n");}
	     };
	     template <class T> class Ptr {
	         T* p;
	     public:
	         Ptr(T* p_) : p(p_) { p->upcount(); }
	         ~Ptr(void) { p->downcount(); }
	         operator T*(void) { return p; }
	         T& operator*(void) { return *p; }
	         T* operator->(void) { return p; }
	         Ptr& operator=(Ptr<T> &p_)    // This is newly added
	             {return operator=((T *) p_);}
	         Ptr& operator=(T* p_) {
	             p->downcount(); p = p_; p->upcount(); return *this;
	                                       // This is corrected
	         }
	     };
	
	     int main() {
	         Ptr<Sample> p  = new Sample; // sample #1
	         Ptr<Sample> p2 = new Sample; // sample #2
	         p = p2; // #1 will have 0 crefs, so it is destroyed;
	                 // #2 will have 2 crefs.
	         p->doSomething();
	         return 0;
	         // As p2 and p go out of scope, their destructors call
	         // downcount. The cref variable of #2 goes to 0, so #2 is
	         // destroyed
	     }
	
	Additional query words: 9.00 template
	
	======================================================================
	Keywords          : kbdocerr kbVC200 kbVC210 kbVC400 kbVC410 kbVC500 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbVC410 kbVC500 kbVC200 kbVC210 kbVC32bitSearch kbVC500Search
	Version           : :2.0,2.1,4.0,4.1,5.0
	
	=============================================================================
	

{% endraw %}
