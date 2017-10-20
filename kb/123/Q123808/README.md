---
layout: page
title: "Q123808: PRB: Debugger Hangs If Remote Connection Is Lost"
permalink: /kb/123/Q123808/
---

## Q123808: PRB: Debugger Hangs If Remote Connection Is Lost

{% raw %}

	Article: Q123808
	Product(s): Microsoft C Compiler
	Version(s): 2.0,2.1,4.0
	Operating System(s): 
	Keyword(s): kbDebug kbide
	Last Modified: 11-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Editions, versions 2.0, 2.1, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using the remote debugging feature of the Visual C++ Integrated Debugger to
	debug an application on Win32s from Windows NT, the debugger appears to hang
	(stops responding) if a remote connection is suddenly terminated.
	
	CAUSE
	=====
	
	This can occur if the computer running Win32s is turned off or if the serial
	cable connecting the two computers is disconnected while debugging. The debugger
	is waiting for information from the remote monitor on the computer running
	Win32s and does not time-out.
	
	RESOLUTION
	==========
	
	Because the debugger will not respond when it is waiting for the information,
	the development environment needs to be terminated.
	
	MORE INFORMATION
	================
	
	The Visual C++ development environment may be terminated through the Task List,
	or by using PVIEW.EXE. PVIEW.EXE is a graphical Process Viewer, providing an
	interface through which processes (and threads) may be examined and modified.
	PVIEW.EXE ships with Visual C++ versions 2.0 and 4.0.
	
	To use PVIEW to terminate the Visual C++ session:
	
	1. For Visual C++ version 2.0: Start PVIEW by clicking the PVIEW icon in the
	  "Microsoft Visual C++ 2.0" group, or by running PVIEW.EXE from the
	  <CD_drive>:\MSVC20\BIN directory.
	
	  For Visual C++ version 4.0: Start PVIEW by clicking the PVIEW icon in the
	  "Microsoft Visual C++ 4.0" group, or by running PVIEW.EXE from the
	  <CD_drive>:\MSDEV\BIN\WINNT directory.
	
	  In both cases, PVIEW may not have been installed, so you may need to run it
	  from the distribution CD.
	
	2. For Visual C++ version 2.0, select MSVC from the list of processes. For
	  Visual C++ version 4.0, select MSDEV from the list of processes.
	
	3. Click the Kill Process button.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDebug kbide 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbVC200 kbVC210 kbVC32bitSearch
	Version           : :2.0,2.1,4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
