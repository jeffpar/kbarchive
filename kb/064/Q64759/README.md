---
layout: page
title: "Q64759: INFO: wsprintf() %s Parameters Not Cast to LPSTR"
permalink: kb/064/Q64759/
---

## Q64759: INFO: wsprintf() %s Parameters Not Cast to LPSTR

	Article: Q64759
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kb16bitonly kbSDKWin16
	Last Modified: 18-JUN-1999
	
	3.00 3.10
	WINDOWS
	kbprg
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Unrecoverable application errors (UAEs) can result from improperly using the
	wsprintf() function. Any parameter passed to wsprintf() that corresponds to an
	%s format string MUST be cast to a LPSTR.
	
	The documentation for wsprintf() in the "Microsoft Windows Software Development
	Kit Reference Volume 1" states:
	
	  Sequence        Meaning
	  ----------------------------------------------------------------
	  s               Insert a string argument referenced by a long
	                  pointer. The argument corresponding to this
	                  sequence MUST be passed as a long pointer (LPSTR).
	
	Wsprintf() is a function with a variable number of parameters. Therefore, it must
	be prototyped using the following C calling convention for a variable number of
	arguments:
	
	     int FAR cdecl wsprintf(LPSTR, LPSTR,...);
	
	Because the only type information in the prototype describes the output buffer
	and the format string, the C compiler cannot perform implicit casts on the other
	parameters at compile time. Normally, when a near pointer (char *) is used as an
	argument to a function requiring a LPSTR, the compiler will implicitly cast the
	(char *) to LPSTR, or (char far *).
	
	Because the compiler cannot cast any of the additional parameters, in small and
	medium model programs, any string pointer that is not explicitly cast FAR will
	be passed to wsprintf() as a near pointer. wsprintf() attempts to retrieve a far
	pointer from the stack, which results in an invalid pointer and an unrecoverable
	application error.
	
	The following two code fragments show incorrect and correct usage of %s fields
	within wsprintf():
	
	    //INCORRECT use of a near pointer. Assume small or medium model.
	
	     {
	     char        sz[30];      //sz is a NEAR pointer.
	     char        szOut[50];   //szOut is also NEAR
	     LPSTR       szFar = sz;  //szFar is FAR
	         .
	         .
	         .
	     /*
	      * Because it is the output buffer, szOut is implicitly cast to a
	      * LPSTR. However, sz is pushed on the stack as a NEAR pointer,
	      * which wsprintf will pop as a FAR pointer.
	      * This call will cause a UAE.
	      */ 
	      wsprintf(szOut, "sz=%s", sz);
	
	      /*
	       * This call will succeed since szFar is already a LPSTR.
	       */ 
	      wsprintf(szOut, "sz=%s", szFar);
	          .
	          .
	          .
	      }
	
	     //CORRECT--
	
	      {
	      char        sz[30];      //sz is a NEAR pointer.
	      char        szOut[50];   //szOut is also NEAR
	      LPSTR       szFar = sz;  //szFar is FAR
	          .
	          .
	          .
	      /*
	       * Because it is the output buffer, szOut is implicitly cast to a
	       * LPSTR. Due to the explicit cast, sz is pushed on the stack
	       * as a FAR pointer.  This call will succeed.
	       */ 
	      wsprintf(szOut, "sz=%s", (LPSTR)sz);
	
	      /*
	       * This call will succeed since szFar is already an LPSTR.
	       * The cast is redundant, but it's free insurance.
	       */ 
	      wsprintf(szOut, "sz=%s", (LPSTR)szFar);
	          .
	          .
	          .
	      }
	
	Additional query words: 3.00 3.10
	
	======================================================================
	Keywords          : kb16bitonly kbSDKWin16 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	Issue type        : kbinfo
	
	=============================================================================
	
