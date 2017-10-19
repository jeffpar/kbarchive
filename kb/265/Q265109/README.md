---
layout: page
title: "Q265109: BUG: The STL list::sort() Function Doesn't Sort List of Pointers"
permalink: /kb/265/Q265109/
---

## Q265109: BUG: The STL list::sort() Function Doesn't Sort List of Pointers

	Article: Q265109
	Product(s): Microsoft C Compiler
	Version(s): 
	Operating System(s): 
	Keyword(s): kbtemplate kbSTL kbVC600bug kbDSupport kbGrpDSVCCompiler
	Last Modified: 03-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C/C++ Compiler (CL.EXE) 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Standard Template Library (STL) list::sort function doesn't sort a list of
	pointers when a predicate function is defined for sorting.
	
	CAUSE
	=====
	
	The Microsoft Developer Network (MSDN) documentation for the list::sort function
	states that, if a translator doesn't support member function templates, the
	following template
	
	  template <class Pred>;
	     void sort(Pred pr);
	
	is replaced by:
	
	  void sort(greater<T> pr);
	
	You can specify the predicate function for sorting, but it will always call the
	greater function.
	
	RESOLUTION
	==========
	
	Override struct greater<T> and specify your comparison function for
	sorting. See the workaround in the "More Information" section for details.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	The following sample code demonstrates the bug and the workaround:
	
	  //sort.cpp
	  //compiler options cl /GX sort.cpp
	  #include <iostream>
	  #include <algorithm>
	  #include <list>
	  using namespace std;
	
	  //#define WORKAROUND //Uncomment this line to work around the bug.
	
	  class CSort 
	  {
	  public:
	      CSort(int i) : m_i(i) { }
	      int m_i;
	  };
	
	  struct PrintElements 
	  {
	     void operator()(CSort* pfi) const
	     {
	        cout << pfi->m_i << "\n";
	     }
	  };
	
	  #ifdef WORKAROUND
	  template<>
	  struct std::greater<CSort*>  : public binary_function<CSort* ,CSort*, bool> 
	  {
	      bool operator()(const CSort* &x, const CSort* &y) const
	      { 
	  	return (x->m_i < y->m_i); 
	      };
	  };
	  #endif
	
	  // User-defined predicate function for sorting.
	  struct lessThan : public greater<CSort*> 
	  {
	      bool operator()(const CSort* &pfi1, const CSort* &pfi2) const
	      { 
	  	return pfi1->m_i < pfi2->m_i; 
	      }
	  };
	
	  void SortTest()
	  {
	      list<CSort*> l3;
	      l3.push_back(new CSort(11));
	      l3.push_back(new CSort(01));
	      l3.push_back(new CSort(21));
	      l3.push_back(new CSort(14));
	      l3.push_back(new CSort(41));
	      list<CSort*>::iterator lfii = l3.begin();
	      l3.sort(lessThan());
	      for_each(l3.begin(), l3.end(), PrintElements());
	      cout.flush();
	  }
	
	  int main(int argc, char* argv[])
	  {
	      SortTest();
	      return 0;
	  }
	
	The program produces the following output, which is incorrect:
	
	  41
	  14
	  21
	  1
	  11
	
	The expected output is a sorted result:
	
	  1
	  11
	  14
	  21
	  41
	
	Additional query words:
	
	======================================================================
	Keywords          : kbtemplate kbSTL kbVC600bug kbDSupport kbGrpDSVCCompiler 
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : :
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
