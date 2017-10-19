---
layout: page
title: "Q71227: INFO: Inverting Color Inverts Palette Index, Not RGB Value"
permalink: /kb/071/Q71227/
---

## Q71227: INFO: Inverting Color Inverts Palette Index, Not RGB Value

	Article: Q71227
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
	
	SUMMARY
	=======
	
	Performing any bitwise logical operator on a color, such as inversion, does not
	modify the color's RGB value; it instead changes the index into the system
	palette. This applies also to the ROP codes associated with the blt functions
	(BitBlt, StretchBlt, and PatBlt) and in the SetRop2 function. For display
	devices with hardware palettes [generally, devices with fewer than 24
	Bits-Per-Pixel (BPP)], this can produce unexpected or undesirable results.
	
	MORE INFORMATION
	================
	
	Suppose the system palette contained the following colors:
	
	                                  Entry #
	
	  Color      0      1      2      3      4      5      6      7
	  -----
	  Red   =    0   0x80      0      0   0x80   0x80      0   0x80
	  Green =    0      0   0x80      0   0x80      0   0x80   0x80
	  Blue  =    0      0      0   0x80      0   0x80   0x80   0x80
	
	                                  Entry #
	
	  Color      8      9      A      B      C      D      E      F
	  -----
	  Red   = 0xC0   0xFF      0      0   0xFF   0xFF      0   0xFF
	  Green = 0xC0      0   0xFF      0   0xFF      0   0xFF   0xFF
	  Blue  = 0xC0      0      0   0xFF      0   0xFF   0xFF   0xFF
	
	The inversion of colors would look like this: (Half = half intensity, Full = full
	intensity)
	
	  Color          Index      Inverse Color   Index
	  -----          -----      -------------   -----
	  Black              0      White               F
	  Half Red           1      Full Cyan           E
	  Half Green         2      Full Magenta        D
	  Half Blue          3      Full Yellow         C
	  Half Yellow        4      Full Blue           B
	  Half Magenta       5      Full Green          A
	  Half Cyan          6      Full Red            9
	  Dark Gray          7      Light Gray          8
	
	This obviously is not the desired effect. Inverting a full-intensity color such
	as red will not invert to full-intensity cyan; instead, it is inverted to
	half-intensity cyan.
	
	This is also true for any logical operations performed on the bits of a bitmap,
	pen, or flood fill through ROP codes. All operations are done on the index of
	the color and not its RGB value.
	
	Note that when using custom palettes on a palette capable device, the application
	does not have control over the precise mapping between logical palette indexes
	and system palette indexes. The results of bitwise logical operations are
	unpredictable in such a case.
	
	The only way for an application to precisely control color mixing is to perform
	the operation on RGB values, then translate the RGB result back into the most
	appropriate palette index.
	
	For example, one way to do this is to mix colors in a 24 BPP Device-Independent
	Bitmap (DIB), then set the DIB bits into the Device Context (DC) again when
	finished. Another method is to query the RGB color of pixels to modify, do the
	mixing, and then use the SetPixel function to apply the change to the DC.
	
	Additional query words: 3.00 3.10 3.50 4.00 win16sdk
	
	======================================================================
	Keywords          : kbOSWinNT350 kbOSWinNT351 kbOSWinNT400 kbOSWin95 kbSDKWin16 
	Technology        : kbAudDeveloper kbSDKSearch kbWin32sSearch kbWin32API kbWinSDKSearch
	Version           : WINDOWS:3.1,95; winnt:3.5,3.51,4.0
	Issue type        : kbinfo
	
	=============================================================================
	
