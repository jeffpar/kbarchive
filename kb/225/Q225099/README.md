---
layout: page
title: "Q225099: FIX: Memory Access Violation Caused by Repeated Reallocs"
permalink: kb/225/Q225099/
---

## Q225099: FIX: Memory Access Violation Caused by Repeated Reallocs

	Article: Q225099
	Product(s): Microsoft C Compiler
	Version(s): winnt:6.0
	Operating System(s): 
	Keyword(s): kbCRT kbVC600QFE kbVS600sp4fix kbVS600sp5fix
	Last Modified: 20-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C Run-Time (CRT), used with:
	   - Microsoft Visual C++, 32-bit Editions, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Under certain circumstances, using the Realloc function in a small memory block
	(if the total small-block memory pool exceeds 16 MB) causes access violation
	with the Visual C++ 6.0 small-block allocator.
	
	CAUSE
	=====
	
	Memory access violation occurs inside the __sbh_free_block() function due to a
	bug in the implementation of the _realloc_base() function.
	
	RESOLUTION
	==========
	
	Here are three ways to work around this problem:
	
	1. In the following code block in the Realloc.c file:
	
	  //  if the new size is not over __sbh_threshold, attempt
	  //  to reallocate within the small-block heap
	  if (newsize <= __sbh_threshold)
	  {
	     if (__sbh_resize_block(pHeader, pBlock, newsize))
	        pvReturn = pBlock;
	     else if ((pvReturn = __sbh_alloc_block(newsize)) != NULL)
	     {
	        oldsize = ((PENTRY)((char *)pBlock -
	                           sizeof(int)))->sizeFront - 1;
	        memcpy(pvReturn, pBlock, __min(oldsize, newsize));
	        __sbh_free_block(pHeader, pBlock);
	     }
	  }
	
	  Replace this line of code:
	
	  __sbh_free_block(pHeader, pBlock);
	
	  with this:
	
	  pHeader = __sbh_find_block(pBlock);
	  __sbh_free_block(pHeader, pBlock);
	
	  And rebuild CRT. NOTE: If you are rebuilding the DLL version of CRT, then the
	  new DLL name should not start with "msvc".
	
	2. Implement your own Realloc() function to avoid using the CRT implementation.
	
	3. Use the _set_sbh_threshold(0) function to avoid the use of the small block
	  heap. Both Windows NT 4.0 SP4 and Windows 2000 have an efficient OS-level
	  heap implementation. You may encounter performance problems on Windows 95 and
	  Windows 98 because its operating system heap implementation is not as
	  efficient as the one on Windows NT.
	
	A supported fix for the Visual C++ 6.0 static libraries that corrects this
	problem is now available from Microsoft, but it has not been fully regression
	tested and should be applied only to systems experiencing this specific
	problem.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information on support costs, please go to the following
	address on the World Wide Web:
	
	http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	The English version of this fix should have the following file attributes or
	later:
	
	+---------------------------------------------------------------------+
	| Name         | Size     | Date       | Time    | Version | Platform | 
	+---------------------------------------------------------------------+
	| Libc.lib     | 843,586  | 12/20/1999 | 6:41 PM | none    | x86      | 
	+---------------------------------------------------------------------+
	| Libcd.lib    | 2,538,44 | 12/20/1999 | 6:52 PM | none    | x86      | 
	+---------------------------------------------------------------------+
	| Libcd.pdb    | 94,208   | 12/20/1999 | 6:52 PM | none    | x86      | 
	+---------------------------------------------------------------------+
	| Libci.lib    | 165,800  | 12/20/1999 | 6:41 PM | none    | x86      | 
	+---------------------------------------------------------------------+
	| Libcid.lib   | 397,510  | 12/20/1999 | 6:53 PM | none    | x86      | 
	+---------------------------------------------------------------------+
	| Libcid.pdb   | 77,824   | 12/20/1999 | 6:53 PM | none    | x86      | 
	+---------------------------------------------------------------------+
	| Libcimt.lib  | 178,144  | 12/20/1999 | 6:45 PM | none    | x86      | 
	+---------------------------------------------------------------------+
	| Libcimtd.lib | 604,376  | 12/20/1999 | 6:56 PM | none    | x86      | 
	+---------------------------------------------------------------------+
	| Libcimtd.pdb | 86,016   | 12/20/1999 | 6:56 PM | none    | x86      | 
	+---------------------------------------------------------------------+
	| Libcmt.lib   | 893,390  | 12/20/1999 | 6:44 PM | none    | x86      | 
	+---------------------------------------------------------------------+
	| Libcmtd.lib  | 3,151,58 | 12/20/1999 | 6:56 PM | none    | x86      | 
	+---------------------------------------------------------------------+
	| Libcmtd.pdb  | 94,208   | 12/20/1999 | 6:56 PM | none    | x86      | 
	+---------------------------------------------------------------------+
	| Libcp.lib    | 721,584  | 12/20/1999 | 6:41 PM | none    | x86      | 
	+---------------------------------------------------------------------+
	| Libcpd.lib   | 1,639,90 | 12/20/1999 | 6:53 PM | none    | x86      | 
	+---------------------------------------------------------------------+
	| Libcpd.pdb   | 167,936  | 12/20/1999 | 6:53 PM | none    | x86      | 
	+---------------------------------------------------------------------+
	| Libcpmt.lib  | 735,302  | 12/20/1999 | 6:44 PM | none    | x86      | 
	+---------------------------------------------------------------------+
	| Libcpmtd.lib | 1,647,60 | 12/20/1999 | 6:56 PM | none    | x86      | 
	+---------------------------------------------------------------------+
	| Libcpmtd.pdb | 167,936  | 12/20/1999 | 6:56 PM | none    | x86      | 
	+---------------------------------------------------------------------+
	
	in the following self-extracting file:
	
	+-----------------------------------------------------------+
	| Name         | Size      | Date      | Time    | Platform | 
	+-----------------------------------------------------------+
	| VC225099.EXE | 3,345,777 | 1/17/2000 | 1:30 PM | x86      | 
	+-----------------------------------------------------------+
	
	
	NOTE: If this product was already installed on your computer when you purchased
	it from the Original Equipment Manufacturer (OEM) and you need this fix, please
	call the Pay Per Incident number listed on the above Web site. If you contact
	Microsoft to obtain this fix, a fee may be charged. This fee is refundable if it
	is determined that you only require the fix you requested. However, this fee is
	non-refundable if you request additional technical support, if your no-charge
	technical support period has expired, or if you are not eligible for standard
	no-charge technical support.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in the next service pack for
	Visual Studio 6.0.
	
	For additional information about Visual Studio service packs, click the article
	numbers below to view the articles in the Microsoft Knowledge Base:
	
	  Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	  Q194295 HOWTO: Tell That a Visual Studio Service Pack Is Installed
	
	You can download the latest Visual Studio service pack from the following
	Microsoft Web site:
	
	  Visual Studio Product Updates
	  (http://msdn.microsoft.com/vstudio/downloads/updates.asp)
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	Build the following .cpp file as a console application and run it under the
	debugger. You receive an access violation error.
	
	  //main.cpp
	
	  #include "stdio.h"
	  #include "stdlib.h"
	
	  int main()
	  {
	  	char* pData;
	
	  	for( int i=0; i< 70000; i++ )
	  	{
	              pData = (char*)malloc( 32 );
	              pData = (char*)realloc( pData, 290 );  //access violation in small-block allocator 
	  	}	
	
	  	return(0);
	  } //end main
	
	REFERENCES
	==========
	
	For additional information, please click the article numbers below to view the
	articles in the Microsoft Knowledge Base:
	
	  Q195008 Heap Manager Change in Service Pack 4 and Windows 2000
	
	  Q234622 PRB: VC++ 6.0 Setup Does Not Copy the CRT Make Files
	
	Additional query words: sp4 realloc small-block heap memory unhandled exception
	
	======================================================================
	Keywords          : kbCRT kbVC600QFE kbVS600sp4fix kbVS600sp5fix 
	Technology        : kbVCsearch kbAudDeveloper kbCRT
	Version           : winnt:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
