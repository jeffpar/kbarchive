---
layout: page
title: "Q124121: Memory Loss During Application Process Creation"
permalink: /kb/124/Q124121/
---

## Q124121: Memory Loss During Application Process Creation

{% raw %}

	Article: Q124121
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An application which periodically starts Command Prompt commands or utilities
	(32-bit applications) may exhibit symptoms of a memory resource allocation
	problem. To observe this problem, you can use Performance Monitor to view
	nonpaged pool memory. The application in question regularly allocates more and
	more nonpaged pool memory until system memory resources are exhausted. This can
	result in poor system performance and disk "thrashing" (a condition where the
	hard disk drive is constantly being accessed, even in periods of little system
	activity).
	
	
	The following error message may appear when system memory is finally exhausted:
	
	  {DLL Initialization Failed} Initialization of the dynamic link library
	  KERNEL32.DLL failed. The process is terminating abnormally. [(NTSTATUS)
	  0xC0000142L]
	
	NOTE: The symptoms are not evident using the same application under Windows NT
	version 3.1.
	
	CAUSE
	=====
	
	When an application spawns a process repeatedly, a new thread instance will be
	created for each process but the previous instances may not be cleaned up. This
	results in a significant virtual memory loss each time the process is spawned.
	Executing the following Win32 calls will result in the same memory loss symptoms
	listed above.
	
	  CreateProcess(anyprocess,...,............, &pi);
	  CloseHandle(pi.hProcess);
	  CloseHandle(pi.hThread);
	
	NOTE: If there is a WaitForInputIdle() call between CreateProcess() and
	CloseHandle(),the problem does not occur.
	
	RESOLUTION
	==========
	
	WINSRV.DLL was modified to correct this behavior. Even when processes are
	repeatedly created by an application, WINSRV.DLL ensures that the process and
	thread handles are closed upon command.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. This
	problem was corrected in the latest U.S. Service Pack for Windows NT version
	3.5. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt 3.50
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : winnt:3.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
