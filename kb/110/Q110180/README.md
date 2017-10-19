---
layout: page
title: "Q110180: BUG: GP Fault in LoadLibrary() with C++ DLL"
permalink: /kb/110/Q110180/
---

## Q110180: BUG: GP Fault in LoadLibrary() with C++ DLL

	Article: Q110180
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When loading a dynamic-link library (DLL) developed with Microsoft C/C++ 7.0 or
	Visual C++ with a large number of exports not listed in the module definition
	(.DEF) file, LoadLibrary() will cause a general protection (GP) fault in Kernel
	with the message:
	
	  Application Error MYAPP caused a General Protection Fault in module
	  KRNL386.EXE at 0002:0E8D
	
	CAUSE
	=====
	
	The cause of the GP fault is the unusually large amount of exported decorated
	C++ names in the resident name table in the executable header. The Windows
	loader is not designed to handle the resident portion of the executable header
	larger than 64K.
	
	RESOLUTION
	==========
	
	The GP fault can be eliminated by reducing the size the resident name table by
	listing the exported function names along with an ordinal number in the EXPORTS
	section of the .DEF file. Because the compiler generates decorated names, it is
	easier to copy the decorated function names from the .MAP file to the .DEF file.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in Microsoft Windows version 3.1 and
	Windows for Workgroups versions 3.1 and 3.11. We are researching this problem
	and will post new information here in the Microsoft Knowledge Base as it becomes
	available.
	
	MORE INFORMATION
	================
	
	
	The error also occurs when loading the 16-bit DLL on Windows 95.
	
	Although our linker does not support this feature, some 3rd-party linkers such as
	OptLink has a switch that will automatically set the names destined for the
	non-resident name table without doing the copy/paste operation from the .MAP
	file to the .DEF file.
	
	Additional query words: 3.11 gpf gp-fault
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	Issue type        : kbbug
	
	=============================================================================
	
