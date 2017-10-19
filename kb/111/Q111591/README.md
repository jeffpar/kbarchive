---
layout: page
title: "Q111591: BUG: IsBadStringPtr() Reports Bad String as Valid"
permalink: /kb/111/Q111591/
---

## Q111591: BUG: IsBadStringPtr() Reports Bad String as Valid

	Article: Q111591
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Under a particular condition, IsBadStringPtr() will report that a bad string is
	valid. If the pointer passed to IsBadStringPtr() refers to a block of memory of
	size 0xFFFF and is filled with all nonzero data, IsBadStringPtr() returns 0.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in Windows version 3.1. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	For IsBadStringPtr() to validate a string, it must be passed a pointer to valid
	memory and the string must contain a NULL character that terminates the string.
	
	The following code illustrates the error:
	
	  #include <windows.h>
	  #include <windowsx.h>
	  #include <memory.h>
	
	  LPSTR lpPtr;
	  BOOL fRet;
	
	       // GlobalAllocPtr is a macro in WINDOWSX.H
	  lpPtr = GlobalAllocPtr(GMEM_MOVEABLE, 0XFFFF);
	
	  _fmemset(lpPtr, 'Q', 0xFFFF);
	
	  Ret = IsBadStringPtr(lpPtr, 0xFFFF);
	
	  if (fRet)  // ... etcetera, fRet incorrectly contains zero.
	
	Additional query words: buglist3.10 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
