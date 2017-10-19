---
layout: page
title: "Q157593: STL Sample for map::max_size, clear, erase, size Functions"
permalink: /kb/157/Q157593/
---

## Q157593: STL Sample for map::max_size, clear, erase, size Functions

	Article: Q157593
	Product(s): Microsoft C Compiler
	Version(s): 4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbcode kbVC420 kbVC500 kbVC600 kbDSupport
	Last Modified: 01-APR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Standard C++ Library, used with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.2, 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, versions 4.2, 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	   - Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	NOTE: Microsoft Visual C++ NET (2002) supported both the managed code model that is provided by the .NET Framework and the unmanaged native Windows code model. The information in this article applies to unmanaged Visual C++ code only.
	
	SUMMARY
	=======
	
	The sample code below illustrates how to use the map::max_size, map::clear,
	map::empty, map::erase, map::size, map::operator[], map::end, map::begin,
	map::find, map::iterator, map::value_type STL symbols in Visual C++.
	
	MORE INFORMATION
	================
	
	Required Header
	---------------
	
	     <map>
	
	Prototypes
	----------
	
	     size_type max_size() const;
	     void clear() const;
	     bool empty() const;
	     iterator erase(iterator first, iterator last);
	     size_type size() const;
	     A::reference operator[](const Key& key);    // A is the allocator
	     iterator map::begin();
	     iterator map::end();
	     iterator map::find(const Key& key);
	
	NOTE: The class/parameter names in the prototypes may not match the version in
	the header file. Some have been modified to improve readability.
	
	Description
	-----------
	
	The following sample creates a map of strings to ints and fills it first with a
	map of month names to month numbers, then empties and refills it with a map of
	week-day names to corresponding ints.
	
	Sample Code
	-----------
	
	  ////////////////////////////////////////////////////////////////////// 
	  // 
	  // Compile options needed: None
	  // 
	  // <filename> :  main.cpp
	  // 
	  // Functions:    iterator map::max_size();
	  //               void clear() const;
	  //               bool empty() const;
	  //               iterator erase(iterator first, iterator last);
	  //               size_type size() const;
	  //               A::reference operator[](const Key& key);
	  //               iterator map::begin();
	  //               iterator map::end();
	  //               iterator map::find(const Key& key);
	  // 
	  // Written by Rick Troemel
	  // of Microsoft Product Support Services,
	  // Copyright (c) 1996 Microsoft Corporation. All rights reserved.
	  ////////////////////////////////////////////////////////////////////// 
	
	  #pragma warning(disable:4786)
	
	  #include <iostream>
	  #include <string>
	  #include <map>
	
	  #if _MSC_VER > 1020   // if VC++ version is > 4.2
	     using namespace std;  // std c++ libs implemented in std
	     #endif
	
	  typedef map<string, int, less<string>, allocator<int> > STRING2INT;
	
	  void main()
	  {
	      STRING2INT MyMap;
	      STRING2INT::iterator MyIterator;
	      string MyBuffer;
	
	      // print the maximum number of <key,data> pairs that MyMap can hold
	      cout << "MyMap is capable of holding " << MyMap.max_size()
	           << " <string,int> pairs" << endl;
	
	      if(!MyMap.empty())
	          cout << "MyMap has " << MyMap.size() << " entries" << endl;
	      else
	          cout << "MyMap is empty" << endl;
	          cout << "Entering new entries in MyMap" << endl;
	      // Fill in MyMap with the months of the year, mapped to their number
	      // January - 1, February - 2, etc. using operator[].
	      MyMap["January"] = 1;
	      MyMap["February"] = 2;
	      MyMap["March"] = 3;
	      MyMap["April"] = 4;
	      MyMap["May"] = 5;
	      MyMap["June"] = 6;
	      MyMap["July"] = 7;
	      MyMap["August"] = 8;
	      MyMap["September"] = 9;
	      MyMap["October"] = 10;
	      MyMap["November"] = 11;
	      MyMap["December"] = 12;
	
	      if(!MyMap.empty())
	          cout << "MyMap has " << MyMap.size() << " entries" << endl;
	      else
	          cout << "MyMap is empty" << endl;
	
	      // Ask the user for a month of the year and print the number
	      // that corresponds to the month entered
	      //MyIterator = MyMap.end();
	      while(MyIterator == MyMap.end()){
	          cout << "Enter a Month :";
	          cin >> MyBuffer;
	          if((MyIterator = MyMap.find(MyBuffer)) != MyMap.end())
	              cout << (*MyIterator).first << " is Month Number "
	                   << (*MyIterator).second << endl;
	          else
	              cout << "Enter a Valid Month (example: March)" << endl;
	      }
	
	      // empty MyMap - note that clear simply calls erase(begin(),end());
	      MyMap.clear();
	
	      if(!MyMap.empty())
	          cout << "MyMap has " << MyMap.size() << " entries" << endl;
	      else
	          cout << "MyMap is empty" << endl;
	          cout << "Entering new entries in MyMap" << endl;
	      // Fill MyMap with the days of the week, each mapped to an int
	      MyMap["Monday"] = 1;
	      MyMap["Tuesday"] = 2;
	      MyMap["Wednesday"] = 3;
	      MyMap["Thursday"] = 4;
	      MyMap["Friday"] = 5;
	      MyMap["Saturday"] = 6;
	      MyMap["Sunday"] = 7;
	
	      if(!MyMap.empty())
	          cout << "MyMap has " << MyMap.size() << " entries" << endl;
	      else
	          cout << "MyMap is empty" << endl;
	
	      // Ask the user for a day of the week and print the number
	      // that corresponds to the day entered
	      MyIterator = MyMap.end();
	      while(MyIterator == MyMap.end()){
	          cout << "Enter a Day of the Week:";
	          cin >> MyBuffer;
	          if((MyIterator = MyMap.find(MyBuffer)) != MyMap.end())
	              cout << (*MyIterator).first << " is Day Number "
	                   << (*MyIterator).second << endl;
	          else
	              cout <<"Enter a Valid Day of the Week(example: Monday)"<< endl;
	      }
	  // Now clear MyMap again - this time using erase instead of clear
	      MyMap.erase(MyMap.begin(), MyMap.end());
	
	      if(!MyMap.empty())
	          cout << "MyMap has " << MyMap.size() << " entries" << endl;
	      else
	          cout << "MyMap is empty" << endl;
	
	  } 
	
	Program Output is (User input is shown inside []):
	
	MyMap is capable of holding 1073741823 <string,int> pairs
	MyMap is empty
	Entering new entries in MyMap
	MyMap has 12 entries
	Enter a Month :[April]
	April is Month Number 4
	MyMap is empty
	Entering new entries in MyMap
	MyMap has 7 entries
	Enter a Day of the Week:[Friday]
	Enter a Valid Day of the Week(example: Monday)
	Enter a Day of the Week:[Friday]
	Friday is Day Number 5
	MyMap is empty
	
	REFERENCES
	==========
	
	Visual C++ Books On Line: Visual C++ Books:C/C++:Standard C++ Library Reference.
	
	Additional query words: STL STLSample max_size clear empty erase size operator[] begin end find kbSTL kbTemplate
	
	======================================================================
	Keywords          : kbcode kbVC420 kbVC500 kbVC600 kbDSupport 
	Technology        : kbVCsearch kbAudDeveloper kbVCLibrary
	Version           : :4.2,5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	
