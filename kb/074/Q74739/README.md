---
layout: page
title: "Q74739: Implicit Casting by C Compiler Can Cause Problems"
permalink: /kb/074/Q74739/
---

## Q74739: Implicit Casting by C Compiler Can Cause Problems

	Article: Q74739
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
	
	When a function call is made in ANSI C, the compiler implicitly casts the
	arguments passed to the function to the types specified in the function's
	prototype. Implicit casting to promote signed integers or characters (int, char)
	to longer unsigned types (DWORD, WORD) can cause unexpected behavior. The
	difficulties occur because the signed shorter value is promoted by extending its
	sign bit to the high-order bits of the unsigned longer type.
	
	An application can avert the problems caused by sign extension by explicitly
	casting function arguments to unsigned short types.
	
	MORE INFORMATION
	================
	
	In accordance with the ANSI standard, if the shorter value has the sign bit set,
	the compiler first converts the value to a signed longer value by extending the
	sign. The compiler extends the sign by filling the high-order bits with 1s. It
	then converts the signed longer value to unsigned by adding to it the number
	that is one larger than the largest unsigned value of that type. This does not
	change the bit pattern in a 2s complement implementation. For more information,
	see Section 3.2.1.2 of the ANSI C Standard.
	
	To see how this can cause unexpected behavior, consider an application in the
	Microsoft Windows graphical environment that calls the GlobalAlloc function. The
	second parameter of the function, dwBytes, is an unsigned long quantity.
	However, in this application, this parameter contains an signed integer
	expression that evaluates to a number greater than the largest positive signed
	integer value (32,767):
	
	      HANDLE FAR PASCAL GlobalAlloc(WORD, DWORD);  // function prototype
	
	     int a, b; // int = short (16-bit) signed integer
	
	     a = 9500;
	     b = 4;
	
	     GlobalAlloc(GMEM_MOVEABLE, a*b);
	
	The result of a*b is 38,000 (1001010001110000), and the sign bit of the int is
	set. To implement the implicit cast to an unsigned long value (DWORD), the value
	is first converted to a signed long value:
	
	     11111111111111111001010001110000
	
	The value that is one greater than the largest unsigned long value is then added,
	as follows:
	
	        11111111111111111001010001110000
	     + 100000000000000000000000000000000
	     -----------------------------------
	        11111111111111111100101000111000 (4,294,939,760 decimal)
	
	GlobalAlloc attempts to allocate 4,294,939,760 bytes of memory rather than
	38,000, and it fails. The GlobalAlloc call in the application should be as
	follows:
	
	     GlobalAlloc(GMEM_MOVEABLE, (WORD)a*(WORD)b);
	
	Problems caused by implicit casting and sign extension are also encountered
	frequently when an application passes characters to the AnsiUpper and AnsiLower
	functions. The prototypes for these functions are as follows:
	
	     LPSTR FAR PASCAL AnsiUpper(LPSTR);
	     LPSTR FAR PASCAL AnsiLower(LPSTR);
	
	To pass a signed character to AnsiUpper,
	
	     AnsiUpper((DWORD)(BYTE)c) is correct,
	     AnsiUpper((DWORD)c) is incorrect.
	
	Additional query words: 3.00 3.10 no32bit
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	
