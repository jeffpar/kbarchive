---
layout: page
title: "Q116447: FIX: ostrstrea"
permalink: /kb/116/Q116447/
---

## Q116447: FIX: ostrstrea

{% raw %}

	Article: Q116447
	Product(s): Microsoft C Compiler
	Version(s): 1.0,1.5
	Operating System(s): 
	Keyword(s): kbLangCPP kbVCkbbuglist kbfixlist
	Last Modified: 26-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, version 1.5 
	- Microsoft Visual C++, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Using the ostrstream output operator << to pass a literal string
	containing quotation marks, as shown in the example below, may cause an
	incorrect translation of the \" sequence. Instead of passing the quotation
	marks, the backslash is passed into the resultant string as well.
	
	RESOLUTION
	==========
	
	There are two ways to resolve this problem. Both are shown in the sample code in
	the "MORE INFORMATION" section, below.
	
	- Use the operator keyword to call the << member function directly:
	
	        (ostrstream(string,length)).operator<< ("\"quoted string\"")
	
	-or-
	
	- Create an object of type ostrstream, then use the object to call the <<
	  operator:
	
	        ostrstream a(string,length);
	        a << "\"quoted string\""
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the products listed at the beginning
	of this article. This problem was corrected in Visual C++ version 2.0.
	
	MORE INFORMATION
	================
	
	You can use the following sample code to demonstrate the problem:
	
	Sample Code
	-----------
	
	  /* Compile options needed: none
	  */ 
	
	     #include <iostream.h>
	     #include <strstrea.h>
	
	     char s1[80];
	     char s2[80];
	     char s3[80];
	
	     void main()
	     {
	        ostrstream(s1,80) << "\"test 1\"";              // bad output here
	        cout << s1 << endl;
	
	        (ostrstream(s2,80)).operator<< ("\"test 2\"");  // OK
	        cout << s2 << endl;
	
	        ostrstream a(s3,80);
	        a << "\"test 3\"";                              // OK
	        cout << s3 << endl;
	     }
	
	Additional query words: 1.00 1.50
	
	======================================================================
	Keywords          : kbLangCPP kbVC kbbuglist kbfixlist
	Technology        : kbVCsearch kbAudDeveloper kbvc150 kbvc100
	Version           : :1.0,1.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
