---
layout: page
title: "Q74477: &quot;Profiler VM Terminated Abnormally&quot; Message Causes"
permalink: kb/074/Q74477/
---

## Q74477: &quot;Profiler VM Terminated Abnormally&quot; Message Causes

	Article: Q74477
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
	
	The VPROD.386 device driver displays the message "Profiler VM terminated
	abnormally" whenever the virtual machine (VM) being profiled is terminated
	(crashed) while profiling is still under way. Some circumstances under which
	virtual machines are terminated are: when a bad instruction is executed, when an
	attempt is made to program virtualized hardware in a manner incompatible with
	the virtualizing virtual device (VxD), or when the user selects "Terminate" in
	the Settings dialog box. In any of these situations, the VPROD device driver
	cannot flush its queued profile data and clean up after itself.
	
	The message is displayed when VPROD can no longer simulate MS-DOS calls into the
	terminated VM. The message warns that it is highly likely that profiling data
	has been lost.
	
	For more information on the Profiler, see chapter 13 of the "Microsoft Software
	Development Kit Tools" manual.
	
	Additional query words: 3.00 3.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	
