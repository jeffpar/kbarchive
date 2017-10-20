---
layout: page
title: "Q156991: INFO: STL Sample for the distance() Function"
permalink: /kb/156/Q156991/
---

## Q156991: INFO: STL Sample for the distance() Function

{% raw %}

	Article: Q156991
	Product(s): Microsoft C Compiler
	Version(s): 4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbcode kbVC420 kbVC500 kbVC600 kbDSupport
	Last Modified: 27-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Standard C++ Library, used with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.2, 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, versions 4.2, 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	   - Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The sample code below illustrates how to use the distance STL function in Visual
	C++.
	
	MORE INFORMATION
	================
	
	Required Header
	---------------
	
	     <iterator>
	
	Prototype
	---------
	
	     template<class Init, class Dist>
	
	         Dist distance(InIt first, InIt last, Dist& n);
	
	Description
	-----------
	
	This function returns the distance between two iterators by determining how many
	times the first iterator would need to be incremented until it was equal to the
	last iterator.
	
	The Help file in Visual C++ 4.2 incorrectly states that this function takes three
	parameters and returns nothing.
	
	NOTE: The class/parameter names in the prototype may not match the version in the
	header file. Some have been modified to improve readability.
	
	Sample Code
	-----------
	
	NOTE: The first line in the sample code section says:
	
	  // Compile options needed: /GX
	
	In VC++ .NET, /EHsc is set by default and is equivalent to /GX.
	
	  ////////////////////////////////////////////////////////////////////// 
	  // 
	  // Compile options needed: /GX
	  // 
	  // <filename> :  distance.cpp
	  // 
	  // Functions:
	  // 
	  //    distance()
	  // 
	  // Written by Linda Koontz
	  // of Microsoft Product Support Services,
	  // Copyright (c) 1996 Microsoft Corporation. All rights reserved.
	  ////////////////////////////////////////////////////////////////////// 
	
	  #include <iostream>
	  #include <vector>
	  #include <iterator>
	  #include <string>
	
	  #if _MSC_VER > 1020   // if VC++ version is > 4.2
	     using namespace std;  // std c++ libs implemented in std
	     #endif
	
	  // disable warning C4244: possible loss of data,
	  // okay to ignore
	
	  #pragma warning(disable: 4244)
	
	  #pragma warning (disable:4786)
	  typedef vector<string, allocator<string> > VTRLIST;
	
	  void main() {
	      VTRLIST Vector;
	      VTRLIST::iterator iVector;
	      VTRLIST::difference_type dTheDiff;
	
	      Vector.push_back("A1");
	      Vector.push_back("B2");
	      Vector.push_back("C3");
	      Vector.push_back("D4");
	      Vector.push_back("E5");
	      Vector.push_back("F6");
	      Vector.push_back("G7");
	
	      // Print out the list
	      iVector=Vector.begin();
	      cout << "The list is: ";
	      for (int i = 0; i < 7 ; i++, iVector++)
	          cout << *iVector  << "  ";
	
	      // Initialize the iterator the first element"
	      iVector=Vector.begin();
	      cout << "\n\nAdvance to the 3rd element." << endl;
	      advance( iVector, 2);
	      cout << "The element is " << *iVector << endl;
	      dTheDiff = distance( Vector.begin(), iVector);
	      cout << "The distance from the beginning is " << dTheDiff << endl;
	
	      cout << "Calculate it in reverse order " << endl;
	      dTheDiff = distance( iVector, Vector.begin());
	      cout << "The distance is " << dTheDiff << endl;
	
	      cout << "\nUse distance() to count from the 3rd element to the end."
	           << endl;
	      dTheDiff = distance( iVector, Vector.end());
	
	      // Note that end() returns one past the end of the sequence
	      cout << "The distance is " << dTheDiff << endl;
	
	      cout <<"\nUse distance() to count the total length." << endl;
	      dTheDiff = distance( Vector.begin(), Vector.end() );
	      cout << "The total distance is " << dTheDiff << endl;
	
	  }
	
	Program Output is:
	
	The list is: A1  B2  C3  D4  E5  F6  G7
	
	Advance to the 3rd element.
	The element is C3
	The distance from the beginning is 2
	Calculate it in reverse order
	The distance is -2
	
	Use distance() to count from the 3rd element to the end.
	The distance is 5
	
	Use distance() to count the total length.
	The total distance is 7
	
	REFERENCES
	==========
	
	Visual C++ Books On Line: Visual C++ Books:C/C++:Standard C++ Library Reference.
	
	Additional query words: STL STLSample distance
	
	======================================================================
	Keywords          : kbcode kbVC420 kbVC500 kbVC600 kbDSupport 
	Technology        : kbVCsearch kbAudDeveloper kbVCLibrary
	Version           : :4.2,5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
