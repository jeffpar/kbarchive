---
layout: page
title: "Q106253: Program Priority and Multithreaded Applications"
permalink: /kb/106/Q106253/
---

## Q106253: Program Priority and Multithreaded Applications

	Article: Q106253
	Product(s): Microsoft Windows NT
	Version(s): 3.1 4.0
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When a program is started under Windows NT, it will have a priority class that
	is either normal or equal to the priority class specified in the command line
	when using the START command (Idle, Normal, High, or Realtime). The priority
	class determines at which priority (from 1 to 31) the program will run. In a
	multithreaded application, threads spawned by the program can be lower or higher
	than the current priority class of the program; however, all thread priorities
	will be relative to the priority class of the parent program. While a program
	can change its priority class after starting, all of its threads will still have
	the same relative priority.
	
	MORE INFORMATION
	================
	
	When a process spawns a thread, one of the parameters in the function call sets
	the thread priority relative to the priority of the parent process. This
	parameter can have one of the following values: Idle, Lowest, Below Normal,
	Normal, Above Normal, Highest and Time Critical. The starting priority set for
	the thread will be based upon that parameter and the current priority of the
	process starting the thread. The priorities are as follows:
	
	RELATIVE                  PROCESS PRIORITY CLASS
	THREAD                Normal, in      Normal, in
	
	PRIORITY       Idle   Background      Foreground    High    Realtime
	
	--------------------------------------------------------------------
	
	Time Critical   15        15              15         15        31
	Highest          6         9              11         15        26
	Above Normal     5         8              10         14        25
	Normal           4         7               9         13        24
	Below Normal     3         6               8         12        23
	Lowest           2         5               7         11        22
	Idle             1         1               1          1        16
	
	The table above lists the base priority of a thread, which is set by calling the
	function SetThreadPriority; however, a thread's priority can change as the
	thread executes. The system can boost a thread's priority higher as time goes on
	and then reduce the priority back down to the base, though Windows NT will never
	reduce a thread lower than its base priority. The system will boost a thread's
	priority when a user interacts directly with a thread, including mouse and
	keyboard input or simply bringing the thread to the foreground.
	
	For more information on process priorities, query on the following key words in
	the WINNT Knowledge Base:
	
	  priority and process
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTW310 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.1 4.0
	
	=============================================================================
	
