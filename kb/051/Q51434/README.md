---
layout: page
title: "Q51434: HOWTO: Calculate Available File Handles at Run Time"
permalink: /kb/051/Q51434/
---

## Q51434: HOWTO: Calculate Available File Handles at Run Time

	Article: Q51434
	Product(s): Microsoft C Compiler
	Version(s): MS- DOS:6.0,6.00a,6.00ax,7.0;OS/2:6.0,6.00a;WIN3X:1.0,1.5;WINNT:1.0,2.0;
	Operating System(s): 
	Keyword(s): kbCRT kbVC
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C Run-Time (CRT), included with:
	   - Microsoft C for MS-DOS, versions 5.1, 6.0, 6.0a, 6.0ax 
	   - Microsoft C for OS/2, versions 5.1, 6.0, 6.0a 
	   - Microsoft C/C++ for MS-DOS, version 7.0 
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5 
	   - Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following code sample allows you to determine how many CRT file handles are
	available at run time for a particular process. The function makes use of the
	predefined pointers _iob and _lastiob, which are set to point to the first and
	the last input/output information blocks, respectively. The I/O blocks are
	examined to determine whether they are in use, and a total number of available
	file handles is produced. There is no equivalent C library function currently
	available.
	
	NOTE: This is not necessarily an indication of the maximum number of physical
	files that can be opened. The system-wide limit is set in MS-DOS by FILES= in
	the CONFIG.SYS file. In OS/2, this limit is arbitrarily governed by system
	resources and is modified for each process by DosSetMaxFH().
	
	MORE INFORMATION
	================
	
	Sample Code
	-----------
	
	     /*
	     Compile options needed: /DNO_EXT_KEYS under Windows NT, none otherwise
	
	     NOTE: This code will not compile unless it is compiled as a .C file
	           and not a .CPP.
	     */ 
	
	     #define FILE struct _iobuf
	     #ifndef NO_EXT_KEYS           /* Extensions enabled */ 
	         #define _CDECL  cdecl
	         #define _NEAR   near
	     #else                         /* Extensions not enabled */ 
	         #define _CDECL
	         #define _NEAR
	     #endif                        /* NO_EXT_KEYS */ 
	
	     #define _IOREAD 0x01          /* Open for read bit */ 
	     #define _IOWRT  0x02          /* Open for write bit */ 
	     #define _IORW   0x80          /* Open for read/write bit */ 
	
	     FILE                          /* File handle table entry */ 
	     {
	         char *_ptr;
	         int   _cnt;
	         char *_base;
	         char  _flag;
	         char  _file;
	      }_NEAR _CDECL _iob[], /*Set to first I/O block at run time*/ 
	                    *_lastiob;   /* Set to last I/O block */ 
	
	     /*
	        All of the above definitions were taken from the STDIO.H header
	        file except for _lastiob[], which is not defined. This information
	        was extracted to make the example more clear.
	     */ 
	
	     /*
	      - The following macro will check the availability of a file handle
	        by examining the _flag member of the I/O block
	     */ 
	
	     #define inuse(s) ((s)->_flag & (_IOREAD|_IOWRT|_IORW))
	
	     /*
	      - The following routine loops through the total number of I/O blocks
	        and checks the flags to see if it is used or not. The number of
	        unused handles is returned, which can be 1 to the maximum number of
	        file handles as set by the operating system or the FILES= command
	        in the CONFIG.SYS file.
	     */ 
	
	     int Number_Of_Handles(void)
	     {
	        FILE *stream = _iob;
	        int count;
	
	        count = 0;
	        do
	           if (inuse(stream)) count++;
	        while(stream++ < _lastiob);
	
	        return(((_lastiob - _iob)+1)-count);
	     }
	
	     void main(void)
	     {
	        int i;
	
	        i = Number_Of_Handles();
	     /* i is now set to the number of available file handles */ 
	     }
	
	The table of I/O blocks that is being checked here was allocated at run time
	according to the maximum number of file handles allowed per process.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbCRT kbVC 
	Technology        : kbVCsearch kbAudDeveloper kbCRT
	Version           : MS- DOS:6.0,6.00a,6.00ax,7.0;OS/2:6.0,6.00a;WIN3X:1.0,1.5;WINNT:1.0,2.0;
	Issue type        : kbhowto
	
	=============================================================================
	
