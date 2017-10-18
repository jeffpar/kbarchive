---
layout: page
title: "Q250848: PRB: STL list::remove Doesn't Remove All Occurrences of Element"
permalink: kb/250/Q250848/
---

## Q250848: PRB: STL list::remove Doesn't Remove All Occurrences of Element

	Article: Q250848
	Product(s): Microsoft C Compiler
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbtemplate kbLangCPP kbSTL kbDSupport kbGrpDSVCCompiler
	Last Modified: 14-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	- Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Standard Template Library (STL) list::remove function does not remove all
	the occurrences of an element from the List in a Debug build when an iterator is
	passed as a parameter. However, in a Release build, list::remove does remove all
	the occurrences of an element from the List. Sometimes (with multiprocess
	computers), remove does not erase all occurrences in both Debug and Release
	builds.
	
	CAUSE
	=====
	
	The STL list::remove function is defined as taking a "const T &" argument.
	Passing an iterator means passing the reference to the element that is pointed
	to by the iterator. After the first occurrence of the element is removed,
	list::remove invalidates the iterator address so that the next occurrence of the
	element is not removed in a Debug build.
	
	In a Release build, after the first occurrence of the element is removed, the
	reference to the iterator address is still valid, so all the occurrences of the
	element are removed.
	
	RESOLUTION
	==========
	
	Instead of passing the reference of the element to list::remove, pass the actual
	value of the element.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	The following example code demonstrates this problem:
	
	  #include <list>
	  #include <iostream>
	  using namespace std;
	
	  typedef list <int> MY_LIST_OF_INT;
	
	  int main()
	  {
	              int elem[6] = {2,1,2,3,2,2}, element;
	  	
	     	MY_LIST_OF_INT		MyList;
	     	MY_LIST_OF_INT::iterator	it_begin, it_temp;
	     	
	     	for(int x = 0; x < 6; x++)
	  		MyList.push_back(elem[x]);
	  	
	     	cout << "Elements in List before Remove" << endl;
	     	for(it_begin = MyList.begin(); it_begin != MyList.end(); ++it_begin)
	  		cout << *it_begin << " ";
	     	cout << endl;
	
	  	it_temp = MyList.begin();
	  	MyList.remove(*it_temp);
	
	     	cout << "Elements in List after Remove " << endl;
	     	for(it_begin = MyList.begin(); it_begin != MyList.end(); it_begin++)
	  		cout << *it_begin << " ";
	     	cout << endl;
	     	return 1;
	  }
	
	Additional query words:
	
	======================================================================
	Keywords          : kbtemplate kbLangCPP kbSTL kbDSupport kbGrpDSVCCompiler 
	Technology        : kbVCsearch kbAudDeveloper kbVC600 kbVC32bitSearch kbVCNET
	Version           : :6.0
	Issue type        : kbprb
	
	=============================================================================
	
