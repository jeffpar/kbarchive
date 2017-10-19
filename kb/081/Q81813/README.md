---
layout: page
title: "Q81813: Hooking Interrupt 21h Before Windows"
permalink: /kb/081/Q81813/
---

## Q81813: Hooking Interrupt 21h Before Windows

	Article: Q81813
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In the standard and enhanced modes of Microsoft Windows version 3.1, an
	application for Windows can receive notification of all calls to MS-DOS made by
	Windows after these calls have been translated by the Windows kernel. To do so,
	the application calls the MS-DOS Protected Mode Interface (DPMI) to hook the
	real mode Interrupt 21h vector.
	
	MORE INFORMATION
	================
	
	This technique is not effective in standard mode under Windows version 3.1
	because the Windows 3.1 Standard Mode MS-DOS Extender (DOSX) does not use the
	real mode interrupt vector table (IVT) to translate software interrupts from
	protected mode to real mode. DOSX uses a copy of the real mode IVT, made at DOSX
	initialization, for this purpose.
	
	In addition, receiving notification using DPMI is of questionable validity
	because future versions of Windows may implement some or all software interrupts
	in protected mode. (The Windows 3.1 kernel already implements Interrupt 13h in
	protected mode, when 32-bit disk access is enabled.)
	
	Applications that must receive notification of Interrupt 21h after the Windows
	kernel can use the GetSetKernelDOSProc() function provided by the standard and
	enhanced modes of Windows 3.1. This function sets the protected mode address
	that the kernel calls to implement Interrupt 21h. The prototype of
	GetSetKernelDOSProc() is as follows:
	
	     DWORD _far _pascal GetSetKernelDOSProc(DWORD newproc);
	
	The newproc parameter is the protected mode address of the new Interrupt 21h
	interrupt routine, which kernel calls to implement Interrupt 21h.
	GetSetKernelDOSProc() returns the address of the old routine, which kernel
	called previously. If the application processes only particular Interrupt 21h
	functions, it must send unprocessed functions to the next handler in the chain.
	Use the address returned by GetSetKernelDOSProc() to call the next handler in
	the chain.
	
	An application calls GetSetKernelDOSProc() once to install itself as the
	Interrupt 21h handler, saving the return value. When the function exits, it
	calls the function again to restore the previous value. An application that can
	uninstall itself should verify that GetSetKernelDOSProc() returns the value of
	its handler when called to restore the previous handler. If
	GetSetKernelDOSProc() returns a different value, another program has installed
	itself into the Interrupt 21h chain. If so, the application should call
	GetSetKernelDOSProc() a third time to place itself back into the Interrupt 21h
	chain.
	
	An application that hooks real mode Interrupt 21h in Windows 3.0 should use
	GetSetKernelDOSProc() in Windows 3.1 and later versions. Although
	GetSetKernelDOSProc() is not in LIBW.LIB, it is exported as ordinal 311, which
	is the preferred method to link to the function. The other method is to use
	GetProcAddress() with the function name.
	
	Additional query words: 3.10 no32bit
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
