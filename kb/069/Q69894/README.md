---
layout: page
title: "Q69894: DOCERR: Guide to Programming LIBENTRY.ASM"
permalink: /kb/069/Q69894/
---

## Q69894: DOCERR: Guide to Programming LIBENTRY.ASM

{% raw %}

	Article: Q69894
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Pages 20-22 and 20-23 of the "Microsoft Windows Software Development Kit Guide
	to Programming" for versions 3.0 and 3.1 include incorrect code for the Windows
	dynamic-link library (DLL) entry routine, LIBENTRY.ASM.
	
	RESOLUTION
	==========
	
	The following is the correct code:
	
	     PAGE,132
	     ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
	     ;
	     ;       LIBENTRY.ASM
	     ;
	     ;       Windows dynamic-link library entry routine
	     ;
	     ;   This module generates a code segment called INIT_TEXT.
	     ;   It initializes the local heap if one exists and then calls
	     ;   the C routine LibMain which should have the form:
	     ;   BOOL FAR PASCAL LibMain(HANDLE hInstance,
	     ;                           WORD   wDataSeg,
	     ;                           WORD   cbHeap,
	     ;                           LPSTR  lpszCmdLine);
	     ;
	     ;   The result of the call to LibMain is returned to Windows.
	     ;   The C routine should return TRUE if it completes initialization
	     ;   successfully, FALSE if some error occurs.
	     ;
	     ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
	
	     include cmacros.inc
	
	     externFP <LibMain>               ; the C routine to be called
	
	     createSeg INIT_TEXT, INIT_TEXT, BYTE, PUBLIC, CODE
	     sBegin    INIT_TEXT
	     assumes CS,INIT_TEXT
	
	     ?PLM=0                           ; 'C'naming
	     externA  <_acrtused>             ; ensures that Win DLL startup code
	                                      ; is linked
	
	     ?PLM=1                           ; 'PASCAL' naming
	     externFP <LocalInit>             ; Windows heap init routine
	
	     cProc   LibEntry, <PUBLIC,FAR>   ; entry point into DLL
	
	     cBegin
	             push    di               ; handle of the module instance
	             push    ds               ; library data segment
	             push    cx               ; heap size
	             push    es               ; command line segment
	             push    si               ; command line offset
	
	             ; if we have some heap then initialize it
	             jcxz    callc            ; jump if no heap specified
	
	             ; call the Windows function LocalInit to set up the heap
	             ; LocalInit((LPSTR)start, WORD cbHeap);
	             xor     ax,ax
	             cCall   LocalInit <ds, ax, cx>
	
	             or      ax,ax            ; did it do it ok ?
	             jz      error            ; quit if it failed
	
	             ; invoke the C routine to do any special initialization
	     callc:
	             call    LibMain          ; invoke the 'C' routine
	                                      ; (result in AX)
	             jmp short exit           ; LibMain is responsible for
	                                      ; stack clean up
	
	     error:
	             pop     si               ; clean up stack on a LocalInit error
	             pop     es
	             pop     cx
	             pop     ds
	             pop     di
	
	     exit:
	
	     cEnd
	
	     sEnd   INIT_TEXT
	
	     end LibEntry
	
	Additional query words: 3.00 3.10 docerr
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	

{% endraw %}
