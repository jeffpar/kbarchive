---
layout: page
title: "Q118338: BUG: Sample MTTEST.FOR Compile Errors"
permalink: /kb/118/Q118338/
---

## Q118338: BUG: Sample MTTEST.FOR Compile Errors

{% raw %}

	Article: Q118338
	Product(s): Microsoft Fortran Compiler
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kberrmsg kbFortranPS kbLangFortran
	Last Modified: 02-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Fortran Powerstation 32 for Windows NT, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you compile the multithread example MTTEST.FOR, the compiler generates the
	following error messages:
	
	  MTTEST.FOR(12) : error F2328: CREATETHREAD : already typed
	  MTTEST.FOR(12) : error F2328: WAITFORMULTIPLEOBJECTS : already typed
	  MTTEST.FOR(19) : error F2611: CREATETHREAD : formal argument THREAD_FUNC :
	  actual not subprogram
	
	CAUSE
	=====
	
	The sample program contains two errors.
	
	- CreateThread() and WaitForMultipleObjects() are declared. This is not
	  necessary, because the correct declarations are already in the include file,
	  MT.FD.
	
	- CreateThread() is passed the location of the routine rather than the routine
	  itself.
	
	RESOLUTION
	==========
	
	The CreateThread() and WaitForMultipleObjects() declarations are not needed and
	should be removed. Delete the line 12 from MTTEST.FOR:
	
	  integer*4   CreateThread, WaitForMultipleObjects
	
	CreateThread() expects a subprogram, not a location. Remove the syntax "LOC()"
	from line 19 of MTTEST.FOR:
	
	  handle(i) = CreateThread (0, 0, LOC (Task), temp(i), 0, myid)
	
	After the correction is made, the line will be as follows:
	
	  handle(i) = CreateThread (0, 0, Task, temp(i), 0, myid)
	
	In addition to the actual errors, the program takes an unnecessarily long time to
	run. The number of milliseconds it waits in the "task" routine should be reduced
	from 10000 to 1000 or less. In MTTEST.FOR, change
	
	  call sleepqq(10000*seq)
	
	-to-
	
	  call sleepqq(1000*seq)
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the FORTRAN PowerStation 32 for
	Windows NT, version 1.0. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: 1.00
	
	======================================================================
	Keywords          : kberrmsg kbFortranPS kbLangFortran 
	Technology        : kbAudDeveloper kbFortranSearch kbZNotKeyword2 kbFORTRANPower32100NT
	Version           : :1.0
	
	=============================================================================
	

{% endraw %}
