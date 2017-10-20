---
layout: page
title: "Q95545: HOWTO: Use GlobalDosAlloc() and GlobalDosFree()"
permalink: /kb/095/Q95545/
---

## Q95545: HOWTO: Use GlobalDosAlloc() and GlobalDosFree()

{% raw %}

	Article: Q95545
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
	
	GlobalDosAlloc() is used by Windows-based applications and dynamic-link
	libraries (DLLs) to allocate memory blocks that are guaranteed to exist in the
	first megabyte (MB) of linear address space. GlobalDosFree() is used to free
	memory blocks allocated by GlobalDosAlloc(). Memory blocks allocated by
	GlobalDosAlloc() are fixed in standard mode and page locked in 386 enhanced
	mode.
	
	Neither of these functions is prototyped in the Microsoft Windows version 3.0
	Software Development Kit's WINDOWS.H; however, both are correctly prototyped in
	the Microsoft Windows version 3.1 SDK's WINDOWS.H. Furthermore, both functions
	are prototyped incorrectly in the Windows 3.0 SDK "Reference, Volume 1" and in
	the Windows 3.1 SDK "Programmer's Reference, Volume 2: Functions." The correct
	prototypes are:
	
	  DWORD FAR PASCAL GlobalDosAlloc(DWORD cbAlloc);
	  UINT FAR PASCAL GlobalDosFree (UINT uSelector);  // in Windows 3.1
	  WORD FAR PASCAL GlobalDosFree (WORD wSelector);  // in Windows 3.0
	
	The return value of GlobalDosAlloc(), if successful, contains a selector in the
	low-order word and a paragraph-aligned segment value in the high-order word. If
	GlobalDosAlloc() fails, it returns zero. If GlobalDosFree() succeeds, it returns
	zero. If it fails, GlobalDosFree() returns the value of the selector passed to
	it.
	
	Memory below 1 MB is scarce and should not be allocated by applications or DLLs
	unless absolutely necessary. For further information about how memory below 1 MB
	is used, query on the following words in the Microsoft Knowledge Base:
	
	  GlobalDosAlloc() or memory
	
	
	MORE INFORMATION
	================
	
	The following code sample demonstrates how to use GlobalDosAlloc() and
	GlobalDosFree():
	
	     DWORD dwMyLowMemory;
	     UINT  uMySegment;
	     UINT  uMySelector;
	     LPSTR lpProtModePtr;
	     DWORD lpRealModePtr;
	      .
	      .
	      .
	
	     if ((dwMyLowMemory = GlobalDosAlloc(512)) == 0)
	        return FALSE;    // Error: unable to allocate memory
	
	     // GlobalDosAlloc() allocates global memory that can be accessed by
	     // real-mode applications. The memory is guaranteed to exist in the
	     // first megabyte of linear address space.
	     // 
	     // GlobalDosAlloc() returns a DWORD in which the high-order word is a
	     // paragraph segment and the low-order word is a selector.
	
	     uMySegment  = HIWORD(dwMyLowMemory);
	     uMySelector = LOWORD(dwMyLowMemory);
	
	     lpProtModePtr = (LPSTR)MAKELONG(0, uMySelector);
	                                                 // protected mode pointer
	
	     lpRealModePtr = (DWORD)MAKELONG(0, uMySegment);
	                                                 // real mode pointer
	      .
	      .
	      .
	
	     if ((uMySelector = GlobalDosFree(uMySelector)) != NULL)
	        return FALSE;    // Error: unable to free memory
	
	This example works correctly in all Windows modes. The selector value returned by
	GlobalDosAlloc() does not need to be locked via a call to GlobalLock() because
	it is already locked. Because the value of uMySegment is a paragraph-aligned
	segment value, the starting offset of the memory object will be zero. In Windows
	3.0 real mode, GlobalDosAlloc() returns segment values in both words.
	
	GlobalDosAlloc() allocates memory below 1 MB in linear address space. In standard
	mode, this memory is in the first megabyte of physical memory because linear
	addresses are the same as physical addresses. In 386 enhanced mode, however,
	linear addresses are not the same as physical addresses. Memory allocated via
	GlobalDosAlloc() is not guaranteed to reside in the first megabyte of physical
	memory nor to be physically contiguous. Furthermore, because the physical
	address of a memory block allocated via GlobalDosAlloc() is not known in 386
	enhanced mode, it is not suitable for DMA transfers or memory-mapped hardware.
	
	
	In 386 enhanced mode Windows, GlobalDosAlloc() allocates memory blocks in the
	Windows virtual machine only. Terminate-and-stay-resident programs (TSRs) and
	MS-DOS device drivers that were started before Windows are global to all virtual
	machines and thus can use these memory blocks. However, TSRs and MS-DOS-based
	applications that are started in Windows MS-DOS boxes run in their own virtual
	machines and so cannot see the memory allocated by GlobalDosAlloc(). Because
	memory allocated by GlobalDosAlloc() is not global to all virtual machines, it
	cannot be used to communicate asynchronously (based on hardware interrupts, for
	example) with TSRs. For examples of Windows-based applications that communicate
	with TSRs, study the GDOSMEM and TDOSMEM sample applications included in the
	Windows 3.1 SDK, or query on the following words in the Microsoft Knowledge
	Base:
	
	  GDOSMEM or TDOSMEM
	
	If GlobalDosAlloc() is called from within a DLL, the allocated memory block is
	owned by the application instance that called the DLL, not the DLL. However, it
	is sometimes necessary for a DLL to own a block of memory that MS-DOS can
	access. (For example, a DLL may need its own buffer to communicate with a TSR.)
	
	Because GlobalDosAlloc() doesn't take a parameter to specify the attributes of
	the memory block to be allocated as GlobalAlloc does, how can the memory be
	assigned to a DLL? The DLL can allocate the memory on behalf of the calling
	application instance and then call GlobalReAlloc() to change the ownership of
	the memory block to itself. The following code sample demonstrates this
	technique:
	
	    // Called from within a DLL
	
	     HGLOBAL hMyLowMem;
	     DWORD   dwMyLowMemory;
	     UINT    uSelector;
	     LPSTR   lpszProtModePtr;
	      .
	      .
	      .
	     if ((dwMyLowMemory = GlobalDosAlloc (512)) == 0)
	        return (FALSE);      // Error: unable to allocate memory
	
	     uSelector = LOWORD(dwMyLowMemory);
	     lpszProtModePtr = (LPSTR)MAKELONG(0, uSelector);
	
	     hMyLowMem = LOWORD(GlobalHandle (uSelector));
	
	     hMyLowMem = GlobalReAlloc (hMyLowMem, 0, GMEM_MODIFY |
	                                              GMEM_DDESHARE);
	      .
	      .
	      .
	
	After the call to GlobalReAlloc(), the memory block will belong to the DLL and
	can be accessed by lpszProtModePtr. To free the memory block, just call
	GlobalDosFree(); there is no need to change the ownership of the block back to
	its original owner.
	
	GlobalDosAlloc() and GlobalDosFree() are not the same as the DPMI DOS Memory
	Management Services (functions 100h to 102h). Windows applications and DLLs
	should not use these DPMI functions because GlobalDosAlloc() and GlobalDosFree()
	perform the same functions.
	
	
	Important note: Applications and DLLs should not use GlobalDosAlloc() unless
	absolutely necessary because the free memory pool below 1 MB from which it
	allocates is a scarce system resource.
	
	GlobalDosAlloc() and GlobalDosFree() are documented on pages 4-236 and 4- 237 of
	the Microsoft Windows SDK 3.0 "Reference, Volume 1" and on pages 501 and 502 of
	the Microsoft Windows SDK 3.1 "Programmer's Reference, Volume 2: Functions."
	
	Additional query words:
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	

{% endraw %}
