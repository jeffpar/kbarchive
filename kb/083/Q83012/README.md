---
layout: page
title: "Q83012: Using Auto-Initialize DMA Under Windows"
permalink: kb/083/Q83012/
---

## Q83012: Using Auto-Initialize DMA Under Windows

	Article: Q83012
	Product(s): Microsoft Windows Device Driver Kit
	Version(s): 3.0,3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Device Development Kit (DDK) for Windows, versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	VADMAD, the Virtual Auto-Initialize Direct Memory Access Device, is provided
	with the Windows Multimedia Device Development Kit version 1.0, and the
	Multimedia Extensions to Windows version 1.0, to allow devices that use
	auto-initialize DMA to function properly under Windows 3.0.
	
	However, under Windows version 3.1, the VDMAD (Virtual DMA Device) supports an
	auto-initialize DMA transfer, without using VADMAD.
	
	Do not use VADMAD with Windows 3.1 because it conflicts with VDMAD.
	
	The remainder of this article describes how an application can perform auto-
	initialize DMA transfers under Windows 3.0 and under Windows 3.1.
	
	MORE INFORMATION
	================
	
	Under Windows version 3.1, auto-initialize DMA is performed using the same
	method as under MS-DOS: set the auto-initialize bit in the mode register and
	perform the transfer.
	
	Under Windows 3.0, the application must call VADMAD to set the auto- initialize
	bit of the DMA mode register.
	
	If the VADMAD driver is installed, the GetVADMADEntry function, listed below,
	returns its address in ES:DI. If INT 2Fh returns 0 in ES, VADMAD is not
	installed, and attempts to call the address will cause a general protection
	fault (GP fault).
	
	  VADMAD_Entry dd ?
	
	  cProc  GetVADMADEntry <NEAR,PASCAL,PUBLIC><si,di>
	     xor  di,di                         ; Clear DI
	     mov  es,di                         ; Clear ES
	     mov  ax,1684h                      ; Get device entry
	     mov  bx,0444h                      ; VADMAD Device
	     int  2f                            ; Get function entry
	     mov  word ptr [VADMAD_ENTRY],di    ; Save entry point
	     mov  word ptr [VADMAD_ENTRY+2],es
	
	  cEnd
	
	Once the VADMAD address is available, set the DMA mode using the following code:
	
	     push dx                   ; Save DX
	     mov  dx,VADMAD_Service    ; Set VADMAD operation
	     call VADMAD_Entry         ; Set mode or channel
	     out  0Bh,al               ; Out to mode register
	     pop  dx                   ; Restore DX
	
	The values for the VADMAD_Service are defined as follows:
	
	  0: Set the VADMAD mode (put the desired mode into the AX register)
	  1: Set the VADMAD channel (put the desired channel into the AX register)
	
	Two calls to the VADMAD_Entry are required: one to set the mode and one to set
	the channel.
	
	Under Windows 3.1, set the mode by modifying the mode register, as follows:
	
	     mov  al,01010100b   ; Auto-Initialize, Write, Channel 0
	     out  0bh,al         ; Send the data to the DMA mode register.
	
	An application can use the same procedure to program channels 4 through 7, which
	are 16-bit channels; channels 0 through 3 are 8-bit channels. To program
	channels 4 through 7, use port D6h rather than 0Bh.
	
	Additional query words: 3.00 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWinDDKSearch kbWinDDK300 kbWinDDK310
	Version           : :3.0,3.1
	
	=============================================================================
	
