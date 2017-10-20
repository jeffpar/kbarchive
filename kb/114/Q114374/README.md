---
layout: page
title: "Q114374: PRB: _mktemp() May Return the Same Name Between Threads"
permalink: /kb/114/Q114374/
---

## Q114374: PRB: _mktemp() May Return the Same Name Between Threads

{% raw %}

	Article: Q114374
	Product(s): Microsoft C Compiler
	Version(s): winnt:
	Operating System(s): 
	Keyword(s): kbCRT kbVC kbprb
	Last Modified: 22-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C Run-Time (CRT), included with:
	   - *EDITOR Please do not choose this product*Microsoft Visual C++ 32-bit Edition* use 241, 265, 225, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When calling _mktemp() with the same template name in different threads of the
	same process, _mktemp() may return the same file name to each thread.
	
	CAUSE
	=====
	
	The _mktemp() function is used to generate temporary file names. Starting with a
	user supplied template consisting of a base followed by six X's, _mktemp()
	generates temporary file names by concatenating a five digit value to the
	specified base. To ensure that unique names are generated between processes, the
	process id is encoded into the file name. In a multi- threaded application, the
	scheme of using only the process id makes it possible for threads to receive the
	same temporary file name. This could occur whenever one of the file names
	returned by _mktemp had not actually been used to open a file yet.
	
	RESOLUTION
	==========
	
	In Visual C++ 2.0, _mktemp() uses the thread id in generating the name, so this
	problem will not occur.
	
	In Visual C++ 1.0, the work-around is to pass in a different template name to
	_mktemp() in each thread. A convenient way to create a unique template name for
	a thread would be to use the thread id to generate the template name. In the
	code fragment below, the thread id is obtained and used as an index into a set
	of characters which are used as the first two characters in the template name.
	
	  #define DIG_LEN 37
	
	  static char digits [ DIG_LEN + 1 ] =
	                             "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_";
	
	  // Within the thread, generate a template name
	  // using the thread id.
	
	       char templte[9];
	       unsigned tid = GetCurrentThreadId();
	
	       strcpy ( templte , "@@XXXXXX" ); // initialize template name
	
	       templte[0] = digits [ tid % DIG_LEN ];     // assign first character
	                                             // in template name using
	                                             // the tid to index into
	                                             // the digits array
	       templte[1] =
	            digits [ ( tid / DIG_LEN ) % DIG_LEN ];  // second character
	
	      path1 = _mktemp(templte);
	
	MORE INFORMATION
	================
	
	Sample Code
	-----------
	
	  /* Compile options needed:    /MT /D_CONSOLE
	  */ 
	  #include <windows.h>
	  #include <process.h>    /* _beginthread, _endthread */ 
	  #include <io.h>         /* _mktemp */ 
	  #include <stdio.h>
	
	  void Check1(void *);
	  void Check2(void *);
	  char *path1, *path2, *path3;
	  char templateName[4][9] = {"fnXXXXXX","fnXXXXXX","fnXXXXXX",
	                   "tnXXXXXX"};
	  void main()
	  {
	    _beginthread(Check1, 0, NULL );
	    _beginthread(Check2,0,NULL);
	    Sleep(200L);
	    printf("Program finished\n");
	  }
	
	  /* Check */ 
	  void Check1( void * dummy  )
	  {
	    FILE *fp;
	
	    path1 = _mktemp(templateName[0]);
	
	    Sleep(100L);  // Give thread 2 a chance to call mktemp before the
	                    // the file is actually opened
	    if (path1 != NULL)
	       if ((fp = fopen(path1,"w")) == NULL) {
	       printf("Thread 1 - Failed to open file %s\n",path2);
	         _endthread();
	       }
	    fclose(fp);
	    remove(path1);
	    printf("Thread 1 - File %s successfully opened\n",path1);
	    _endthread();
	  }
	
	  /* Check 2 */ 
	  void Check2( void * dummy  )
	  {
	    FILE *fp;
	
	    // Path2 is set to the same as path1 which is INCORRECT
	    path2 = _mktemp(templateName[2]);
	
	    // Workaround is to specify an unused template name
	
	    if (path2 != NULL)
	       if ((fp = fopen(path2,"w")) == NULL) {
	       printf("Thread 2 - Failed to open file %s\n",path2);
	         _endthread();
	       }
	    fclose(fp);
	    remove(path2);
	    printf("Thread 2 - File %s successfully opened\n",path2);
	    _endthread();
	  }
	
	Additional query words: 1.00
	
	======================================================================
	Keywords          : kbCRT kbVC kbprb 
	Technology        : kbVCsearch kbAudDeveloper kbCRT
	Version           : winnt:
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
