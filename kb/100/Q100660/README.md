---
layout: page
title: "Q100660: INFO: Macros to Facilitate Porting Applications to Windows NT"
permalink: /kb/100/Q100660/
---

## Q100660: INFO: Macros to Facilitate Porting Applications to Windows NT

	Article: Q100660
	Product(s): Microsoft C Compiler
	Version(s): winnt:1.0,2.0,2.1,4.0,5.0
	Operating System(s): 
	Keyword(s): kbGenInfo kbLangC kbVC kbVC100 kbVC200 kbVC210 kbVC400 kbVC500 kbDSupport kbArtTypeINF
	Last Modified: 28-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 1.0, 2.0, 2.1, 4.0 
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Many applications written for Windows use variations of C Run-time functions
	which specifically use NEAR or FAR pointers. Applications written for Windows NT
	use the flat memory model, therefore, these function variations are not
	supported. When porting from Windows to Windows NT, calls to these functions
	will need to be modified.
	
	MORE INFORMATION
	================
	
	The following is a list of macros that make the porting of applications to
	Microsoft Windows NT easier:
	
	     // Windows NT Macros
	
	     #if defined(WIN32)
	
	     #define _fmemcpy(x,y,z)    memcpy(x,y,z)
	     #define _fmemcmp(x,y,z)    memcmp(x,y,z)
	     #define _fmemset(x,y,z)    memset(x,y,z)
	     #define _fmemicmp(x,y,z)   memicmp(x,y,z)
	     #define _fmemmove(x,y,z)   memmove(x,y,z)
	
	     #define _fstrcpy(x,y)      strcpy(x,y)
	     #define _fstrcmp(x,y)      strcmp(x,y)
	     #define _fstrcat(x,y)      strcat(x,y)
	     #define _fstrlen(x)        strlen(x)
	     #define _fstricmp(x,y)     stricmp(x,y)
	     #define _fstrstr(x,y)      strstr(x,y)
	     #define _fstrncpy(x,y,z)   strncpy(x,y,z)
	     #define _fstrncmp(x,y,z)   strncmp(x,y,z)
	     #define _fstrupr(x)        strupr(x)
	     #define _fstrlwr(x)        strlwr(x)
	     #define _fstrchr(x,y)      strchr(x,y)
	     #define _fstrrchr(x,y)     strrchr(x,y)
	     #define _fstrnicmp(x,y,z)  strnicmp(x,y,z)
	     #define _fstrpbrk(x,y)     strpbrk(x,y)
	
	     #define _nfree(x)          free(x)
	     #define _nmalloc(x)        malloc(x)
	
	     #define _loadds
	
	     #define NT_GetWndInstance(hwnd) (HINSTANCE)GetWindowLong(hwnd,
	         GWL_HINSTANCE)
	
	     #define NT_GetWndID(hwnd)       (UINT)GetWindowLong(hwnd, GWL_ID);
	
	     #define NT_ParseWM_COMMAND(id, ntfy, hwnd, wPar, lPar) \ 
	         (id = LOWORD(wPar), ntfy = HIWORD(wPar), hwnd = (HWND)lPar)
	
	     #define NT_PostWM_COMMAND(hwnd, id, ntfy, hwndChild) \ 
	
	     PostMessage(hwnd,WM_COMMAND,(UINT)MAKELONG(id,ntfy),(LONG)hwndChild)
	
	     #define NT_SendWM_COMMAND(hwnd, id, ntfy, hwndChild) \ 
	         SendMessage(hwnd,
	     WM_COMMAND,(UINT)MAKELONG(id,ntfy),(LONG)hwndChild)
	
	     #if !defined(LONG2POINT)
	     #define LONG2POINT(l,pt) ((pt).x=(SHORT)LOWORD(l),
	
	        (pt).y=(SHORT)HIWORD(l))
	
	     #endif
	
	     // Windows NT Equivalents for Windows
	
	     #else
	     #define NT_GetWndInstance(hwnd) (HINSTANCE)GetWindowWord(hwnd,
	
	         GWW_HINSTANCE)
	
	     #define NT_GetWndID(hwnd)       (UINT)GetWindowWord(hwnd, GWW_ID);
	
	     #define NT_ParseWM_COMMAND(id, ntfy, hwnd, wPar, lPar) \ 
	         (id = wPar, ntfy = HIWORD(lPar), hwnd = (HWND)LOWORD(lPar))
	
	     #define NT_PostWM_COMMAND(hwnd, id, ntfy, hwndChild) \ 
	         PostMessage(hwnd, WM_COMMAND, (UINT)id, MAKELONG(hwndChild, ntfy))
	
	     #define NT_SendWM_COMMAND(hwnd, id, ntfy, hwndChild) \ 
	         SendMessage(hwnd, WM_COMMAND, (UINT)id, MAKELONG(hwndChild, ntfy))
	
	     #endif
	
	Additional query words:
	
	======================================================================
	Keywords          : kbGenInfo kbLangC kbVC kbVC100 kbVC200 kbVC210 kbVC400 kbVC500 kbDSupport kbArtTypeINF 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbvc100 kbVC500 kbVC200 kbVC210 kbVC32bitSearch kbVC500Search
	Version           : winnt:1.0,2.0,2.1,4.0,5.0
	Issue type        : kbinfo
	
	=============================================================================
	
