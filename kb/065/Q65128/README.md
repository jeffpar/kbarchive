---
layout: page
title: "Q65128: FILE: Windows Int 21h and NetBIOS Support for DPMI"
permalink: /kb/065/Q65128/
---

## Q65128: FILE: Windows Int 21h and NetBIOS Support for DPMI

{% raw %}

	Article: Q65128
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): kbfile
	Last Modified: 04-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article is part of a set of seven articles, collectively called the
	"Windows Developer's Notes." More information about the contents of the other
	articles can be found in the Microsoft Knowledge Base article:
	
	  Q65260 The Windows Developer's Notes
	
	MORE INFORMATION
	================
	
	The following file is available for download from the Microsoft Download
	Center:
	
	  WinDos.exe
	  (http://download.microsoft.com/download/platformsdk/file96/3.1/W31/EN-US/WinDos.exe)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	This document provides a brief overview of the DOS Protected Mode Interface
	(DPMI) version 0.9 and information on how to obtain a copy of the specification.
	It also provides information on Microsoft Windows version 3.0 support for the
	following:
	
	- Applications that use DPMI functions whether or not the application is based
	  on Windows
	
	- MS-DOS interrupts and function requests under Windows in protected mode, and
	  the degree to which they are supported
	
	- NetBIOS in protected mode
	
	DPMI enables MS-DOS-based applications to access the extended memory of PC
	architecture computers while maintaining system protection. It also defines a
	new interface, via software interrupt 31H, that protected-mode applications use
	to do such things as allocate memory, modify descriptors, and call real-mode
	software.
	
	Throughout this document and the DPMI specification, the term "real-mode
	software" is used to refer to code that runs in the low 1-megabyte address space
	and uses segment:offset addressing. Under Windows version 3.0 in protected mode,
	so-called real-mode software is actually executed in virtual 8086 mode. However,
	since virtual 8086 mode is a very close approximation of real mode, both are
	referred to as "real mode" in this document.
	
	For further information on, or to request a copy of, the DPMI specification, call
	Intel at (800) 548-4725.
	
	=======================================================================
	              APPLICATIONS THAT USE DPMI FUNCTIONS
	=======================================================================
	
	Windows version 3.0 running in 386 enhanced mode supports DPMI version
	0.9. Windows version 3.0 running in standard mode supports a subset of
	DPMI that enables applications to call Terminate-and-Stay-Resident
	(TSR) programs and device drivers running in real (or virtual 8086)
	mode. All code that calls DPMI directly should reside in a
	Dynamic-Link Library (DLL) to ease the porting of the application to
	other operating environments.
	
	Windows-based applications should only call the following AX values for
	DPMI version 0.9 functions:
	
	  AX value       Description
	  --------       -----------
	
	  0200H          Get real mode interrupt vector
	  0201H          Set real mode interrupt vector
	  0300H          Simulate real mode interrupt
	  0301H          Call real mode procedure with far return frame
	  0302H          Call real mode procedure with Iret frame
	  0303H          Allocate real mode call-back address
	  0304H          Free real mode call-back address
	
	NOTE: The table listed above differs from that in the printed copy of
	the "Windows 3.00 Developer's Notes" and reflects corrections.
	
	Windows-based applications should NOT use DPMI's MS-DOS memory management
	functions. The Windows version 3.0 Kernel has two functions,
	GlobalDOSAlloc() and GlobalDOSFree(), that should be used by Windows
	applications and DLLs for allocating and freeing MS-DOS addressable
	memory.
	
	Other than those listed above, no DPMI functions are required for
	Windows-based applications because the Kernel provides functions for
	allocating memory, manipulating descriptors, and locking memory.
	Applications not based on Windows that are running in 386 enhanced mode can
	use all the DPMI version 0.9 functions, since they are not restricted by
	the Kernel.
	
	=======================================================================
	           OTHER APPLICATION PROGRAMMING INTERFACES (APIs)
	=======================================================================
	
	In general, any software interrupt API that passes parameters in the
	EAX, EBX, ECX, EDX, ESI, EDI, and EBP registers will work as long as
	none of the registers contains a selector value. In other words, if a
	software interrupt API is completely register-based without any
	pointers, segment registers, or stack parameters, that API should work
	under Windows in protected mode.
	
	More complex software interrupt APIs require the calling function to
	use the DPMI translation functions.
	
	=======================================================================
	    SUPPORT FOR MS-DOS INTERRUPTS UNDER WINDOWS IN PROTECTED MODE
	=======================================================================
	
	This section discusses support for MS-DOS interrupts and function
	requests made under Windows in protected mode. This discussion assumes
	MS-DOS version 3.x or later is being used.
	
	All the MS-DOS interrupts and function requests that are not mentioned
	in this section should work exactly as documented in "The MS-DOS
	Encyclopedia."
	
	UNSUPPORTED MS-DOS INTERRUPTS AND FUNCTION REQUESTS
	===================================================
	
	The following MS-DOS interrupts are not supported in protected mode
	and will fail if called.
	
	  INT         Description
	  ---         -----------
	
	  20H         Terminate program
	  25H         Absolute disk read
	  26H         Absolute disk write
	  27H         Terminate and stay resident
	
	The following MS-DOS INT 21H function requests are also not supported
	in protected mode.
	
	  Function    Description
	  --------    -----------
	
	  00H         Terminate process
	  0FH         Open file with FCB
	  10H         Close file with FCB
	  14H         Sequential read
	  15H         Sequential write
	  16H         Create file with FCB
	  21H         Random read
	  22H         Random write
	  23H         Get file size
	  24H         Set relative record
	  27H         Random block read
	  28H         Random block write
	  67H         SetHandleCount
	
	PARTIALLY SUPPORTED MS-DOS INT 21H FUNCTION REQUESTS
	====================================================
	
	The following MS-DOS INT 21H function requests behave differently in
	protected mode than they do in real mode. To use these function
	requests, the application might require additional code.
	
	Functions 25H and 35H, Set/Get Interrupt Vector
	-----------------------------------------------
	
	These functions set and get the protected-mode interrupt vector. They
	can be used to hook hardware interrupts, such as the timer or keyboard
	interrupt, as well as to hook software interrupts. Except for INT 23H,
	INT 24H, and INT 1CH, software interrupts that are issued in real mode
	are not reflected to protected-mode interrupt handlers. However, all
	hardware interrupts are reflected to protected-mode interrupt handlers
	before being reflected to real mode.
	
	Function 38H, Get Country Data
	------------------------------
	
	This function returns a 34-byte buffer containing a double word
	(DWORD) call address at offset 12H that is used for case mapping. The
	DWORD contains a real-mode address. In order to call the case mapping
	function, the DPMI translation function to simulate a real-mode FAR
	call must be used. See the DPMI specification for more details.
	
	Function 44H, Subfunctions 02H, 03H, 04H, and 05H
	-------------------------------------------------
	
	These I/O control (IOCTL) subfunctions are used to receive data from a
	device or send data to a device. Since it is not possible to break the
	transfers automatically into small pieces, the caller should assume
	that a transfer of greater than 4K will fail unless the address of the
	buffer is in the low 1 megabyte range.
	
	Function 44H, Subfunction 0CH
	-----------------------------
	
	Only the minor function codes 45H (Get Iteration Count) and 65H (Set
	Iteration Count) are supported from protected mode. The extensions of
	this IOCTL subfunction that are used for code-page switching (minor
	function codes 4AH, 4CH, 4DH, 6AH, and 6BH) are not supported for
	protected-mode programs. The DPMI translation functions must be used
	if it is necessary to use this IOCTL subfunction to switch code pages.
	
	Function 65H, Get Extended Country Information
	----------------------------------------------
	
	This function is supported for protected-mode programs. However, all
	the DWORD parameters returned will contain real-mode addresses. This
	means that the case-conversion procedure address and all the pointers
	to tables will contain real-mode segment:offset addresses. The DPMI
	translation functions must be used to call the case-conversion
	procedure in real mode.
	
	=======================================================================
	                         NETBIOS SUPPORT
	=======================================================================
	
	Windows supports standard NetBIOS calls in protected mode. All the
	network control blocks and buffers must reside in fixed memory that is
	page locked. All code that calls NetBIOS directly should reside in a
	DLL to ease the porting of the application to other operating
	environments.
	
	Additional information on NetBIOS and DPMI support in Windows network
	drivers is available in Chapter 6, "Network Support," in the
	"Microsoft Windows Device Driver Adaptation Guide," which is part of
	the Microsoft Windows Device Development Kit (DDK). Additional
	information can be found in the Windows developer's note titled
	"Developing Network Applications for Windows 3.00," available as
	article Q65125.
	
	Additional query words: Windows 3 Developer's Notes
	
	======================================================================
	Keywords          : kbfile 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	

{% endraw %}
