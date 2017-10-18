---
layout: page
title: "Q22242: PRB: Area Around Text and Remainder of Window Different Colors"
permalink: kb/022/Q22242/
---

## Q22242: PRB: Area Around Text and Remainder of Window Different Colors

	Article: Q22242
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1,95; winnt:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbOSWinNT350 kbOSWinNT351 kbOSWinNT400 kbOSWin95 kbSDKWin16
	Last Modified: 11-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	- Microsoft Win32 Application Programming Interface (API), used with:
	   - Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	   - Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When text is painted into a window, an area around the text is a different color
	than the remainder of the window.
	
	CAUSE
	=====
	
	The area around the text is painted with a solid color while the remainder of
	the window is painted using a dithered color.
	
	RESOLUTION
	==========
	
	To make the area around the text and the remainder of the window have the same
	color, perform one of the following two steps:
	
	- Use a solid color for the window background, and use the same color for the
	  text background. To ensure that a color is a solid color, use the
	  GetNearestColor function. This function returns the nearest solid color
	  available to represent the specified color.
	
	  -or-
	
	- Call the SetBkMode function to specify TRANSPARENT mode for the text. Doing
	  so prevents Windows from painting the area behind the text. The window
	  background color shows through instead.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	By default, when an application paints text into its window, Windows fills the
	area around the character with the current background color. Windows always uses
	a solid color for this purpose.
	
	When an application registers a window class, it specifies a handle to a brush
	that Windows uses to paint the window background. On some output devices,
	brushes can create dithered colors. On one of these devices, the area behind
	painted text might have a different color than the remainder of the window.
	
	The following code specifies the window background color:
	
	     #define ELANGREEN  0x003FFF00
	     pTemplateClass->hbrBackground = CreateSolidBrush((DWORD)ELANGREEN);
	
	The following code specifies the color used to paint around text and draws some
	text into a device context:
	
	     #define SZ -1
	     SetBkColor(hDC, (DWORD)ELANGREEN);
	     DrawText(hDC, (LPSTR)"text", SZ, (LPRECT)&Rect, DT_BOTTOM);
	
	The color used to paint the area around the text has a yellow cast, which gives
	it a slightly different appearance than the window background color.
	
	A brush may be able to represent a wider color range than the solid colors
	because a brush covers an area while a solid color may be used to paint
	nominal-width lines (for example, lines that are one device unit wide) that must
	be the same color at all locations and angles. Therefore, the device-driver
	writer has the option of providing dithered colors for brushes, but has no such
	freedom when it comes to the solid colors for drawing lines.
	
	Additional query words: 3.00 3.10 3.50 4.00 win16sdk
	
	======================================================================
	Keywords          : kbOSWinNT350 kbOSWinNT351 kbOSWinNT400 kbOSWin95 kbSDKWin16 
	Technology        : kbAudDeveloper kbSDKSearch kbWin32sSearch kbWin32API kbWinSDKSearch
	Version           : WINDOWS:3.1,95; winnt:3.5,3.51,4.0
	Issue type        : kbprb
	
	=============================================================================
	
