---
layout: page
title: "Q240015: FIX: getline Template Function Reads Extra Character"
permalink: /kb/240/Q240015/
---

## Q240015: FIX: getline Template Function Reads Extra Character

	Article: Q240015
	Product(s): Microsoft C Compiler
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbtemplate kbLangCPP kbSTL kbVC kbVC600 kbVC600bug kbNoUpdate
	Last Modified: 11-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Standard C++ Library, used with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Standard C++ Library template getline function reads an extra character
	after encountering the delimiter. Please refer to the sample program in the More
	Information section for details.
	
	RESOLUTION
	==========
	
	Modify the getline member function, which can be found in the following system
	header file string, as follows:
	
	  	else if (_Tr::eq((_E)_C, _D))
	                  {_Chg = true;
	                //  _I.rdbuf()->snextc(); /* Remove this line and add the line below.*/ 
	  		  _I.rdbuf()->sbumpc();
	                  break; }
	
	NOTE: Because the resolution involves modifying a system header file, extreme
	care should be taken to ensure that nothing else is changed in the header file.
	Microsoft is not responsible for any problems resulting from unwanted changes to
	the system header files.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This problem was corrected in Microsoft Visual C++ .NET.
	
	MORE INFORMATION
	================
	
	The following sample program demonstrates the bug:
	
	  //test.cpp
	  //Compiler options : /GX
	  #include <string>
	  #include <iostream>
	  int main () {
	  	std::string s,s2;
	  	std::getline(std::cin,s);
	  	std::getline(std::cin,s2);
	  	std::cout << s <<'\t'<< s2 << std::endl;
	  	return 0;
	  }
	
	  Actual Results:
	  Hello<Enter Key>
	  World<Enter Key>
	  <Enter Key>	
	  Hello   World
	
	  Expected Results:
	  Hello<Enter Key>
	  World<Enter Key>
	  Hello   World
	
	Additional query words: STL
	
	======================================================================
	Keywords          : kbtemplate kbLangCPP kbSTL kbVC kbVC600 kbVC600bug kbNoUpdate 
	Technology        : kbVCsearch kbAudDeveloper kbVCLibrary
	Version           : :6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
