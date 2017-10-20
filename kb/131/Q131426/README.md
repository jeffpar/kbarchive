---
layout: page
title: "Q131426: How to Access Physical Memory in 16-bit Windows-Based Apps"
permalink: /kb/131/Q131426/
---

## Q131426: How to Access Physical Memory in 16-bit Windows-Based Apps

{% raw %}

	Article: Q131426
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
	
	Some Windows-based applications need direct access to a range of physical
	addresses so that they can interact with memory-mapped hardware interface cards
	or read the computer's CMOS settings. This article outlines two methods 16-bit
	Windows-based applications can use to access a region of physical memory
	directly. Neither method, however, provides memory allocation and management;
	applications must use the standard memory management functions for allocating
	and managing memory.
	
	MORE INFORMATION
	================
	
	Method One: Exported Selectors (Preferred)
	------------------------------------------
	
	The 16-bit Windows kernel (KRNL386.EXE) exports several selectors that should be
	used by 16-bit applications that need to read or write to physical memory
	addresses below 1 megabyte (MB). The exported selectors are:
	
	  __0000h, __0040h, __A000h, __B000h, __B800h, __C000h, __D000h,
	  __E000h, and __F000h
	
	To use one of these selectors, place it onto a segment register and access the
	memory or create a far pointer. Here are examples using the Microsoft Macro
	Assembler (MASM) and Microsoft C:
	
	    In MASM:    extern  __0040h
	                ...
	                mov ax, __0040h
	                mov es, ax
	
	       In C:    extern   WORD _0040h;
	                LPSTR    lpBIOSDataArea;
	                ...
	                /* Note the ampersand (&) and underscore (_) below */ 
	                lpBIOSDataArea = (LPSTR)MAKELONG(0, &_0040h);
	
	     In C++:    extern "C" WORD _0040h;
	                LPSTR    lpBIOSDataArea;
	                ...
	                /* Note the ampersand (&) and underscore (_) below */ 
	                lpBIOSDataArea = (LPSTR)MAKELONG(0, &_0040h);
	
	Each of these selectors is limited to addressing 64K. Attempts to read or write
	data beyond the 64K limit cause a general protection (GP) fault. Applications
	must not free these selectors.
	
	Applications should use exported selectors unless they do not provide access to
	the necessary area of physical memory. In which case, you can try method two.
	
	Method Two: Selector Synthesis
	------------------------------
	
	When an application needs to access physical memory that is not addressable with
	the selectors exported from the Windows kernel, it can allocate a new selector
	and initialize the associated descriptor with the appropriate base address and
	limit. The Windows kernel and the DOS Protected Mode Interface (DPMI) server
	(part of Windows) provide functions for applications to do this. Each required
	function is described below:
	
	Map Physical To Linear
	
	  (DPMI: Interrupt 31h, AX=0800h) Obtains a 32-bit linear address that
	  corresponds to a specified 32-bit physical address. This function is needed
	  because the selector functions require linear addresses. In Windows version
	  3.1 standard mode, this function is not required because linear addresses are
	  the same as physical addresses.
	
	AllocSelector(WORD wSelector)
	
	  (Kernel) Allocates a new selector or array of tiled selectors and copies the
	  attributes of wSelector to the new selectors. If the limit of wSelector is
	  less than or equal to 64K, a single selector is allocated. If the limit of
	  wSelector is larger than 64K, an array of tiled selectors is allocated such
	  that each selector points to one 64K portion of the limit of wSelector.
	
	FreeSelector(WORD wSelector)
	
	  (Kernel) Frees either a single selector or an array of tiled selectors
	  depending on the limit of wSelector. Frees one selector for each 64K portion
	  of the limit of wSelector. The selector or array of tiled selectors being
	  freed must have been allocated previously by AllocSelector. Furthermore, the
	  limit of wSelector must be identical to that used by the selector as a
	  parameter in the call to AllocSelector.
	
	SetSelectorBase(WORD wSelector, DWORD dwBase)
	
	  (Kernel) Stores the starting linear address of the desired region in the
	  descriptor of wSelector.
	
	SetSelectorLimit(WORD wSelector, DWORD dwLimit)
	
	  (Kernel) Stores the length of the desired region in the descriptor of
	  wSelector.
	
	
	PrestoChangoSelector (WORD wSourceSelector, WORD wDestSelector)
	
	  (Kernel) Copies the attributes of wSourceSelector into wDestSelector and
	  toggles the code/data attribute. That is, if wSourceSelector is a code
	  selector, the wDesSelector will be a copy of it, except wDestSelector has the
	  data attribute instead of the code attribute. wDestSelector must have been
	  allocated previously by AllocSelector.
	
	Four Caveats to Keep in Mind
	----------------------------
	
	1. Allocating selectors does not actually allocate any memory. It merely creates
	  a pointer that can be used to access existing memory (memory previously
	  allocated or provided by a memory-mapped hardware device). Do not confuse
	  allocating selectors with allocating memory.
	
	2. Selectors that alias (point to) a memory block allocated by Windows are not
	  updated if the memory block is moved. To ensure that the memory block is not
	  be moved, call GlobalFix() on it before creating a selector that aliases it.
	  However, if the synthesized selector points to memory provided by a physical
	  device, there is no need to call GlobalFix() because the device's memory was
	  not allocated by Windows.
	
	3. The Windows memory manager does not keep track of which task allocated
	  selectors with these functions, so you must ensure that the task frees them
	  correctly. In particular, make sure it does not free more or less selectors
	  than it allocates. The sample code below demonstrates the proper way to
	  allocate and free selectors with these functions.
	
	4. Allocating large numbers of selectors is discouraged because selectors are a
	  limited resource.
	
	The following code was written using the inline assembly feature of the Microsoft
	C and C++ compilers. This code illustrates how to create a huge pointer to a
	range of physical addresses.
	
	Sample Code
	-----------
	
	  DWORD MapPhysicalToLinear(DWORD, DWORD);
	  void __huge * CreateHugePointer (DWORD dwLinearBase,
	                                   DWORD dwLength);
	  void FreeHugePointer (void __huge * hPtr);
	
	  DWORD dwPhysical, dwLinear, dwLength;
	  char __huge *hpPhysMem;  // Will point to physical addresses
	  WORD  segment, offset;   // These variables are necessary only
	                           // if the target memory is addressed
	                           // with a "real-mode" style SEG:OFFSET
	                           // pointer.
	
	  /*--------------------------------------------------------------*/ 
	  /*     Sample Code to Create a Pointer to Physical Memory       */ 
	  /*--------------------------------------------------------------*/ 
	
	  /*
	    Create a linear address. The way to do this depends on
	    where the memory is located. Both ways are shown below,
	    but only *one* must be used.
	
	  */ 
	
	     /*
	       Obtain linear address below 1 MB
	
	       If the selector will point to memory below 1 MB, create a
	       linear address as follows (yes, this really is a linear
	       address):
	     */ 
	
	  dwLinear = ((DWORD)segment << 4L) + offset;
	
	     /*
	       Obtain linear address above 1 MB
	
	       If the selector will point to memory above 1 MB, dwPhysical
	       should contain the 32-bit physical address. Call DPMI to
	       convert dwPhysical to a linear address. Note that you must
	       pass the physical address and the length (limit) to DPMI.
	     */ 
	
	  dwPhysical = 0xC000000;    // Physical 192 MB address
	                             // (for example purposes only).
	
	  dwLinear = MapPhysicalToLinear(dwPhysical, dwLength);
	  if (!dwLinear)
	     {
	     ;// Handle error...
	     }
	
	     /*
	       Now that dwLinear contains the linear address, it's time to
	       create a pointer so you can access the physical memory.
	     */ 
	
	  hpPhysMem = CreateHugePointer (dwLinear, dwLength);
	
	  // Use the pointer hpPhysMem to access memory...
	
	     // Free the pointer when finished with it
	  FreeHugePointer(hpPhysMem);
	
	  // Rest of program...
	
	  /*--------------------------------------------------------------*/ 
	  /* Functions used to create huge pointers to physical memory    */ 
	  /*--------------------------------------------------------------*/ 
	
	  /*----------------------------------------------------------------
	     This function is a wrapper for DPMI Map Physical To Linear.
	     Returns 0 if it failed or if the physical address is below
	     1 MB. Returns the linear address if DPMI call succeeded.
	  ----------------------------------------------------------------*/ 
	  DWORD MapPhysicalToLinear(DWORD dwPhysical, DWORD dwLength)
	     {
	     DWORD dwLinear = 0L;          // In case memory below 1 MB, you
	                                   // don't want to return garbage.
	
	     if (dwPhysical >= 0x100000L)  // Use only if above 1 MB.
	        {
	        _asm {
	             push    di
	             push    si
	             mov     bx, WORD PTR [dwPhysical+2] ; Load arguments.
	             mov     cx, WORD PTR [dwPhysical]
	             mov     si, WORD PTR [dwLength+2]
	             mov     di, WORD PTR [dwLength]
	             mov     ax, 800h
	             int     31h                         ; Issue DPMI call.
	             jnc     short fine_return
	             xor     bx, bx                      ; zero out return
	             mov     cx, bx                      ; regs on error
	     fine_return:
	             mov     WORD PTR [dwLinear+2], bx   ; Return value.
	             mov     WORD PTR [dwLinear], cx
	             pop     si
	             pop     di
	             }
	        }
	     return dwLinear;
	     }
	
	  /*--------------------------------------------------------------
	     This function creates a huge pointer with the proper number
	     of selectors to access physical memory. The huge pointer may be
	     used by normal C or C++ code. dwLinearBase is a 32-bit linear
	     address, and dwLength is the number of bytes that the huge
	     pointer will be able to access. This function returns the huge
	     pointer if it succeeds or it returns NULL if it fails.
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
	       the segment. Since the limit is the last accessible offset, it
	       is the desired length of the segment minus 1. For example, if
	       you want a 64K segment, then you need a limit of 0xFFFF, not
	       0x10000 because the segment contains byte offsets 0 to 0xFFFF.
	       Note that a segment with a limit of 0 is actually a single byte
	       in length. Thus, this function considers a length of zero
	       invalid.
	     */ 
	     if (dwLength == 0)
	        return (NULL);
	
	     dwLimit = dwLength -1;
	
	     /*
	       Allocate a single temporary selector by making a copy of the
	       code segment selector and converting the copy to a data
	       selector. Code segments are always less than or equal to
	       64K in length, so you are guaranteed to get a single temporary
	       selector and can be sure of freeing a single selector.
	
	       Once you have the temporary selector, set its base address and
	       limit to the desired values, which may be larger than 64 K.
	       Because the memory must be accessed by 16-bit code, you must
	       allocate an array of tiled selectors. The temporary selector is
	       used to force AllocSelector() to allocate an array of the proper
	       number of tiled selectors each with the proper base and limit.
	       Then, you can free the single temporary selector.
	
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
	       If we can successfully change the tempSelector into a
	       data selector, set its base address and limit to the
	       desired base and limit, and then allocate the real selector
	       array. Otherwise, just prepare to return NULL;
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
	    stored as the number of 4K pages rather than bytes. No matter
	    the size of the segment, this function always accepts selector
	    limits in number of bytes, never pages. The conversion between
	    bytes and pages is handled internally.
	
	    Note that this function takes a segment limit, which is one less
	    than the number of bytes in the segment.
	  --------------------------------------------------------------*/ 
	
	  BOOL DPMISetSelectorLimit (UINT selector, DWORD dwLimit)
	  {
	     BOOL bRetVal=TRUE;
	
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
	
	Additional query words: no32bit 3.00 3.10 accessing
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	

{% endraw %}
