---
layout: page
title: "Q117681: Profiling Windows NT Services"
permalink: /kb/117/Q117681/
---

## Q117681: Profiling Windows NT Services

{% raw %}

	Article: Q117681
	Product(s): Microsoft Programming Utilities
	Version(s): 1.0,1.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Source Profiler, versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	The information in this article is included in the documentation starting
	with Visual C++ 5.0. Look there for future revisions.
	
	SUMMARY
	=======
	
	This article provides information about profiling Windows NT service processes.
	This information is not available in Microsoft Source Profiler documentation.
	
	MORE INFORMATION
	================
	
	Use the service sample from the directory MSVCNT\SAMPLES\SERVICE, and follow
	these steps to get timing information for its service functions:
	
	1. Set necessary environment variables using the System control panel applet.
	  You will find system environment variables like ComSpec, windir, and Path.
	
	2. Add two new environment variables:
	
	  __ProfilePBI=<full path of your PBI file>
	  __ProfilePBO=<full path of your PBO file>
	
	  Note the exact spelling and two leading underscores. If these are not
	  correctly set, you will get messages from PROFILE.DLL warning you that these
	  settings cannot be found.
	
	  In this example, if your compiler is on your D drive, these variables would
	  be:
	
	  d:\msvcnt\samples\service\simple.pbi d:\msvcnt\samples\service\simple.pbi
	
	3. Copy the profiler, DLL PROFILE.DLL, from the MSVCNT\BIN subdirectory to
	  either the directory where the service .EXE resides or to one of the
	  directories listed in the PATH environment variable.
	
	4. Build the sample, SIMPLE.EXE. Instruct the linker to create a .MAP file.
	
	5. Run PREP to create SIMPLE._XE, which has been modified for profiling:
	
	  prep /om /ft /sf _worker_thread simple.exe
	
	  This command also sets up the code to follow the call stack from the
	  worker_thread() routine. By default, the profiler profiles calls from the
	  main thread, so servicing requests from a secondary thread without specifying
	  the /sf option will produce incomplete results. In the sample, this second
	  thread is created by calling CreateThread() to service the requests. If the
	  main thread was servicing the requests, then you wouldn't need to use the /sf
	  option.
	
	6. Copy SIMPLE._XE to SIMPLE.EXE. This overwrites the original executable file
	  with the modified version that has the profile hooks added to the code.
	
	7. Start the service by using the Control Panel Services applet and run the
	  client application. Stop the service using the Control Panel. You can get the
	  timing information by executing:
	
	  prep /m simple
	  plist simple
	
	Additional query words: 1.00 1.10
	
	======================================================================
	Keywords          :  
	Technology        : kbVCsearch kbAudDeveloper kbSProfilerSearch kbSProfiler100
	Version           : :1.0,1.1
	
	=============================================================================
	

{% endraw %}
