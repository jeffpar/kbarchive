---
layout: page
title: "Q103950: SetSelectorLimit() Crossing 1 Megabyte Boundary"
permalink: kb/103/Q103950/
---

## Q103950: SetSelectorLimit() Crossing 1 Megabyte Boundary

	Article: Q103950
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The SetSelectorLimit() application programming interface (API) function will not
	properly modify the limit of a selector if the change is to cross the 1 megabyte
	(MB) (0x100000) boundary. That is, the change is improper going from less than 1
	MB to greater than 1 MB and visa versa. In these cases, DPMI function 08h must
	be used to properly change the limit of a selector.
	
	MORE INFORMATION
	================
	
	SetSelectorLimit() does not correctly handle setting segment sizes from less
	than 1 MB to greater than 1 MB because it will not set the granularity bit. The
	granularity bit needs to be set to indicate page granularity in the segment
	descriptor. When the granularity bit is set, the selector limit has the form
	xxxxxFFFh for page alignment. A page is 4K (4096 bytes).
	
	Similarly, SetSelectorLimit() does not correctly handle setting segment sizes
	from greater than 1 MB to less than 1 MB because it will not clear the
	granularity bit. When the granularity bit is clear, the selector limit has the
	form xxxxxh for byte alignment.
	
	DPMI function 08h properly sets or clears the granularity bit when appropriate.
	The limit must be in the form xxxxxFFFh when changed to greater than 1 MB, and
	must be in the form xxxxxh when changed to less than 1 MB.
	
	Sample Code
	-----------
	
	  //********************************************************************
	  // DPMISetSelectorLimit()
	  // 
	  // This function sets a selector limit using DPMI Function AX=0008h
	  //(Set Segment Limit). This function is necessary if the segment size
	  // is greater than 1 MB because SetSelectorLimit() does not correctly
	  // set selector sizes greater than 1 MB.
	  // 
	  // Segments that are larger than 1MB are actually page granular,
	  // meaning that in the descriptor, the limit field is actually
	  // stored as the number of 4K pages rather than bytes. When you
	  // specify a limit greater than 1MB, this function rounds it up
	  // to the nearest page boundary.
	  // 
	  // No matter the size of the segment, this function always accepts
	  // selector limits in number of bytes, never pages. The conversion
	  // between bytes and pages is handled internally.
	  // 
	  // Note that this function takes a segment limit, which is one less
	  // than the number of bytes in the segment.
	  // 
	  //********************************************************************
	
	  BOOL DPMISetSelectorLimit (UINT selector, DWORD dwLimit)
	  {
	     BOOL bRetVal=TRUE;
	
	  // If the limit is >= 1MB, you need to make the limit a multiple of
	  // the page size or DPMISetSelectorLimit will fail.
	
	     if( dwLimit >= 0x100000 )
	        dwLimit |= 0x0FFF;
	
	     _asm
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
	
	Additional query words: gp-fault gpf uae gp fault
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	
