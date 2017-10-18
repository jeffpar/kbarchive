---
layout: page
title: "Q132422: HOWTO: Clear an istream Object During Extraction"
permalink: kb/132/Q132422/
---

## Q132422: HOWTO: Clear an istream Object During Extraction

	Article: Q132422
	Product(s): Microsoft C Compiler
	Version(s): MS-DOS:7.0;WIN3X:1.0,1.5,1.51,1.52;WINNT:2.0,2.1,4.0,5.0;
	Operating System(s): 
	Keyword(s): kbcode kbCRT kbLangCPP kbVC kbVC100 kbVC150 kbVC151 kbVC152 kbVC200 kbVC210 kbVC400 kbV
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C Run-Time (CRT), included with:
	   - Microsoft C/C++ for MS-DOS, version 7.0 
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5, 1.51, 1.52 
	   - Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 2.1, 4.0 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Testing for errors during extraction is important. For example:
	
	     int  n = 0;
	     while (n <= 100) {cin >> n;}
	
	This program is expecting a value greater than 100. If the user inputs a
	non-numeric value, the stream's fail bit is set, and the cin object becomes
	unusable. All subsequent extractions result in an immediate return with no value
	stored. Consequently, the program hangs (stops responding) in the while loop.
	
	MORE INFORMATION
	================
	
	The clear() member function clears the fail bit. However, the istream object is
	still unusable. The sample code below clears the fail bit and extracts the
	unusable characters left in the streambuf object.
	
	Sample Code
	-----------
	
	     /* No special compile options needed. */ 
	
	    #include <iostream.h>
	
	     int ClearError(istream& isIn)        // Clears istream object
	     {
	        streambuf*  sbpThis;
	        char        szTempBuf[20];
	        int         nCount, nRet = isIn.rdstate();
	
	        if  (nRet)                        // Any errors?
	        {
	            isIn.clear();                 // Clear error flags
	            sbpThis = isIn.rdbuf();       // Get streambuf pointer
	            nCount = sbpThis->in_avail(); // Number of characters in buffer
	
	            while (nCount)                // Extract them to szTempBuf
	            {
	                if  (nCount > 20)
	                {
	                    sbpThis->sgetn(szTempBuf, 20);
	                    nCount -= 20;
	                }
	                else
	                {
	                    sbpThis->sgetn(szTempBuf, nCount);
	                    nCount = 0;
	                }
	            }
	        }
	
	        return  nRet;
	     }
	
	     void main()
	     {
	        int  n = 0, nState;
	        while (n <= 100)
	        {
	           cout << "Please enter an integer greater than 100.\n";
	           cin >> n;
	           nState = ClearError(cin);   // Clears any errors in cin
	        }
	     }
	
	REFERENCES
	==========
	
	iostream Class Library Reference, Chapter 1
	
	Additional query words:
	
	======================================================================
	Keywords          : kbcode kbCRT kbLangCPP kbVC kbVC100 kbVC150 kbVC151 kbVC152 kbVC200 kbVC210 kbVC400 kbVC500 kbVC600 
	Technology        : kbVCsearch kbAudDeveloper kbCRT
	Version           : MS-DOS:7.0;WIN3X:1.0,1.5,1.51,1.52;WINNT:2.0,2.1,4.0,5.0;
	Issue type        : kbhowto
	
	=============================================================================
	
