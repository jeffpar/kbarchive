---
layout: page
title: "Q44725: INFO: printf() and 512-Byte I/O Buffer"
permalink: kb/044/Q44725/
---

## Q44725: INFO: printf() and 512-Byte I/O Buffer

	Article: Q44725
	Product(s): Microsoft C Compiler
	Version(s): 1.52,2.0,2.1,2.2,4.0,4.1,4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbCRT kbVC kbVC152 kbVC200 kbVC210 kbVC220 kbVC410 kbVC420 kbVC500 kbVC600
	Last Modified: 22-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C Run-Time (CRT), used with:
	   - Microsoft Visual C++ for Windows, 16-bit edition, version 1.52 
	   - Microsoft Visual C++, 32-bit Editions, versions 2.0, 2.1, 2.2, 4.0, 4.1, 4.2, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The function printf() takes up 512 bytes from the default heap in 16-bit
	applications and 4096 bytes in 32-bit applications.
	
	MORE INFORMATION
	================
	
	The standard I/O buffer gets allocated only when needed. This gives the program
	an extra 512 bytes of near-heap space in small and medium memory models or an
	extra 512 bytes of far-heap space in compact and large models. Therefore, when
	the printf() function is used for the first time, a 512-byte buffer is reserved
	for I/O, and the subsequent calls to printf() use that buffer.
	
	The sample program below demonstrates this behavior. When compiled and executed
	with current 16-bit versions, the number printed after printf() executes is 512
	bytes more than the number printed before the printf() executes.
	
	When this sample program is compiled for release under 32-bit versions and
	executed in Windows NT, the output displays 4096 bytes. For debug compile, the
	number of bytes shown is 4144, the extra 48 bytes are used to debug related
	information. Note that this program displays 0 bytes for 32-bit versions on
	Windows 95, Windows 98, or Windows Millennium Edition (Me) because _heapwalk is
	not supported in Windows 95, Windows 98, and Windows Me.
	
	Sample Code
	-----------
	
	  /* Compile options needed: none
	  */ 
	
	  #include <stdio.h>
	  #include <malloc.h>
	
	  unsigned long heapdump (void)
	  {
	     struct _heapinfo hinfo;
	     int heapstatus;
	     unsigned long memUsed = 0;
	
	     hinfo._pentry = NULL;
	     while ((heapstatus = _heapwalk(&hinfo)) == _HEAPOK)
	     {
	        if (hinfo._useflag == _USEDENTRY)
	           memUsed += hinfo._size;
	     }
	     switch (heapstatus)
	     {
	       case _HEAPEMPTY:
	           printf("OK - empty heap\n");
	           break;
	       case _HEAPEND:
	           printf("OK - end of heap\n");
	           break;
	       case _HEAPBADPTR:
	           printf("ERROR - bad pointer\n");
	           break;
	       case _HEAPBADBEGIN:
	           printf("ERROR - bad start\n");
	           break;
	       case _HEAPBADNODE:
	           printf("ERROR - bad node\n");
	           break;
	     }
	
	     return memUsed;
	  }
	
	  void main (void)
	  {
	     unsigned long memUsed, memTemp;
	
	     memTemp = memUsed = heapdump();
	
	     printf("Pre-printf memory used was %lu bytes.\n", memUsed);
	     memUsed = heapdump();
	     printf("Post-printf memory used is %lu bytes.\n", memUsed);
	     printf(
	       "The difference in memory used between printf's is %lu bytes.\n",
	       memUsed - memTemp);
	  }
	
	Additional query words: heapwalk printf
	
	======================================================================
	Keywords          : kbCRT kbVC kbVC152 kbVC200 kbVC210 kbVC220 kbVC410 kbVC420 kbVC500 kbVC600 
	Technology        : kbVCsearch kbAudDeveloper kbCRT
	Version           : :1.52,2.0,2.1,2.2,4.0,4.1,4.2,5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	
