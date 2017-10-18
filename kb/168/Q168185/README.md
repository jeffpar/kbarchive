---
layout: page
title: "Q168185: HOWTO: STL Sample for gslice::(length, start, stride) Functions"
permalink: kb/168/Q168185/
---

## Q168185: HOWTO: STL Sample for gslice::(length, start, stride) Functions

	Article: Q168185
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
	
	The sample code below illustrates how to use the gslice::length, gslice::start,
	gslice::stride STL functions in Visual C++.
	
	Note that there are some differences in the implementation of the Standard C++
	Library components in Visual C++ version 4.2 vs. later revisions. The relevant
	sections of code below compile conditionally based upon the value of _MSC_VER.
	
	MORE INFORMATION
	================
	
	Required Header
	---------------
	
	     <valarray>
	
	Prototype
	---------
	
	     class gslice
	     {
	     public:
	
	        gslice();
	        gslice(size_t st, const valarray<size_t> len,
	                    const valarray<size_t> str);
	        size_t start() const;
	
	     #if _MSC_VER == 1020   // if VC++ 4.2, define length()
	
	        const valarray<size_t> length() const;
	
	     #else   // if later than VC++ 4.2, define size() instead
	
	        const valarray<size_t> size() const;
	
	     #endif
	
	        const valarray<size_t> stride() const;
	
	     };
	
	NOTE: The class/parameter names in the prototype may not match the version in the
	header file. Some have been modified to improve readability.
	
	Description
	-----------
	
	This sample demostrates the use of STL gslice array to change "Hello World!"
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
	      //  gslice::length, gslice::start, gslice::stride
	      // 
	      // Written by Yeong-Kah Tam
	      // of Microsoft Product Support Services,
	      // Copyright (c) 1996 Microsoft Corporation. All rights reserved.
	      ////////////////////////////////////////////////////////////////////// 
	
	      #include <iostream>            // for i/o functions
	      #include <valarray>            // for valarray
	      using namespace std;
	
	     #if _MSC_VER > 1020   // if VC++ version is > 4.2
	     using namespace std;  // std c++ libs implemented in std
	     #endif
	
	      void main()
	      {
	         // Initialize string 1 to contain "Hello World!", and string 2 to
	         // contain "There".
	         valarray<char> string1("Hello World!", 12);
	         valarray<char> string2("There.", 6);
	
	         // Display both strings...
	         cout << "String 1 = ";
	         int strlen;
	      #if _MSC_VER == 1020   // VC++ 4.2 - call length()
	         strlen = string1.length();
	      #else   // later than VC++ 4.2 - call size()
	         strlen = string1.size();
	      #endif
	         for (int i = 0; i < strlen; i++)
	            cout << string1[i];
	         cout << "\r\n";
	
	         cout << "String 2 = ";
	      #if _MSC_VER == 1020   // VC++ 4.2 - call length()
	         strlen = string2.length();
	      #else   // later than VC++ 4.2 - call size()
	         strlen = string2.size();
	      #endif
	         for (i = 0; i < strlen; i++)
	            cout << string2[i];
	         cout << "\r\n\r\n";
	
	         // Create 2 vectors for use by gslice().
	         const size_t lv[] = {2, 3};   // number of initial indexes
	         const size_t dv[] = {3, 1};   // increment value
	         const valarray<size_t> len(lv, 2), stride(dv, 2);
	
	         // gslice(6, len, stride) creates a gslice
	              // array of {6, 7, 8, 9, 10, 11} which is used to select the
	              // elements of string1.  "World!" it is. In turn, these
	              // elements are replaced by the corresponding element
	         // in string2.
	         gslice gslice_obj(6, len, stride);
	         string1[gslice_obj] = string2;
	
	         // Display starting index, length vector, and stride vector of
	              // the gslice object.
	         cout << "gslice - starting index = " << gslice_obj.start()
	                << "\r\n";
	
	      #if _MSC_VER == 1020   // VC++ 4.2 - call length()
	         valarray<size_t> gslice_len = gslice_obj.length();
	         strlen = gslice_len.length();
	      #else   // later than VC++ 4.2 - call size()
	         valarray<size_t> gslice_len = gslice_obj.size();
	         strlen = gslice_len.size();
	      #endif
	         cout << "gslice - length vector  = ";
	         for (i = 0; i < strlen; i++)
	            cout << gslice_len[i] << "  ";
	         cout << "\r\n";
	
	         valarray<size_t> gslice_stride = gslice_obj.stride();
	      #if _MSC_VER == 1020   // VC++ 4.2 - call length()
	         strlen = gslice_stride.length();
	      #else   // later than VC++ 4.2 - call size()
	         strlen = gslice_stride.size();
	      #endif
	         cout << "gslice - stride vector  = ";
	         for (i = 0; i < strlen; i++)
	            cout << gslice_stride[i] << "  ";
	         cout << "\r\n\r\n";
	
	         // Now print out the result.
	         cout << "After the change, String 1 = ";
	      #if _MSC_VER == 1020   // VC++ 4.2 - call length()
	         strlen = string1.length();
	      #else   // later than VC++ 4.2 - call size()
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
	
	  gslice - starting index = 6
	  gslice - length vector  = 2  3
	  gslice - stride vector  = 3  1
	
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
	
