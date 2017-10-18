---
layout: page
title: "Q81335: Code Demonstrates Multiple Instance DLL"
permalink: kb/081/Q81335/
---

## Q81335: Code Demonstrates Multiple Instance DLL

	Article: Q81335
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): kbfile kbsample kb16bitonly kbOSWin310 kbOSWin300
	Last Modified: 10-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	A dynamic-link library (DLL) in the Windows environment has a single data
	segment that is used by each task (application instance) that links to the DLL.
	However, there are many situations in which a DLL must maintain data for each
	individual task. This article discusses the method used by the MULTINST sample
	application to create a multiple instance DLL. The DLL creates a separate data
	segment for each task that links to it.
	
	MORE INFORMATION
	================
	
	The following files are available for download from the Microsoft Download
	Center:
	
	Multinst.exe
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	
	Because each task in the system has a separate stack segment, the value of the
	stack segment can be used as a unique identifier. MULTINST stores data for each
	task in a block of memory obtained using GlobalAlloc(). Each time a task calls
	the DLL, use the value of its stack segment as an index into the table of
	selectors for the global memory blocks. Load the corresponding selector into the
	DS register. After this is done, all static data and the local heap correspond
	to the calling task.
	
	When a new task calls into the DLL for the first time, the DLL allocates a new
	block of memory to hold data for the task. It copies initial values for static
	variables into the data block, and initializes a local heap.
	
	When a task that uses the DLL shuts down, it calls the UnregisterTask() function
	in the DLL, which frees the data block associated with the task and removes the
	task from the DLL's task list. Failing to call UnregisterTask() might cause
	serious problems because Windows could reassign a stack segment value to a new
	task. If this task called the DLL, it would receive the data values associated
	with the previous task, which might be completely inappropriate.
	
	Place the following six lines of code at the beginning of each function exported
	by the DLL to load the correct data segment:
	
	     if ((wDS = LoadInstanceData()) == 0) // Get DS for this instance
	        return;                           // If DS==0 then out of memory
	
	     _asm {
	          mov     ax,wDS
	          mov     DS,ax
	          }
	
	The following text describes each function in the MULTINST DLL:
	
	AddTask(): Allocate data for the task, initialize the data, and add the
	          task to the task list.
	
	FillHeap(): Allocate memory in the local heap until LocalAlloc fails.
	           Used to demonstrate that the local heap will grow.
	
	InitInstanceData(): Save initial values of static variables and
	                   initialize the task list.
	
	LibMain(): Save the initial values of static variables and the initial
	          size of the data segment and the heap.
	
	LoadInstanceData(): Retrieve the segment address (selector) to the data
	                   for the task that called the DLL.
	
	LookUpTask(): Given the value of the stack segment for the task, look up
	             the segment address (selector) for the data for the task.
	             If the task is not in the list, this function returns zero.
	
	StoreData(): Save a string in the local heap.
	
	WEP(): Required by a DLL.
	
	Additional query words: softlib MULTINST.EXE
	
	======================================================================
	Keywords          : kbfile kbsample kb16bitonly kbOSWin310 kbOSWin300 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	
