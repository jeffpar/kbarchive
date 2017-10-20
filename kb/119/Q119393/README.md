---
layout: page
title: "Q119393: BUG: Invalid Extraction from istrstream Does Not Set failbit"
permalink: /kb/119/Q119393/
---

## Q119393: BUG: Invalid Extraction from istrstream Does Not Set failbit

{% raw %}

	Article: Q119393
	Product(s): Microsoft C Compiler
	Version(s): 1.0,1.5,1.51,1.52,2.0,4.0,4.1,4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbLangCPP kbVC kbVC100bug kbVC150bug kbVC151bug kbVC152bug kbVC200bug kbVC400bug kbVC41
	Last Modified: 11-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft C/C++ for MS-DOS 
	- Microsoft Visual C++, versions 1.0, 1.5, 1.51, 1.52, 2.0, 4.0, 4.1 
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.2, 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 4.2, 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	- Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you extract an integer of an invalid octal value from istrstream, 0 is
	extracted and the ios::failbit is not set. In addition, the ios::fail() function
	returns FALSE, incorrectly indicating that the istrstream is valid.
	
	
	RESOLUTION
	==========
	
	Use the manipulators (dec, hex, oct, binary, text) explicitly to set the correct
	conversion base for the characters represented by the stream.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	A scenario that produces an unexpected result, and which may also reflect this
	problem, involves using the string "08" to initialize the buffer used by the
	istrstream (or any string where the first character is 0 and one of the
	following characters is greater than 7).
	
	This string causes the istrstream extraction operator to load the int with 0
	instead of the expected value. This is because when 0 is the leading character
	in a number and it is not followed by an x or X, the number is treated as an
	octal number. Therefore, only the characters 0 through 7 after the leading 0 are
	valid.
	
	Sample Code
	-----------
	
	  /* Compile options needed: none
	  */ 
	
	  #include <strstrea.h>
	
	  void main()
	  {
	     char buffer[10] = "08";
	     int i;
	     istrstream* str;
	
	     str = new istrstream( buffer, 10 );
	
	     // The following extraction is made with the expectation that
	     // the i will be set to 8. However, it will be set to 0.
	     *str >> i;
	
	     // To fix this, change the line to:
	     // *str >> dec >> i;
	
	     cout << "i = " << i << endl;
	     cout << "str->fail()=" << str->fail() << endl;
	     delete str;
	  }
	
	Additional query words: kbVC400bug 8.00 8.00c 9.00 9.10
	
	======================================================================
	Keywords          : kbLangCPP kbVC kbVC100bug kbVC150bug kbVC151bug kbVC152bug kbVC200bug kbVC400bug kbVC410bug kbVC420bug kbVC500bug kbVC600bug 
	Technology        : kbVCsearch kbAudDeveloper kbZNotKeyword8 kbvc150 kbvc100 kbZNotKeyword3 kbVC410 kbVC420 kbVC500 kbVC600 kbVC151 kbVC200 kbVC32bitSearch kbVC152 kbVC400 kbVCNET kbVC500Search
	Version           : :1.0,1.5,1.51,1.52,2.0,4.0,4.1,4.2,5.0,6.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
