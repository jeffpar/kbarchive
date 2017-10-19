---
layout: page
title: "Q168186: HOWTO: STL Sample for slice::(length, start, stride) Functions"
permalink: /kb/168/Q168186/
---

## Q168186: HOWTO: STL Sample for slice::(length, start, stride) Functions

	Article: Q168186
	Product(s): Microsoft C Compiler
	Version(s): winnt:4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): _IK kbVC420 kbVC500 kbVC600
	Last Modified: 05-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Standard C++ Library, used with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The sample code below illustrates how to use the slice::length, slice::start,
	slice::stride STL functions in Visual C++.
	
	Note that there are some differences in the implementation of the Standard C++
	Library components in Visual C++ version 4.2 versus later revisions. The
	relevant sections of code below compile conditionally based upon the value of
	_MSC_VER.
	
	MORE INFORMATION
	================
	
	Required Header
	---------------
	
	     <valarray>
	
	Prototype
	---------
	
	     class slice
	     {
	     public:
	
	        slice();
	        slice(size_t st, size_t len, size_t str);
	        size_t start() const;
	
	     #if _MSC_VER == 1020   // version 4.2 - declare length()
	
	        size_t length() const;
	
	     #else // later than version 4.2, length changed to size()
	
	        size_t size() const;
	
	     #endif
	
	        size_t stride() const;
	
	     };
	
	NOTE: The class/parameter names in the prototype may not match the version in the
	header file. Some have been modified to improve readability.
	
	Description
	-----------
	
	This sample demonstrates the use of STL slice array to change "Hello World!"
	string to "Hello There." string.
	
	Sample Code
	-----------
	
	      ////////////////////////////////////////////////////////////////////// 
	      // 
	      // Compile options needed: None
	      // 
	      // <filename> :  main.cpp
	      // 
	      // Functions:
	      // 
	      //  slice::length, slice::start, slice::stride
	      // 
	      // Written by Yeong-Kah Tam
	      // of Microsoft Product Support Services,
	      // Copyright (c) 1996 Microsoft Corporation. All rights reserved.
	      ////////////////////////////////////////////////////////////////////// 
	
	      #include <iostream>             // for i/o functions
	      #include <valarray>             // for valarray
	      using namespace std;
	
	      #if _MSC_VER > 1020 // later than version 4.2
	      using namespace std;
	      #endif
	
	      void main()
	      {
	         // Initialize string 1 to contain "Hello World!",
	         // and string 2 to contain "There".
	         valarray<char> string1("Hello World!", 12);
	         valarray<char> string2("There.", 6);
	
	         // Display both strings...
	         cout << "String 1 = ";
	         int strlen;
	      #if _MSC_VER == 1020   // version 4.2 - call length
	         strlen = string1.length();
	      #else   // later than 4.2 - call size
	         strlen = string1.size();
	      #endif
	         for (int i = 0; i < strlen; i++)
	         cout << string1[i];
	         cout << "\r\n";
	
	         cout << "String 2 = ";
	      #if _MSC_VER == 1020   // version 4.2 - call length
	         strlen = string2.length();
	      #else   // later than 4.2 - call size
	         strlen = string2.size();
	      #endif
	         for (i = 0; i < strlen; i++)
	         cout << string2[i];
	         cout << "\r\n\r\n";
	
	         // slice(6, 6, 1) creates a slice array of
	         //{6, 7, 8, 9, 10, 11} which is used to select
	         // the elements of string1.  "World!" it is.  In
	         // turn, these elements are replaced by the corresponding
	         // element in string2.
	         slice slice_obj(6, 6, 1);
	         string1[slice_obj] = string2;
	
	         // Display starting index, length,
	         // and stride of the slice object.
	         cout << "slice - starting index = " << slice_obj.start();
	              cout << "\r\n";
	      #if _MSC_VER == 1020   // version 4.2 - call length
	         cout << "slice - length = " << slice_obj.length() << "\r\n";
	      #else   // later than 4.2 - call size
	         cout << "slice - length = " << slice_obj.size() << "\r\n";
	      #endif
	         cout << "slice - stride = " << slice_obj.stride() << "\r\n";
	         cout << "\r\n";
	
	         // Now print out the result.
	         cout << "After the change, String 1 = ";
	      #if _MSC_VER == 1020   // version 4.2 - call length
	         strlen = string1.length();
	      #else   // later than 4.2 - call size
	         strlen = string1.size();
	      #endif
	         for(i = 0; i < strlen; i++)
	            cout << string1[i];
	         cout << "\r\n";
	      }
	
	Program Output
	--------------
	
	  String 1 = Hello World!
	  String 2 = There.
	
	  slice - starting index = 6
	  slice - length = 6
	  slice - stride = 1
	
	After the change, String 1 = Hello There.
	
	REFERENCES
	==========
	
	Visual C++ Books On Line: Visual C++ Books:C/C++:Standard C++ Library
	Reference.
	
	(c) Microsoft Corporation 1997, All Rights Reserved. Contributions by Yeong-Kah
	Tam, Microsoft Corporation
	
	
	Additional query words: STL STLSample length, start, stride
	
	======================================================================
	Keywords          : _IK kbVC420 kbVC500 kbVC600 
	Technology        : kbVCsearch kbAudDeveloper kbVCLibrary
	Version           : winnt:4.2,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
