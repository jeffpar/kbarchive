---
layout: page
title: "Q168847: PRB: &quot;DM0025: Error attaching to process&quot; in Windows 95"
permalink: /kb/168/Q168847/
---

## Q168847: PRB: &quot;DM0025: Error attaching to process&quot; in Windows 95

	Article: Q168847
	Product(s): Microsoft C Compiler
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kberrmsg kbDebug kbide kbVC500 kbVC600
	Last Modified: 29-APR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Windows 95, when you use the debugger to attach to a console application that
	is waiting for user input, you may get the following error message:
	
	  DM0025: Error attaching to process.
	
	CAUSE
	=====
	
	The debugger times out while waiting for the console application. This problem
	only occurs on Windows 95.
	
	RESOLUTION
	==========
	
	The following steps use the Test sample provided in the MORE INFORMATION section
	of this article.
	
	1. Start the Test application from Developer Studio or from Windows Explorer.
	  The Test application will display "Start process" and wait for data entry.
	
	2. In Developer Studio, click Start Debug from the Build menu.
	
	3. Click "Attach to Process...". In the Attach to Process dialog box, click the
	  Test process and click OK. Immediately click the application's icon on the
	  Task Bar to activate the Application's window. You may now see the debugger
	  displaying assembly code in Developer Studio with the application loaded in
	  the workspace as if it is ready to debug.
	
	4. Open the test.cpp file in Developer Studio. Set a breakpoint in the line of
	  code as indicated below. At this point if you click the Debug menu, you can
	  only choose "Stop Debugging" or "Break". If you select "Break," you get the
	  following message with an "OK" button:
	
	  All threads are in system calls. It is not possible to break into the
	  debugger at this time.
	
	5. Enter a character followed by the Enter key. The breakpoint is hit and you
	  can debug the application now.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a console project called Test and add the following source file:
	
	  // File name test.cpp
	  #include <iostream.h>
	
	  void  main()
	  {
	      char ch;
	
	      cout << "Start process" << endl;
	      cin >> ch;
	
	      cout << "Start debugging" << endl; //SET A BREAKPOINT HERE
	
	      // Body of code would be here.
	  }
	
	2. Build the project for debug mode.
	
	3. Start the application from developer Studio or from Windows Explorer.
	
	4. In Developer Studio, click Start Debug from the Build menu. Click "Attach to
	  Process...". In the Attach to Process dialog box, click the Test process and
	  click OK. The hour glass icon appears for a while followed by the error
	  message described in the SYMPTOMS section. Note that the error message does
	  not appear immediately.
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbDebug kbide kbVC500 kbVC600 
	Technology        : kbVCsearch kbAudDeveloper kbVC500 kbVC600 kbVC32bitSearch kbVC500Search
	Version           : :5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
