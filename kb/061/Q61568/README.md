---
layout: page
title: "Q61568: Processing Data Returned from DosQNmPipeSemState()"
permalink: /kb/061/Q61568/
---

## Q61568: Processing Data Returned from DosQNmPipeSemState()

	Article: Q61568
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	DosQNmPipeSemState() returns information in the form of PIPESEMSTATE structures.
	In earlier releases, these structures were named "npss". The following are
	frequently asked questions involving these structures:
	
	1. Q. How much space do you have to pass to DosQNmPipeSemState() to hold the
	  PIPESEMSTATE structures returned?
	
	  a. You can set the variable "pipes" to the number of pipes associated with
	     the semaphore you pass to DosQNmPipeSemState(), and then use the following
	     statement to calculate the buffer size:
	
	  USHORT PipeInfoSize=((3*pipes)+1)*sizeof(PIPESEMSTATE);
	
	2. Q. In what order does DosQNmPipeSemState() return the PIPESEMSTATE
	  structures?
	
	  a. An application cannot safely make any assumptions about the order
	     returned, because the order is not specified. Since the order is not
	     specified, the order may change; therefore, do not rely on any order that
	     may appear in the current releases of OS/2.
	
	MORE INFORMATION
	================
	
	More detailed information regarding the above questions is as follows:
	
	1. [How much space do you have to pass to DosQNmPipeSemState() to hold the
	  PIPESEMSTATE structures returned?]
	
	  OS/2 does not allocate any space to hold PIPESEMSTATE structures. Each time
	  you call DosQNmPipeSemState(), OS/2 looks at each named pipe currently
	  associated with the semaphore you passed to DosQNmPipeSemState(), and builds
	  the PIPESEMSTATE structures in the buffer you passed to
	  DosQNmPipeSemState().
	
	  In other words, each time you call DosQNmPipeSemState(), OS/2 builds the
	  PIPESEMSTATE structures "on the fly" into the buffer you pass.
	
	  If the buffer you pass to DosQNmPipeSemState() is not big enough to hold all
	  the PIPESEMSTATE structures that OS/2 might have returned, OS/2 just stops
	  building PIPESEMSTATE structures into your buffer, and returns the ones it
	  was able to build before the buffer filled up.
	
	  Although you can check the DosQNmPipeSemState() return code to see whether the
	  buffer you passed was too small, the only practical approach to use is to
	  pass DosQNmPipeSemState() a buffer you know in advance will be large enough
	  to hold all of the structures.
	
	  The reason for this is that if the buffer is too small, no PIPESEMSTATE
	  structures may have been returned at all for some of the named pipes
	  associated with the semaphore.
	
	  If the return code from DosQNmPipeSemState() states that the buffer was too
	  small, you cannot call DosQNmPipeSemState() again with the same size buffer
	  to get the rest of the PIPESEMSTATE structures that would not fit in the
	  buffer on the previous call. You can, of course, make as many calls as you
	  want; however, subsequent calls do not get "the rest of the PIPESEMSTATE
	  structures"; subsequent calls build complete new lists of PIPESEMSTATE
	  structures.
	
	  Trying to get "the rest of the PIPESEMSTATE structures" will cause
	  DosQNmPipeSemState() to again build PIPESEMSTATE structures on the fly into
	  the buffer, and will probably again return no PIPESEMSTATE structures at all
	  for the same named pipes associated with the semaphore for which it returned
	  no PIPESEMSTATE structures the first time you called DosQNmPipeSemState().
	
	  This is because DosQNmPipeSemState() builds PIPESEMSTATE structures into the
	  buffer on the fly, and DosQNmPipeSemState() keeps no records of what named
	  pipes were previously successfully queried.
	
	  Therefore, it is fine to call again if the return code states that the buffer
	  was too small; however, remember that the second call will behave as if the
	  first call had not been made.
	
	  For some other OS/2 APIs, a practical approach to use is to make the call with
	  a buffer you know is too small, and have the API return to you how much data
	  was available (total). You then can allocate a buffer of that size, and make
	  the call again. This approach allows you to allocate a buffer not one byte
	  larger than is needed for those other APIs. This approach, however, does not
	  work for DosQNmPipeSemState(), because DosQNmPipeSemState() gives no
	  indication of how much data is available.
	
	  Fortunately, the approach mentioned above as "the only practical approach" for
	  DosQNmPipeSemState() is simple, but not costly, for most applications.
	
	  Allocating a buffer you know in advance is large enough costs about 18 bytes
	  per pipe associated with the semaphore, because the PIPESEMSTATE structures
	  are only 6 bytes long, and you need to allocate three of them per pipe.
	
	  As mentioned above, set the variable "pipes" to the number of pipes associated
	  with the semaphore you pass to DosQNmPipeSemState(), then use the following
	  statement to calculate the buffer size:
	
	  USHORT PipeInfoSize=((3*pipes)+1)*sizeof(PIPESEMSTATE);
	
	  This allocates space for three PIPESEMSTATE structures per pipe associated
	  with the semaphore, plus space for one PIPESEMSTATE structure for the
	  NPSS_EOI (end of information) structure that is always returned at the end of
	  the buffer.
	
	  The three PIPESEMSTATES structures per pipe must be allocated because at most,
	  DosQNmPipeSemState() will return for each pipe associated with the semaphore
	  one NPSS_RDATA, one NPSS_WSPACE, and one NPSS_CLOSE PIPESEMSTATE structure.
	
	  NPSS_RDATA, NPSS_WSPACE, and NPSS_CLOSE are defined in BSEDOS.H. The following
	  is an extract from BSEDOS.H for your convenience:
	
	        #define NPSS_EOI         0 /* End Of Information    */ 
	        #define NPSS_RDATA       1 /* read data available   */ 
	        #define NPSS_WSPACE      2 /* write space available */ 
	        #define NPSS_CLOSE       3 /* pipe in CLOSING state */ 
	
	  For some applications, it might be possible to get by with a little less than
	  ((3*pipes)+1)*sizeof(PIPESEMSTATE) because you know at a certain point that
	  there cannot be any data to read in a certain pipe, or there cannot be any
	  write space available, or the pipe cannot be closing.
	
	  However, please remember that you save only 6 bytes per PIPESEMSTATE structure
	  you do not allocate. In most cases, saving only 6 bytes is not worth the risk
	  that the buffer you pass will be too small.
	
	  It is not recommended that you attempt to save 5 bytes by only allocating 1
	  byte in the buffer for the NPSS_EOI structure instead of the full 6. This may
	  work in some releases of OS/2; however, the specified behavior is that the
	  NPSS_EOI structure is a PIPESEMSTATE structure. Therefore, you should
	  allocate the same space for it as you would for the other structures.
	
	  To summarize the information for question 1: the recommended approach is to
	  use the following statement to calculate the buffer size:
	
	  USHORT PipeInfoSize=((3*pipes)+1)*sizeof(PIPESEMSTATE);
	
	  It is not recommended that you try to get by with less, because the risks
	  outweigh the number of bytes you might save.
	
	2. [In what order does DosQNmPipeSemState() return the PIPESEMSTATE
	  structures?]
	
	  There is no specific order in which DosQNmPipeSemState() must return the
	  PIPESEMSTATE structures in the buffer. Therefore, the application should not
	  make any assumptions about the order of these structures.
	
	  The current releases of OS/2 return the PIPESEMSTATE structures in the
	  following order:
	
	  NPSS_CLOSE (optional)
	  NPSS_WSPACE (optional)
	  NPSS_RDATA (optional)
	
	  The NPSS_CLOSE structure comes first for a given pipe, if the pipe is closing;
	  followed by the NPSS_WSPACE structure if there is write space available for
	  that same given pipe; followed by the NPSS_RDATA structure, if that same
	  given pipe has any read data available. Then, more PIPESEMSTATE structures
	  follow in the same order for any other pipes associated with the semaphore.
	
	  It is not safe to assume that this type of ordering scheme will continue to be
	  used in all future releases of OS/2. An application should process the
	  PIPESEMSTATE structures returned in the buffer in such a way that any order
	  in which the PIPESEMSTATE structures are needed is guaranteed by the way the
	  buffer is processed.
	
	  For example, suppose you want to see any NPSS_CLOSE structures first. You then
	  can record the fact that a pipe is closing, so you will know, when later
	  processing the NPSS_RDATA structure, that the pipe is closing; therefore,
	  trying to write to it will not work. Similarly, you might want to see any
	  NPSS_WSPACE structures before the NPSS_RDATA structures, so you need to know
	  ahead of time how much can be written into the pipe in response to the
	  NPSS_RDATA structures.
	
	  Please note that the sample ordering in the preceding paragraph seems to be
	  one of the most practical orderings, and also happens to be the ordering that
	  current releases of OS/2 seem to provide. Nevertheless, rather than relying
	  on the fact that current releases of OS/2 seem to provide exactly that order,
	  if that is the order you need, the code should be written so that order will
	  happen even if OS/2 changes in the future.
	
	  To attain this ordering, loop twice through the buffer returned. In the first
	  loop, look for and record any NPSS_WSPACE and/or NPSS_CLOSE structures. Then,
	  in the second loop, look for and process any NPSS_RDATA structures.
	
	  Guaranteeing this order in your code costs an extra loop, and a place to
	  record for each pipe whether it is closing and how much write space is
	  available. For applications where DosQNmPipeSemState() returns extremely long
	  lists of PIPESEMSTATE structures, a different approach can be used. For
	  example, you might loop through the buffer returned just once, recording the
	  NPSS_RDATA structures along with the NPSS_WSPACE and/or NPSS_CLOSE
	  structures. Then in the second loop, loop through the array of pipes (instead
	  of a second loop through the buffer).
	
	  To summarize the answer to Question 2: You should not rely on the order in
	  which current releases of OS/2 happen to return the PIPESEMSTATE structures.
	  Your code should be written (as in the example below) to explicitly process
	  the PIPESEMSTATE structures in the order your applications require.
	
	      // Your application might not need this first resetting loop. In
	     //  fact, this first resetting loop may be wrong for some
	     //  applications.
	     for (i = 0; i < pipes; i++) {
	       hPipes[i].usWriteSpace = 0;
	       hPipes[i].bClosing     = FALSE;
	       }
	     for (pInfo = PipeInfo; NPSS_EOI != pInfo->fStatus; pInfo++) {
	       if      (NPSS_WSPACE == pInfo->fStatus)
	         hPipes[pInfo->usKey].usWriteSpace = pInfo->usAvail;
	       else if (NPSS_CLOSE  == pInfo->fStatus)
	         hPipes[pInfo->usKey].bClosing     = TRUE;
	       }
	     for (pInfo = PipeInfo; NPSS_EOI != pInfo->fStatus; pInfo++) {
	       if (NPSS_RDATA==pInfo->fStatus) {
	        hPipes[pInfo->usKey].pData=malloc(pInfo->usAvail);
	
	         rc=DosRead(hPipes[pInfo->usKey].hP,hPipes[pInfo->usKey].pData
	                   ,pInfo->usAvail,&uReadBytes);
	         if (0!=rc)
	           printf("\n\rRead error: rc=%d",rc);
	         else {
	           printf("\n\rJust read: %s",hPipes[pInfo->usKey].pData);
	           if      (hPipes[pInfo->usKey].bClosing) {
	             printf("\n\rCan't write, pipe's closed");
	             }
	           else if (hPipes[pInfo->usKey].usWriteSpace <= 0) {
	             printf("\n\rCan't write, no space available");
	             }
	           else {
	             // For this example, ignore the possibility that some
	             //  write space might not be enough.
	             // For this example, just write back the message received.
	             rc=DosWrite(hPipes[pInfo->usKey].hP
	                        ,hPipes[pInfo->usKey].pData
	                        ,(strlen(hPipes[pInfo->usKey].pData)+1)
	                        ,&uWriteBytes);
	             if (0!=rc)
	                printf("\n\rWrite error: rc=%d",rc);
	             }
	           }
	         free(hPipes[pInfo->usKey].pData);
	         }
	       }
	
	Additional query words: 2.00 2.10 2.10a 2.20
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	
