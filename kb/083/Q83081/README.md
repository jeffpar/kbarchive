---
layout: page
title: "Q83081: INFO: Endl Flushes the cout Buffer Immediately Upon Execution"
permalink: /kb/083/Q83081/
---

## Q83081: INFO: Endl Flushes the cout Buffer Immediately Upon Execution

{% raw %}

	Article: Q83081
	Product(s): Microsoft C Compiler
	Version(s): 1.0,1.5,1.51,1.52,2.0,2.1,4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbLangCPP kbVC100 kbVC150 kbVC151 kbVC152 kbVC200 kbVC210 kbVC400 kbVC500 kbVC600
	Last Modified: 14-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft C/C++ for MS-DOS 
	- Microsoft Visual C++, versions 1.0, 1.5, 1.51, 1.52, 2.0, 2.1, 4.0 
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	In these products, the cout class uses a buffering system for data that may not
	be flushed immediately. Because cout usually handles small messages, several
	messages are usually needed to fill the buffer, which will cause the data to be
	written to the standard output handle. In some cases, this can cause
	considerable delay when writing output to the screen during a debugging session.
	This problem can be avoided, however, by using the endl manipulator. When
	appended to the end of a cout call, the endl manipulator inserts a newline
	character and then flushes the buffer.
	
	MORE INFORMATION
	================
	
	Sample Code
	-----------
	
	  /* Compile options needed: none
	  */ 
	
	  #include <iostream.h>
	
	  void main(void)
	  {
	    cout << "This string will be buffered";
	    cout << "This string will be flushed immediately" <<endl;
	  }
	
	For more information on the other methods to flush the cout buffer, please see
	the following article in the Microsoft Knowledge Base:
	
	  Q94227 INFO: Output Stream cout Is Buffered
	
	Additional query words: 8.00 8.00c 9.00 9.10 CodeView CVW
	
	======================================================================
	Keywords          : kbLangCPP kbVC100 kbVC150 kbVC151 kbVC152 kbVC200 kbVC210 kbVC400 kbVC500 kbVC600 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbZNotKeyword8 kbvc150 kbvc100 kbZNotKeyword3 kbVC500 kbVC600 kbVC151 kbVC200 kbVC210 kbVC32bitSearch kbVC152 kbVC500Search
	Version           : :1.0,1.5,1.51,1.52,2.0,2.1,4.0,5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
