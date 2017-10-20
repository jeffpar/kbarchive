---
layout: page
title: "Q57949: INFO: Use of the Stringizing Operator (#) in Macros"
permalink: /kb/057/Q57949/
---

## Q57949: INFO: Use of the Stringizing Operator (#) in Macros

{% raw %}

	Article: Q57949
	Product(s): Microsoft C Compiler
	Version(s): 1.0,1.5,2.0,4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbLangC kbVC100 kbVC150 kbVC200 kbVC400 kbVC500 kbVC600
	Last Modified: 12-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 1.0, 1.5, 2.0, 4.0 
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In Microsoft C for MS-DOS and Windows NT, when you are writing a preprocessor
	macro that takes an argument that must appear in quotation marks, you can use
	the # sign to expand the argument. One implementation of this preprocessor
	directive is the use of printf() in the macro. The following code demonstrates
	an example:
	
	Sample Code
	-----------
	
	  #define PR(fmt,value) printf("value = %" #fmt "\n", (value))
	
	  #include <stdio.h>
	
	  void main(void)
	  {
	     float afl;
	
	     afl = 3.14f;
	     PR(5.2f, afl);
	  }
	
	The sample code outputs the following string:
	
	  value =  3.14
	
	The # sign in front of the fmt variable allows the macro to be expanded using
	quotation marks. Note that the preprocessor concatenates consecutive pairs of
	double quotation marks so that the following string
	
	  "value = %""5.2f""\n"
	
	is translated into the following:
	
	  "value = %5.2f\n"
	
	Additional query words: pound number
	
	======================================================================
	Keywords          : kbLangC kbVC100 kbVC150 kbVC200 kbVC400 kbVC500 kbVC600 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbvc150 kbvc100 kbVC500 kbVC600 kbVC200 kbVC32bitSearch kbVC500Search
	Version           : :1.0,1.5,2.0,4.0,5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
