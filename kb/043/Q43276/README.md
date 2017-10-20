---
layout: page
title: "Q43276: Applications and the Math Coprocessor Under Windows"
permalink: /kb/043/Q43276/
---

## Q43276: Applications and the Math Coprocessor Under Windows

{% raw %}

	Article: Q43276
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
	
	When an application for Microsoft Windows is run on a machine with a math
	coprocessor, the application can use inline floating-point instructions to take
	the fullest advantage of the hardware.
	
	MORE INFORMATION
	================
	
	Specifying the -FPi option on the C compiler command line causes the Microsoft C
	optimizing compiler to produce inline 80x87 math coprocessor code for any
	floating-point math operation. If this code is linked with the WIN87EM.LIB
	library and a math coprocessor is present in the system at run time, the
	application will use the inline floating-point instructions for its math
	operations. If no coprocessor is available at run time, code in the emulator
	library evaluates floating-point expressions.
	
	An application compiled for the MS-DOS environment with the -FPi option checks
	for the coprocessor at run time and modifies its code accordingly: if there is a
	coprocessor, it uses inline floating-point instructions; if there is no
	coprocessor, it calls software routines to emulate the coprocessor.
	
	In the Windows environment, these run-time modifications are not performed
	because the Windows kernel fixes up the floating point references as it loads
	the application's code segments (the kernel is aware of the presence or absence
	of the numeric coprocessor). This means that an application for the Windows
	environment compiled with the -FPi option will perform direct, inline
	floating-point instructions without run-time coprocessor-checking. Consequently,
	there is no need to link in the Microsoft C Compiler inline floating- point
	module, which removes the run-time coprocessor-checking.
	
	Additional query words: 3.00 no32bit 3.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	

{% endraw %}
