---
layout: page
title: "Q134405: PRB: WaveOutOpen()/WaveInOpen() Returns MMSYSERR_INVALPARAM"
permalink: kb/134/Q134405/
---

## Q134405: PRB: WaveOutOpen()/WaveInOpen() Returns MMSYSERR_INVALPARAM

	Article: Q134405
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1; winnt:
	Operating System(s): 
	Keyword(s): kbprb
	Last Modified: 08-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	- The Microsoft Foundation Classes (MFC), included with:
	   - Microsoft Visual C++ 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The WaveOutOpen() and WaveInOpen() functions return an MMSYSERR_INVALPARAM error
	when using a window handle as a callback mechanism.
	
	CAUSE
	=====
	
	The documentation for the WaveOutOpen() and WaveInOpen() functions specifies
	that the data type of the dwCallback parameter should be a DWORD. However, when
	the symbol STRICT is defined (using #define), HWND is no longer equated to UINT.
	Instead, it is a NEAR pointer. Therefore, simply casting a window handle to a
	DWORD fails when STRICT is defined. The following code illustrates the statement
	causing this error:
	
	     WaveOutOpen(..., (DWORD) hWnd, ..., CALLBACK_WINDOW)
	
	RESOLUTION
	==========
	
	A simple workaround is to cast a window handle to UINT before casting it to a
	DWORD. For example:
	
	     WaveOutOpen(..., (DWORD) (UINT) hWnd, ...)
	
	MORE INFORMATION
	================
	
	STRICT is a macro which enhances type safety for Windows 3.1 applications. If it
	is defined, several data types become distinct. For instance, HDC and HWND
	become different types when STRICT is defined.
	
	By default, Microsoft Foundation Classes (MFC) versions 2.0 and above use STRICT
	type checking. As a result, the problem described in this article usually occurs
	in MFC-based applications. In addition, this error occurs in any API call where
	a window handle is cast to a DWORD (32-bits). Please note that this article only
	applies to 16-bit applications.
	
	Additional query words: 2.00 3.10 wave audio invalid window
	
	======================================================================
	Keywords          : kbprb 
	Technology        : kbAudDeveloper kbMFC kbSDKSearch kbWinSDKSearch
	Version           : WINDOWS:3.1; winnt:
	Issue type        : kbprb
	
	=============================================================================
	
