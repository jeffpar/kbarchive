---
layout: page
title: "Q62065: DPMI Specification Available from Intel"
permalink: /kb/062/Q62065/
---

## Q62065: DPMI Specification Available from Intel

{% raw %}

	Article: Q62065
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
	
	The MS-DOS protected mode interface (DPMI) specification is available free of
	charge by calling Intel Corporation at (800) 548-4725. International customers
	can obtain the DPMI Specification by contacting the Intel sales office that
	serves their country.
	
	MORE INFORMATION
	================
	
	The DPMI specification was defined to allow an MS-DOS program to access the
	extended memory provided by a PC architecture computer while maintaining system
	protection. DPMI defines a specific subset of MS-DOS and BIOS calls that can be
	made by protected mode MS-DOS programs. It also defines a new interface through
	software Interrupt 31h, which protected mode programs can use to allocate
	memory, modify selectors, call real mode software, and so forth.
	
	DPMI is commonly used to communicate with a terminate-and-stay- resident (TSR)
	program or an MS-DOS device driver from a protected mode application. If the
	protected mode application passes a buffer of data to a TSR or device driver,
	the application must allocate the buffer from memory addressed below 1 megabyte
	to make the data accessible to the real mode software. The application must also
	translate the buffer's address from a selector address to a segment address. If
	the real mode software calls back to a function in the protected mode
	application, the application must allocate a real mode callback address. DPMI
	provides services to perform each of these tasks.
	
	The Microsoft Windows standard mode MS-DOS extender and Windows enhanced mode
	provide translation services for most of the commonly used interrupts. This
	allows a driver or an application to call MS-DOS, the BIOS, and other common
	services without using the DPMI. However, when an application communicates with
	a network, a TSR, or any real mode software for which Windows does not provide
	automatic translation, it must use DPMI services.
	
	DPMI services should be used only in a Windows device driver or a dynamic-link
	library (DLL). An application should manipulate selectors using the kernel
	selector functions, documented in the Microsoft Windows Software Development Kit
	(SDK). Calling DPMI services from an application may not be supported by future
	versions of Windows. However, calling these services from a device driver or a
	DLL will be supported.
	
	Additional query words: 3.00 vcpi 3.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	

{% endraw %}
