---
layout: page
title: "Q74696: Using Memory Below 1 Megabyte"
permalink: /kb/074/Q74696/
---

## Q74696: Using Memory Below 1 Megabyte

	Article: Q74696
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	
	Memory allocated with a base address below 1 megabyte (low memory) is useful for
	communicating between applications developed for the Microsoft Windows graphical
	environment and MS-DOS terminate-and-stay- resident (TSR) programs and device
	drivers.
	
	The only way a Windows-based application can directly allocate memory guaranteed
	to be below 1 MB is to use the GlobalDosAlloc function. However, this memory is
	a limited resource and should be used with care.
	
	MORE INFORMATION
	================
	
	The following clients use memory below 1 MB:
	
	- MS-DOS
	
	- MS-DOS device drivers
	
	- TSRs
	
	- Parts of the Windows kernel
	
	- Windows enhanced mode virtual drivers (VxDs)
	
	- Windows-based applications that call GlobalDosAlloc
	
	- Windows-based applications that call GlobalAlloc and receive low memory by
	  chance
	
	- The task database for each active Windows-based application (This small block
	  of low memory holds data used by MS-DOS.)
	
	The first four clients on the list allocate their memory before any Windows-based
	applications are run, therefore an application cannot prevent this consumption
	of the low memory resource. (The user can modify the CONFIG.SYS and AUTOEXEC.BAT
	files to reduce the number of devices and TSRs.)
	
	Virtual devices can allocate (or map) memory below 1 MB to communicate with
	various hardware devices and MS-DOS device drivers. VxDs such as the virtual
	NetBIOS driver and various virtual display drivers map memory below the 1 MB
	line, reducing the amount of low memory available to Windows.
	
	The last three clients of low memory listed can progressively consume more of the
	resource as the system runs, therefore an application can increase the chance
	that its low memory allocations will succeed by performing them as early as
	possible during system initialization. Two methods for doing this are:
	
	1. Load the application or dynamic-link library (DLL) from the "run=" or "load="
	  line in the WIN.INI file or from the StartUp group provided by Windows 3.1,
	  or
	
	2. Create a Windows device driver that performs the allocation when it is first
	  loaded.
	
	Beware of using too much low memory because other applications that need low
	memory may begin to fail. The worst outcome of allocating too much low memory is
	that Windows will be unable to allocate the task database required to start an
	additional application.
	
	In Windows enhanced mode, the lower memory that Windows-based applications
	allocate is local to the system virtual machine (VM). Other virtual machines (or
	MS-DOS compatibility boxes) cannot see the memory that the GlobalDosAlloc
	function allocates. Allocating "global" low memory (seen by all virtual
	machines) requires a virtual device, or the memory must be allocated before
	Windows is loaded.
	
	Additional query words: 3.00 3.10 meg
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	
