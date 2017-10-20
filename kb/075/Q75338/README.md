---
layout: page
title: "Q75338: Determining Windows Version, Mode from MS-DOS App"
permalink: /kb/075/Q75338/
---

## Q75338: Determining Windows Version, Mode from MS-DOS App

{% raw %}

	Article: Q75338
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following assembly language code fragment can be used in an MS-DOS- based
	application to determine if it is running in a Windows MS-DOS window, and if so,
	which version and mode of Windows is running.
	
	  test_win proc near
	
	  ; check for Windows 3.1
	
	      mov     ax,160ah                ; WIN31CHECK
	      int     2fh                     ; check if running under Win 3.1.
	      or      ax,ax
	      jz      RunningUnderWin31       ; can check if running in standard
	                                      ; or enhanced mode
	
	  ; check for Windows 3.0 enhanced mode
	
	      mov     ax,1600h                ; WIN386CHECK
	      int     2fh
	      test    al,7fh
	      jnz     RunningUnderWin30Enh    ; enhanced mode
	
	  ; check for 3.0 WINOLDAP
	
	      mov     ax,4680h                ; IS_WINOLDAP_ACTIVE
	      int     2fh
	      or      ax,ax                   ; running under 3.0 derivative?
	      jnz     NotRunningUnderWin
	
	  ; rule out MS-DOS 5.0 task switcher
	
	      mov     ax,4b02h                ; detect switcher
	      push    bx
	      push    es
	      push    di
	      xor     bx,bx
	      mov     di,bx
	      mov     es,bx
	      int     2fh
	      pop     di
	      pop     es
	      pop     bx
	      or      ax,ax
	      jz      NotRunningUnderWin      ; MS-DOS 5.0 task switcher found
	
	  ; check for standard mode Windows 3.0
	
	      mov     ax,1605h                ; PMODE_START
	      int     2fh
	      cmp     cx,-1
	      jz      RunningUnderWin30Std
	
	  ; check for real mode Windows 3.0
	
	      mov     ax,1606h                ; PMODE_STOP
	      int     2fh                     ; in case someone is counting
	      ; Real mode Windows 3.0 is running
	      jmp     NotRunningUnderWin
	
	RunningUnderWin30Std:
	
	      ; Standard mode Windows 3.0 is running
	      jmp     NotRunningUnderWin
	
	RunningUnderWin31:
	
	      ; At this point: CX == 3 means Windows 3.1 enhanced mode
	      ;                CX == 2 means Windows 3.1 standard mode
	      jmp     NotRunningUnderWin
	
	RunningUnderWin30Enh:
	
	      ; Enhanced mode Windows 3.0 is running
	
	NotRunningUnderWin:
	
	          ret
	
	  test_win endp
	
	MORE INFORMATION
	================
	
	Applications for Windows should use the GetWinFlags() function to determine
	which version of Windows is running. For more information, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q131371 Determining System Version from a Windows-Based Application
	
	Additional query words: 3.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	

{% endraw %}
