---
layout: page
title: "Q72814: Windows 3.0 Does Not Support Auto-Initialize DMA"
permalink: kb/072/Q72814/
---

## Q72814: Windows 3.0 Does Not Support Auto-Initialize DMA

	Article: Q72814
	Product(s): Microsoft Windows Device Driver Kit
	Version(s): 3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Device Development Kit (DDK) for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In version 3.0 of the Microsoft Windows graphical environment, enhanced mode
	does not support the Auto-Initialize mode of the 8237 direct memory access (DMA)
	controller. This is due to a limitation of the virtual DMA device (VDMAD). This
	article discusses one possible method (short of modifying VDMAD) of partially
	supporting the Auto-Initialize mode.
	
	MORE INFORMATION
	================
	
	The VDMAD does not support the Auto-Initialize mode of the 8237 DMA controller.
	If an application attempts to program the DMA controller in Auto-Initialize
	mode, VDMAD terminates the application.
	
	To work around this behavior, it is necessary to write a small virtual device
	driver (VxD) that hooks the VDMAD_Mask_Channel service, and provides a
	replacement service. (In the following code, this VxD is referred to as
	VXDMAD.)
	
	Please note that the following code assumes that all operations will be in the
	system virtual machine (the Windows VM) and that only one DMA channel uses
	Auto-DMA at a time. This functionality could be extended circumstances require
	it.
	
	To begin, VXDMAD must hook the VDMAD_Mask_Channel service during Phase 2 of the
	protected mode initialization (Device_Init):
	
	  BeginProc XDMA_Device_Init
	
	          mov     eax, VDMAD_Mask_Channel
	          mov     esi, OFFSET32 XDMA_Mask_Channel
	          VMMcall Hook_Device_Service
	          mov     [Old_VDMAD_Mask_Channel], esi
	          clc
	          ret
	
	  EndProc XDMA_Device_Init
	
	In VXDMAD's XDMA_Mask_Channel service, if the channel is owned by VXDMAD, ignore
	the call to mask the DMA channel. See below for how VXDMAD retrieves the mode
	and channel to look for.
	
	  BeginProc XDMA_Mask_Channel
	          pushfd
	
	          cmp     eax, [XDMA_Channel]         ; Is it our channel??
	          jne     XDMA_Not_Our_Channel        ; No. Let VDMAD mask it.
	
	          test    [XDMA_Mode], DMA_AutoInit   ; Is it auto-init?
	          jz      XDMA_Not_Our_Channel        ; No. Let VDMAD mask it.
	
	          popfd                               ; Ours. Do nothing!
	          ret
	
	  XDMA_Not_Our_Channel:
	
	          popfd                               ; Of course.
	          jmp     [Old_VDMA_Mask_Channel]     ; Let old service take it.
	
	  EndProc XDMA_Mask_Channel
	
	To make things clear, the data segment for this fictitious VxD should be defined
	as follows:
	
	  VxD_DATA_SEG
	
	  ;;  A place to store the far pointer to the old VDMAD service for
	  ;;  masking the DMA channel -- it must be called!
	  Old_VDMAD_Mask_Channel  dd      0
	
	  ;;  The channel (handle) on which this VxD will allow Auto-DMA to
	  ;;  occur.
	  XDMA_Channel            dd      0
	
	  ;;  The mode that the application has requested the DMA channel to be
	  ;;  in -- this may or may not be Auto-DMA mode.
	  XDMA_Mode               db      0
	
	  VxD_DATA_ENDS
	
	This brings us to the next thing VXDMAD must do. VXDMAD checks the channel and
	mode to ensure that it should not let the VDMAD mask the channel. VXDMAD can
	perform the check only if VXDMAD knows the channel and mode the application
	uses. Therefore, VXDMAD must also implement a communications method for the
	application to tell this VXDMAD the channel and mode to monitor. The easiest way
	to provide a communications method is to use the one API that a VxD can "export"
	to applications. For this example, VXDMAD only needs a protected mode API;
	however, there is no reason why this could not be done for the real mode API.
	
	The two functions VXDMAD must implement are: one to set the channel to allow
	Auto-DMA, and one to set the mode for that channel. These functions are
	implemented as follows:
	
	  XDMA_API_SET_CHANNEL    equ     0
	  XDMA_API_SET_MODE       equ     1
	
	  BeginProc XDMA_Protect_Mode_API
	
	          movzx   eax, [ebp.Client_AH]        ; Client AH = func number
	          cmp     eax, XDMA_API_SET_CHANNEL   ; Set the channel?
	          jz      XDMA_Set_Channel            ; If so, do it.
	
	          cmp     eax, XDMA_API_SET_MODE      ; Set the mode?
	          jz      XDMA_Set_Mode               ; If so, do it.
	
	  XDMA_PM_API_Fail:
	
	          ;;  This is a failed exit -- set client's carry and return
	
	          or      [ebp.Client_Flags], CF_Mask
	          ret
	
	  XDMA_PM_API_Exit:
	
	          ;;  This is a successful exit -- clear client's
	          ;;  carry and return
	
	          and     [ebp.Client_Flags], NOT CF_Mask
	          ret
	
	  EndProc XDMA_Protect_Mode_API
	
	The XDMA_Set_Mode function must allow the calling application to set the state of
	the "auto-init" mode bit used on DMA transfers. This function only tells VXDMAD
	if the DMA channel (set by XDMA_Set_Channel) is in auto-init mode. The
	application still needs to execute the OUT instruction to the mode port, with
	the auto-init bit cleared, to set the physical DMA mode and have that setting
	reflected in the VM's virtual state, which is held by the VDMAD that traps the
	port.
	
	  BeginProc XDMA_Set_Mode
	
	          VMMcall Test_Sys_VM_Handle      ; Are we in the system VM?
	          jnz     XDMA_PM_API_Fail        ; No. Set carry and ret
	
	          mov     al, [ebp.Client_AL]     ; AL = mode
	          and     al, DMA_AutoInit        ; Only want auto-init bit
	          mov     [XDMA_Mode], al         ; Save it
	
	          jmp     XDMA_PM_API_Exit        ; Return carry clear
	
	  EndProc XDMA_Set_Mode
	
	The XDMA_Set_Channel function virtualizes the channel specified (in AL) so that
	VXDMAD can take control when the port (physical) mode is set.
	
	  BeginProc XDMA_Set_Channel
	
	          xor     eax, eax                    ; Clear eax
	          cmp     [XDMA_Channel], eax         ; Are we handling a port?
	          jne     XDMA_PM_API_Fail            ; Yep! Fail one at a time!
	
	          VMMcall Get_Sys_VM_Handle           ; EBX = system VM handle
	          mov     al, [ebp.Client_AL]         ; Get channel # to
	                                              ;   virtualize
	          mov     esi, OFFSET32 XDMA_Handler  ; Handler for this channel
	          VxDcall VDMAD_Virtualize_Channel    ; Attempt virtualization
	          jc      XDMA_PM_API_Fail            ; Fail! Set carry and ret
	
	          mov     [XDMA_Channel], eax         ; Save handle
	          jmp     XDMA_PM_API_Exit            ; Return success!
	
	  EndProc XDMA_Set_Channel
	
	The only function remaining is the handler for the DMA channel. This handler is
	called every time the physical state of the DMA channel that VXDMAD is
	virtualizing changes. This will force the DMA_AutoInit bit to be set if the
	application has requested that it be set (using XDMA_API_SET_MODE and
	XDMA_API_SET_CHANNEL).
	
	  BeginProc XDMA_Handler
	
	          VMMcall Test_Sys_VM_Handle      ; We in system VM?
	          jnz     XDMA_Handler_Exit       ; No! Exit...
	
	          VxDcall VDMAD_Get_Virt_State    ; Need to set mode bit
	          and     dl, NOT DMA_AutoInit    ; Clear if set (safety)
	          or      dl, [XDMA_Mode]         ; Set auto-init if we need to
	          VxDcall VDMAD_Set_Virt_State    ; Tell VDMAD about it
	
	          VxDcall VDMAD_Default_Handler   ; Continue with VDMAD...
	
	  XDMA_Handler_Exit:
	
	          ret
	
	  EndProc XDMA_Handler
	
	Once the VXDMAD VxD is installed (from the SYSTEM.INI file), an application must
	contain code similar to the following to use its services (the Interrupt 2Fh
	functions are documented Appendix D of the "Microsoft Windows Device Development
	Kit Virtual Device Adaptation Guide" for Windows 3.0):
	
	  VXDMAD_API      dd      0
	
	          .
	          .
	          .
	
	          mov     ax, 1600h               ; Enhanced mode check
	          int     2Fh                     ; Shazam!
	          test    al, 7Fh                 ; Is enhanced mode running?
	          jz      not_running_enhanced    ; Can't use VXDMAD --
	                                          ;   Not there!
	
	          mov     ax, 1684h               ; Get device API pointer
	          mov     bx, VXDMAD_Dev_ID       ;   for the VXDMAD VxD
	          int     2Fh                     ; Get it
	          mov     word ptr VXDMAD_API, di ;   and save the address
	          mov     word ptr VXDMAD_API+2, es
	
	          mov     ax, es                  ; Is VXDMAD installed?
	          or      ax, di
	          jz      vxd_not_installed       ; If not, can't use it
	
	          .
	          .
	          .
	
	If the above code succeeds, then the VXDMAD's API can be called by the following
	code:
	
	          mov     ah, XDMA_API_SET_CHANNEL
	          mov     al, Channel_To_Virtualize
	          call    VXDMAD_API
	          jc      This_Call_Failed        ; Carry set if failure!
	          mov     ah, XDMA_API_SET_MODE
	          mov     al, Mode_For_Channel    ; With auto-init bit set or
	                                          ;   clear
	          call    VXDMAD_API
	          jc      This_Call_Failed        ; Carry set if failed!
	
	If the above two calls succeed, the application can use auto- initialize mode.
	The application must execute an OUT instruction to set the physical mode of the
	channel -- WITH THE AUTO-INIT BIT CLEARED! VXDMAD sets the Auto-Initialize bit
	at the right time. The following information is from RichP in response to a
	customer needing to use Loop-mode (a/k/a Auto-Initialize mode) DMA (NeilSa had
	the SR; the SR number is G900612-110):
	
	In 3.0 this auto-initialize mode isn't supported directly. The problem involves
	trying to track ownership of the DMA transfer. VDMAD was designed for per-VM DMA
	transfers, but the nature of this device sounds like it is global DMA. It would
	be possible for them to write a very small and simple VxD which calls VDMAD to
	virtualize their DMA channels. VDMAD provides services for additional VxD's to
	handle special types of DMA. I have already helped an OEM write a similar device
	for a network adapter which uses global DMA. This is the only proposed
	work-around at this time.
	
	Additional query words: 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWinDDKSearch kbWinDDK300
	Version           : :3.0
	
	=============================================================================
	
