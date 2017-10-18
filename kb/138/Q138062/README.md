---
layout: page
title: "Q138062: How to Specify the Base Address of a VB OLE Server DLL"
permalink: kb/138/Q138062/
---

## Q138062: How to Specify the Base Address of a VB OLE Server DLL

	Article: Q138062
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	It is possible to specify the preferred address in memory where you want an OLE
	DLL that was created in Visual Basic to be loaded. If the OLE DLL is unable to
	load at the preferred address, it automatically finds a suitable address;
	however, the OLE DLL may take longer to load into memory in this case, and will
	consume more system resources (swap file and possibly memory). By specifying a
	base address, you may improve the performance of the OLE DLL by anticipating and
	avoiding conflicts with other OLE DLLs.
	
	MORE INFORMATION
	================
	
	With Win32, each process has its own 4 GB virtual address space. Any DLLs that
	the process might use, are loaded into this address space. If a DLL could be
	loaded as is using the addresses within it as calculated from the specified base
	address, then it can be memory mapped right off the disk. No relocation is
	required. However, if relocation is required because some other DLL is occupying
	the memory at the specified base address or because of another use of that
	memory (such as memory-mapped files, memory allocations, reserved virtual
	address ranges, and so on), then a new temporary copy of it is automatically
	made with the new offsets and mapped onto the new memory location in the
	process's virtual address space.
	
	Memory addresses beyond the location 11000000 are typically used by Visual Basic
	OLE DLLs. So this is the default value of the base address that is used if you
	don't specify one when compiling the DLL.
	
	If your application uses two DLLs, you can load them faster by specifying
	appropriate base addresses. You could specify the default base address for the
	first DLL and add the size of this DLL to this base address in order to
	determine the base address for the second DLL.
	
	Additional query words: 4.00 inproc vb4win vb4all
	
	======================================================================
	Keywords          :  
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	
	=============================================================================
	
