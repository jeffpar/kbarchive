---
layout: page
title: "Q76676: Differences Between Task Handles and Instance Handles"
permalink: /kb/076/Q76676/
---

## Q76676: Differences Between Task Handles and Instance Handles

{% raw %}

	Article: Q76676
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Windows creates two handles associated with each task running in the system. One
	handle is the instance handle, hInstance, which is passed to the WinMain
	function when the program starts execution. The other handle is the task handle,
	hTask, which is returned by GetCurrentTask().
	
	MORE INFORMATION
	================
	
	The numerical values of hInstance and hTask are different. In some routines,
	hTask can be used in place of hInstance without any problems. In other routines,
	using hTask in place of hInstance causes incorrect behavior and may result in
	unrecoverable application errors (UAEs). Using hTask in place of hInstance is
	considered bad form and will probably cause problems when the application is run
	under future versions of Windows.
	
	To retrieve the instance handle for the application currently running, use the
	following code fragment:
	
	     hInstance = GetWindowWord(GetActiveWindow(), GWW_HINSTANCE);
	
	To retrieve the task handle for the application currently running, use the
	following code fragment:
	
	     hTask = GetCurrentTask();
	
	The instance handle, hInstance, is used to identify the data associated with a
	particular instance of an application. The task handle, hTask, is the handle to
	a structure, called the task database (TDB), which contains information about
	the task (for example, its queue, module handle, and so forth). The instance
	handle and the PDB (program database), also known as the PSP (program segment
	prefix), are also stored in the task database. The GetCurrentPDB() function
	returns a handle to the current PDB.
	
	Each instance of an application has both an instance handle and a task handle.
	Dynamic-link libraries (DLLs) are not tasks; therefore, they have only an
	instance handle and do not have a task handle.
	
	Additional query words: 3.00 3.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	

{% endraw %}
