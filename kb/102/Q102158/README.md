---
layout: page
title: "Q102158: FIX: ifstream Object Loses Character in Text Mode"
permalink: /kb/102/Q102158/
---

## Q102158: FIX: ifstream Object Loses Character in Text Mode

	Article: Q102158
	Product(s): Microsoft C Compiler
	Version(s): 1.0,1.5,2.0,4.0,4.1,4.2
	Operating System(s): 
	Keyword(s): kbcode kbCompiler kbCPPonly kbVC100 kbVC150 kbVC200 kbVC400 kbVC410 kbVC420 kbVC500fix
	Last Modified: 29-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft C/C++ for MS-DOS 
	- Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5 
	- Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 4.0, 4.1 
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	- Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When an application reads characters into an ifstream object opened in text
	mode, data may be lost and not placed into the buffer. The code does not provide
	any warning or other indication of this data loss.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the products listed at the
	beginning of this article. This problem was fixed in Visual C++ 5.0.
	
	MORE INFORMATION
	================
	
	The following code example demonstrates this problem by filling a buffer with
	the character sequence "01234567890..." and using an ifstream object to copy the
	data to another buffer. The transferred sequence reads as "013456..." Only the
	character "2" is missing from the sequence. The remainder of the sequence
	transfers correctly.
	
	Sample Code
	-----------
	
	  /*
	   * Compiler options needed:  -GX for 5.0 only
	   */ 
	
	  #include <iostream.h>
	  #include <fstream.h>
	
	  // To resolve the problem using Visual C++ 5.0, use the
	  // following three statements instead of the preceding two:
	  // 
	  // #include <iostream>
	  // #include <fstream>
	  // using namespace std;
	
	  void main(void)
	  {
	     ofstream os("test.tmp");
	     for (int i = 0; i < 512; i++)
	     {
	        os.put((char)('0' + i % 10));
	     }
	     os.put('\n');
	     os.close();
	
	     streampos pos;
	     ifstream is("test.tmp");
	  // To resolve this error using Visual C++ 4.x and earlier, use the
	  // following line to open the ifstream instead of the line above.
	  // ifstream is("test.tmp", ios::binary);
	     for (int k = 0; k < 10; k++)
	     {
	        pos = is.tellg();
	        cout << (char)is.get();
	     }
	  }
	
	
	Additional query words: kbVC400bug 8.00 8.00c 9.00
	
	======================================================================
	Keywords          : kbcode kbCompiler kbCPPonly kbVC100 kbVC150 kbVC200 kbVC400 kbVC410 kbVC420 kbVC500fix 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbZNotKeyword8 kbvc150 kbvc100 kbZNotKeyword3 kbVC410 kbVC420 kbVC200 kbVC32bitSearch kbVC16bitSearch
	Version           : :1.0,1.5,2.0,4.0,4.1,4.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
