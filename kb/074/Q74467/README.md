---
layout: page
title: "Q74467: INFO: Using GDI-Synthesized Italic Fonts"
permalink: /kb/074/Q74467/
---

## Q74467: INFO: Using GDI-Synthesized Italic Fonts

	Article: Q74467
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1,95; winnt:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbOSWinNT350 kbOSWinNT351 kbOSWin95 kbSDKWin16
	Last Modified: 16-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	- Microsoft Win32 Application Programming Interface (API), used with:
	   - Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	   - Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	   - Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In the Microsoft Windows graphical environment, when an application uses an
	italic font synthesized by the Graphics Device Interface (GDI), each character
	and its whole character cell are "sheared," or slanted, to the right, which can
	cause some unexpected results.
	
	MORE INFORMATION
	================
	
	The capital H in the example below illustrates how GDI synthesizes an italic
	font:
	
	  ..........                   ..........
	  .        .                  .        .
	  . |    | .                 . |    | .
	  . |    | .                 . |    | .
	  . |----| . italicizes to  . |----| .
	  . |    | .               . |    | .
	  . |    | .               . |    | .
	  .        .              .        .
	  ..........              ..........
	
	Note two items in this case:
	
	- If the text background color is changed so that it does not match the window
	  background color, the text background color occupies the sheared character
	  cell (in other words, it is also slanted). Gaps occur in the background where
	  normal text is adjacent to italic text. The ExtTextOut() function can be used
	  to compensate for this effect if the ETO_OPAQUE flag is used.
	
	- The italic character is farther to the right in relation to the lower-left
	  corner of the character cell than is the normal character. Therefore, if
	  normal and italic text start at the same x coordinate on different lines, the
	  italic text appears farther to the right.
	
	To determine the number of units by which the character cell is sheared, call the
	GetTextMetrics function to fill a TEXTMETRIC data structure with information
	about the font. The tmOverhang member describes the amount of shear.
	
	Additional query words: 3.00 3.10 3.50 4.00 win16sdk
	
	======================================================================
	Keywords          : kbOSWinNT350 kbOSWinNT351 kbOSWin95 kbSDKWin16 
	Technology        : kbAudDeveloper kbSDKSearch kbWin32sSearch kbWin32API kbWinSDKSearch
	Version           : WINDOWS:3.1,95; winnt:3.5,3.51,4.0
	Issue type        : kbinfo
	
	=============================================================================
	
