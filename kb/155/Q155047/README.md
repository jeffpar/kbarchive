---
layout: page
title: "Q155047: PRB: A2041 Initializing a Large STRUCT"
permalink: /kb/155/Q155047/
---

## Q155047: PRB: A2041 Initializing a Large STRUCT

{% raw %}

	Article: Q155047
	Product(s): Microsoft Macro Assembler
	Version(s): 6.0,6.1,6.11
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 04-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), versions 6.0, 6.1, 6.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Attempting to initialize a structure causes one or more of the following
	assembly errors:
	
	  error A2041: string or text literal too long
	  error A2039: line too long
	
	CAUSE
	=====
	
	MASM 6.x has a 255-character line limit. Even when the initialization spans
	multiple lines, the entire structure initialization is considered one line and
	is subject to the 255-character limit.
	
	RESOLUTION
	==========
	
	The following sample illustrates three possible workarounds:
	
	- Remove white space, comments, line-continuation characters, and so on, in an
	  effort to reduce the total initialization string to less than 255 characters.
	
	- Break up the STRUCT into helper STRUCTS defining and initializing the
	  sub-STRUCTs. Precede this by a label of the type of the original STRUCT.
	
	- Define a label of the type of the STRUCT and follow this with the individual
	  definition and initialization of each STRUCT member.
	
	MORE INFORMATION
	================
	
	Sample Code
	-----------
	
	  ; Assemble /c /Fl and examine list file to verify output.
	
	  ; To test each case, set the following EQU. Set to 0 to
	  ; demonstrate the A2041 error. Set to 1, 2, 3 to test
	  ; each workaround in turn.
	
	  WorkaroundA2041 EQU 0
	
	  .MODEL SMALL, C
	
	  .NOLIST
	
	  INCLUDE WIN.INC
	
	  .LIST
	
	  ;---------------------------------------------------------
	  ; Example structure adapted from WINDOWS.H
	
	  OPENFILENAME STRUCT 1t
	      lStructSize           DWORD      ?
	      hwndOwner             HWND       ?
	      hInstance             HINSTANCE  ?
	      lpstrFilter           LPCSTR     ?
	      lpstrCustomFilter     LPSTR      ?
	      nMaxCustFilter        DWORD      ?
	      nFilterIndex          DWORD      ?
	      lpstrFile             LPSTR      ?
	      nMaxFile              DWORD      ?
	      lpstrFileTitle        LPSTR      ?
	      nMaxFileTitle         DWORD      ?
	      lpstrInitialDir       LPCSTR     ?
	      lpstrTitle            LPCSTR     ?
	      Flags                 DWORD      ?
	      nFileOffset           UINT       ?
	      nFileExtension        UINT       ?
	      lpstrDefExt           LPCSTR     ?
	      lCustData             LPARAM     ?
	      lpfnHook              FARPROC    ?
	      lpTemplateName        LPCSTR     ?
	  OPENFILENAME ENDS
	
	  IF WorkaroundA2041 EQ 2
	
	  ;---------------------------------------------------------
	  ; helper STRUCTs derived by breaking up the original
	  ; OPENFILENAME STRUCT
	
	  OPENFILENAME_1 STRUCT 1t
	      lStructSize           DWORD      ?
	      hwndOwner             HWND       ?
	      hInstance             HINSTANCE  ?
	      lpstrFilter           LPCSTR     ?
	  OPENFILENAME_1 ENDS
	
	  OPENFILENAME_2 STRUCT 1t
	      lpstrCustomFilter     LPSTR      ?
	      nMaxCustFilter        DWORD      ?
	      nFilterIndex          DWORD      ?
	      lpstrFile             LPSTR      ?
	  OPENFILENAME_2 ENDS
	
	  OPENFILENAME_3 STRUCT 1t
	      nMaxFile              DWORD      ?
	      lpstrFileTitle        LPSTR      ?
	      nMaxFileTitle         DWORD      ?
	      lpstrInitialDir       LPCSTR     ?
	  OPENFILENAME_3 ENDS
	
	  OPENFILENAME_4 STRUCT 1t
	      lpstrTitle            LPCSTR     ?
	      Flags                 DWORD      ?
	      nFileOffset           UINT       ?
	      nFileExtension        UINT       ?
	  OPENFILENAME_4 ENDS
	
	  OPENFILENAME_5 STRUCT 1t
	      lpstrDefExt           LPCSTR     ?
	      lCustData             LPARAM     ?
	      lpfnHook              FARPROC    ?
	      lpTemplateName        LPCSTR     ?
	  OPENFILENAME_5 ENDS
	
	  ENDIF
	
	  .DATA
	
	  IF WorkaroundA2041 EQ 0
	
	  ;---------------------------------------------------------
	  ; This STRUCT definition and initialization generates:
	  ;   error A2041: string or text literal too long
	  ;   error A2039: line too long
	
	      ofn OPENFILENAME { SIZEOF(OPENFILENAME), ; lStructSize DWORD
	                         NULL,    ; hwndOwner         HWND
	                         NULL,    ; hInstance         HINSTANCE
	                         NULL,    ; lpstrFilter       LPCSTR
	                         NULL,    ; lpstrCustomFilter LPSTR
	                         0,       ; nMaxCustFilter    DWORD
	                         0,       ; nFilterIndex      DWORD
	                         NULL,    ; lpstrFile         LPSTR
	                         0,       ; nMaxFile          DWORD
	                         NULL,    ; lpstrFileTitle    LPSTR
	                         0,       ; nMaxFileTitle     DWORD
	                         NULL,    ; lpstrInitialDir   LPCSTR
	                         NULL,    ; lpstrTitle        LPCSTR
	                         0,       ; Flags             DWORD
	                         0,       ; nFileOffset       UINT
	                         0,       ; nFileExtension    UINT
	                         NULL,    ; lpstrDefExt       LPCSTR
	                         0,       ; lCustData         LPARAM
	                         NULL,    ; lpfnHook          FARPROC
	                         NULL }   ; lpTemplateName    LPCSTR
	  ENDIF
	
	  IF WorkaroundA2041 EQ 1
	
	  ;---------------------------------------------------------
	  ; This STRUCT definition and initialization will assemble
	  ; due to keeping the total character count down - removing
	  ; comments, white space, line continuation characters, etc.
	
	      ofn OPENFILENAME { SIZEOF(OPENFILENAME), NULL, NULL,
	      NULL, NULL, 0, 0, NULL, 0, NULL, 0, NULL, NULL, 0, 0,
	      0, NULL, 0, NULL, NULL }
	
	  ENDIF
	
	  IF WorkaroundA2041 EQ 2
	
	  ;---------------------------------------------------------
	  ; This STRUCT definition and initialization will assemble
	  ; by breaking up the original STRUCT and declaring the
	  ; STRUCTs derived from this breakup.  This is preceded by
	  ; defining a LABEL to refer to the entire region of memory.
	  ;
	
	      ofn LABEL OPENFILENAME
	
	      OPENFILENAME_1 { SIZEOF(OPENFILENAME), ; DWORD lStructSize
	                       NULL,    ; hwndOwner         HWND
	                       NULL,    ; hInstance         HINSTANCE
	                       NULL }   ; lpstrFilter       LPCSTR
	      OPENFILENAME_2 { NULL,    ; lpstrCustomFilter LPSTR
	                       0,       ; nMaxCustFilter    DWORD
	                       0,       ; nFilterIndex      DWORD
	                       NULL }   ; lpstrFile         LPSTR
	      OPENFILENAME_3 { 0,       ; nMaxFile          DWORD
	                       NULL,    ; lpstrFileTitle    LPSTR
	                       0,       ; nMaxFileTitle     DWORD
	                       NULL }   ; lpstrInitialDir   LPCSTR
	      OPENFILENAME_4 { NULL,    ; lpstrTitle        LPCSTR
	                       0,       ; Flags             DWORD
	                       0,       ; nFileOffset       UINT
	                       0    }   ; nFileExtension    UINT
	      OPENFILENAME_5 { NULL,    ; lpstrDefExt       LPCSTR
	                       0,       ; lCustData         LPARAM
	                       NULL,    ; lpfnHook          FARPROC
	                       NULL }   ; lpTemplateName    LPCSTR
	
	  ENDIF
	
	  IF WorkaroundA2041 EQ 3
	
	  ;---------------------------------------------------------
	  ; This STRUCT definition and initialization will assemble
	  ; by defining a LABEL to refer to a region of memory
	  ; followed by explicitly declaring data for each of the
	  ; members of the STRUCT.
	
	      ofn LABEL OPENFILENAME
	
	          DWORD      SIZEOF(OPENFILENAME) ; lStructSize
	          HWND       NULL                 ; hwndOwner
	          HINSTANCE  NULL                 ; hInstance
	          LPCSTR     NULL                 ; lpstrFilter
	          LPSTR      NULL                 ; lpstrCustomFilter
	          DWORD      0                    ; nMaxCustFilter
	          DWORD      0                    ; nFilterIndex
	          LPSTR      NULL                 ; lpstrFile
	          DWORD      0                    ; nMaxFile
	          LPSTR      NULL                 ; lpstrFileTitle
	          DWORD      0                    ; nMaxFileTitle
	          LPCSTR     NULL                 ; lpstrInitialDir
	          LPCSTR     NULL                 ; lpstrTitle
	          DWORD      0                    ; Flags
	          UINT       0                    ; nFileOffset
	          UINT       0                    ; nFileExtension
	          LPCSTR     NULL                 ; lpstrDefExt
	          LPARAM     0                    ; lCustData
	          FARPROC    NULL                 ; lpfnHook
	          LPCSTR     NULL                 ; lpTemplateName
	
	  ENDIF
	
	  END
	
	Additional query words: 6.00 6.10 kbdsh
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbMASMsearch kbAudDeveloper kbMASM600 kbMASM610 kbMASM611
	Version           : :6.0,6.1,6.11
	
	=============================================================================
	

{% endraw %}
