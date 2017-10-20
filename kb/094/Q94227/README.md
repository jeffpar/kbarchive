---
layout: page
title: "Q94227: INFO: Output Stream cout Is Buffered"
permalink: /kb/094/Q94227/
---

## Q94227: INFO: Output Stream cout Is Buffered

{% raw %}

	Article: Q94227
	Product(s): Microsoft C Compiler
	Version(s): 1.0,1.5,1.51,1.52,2.0,2.1,4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbLangCPP kbVC100 kbVC150 kbVC151 kbVC152 kbVC200 kbVC210 kbVC400 kbVC500 kbVC600
	Last Modified: 13-NOV-2001
	
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
	
	In an application developed with Microsoft C/C++, the cout stream is buffered.
	In other words, information sent to the cout stream does not appear on the
	screen until its buffers are flushed. For Visual C++ versions 4.2 and 5.0, this
	behavior only occurs when using the old iostream libraries. There are four
	methods to flush the cout buffer, as follows:
	
	- Use the endl manipulator to insert a newline character into the output stream
	  and flush the buffer. Use the insertion operator with the endl manipulator,
	  as follows:
	
	  cout << ... << endl;
	
	- Use the flush member function in the ostream class or the flush manipulator.
	  The flush manipulator does not insert a newline character into the stream
	  before it flushes the buffer. To call the flush member function, use code
	  similar to the following:
	
	  cout.flush();
	
	  Use the insertion operator with the flush manipulator as follows:
	
	  cout << ... << flush;
	
	- Read from the cin stream or write to the cerr or clog streams. Because these
	  objects share the buffer with cout, each flushes the contents of the buffer
	  before making any changes to it.
	
	- Exit the program to flush all buffers currently in use.
	
	MORE INFORMATION
	================
	
	Because cout is buffered, text that the application creates is not immediately
	displayed on the screen. In some circumstances, this behavior might be
	misinterpreted as an error in cout. For an example of an application that
	determines when to flush the cout buffer, see pages 377- 378 of the Microsoft
	C/C++ "Class Libraries User's Guide" for version 7.0.
	
	For more information on flushing the cout stream with the endl manipulator,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q83081 INFO: Endl Flushes the cout Buffer Immediately Upon Execution
	
	Additional query words:
	
	======================================================================
	Keywords          : kbLangCPP kbVC100 kbVC150 kbVC151 kbVC152 kbVC200 kbVC210 kbVC400 kbVC500 kbVC600 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbZNotKeyword8 kbvc150 kbvc100 kbZNotKeyword3 kbVC500 kbVC600 kbVC151 kbVC200 kbVC210 kbVC32bitSearch kbVC152 kbVC500Search
	Version           : :1.0,1.5,1.51,1.52,2.0,2.1,4.0,5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
