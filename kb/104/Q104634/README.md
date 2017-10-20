---
layout: page
title: "Q104634: INFO: fstream's File Pointers Are Not Independent"
permalink: /kb/104/Q104634/
---

## Q104634: INFO: fstream's File Pointers Are Not Independent

{% raw %}

	Article: Q104634
	Product(s): Microsoft C Compiler
	Version(s): 1.0,1.5,1.51,1.52,2.0,2.1,4.0,5.0,6.0,7.0,7.0a
	Operating System(s): 
	Keyword(s): kbcode kbLangCPP kbVC100 kbVC150 kbVC151 kbVC152 kbVC200 kbVC210 kbVC400 kbVC500 kbVC60
	Last Modified: 22-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft C/C++ for MS-DOS, versions 7.0, 7.0a 
	- Microsoft Visual C++, versions 1.0, 1.5, 1.51, 1.52, 2.0, 2.1, 4.0 
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft "iostream Class Library Reference" in the Books Online included
	with Visual C++ 32-bit Edition, version 4.0, contains the following as part of
	the description for class filebuf:public iostream:
	
	  The reserve area, put area, and get area are introduced in the streambuf
	  class description. The put area and the get area are always the same for
	  filebuf objects. Also, the get pointer and put pointers are tied; when one
	  moves, so does the other.
	
	Previous versions of the Microsoft "iostream Class Library Reference" for class
	filebuf:public iostream state the following:
	
	  Although the filebuf object's get and put pointers are theoretically
	  independent, the get area and the put area cannot both be active at the same
	  time.
	
	This statement can lead to some confusion as to whether the get and put pointers
	are independent of each other. In the Microsoft iostream library implementation
	of fstream, these pointers are not independent of each other. If the get pointer
	moves, so does the put pointer. The source code listed below demonstrates this
	behavior.
	
	MORE INFORMATION
	================
	
	Sample Code
	-----------
	
	  /* Compile options needed: None. Build as a console .EXE for Windows NT
	  */ 
	
	  #include <fstream.h>
	  #include <strstrea.h>
	  #include <assert.h>
	  #undef NDEBUG    // Make sure assert works.
	
	  void main()
	  {
	    fstream stream("test",ios::in | ios::out | ios::binary);
	    int temp;
	    char input;
	
	    cout << "\n\nOpened binary file test" << endl;
	    cout << "Get pointer is " << hex << stream.tellg() << endl;
	    cout << "Put pointer is " << hex << stream.tellp() << endl;
	    cout << "Now writing 256 bytes..." << endl;
	    for(temp = 0;temp < 256;temp++)
	    {
	      stream.put((char)temp);
	    }
	    cout << "Get pointer is " << hex << stream.tellg() << endl;
	    cout << "Put pointer is " << hex << stream.tellp() << endl;
	
	    cout << "\nNow setting the put pointer to hex 50" << endl;
	    stream.seekp(0x50);
	    cout << "Get pointer is " << hex << stream.tellg() << endl;
	    cout << "Put pointer is " << hex << stream.tellp() << endl;
	
	    cout << "\nNow setting the get pointer to hex 40" << endl;
	    stream.seekg(0x40);
	    cout << "Get pointer is " << hex << stream.tellg() << endl;
	    cout << "Put pointer is " << hex << stream.tellp() << endl;
	
	    cout << "\nNow writing one character" << endl;
	    stream.put('a');
	    cout << "Get pointer is " << hex << stream.tellg() << endl;
	    cout << "Put pointer is " << hex << stream.tellp() << endl;
	
	    cout << "\nNow reading one character" << endl;
	    stream.get(input);
	    cout << "Get pointer is " << hex << stream.tellg() << endl;
	    cout << "Put pointer is " << hex << stream.tellp() << endl;
	    stream.close();
	  }
	
	Additional query words:
	
	======================================================================
	Keywords          : kbcode kbLangCPP kbVC100 kbVC150 kbVC151 kbVC152 kbVC200 kbVC210 kbVC400 kbVC500 kbVC600 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbZNotKeyword8 kbvc150 kbvc100 kbZNotKeyword3 kbCVC700DOS kbCVC700aDOS kbVC500 kbVC600 kbVC151 kbVC200 kbVC210 kbVC32bitSearch kbVC152 kbVC500Search
	Version           : :1.0,1.5,1.51,1.52,2.0,2.1,4.0,5.0,6.0,7.0,7.0a
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
