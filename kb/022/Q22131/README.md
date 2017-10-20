---
layout: page
title: "Q22131: INFO: Using a Different Hardware Font Instead of the Default"
permalink: /kb/022/Q22131/
---

## Q22131: INFO: Using a Different Hardware Font Instead of the Default

{% raw %}

	Article: Q22131
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kb16bitonly _IK kbSDKWin16
	Last Modified: 27-JUN-1999
	
	3.00 3.10
	WINDOWS
	kbprg
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following information describes how to inform Windows that a specific
	hardware font in a display device driver should be used instead of the default
	system font.
	
	In general, an OEM provides an .fon file that contains bitmaps and metric
	information that is appropriate for the display board. This font file is listed
	in the SYSTEM.ini file in the [boot] section as follows:
	
	     fonts.fon=<OEM's .FON file>
	
	At startup, GDI creates the SYSTEM_FONT stock font from this file.
	
	If the display board has a hardware font available, it is possible to force GDI
	to use this font as the SYSTEM_FONT font by creating an .FON file that contains
	no bitmap information and has the third bit (04h) set in the dfType field and
	the absolute address of the hardware font in the dfBitsOffset field in the
	FONTINFO structure contained in the .fon file.
	
	NOTE: It must be possible to draw that same font (or any other hardware fonts
	that are provided within the display device driver) onto main-memory bitmaps.
	GDI has no notion of some fonts being used on the (dedicated) frame buffer and
	other fonts used on host-memory bitmaps. Often, this requires that the hardware
	font be read off of the board and into host memory where the display device
	driver can move the bitmaps onto compatible bitmaps allocated by GDI. Within
	these guidelines, and with that provision in mind, the programmer can feel free
	to provide the system, OEM, and so on, with as many additional fonts as are
	desired (say, from Bitstream, Xiphias, or Conographics).
	
	REFERENCES
	==========
	
	For additional information about how Windows creates stock fonts, please see the
	following article(s) in the Microsoft Knowledge Base:
	
	  Q10837 A Discussion of Windows Fonts
	
	Additional query words: 3.00 3.10
	
	======================================================================
	Keywords          : kb16bitonly _IK kbSDKWin16 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
