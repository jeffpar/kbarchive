---
layout: page
title: "Q145925: Japanese Windows 95 Doesn't Support Console Keisen Ruled Lines"
permalink: /kb/145/Q145925/
---

## Q145925: Japanese Windows 95 Doesn't Support Console Keisen Ruled Lines

{% raw %}

	Article: Q145925
	Product(s): Miscellaneous Software Development Kits
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Win32 SDK, Japanese Edition, version 4.0 
	-------------------------------------------------------------------------------
	
	Windows 95 Japanese Edition does not and will not support keisen (ruled
	line) character attributes for the SetConsoleTextAttribute API. Keisen are
	incorporated into Windows NT for OS/2-J console applications compatibility.
	
	These attributes are designed for IBM-J's local video display adapter's
	hardware attribute sets.
	
	The include file Wincon.h includes the keisen attribute settings for
	lead/trail byte, reverse fore/back ground, overline/underline, left and
	right line. However, these attributes are ignored by the Windows 95
	implementation of SetConsoleTextAttribute.
	
	  #define COMMON_LVB_LEADING_BYTE    0x0100 // Leading Byte of DBCS
	  #define COMMON_LVB_TRAILING_BYTE   0x0200 // Tlailing Byte of DBCS
	  #define COMMON_LVB_GRID_HORIZONTAL 0x0400 // DBCS: Grid attribute: top
	                                            // horizontal.
	  #define COMMON_LVB_GRID_LVERTICAL  0x0800 // DBCS: Grid attribute: left
	                                            // vertical.
	  #define COMMON_LVB_GRID_RVERTICAL  0x1000 // DBCS: Grid attribute: right
	                                            // vertical.
	  #define COMMON_LVB_REVERSE_VIDEO   0x4000 // DBCS: Reverse fore/back
	                                            // ground attribute.
	  #define COMMON_LVB_UNDERSCORE      0x8000 // DBCS: Underscore.
	
	Additional query words: 4.00
	
	======================================================================
	Keywords          :  
	Technology        : kbHLangJapanese kbWin32SDKSearch kbAudDeveloper kbSDKSearch kbWin32sSearch kbWin32SDK400
	Version           : :4.0
	
	=============================================================================
	

{% endraw %}
