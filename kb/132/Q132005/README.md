---
layout: page
title: "Q132005: DOCERR: AllocSelector &amp; FreeSelector Documentation Incomplete"
permalink: /kb/132/Q132005/
---

## Q132005: DOCERR: AllocSelector &amp; FreeSelector Documentation Incomplete

{% raw %}

	Article: Q132005
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): _IK kbdocerr kb16bitonly
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The documentation in the Windows SDK for the AllocSelector and FreeSelector
	functions does not mention that they can allocate and free multiple selectors.
	Each function uses the limit (length) of the selector passed to it to determine
	how many selectors to allocate or free. This article describes how AllocSelector
	allocates one or more selectors and how FreeSelector frees selectors. It also
	describes what you must know to use these two functions correctly. The
	documentation should include all the information given in this article.
	
	MORE INFORMATION
	================
	
	AllocSelector(UINT uSelector)
	-----------------------------
	
	AllocSelector(UINT uSelector) allocates a new selector or array of tiled
	selectors and copies the base address, limit (length), and access rights of
	uSelector to the new selector(s). If the limit of uSelector is less than or
	equal to 64K, a single selector is allocated. If the limit of uSelector is
	larger than 64K, an array of tiled selectors is allocated such that each
	selector points to a 64K portion of the limit of uSelector.
	
	If uSelector is NULL, AllocSelector allocates a single, completely uninitialized
	selector. The selector cannot be used until its base address, limit (length),
	and access rights have been set. To set the access rights of an unitialized
	selector, you must call the DOS Protected Mode Interface (DPMI) Set Descriptor
	Access Rights function (0x09). Furthermore, you must set the selector's table
	bit and privilege bits by using a bitwise-OR mask of 0x0007 to set the
	lowest-order three bits of the selector.
	
	You should copy an existing selector instead of allocating an uninitialized
	selector because it is easier to allow AllocSelector set the newly created
	selector's access control bits. After creating a copy of an existing selector,
	use SetSelectorLimit and SetSelectorBase to make the copy point to the desired
	location.
	
	Selectors allocated by AllocSelector must be freed by FreeSelector because the
	system does not track or manage them automatically.
	
	FreeSelector(UINT uSelector)
	----------------------------
	
	FreeSelector(UINT uSelector) frees either a single selector or an array of tiled
	selectors depending on the limit of uSelector. Frees one selector for each 64K
	portion of the limit of uSelector. The selector or array of tiled selectors
	being freed must have been allocated previously by AllocSelector. Furthermore,
	the limit of uSelector must be the same as the selector used as a parameter in
	the call to AllocSelector.
	
	Example Array of Tiled Selectors
	--------------------------------
	
	An example array of tiled selectors looks like this (assuming that the selector
	passed to AllocSelector has a limit of 256K):
	
	 Sel 1     Sel 2      Sel 3      Sel 4
	
	  0         64K       128K       192K       256K
	  +----------+----------+----------+----------+
	  |          |          |          |          |
	  +----------+----------+----------+----------+
	  |          |          |          |--------->| (Limit = 64K)
	  |          |          |-------------------->| (Limit = 128K)
	  |          |------------------------------->| (Limit = 192K)
	  |------------------------------------------>| (Limit = 256K)
	
	Notice that each successive selector's base address starts 64K from the previous
	selector's base address and has a limit that is 64K less than the previous
	selector. What really makes these selectors tiled is that they are contiguous in
	the local descriptor table (LDT). For example, if Sel 1 has a value of 0x97,
	then Sel 2 will be 0x9F, Sel 3 will be 0xA7, and Sel 4 will be 0xAF.
	
	Only Sel 1 is used to create a huge pointer to the block. As you increment
	through the block, the compiler generates the correct code to switch from Sel 1
	to Sel 2 to Sel 3 to Sel 4 automatically. The code listed in the "Code Sample
	Two" section of this article demonstrates this.
	
	Code Sample One
	---------------
	
	This example shows how to allocate exactly one data selector. Code segments in
	16-bit code are always less than 64K, so you can ensure that you don't allocate
	multiple selectors by allocating a copy of a code selector and converting it
	into a data selector:
	
	       UINT codeSelector, dataSelector;
	
	     _asm {
	          mov ax, cs
	          mov codeSelector, ax
	          }
	
	     dataSelector = AllocSelector(codeSelector);
	     if (!dataSelector)
	        return NULL;
	
	     // Change dataSelector from a code selector into a data selector
	     if (PrestoChangoSelector(codeSelector, dataSelector))
	        {
	        // Set the desired base address and limit
	        SetSelectorBase(dataSelector, dwLinearBase);
	        DPMISetSelectorLimit(dataSelector, dwLimit);
	        }
	     else
	        {
	        // If you get here, you couldn't change dataSelector so you need
	        // to free it because you can't use it as a code selector
	        FreeSelector(dataSelector);
	        return NULL;
	        }
	
	     // You now have a single data selector. Use it, and then free it by
	     // calling FreeSelector.
	
	Code Sample Two
	---------------
	
	This example shows how to automatically allocate an array of tiled selectors that
	points to a specified region of memory, and obtain a huge pointer from the
	selector array:
	
	      // The application creates, uses, and frees a huge pointer here
	     char __huge * hpMem;
	
	     hpMem = CreateHugePointer (dwBaseAddress, dwLength);
	
	     // hpMem now points to a region of pre-allocated memory, such
	     // as a memory-mapped hardware device's buffer. Use it as you
	     // would any pointer.
	
	     FreeHugePointer (hpMem);
	
	  // The following three functions show how to allocate an array
	  // of tiled selectors that point to a specified region of memory.
	
	  /*--------------------------------------------------------------
	    This function creates a huge pointer with the proper number
	    of selectors to access physical memory. The huge pointer may be
	    used by C or C++ code. dwLinearBase is a 32-bit linear address,
	    and dwLength is the number of bytes that the huge pointer will
	    be able to access. This function returns the huge pointer if it
	    succeeds, or it returns NULL if it fails.
	  --------------------------------------------------------------*/ 
	
	  void __huge * CreateHugePointer (DWORD dwLinearBase,
	                                   DWORD dwLength)
	     {
	     WORD tempSelector = NULL;
	     WORD codeSelector = NULL;
	     WORD dataSelector = NULL;
	     DWORD dwLimit;
	
	     /*
	       A segment's limit is defined as the last accessible offset in
	       the segment. Because the limit is the last accessible offset, it
	       is the desired length of the segment minus 1. For example, if
	       you want a 64K segment, then you need a limit of 0xFFFF, not
	       0x10000, because the segment contains byte offsets 0 to 0xFFFF.
	       Note that a segment with a limit of 0 is actually a single byte
	       in length. Thus, this function considers a length of zero
	       invalid.
	     */ 
	     if (dwLength == 0)
	        return NULL;
	
	     dwLimit = dwLength - 1;
	     /*
	       Allocate a single temporary selector by making a copy of the
	       code segment selector and converting the copy to a data
	       selector. Code segments are always less than or equal to
	       64K in length, so you are guaranteed to get a single temporary
	       selector and be sure to free a single selector.
	
	       Once you have the temporary selector, set its base address and
	       limit to the desired values, which may be larger than 64K.
	       Because the memory must be accessed by 16-bit code, you must
	       allocate an array of tiled selectors. The temporary selector is
	       used to force AllocSelector to allocate an array of the proper
	       number of tiled selectors, each with the proper base and limit.
	       Then you can free the single temporary selector.
	
	       If you fail anywhere along the way, clean up whatever has been
	       done, and return NULL.
	     */ 
	
	     _asm {
	          mov ax, cs
	          mov codeSelector, ax
	          }
	
	     tempSelector = AllocSelector (codeSelector);
	     if (!tempSelector)
	        return NULL;
	
	     /*
	       If you can successfully change the tempSelector into a
	       data selector, set its base address and limit to the
	       desired base and limit, and then allocate the real selector
	       array. Otherwise, prepare to return NULL.
	
	       SetSelectorLimit does not handle the granularity bit of
	       selectors properly, which limits its usefulness only to ranges
	       of addresses less than 1MB in length. This function calls
	       DPMISetSelectorLimit, a function defined below, to overcome
	       this limitation and allow you to create arrays of tiled
	       selectors that can access more than 1MB.
	     */ 
	     if (PrestoChangoSelector (codeSelector, tempSelector))
	        {
	        SetSelectorBase(tempSelector, dwLinearBase);
	        DPMISetSelectorLimit(tempSelector, dwLimit);
	        dataSelector = AllocSelector(tempSelector);
	        }
	     else
	        dataSelector = NULL;
	
	     // Clean up temp selector
	     DPMISetSelectorLimit(tempSelector, 0L);
	     FreeSelector(tempSelector);
	
	     // dataSelector will be NULL if it could not be allocated
	     // successfully, making this function return NULL.
	     return (void __huge *)MAKELONG(0, dataSelector);
	     }
	
	  /*--------------------------------------------------------------
	    This function frees pointers allocated by CreateHugePointer.
	    It correctly frees all tiled selectors created to access the
	    block of physical memory. It is very important that you call
	    this on all pointers created by CreateHugePointer and that you
	    do not call this function on pointers allocated by any way
	    other than using CreateHugePointer.
	  --------------------------------------------------------------*/ 
	
	  void FreeHugePointer (void __huge * hPtr)
	     {
	     if (hPtr)
	        FreeSelector (HIWORD(hPtr));
	     }
	
	  /*--------------------------------------------------------------
	    This function sets the limit of a selector using DPMI Function
	    0008h (Set Segment Limit). This function is necessary if the
	    segment size is greater than 1 MB because the Windows
	    SetSelectorLimit() API function does not correctly set selector
	    limits greater than 1 MB.
	
	    Segments that are larger than 1MB are actually page granular,
	    meaning that in the descriptor, the limit field is actually
	    stored as the number of 4K pages rather than bytes. When you
	    specify a limit greater than 1MB, this function rounds it up
	    to the nearest page boundary.
	
	    No matter the size of the segment, this function always accepts
	    selector limits in number of bytes, never pages. The conversion
	    between bytes and pages is handled internally.
	
	    Note that this function takes a segment limit, which is one less
	    than the number of bytes in the segment.
	  --------------------------------------------------------------*/ 
	
	     BOOL DPMISetSelectorLimit (UINT selector, DWORD dwLimit)
	     {
	        BOOL bRetVal=TRUE;
	
	     // If the limit is >= 1MB, we need to make the limit a mulitple
	     // of the page size or DPMISetSelectorLimit will fail.
	
	        if( dwLimit >= 0x100000 )
	           dwLimit |= 0x0FFF;
	
	        __asm
	        {
	           mov  ax, 0008h
	           mov  bx, selector
	           mov  cx, word ptr [dwLimit+2]
	           mov  dx, word ptr [dwLimit]
	           int  31h
	           jnc  success
	           mov  bRetVal, FALSE
	         success:
	        }
	        return bRetVal;
	     }
	
	Four Caveats to Keep in Mind
	----------------------------
	
	Keep the following in mind when using the suggestions in this article:
	
	- Allocating selectors does not actually allocate any memory. It merely creates
	  a pointer that can be used to access existing memory (memory previously
	  allocated or provided by a memory-mapped hardware device). Do not confuse
	  allocating selectors with allocating memory.
	
	- Selectors that alias (point to) a memory block allocated by Windows are not
	  updated if the memory block is moved. To ensure that the memory block is not
	  moved, call GlobalFix on it before creating a selector that aliases it.
	  However, if the allocated selector points to memory provided by a hardware
	  device, there is no need to call GlobalFix because the device's memory was
	  not allocated by Windows.
	
	- The Windows memory manager does not keep track of which task allocated
	  selectors with these functions, so you must ensure that the task frees them
	  correctly. In particular, make sure it does not free more or fewer selectors
	  than it allocated. The sample code in this article demonstrates the proper
	  way to allocate and free selectors with these functions.
	
	- Allocating large numbers of selectors is discouraged because selectors are a
	  limited resource.
	
	Additional query words:
	
	======================================================================
	Keywords          : _IK kbdocerr kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	

{% endraw %}
